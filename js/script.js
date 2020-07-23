let root = document.documentElement;

document.body.onload = () => {
    const categories = [
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
        if (categories[i].includes("Entertainment")) { entertainment.push(categories[i]) }
        if (categories[i].includes("Science")) { science.push(categories[i]) }

    }
    let subCategories = entertainment.concat(science);
    console.log(subCategories);
    

    fetch('https://opentdb.com/api_category.php').then(function (response) {
        response.json().then(function (data) {
            for (let i = 0; i < data.trivia_categories.length; i++) {
                console.log(data.trivia_categories[i].name);
            }

        });
    });
}