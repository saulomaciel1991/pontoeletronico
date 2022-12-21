#INCLUDE 'TOTVS.CH'
#INCLUDE 'RESTFUL.CH'

WSRESTFUL funcionarios DESCRIPTION 'Manipulação de funcionarios'
	Self:SetHeader('Access-Control-Allow-Credentials' , "true")

	//Criação dos Metodos
	WSMETHOD GET matricula DESCRIPTION 'Buscar funcionario pela matricula' WSSYNTAX '/api/rh/v1/funcionarios' ;
    PATH '/api/rh/v1/funcionarios'

END WSRESTFUL

WSMETHOD GET matricula WSSERVICE funcionarios
	Local cResponse := JsonObject():New()
	Local lRet := .T.
	Local aDados := {}
	Local aUrlParams := Self:aUrlParms
	Local cId := aUrlParams[1]

	aDados := getArrFun(cId)
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
	Local areaSRA := SRA->(GetArea())
	Local aDados := {}

	SRA->(DbSetOrder(5))  //RA_FILIAL + RA_CIC 	CPF
	If SRA->(MsSeek(xFilial("SRA")) + cId )
		While !SRA->(Eof()) .AND. SRA->RA_CIC == cId
			Aadd(aDados, JsonObject():new())
			nPos := Len(aDados)
			aDados[nPos]['matricula' ] := AllTrim(SRA->RA_MAT)
			aDados[nPos]['nome' ] := AllTrim(SRA->RA_NSOCIAL)
			aDados[nPos]['admissao' ] := AllTrim(SRA->RA_ADMISSA)
			aDados[nPos]['funcao' ] := AllTrim(SRA->RA_DESCFUN)
            aDados[nPos]['cc' ] := AllTrim(SRA->RA_CC)
            aDados[nPos]['cpf' ] := AllTrim(SRA->RA_CIC )
            aDados[nPos]['categoria' ] := AllTrim(SRA->RA_CATFUNC )
            aDados[nPos]['situacao' ] := AllTrim(SRA->RA_SITFOLH )
            aDados[nPos]['departamento' ] := AllTrim(SRA->RA_DDEPTO  )
			// aDados[nPos]['operacao' ] := 1

			SRA->(DbSkip())
		EndDo
	EndIf

	RestArea(aArea)
	SRA->(RestArea(areaSRA))
Return aDados
