import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  ajouternouveauJeu(nouveauJeu: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5000/api/jeux';

  constructor(private http: HttpClient) { }

  getJeux(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
