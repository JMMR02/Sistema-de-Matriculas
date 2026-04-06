import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EstudianteService } from "../../services/estudianteservice";

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante.html',
  styleUrls: []
})
export class EstudianteComponent implements OnInit {

  estudiantes: any[] = [];

  estudiante = {
    idEstudiante: 0,
    nombreEstudiante: '',
    apellidoEstudiante: '',
    emailEstudiante: '',
    direccionEstudiante: '',
    celularEstudiante: '',
    estadoEstudiante: 'ACTIVO'
  };

  constructor(private service: EstudianteService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.service.getEstudiantes().subscribe(
      (res: any) => {
        this.estudiantes = res;
      },
      (err) => console.error(err)
    );
  }

  guardar(form: any) {

    console.log(this.estudiante); // 🔥 DEBUG

    this.service.addEstudiante(this.estudiante).subscribe(
      () => {
        alert('Estudiante guardado');
        this.reset(form);
        this.cargar();
      },
      (err) => console.error(err)
    );
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este estudiante?')) {
      this.service.deleteEstudiante(id).subscribe(
        () => {
          this.cargar();
        },
        (err) => console.error(err)
      );
    }
  }

  editar(est: any) {
    this.estudiante = { ...est };
  }

  reset(form: any) {
    form.resetForm();
    this.estudiante = {
      idEstudiante: 0,
      nombreEstudiante: '',
      apellidoEstudiante: '',
      emailEstudiante: '',
      direccionEstudiante: '',
      celularEstudiante: '',
      estadoEstudiante: 'ACTIVO'
    };
  }
}