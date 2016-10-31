var Knex = require('knex')
var knexConfig = require('./knexfile.js').development
var knex = Knex(knexConfig)

// Create
function createStudent (student, callback) {

}

// Read
function getAllStudents (callback) {
  return knex.select().table('students').asCallback(callback)
}

// Read
function getStudentById (id, callback) {

}

// Update
function updateStudent(student, callback) {

}

// Delete
function deleteStudentById(id, callback) {
  
}

// Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if (err) return  console.log(err)
  console.log(res)
})
