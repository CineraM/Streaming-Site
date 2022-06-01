import requests
import json
import time # only 60 requests per minute!!!!

with open('aniDB.json', encoding="utf8") as f:
    data = json.load(f)

url = f'https://api.jikan.moe/v4/anime/1210'
r = requests.get(url)
query = json.loads(r.text)
query = query['data']

print(query['rating'])


'''
synopsis
year
season
studio(s) [name] --> index 2
genre(s)[name] -- > index 2
Jikan --> get anime pics

'''