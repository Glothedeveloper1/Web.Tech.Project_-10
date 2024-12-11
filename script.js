function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade, equivalent, remark;
  
    if (marks >= 80 && marks <= 100) {
      grade = "A1";
      equivalent= "A";
      remark = "Excellent";
    } else if (marks >= 70 && marks <= 79) {
      grade = "B2";
      equivalent = "B";
      remark = "Very Good";
    } else if (marks >= 65 && marks <= 69) {
      grade = "B3";
      equivalent = "C";
      remark = "Good";
    } else if (marks >= 60 && marks <= 64) {
      grade = "C4";
      equivalent = "D";
      remark = "Credit";
    } else if (marks >= 55 && marks <= 59) {
      grade = "C5";
      equivalent = "D";
      remark = "Credit";
    } else if (marks >= 50 && marks <= 54) {
      grade = "C6";
      equivalent = "D";
      remark = "Credit";
    } else if (marks >= 45 && marks <= 49) {
      grade = "D7";
      equivalent = "E";
      remark = "Pass";
    } else if (marks >= 40 && marks <= 44) {
      grade = "E8";
      equivalent = "F";
      remark = "Pass";
    } else if (marks >= 0 && marks <= 39) {
      grade = "F9";
      equivalent = "F";
      remark = "Fail";
    } else {
      document.getElementById("result").innerHTML = "Please enter a valid number between 0 and 100.";
      return;
    }
  
    document.getElementById("result").innerHTML = 
      `Grade: ${grade} <br> Equivalent: ${equivalent} <br> Remark: ${remark}`;
  }
  