
import Airplane from "./airplane.js";
import Airport from "./airport.js";

// Create an airplane
console.log('Create an airplane');
let airplane = new Airplane("id-123");
console.log(airplane);
console.log('***********************************');
console.log();

// Create an airport
console.log('Create an airport');
let airport = new Airport();
console.log(airport);
console.log('The airport is empty: ')
console.log(airport.getAirportAirplanes());
console.log('***********************************');
console.log();

// Add an airplane to the airport
console.log("Add an airplane to the airport")
let airplane1 = new Airplane("id-123");
airport.addAirplane(airplane1);
console.log(airport);
console.log('The airport contains: ', airport.getAirportAirplanes().length, "airplanes.");
console.log('***********************************');
console.log()

// Show an airplane with no ID cannot be added to the airport
console.log('Show an airplane with no ID cannot be added to the airport');
let airplane2 = new Airplane();
airport.addAirplane(airplane2);
console.log('Does airport contain the airplane?: ', airport.airplaneIsPresent(airplane2));
console.log('***********************************');
console.log();

// It is possible to add an airplane to an airport with existing airplanes
console.log('It is possible to add an airplane to an airport with existing airplanes');
let airport1= new Airport();
let airplane3 = new Airplane("id-045");
let airplane8 = new Airplane("id-055");
let airplane9 = new Airplane("id-046");
airport1.addAirplane(airplane3);
airport1.addAirplane(airplane8);
airport1.addAirplane(airplane9);
console.log('Was the airplane added to the airport with existing airplanes?', airport1.airplaneIsPresent(airplane8));
console.log('***********************************');
console.log();

// Airplane with null not added to the airport
console.log('Airplane with null not added to the airport');
let airplane4 = null;
airport.addAirplane(airplane4);
console.log('Was airplane with null added to the airport?' , airport.airplaneIsPresent(airplane4));
console.log('***********************************');
console.log();

// Remove an airplane from the airport
console.log("It is possible to remove an airplane from the airport")
console.log("Currently at the airport:")
console.log(airport1.getAirportAirplanes().length);
console.log('Removing an airplane...')
airport1.removeAirplane(airplane9);
console.log("Currently at the airport:")
console.log(airport1.getAirportAirplanes().length);
console.log('***********************************');
console.log();

// It is impossible to remove an airplane that does not exist
console.log("It is impossible to remove an airplane that does not exist");
console.log("Currently at the airport:")
console.log(airport1.getAirportAirplanes().length);
console.log('Removing an airplane which in not at the airport...')
airport1.removeAirplane(new Airplane("id-321"));
console.log("Currently at the airport:")
console.log(airport1.getAirportAirplanes().length);
console.log('***********************************');
console.log();

// It is possible to check if the airport is full
console.log("It is possible to check if the Airport is full");
let airport2 = new Airport(2);
airport2.addAirplane(new Airplane("id-222"));
airport2.addAirplane(new Airplane("id-333"));
console.log("Is the airport full? ", airport2.isFull());
console.log('***********************************');
console.log();

// It is possible to override the airport capacity
console.log("It is possible to override the airport capacity");
console.log("Current capacity: ", airport2.getMaxCapacity());
console.log("Setting capacity to 3")
airport2.setMaxCapacity(3)
console.log("Current capacity: ", airport2.getMaxCapacity())
console.log('***********************************');
console.log();

// It is possible to check if the airplane is currently present at the airport
console.log("It is possible to check if the airplane is currently present at the airport");
let airport4 = new Airport();
let airplane5 = new Airplane("id-333");
airport4.addAirplane(airplane5);
console.log("Added");
let isAirplanePresent = airport4.airplaneIsPresent(airplane5);
console.log("Airplane", airplane5.getId(), "is present at the airport:", isAirplanePresent);
console.log('***********************************');
console.log()


// It is possible to check if the weather is stormy
console.log("the weather is stormy?");
let airport3 = new Airport();
airport3.setIsStormy(true);
console.log(airport3.getIsStormy());
console.log('***********************************');
console.log()

// It is possible to instruct an Airplane to land if the Airport is not full, the airplane is not at the Airport and it is not stormy
console.log("Instructing an airplane to land if the airport is not full, the airplane is not at the airport and it is not stormy");
let airport5 = new Airport(9);
let airplane7 = new Airplane("id-555");
console.log("Instruct to take off?  ", airport5.instructPlaneToLand(airplane7));
console.log('***********************************');
console.log()


// It is possible to instruct an airplane to take off if the airplane is at the airport and it is not stormy
console.log("Instructing an airplane to take off if the airplane is at the airport and it is not stormy");
let airport6 = new Airport(9);
let airplane6 = new Airplane("id-045");
airport6.addAirplane(airplane6);
console.log("Instruct to take off?  ", airport6.instructPlaneToTakeOff(airplane6));
console.log('***********************************');
console.log()

