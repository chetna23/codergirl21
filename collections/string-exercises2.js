let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = (dna.trim()).toUpperCase();
console.log(dna);

// console.log(dna.replace('GCT', 'AGG'));
dna = dna.replace('GCT', 'AGG');
// console.log(dna);

if(dna.indexOf('CAT') !== -1) {
    console.log('CAT found');
} else {
    console.log('CAT NOT found');
}

console.log(dna.slice(8,11));

console.log(`The DNA strand is ${dna.length} characters long`);

console.log(`taco ${dna.slice(40,43)}`.toLowerCase());

