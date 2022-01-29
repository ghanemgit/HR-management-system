

let employeeForm = document.getElementById('EmployeeList');
let records = window.localStorage.getItem('allEmployee');
let getTid = document.getElementById()
let cell = document.createElement("td");
let sort = document.getElementById('adminTable');
let sort1 = document.getElementById('marktTable');
let sort2 = document.getElementById('deveTable');
let sort3 = document.getElementById('finaTable');
let submit = document.getElementById('accounting').onclick;



function render(employeeFromLS) {

    for (let i = 0; i < employeeFromLS.length; i++) {

        let employee = employeeFromLS[i];

        if (employee.department == "Adminstration") {
            inner.innerHTML = "";
        }

        else if (employee.department == "Marketing") {
            sort = sort1;
            inner.innerHTML = "";
        }

        else if (employee.department == "Development") {
            sort = sort2
            inner.innerHTML = "";
        }
        else if (employee.department == "Finance") {
            sort = sort3;
            inner.innerHTML = "";
        }



        paragraph.appendChild(infor);
        var element = document.getElementById("retrieve");
        element.appendChild(paragraph);
    }
}


function readFromLocalS() {
    let jsonArr = localStorage.getItem('allEmployee');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}




function collectData(event) {
    event.preventDefault();

    allEmployee.push(newEmployee);


    render(readFromLocalS());

}
employeeForm.addEventListener(submit, collectData);