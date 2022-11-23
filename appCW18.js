
/*
const person = {id: 123, first_name: 'Vasya',
last_name: 'Ivanov', year: 2000,
address:{city: 'Lod', street: 'Skplov', app: 100}
};
console.log(person.year);
const yearExp = "ye" + "ar";
console.log (person[yearExp]);
const personArr = [123, 'Vasya', 'Ivanov', 2000, ['Lod', 'Skplov', 100]];
console.log (personArr[3]);
const name1 = 'first_name';
console.log(person[name1]);
const name2 = getAddressKey();
console.log(person.address[name2]);
console.log(person.address);
function getAddressKey ()
{
    return "app";
}
*/

function displayOccurences (strings) {
    const occurences = {};
    strings.forEach(element => {
        if (occurences[element]){
            occurences[element]++;
        }  else {
            occurences[element] = 1;
        }
       // console.log(occurences);

    })
   //console.log(Object.entries(occurences));
    const occurencesAr= Object.entries(occurences);
    occurencesAr.sort((e1, e2) => e2[1] - e1[1]);
    console.log(occurencesAr);
}

const strings = ['a', 'opr','lmn', 'abc', 'lmn', 'lmn', 'abc', 'a'];
displayOccurences (strings);



const strings1 = ['a'];
/*
const x = {};
const string = "abc";
x[string] = 1;
console.log (x);
x[string]++
console.log (x);
*/