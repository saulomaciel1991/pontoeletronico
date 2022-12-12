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
    }
  ];

  constructor() { }


  public list(){
    return this.items
  }

  public resetFilters(){
    return [...this.list()]
  }

  filter(filters: any) {
    let filteredItems = [...this.list()];

    /*  Guarda a data final (se existir) para ser usada mais tarde
        e deleta da lista de filtros pois os pontos não possuem um data final */
    let end = filters.dataATE
    delete filters.dataATE

    Object.keys(filters).forEach(filter => {
      filteredItems = filteredItems.filter(pontos => {
        if (typeof pontos[filter] === 'string') {
          if (filter == 'data' && end != undefined){
            return (pontos[filter] >= filters[filter] && pontos[filter] <= end)
          }
          return pontos[filter].toLocaleLowerCase().includes(filters[filter].toLocaleLowerCase());
        } else {
          return pontos[filter] === filters[filter];
        }
      });
    });

    return filteredItems;
  }
}
