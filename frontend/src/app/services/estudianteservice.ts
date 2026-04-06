import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso as CursoModel } from '../models/curso';

@Injectable({ providedIn: 'root' })
export class EstudianteService {

  URL_API = 'http://localhost:8080/api/estudiante';

  constructor(private http: HttpClient) {}

  getEstudiantes() {
    return this.http.get<any[]>(this.URL_API);
  }

  addEstudiante(est: any) {
    return this.http.post(this.URL_API, est);
  }

  deleteEstudiante(id: number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  getEstudiante(id: number) {
    return this.http.get(`${this.URL_API}/${id}`);
  }
}