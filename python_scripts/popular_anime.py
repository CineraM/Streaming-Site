#from cgitb import text
import requests
import json
import time # only 60 requests per minute!!!!

# top 100 anime, only saving id and name
top100 = {}

# A single requests only loads a page
# Each page has 25 entires, loop 4 times to get top 100
for i in range(4):
    url = f'https://api.jikan.moe/v4/top/anime?page={i+1}'
    r = requests.get(url)
    query = json.loads(r.text)
    for i in range(25):
        top100[query['data'][i]['mal_id']] = query['data'][i]['title']


#https://pynative.com/python-prettyprint-json-data/
# write the contents into a file, ^ usefull
with open('top100Ids.json', 'w') as write_file:
    json.dump(top100, write_file, indent=4)


