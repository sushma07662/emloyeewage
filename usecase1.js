function CheckAttendance(){
    const status=Math.floor(Math.random()*2);
    if(status == 1)return "Present";
    else return "Absent";
}
const AttendanceStatus= CheckAttendance();
console.log("Employee is :",AttendanceStatus);
