class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }
}

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);    
    }

    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}
  
class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
  
    dispose(){
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}
  
// Objects for exercises 2 and 3:
let goodRead = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Exercises 4 & 5:
makingTheShip.dispose(2021);
goodRead.checkout(5);
goodRead.dispose();

if (goodRead.discarded === 'No'){
    console.log(`${goodRead.title} has been checked out ${goodRead.timesCheckedOut} times.`);
} else {
    console.log(`${goodRead.title} has been discarded.`);
}

if (makingTheShip.discarded === 'No'){
    console.log(`${makingTheShip.title} is current until ${makingTheShip.copyright+5}.`);
} else {
    console.log(`${makingTheShip.title} has been discarded.`);
}
  