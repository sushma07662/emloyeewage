const work_hours=8;
let employee = "Sushma";

function PartTimeEmpWage(){
    let worked_days=4;
    return worked_days*work_hours*20;
}

let EmpWage=PartTimeEmpWage();

console.log("Part time employee",employee,"has total wage of : ",EmpWage);
