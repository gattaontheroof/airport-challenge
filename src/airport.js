export default class Airport {
    #airportAirplanes = [];
    #maxCapacity;
    #isStormy = false;

    constructor(maxCapacity){
        this.#maxCapacity = maxCapacity;
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    getAirportAirplanes() {
        return this.#airportAirplanes;
    }

    setMaxCapacity(newMaxCapacity){
         
        // If less than zero return
        if(newMaxCapacity < 0)
            return;

        if(newMaxCapacity < this.#airportAirplanes.length){
            return
        }

        this.#maxCapacity = newMaxCapacity;
    }

    isFull(){
        return this.#maxCapacity == this.#airportAirplanes.length;  
    }

    addAirplane = airplane => { 
        if(!airplane || !airplane.getId()) return;
        this.#airportAirplanes.push(airplane);
    }

    removeAirplane = airplaneToRemove => { 
        if(!airplaneToRemove || !airplaneToRemove.getId()) return; 
        this.#airportAirplanes = this.#airportAirplanes.filter(airplane => airplane.getId() !== airplaneToRemove.getId());
    }

    airplaneIsPresent = airplaneToCheck => {
        if(!airplaneToCheck || !airplaneToCheck.getId()) return false;
        let airplanesWithMatchingId = this.#airportAirplanes.filter(airplane => airplane.getId() == airplaneToCheck.getId());
        return airplanesWithMatchingId.length > 0;
    }

    setIsStormy(isStormy) {
        this.#isStormy = isStormy;
    }

     getIsStormy(){
        return this.#isStormy;
     }

    /* An airplane can land if it is not stormy and if the airport is not full, and it is not present at the airport.
        Once the airplane lands, it is added from the airport
     */ 

     instructPlaneToLand(airplane){
        if(this.#isStormy){
            return false;
        } 
        if(this.isFull()){
            return false;
        }
        if(this.airplaneIsPresent(airplane)){
            return false;
        }
        this.addAirplane(airplane);

        return true;
     }

     /* An airplane can take of if it is not stormy and it is present at the airport
        Once the airplane takes off, it is removed from the airport
     */ 
     instructPlaneToTakeOff(airplane){
        if(this.#isStormy){
            return false;
        } 
        if(!this.airplaneIsPresent(airplane)){
            return false;
        }
        this.removeAirplane(airplane);

        return true;
     }

}