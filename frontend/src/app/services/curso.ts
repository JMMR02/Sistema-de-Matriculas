import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso as CursoModel } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {

  URL_API = 'http://localhost:8080/api/curso';

  constructor(private http: HttpClient) {}

  cursos: CursoModel[] = [];

  getCursos() {
    return this.http.get<CursoModel[]>(this.URL_API);
  }

  addCurso(curso: CursoModel) {
    return this.http.post<CursoModel>(this.URL_API, curso);
  }

  updateCurso(curso: CursoModel) {
  return this.http.put(`${this.URL_API}/${curso.idCurso}`, curso);
}

  deleteCurso(id: number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  
}