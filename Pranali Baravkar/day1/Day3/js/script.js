document.addEventListener('DOMContentLoaded', () => {
  
  const ctx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Sales',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  
  const userData = [
      { id: 1, name: 'Pranali', email: 'panu@gmail.com', role: 'Admin' },
      { id: 2, name: 'Rutuja', email: 'rutu@gmail.com', role: 'Editor' },
      { id: 3, name: 'Tanishka', email: 'tanu@gamil.com', role: 'Subscriber' },
  ];

  
  const userTableBody = document.getElementById('userTableBody');
  userData.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
      `;
      userTableBody.appendChild(row);
  });
});
