import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  items: Array<any> = [
    {
      data: '2022-10-03',
      dia: 'Segunda',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      absent: '00:07:00',
      jornada: '08:53:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-04',
      dia: 'Terça',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '00:30:54',
      absent: '00:07:00',
      jornada: '09:00:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-03',
      dia: 'Quarta',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '00:45:00',
      absent: '00:07:00',
      jornada: '08:53:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-04',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    },
    {
      data: '2022-10-05',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    },
    {
      data: '2022-10-06',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    },{
      data: '2022-10-03',
      dia: 'Segunda',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      absent: '00:07:00',
      jornada: '08:53:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-04',
      dia: 'Terça',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '00:30:54',
      absent: '00:07:00',
      jornada: '09:00:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-03',
      dia: 'Quarta',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '00:45:00',
      absent: '00:07:00',
      jornada: '08:53:00',
      matricula: '1201 - 000028'
    },
    {
      data: '2022-10-04',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    },
    {
      data: '2022-10-05',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    },
    {
      data: '2022-10-06',
      dia: 'Quinta',
      PE: '08:00:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      HE: '',
      absent: '00:12:00',
      jornada: '09:00:00',
      matricula: '1 - 000028'
    }
  ];


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

  constructor() { }


  public list(){
    return this.items
  }

  public listDescartes(){
    return this.descarte
  }
  
  public listHorarios(){
    return this.horarios
  }
  public listResumo(){
    return this.resumo
  }

  public resetFilters(){
    return [...this.list()]
  }

  filter(filters: any) {
    let filteredItems = [...this.list()];

    let start = filters.data
    let end = filters.dataATE

    Object.keys(filters).forEach(filter => {
      filteredItems = filteredItems.filter(pontos => {
        if (filter == 'dia' || end === undefined) {
          return pontos[filter].toLocaleLowerCase().includes(filters[filter].toLocaleLowerCase());
        } else {
            if (filter == 'data'){
              return (pontos[filter] >= start && pontos[filter] <= end)
            }else{
              return (pontos['data'] <= end)
            }
          //return pontos[filter] === filters[filter];
        }
      });
    });

    return filteredItems;
  }
}
