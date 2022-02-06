



function Employee(EmployeeID, FullName, Department, Level, ImageURL, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
}



Employee.prototype.netSalary = function () {
    var s = 0;
    var tax = 0;
    if (this.Level == "Senior") {
        s = Math.random() * (2000 - 1500) + 1500;
        tax = s * 0.075;
        return Math.ceil(s - tax);
    }
    else if (this.Level == "Mid-Senior") {
        s = Math.random() * (1500 - 1000) + 1000;
        tax = s * 0.075;
        return Math.ceil(s - tax);
    }
    else if (this.Level == "Junior") {
        s = Math.random() * (1000 - 500) + 500;
        tax = s * 0.075;
        return Math.ceil(s - tax);
    }
    else {
        alert("Please enter correct level");
    }
}

Employee.prototype.PrintNameSalary = function () {
    document.write(` Name is ${this.FullName} and the salary ${this.netSalary()}<br> `);
}

const Ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "  ");
Ghazi.PrintNameSalary();

const Lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "  ");
Lana.PrintNameSalary();

const Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "  ");
Tamara.PrintNameSalary();

const Safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "  ");
Safi.PrintNameSalary();

const Omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "  ");
Omar.PrintNameSalary();

const Rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "  ");
Rana.PrintNameSalary()

const Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
Hadi.PrintNameSalary();



