let categories = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations"
];

let entertainment = [];
let science = [];

for (let i = 0; i < categories.length; i++) {
    if (categories[i].includes("Entertainment")) { categories[i] = categories[i].replace("Entertainment:", " ") }
    if (categories[i].includes("Science")) { categories[i] = categories[i].replace("Science:", " ") }

}

console.log(categories);

let subCategories = entertainment.concat(science);

let exampleQuestion = {
    "category": "Entertainment: Books",
    "type": "multiple",
    "difficulty": "easy",
    "question": "George Orwell wrote this book, which is often considered a statement on government oversight.",
    "correct_answer": "1984",
    "incorrect_answers": [
      "The Old Man and the Sea",
      "Catcher and the Rye",
      "To Kill a Mockingbird"
    ]
  }