import { Curso } from "./curso";
import { Estudiante } from "./estudiante";

export interface Matricula {
  id?: number;
  fkIdCurso: Curso;
  fkIdEstudiante: Estudiante;
  fechaMatricula: Date;
  estado: string;
}