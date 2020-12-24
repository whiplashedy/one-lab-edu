
class Transport 
{
    constructor(options)
    {
        this.name=options.name
        this.color=options.color
    }

    move()
    {
        console.log('I am transport ')
    }
    activate()
    {
        this.activated = true
    }
    deactivate()
    {
        this.deactivate = false
    }
    getStatus()
    {
        this.status = activate
    }



}
const transport = new Transport(
    {
        name : 'tractor',
        color : 'Black',
        isActive: 'true'
    }
)


class Car extends Transport{

    constructor(options)
    {
        super(options);
        this.seatPlaces= options.seatPlaces
        this.moveSpeed = options.moveSpeed
    }

    move()
    {
        console.log('I AM CAR');
    }
}
    const car = new Car(
       {
           name : 'MERS',
           color: 'White',
           seatPlaces: '5',
           moveSpeed: '80km/h'
       }
   )

   class Bus extends Transport
   {
    constructor(options)
    {
        super(options);
        this.seatPlaces= options.seatPlaces
        this.moveSpeed = options.moveSpeed
    }

    move()
    {
        console.log('I AM BUS');
    }

   }
   const bus = new Bus(
    {
        name : 'MERS',
        color: 'White',
        seatPlaces: '50',
        moveSpeed: '30km/h'
    }
   )

   class Plain extends Transport
   {
    constructor(options)
    {
        super(options);
        this.seatPlaces= options.seatPlaces
        this.moveSpeed = options.moveSpeed
    }
    move()
    {
        console.log('I AM PLAIN');
    }

   }
   const plain = new Plain(
    {
        name : 'MERS',
        color: 'White',
        seatPlaces: '150',
        moveSpeed: '800km/h'
    }
   )

   
   class Toyota extends Car
   {
    constructor(options)
    {
        super(options);
        this.model= options.model
        this.hp = options.hp
    }
    accelerate()
    {

    }
   } 
   const toyota = new Toyota(
    {
        name : 'Toyota',
        color: 'White',
        seatPlaces: '5',
        moveSpeed: '80km/h',
        model: 'LAND Cruiser 200',
        hp: '370'
        
    }
   )
   class Setra extends Bus
   {
    constructor(options)
    {
        super(options);
        this.model= options.model
        this.hp = options.hp
    }
    accelerate()
    {

    }
   }
   const setra = new Setra(
    {
        name : 'Setra',
        color: 'White',
        seatPlaces: '50',
        moveSpeed: '40km/h',
        model: 'Setra 100',
        hp: '120'
        
    }
   )
   class Boeing extends Plain
   {
    constructor(options)
    {
        super(options);
        this.model= options.model
        this.hp = options.hp
    }
    accelerate()
    {

    }
   }
   const boeing= new Boeing(
    {
        name : 'Boeing',
        color: 'Black',
        seatPlaces: '150',
        moveSpeed: '800km/h',
        model: 'Boeing 720',
        hp: '110000'
        
    }
   )
   
   