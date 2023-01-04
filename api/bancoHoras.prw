#INCLUDE 'TOTVS.CH'
#INCLUDE 'RESTFUL.CH'

WSRESTFUL bh DESCRIPTION 'Consulta do Banco de Horas'
	Self:SetHeader('Access-Control-Allow-Credentials' , "true")

	//Criação dos Metodos
	WSMETHOD GET DESCRIPTION 'Buscar banco de horas pelo funcionario' WSSYNTAX '/bh/' PATH '/bh/'

END WSRESTFUL

WSMETHOD GET WSSERVICE bh
	// http://localhost:8090/rest/bh/?FILIAL=01&MATRICULA=000028&DTINICIAL=20221001&DTFINAL=20221031
	// http://192.168.41.60:8090/rest/bh/?FILIAL=01&MATRICULA=000028&DTINICIAL=20221001&DTFINAL=20221031
	Local cResponse := JsonObject():New()
	Local lRet := .T.
	Local aParams := Self:AQueryString
	Local nPosFilial := aScan(aParams,{|x| x[1] == "FILIAL"})
	Local nPosMatricula := aScan(aParams,{|x| x[1] == "MATRICULA"})
	Local nPosDtIni := aScan(aParams,{|x| x[1] == "DTINICIAL"})
	Local nPosDtFin := aScan(aParams,{|x| x[1] == "DTFINAL"})
	Local cMatricula := cFilAtuacao := cDtInicial := cDtFinal := ""
	Local nSomaCreditos := 0
	Local nSomaDebitos := 0
	Local lDados := .F.

	If nPosMatricula > 0 .AND. nPosFilial > 0 .AND. nPosDtIni > 0 .AND. nPosDtFin > 0
		cFilAtuacao := aParams[nPosFilial,2]
		cMatricula := aParams[nPosMatricula,2]
		cDtInicial := aParams[nPosDtIni,2]
		cDtFinal := aParams[nPosDtFin,2]
	EndIf

	BEGINSQL ALIAS 'TSPI'
		SELECT
			SPI.*, SP9.*
		FROM %Table:SPI% AS SPI
		INNER JOIN %Table:SP9% AS SP9 ON SPI.PI_PD = SP9.P9_CODIGO
		WHERE
			SPI.%NotDel% AND SP9.%NotDel%
			AND SPI.PI_FILIAL = %exp:cFilAtuacao%
			AND SPI.PI_MAT = %exp:cMatricula%
			AND SPI.PI_DATA BETWEEN %exp:cDtInicial% AND %exp:cDtFinal%
	ENDSQL

	// While !TSPI->(Eof())
	// 	If Val(TSPI->P9_TIPOCOD) == 1
	// 		nSomaCreditos += TSPI->PI_QUANT
	// 	EndIf
	// 	If Val(TSPI->P9_TIPOCOD) == 2
	// 		nSomaDebitos += TSPI->PI_QUANT
	// 	EndIf
	// 	TSPI->(DbSkip())
	// EndDo

	If 2 > 1
		lDados := .T.
		cResponse['saldoAnterior'] := ConvertHora(10)
		cResponse['totalDebitos'] := ConvertHora(2)
		cResponse['totalCreditos'] := ConvertHora(4)
		cResponse['saldoAtual'] := ConvertHora(12)
	EndIf
	TSPI->(DbCloseArea())

	If !lDados	//SetRestFault(204, "Nenhum registro encontrado!")
		cResponse['code'] := 204
		cResponse['message'] := 'Banco de Horas não encontrado para esse funcionario'
		lRet := .F.
	EndIf

	Self:SetContentType('application/json')
	Self:SetResponse(EncodeUTF8(cResponse:toJson()))
Return lRet

Static Function ConvertHora(nHora)
	Local cHora := CValToChar(nHora)

	If Len(cHora) == 1
		cHora := "0"+cHora+".00"
	EndIf

	If Len(cHora) == 2
		cHora := cHora+".00"
	EndIf

	If Len(cHora) == 3
		cHora := "0"+cHora+"0"
	EndIf

	If Len(cHora) == 4
		If SubStr(cHora, 2, 1) == "."
			cHora := "0"+cHora
		Else
			cHora := cHora+"0"
		EndIf
	EndIf

	If Len(cHora) == 5
		cHora := STRTRAN(cHora,".",":") + ":00"
	Else
		cHora := "00:00:00"
	EndIf
Return cHora

Static Function DiaExtenso(nDia)
	Local cDia
	nDia := Val(nDia)

	If nDia == 1
		cDia := "Domingo"
	EndIf
	If nDia == 2
		cDia := "Segunda"
	EndIf
	If nDia == 3
		cDia := "Terça"
	EndIf
	If nDia == 4
		cDia := "Quarta"
	EndIf
	If nDia == 5
		cDia := "Quinta"
	EndIf
	If nDia == 6
		cDia := "Sexta"
	EndIf
	If nDia == 7
		cDia := "Sábado"
	EndIf
Return cDia
