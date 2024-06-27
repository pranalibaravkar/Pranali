function searchEmployee() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('employeeTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
        }
    }
}

function openForm() {
    document.getElementById('employeeForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('employeeForm').style.display = 'none';
}

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('status').value;
    const role = document.getElementById('role').value;

    if (name && email && status && role) {
        const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const profileCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const emailCell = newRow.insertCell(2);
        const statusCell = newRow.insertCell(3);
        const roleCell = newRow.insertCell(4);
        const editCell = newRow.insertCell(5);
        const deleteCell = newRow.insertCell(6);

        profileCell.innerHTML = '<img src="profile-placeholder.jpg" alt="Profile Picture">';
        nameCell.textContent = name;
        emailCell.textContent = email;
        statusCell.textContent = status;
        statusCell.classList.add('status', status.toLowerCase());
        roleCell.textContent = role;
        editCell.innerHTML = '<i class="fas fa-edit" onclick="editEmployee(this)"></i>';
        deleteCell.innerHTML = '<i class="fas fa-trash" onclick="deleteEmployee(this)"></i>';

        closeForm();
    } else {
        alert('All fields are required.');
    }
}

function editEmployee(element) {
    const row = element.parentNode.parentNode;
    const name = row.cells[1].textContent;
    const email = row.cells[2].textContent;
    const status = row.cells[3].textContent;
    const role = row.cells[4].textContent;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('status').value = status;
    document.getElementById('role').value = role;

    openForm();

    row.parentNode.removeChild(row);
}

function deleteEmployee(element) {
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
