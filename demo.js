var selectedRow = null;
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData)
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["StudentName"] = document.getElementById("StudentName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Branch"] = document.getElementById("Branch").value;
    formData["DateofJoining"] = document.getElementById("DateofJoining").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    formData["male"] = document.getElementById("male").checked;
    formData["female"] = document.getElementById("female").checked;
    return formData;
}

        function insertNewRecord(data) {
            var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.StudentName;
            var cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.Age;
            var cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.Branch;
            var cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.DateofJoining;
            var cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.PhoneNumber;
            var cell6 = newRow.insertCell(5);
            if(data.male) {
                cell6.innerHTML = "Male";
            } else if (data.female) {
                cell6.innerHTML = "Female";
            }
            var cell7 = newRow.insertCell(6);
            cell7.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
        }


        function resetForm() {
            document.getElementById('StudentName').value = '';
            document.getElementById('Age').value = '';
            document.getElementById('Branch').value = '';
            document.getElementById('DateofJoining').value = '';
            document.getElementById('PhoneNumber').value = '';
            document.getElementById('male').value = '';
            document.getElementById('female').value = '';
            selectedRow = null;
        }



       /* function validation()
{
var a = document.form.name.value;
if(a=="")
{
alert("Please Enter Your Name");
document.form.EmployeeName.focus();
return false;
}
if(!isNaN(a))
{
alert("Please Enter Only Characters");
document.form.EmployeeName.select();
return false;
}
}*/


        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById('StudentName').value = selectedRow.cells[0].innerHTML;
            document.getElementById('Age').value = selectedRow.cells[1].innerHTML;
            document.getElementById('Branch').value = selectedRow.cells[2].innerHTML;
            document.getElementById('DateofJoining').value = selectedRow.cells[3].innerHTML;
            document.getElementById('PhoneNumber').value = selectedRow.cells[4].innerHTML;
            document.getElementById('male').value = selectedRow.cells[5].innerHTML;
            document.getElementById('female').value = selectedRow.cells[6].innerHTML;
        }
        function updateRecord(formData) {
            selectedRow.cells[0].innerHTML = formData.StudentName;
            selectedRow.cells[1].innerHTML = formData.age;
            selectedRow.cells[2].innerHTML = formData.Branch;
            selectedRow.cells[3].innerHTML = formData.DateofJoining;
            selectedRow.cells[4].innerHTML = formData.PhoneNumber;
            selectedRow.cells[5].innerHTML = formData.male;
            selectedRow.cells[6].innerHTML = formData.female;

        }
        function onDelete(td) {
            if (confirm('Are you sure you want to delete this record?')) {
                row = td.parentElement.parentElement;
                document.getElementById('studentList').deleteRow(row.rowIndex);
                resetForm();
            }
        }


/*function validation(){
        var EmployeeNameRegex = /^[a-zA-Z\-]+$/;
    var validEmployeename = document.form.EmployeeName.value.match(EmployeeNameRegex);
    if(validEmployeename == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.form.EmployeeName.focus();
        return false;
    }
}*/

/*function validateform(){  
    var StudentName=document.myform.name.value;  
    var PhoneNumber=document.myform.PhoneNumber.value;  
      
    if (StudentName==null || StudentName==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(PhoneNumber.length<6){  
      alert("PhoneNumber must be at least 6 characters long.");  
      return false;  
      }  
    }  */

    function validateForm() {
        var PhoneNumber=document.getElementById("PhoneNumber");  
if (isNaN(PhoneNumber)){  
  alert("Enter Numeric value only");
  return false;  
}else{  
  return true;  
  }  
      }