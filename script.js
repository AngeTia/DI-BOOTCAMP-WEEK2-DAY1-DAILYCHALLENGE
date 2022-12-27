// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();//Supprime le premier élément de ma liste
fruits.sort();//Trie les éléments par ordre alphabetique
fruits.push("Kiwi");//Ajoute "Kiwi" à la fin de la liste
delete fruits[1];//Supprime l'élément à l'index 1
fruits.reverse();//Renverse les éléments de la liste
console.log(fruits);

// Exercice 2 :
// En utilisant ce tableau :

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);