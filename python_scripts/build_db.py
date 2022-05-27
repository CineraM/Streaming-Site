import requests
import json
import time # only 60 requests per minute!!!!


# load themes.json
with open('top100Ids.json', encoding="utf8") as f:
    data = json.load(f)


database = {}
unique_ids = []

for item in data:
    
    current_id = item['anime_id']

    if item['anime_id'] not in unique_ids: