const getAllStudents = async (req, res) => {
    const students = [
        {
            id: 1,
            name: "Usama",
            age: 26,
            hobbies: ["Music", "Reading", "Coding"]
        },
        {
            id: 2,
            name: "Usman",
            age: 27,
            hobbies: ["Music", "Reading", "Coding"]
        }
    ]


    res.status(200).json({ students })
}

module.exports = {
    getAllStudents
}