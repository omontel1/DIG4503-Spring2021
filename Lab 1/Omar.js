class Person {

    constructor(name, color) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    speak() {
        console.log("Omar", "Red");
    }
}

class Omar extends Person {
    constructor() {

        super("Omar", "Red");
    }
}

const c = new Person();

const c2 = new Omar();
