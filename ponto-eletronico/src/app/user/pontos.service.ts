import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

const auth = environment.authorization

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': auth,
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  apiURL = environment.apiURL;


  descarte: Array<any> = [
    {
      data: '2022-10-03',
      hora: '18:24:00',
      motivo: 'EXCLUSÃO MANUAL'
    }
  ]

  horarios: Array<any> = [
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
    {
      data: '2022-10-01',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      turno: '001 - 08:00 12:00/13:00 18:00'
    },
  ]

  resumo: Array<any> = [
    {
      codigo: '001',
      descricao: 'HORAS NORMAIS',
      calculo: 159.29,
      inform: 0.00
    },
    {
      codigo: '014',
      descricao: 'SAIDA ANTECIPADA',
      calculo: 7.29,
      inform: 0.00
    }
  ]

  constructor(private userService: UserService, private http: HttpClient) { }


  public list(dtini?: string, dtfin?: string) {
    let filial = this.userService.filatu
    let mat = this.userService.matricula
    let url = ''
    if (dtini == undefined && dtfin == undefined)
      url = this.apiURL+ `/marcacoes/?filial=${filial}&matricula=${mat}`
    else
      url = this.apiURL+ `/marcacoes/?filial=${filial}&matricula=${mat}&dtinicial=${dtini}&dtfinal=${dtfin}`

    return this.http.get<any>(url, httpOptions,  ).pipe(
      map((resposta: any) => resposta)
    );
  }

  public listDescartes() {
    return this.descarte
  }

  public listHorarios() {
    return this.horarios
  }
  public listResumo() {
    return this.resumo
  }
}
