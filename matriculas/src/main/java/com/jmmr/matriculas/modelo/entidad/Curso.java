package com.jmmr.matriculas.modelo.entidad;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.ToString;

@Entity
@Data

public class Curso implements Serializable{/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCurso;
	private String nombreCurso;
	private String descripcionCurso;
	private String estadoCurso;	
	
	@ToString.Exclude
	@OneToMany(mappedBy = "fkIdCurso", cascade = CascadeType.REFRESH)
	@JsonBackReference
	private List<Matricula>listaMatricula = new ArrayList<>() ;
}


