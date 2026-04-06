import { Component } from '@angular/core';
import { Curso } from './components/curso/curso';
import { EstudianteComponent } from './components/curso/estudiante';
import { MatriculaComponent } from './components/curso/matricula';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Curso, EstudianteComponent, MatriculaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}