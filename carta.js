function generarCarta() {
    // Obtener los datos del formulario
    const rut = document.getElementById("rut").value;
    const apellidop = document.getElementById("apellidoPaterno").value;
    const apellidom = document.getElementById("apellidoMaterno").value;
    const nombre = document.getElementById("nombre").value;
    const fecha= document.getElementById("fechaNacimiento").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const profesion = document.getElementById("profesion").value;
    const motivacion = document.getElementById("motivacion").value;
  
    // Concatenar los datos en un string correspondiente a la carta
    const carta = `Estimado(a) reclutador(a),
  
  Me dirijo a usted para postular al trabajo de apoyo ambiental en Chiloé.
  
  Mi nombre es ${nombre} ${apellidop} ${apellidom} y tengo ${edad} años, mi rut es ${rut}. Nací el ${fecha} y me identifico como ${genero}.
  Mi correo electrónico es ${email} y mi número de celular es ${celular}. Mi profesion es  ${profesion} y he decidido postular porque ${motivacion}.
  
  Espero poder tener la oportunidad de ser considerado(a) para este trabajo y poder aportar con mis habilidades y conocimientos al cuidado del medio ambiente en Chiloé.
  
  Atentamente,
  
  ${nombre} ${apellidop} ${apellidom}`;
  
    // Asignar la carta al campo de texto correspondiente
    document.getElementById("carta").value = carta;
  }