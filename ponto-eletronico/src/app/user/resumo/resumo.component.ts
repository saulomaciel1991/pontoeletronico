import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PontosService } from '../pontos.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  items: Array<any> = []

  columns: Array<PoTableColumn> = [
    { property: 'codigo', type: 'string', label: 'Código' },
    { property: 'descricao', width: '14,625%', label: 'Descrição', type: 'string' },
    { property: 'calculo', width: '14,625%', label: 'Calc.', type: 'number'},
    { property: 'inform', width: '14,625%', label: 'Inform.', type: 'number' },


  ];


  constructor(private pontosService: PontosService) { }

  ngOnInit(): void {
    this.items = this.pontosService.listResumo()
  }

}
