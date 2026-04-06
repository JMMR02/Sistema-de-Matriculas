import { Component } from '@angular/core';
import { CursoService as CursoService } from '../../services/curso';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso as CursoModel } from '../../models/curso';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './curso.html',
  styleUrls: ['./curso.css'],
})
export class Curso {

  cursoSeleccionado: CursoModel = {
    idCurso: 0,
    nombreCurso: '',
    descripcionCurso: '',
    estadoCurso: ''
  };

  constructor(public cursoService: CursoService) {}

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe(
      res => {
        this.cursoService.cursos = res;
      },
      err => console.log(err)
    );
  }

  guardarCurso(form: NgForm) {
    if (this.cursoSeleccionado.idCurso) {
      // EDITAR
      this.cursoService.updateCurso(this.cursoSeleccionado).subscribe(
        res => {
          this.getCursos();
          this.limpiar(form);
        },
        err => console.error(err)
      );
    } else {
      // CREAR
      this.cursoService.addCurso(form.value).subscribe(
        res => {
          this.getCursos();
          this.limpiar(form);
        },
        err => console.error(err)
      );
    }
  }

  editarCurso(curso: CursoModel) {
    this.cursoSeleccionado = { ...curso };
  }

  eliminarCurso(id: number) {
    if (confirm('¿Seguro que deseas eliminar este curso?')) {
      this.cursoService.deleteCurso(id).subscribe(
        res => {
          this.getCursos();
        },
        err => console.error(err)
      );
    }
  }

  limpiar(form: NgForm) {
    form.reset();
    this.cursoSeleccionado = {
      idCurso: 0,
      nombreCurso: '',
      descripcionCurso: '',
      estadoCurso: ''
    };
  }
}