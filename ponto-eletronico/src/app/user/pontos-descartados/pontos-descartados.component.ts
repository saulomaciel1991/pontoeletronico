import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PontosService } from '../pontos.service';

@Component({
  selector: 'app-pontos-descartados',
  templateUrl: './pontos-descartados.component.html',
  styleUrls: ['./pontos-descartados.component.css']
})
export class PontosDescartadosComponent implements OnInit {

  items: Array<any> = []

  columns: Array<PoTableColumn> = [
    { property: 'data', type: 'date', width: '25%', label: 'Data' },
    { property: 'hora', type: 'time', width: '25%', label: 'Hora da Marcação' },
    { property: 'motivo', width: '50%', label: 'Motivo' },
  ];

  constructor(private pontosService: PontosService) { }

  ngOnInit(): void {
    this.items = this.pontosService.listDescartes()
  }

}
