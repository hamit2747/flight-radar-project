# Flight Radar Project

![view gif](flight-radar.gif) 



# USED TECHNOLOGIES
- React Vite
- SASS
- Leaflet library


# Libraries 
npm install
- leaflet(Because there is no css in react)
- react-leaflet
- react-redux
- @reduxjs/toolkit
- axios
- thunk(in the toolkit)
- react-paginate


# Sources
- API: https://flight-radar1.p.rapidapi.com/aircrafts/list

- lower left latitude: 34.812898
- lower left longitude: 27.594460
- lower right latitude: 41.582989
- lower right longitude: 44.816771
# Roadmap:
- Create list view `ListWiew.jsx` component.
- Create map view `MapWiew.jsx` component.
- Switch between these two views in App.js.
- Set up the map (leaflet) in `MapWiew.jsx`
- Install redux with toolkit

- As soon as the application opens, get flight data over Turkey from the API and transfer it to the store

- - The data we have: [
    ['123','123','123','123',],
      ['123','123','123','123',],
        ['123','123','123','123',]
]

- - What I want to achieve:[
    {
        id:'123123',
        code:'asd123', >> convert arrays to objects
        lat:15,
        lng:56
    }
]