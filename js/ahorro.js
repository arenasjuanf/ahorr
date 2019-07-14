$(function(){
  generarTabla(4,500,100000);
});


function generarTabla(columnas, intervalo,montoMaximo){
  var monto = intervalo; 
  var x = ""; 
  
  for ( var filas = 0; monto <= montoMaximo ; filas++ ) {
    x = x + '<tr>';
    
    for( var contColumna = 0; contColumna <= columnas ; contColumna++ ){
      monto+=intervalo;
      x = x + '<td>' + monto+ '</td>';
    }

    x = x + "</tr>";
  }
  $('#tbody').append(x);
}