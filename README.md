### Student Timeline Assignment

A simple web application that visualizes the performance of a school student in a dynamic dashboard based on a configuration provided by the
school administrator.


### Requirement Implementation - Trace

| Functional Requirement        | Implementation Trace
| -------------------------     |:-------------
| Creative Responsive site      | Partially achieved
| dragabble timeline            | implemented by carousel      
| scores from csv               | included as part of json  

### Technology Stack

| Framework                     | Version / Type
| -------------------------     |:-------------
| Angular                       | 13
| Testing Library               | Jest      
| Static code analysis          | typescript - eslint  

### Steps to run the app:

1. YARN to install the dependencies 
2. YARN START to start the applications.

### Steps to run code analysis
> npm run lint

### Decisions or Assumptions

1. Draggable timeline component was replaced by carousel which achieves same functionality
2. scores from csv file is replaced by giving the inputs in json file itself.

### Areas for Improvement

1. CSS could have been better
2. Implementation of timeline requires more effort, can be achieved.
3. Error handling is handled with just console.log
4. Unit test cases can be written in depth.

### Description

Application will run in http:\\localhost:4200, for both frontend and backend.

Added Angular In-memory Web API which serves the data from the frontend itself.

After running the application, you will see the timeline data of a student being constructed on the fly. When you click nect icon below the timeline, 
the selected grade, subject and score will be displayed in the grid below that.

The project structure is splitted as below folders:

1. Components
2. models
3. services
4. config

Components consist of individual blocks which is displayed in web app.
Models consist of properties along with its type.
Services folder consist of mock data call to In memory web api.
Config folder consist of variables and its corresponding values.
