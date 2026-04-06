package com.jmmr.matriculas.servicio;

import java.util.List;

import com.jmmr.matriculas.modelo.entidad.Estudiante;

public interface IEstudianteServicio {
	
	public Estudiante insertarEstudiante(Estudiante nuevoEstudiante);	
	public Estudiante editarEstudiante(int id);
	public void eliminarEstudiante(int idEstudiante);
	public List<Estudiante> listarEstudiante();	
	
}
