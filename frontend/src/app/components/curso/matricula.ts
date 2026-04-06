import { CommonModule } from "@angular/common";
import { CursoService } from "../../services/curso";
import { EstudianteService } from "../../services/estudianteservice";
import { MatriculaService } from "../../services/matricula";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matricula.html',
  styleUrls: []
})
export class MatriculaComponent implements OnInit {

  matriculas: any[] = [];
  estudiantes: any[] = [];
  cursos: any[] = [];

  matricula = {
    fkIdCurso: { idCurso: 0 },
    fkIdEstudiante: { idEstudiante: 0 },
    fechaMatricula: new Date(),
    descripcionMatricula: ''
  };

  constructor(
    private matriculaService: MatriculaService,
    private estudianteService: EstudianteService,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.cargarMatriculas();
    this.cargarEstudiantes();
    this.cargarCursos();
  }

  cargarMatriculas() {
    this.matriculaService.getMatriculas().subscribe(
      (res: any) => this.matriculas = res,
      (err) => console.error(err)
    );
  }

  cargarEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe(
      (res: any) => this.estudiantes = res,
      (err) => console.error(err)
    );
  }

  cargarCursos() {
    this.cursoService.getCursos().subscribe(
      (res: any) => this.cursos = res,
      (err: any) => console.error(err)
    );
  }

  guardar(form: any) {

    console.log("MATRICULA:", this.matricula);

    if (
      !this.matricula.fkIdCurso.idCurso ||
      !this.matricula.fkIdEstudiante.idEstudiante
    ) {
      alert('Debes seleccionar curso y estudiante');
      return;
    }

    this.matriculaService.addMatricula(this.matricula).subscribe(
      () => {
        alert('Matrícula registrada');

        form.resetForm();

        this.matricula = {
          fkIdCurso: { idCurso: 0 },
          fkIdEstudiante: { idEstudiante: 0 },
          fechaMatricula: new Date(),
          descripcionMatricula: ''
        };

        this.cargarMatriculas();
      },
      (err) => console.error(err)
    );
  }
}