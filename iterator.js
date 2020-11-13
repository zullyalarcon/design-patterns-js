var brandCategories = ['Chevrolet',
    'Amazon',
    'Alqueria',
    'Aval'
];

const iterator = brandCategories[Symbol.iterator]();
let iteratorResult = iterator.next();

while (!iteratorResult.done) {
    console.log(iteratorResult.value);
    iteratorResult = iterator.next();
}