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
public class Estudiante implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idEstudiante;
	private String nombreEstudiante;
	private String apellidoEstudiante;
	private	String emailEstudiante;
	private String direccionEstudiante;
	private String celularEstudiante;
	private String estadoEstudiante; 
	
	@ToString.Exclude
	@OneToMany(mappedBy = "fkIdEstudiante", cascade = CascadeType.REFRESH)
	@JsonBackReference
	private List<Matricula>listaMatricula = new ArrayList<>() ;


}
