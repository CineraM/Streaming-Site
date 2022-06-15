# Mock Anime Streaming-Site
Objective: Replicate a streaming site - used anime oriented content.  

## Stack: MongoDB - Express - React - Node

### Server  


# MongoDB data
Most information about Anime entries in the database were obtained using JikanV4(MyAnimeList unofficial API). For the video entries I used hyperlinks to https://staging.animethemes.moe (Website that hosts Anime Themes).  
I wrote Python scripts to fetch the data and build the Database.

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
![image](https://user-images.githubusercontent.com/64340009/170860287-95b3c02e-f631-40e4-bd6e-c714ed9044b2.png)  

### Sliders for Genres
![image](https://user-images.githubusercontent.com/64340009/170887469-46419de5-0176-4897-b612-a121cc7d0f96.png)


#### Doing this to learning NodeJS & React along the way! Still in progress :) 
