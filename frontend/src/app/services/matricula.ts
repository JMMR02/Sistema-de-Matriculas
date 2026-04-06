import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Matricula {
  idMatricula?: number;
  fkIdCurso: {
    idCurso: number;
  };
  fkIdEstudiante: {
    idEstudiante: number;
  };
}

@Injectable({ providedIn: 'root' })
export class MatriculaService {

  URL_API = 'http://localhost:8080/api/matricula';

  constructor(private http: HttpClient) {}

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.URL_API);
  }

  addMatricula(matricula: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(this.URL_API, matricula);
  }
}