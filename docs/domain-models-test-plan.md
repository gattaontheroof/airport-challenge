The software created in the "Airport Challenge - 1" is aimed at facilitating the control of airplane flow at an airport. It provides assistance to air traffic controllers in decision-making processes, specifically in determining whether to instruct an airplane to land or take off. The software offers essential information to air traffic controllers, indicating the availability of airport spaces and allowing them to check if a specific airplane is currently at the airport. Furthermore, it enables airports to monitor and adjust the airport capacity if needed.

However, there are risks associated with the software, including the consideration of a limited set of data (such as maximum capacity and exceptional weather conditions). It should be used solely as an indicator by experienced and certified traffic controllers and not as an absolute decision-making tool. Ultimately, the decision should be made by a qualified traffic controller.

The documentation of the project workflow can be found in trello (link below)

Kanban boards:

### https://trello.com/invite/b/peATdJFN/ATTI7e9b6dfc8083c0855142c2c1c68a45adCF32230A/airport-project-kanban 
# Domain Models and Test Plan

The screenshot of the initial kanban board (kanban-board.png) can be found in the docs folder
docs\kanban-board.png 
And the final screenshot:
docs\kanban-end.png 

# User story 1:
As a traffic controller
Once an airplane is instructed to land
I should be able to add it to the airport 
 
## Domain model 1:
 Objects   | Properties                          | Messages                 | Outputs |
| -------- | ------------------------------------| -------------------------| ------- |
| Airport  | airportAirplanes @Array[@Airplanes] | addAirplane(@Airplane)   | @Void   |
| Airplane | id @String                          |                          |         |


### Tests 1:
1)	Add airplane to airport using addAirplane and expect array (airportAirplanes) has increased in length by 1
2)	Test that airplane passed to addAirplane is actually added to the airport
3)	An airplane without an id property is not added to the airplane
4)	It is possible to add to an airport with existing airplanes
5)	Airplane with null is not added to the airport 

*****************************************************************************************
# User story 2:
As a traffic controller
Once an airplane successfully takes off
I should be able to remove it from the airport 

## Domain model 2:
| Objects | Properties                 		    | Messages                 | Outputs |
| ------- | ------------------------------------| ------------------------ | ------- |
| Airport | airportAirplanes @Array[@Airplanes] | removeAirplane(@Airplane)| @Void   |
| Airplane| id @String                          |                          |         |

### Tests 2:
1)	Remove airplane from airport using removeAirplane and expect array (airportAirplanes) has decreased in length by 1.
2)	Cannot remove an airplane that does not exist.

*****************************************************************************************

#  User story 3:
As a traffic controller
So that I know if there is space to land
I need to know if the airport is full

## Domain model 3:

| Objects   | Properties                         | Messages                 | Outputs  |
| ----------| -----------------------------------| ------------------------ | -------- |
| Airport   | airportAirplanes @Array[@Airplanes]| isFull()                 | @Boolean |
|           | maxCapacity @Integer               |                          |          |


### Tests 3:

1) Check that the airport is full, if the capacity is 2 and there are 2 airplanes in it, return true

*****************************************************************************************
# User story 4: 
As a traffic controller
If there should be change of circumstances to the airport,
I need to be able to override the maximum capacity

## Domain model 4:

| Objects  | Properties                 | Messages                           | Outputs  |
| -------  | -------------------------- | ---------------------------------- | -------- |
| Airport  | airportCapacity @Integer   |                                    |          |
|          |                            | setMaxCapacity(@Integer)           | @Void    |

### Tests 4:
1) Can override airport capacity and set airport capacity to a positive integer
2) Cannot set capacity to a negative integer.
3) Cannot set capacity lower than current number of airplanes at the airport

*****************************************************************************************


# User story 5:
As a traffic controller
So that I can a instruct a plane to land or take off,
I need to be able check if the plane is not already at the airport

## Domain model 5:


| Objects | Properties                          | Messages                           | Outputs  |
| ------- | -------------------------- ---------| ---------------------------------- | -------- |
| Airport | airportAirplanes @Array[@Airplanes] | airplaneIsPresent(@Airplane)       | @Boolean |
| Airplane| id @String                          | getId()              

### Tests 5:

1) Airplane is present, returns true if the airplane is at the airport
2) Airplane is present, returns false if the airplane is not at the airport

*****************************************************************************************


# User story 6 (Extras):

As a traffic controller
So that I can a instruct a plane to land or take off,
I need to know if weather is stormy

## Domain model 6:

| Objects | Properties                          | Messages                           | Outputs  |
| ------- | -------------------------- ---------| ---------------------------------- | -------- |
| Airport |  isStormy                           | isStormy()                         | @Boolean |

### Tests 6:

1) Returns true when it is stormy (isStormy is true)


# User story 7 (Extras):

As a traffic controller
So that I can a instruct a plane to land,
I need to know that the airport is not full and that plane is not already at the airport and the weather is not stormy

## Domain model 7:

| Objects | Properties                          | Messages                           | Outputs  |
| ------- | -------------------------- ---------| ---------------------------------- | -------- |
| Airport |  isStormy                           | instructPlaneToLand(airplane)      | @Boolean |
|         |                                     | isFull()                           | @Boolean |
|         |                                     | airplaneIsPresent(airplane)        | @Boolean |
|         |                                     | addAirplane(airplane)              |          |
|Airplane |                                     |                                    |          |

### Tests:
1) Can instruct plane to land - returns true when airport is not full, airplane is not at the airport and is it not stormy

# User story 8 (Extras):

As a traffic controller
So that I can a instruct a plane to take off,
I need to know that the airport is not full and that plane is not already at the airport and the weather is not stormy

## Domain model 8:

| Objects | Properties                          | Messages                           | Outputs  |
| ------- | -------------------------- ---------| ---------------------------------- | -------- |
| Airport |  isStormy                           | instructPlaneToTakeOff(airplane)   | @Boolean |                        
|         |                                     | airplaneIsPresent(airplane)        | @Boolean |
|         |                                     | removeAirplane(airplane)           |          |
|Airplane |                                     |                                    |          |

### Tests 8:

 1) Can instruct plane to take off - returns true if airplane is at the airport and is it not stormy