const uppercase = [];
const lowercase = [];
const numbers = [];
const symbols = ["<", ">", "|", "-", "_", "@", "!", "?", ":", "$"];

const createCharacters = (array, option = "lowercase") => {
    for (let i = 0; i < 26; i++) {
        let char
        if (option == "uppercase") {
            char = (i + 10).toString(36).toUpperCase();
        }
        else {
            char = (i + 10).toString(36).toLowerCase();
        }
        array.push(char);
    }
}

const createNumbers = () => {
    for (let index = 0; index < 10; index++) {
        numbers.push(index);

    }
}

createCharacters(lowercase);
createCharacters(uppercase, "uppercase");
createNumbers();

export { uppercase, lowercase, numbers, symbols };

