
export const grupos = {
  AGREGAR_FECHA_INICIO: 'AGREGAR_FECHA_INICIO',
  AGREGAR_FECHA_FIN: 'AGREGAR_FECHA_FIN',
  AGREGAR_ALUMNO: 'AGREGAR_ALUMNO',
  AGREGAR_ALUMNOS: 'AGREGAR_ALUMNOS',
  ELIMINAR_ALUMNO: 'ELIMINAR_ALUMNO',
  CAMBIAR_ALUMNO_ASISTENCIA: 'CAMBIAR_ALUMNO_ASISTENCIA',
  AGREGAR_GRUPO: 'AGREGAR_GRUPO'

}


export const agregarGrupo = (grupoId,alumnos,fechas) => {
  return {
    type: grupos.AGREGAR_GRUPO,
    payload: {
      id: grupoId,
      alumnos: alumnos,
      fechas: {
        inicio: fechas.inicio,
        fin: fechas.fin
      }
    }
  }

}

