

function generateTable() {
  const tableNo = document.getElementById('tableNo').value;
  const limit = document.getElementById('limit').value;
  const tableContainer = document.getElementById('tableContainer');

  // Clear previous table
  tableContainer.innerHTML = '';

  // Generate table
  const table = document.createElement('table');
  for (let i = 1; i <= limit; i++) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = `${tableNo} x ${i}`;
    const cell2 = document.createElement('td');
    cell2.textContent = tableNo * i;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
}