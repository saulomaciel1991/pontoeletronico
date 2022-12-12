import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Array<any> = [
    {
      data: '2022-10-03',
      dia: 'Segunda',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      absent: '00:07:00',
      jornada: '08:53:00'
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
      jornada: '09:00:00'
    }
  ];
  itemsAux: Array<any> = [
    {
      data: '2022-10-03',
      dia: 'Segunda',
      PE: '08:12:00',
      PS: '12:10:00',
      SE: '13:29:00',
      SS: '18:24:00',
      absent: '00:07:00',
      jornada: '08:53:00'
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
      jornada: '09:00:00'
    }
  ];

  columns: Array<PoTableColumn> = [
    { property: 'data', type: 'date', width: '6,25%', label: 'Data' },
    { property: 'dia', width: '6,25%', label: 'Dia'},
    { property: 'PE', width: '6,25%', label: '1ª Entrada', type: 'time', format: 'HH:mm'},
    { property: 'PS', width: '6,25%', label: '1ª Saída', type: 'time', format: 'HH:mm' },
    { property: 'SE', width: '6,25%', label: '2ª Entrada', type: 'time', format: 'HH:mm' },
    { property: 'SS', width: '6,25%', label: '2ª Saída', type: 'time', format: 'HH:mm' },
    { property: 'abono', width: '6,25%', label: 'abono'},
    { property: 'HE', width: '6,25%', label: 'Hora Extra', type: 'time', format: 'HH:mm' },
    { property: 'absent', width: '6,25%', label: 'Absent.', type: 'time', format: 'HH:mm' },
    { property: 'jornada', width: '6,25%', label: 'Jornada', type: 'time', format: 'HH:mm' },
    { property: 'obs', width: '6,25%', label: 'Observação'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdvancedSearch(filter:any) {
    console.log(filter)
    filter ? this.items = this.items.filter(item => item.dia == filter.dia) : this.items = this.itemsAux
  }

}
