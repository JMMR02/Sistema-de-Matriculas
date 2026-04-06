package com.jmmr.matriculas.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmmr.matriculas.modelo.entidad.Estudiante;
import com.jmmr.matriculas.servicio.IEstudianteServicio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/estudiante")
public class EstudianteControlador {

	@Autowired
	private IEstudianteServicio servicioEstudiante;
	
	@GetMapping
	public List <Estudiante> listarEstudiante(){
		return servicioEstudiante.listarEstudiante();
	}
	
	@PostMapping
	public Estudiante crearEstudiante(@RequestBody Estudiante estudiante) {
		return servicioEstudiante.insertarEstudiante(estudiante);		
	}	
	
	@GetMapping("/{id}")
	public Estudiante editarEstudiante(@PathVariable int id) {
		return servicioEstudiante.editarEstudiante(id);				
	}
	
	@DeleteMapping("/{id}")
	public void eliminarEstudiante(@PathVariable int id) {
		servicioEstudiante.eliminarEstudiante(id);
		
	}
	
}
