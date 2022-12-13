import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public readonly menus: Array<PoMenuItem> = [
    { label: 'Dados do Funcionário', link: '/user/info', icon: "po-icon-user", shortLabel: 'Info' },
    { label: 'Pontos', link: '/user/list', icon: "po-icon-calendar-ok", shortLabel: 'Pontos' },
    { label: 'Alterar Senha', link: '/user/edit' , icon: "po-icon-edit", shortLabel: 'Senha' }
  ];

  ngOnInit(): void {
  }

}
