interface Alumno {
  id: String, // GUID
  nombre: String,
  asistencias: Array<Number>,
  tareas?: TareasAlumno<TareaAlumno>
}
interface TareasAlumno<T> {
  tarea: T
}
interface TareaAlumno {
  id: String, // GUID
  valor: Number,
  fechaEntregada?: Date,
  fechaUltimaActualizacion?: Date 
}