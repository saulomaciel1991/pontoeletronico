import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabecalhoService {

  cabecalho = {}

  constructor() { }

  setHeader(header: any){
    this.cabecalho = header
  }

  getHeader(){
    return this.cabecalho
  }
}
