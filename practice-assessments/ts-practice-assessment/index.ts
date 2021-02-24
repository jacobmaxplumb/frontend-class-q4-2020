// bullet point one - make interface
interface Car {
    make: string;
    model: string;
    year: number;
    hybrid: boolean;
}



// bullet point two and three - make array of cars
const dealership: Car[] = [
    {make: 'Toyota', model: 'Prius', year: 2020, hybrid: true},
    {make: 'Toyota', model: 'Prius', year: 2021, hybrid: true},
    {make: 'Ford', model: 'F-150', year: 2015, hybrid: false},
    {make: 'Ferrari', model: 'Enzo', year: 2004, hybrid: false}
];



// bullet point four - make function to find cars by model
// const findCars = (arrayOfCars: Car[], model: string): Car[] => {
//     return arrayOfCars.filter((car: Car) => car.model === model);
// }
// same as commented lines above
function findCars(arrayOfCars: Car[], model: string): Car[] {
    return arrayOfCars.filter((car: Car) => car.model === model);
}
//console.log(findCars(dealership, 'Enzo'));



// bullet point five - function to add a car
const addCar = (arrayOfCars: Car[], make: string, model: string, year: number, hybrid: boolean): void => {
    const car: Car = {
        make,
        model,
        year,
        hybrid
    };
    arrayOfCars.push(car);
}
// console.log('Original\n------------------------');
// console.log(dealership);
// addCar(dealership, 'test make', 'test model', 2000, false);
// console.log('New List\n------------------------')
// console.log(dealership);



// bullet point six - finding the hybrid cars
const areThereAnyHybridsForSale = (arrayOfCars: Car[]): boolean => {
    let hasHybrids = false;
    const hybridCars = arrayOfCars.filter((car: Car) => car.hybrid);
    if (hybridCars.length > 0) {
        hasHybrids = true;
    }
    return hasHybrids;
}

// const dealership2: Car[] = [
//     {make: 'Ford', model: 'F-150', year: 2015, hybrid: false},
//     {make: 'Ferrari', model: 'Enzo', year: 2004, hybrid: false}
// ];

// console.log(areThereAnyHybridsForSale(dealership));
// console.log(areThereAnyHybridsForSale(dealership2));




// bullet point seven - is the warranty expired
const expiredWarranty = (car: Car): boolean => {
    if (car.year <= 2010) {
        return true;
    }
    return false;
}

// const car1 = dealership[0]; // return false
// const car2 = dealership[3]; // return true

// console.log(expiredWarranty(car1));
// console.log(expiredWarranty(car2));


