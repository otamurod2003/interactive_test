// frontend/js/auth.js
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Bu yerga API chaqiruv kiritiladi (keyingi bosqichda)
  const mockUsers = {
    'student@mail.com': 'Student',
    'teacher@mail.com': 'Teacher',
    'admin@mail.com': 'Admin',
    'superadmin@mail.com': 'SuperAdmin'
  };

  if (mockUsers[email] && password === '123') {
    localStorage.setItem('role', mockUsers[email]);
    window.location.href = `dashboard-${mockUsers[email].toLowerCase()}.html`;
  } else {
    document.getElementById('error').classList.remove('hidden');
  }
});
