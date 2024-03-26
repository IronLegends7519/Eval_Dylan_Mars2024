// # Exercices d'algorithme

// ## Exercice 1.

// Écrivez une fonction `isString` qui prend un parametre `myString`. Cette fonction vérifie si ce parametre est une string (chaîne de caractèes).  La fonction retourne vrai si c'est une string et faux dans le cas contraire.

// Vous devez utiliser `typeof` au sein de cette fonction


function isString(myString) {
    let result = false
    if(typeof myString === "string"){
        result = true
    }
    console.log(result)
}

isString("Marc") // true
isString(2) // false



// ## Exercice 2

// Écrivez une fonction `greetings` qui prend un paramètre `isStudent`. Ce paramètre est un booléen. S'il vaut `true` alors le message "Bienvenue cher élève" doit s'afficher. Sinon, le message "Bienvenue cher parent" s'affiche.

// JavaScript
function greetings(isStudent) {
    if(isStudent){
        console.log('bienvenue cher élève')
    }
    else{
        console.log('Bienvenue cher parent')
    }
}

greetings(true) // Bienvenue cher élève
greetings(false) // Bienvenue cher parent



// ## Exercice 3

// Écrivez une fonction `checkWord` qui prend un paramètre `word`. Ce paramètre est une `string`. Si ce paramètre contient moins de 3 caractères, alors le message **Ce mot est trop court** doit s'afficher. Sinon, la fonction affiche **Le mot ${word} est tout à fait correct**.


function checkWord(word) {
    if(word.length < 3){
        console.log('Ce mot est trop court')
    }
    else{
        console.log(`le mot ${word} est tout à fait correct`)
    }
}

checkWord("qw") // Ce mot est trop court
checkWord("pizza") // Le mot pizza est tout à fait correct



// ## Exercice 4

// Écrivez une fonction `makeSum` qui prend deux paramètres `number1` et `number2`. Ces deux paramètres sont des nombres. Cette fonction retourne la `sum` de deux paramètres.


function makeSum(number1, number2) {
    let result = number1 + number2
    console.log(result)
}

makeSum(2, 3) // Retourne 5



// ## Exercice 5

// Écrivez une fonction `makeSumFromArray` qui prend un paramètre `numbers`. Ce paramètre est un tableau de nombres. Cette fonction retourne la somme de tous les nombres du tableau. Vous devez obligatoirement utiliser une boucle `for`.


function makeSumFromArray(numbers) {
    let result = 0
    for(let i =0;i<numbers.length;i++){
        result += numbers[i]
    }
    console.log(result)
}

makeSumFromArray([1, 2, 3, 5]) // Retourne 11



// ## Exercice 6

// Écrivez une fonction `findOddNumbers` qui prend un paramètre `numbers`. Ce paramètre est un tableau de nombres. Cette fonction retourne un tableau de tous les nombres impairs présents dans le tableau. Vous devez obligatoirement utiliser une boucle `for`.


function findOddNumbers(numbers) {
    const result = []
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i]%2 !== 0){
            result.push(numbers[i])
        }
    }
    console.log(result)
}

findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21]) // [1, 5, 7, 11, 13, 19, 21]



// ## Exercice 7

// Écrivez une fonction `filterArray` qui prend un paramètre `myArray`. Ce paramète est un tableau contenant des nombres, des chaînes de caractère et des booléens. Cette fonction retourne un tableau ne contenant que des nombres. Vous devez obligatoirement utiliser une boucle `for`.


function filterArray(myArray) {
    let result = []
    for(let i = 0;i<myArray.length;i++){
        if(typeof myArray[i] === 'number'){
            result.push(myArray[i])
        }
    }
    console.log(result)
}

filterArray([1, 2, true, "Tom", "Max", false, 4, 5, 6, "John"]) // [1, 2, 4, 5, 6]



// ## Exercice 8

// Écrivez une fonction `concatString` qui prend un paramètre `arrayOfStrings`. Ce paramètre est un tableau contenant des strings. Cette fonction retourne une string concaténant l'ensemble des strings contenant dans le tableau `arrayOfStrings`. Vous devez obligatoirement utiliser une boucle `for`.


function concatString(arrayOfStrings) {
    let result =""
    for(let i =0;i<arrayOfStrings.length;i++){
        result += arrayOfStrings[i]
    }
    console.log(result)
}

concatString(["Un", " ", "code", " ", "de", " ", "qualité"]) // "Un code de qualité"



// ## Exercice 9

// Écrivez une fonction `findElementByWord` qui prend deux paramètre `arrayOfStrings` et `term`. Le premier paramètre est un tableau de strings et le deuxième une string. La fonction retourne `true` si l'élément `term` est présent dans le tableau. Sinon, elle retourne `false`. Vous devez obligatoirement utiliser une boucle `for`.


function findElementByWord(arrayOfStrings, term) {
    let result = false
    for(let i = 0;i<arrayOfStrings.length;i++){
        if(arrayOfStrings[i] === term){
            result = true
        }
    }
    console.log(result)
}

findElementByWord(["max", "peter", "john"], "peter") // true
findElementByWord(["max", "peter", "john"], "tom") // false



// ## Exercice 10

// Écrivez une fonction `lowerCaseWords` qui prend un paramètre `arrayOfStrings`.  Ce paramètre est un tableau contenant des strings. Cette fonction retourne un tableau de strings en minuscules. Vous devez obligatoirement utiliser une boucle `for`.


function lowerCaseWords(arrayOfStrings) {
    let result = [];
    for(let i = 0;i<arrayOfStrings.length;i++){
        result.push(arrayOfStrings[i].toLowerCase())
    }
    console.log(result)
}
lowerCaseWords(["uN", " jOLI", " CheVAl ", "BlANc"]) // ["un", " joli", " cheval ", "blanc"]



// ## Exercice 11

// Écrivez une fonction `mergeArray` qui prend deux paramètres `array1` et `array2`. Ces deux paramètres sont des tableaux de type number. Cette fonction retourne un tableau contenant les deux paramètres fusionnés. Vous devez obligatoirement utiliser une boucle `for`. Vous ne devez pas utiliser une méthode `contact`


function mergeArray(array1, array2) {
    let result = []
    for(let i = 0;i<array1.length;i++){
        result.push(array1[i])
    }
    for(let i = 0;i<array2.length;i++){
        result.push(array2[i])
    }
    console.log(result)
}

mergeArray([1, 3, 2], [4, 1, 3, 2]) // [1, 3, 2, 4, 1, 3, 2]



// ## Exercice 12

// Écrivez une fonction `makeFriends` qui prend un paramètre `friends`. Ce paramètre est un tableau d'objets. Cette fonction retourne toutes les valeurs des propriétés `friends` dans un tableau de strings. Vous devez obligatoirement utiliser une boucle `for`.


function makeFriends(friends) {
    let result = []
    for(let i = 0;i<friends.length;i++){
        result.push(friends[i].firstName)
    }
    console.log(result)
}

const myFriends = [
    {
        firstName: "Max",
        lastName: "Verstappen",
        age: 27
    },
    {
        firstName: "Lewis",
        lastName: "Hamilton",
        age: 37
    },
    {
        firstName: "Daniel",
        lastName: "Ricciardo",
        age: 36
    }
]

makeFriends(myFriends) // ["Max", "Lewis", "Daniel"]



// ## Exercice 13

// Écrivez une fonction `findTeamPrincipal` qui prend un paramètre `people`. Ce paramètre est un tableau d'objets. Cette fonction retourne uniquement les objets contenant la valeur `isTeamPrincipal: true` sous forme de tableaux d'objets. Vous devez utiliser des boucles `for`.


function findTeamPrincipal(people) {
    let result = []
    for(let i = 0 ; i<people.length;i++){
        if(people[i].isTeamPrincipal === true){
            result.push(people[i])
        }
    }
    console.log(result)
}

let somePeople = [
    {
        firstName: 'Toto',
        lastName: 'Wolff',
        isTeamPrincipal: true
    },
    {
        firstName: 'Lando',
        lastName: 'Noris',
        isTeamPrincipal: false
    },
    {
        firstName: 'Oscar',
        lastName: 'Piastri',
        isTeamPrincipal: false
    },
    {
        firstName: 'Christian',
        lastName: 'Horner',
        isTeamPrincipal: true
    }
]

findTeamPrincipal(somePeople)
/*
[
    {
        firstName: "Toto",
        isTeamPrincipal: true,
        lastName: "Wolff"
    },
    {
        firstName: "Christian",
        isTeamPrincipal: true,
        lastName: "Horner"
    }
]
*/



// ## Exercice 14

// Écrivez une fonction `findCar` qui prend deux paramètres `cars` et `query`. Le premier paramètre est un tableau d'objets et le deuxième une chaîne de caractères. Cette fonction retourne uniquement les objets dont la valeur de la propriété `brand` correspond au terme de `query`. Elle le retourne sous forme de tableaux d'objets. Vous devez utiliser des boucles `for`.


function findCar(cars, query) {
    let result=[]
    for(let i = 0;i<cars.length;i++){
        if(cars[i].brand === query){
            result.push(cars[i])
        }
    }
    console.log(result)
}

let someCars = [
    {
        driver: "Esteban Ocon",
        brand: "Alpine",
        isFast: false
    },
    {
        driver: "Charles Leclerc",
        brand: "Ferrari",
        isFast: true
    },
    {
        driver: "Sergio Perrez",
        brand: "Red Bull",
        isFast: true
    },
    {
        driver: "Pierre Gasli",
        brand: "Alpine",
        isFast: false
    }
]

findCar(someCars, "Alpine") 
/*
[
    {
        owner: "Esteban Ocon",
        brand: "Alpine",
        isFast: false
    },
    {
        driver: "Pierre Gasli",
        brand: "Alpine",
        isFast: false
    }
]
*/



// ## Exercice 15 (BONUS) 

// Écrivez une fonction `repeatString` qui prend deux paramètres `str` et `num`. Le premier est de type string et le deuxième de type number. Cette fonction répète la chaîne de caractères `str` le nombre de fois précisé par `num`. Utilisez uniquement des boucles `for`.



function repeatString(str, num) {
    let result = ""
    for(let i = 0;i<num;i++){
        result +=str
    }
    console.log(result)
}

repeatString("qsdf", 3) // qsdfqsdfqsdf


