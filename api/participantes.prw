#INCLUDE 'TOTVS.CH'
#INCLUDE 'RESTFUL.CH'

WSRESTFUL participantes DESCRIPTION 'Manipulacao de Clientes'
	Self:SetHeader('Access-Control-Allow-Credentials' , "true")

	//Criação dos Metodos
	WSMETHOD GET DESCRIPTION 'Listar todos os Participantes' WSSYNTAX '/participantes' PATH '/'
	// WSMETHOD GET numero DESCRIPTION 'Buscar participante selecionado' WSSYNTAX '/participantes/{numero}' PATH '/participantes/{numero}'

END WSRESTFUL

WSMETHOD GET WSSERVICE participantes

	//http://localhost:8090/rest/participantes/?cpf=00976379473&senha=123456
	Local aAreaRD0 := RD0->(GetArea())
	Local cResponse := JsonObject():New()
	Local lRet := .T.
	Local aDados := {}
	Local aParams := Self:AQueryString
	Local cCpf := ""
	Local cSenha := ""
	Local nRD0Reg := 0
	Local nPosId := aScan(aParams,{|x| x[1] == "CPF"})
	Local nPosSen := aScan(aParams,{|x| x[1] == "SENHA"})

	If nPosId > 0 .AND. nPosSen > 0
		cCpf := aParams[nPosId,2]
		cSenha := aParams[nPosSen,2]
		cSenha := arrumaSenha(cSenha)
	EndIf

	BEGINSQL ALIAS 'TRD0'
		SELECT
			RD0.R_E_C_N_O_
		FROM %Table:RD0% AS RD0
		WHERE
			RD0.%NotDel%
			AND RD0_CIC = %exp:cCpf%
			AND RD0_SENHA = %exp:cSenha%
			AND RD0_MSBLQL = '2'
	ENDSQL
	
	If !TRD0->(Eof())
		nRD0Reg := TRD0->R_E_C_N_O_
	EndIf
	TRD0->(DbCloseArea())

	RD0->(DbSetOrder(1))
	RD0->(DbGoTo(nRD0Reg))

	If !RD0->(Eof())
		Aadd(aDados, JsonObject():new())
		nPos := Len(aDados)
		cResponse['filial' ] := AllTrim(RD0->RD0_FILIAL)
		cResponse['codigo' ] := AllTrim(RD0->RD0_CODIGO)
		cResponse['nome' ] := AllTrim(RD0->RD0_NOME)
		cResponse['cpf' ] := AllTrim(RD0->RD0_CIC)
		cResponse['hasContent'] := .T.
	EndIf

	If nRD0Reg == 0
		SetRestFault(204, "Nenhum registro encontrado!")
		lRet := .F.
	EndIf

	Self:SetContentType('application/json')
	Self:SetResponse(EncodeUTF8(cResponse:toJson()))
	RD0->(RestArea(aAreaRD0))
Return lRet

Static Function arrumaSenha(senha)
	Local cSenhaCorr := ''
	Local aTam := Len(senha)
	Local nPosLetra := 0
	Local aLetras := {}

	For nPosLetra := 1 to aTam
		Aadd(aLetras, SubStr(senha, nPosLetra, 1))
	Next

	cSenhaCorr := aLetras[2]+aLetras[4]+aLetras[6]+aLetras[1]+aLetras[3]+aLetras[5]
Return cSenhaCorr

