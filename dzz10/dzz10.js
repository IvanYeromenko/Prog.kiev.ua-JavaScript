class Auto {
    constructor(brand, model, year, vinCode, seatsCount) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode;
        this.seatsSeat = seatsCount;
    }

    getName() {
        console.log(this.brand, this.model, this.year);
    }

    getVinCode() {
        console.log(this.vinCode);
    }

    getSeatsCount() {
        console.log(this.seatsCount);
    }
}

class Auto_fuel extends Auto {
    constructor(brand, model, year, vinCode, seatsCount, space) {
        super(brand, model, year, vinCode, seatsCount);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode;
        this.seatsSeat = seatsCount;
        this.space = space;
    }

    getSpace() {
        console.log(this.space);
    }
}

class Auto_electro extends Auto {
    constructor(brand, model, year, vinCode, seatsCount, capacity) {
        super(brand, model, year, vinCode, seatsCount);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode;
        this.seatsCount = seatsCount;
        this.capacity = capacity;
    }

    getCapacity() {
        console.log(this.capacity);
    }
}

let a = new Auto('Volkswagen', 'Golf GTI', 2020, "0000000000000000", 5);
let b = new Auto_fuel('Volkswagen', 'Beetle Turbo', 2013, "1111111111111111", 5, 2);
let c = new Auto_electro('Volkswagen', 'E-Golf', 2016, "3333333333333333", 5, 24);