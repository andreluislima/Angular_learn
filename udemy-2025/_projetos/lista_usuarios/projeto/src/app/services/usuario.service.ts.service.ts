import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuarioServiceTsService {
  private Url = 'http://localhost:8080/api/usuarios/getAllUsuarios';

  constructor(private http: HttpClient) {}

  getUsuarios():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.Url);
  }
}
