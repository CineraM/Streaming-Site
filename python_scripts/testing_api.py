import requests
import json
import time # only 60 requests per minute!!!!

# load themes.json
with open('testing.json', encoding="utf8") as f:
    data = json.load(f)

database = {}
unique_ids = []
#for item in data[:10]: # only 60 requests per minute!!!!
for item in data:
    current_id = item['anime_id']
    if item['anime_id'] not in unique_ids:
        database[current_id] = {}   # create empty dictionary

        # request anime data with the current anime_id
        url = f'https://api.jikan.moe/v4/anime/{item["anime_id"]}'
        r = requests.get(url)

        # if the requests fails, break. 200 == succesful, 400 failed
        if r.status_code != 200:
            break

        # transform the request data into json dict
        query = json.loads(r.text)
        query = query['data']

        # add title to the local db
        if 'title' in query:
            title = query['title']
            database[current_id]['title'] = title

        # repeat for the needed sections
        if 'synopsis' in query:
            synopsis = query['synopsis']
            database[current_id]['synopsis'] = synopsis

        # add the theme
        database[current_id]['links'] = [item['mirrors'][0]['mirror']]

        # add whatever needs to be added to the DB
        unique_ids.append(current_id)
        time.sleep(1)

    else:
        # if the id was already found, just add the theme
        database[current_id]['links'].append(item['mirrors'][0]['mirror'])

with open('database.json', 'w') as f:
    json.dump(database, f)