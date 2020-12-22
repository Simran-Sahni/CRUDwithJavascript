var selectedRow = null
//var isValid = false

function onFormSubmit() {
    
    console.log(selectedRow)
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData); 
        else
            updateRecord(formData);
       
    }
   
         resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["dpt"] = document.getElementById("dpt").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dpt;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button type="button" class="btn btn-secondary" onClick="onEdit(this)">Edit</button>
                       <button type="button" class="btn btn-danger" onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("dpt").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dpt").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.empid;
    selectedRow.cells[2].innerHTML = formData.dpt;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}