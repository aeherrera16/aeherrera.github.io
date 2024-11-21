  // Función para limpiar la tabla
  function limpiarTabla() {
    var tabla = document.getElementById('tablaUsuarios');
    var filas = tabla.getElementsByTagName('tr');
    
    // Empezamos desde la segunda fila porque la primera es la cabecera
    for (var i = filas.length - 1; i > 0; i--) {
      tabla.deleteRow(i);
    }
  }

