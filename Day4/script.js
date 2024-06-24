// script.js
document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', () => {
      const table = header.parentElement.parentElement.parentElement;
      const index = Array.prototype.indexOf.call(header.parentElement.children, header);
      const ascending = header.classList.contains('asc');
      const direction = ascending ? -1 : 1;
      
      header.classList.toggle('asc', !ascending);
      header.classList.toggle('desc', ascending);
      
      Array.from(table.querySelector('tbody').querySelectorAll('tr'))
        .sort((rowA, rowB) => {
          const cellA = rowA.children[index].innerText.toLowerCase();
          const cellB = rowB.children[index].innerText.toLowerCase();
          
          if (!isNaN(cellA) && !isNaN(cellB)) {
            return (cellA - cellB) * direction;
          }
          
          return cellA.localeCompare(cellB) * direction;
        })
        .forEach(row => table.querySelector('tbody').appendChild(row));
    });
  });
  
  document.getElementById('tableFilter').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(filter) ? '' : 'none';
    });
  });
  