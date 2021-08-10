interface ICustomType {
    length: number;
}

function showTotalQuantity<CustomType extends ICustomType>(
    quantity: CustomType
): CustomType {
    console.log(`length: ${quantity.length}`);
    return quantity;
}

console.log(showTotalQuantity([1, 2, 3]));
console.log(showTotalQuantity(['1', '2', '3', '4']));
console.log(showTotalQuantity({ teste: 123, length: 456 }));
