package com.jmmr.matriculas.servicio;

import java.util.List;

import com.jmmr.matriculas.modelo.entidad.Matricula;

public interface IMatriculaServicio {
	
	public Matricula insertarMatricula(Matricula nuevaMatricula);
	public Matricula editarMatricula(int idMatricula);
	public void eliminarMatricula(int idMatricula);
	public List<Matricula> listarMatricula();		

}
