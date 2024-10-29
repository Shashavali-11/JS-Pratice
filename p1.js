var obj = [
    {
        name: "Shashavali",
        age: 25,
        profession: "Software Developer",
        skills: ["Java", "SQL", "Spring Boot", "ReactJS"],
        
        // Method to display person's details
        displayInfo: function() {
            console.log(`Name: ${this.name}`);
            console.log(`Age: ${this.age}`);
            console.log(`Profession: ${this.profession}`);
            console.log(`Skills: ${this.skills.join(", ")}`);
        }
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        yearPublished: 2008,
        genre: "Programming",
        available: true,
    
        // Method to display book details
        displayDetails: function() {
            console.log(`Title: ${this.title}`);
            console.log(`Author: ${this.author}`);
            console.log(`Year Published: ${this.yearPublished}`);
            console.log(`Genre: ${this.genre}`);
            console.log(`Available: ${this.available ? "Yes" : "No"}`);
        }
    }
]

// console.log(obj[0].age)

obj[0].displayInfo()
console.log()
obj[1].displayDetails()






