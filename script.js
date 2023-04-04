const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];

// Display students in a visually appealing way
function displayStudents() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let student of students) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.ID}</td>
                     <td>${student.name}</td>
                     <td>${student.age}</td>
                     <td>${student.grade}</td>
                     <td>${student.degree}</td>
                     <td>${student.email}</td>
                     <td><button class="edit-button" data-id=${student.ID}>Edit</button></td>
                     <td><button class="delete-button" data-id=${student.ID}>Delete</button></td>`;
    tableBody.appendChild(row);
  }
}

// Add new student
function addStudent() {
  const nameInput = document.getElementById("name-input");
  const ageInput = document.getElementById("age-input");
  const gradeInput = document.getElementById("grade-input");
  const degreeInput = document.getElementById("degree-input");
  const emailInput = document.getElementById("email-input");

  const newStudent = {
    ID: students.length + 1,
    name: nameInput.value,
    age: ageInput.value,
    grade: gradeInput.value,
    degree: degreeInput.value,
    email: emailInput.value,
  };
  students.push(newStudent);
  displayStudents();
  nameInput.value = "";
  ageInput.value = "";
  gradeInput.value = "";
  degreeInput.value = "";
  emailInput.value = "";
}

// Edit student
function editStudent(id) {
  const student = students.find((s) => s.ID === id);
  const nameInput = document.getElementById("name-input");
  const ageInput = document.getElementById("age-input");
  const gradeInput = document.getElementById("grade-input");
  const degreeInput = document.getElementById("degree-input");
  const emailInput = document.getElementById("email-input");
  const addButton = document.getElementById("add-button");

  nameInput.value = student.name;
  ageInput.value = student.age;
  gradeInput.value = student.grade;
  degreeInput.value = student.degree;
  emailInput.value = student.email;
  addButton.innerHTML = "Edit Student";
  addButton.dataset.id = id;
}

// Update student
function updateStudent(id) {
  const student = students.find((s) => s.ID === id);
  const nameInput = document.getElementById("name-input");
  const ageInput = document.getElementById("age-input");
  const gradeInput = document.getElementById("grade-input");
  const degreeInput = document.getElementById("degree-input");
  const emailInput = document.getElementById("email-input");
  const addButton = document.getElementById("add-button");

  student.name = nameInput.value;
  student.age = ageInput.value;
  student.grade = gradeInput.value;
  student.degree = degreeInput.value;
  student.email = emailInput.value;

  addButton.innerHTML = "Add Student";
  addButton.dataset.id = "";
  displayStudents();
}
