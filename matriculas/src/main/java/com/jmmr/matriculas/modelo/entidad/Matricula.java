package com.jmmr.matriculas.modelo.entidad;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Matricula implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMatricula;

    private Date fechaMatricula;
    private String descripcionMatricula;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_id_curso")
    private Curso fkIdCurso;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_id_estudiante")
    private Estudiante fkIdEstudiante;
}
