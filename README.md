# Mock Anime Streaming-Site
Objective: Replicate a streaming site with anime oriented content.  

## Stack: MongoDB - Express - React - Node

While developing the website, I created 2 different applications. A react application to handle the front-end, and an Express server that works as an API to fetch and validate data from the database.  
  
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
     yarn init  # only the first time
     yarn dev


## React WebApp
### WebApp Dependencies
     yarn add sass
     yarn add yarn add @material-ui/icons @material-ui/core
     yarn add react-router-dom
     yarn add mongoose
     yarn add helmet
     yarn add jwt-decode
     https://fonts.google.com/specimen/Roboto#standard-styles  
     ^^^ Google fonts


# MongoDB data
Most information about Anime entries in the database were obtained using JikanV4(MyAnimeList unofficial API). For the video entries I used hyperlinks to https://staging.animethemes.moe (Website that hosts Anime Themes).  
I wrote Python scripts to fetch the data and build the MongoDB Database.

### Python Scripts Dependencies
     pip install requests
     pip install json
     pip install pymongo
     pip install tensorflow

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


### Role-based access - User's and Admins have different dashboards.  
### 

### Application Dependencies
     npm install --global yarn
     yarn add sass
     yarn add @material-ui/icons @material-ui/core

## Running examples 
### Featured Section  
![Screenshot 2022-06-15 044844](https://user-images.githubusercontent.com/64340009/173786435-d139e825-be96-4d54-ad21-dd6723eebcc2.jpg)  


### Sliders for Genres  
![Screenshot 2022-06-15 044952](https://user-images.githubusercontent.com/64340009/173786476-6e81ef04-5a16-4457-9fba-d2b17e97e4c7.jpg)  


### Anime Page  
![Screenshot 2022-06-15 045313](https://user-images.githubusercontent.com/64340009/173786771-201d5db6-80c3-4d56-98f4-725db3d157c6.jpg)  
![Screenshot 2022-06-15 045129](https://user-images.githubusercontent.com/64340009/173786699-ea522ed5-e574-4f2a-81aa-f2da6a54a451.jpg)  


### Login/register  
![Screenshot 2022-06-15 045404](https://user-images.githubusercontent.com/64340009/173786902-81adfa39-c887-4c90-a3eb-50a0852828dc.jpg)  
![image](https://user-images.githubusercontent.com/64340009/173787111-b04f0741-e117-4ab4-9c29-fea396bb2da6.png)


#### Doing this to learning NodeJS & React along the way! Still in progress :) 
