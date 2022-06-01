#from cgitb import text
import requests
import json
import time # only 60 requests per minute!!!!

# top 100 anime, only saving id and name
topAni = {}

# A single requests only loads a page
# Each page has 25 entires, loop 4 times to get top 100
for i in range(4):
    time.sleep(1)

    url = f'https://api.jikan.moe/v4/top/anime?page={i+1}'
    r = requests.get(url)
    query = json.loads(r.text)
    
    for j in range(25):
        topAni[query['data'][j]['mal_id']] = query['data'][j]['title']


#https://pynative.com/python-prettyprint-json-data/
# write the contents into a file, ^ usefull
with open('topAniIds.json', 'w') as write_file:
    json.dump(topAni, write_file, indent=4)
