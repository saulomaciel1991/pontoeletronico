import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PontosService } from '../pontos.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  items: Array<any> = []

  columns: Array<PoTableColumn> = [
    { property: 'data', type: 'date', width: '12,5%', label: 'Data' },
    { property: '1E', width: '14,625%', label: '1ª Entrada', type: 'time', format: 'HH:mm' },
    { property: '1S', width: '14,625%', label: '1ª Saída', type: 'time', format: 'HH:mm' },
    { property: '2E', width: '14,625%', label: '2ª Entrada', type: 'time', format: 'HH:mm' },
    { property: '2S', width: '14,625%', label: '2ª Saída', type: 'time', format: 'HH:mm' },
    { property: 'turno', width: '25%', label: 'Turno' },
    { property: 'matricula', visible: false, type: 'string' }

  ];

  constructor(private pontosService: PontosService) { }

  ngOnInit(): void {
  }
}
