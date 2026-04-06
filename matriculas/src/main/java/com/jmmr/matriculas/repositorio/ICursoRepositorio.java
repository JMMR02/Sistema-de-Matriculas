package com.jmmr.matriculas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.jmmr.matriculas.modelo.entidad.Curso;

@Repository
@Component
public interface ICursoRepositorio extends JpaRepository<Curso, Integer>{

}
