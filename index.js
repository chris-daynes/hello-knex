var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  knex('students').insert({'name': student.name, 'cohort': student.cohort}).asCallback(callback)
  // knex.raw(`Insert into students ('name', 'cohort') values ('${student.name}','${student.cohort}')`).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.select().from('students').where('id', id).asCallback(callback)
}

//Update
function updateStudent(student, callback) {
  knex('students').where({name: student.name}).update({cohort: student.cohort}).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  knex('students').where('id', id).del().asCallback(callback)
}

//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})

createStudent({name:"Roger", cohort:"Tui-2142"}, function(err,res){
  if(err) return console.log(err)
  console.log(res)
})

getStudentById(1, function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})

updateStudent({name:'katie', cohort: 'kokako-2014'}, function(err,res){
   if(err) return console.log(err)
   console.log(res)
 })

 deleteStudentById(1, function(err, res){
   if(err) return console.log(err)
    getAllStudents(function(err, res) {
      if(err) return  console.log(err)
      console.log(res)
   })
 })
