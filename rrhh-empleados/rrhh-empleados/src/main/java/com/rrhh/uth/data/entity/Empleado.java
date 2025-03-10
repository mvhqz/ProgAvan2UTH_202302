package com.rrhh.uth.data.entity;

import java.text.DecimalFormat;
import java.time.LocalTime;

public class Empleado extends AbstractEntity {

    private String nombre;
    private String identidad;
    private Integer sueldo;
    private String telefono;
    private LocalTime horarioInicio;
    private LocalTime horarioFin;
    private Long puesto;

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getIdentidad() {
        return identidad;
    }
    public void setIdentidad(String identidad) {
        this.identidad = identidad;
    }
    public Integer getSueldo() {
        return sueldo;
    }
    public void setSueldo(Integer sueldo) {
        this.sueldo = sueldo;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
   
	public LocalTime getHorarioInicio() {
		return horarioInicio;
	}
	public void setHorarioInicio(LocalTime horarioInicio) {
		this.horarioInicio = horarioInicio;
	}
	public LocalTime getHorarioFin() {
		return horarioFin;
	}
	public void setHorarioFin(LocalTime horarioFin) {
		this.horarioFin = horarioFin;
	}
	public Long getPuesto() {
		return puesto;
	}
	public void setPuesto(Long puesto) {
		this.puesto = puesto;
	}

   public String consultarNombreYSalario() {
	   DecimalFormat formato = new DecimalFormat("#,###.00");
	   return this.nombre+" -> L. "+formato.format(this.sueldo);
   }

}
