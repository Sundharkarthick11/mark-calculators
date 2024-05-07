function calcInternalMark() {
  var cat1 = document.getElementById("cat1");
  var assign1 = document.getElementById("ass1");
  var cat2 = document.getElementById("cat2");
  var assign2 = document.getElementById("ass2");
  var result = document.getElementById("result");
  var cat1value = Number(cat1.value);
  var cat2value = Number(cat2.value);
  var ass1value = Number(assign1.value);
  var ass2value = Number(assign2.value);
  var mark = ((cat1value + cat2value + ass1value + ass2value) / 2) * 0.4;
  result.value = mark;
}

// External mark calculator
function calcExternalMark() {
  var semMark = document.getElementById("semMark");
  var semResult = document.getElementById("externalMarkResult");
  var semMarkValue = Number(semMark.value);
  var mark = semMarkValue * 0.6;
  semResult.value = mark;
}

// Total mark calculator
function calcMark() {
  var internalMark = document.getElementById("internalMark");
  var externalMark = document.getElementById("externalMark");
  var totalMarkResult = document.getElementById("totalMarkResult");
  var internalValue = Number(internalMark.value);
  var externalValue = Number(externalMark.value);
  var totalMark = internalValue + externalValue;
  totalMarkResult.value = totalMark;
}

//mark sheet
function addFun(event){
    var subName = document.getElementById("sub_Name");
    var subCredit = document.getElementById("sub_Credit");
    var cat_1 = document.getElementById("cat_1");
    var cat_2 = document.getElementById("cat_2");
    var ass_1 = document.getElementById("ass_1");
    var ass_2 = document.getElementById("ass_2");
    var sem_Mark = document.getElementById("sem_Mark");
    var internalSum=Number(cat_1.value) + Number(cat_2.value) + Number(ass_1.value) + Number(ass_2.value);
    var internalMark=parseInt((internalSum/2)*0.4);
    var externalMark=parseInt(sem_Mark.value*0.6);
    var totalMarks = parseInt(internalMark+externalMark);
    var passFail = (Number(sem_Mark.value) >= 45) ? "Pass" : "Fail";
    var gradePoint = parseInt(totalMarks/10);

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${subName.value}</td>
        <td>${subCredit.value}</td>
        <td>${internalMark}</td>
        <td>${externalMark}</td>
        <td>${totalMarks}</td>
        <td>${gradePoint}</td>
        <td>${passFail}</td>
        <td><button class="deletebtn" onclick="deleteFunc(event)">x</button></td>
    `;
    document.getElementById("markSheetBody").appendChild(newRow);
    subName.value='';
    subCredit.value='';
    cat_1.value='';
    cat_2.value='';
    ass_1.value='';
    ass_2.value='';
    sem_Mark.value='';
}

function deleteFunc(event) {
    var row = event.target.closest("tr");
    row.remove();
}

//to calculate cgpa
function calculateCGPA() {
    var table = document.getElementById("markSheetBody");
    var rows = table.getElementsByTagName("tr");
    var totalCredits = 0;
    var totalGradePoints = 0;
    var cgpa=0;

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var subjectCredit = parseInt(cells[1].innerText); // Assuming the credit is in the second column
        var gradePoint = parseInt(cells[5].innerText); // Assuming the grade point is in the sixth column

        totalCredits += subjectCredit;
        totalGradePoints += subjectCredit * gradePoint;
    }
    cgpa = totalGradePoints / totalCredits;
    // Round CGPA to 2 decimal places
    cgpa = Math.round(cgpa * 100) / 100;
    return cgpa;
}

function calculateCgpa(event){
    var cgpaResult = calculateCGPA();
    var cgpa=document.getElementById("cgpa");
    cgpa.value=cgpaResult;
}

