const bcrypt = require('bcrypt');

async function generarClaveEncriptada() {
  const salt = await bcrypt.genSalt(10);
  const claveEncriptada = await bcrypt.hash("admin123", salt);
  console.log("Clave encriptada:", claveEncriptada);
}

generarClaveEncriptada();
