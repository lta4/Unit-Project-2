# Star Wars Universe
## Project Links
- [Github Repo link](https://github.com/lta4/Unit-Project-2.git)
- [![Netlify Status](https://api.netlify.com/api/v1/badges/5593acdc-3c0f-4e34-8585-4041baee0f97/deploy-status)](https://app.netlify.com/sites/starwarsuniverse/deploys)
## Project Description
I wanted to design an app a user can click and see an abundant of characters on the page. Using Routes/State/and Hooks I was able to grab data from a 3rd party source and project the characters names on screen.
## API
For this project I plan to make a list of Star Wars characters. It will include both the good and the bad (light and the dark). A  navigation bar will have forwarding links to certain areas in the site. 


```
{
"message": "ok",
"total_records": 82,
"total_pages": 9,
"previous": null,
"next": "https://www.swapi.tech/api/people?page=2&limit=10",
"results": [
{
"uid": "1",
"name": "Luke Skywalker",
"url": "https://www.swapi.tech/api/people/1"
},
{
"uid": "5",
"name": "Leia Organa",
"url": "https://www.swapi.tech/api/people/5"
},
{
"uid": "4",
"name": "Darth Vader",
"url": "https://www.swapi.tech/api/people/4"
},
{
"uid": "2",
"name": "C-3PO",
"url": "https://www.swapi.tech/api/people/2"
},
{
"uid": "3",
"name": "R2-D2",
"url": "https://www.swapi.tech/api/people/3"
},
{
"uid": "6",
"name": "Owen Lars",
"url": "https://www.swapi.tech/api/people/6"
},
{
"uid": "7",
"name": "Beru Whitesun lars",
"url": "https://www.swapi.tech/api/people/7"
},
{
"uid": "9",
"name": "Biggs Darklighter",
"url": "https://www.swapi.tech/api/people/9"
},
{
"uid": "8",
"name": "R5-D4",
"url": "https://www.swapi.tech/api/people/8"
},
{
"uid": "10",
"name": "Obi-Wan Kenobi",
"url": "https://www.swapi.tech/api/people/10"
}
]
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.
- [Mobile Design](https://res.cloudinary.com/dfltkqotn/image/upload/v1610735580/Mobile_najsss.heic)
- [Tablet & Desktop Design](https://res.cloudinary.com/dfltkqotn/image/upload/v1610735606/Tablet_Desktop_hib9lp.heic)
- [React Architecture](https://res.cloudinary.com/dfltkqotn/image/upload/v1610735712/Wireframe_ymplmn.heic)
### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav | H | 2.5hr | 1hr |
| Nav Links | H | 2.5hr | 1hr |
| HTML | H | 2.5 | 3hr+ |
| CSS | L | 2.5 | 2.5hr |
| Grid Layout | H | 3hr | 2.5hr |
| Flex Box | H | 3hr | 2hr |  
| Adding Format | H | 2hrs|  1hr | 
| Mobile Responsive | H | 3hr | 2hr |
| Tablet Responsive | H | 3hr | 2hr |
| Desktop Responsive | H | 3hr | 2hr |
| API | H | 2.5hr | 3hr+ |
| Total | H | 29.5hrs| 22hrs |
#### PostMVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav Aesthetics | H | 2.5hr | 1.5hr |
| CSS Styling | H | 3hr | 2.5hr |
| Email Icon | L | 2hr | 0hr |
| Social Media Icons | L | 3hr | 0hr |
| Smooth Scroll | H | 2hr | 1hr |
| Project Review | H | 3hr | 3hr |
| Total | H | 15.5hrs| 8hrs |
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 
| Component | Description | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| App {State} | Holds state including React Router | H | 2.5hr | 3hr+ |
| Nav | Rendered by App | H | 2.5hr | 2hr |
| Main{State} | This will render Form and Container | H | 2.5hr | 3hr+ |
| Why? {State} | Rendered by App | H | 2hr | 2.5hr |
| Form | Holds state | H | 3hr | 3hr+ |
| Container {State} | Holds state | H | 3hr | 3hr+ |
| Footer | Rendered by App | L | 2hr | 2.5hr |
## Additional Libraries
 -Swapi.tech
 -Stack Overflow
 -MDN Web Docs
 -W3Schools
 
 I'd like to thank Star Wars and Lucasfilms Ltd who own copyrights and any associations.
 
 I'd also specially like to shout out Jorge, Kaung, Amy and the support/instructional staff Riana and Alex. Thank you for all your support and advice. I couldn't have gotten this far without it. Thank you.

## Code Snippet
I used to be afraid to tackle Grid Templates and Grid Areas. This time around seemed like such a breeze using it more fluidly within this project. A simple snippet (one of many) but something I am proud of. 
```
.why {
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 2 / 3;
}
```