import Airport from "../src/airport.js";
import Airplane from "../src/airplane.js";
import { assertEquals, it } from "./test-framework/test-framework.js";

let expectedOutput, actualOutput, result;

it( 'Test 1.1 - Add airplane to airport using addAirplane and expect airportAirplanes array has increased in length by 1', () => {
    
    // Arrange
    let airport = new Airport();
    let airplane1 = new Airplane ("id-045");
    let expectedOutput = 1;

    // Act
    airport.addAirplane(airplane1);
    actualOutput = airport.getAirportAirplanes().length;
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it( 'Test 1.2 - Test that airplane passed to addAirplane is actually added to the airport', () => {
    // Arrange
    let airport = new Airport();
    let airplane1 = new Airplane ("id-045");
    let expectedOutput = "id-045";

    // Act
    airport.addAirplane(airplane1);
    actualOutput = airport.getAirportAirplanes()[0].getId();

    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 1.3 - An airplane without an id property is not added to the airplane', () => {
    // Arrange
    let airport = new Airport();
    let airplane = new Airplane();
    let expectedOutput = 0;

    // Act
    airport.addAirplane(airplane);
    let actualOutput = airport.getAirportAirplanes().length;

    // Assert
    assertEquals(expectedOutput, actualOutput);
});

it('Test 1.4 - It is possible to add to an airport with existing airplanes', () => {
    // Arrange
    let airport = new Airport();
    let airplane1 = new Airplane("id-045");
    let airplane2 = new Airplane("id-046");
    let expectedOutput = 2;

    // Act
    airport.addAirplane(airplane1);
    airport.addAirplane(airplane2);
    let actualOutput = airport.getAirportAirplanes().length;

    // Assert
    assertEquals(expectedOutput, actualOutput);
});

it('Test 1.5 - Airplane with null is not added to the airport ', () => {
     // Arrange
     let airport = new Airport();
     let airplane1 = null;
     let expectedOutput = 0;
 
     // Act
     airport.addAirplane(airplane1);
     let actualOutput = airport.getAirportAirplanes().length;
 
     // Assert
     assertEquals(expectedOutput, actualOutput);
});


it('Test 2.1 - Remove airplane from airport using removeAirplane and expect array (airportAirplanes) has decreased in length by 1. ', () => {
    // Arrange
    let airport = new Airport();
    let airplane1 = new Airplane("id-045");
    airport.addAirplane(airplane1);
    let expectedOutput = 0;
    
    // Act
    airport.removeAirplane(airplane1);
    let actualOutput = airport.getAirportAirplanes().length;
        
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 2.2 - Cannot remove an airplane that does not exist ', () => {
     // Arrange
     let airport = new Airport();
     airport.addAirplane(new Airplane("id-045"));
     airport.addAirplane(new Airplane("id-035"));
     let expectedOutput = 2;
 
     // Act
     airport.removeAirplane(new Airplane("id-321"));
     let actualOutput = airport.getAirportAirplanes().length;
     
     // Assert
     assertEquals(actualOutput, expectedOutput);
});

it('Test 3.1 - Check that the airport is full, if the capacity is 2 and there are 2 airplanes in it, return true', () => {

    // Arrange
    let airport = new Airport(2);
    airport.addAirplane(new Airplane("id-045"));
    airport.addAirplane(new Airplane("id-035"));
    let expectedOutput = true;

    // Act
    let actualOutput = airport.isFull();
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 4.1 - Can override airport capacity by changing it from 10 to 15', () => {

    // Arrange
    let airport = new Airport(10);
    let expectedOutput = 15;

    // Act
    airport.setMaxCapacity(15);
    let actualOutput = airport.getMaxCapacity();
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 4.2 - Cannot set capacity to a negative integer ', () => {

    // Arrange
    let airport = new Airport(10);
    let expectedOutput = 10;

    // Act
    airport.setMaxCapacity(-7);
    let actualOutput = airport.getMaxCapacity();
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 4.3 - Cannot set capacity lower than current number of airplanes at the airport ', () => {

    // Arrange
    let airport = new Airport(2);
    airport.addAirplane(new Airplane("id-045"));
    airport.addAirplane(new Airplane("id-035"));
    let expectedOutput = 2;

    // Act
    airport.setMaxCapacity(1);
    let actualOutput = airport.getMaxCapacity();
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 5.1 - Airplane is present, returns true if the airplane is at the airport', () => {
    
    // Arrange
    let airport = new Airport();
    let airplane = new Airplane("id-045");
    airport.addAirplane(airplane);
    airport.addAirplane(new Airplane("id-035"));
    let expectedOutput = true;

    // Act
    let actualOutput = airport.airplaneIsPresent(airplane);
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
    
});

it('Test 5.2 - Airplane is present, returns false if the airplane is not at the airport ', () => {
    // Arrange
    let airport = new Airport();
    airport.addAirplane(new Airplane("id-045"));
    airport.addAirplane(new Airplane("id-035"));
    let expectedOutput = false;

    // Act
    let actualOutput = airport.airplaneIsPresent(new Airplane("id-099"));
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 6.1 Returns true when it is stormy (isStormy is true) ', () => {
    // Arrange
    let airport = new Airport();
    airport.setIsStormy(true);
    let expectedOutput = true;

    // Act
    let actualOutput = airport.getIsStormy();

    // Assert
    assertEquals(actualOutput, expectedOutput);
});


it('Test 7.1 Can instruct plane to land - returns true when airport is not full, airplane is not at the airport and is it not stormy ', () => {
    // Arrange
    let airport = new Airport(9);
    let airplane = new Airplane("id-045");
    let expectedOutput = true;

    // Act
    let actualOutput=airport.instructPlaneToLand(airplane);
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

it('Test 8.1 Can instruct plane to take off - returns true if airplane is at the airport and is it not stormy  ', () => {
    // Arrange
    let airport = new Airport();
    let airplane1 = new Airplane("id-045");
    airport.addAirplane(airplane1);
    let expectedOutput = true;

    // Act
    let actualOutput=airport.instructPlaneToTakeOff(airplane1);
    
    // Assert
    assertEquals(actualOutput, expectedOutput);
});

