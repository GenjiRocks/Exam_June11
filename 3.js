const books = [
    {
        id:1, title: "To kill a mockingbird", author:"Harper Lee", genre:"Fiction", yearPublished: 1960, price: 18.99 , publisher:{name:"J.B Lippincott &Co.",location:"Philadelphia"}
    },

    {
        id:2, title: "1984", author:"Goerge Orwell", genre:"Dystopian", yearPublished: 1949, price: 15.99 , publisher:{name:"Secker & Warburg",location:"London"}
    },

    {
        id:3, title: "The Great Gatsby", author:"Scott Fitzgerald", genre:"Classic", yearPublished: 1925, price: 10.99 , publisher:{name:"Charles Scribner",location:"New York"}
    },

    {
        id:4, title: "Moby Dick", author:"Herman Melville", genre:"Adventure", yearPublished: 1851, price: 12.99 , publisher:{name:"Harper & Brothers",location:"New York"}
    },

    {
        id:5, title: "Pride and Prejudice", author:"Jane Austen", genre:"Romance", yearPublished: 1813, price: 9.99 , publisher:{name:"T. Egerton",location:"London"}
    }
]

// console.log('Print all the names of book available');
// availbooks = books.map(n1=>n1.title).forEach(n1=>console.log(n1))
// console.log("______________________________");
// console.log("______________________________");

// console.log('Print book details published in new York');
// que_2 = books.filter(n1=>n1.publisher.location=='New York').forEach(n1=>console.log(n1))
// console.log("______________________________");
// console.log("______________________________");

// console.log('Print the name of book that published before 1900');
// que_3 = books.filter(n1=>n1.yearPublished<1900).forEach(n1=>console.log(n1.title))
// console.log("______________________________");
// console.log("______________________________");

// console.log('Print the details of the book 1984');
// que_4 = books.filter(n1=>n1.title==1984).forEach(n1=>console.log(n1))
// console.log("______________________________");
// console.log("______________________________");

// console.log('What will be the revenue when all the books are sold out');
// que_5 = books.reduce((n1,n2)=>n1+n2.price,0)
// console.log(`Total Reveunue ${que_5}`);

// console.log("______________________________");
// console.log("______________________________");

