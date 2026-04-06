package com.jmmr.matriculas.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmmr.matriculas.modelo.entidad.Curso;
import com.jmmr.matriculas.modelo.entidad.Estudiante;
import com.jmmr.matriculas.modelo.entidad.Matricula;
import com.jmmr.matriculas.servicio.ICursoServicio;
import com.jmmr.matriculas.servicio.IEstudianteServicio;
import com.jmmr.matriculas.servicio.IMatriculaServicio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/matricula")
public class MatriculaControlador {

	@Autowired
	private IMatriculaServicio servicioMatricula;
	
	@Autowired
	private ICursoServicio servicioCurso;
	
	@Autowired
	private IEstudianteServicio servicioEstudiante;
	
	@GetMapping
	public List <Matricula> listarMatricula(){
		return servicioMatricula.listarMatricula();
	}
	
	@PostMapping
	public Matricula insertarMatricula(@RequestBody Matricula matricula) {

	    try {

	        if (matricula.getFkIdCurso() == null || 
	            matricula.getFkIdEstudiante() == null) {
	            throw new RuntimeException("Falta curso o estudiante");
	        }

	        int idCurso = matricula.getFkIdCurso().getIdCurso();
	        int idEstudiante = matricula.getFkIdEstudiante().getIdEstudiante();

	        if (idCurso <= 0 || idEstudiante <= 0) {
	            throw new RuntimeException("IDs inválidos");
	        }

	        Curso curso = servicioCurso.editarCurso(idCurso);
	        Estudiante estudiante = servicioEstudiante.editarEstudiante(idEstudiante);

	        if (curso == null) {
	            throw new RuntimeException("El curso no existe");
	        }

	        if (estudiante == null) {
	            throw new RuntimeException("El estudiante no existe");
	        }

	        matricula.setFkIdCurso(curso);
	        matricula.setFkIdEstudiante(estudiante);

	        return servicioMatricula.insertarMatricula(matricula);

	    } catch (Exception e) {
	        e.printStackTrace();
	        throw new RuntimeException("Error al registrar matrícula: " + e.getMessage());
	    }
	}
}