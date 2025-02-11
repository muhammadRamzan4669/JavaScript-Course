'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: [['Pizza', 'Burger', 'Fries'], 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}

// declaring three variables at the same time using array destructuring

//extracting first two
// const [first , second] = restaurant.startedMenu;

// console.log(first,second);

//extracting first and last
// const [first, , , last] = restaurant.starterMenu;
// console.log(first, last);

//easy and efficient way of swaping vars using destructuring

// let [first, second] = restaurant.categories;
// [first, second] = [second, first]; // actually reassigning the values of var first and second by destructing the array( [second, first] )

// console.log(first,second);

//another destructuring trick

// const [starter, mainCourse] = restaurant.order(0, 2);
// console.log(starter, mainCourse);

//nested destructuring

// const [[, , a], , b] = restaurant.mainMenu;
// console.log(a, b);

//default values

// const [a, , , b, c = 'Pakistani', d = 'Indian'] = restaurant.categories;
// console.log(a, b, c, d);

//assignment 1

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];


// solutions

// 1.1

// const [firstBook, secondBook] = books;
// console.log(firstBook,secondBook);

// 1.2

// const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, thirdStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, thirdStarRatings);

//destructuring objects

// const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// if no property found with the same name then undefined will be given but we can use default values then

//default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables

// let { openingHours: a, categories: b } = restaurant;
// ({ a, b } = { b, a }); // this will not work

// let openingHours = [];
// let categories = [];

// ({ openingHours, categories } = restaurant); // variable names should be same as in the object

// ({ categories, openingHours } = { openingHours, categories }) //swaping will not work here

//nested objects destructuring

// const { openingHours: { fri:friday='noday' } } = restaurant;
// console.log(friday);

// we can also do destructuring right in the function definition where we define the parameters then just pass an object or array to the function at function call and see magic . by using this way we dont have to care about the order of the arguments the only thing we have to care is property names inside the object we are passing to the function should match with the function parameters

// assignment 2

// 2.1

// const [{ title, author, ISBN }] = books;
// OR
// const { title, author, ISBN } = books[0];

// console.log(title,author,ISBN);

// 2.2

// const [{ keywords: tags }] = books;
// OR
// const { keywords: tags } = books[0];

// console.log(tags);

// 2.3

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(programmingLanguage);

// 2.4

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0])
// console.log(bookTitle, bookAuthor);

// 2.5

// const [{ thirdParty: { goodreads: { rating: bookRating } } }] = books;
// console.log(bookRating);

// 2.6

// const printBookInfo = ({ title, author, year = 'year unknown' }) => {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// ...(spread operator)

// ...array_name expands all the elements of the array in place
// ...array_name === array_name[0], array_name[1], array_name[2], . . . . . 

// restaurant.mainMenu = [...restaurant.mainMenu , 'Gnocci']
// console.log(restaurant.mainMenu);

// only used in situations where we want all array elements seperated by commas

//usecases of spread operator

//copy array

// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy);

//merging arrays

// const menuMerged = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuMerged);

// spread operator can be used on all iterables in JS (i.e: Arrays,Strings,Maps,Sets ... etc except Objects)

// const lettersInName = [...restaurant.name];
// console.log(lettersInName);

// we can not use spread operator inside a template literar (i.e : ${}) because it does not expect values seperated by commas the only place that expects it is when passing values to functions or when creating arrays so we use spread operator only in these places

// since es 2018 update we can now use spread operator with objects e.g:

// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' }
// console.log(newRestaurant);

// we can also do deep copy of both arrays and objects using spread operator without using the object.assign() function which do shallow copy instead(references are same) e.g :

// const copyRestaurant = { ...restaurant }
// copyRestaurant.name = `LYNX Spice Company`

// console.log(restaurant.name);

// assignment 3

// 3.1

// const bookAuthors = [...books[0].author , ...books[1].author];
// console.log(bookAuthors);

// 3.2

// const spellWord = (str) => {
//   console.log(...str);
// }

// spellWord("Hello, World!")

// rest operator

//assignment 4

// 4.1

// const [{ keywords: [mainKeyword, ...rest] }] = books;
// console.log(mainKeyword, rest);

// 4.2

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher,restOfTheBook);

// 4.3

// const printBookAuthorsCount = (title, ...authors) => {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// printBookAuthorsCount(books[4].title, ...books[4].author)

// Assignment 5

// 5.1

// const hasExamplesInJava = (book) => {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }

// console.log(hasExamplesInJava(books[0]));

// 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
// }

// Assignment 6

// 6.1

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content`);
// }

// 7.1

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ??= 1;
// }

// 7.2

//initial setup for assignment
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted ||= true;
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

//? 8.1

// let pageSum = 0;
// for (const { pages: pg } of books) pageSum += pg;
// console.log(pageSum);

//? 8.2

// const allAuthors = [];

// for (const { author } of books) {
//   if (typeof author === 'object')
//     allAuthors.push(...author);

//   else
//     allAuthors.push(author);
// }

// console.log(allAuthors);

//? 8.3
//! Note : previous task's solution (8.2) is req as pre req for this task

// for (const [i, author] of allAuthors.entries())
//   console.log(`${i + 1}. ${author}`)

//? 9.1

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

//* Do the rest

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
// };

// console.log(newBook);


//? 9.2

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// }

// console.log(newBook2.pages);

//? 10.1

// const getFirstKeyword = (book) => {

//   return book?.abu;
// }

// console.log(getFirstKeyword(books[0]));

//? 11.1

// const entries = [];

// const myObj = {
//   name: 'Lynx'
// }

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// console.log("🚀 ~ entries:", entries)

//? 11.2
//! previus assignment is required

// for (const [i, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[i].push(value);
// }

// console.log(entries);

//? 11.3
//! previus assignment is required
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

//? 11.4
//! previus assignment is required

// console.log(entries,entries2);

//? 12.1
const allKeywords = [];

//my way
// for (const { keywords: [...a] } of books) {
//   allKeywords.push(...a);
// }

for (const book of books) {
  allKeywords.push(...book.keywords);
}
// console.log(allKeywords);

//? 12.2
//! previus assignment is required

const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

//? 12.3
//! previus assignment is required

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
// console.log(uniqueKeywords);

//? 12.4
//! previus assignment is required

uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

//? 12.5
//! previus assignment is required

const uniqueKeywordsArr = [...uniqueKeywords];

//? 12.6

uniqueKeywords.clear();
// console.log(uniqueKeywords);

//? 13.1 : Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data: [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
// can not be any array array should have a key, value formate as the above array has

// bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');

// console.log(bookMap);

//? 13.2 : Set a new key in bookMap called pages, and assign it with a number 464.

bookMap.set('pages', 464);
// console.log(bookMap);

//? 13.3 : Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

//? 13.4 : Get the size of bookMap, and log it to the console.

// console.log(bookMap.size);

//? 13.5 : Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

// bookMap.has('author') && console.log("The author of the book is known")

//more readable way 
// if (bookMap.has('author')) console.log('The author of the book is known');

//? 14.1 : Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

//? 14.2 : Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number')
//     console.log(key);

//   less readable way
//   typeof value === 'number' && console.log(key);
// }

//? 15.1 : Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

// console.log(books[0].ISBN['6'], books[0].ISBN['4'], books[0].ISBN['9'], books[0].ISBN[8]);

//? 15.2 : Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

//? 15.3 : Extract the word "boxing" from the same quote string, and log it to the console.
// console.log(quote.slice(quote.indexOf('boxing')))

//? 15.4 : Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.


// const isContributor = (author) => {
//   return author.indexOf('(Contributor)') !== -1;
// }

// console.log(isContributor('Julie Sussman (Contributor)'));

//? 16.1 : Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

//? You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

const normalizeAuthorName = (author) => {
  const newAuthor = author.trim().toLowerCase();

  const firstName = newAuthor.slice(0, newAuthor.indexOf(' '));
  const lastName = newAuthor.slice(newAuthor.indexOf(' ') + 1, newAuthor.lastIndexOf(' '));

  return firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1);
}

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

//? 16.2 : Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);

//? 16.3 : Write a function called logBookTheme that takes book's title (string), and logs to the console:

//?"This book is about computers" if the title starts with the word "computer",

//?"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

const logBookTheme = (title) => {
  title = title.toLowerCase();

  if (title.startsWith('computer'))
    console.log("This book is about computers");
  else if (title.includes('structures') && title.includes('algorithms'))
    console.log('This book is about algorithms and data structures');
  else if ((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating'))
    console.log('This book is about some systems, but definitely not about operating systems');
}

const str = 'Computer'
// logBookTheme(str);

//? 17.1 : Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

//? Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = (categories) => {
  console.log(...categories.split(';'));
}

// logBookCategories(bookCategories);

//? 17.2 : Now, the opposite. Each book from the books array has the keywords property.

//? Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

const getKeywordsAsString = (books) => {
  const keywords = []

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(';');
}

// console.log(getKeywordsAsString(books))

//? 17.3 : Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

//? Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

//? Use the padEnd method.

const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];

const logBookChapters = (bookChapters) => {
  for (const [title, pageNo] of bookChapters) {
    console.log(title.padEnd(20, '_') + ' ' + pageNo);
  }
}

// logBookChapters(bookChapters);