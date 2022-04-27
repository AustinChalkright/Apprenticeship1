class Bag {
    constructor(weight) {
        this.weight = weight

    }
    isOverLimit(){
    if (this.weight>25){
        throw new Error('Bag is over limit')       
    }
}
}
try{
    const bag = new Bag(17)
}catch{
    alert('Error')
}

class Passenger{
    bags = [];
    constructor(name, passportNumber, seatNumber){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    }
    addBag(Bag){
        this.bags.push(Bag);
    }
}


class Airport{
    constructor(name){
        this.name=name
    }
}
class Plane{
    Passenger=[];
    constructor(type){
        this.type=type
    }
    board(Passenger){
        this.Passenger.push(Passenger)
    }
}

class crewMember{
    constructor(name, position, staffNumber){
        this.name=name
        this.position=position
        this.staffNumber=staffNumber
    }
}

const plane = new Plane('Easy Jet')
const austin = new Passenger('Austin Chalkright', "62736272", "16D");
const austinsCabinBag = new Bag(10);
const austinsHullBag = new Bag(22);

if(!austinsCabinBag.isOverLimit()){
    austin.addBag(austinsCabinBag);
}
if(!austinsHullBag.isOverLimit()){
    austin.addBag(austinsHullBag);
}
