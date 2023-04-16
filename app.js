function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellidop = document.getElementById("apellidop").value;
    const apellidom = document.getElementById("apellidom").value;
    const rut = document.getElementById("rut").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
    
    const celular = document.getElementById("celular").value;
   

  
   //nombre//
    if (nombre === "" ) {
      alert("Por favor, llene todos los campos.");
      return false;
    }
  
    if (nombre.length < 3 || nombre.length > 20) {
      alert("El nombre debe tener entre 3 y 20 caracteres.");
      return false;
    }
     //nApellido paterno//
    if (apellidop === "" ) {
        alert("Por favor, llene todos los campos.");
        return false;
      }
      if (apellidop.length < 3 || apellidop.length > 20) {
        alert("El Apellido paterno debe tener entre 3 y 20 caracteres.");
        return false;
      }
      //Apellido materno//
      if (apellidom === "" ) {
        alert("Por favor, llene todos los campos.");
        return false;
      }
      if (apellidom.length < 3 || apellidom.length > 20) {
        alert("El Apellido materno debe tener entre 3 y 20 caracteres.");
        return false;
      }
     //rut//
     if (rut === "" ) {
        alert("Por favor, llene todos los campos.");
        return false;
      }
      if (rut.length < 9|| rut.length > 10) {
        alert("Rut invalido, debe tener entre 9 y 10 caracteres.");
        return false;
      }
      //edad//
      if (isNaN(edad) || edad < 18 || edad > 35) {
        alert("La edad debe ser un número entre 18 y 35.");
        return false;
      }
     //correo//
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
    //celular
    if (celular.length < 9|| celular.length > 12) {
        alert("Los digitos de celular deben ser entre 9 y 12numeros.");
        return false;
      }
  
    return true;
  }
