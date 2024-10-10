function togglePassword() {
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.textContent = "🙈"; // Cambia el icono cuando se muestra la contraseña
  } else {
      passwordInput.type = "password";
      passwordToggle.textContent = "👁️"; // Cambia el icono cuando se oculta la contraseña
  }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtén el nombre de usuario y la contraseña ingresados
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Define un objeto o un array con los usuarios y contraseñas permitidos
  var users = [
    { username: "Keonex", password: "alejandro89" },    
    { username: "Eduard", password: "0524" },
    { username: "Odalys", password: "12345" },
    { username: "Owendg", password: "1234" }, 
    { username: "Nikkitta", password: "2024nikki" },
    { username: "tr0j4n", password: "tr0j4n2024*." },
    { username: "jvilaseca", password: "nomeacuerdo.1*" },
    { username: "Andro", password: "50814258" },
    { username: "chesc", password: "C0nFl3nt33" },
    { username: "Fernando", password: "Fer-123" },
    { username: "Wendy", password: "wencat0311" },                
    { username: "Tonmy", password: "katerine89" }
  ];

  // Verifica si el usuario y la contraseña coinciden con los datos almacenados
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      // Redirecciona a la página deseada si se encuentra una coincidencia
      window.location.href = "inicio.html";
      return;
    }
  }

  // Si no se encuentra una coincidencia, muestra un mensaje de error
  alert("Nombre de usuario o contraseña inválidos. Por favor, inténtalo de nuevo.");
});
