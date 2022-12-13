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
