


let employeeForm = document.getElementById('form1');
let empSection = document.getElementById('newEmployeeList');
let sort = document.getElementById('admin');
let sort1 = document.getElementById('markt');
let sort2 = document.getElementById('deve');
let sort3 = document.getElementById('fina');



function Employee(FullName, Department, Level, ImageURL) {


    this.fullname = FullName;
    this.department = Department;
    this.level = Level;
    this.imagelLink = ImageURL;

}


let id = 1000;
Employee.prototype.generateID = function () {

    this.employeeID = id;
    id++;
}
Employee.prototype.netSalary = function () {
    var s = 0;
    var tax = 0;
    if (this.level == "Senior") {
        s = Math.random() * (2000 - 1500) + 1500;
        tax = s * 0.075;
        this.Salary = Math.ceil(s - tax);
    }
    else if (this.level == "Mid-Senior") {
        s = Math.random() * (1500 - 1000) + 1000;
        tax = s * 0.075;
        this.Salary = Math.ceil(s - tax);
    }
    else if (this.level == "Junior") {
        s = Math.random() * (1000 - 500) + 500;
        tax = s * 0.075;
        this.Salary = Math.ceil(s - tax);
    }

}


Employee.prototype.render = function () {

    if (this.department == "Adminstration") {

    }
    else if (this.department == "Marketing") {
        sort = sort1;
    }
    else if (this.department == "Development") {
        sort = sort2
    }
    else if (this.department == "Finance") {
        sort = sort3;
    }


    sort.style.cssText = 'vertical-align: top;display: grid | inline-grid;;text-align: center;width: 33.33%;float: left'
    let img = document.createElement('img');
    sort.appendChild(img);
    img.setAttribute('src', this.imagelLink);
    img.setAttribute('alt', this.fullname);
    img.style.cssText = 'display: flex;align-items: center;margin-left:150px;width: 250px;height: 250px';




    let p = document.createElement('p');
    sort.appendChild(p);
    p.textContent = `Name: ${this.fullname}- ID: ${this.employeeID}`;
    p.style.cssText = 'display: flex;align-items: center;height: 60px;padding-left:50px;padding-top:300px;display: block';


    let p1 = document.createElement('p');
    sort.appendChild(p1);
    p1.textContent = `Department: ${this.department} - Level: ${this.level}`;
    p1.style.cssText = 'display: flex;align-items: center;height: 60px;padding-left:50px;display: block';


    let p2 = document.createElement('p');
    sort.appendChild(p2);
    p2.textContent = `Salary: ${this.Salary}`;
    p2.style.cssText = 'margin-bottom: 50px;display: flex;align-items: center;height: 60px;padding-left:50px;display: block';
}



function collectData(event) {
    event.preventDefault();
    let fname = event.target.fullname.value;
    let dep = event.target.department.value;
    let lev = event.target.level.value;
    let img = event.target.imagelLink.value;

    let newEmployee = new Employee(fname, dep, lev, img);
    newEmployee.generateID();
    newEmployee.netSalary();
    newEmployee.render();


}



employeeForm.addEventListener('submit', collectData);






