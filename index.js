const { Certificate } = require("crypto");
const express = require("express");
const app = express();



// function to generate github profile URL
function generateProfileUrl(username) {
  return ` https://github.com/${username}`
}

// Endpoint 1 : Generate github-profile-URL, query param: username
app.get('/github-profile', (req, res) => {
  let username = req.query.username
  res.send(generateProfileUrl(username))
})



// function to generate certificate
function generateCertificate(firstName, lastName, courseName) {
  return `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`
}

// Endpoint 2 : Generate Certificate, query params: firstName, lastName, courseName
app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName
  let lastName = req.query.lastName
  let courseName = req.query.courseName
  res.send(generateCertificate(firstName, lastName, courseName))
})


// function to calculate grade
function calculateGrade(maths, science, english) {
  let gradePercentage = ((maths + science + english) / 300 ) * 100
  return `your grade in percentage is ${Math.round(gradePercentage)}%`
}

// Endpoint 3 : Generate grade in %, query params: maths, science, english
app.get('/grade', (req, res) => {
  let maths = parseInt(req.query.maths)
  let science = parseInt(req.query.science)
  let english = parseInt(req.query.english)
  res.send(calculateGrade(maths, science, english))
})



// function to split bill among friends
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends
  return `Result: Each friend owes Rs. ${splitAmount} against the bill`
}

// Endpoint 4 : Split Bill, query params: billAmount, numberOfFriends
app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount)
  let numberOfFriends = parseInt(req.query.numberOfFriends)
  res.send(splitBill(billAmount, numberOfFriends))
})



// function to calculate monthly salary
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = hourlyWage * totalHours
  return `Result: Your monthly salary is ₹${monthlySalary}`
}

// Endpoint 5 : Calculate monthly salary, query params: totalHours, hourlyWage
app.get('/monthly-salary', (req, res) => {
  let totalHours = parseInt(req.query.totalHours)
  let hourlyWage = parseFloat(req.query.hourlyWage)
  res.send(calculateSalary(totalHours, hourlyWage))
})


const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}...`);
});
