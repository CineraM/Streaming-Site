# Anime Streaming Site
Mock Web Application similar to existing subscription based steaming services.  

## Stack: MongoDB - Express - React - NodeJS

**2 React applications:**  
  Client: Application that handles the front-end and requests to the db,
  Server: An ExpressJS server that works as an API to fetch and validate data from the database.  
  
### Package Manager 
     npm install --global yarn

## Express Server  
### Server Dependencies
     yarn add express
     yarn add nodemon
     yarn add cors
     yarn add mongoose
     yarn add jsonwebtoken
     yarn add bcryptjs
     
### Run server
     yarn init 
     yarn start


## React Client
### Client Dependencies
     yarn add sass
     yarn add yarn add @material-ui/icons @material-ui/core
     yarn add react-router-dom
     yarn add mongoose
     yarn add helmet
     yarn add jwt-decode
     https://fonts.google.com/specimen/Roboto#standard-styles  
     ^^^ Google fonts
### Run Client
     yarn init
     yarn dev


# MongoDB data 
Most information about Anime entries in the database were obtained using JikanV4(MyAnimeList unofficial API). The video entries use hyperlinks to https://staging.animethemes.moe (Website that hosts Anime Themes).  
The Python scripts are used to fetch the data and build the MongoDB Database.

### Python Scripts Dependencies
     pip install requests
     pip install json
     pip install pymongo  

### PythonScripts Structure
```
├── ...
├── python_scripts            
│   ├── aniDB.json             # Json database(json object), used to create mongodb                
│   ├── buildJsonDB.py         # Creates the aniDB.json file     
│   ├── mongoDB_buildDB.py     # Creates the 'Anime' collection in MongoDB
│   ├── mongoDB_Featured.py    # Creates the 'Featured' collection in MongoDB
│   ├── popular_anime.py       # Creates the topAniIds.json File
│   ├── themesdb.json          # Json File containing all staging.moe links 
│   └── topAniIds.json         # Store the top Anime Ids of MyAnimeList.com
```

# Deployment
### Front-end - Vercel  
Service that hosts the ReactJS Client application  
https://vercel.com  

### Back-end - Heroku  
Service that hosts the ExpressJS Server application    
https://heroku.com     
      

### Database - MongoDB Atlas Database
Cloud base mongoDB database  
https://www.mongodb.com/atlas/database

# Link to webiste  
https://afox-client.vercel.app/


# Demo  
### Featured Section  
![image](https://user-images.githubusercontent.com/64340009/180123633-f8f9ee30-d5e7-4d0e-8144-7dba61586111.png)  


### Sliders for Genres  
![Screenshot 2022-06-15 044952](https://user-images.githubusercontent.com/64340009/173786476-6e81ef04-5a16-4457-9fba-d2b17e97e4c7.jpg)  


### Anime Page   
![image](https://user-images.githubusercontent.com/64340009/180123151-d92a7f49-2bc6-434e-9892-c76892200e9c.png)  
![image](https://user-images.githubusercontent.com/64340009/180123857-45e0fb77-fa0f-4b72-b220-7de842205879.png)  



### Login/register  
![Screenshot 2022-06-15 045404](https://user-images.githubusercontent.com/64340009/173786902-81adfa39-c887-4c90-a3eb-50a0852828dc.jpg)  
![image](https://user-images.githubusercontent.com/64340009/173787111-b04f0741-e117-4ab4-9c29-fea396bb2da6.png)

### Admin Dashboard    
![image](https://user-images.githubusercontent.com/64340009/178165353-175c8ff2-b193-468d-8523-88d7b3bd3c7c.png)

### Page not found
![image](https://user-images.githubusercontent.com/64340009/180123727-63690ab1-955f-4e7f-8aac-9106c0f280c9.png)

