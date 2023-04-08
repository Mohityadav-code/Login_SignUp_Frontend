const API_URL = "http://localhost:9000/auth";

document.getElementById("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log("Login successful:", data);
  } else {
    console.error("Login failed:", response);
  }
});

document.getElementById("register-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
  
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (response.status === 201) {
      const data = await response.json();
      console.log("Registration successful:", data);
    } else {
      console.error("Registration failed:", response);
    }
  });
  