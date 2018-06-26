
export const grupos = {
  AGREGAR_FECHA_INICIO: 'AGREGAR_FECHA_INICIO',
  AGREGAR_FECHA_FIN: 'AGREGAR_FECHA_FIN',
  AGREGAR_ALUMNO: 'AGREGAR_ALUMNO',
  AGREGAR_ALUMNOS: 'AGREGAR_ALUMNOS',
  ELIMINAR_ALUMNO: 'ELIMINAR_ALUMNO',
  CAMBIAR_ALUMNO_ASISTENCIA: 'CAMBIAR_ALUMNO_ASISTENCIA'


}

export const agregarFechas = (fechaInicio,fechaFin) => {
  return {
    type: grupos.AGREGAR_FECHA_INICIO,
    fechas: {
      inicio: fechaInicio,
      fin: fechaFin
    }
    
  }
}

export const agregarAlumno = (alumno) => {
  return {
    type: grupos.AGREGAR_ALUMNO,
    id: alumno.id,
    payload: {
      nombre: alumno.nombre,
      asistencias: alumno.asistencias
    }
  }
}
export const agregarAlumnos = (alumnos) => {
  return {
    type: grupos.AGREGAR_ALUMNOS,
    alumnos: alumnos
  }
}