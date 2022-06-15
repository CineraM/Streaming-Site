import requests
import json
import time # only 60 requests per minute!!!!


# load themes.json
with open('topAniIds.json', encoding="utf8") as f:
    data = json.load(f)

with open('themesdb.json', encoding="utf8") as g:
    data2 = json.load(g)

database = {}
for item in data:
    time.sleep(1)
    current_id = item
    try:
        database[current_id] = {}   # create empty dictionary
        url = f'https://api.jikan.moe/v4/anime/{item}'
        r = requests.get(url)

        if r.status_code != 200:
            break
        
        query = json.loads(r.text)
        query = query['data']

        # add title to the local db
        database[current_id]['id'] = item
        database[current_id]['links'] = []
        if 'title' in query:
            title = query['title']
            database[current_id]['title'] = title

        # repeat for the needed sections
        if 'synopsis' in query:
            synopsis = query['synopsis']
            database[current_id]['synopsis'] = synopsis
        
        if 'year' in query:
            year = query['year']
            database[current_id]['year'] = year

        if 'season' in query:
            season = query['season']
            database[current_id]['season'] = season

        if 'studios' in query:
            studios = query['studios'][0]['name']
            database[current_id]['studios'] = studios

        if 'genres' in query:
            genres = query['genres'][0]['name']
            database[current_id]['genres'] = genres
        
        if 'rank' in query:
            rank = query['rank']
            database[current_id]['rank'] = rank

        if 'images' in query:
            images = query['images']['jpg']['large_image_url']
            database[current_id]['images'] = images

        if 'rating' in query:
            rating = query['rating']
            database[current_id]['rating'] = rating

            

        current_id_int = int(current_id)
        noThemes = True
        for entry in data2:
            if entry['anime_id'] == current_id_int:
                noThemes = False
                database[current_id]['links'].append(entry['mirrors'][0]['mirror'])
        
        if database[current_id]['links'] == []:
            database.pop(current_id)
    except:
        print(current_id)

 

with open('aniDB.json', 'w') as write_file:
    json.dump(database, write_file, indent=4)


'''
synopsis
year
season
studio(s) [name] --> index 2
genre(s)[name] -- > index 2
Jikan --> get anime pics
'''
