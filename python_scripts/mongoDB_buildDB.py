from multiprocessing.connection import Client
from pydoc import synopsis
from turtle import speed
from typing import Counter
import pymongo
import json

client = pymongo.MongoClient()

# create database
# testing DB
mydb = client["ani-fox-db"]

aniCollection = mydb["anime"]

# example
# data = {'name' : 'John' , 'age' : 30}
# aniCollection.insert_one(data)

with open('aniDBd.json') as f:
    data = json.load(f)

for anime in data.values():
    entry = anime
    aniCollection.insert_one(entry)


# ani_data = {
#     'id': '',
#     'links': [],
#     'title': '',
#     'synopsis': '',
#     'year': 2022,
#     'season': '',
#     'studios': '',
#     'genres': [],
#     'rank': 999,
#     'image': '',
#     'rating': ''
# }