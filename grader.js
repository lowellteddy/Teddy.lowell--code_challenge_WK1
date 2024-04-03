// Prompt the user for the student's mark
function getStudentMark() {
 
  let mark;
  // Ensure the input is a number and is within the range 0-100
  do {
    // variable declared automatically
    mark = prompt("Enter the student's mark (0-100):");
    mark = parseInt(mark);
  } while (isNaN(mark) || mark < 0 || mark > 100);
  return mark;
}
// The Main function
function getStudentGrade() { 
  // Call the functions above

  let studentMark = getStudentMark();

  let grade;
  if (studentMark >= 79) {
    grade = "A";
  } else if (studentMark >= 60) {
    grade = "B";
  } else if (studentMark >= 49) {
    grade = "C";
  } else if (studentMark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  //Results to be displayed after the program runs
  console.log(`Student Mark: ${studentMark}`);
  console.log(`Grade: ${grade}`);
  // Output the grade to the user 
  window.alert(` scored ${studentMark} marks which is a grade of ${grade}`);
}

// To use the program, call the function:
getStudentGrade();