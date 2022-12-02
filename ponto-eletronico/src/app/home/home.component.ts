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
    { label: 'Marcação de Pontos', icon: "po-icon-device-desktop" },
    { label: 'Alterar Senha', icon: "po-icon-database" }
  ];

  ngOnInit(): void {
  }

}
