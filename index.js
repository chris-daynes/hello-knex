var Knex = require('knex')
var knexConfig = require('./knexfile.js').development
var knex = Knex(knexConfig)

// Create
function createStudent (student, callback) {
  return knex('students').insert(student).asCallback(callback)
}
// function createStudent(student, callback) {
//   return knex.raw(`INSERT INTO students (name, cohort) VALUES ('${student.name}', '${student.cohort}')`).asCallback(callback)
// }

// Read
function getAllStudents (callback) {
  return knex.select().table('students').asCallback(callback)
}

// Read
function getStudentById (id, callback) {
  return knex('students').where('id', id).asCallback(callback)
}
// function getStudentById(id, callback) {
//   return knex.raw(`SELECT * FROM students WHERE id = '${id}'`).asCallback(callback)
// }

function updateStudent (student, callback) {
  return knex('students').where('id', '=', student.id).update({name: student.name, cohort: student.cohort}).asCallback(callback)
}

// Update
// function updateStudent (student, callback) {
//   return knex.raw(`UPDATE students SET name = '${student.name}', cohort = '${student.cohort}' WHERE id = '${student.id}'`).asCallback(callback)
// }

function deleteStudentById (id, callback) {
  return knex('students').where('id', id).delete().asCallback(callback)
}

// Delete
// function deleteStudentById (id, callback) {
//   return knex.raw(`DELETE FROM students WHERE id = '${id}'`).asCallback(callback)
// }

//
// createStudent({name: 'Pouramua Kupenga', cohort: 'Piwakawaka-2016', }, function( err, res) {
//   if (err) return console.log(err)
//   console.log(res);
// })

getStudentById('6', function (err, res) {
  if (err) return console.log(err)
  console.log(res)
})

updateStudent({id: 7, name: 'Chris Daynes', cohort: 'Piwakawaka-2016'}, function (err, res) {
  if (err) return console.log(err)
  console.log(res)
})

deleteStudentById('6', function (err, res) {
  if (err) return console.log(err)
  console.log(res);
})

getAllStudents(function (err, res) {
  if (err) return console.log(err)
  console.log(res)
})
