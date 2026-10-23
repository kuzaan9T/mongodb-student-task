use("dugsiiye")

db.createCollection("students")

db.students.insertMany([
  { name: "Ahmed", age: 21, email: "ahmed@example.com", courses: ["html", "css"] },
  { name: "Fatima", age: 22, email: "fatima@example.com", courses: ["python", "javascript"] },
  { name: "Mohamed", age: 24, email: "mohamed@example.com", courses: ["mongodb", "nodejs"] }
])

db.students.find()

db.students.updateOne(
  { name: "Ahmed" },
  { $set: { email: "ahmed.ali@example.com" } }
)

db.students.deleteOne({ name: "Mohamed" })

db.students.insertOne({
  name: "Aisha",
  age: 20,
  email: "aisha@example.com",
  courses: ["react", "javascript"],
  address: {
    street: "Maka Al Mukarama Rd",
    city: "Mogadishu",
    country: "Somalia"
  }
})

db.students.find()
