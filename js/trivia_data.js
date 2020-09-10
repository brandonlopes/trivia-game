let categories = [
  {
    "id": 9,
    "name": "General Knowledge"
  },
  {
    "id": 10,
    "name": "Entertainment: Books"
  },
  {
    "id": 11,
    "name": "Entertainment: Film"
  },
  {
    "id": 12,
    "name": "Entertainment: Music"
  },
  {
    "id": 13,
    "name": "Entertainment: Musicals & Theatres"
  },
  {
    "id": 14,
    "name": "Entertainment: Television"
  },
  {
    "id": 15,
    "name": "Entertainment: Video Games"
  },
  {
    "id": 16,
    "name": "Entertainment: Board Games"
  },
  {
    "id": 17,
    "name": "Science & Nature"
  },
  {
    "id": 18,
    "name": "Science: Computers"
  },
  {
    "id": 19,
    "name": "Science: Mathematics"
  },
  {
    "id": 20,
    "name": "Mythology"
  },
  {
    "id": 21,
    "name": "Sports"
  },
  {
    "id": 22,
    "name": "Geography"
  },
  {
    "id": 23,
    "name": "History"
  },
  {
    "id": 24,
    "name": "Politics"
  },
  {
    "id": 25,
    "name": "Art"
  },
  {
    "id": 26,
    "name": "Celebrities"
  },
  {
    "id": 27,
    "name": "Animals"
  },
  {
    "id": 28,
    "name": "Vehicles"
  },
  {
    "id": 29,
    "name": "Entertainment: Comics"
  },
  {
    "id": 30,
    "name": "Science: Gadgets"
  },
  {
    "id": 31,
    "name": "Entertainment: Japanese Anime & Manga"
  },
  {
    "id": 32,
    "name": "Entertainment: Cartoon & Animations"
  }
]

let test = [
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
  if (categories[i].name.includes("Entertainment")) { categories[i] = categories[i].replace("Entertainment:", " ") }
  if (categories[i].name.includes("Science")) { categories[i] = categories[i].replace("Science:", " ") }

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