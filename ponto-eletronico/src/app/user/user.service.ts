import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

const auth = environment.authorization

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': auth,
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCPF = ''
  filatu = ''
  matricula = ''
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  public login(formData: any): Observable<any> {
    return this.http.get<any>(this.apiURL + `/participantes/?cpf=${formData.login}&senha=${formData.password}`, httpOptions).pipe(
      map((resposta: any) => resposta)
    );
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.apiURL + `/funcionarios/?cpf=${this.userCPF}`, httpOptions).pipe(
      map((resposta: any) => resposta)
    );
  }

  public getFilial(): Observable<any> {
    return this.http.get<any>(this.apiURL + `/filiais/?filial=${this.filatu}`, httpOptions).pipe(
      map((resposta: any) => resposta)
    );
  }

  public getUserCPF(){
    return this.userCPF
  }

  public altPassword(senhaAtual: string, novaSenha: string) {
    let body = {
      cpf: this.userCPF,
      senhaAtual : senhaAtual,
      novaSenha: novaSenha
    }
    return this.http.put<any>(this.apiURL + '/participantes/', JSON.stringify(body), httpOptions).pipe(take(1))

  }
}
