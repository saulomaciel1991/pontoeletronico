#INCLUDE 'TOTVS.CH'
#INCLUDE 'RESTFUL.CH'

WSRESTFUL funcionarios DESCRIPTION 'Manipulação de funcionarios'
	Self:SetHeader('Access-Control-Allow-Credentials' , "true")

	//cpf para teste 333.980.338-22

	//Criação dos Metodos
	WSMETHOD GET DESCRIPTION 'Listar todos os funcionarios' WSSYNTAX '/funcionarios/' PATH '/'
	WSMETHOD GET cpf DESCRIPTION 'Buscar funcionario pela matricula' WSSYNTAX '/funcionarios/{cpf}' ;
		PATH '/funcionarios/{cpf}'

END WSRESTFUL

WSMETHOD GET WSSERVICE funcionarios
	Local aAreaSRA := SRA->(GetArea())
	Local cResponse := JsonObject():New()
	Local lRet := .T.
	Local aDados := {}

	SRA->(DbSetOrder(1))
	SRA->(DbGoTop())

	While !SRA->(Eof())
		Aadd(aDados, JsonObject():new())
		nPos := Len(aDados)
		aDados[nPos]['matricula' ] := AllTrim(SRA->RA_MAT)
		aDados[nPos]['nome' ] := AllTrim(SRA->RA_NSOCIAL)
		aDados[nPos]['admissao' ] := AllTrim(SRA->RA_ADMISSA)
		//aDados[nPos]['funcao' ] := AllTrim(SRA->RA_DESCFUN)
		aDados[nPos]['cc' ] := AllTrim(SRA->RA_CC)
		aDados[nPos]['cpf' ] := AllTrim(SRA->RA_CIC )
		aDados[nPos]['categoria' ] := AllTrim(SRA->RA_CATFUNC )
		aDados[nPos]['situacao' ] := AllTrim(SRA->RA_SITFOLH )
		//aDados[nPos]['departamento' ] := AllTrim(SRA->RA_DDEPTO  )

		SRA->(DbSkip())
	EndDo

	cResponse['items'] := aDados
	cResponse['hasNext'] := .F.

	Self:SetContentType('application/json')
	Self:SetResponse(EncodeUTF8(cResponse:toJson()))
	SA1->(RestArea(aAreaSRA))
Return lRet

WSMETHOD GET cpf WSSERVICE funcionarios
	Local cResponse := JsonObject():New()
	Local lRet := .T.
	Local aDados := {}
	Local aUrlParams := Self:aUrlParms
	Local cId := aUrlParams[1]
	aDados := getArrFun(cvaltochar(cId))

	If Len(aDados) == 0
		SetRestFault(204, "Nenhum registro encontrado!")
		lRet := .F.
	Else
		cResponse:set(aDados)
	EndIf

	Self:SetContentType('application/json')
	Self:SetResponse(EncodeUTF8(cResponse:toJson()))
Return lRet

Static Function getArrFun(cId)
	Local aArea := GetArea()
	Local aAreaSRA := SRA->(GetArea())
	Local aDados := {}

	SRA->(DbSetOrder(5))  //RA_FILIAL + RA_CIC 	CPF
	If SRA->(MsSeek(xFilial("SRA")+cId))
		While !SRA->(Eof()) .AND. SRA->RA_CIC == cId
			Aadd(aDados, JsonObject():new())
			nPos := Len(aDados)
			aDados[nPos]['matricula' ] := AllTrim(SRA->RA_MAT)
			aDados[nPos]['nome' ] := AllTrim(SRA->RA_NOME)
			/* aDados[nPos]['admissao' ] := AllTrim(SRA->RA_ADMISSA)
			aDados[nPos]['funcao' ] := AllTrim(SRA->RA_DESCFUN)
			aDados[nPos]['cc' ] := AllTrim(SRA->RA_CC)
			aDados[nPos]['cpf' ] := AllTrim(SRA->RA_CIC )
			aDados[nPos]['categoria' ] := AllTrim(SRA->RA_CATFUNC )
			aDados[nPos]['situacao' ] := AllTrim(SRA->RA_SITFOLH )
			aDados[nPos]['departamento' ] := AllTrim(SRA->RA_DDEPTO  )
			// aDados[nPos]['operacao' ] := 1 */

			SRA->(DbSkip())
		EndDo
	EndIf

	RestArea(aArea)
	SRA->(RestArea(aAreaSRA))
Return aDados
