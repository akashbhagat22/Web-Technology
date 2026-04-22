const fs = require('fs');

const students = [
  { name: 'Amit', marks: 85 },
  { name: 'Priya', marks: 90 }
];

fs.writeFileSync('students.json', JSON.stringify(students));

console.log('File created successfully');
