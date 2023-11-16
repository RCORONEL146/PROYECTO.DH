// Paso 2a: Crear un array multidimensional con los nombres de los cursos y sus precios.
const cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JavaScript", 10000],
    ["React", 7000],
    ["NodeJS", 15000]
  ];
  
  // Paso 2b: Crear un array con los cursos que el alumno quiere tomar (en mayúsculas).
  const cursosAlumno = ["HTML5", "CSS3", "JavaScript", "NodeJS"];
  
  // Paso 2c: Crear una función para calcular el monto total.
  function calcularMontoTotal(cursos, cursosAlumno) {
    let montoTotal = 0;
    cursosAlumno.forEach(curso => {
      const cursoEncontrado = cursos.find(c => c[0].toUpperCase() === curso);
      if (cursoEncontrado) {
        montoTotal += cursoEncontrado[1];
      }
    });
    return montoTotal;
  }
  
  // Paso 2d: Crear una función para obtener el nombre, apellido y monto total.
  function obtenerInfoAlumno(nombre, apellido, cursos, cursosAlumno) {
    const montoTotal = calcularMontoTotal(cursos, cursosAlumno);
    return `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:\n${cursosAlumno.map((curso, index) => `${index + 1}.- ${curso}`).join('\n')}\nEl monto total a pagar es de: $${montoTotal}.\nBienvenido a la gran aventura Digital House.`;
  }
  
  // Paso 2e: Ejecutar el programa e imprimir los resultados.
  const nombreAlumno = "Luis";
  const apellidoAlumno = "Fuentes";
  const mensaje = obtenerInfoAlumno(nombreAlumno, apellidoAlumno, cursos, cursosAlumno);