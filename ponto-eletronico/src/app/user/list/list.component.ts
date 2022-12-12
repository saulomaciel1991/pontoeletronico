import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
import { PontosService } from '../pontos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Array<any> = []

  customLiterals: PoPageDynamicSearchLiterals = {
    searchPlaceholder: 'Pesquisar por dia'
  };

  public readonly filters: Array<PoPageDynamicSearchFilters> = [
    { property: 'data', label: 'Data de', type: 'date', gridColumns: 6 },
    { property: 'dataATE', label: 'Data até', type: 'date', gridColumns: 6 },
    { property: 'dia', label: 'Dia da Semana', gridColumns: 6 }
  ]

  columns: Array<PoTableColumn> = [
    { property: 'data', type: 'date', width: '6,25%', label: 'Data' },
    { property: 'dataATE', type: 'date', width: '6,25%', label: 'Data', visible: false }, //Apenas usado na busca
    { property: 'dia', width: '6,25%', label: 'Dia'},
    { property: 'PE', width: '6,25%', label: '1ª Entrada', type: 'time', format: 'HH:mm'},
    { property: 'PS', width: '6,25%', label: '1ª Saída', type: 'time', format: 'HH:mm' },
    { property: 'SE', width: '6,25%', label: '2ª Entrada', type: 'time', format: 'HH:mm' },
    { property: 'SS', width: '6,25%', label: '2ª Saída', type: 'time', format: 'HH:mm' },
    { property: 'abono', width: '6,25%', label: 'abono'},
    { property: 'HE', width: '6,25%', label: 'Hora Extra', type: 'time', format: 'HH:mm' },
    { property: 'absent', width: '6,25%', label: 'Absent.', type: 'time', format: 'HH:mm' },
    { property: 'jornada', width: '6,25%', label: 'Jornada', type: 'time', format: 'HH:mm' },
    { property: 'obs', width: '6,25%', label: 'Observação'},
    { property: 'matricula', visible: false, type: 'string'}

  ];

  constructor(private pontosService: PontosService) { }

  ngOnInit(): void {
    this.items = this.pontosService.list()
  }

  onAdvancedSearch(filter:any) {
    filter ? this.searchItems(filter) : this.resetFilters()
  }
  onChangeDisclaimers(disclaimers: any) {
    const filter: any = {};
    disclaimers.forEach((item:any) => {
      filter[item.property] = item.value;
    });
    this.searchItems(filter);
  }

  onQuickSearch(filter: any) {
    console.log(filter)
    filter ? this.searchItems({ dia: filter }) : this.resetFilters();
  }

  private resetFilters() {
    this.items = this.pontosService.resetFilters();
  }

  private searchItems(filter: any) {
    this.items = this.pontosService.filter(filter);
  }

}
