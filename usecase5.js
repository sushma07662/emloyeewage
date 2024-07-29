const working_days=20;

function WageForMonth(){
    let total_months=1;
    return total_months*working_days*8*20;
}

let total_wage=WageForMonth();
console.log("Total wage is : ",total_wage);
