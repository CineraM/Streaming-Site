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

aniCollection = mydb["featured"]

featured = [
    {
        'genres': "Action",
        'id': "5114",
        'images': "https://cdn.myanimelist.net/images/anime/7/74317l.jpg?_gl=1*1icm7kf*_ga*NDEyMDgyMDc0LjE2NTAzNDE4MDQ.*_ga_26FEP9527K*MTY1Mzg1MDE1Ni42OC4xLjE2NTM4NTAxNzYuNDA",
        'links': 'https://animethemes.moe/video/FullmetalAlchemistBrotherhood-OP1.webm',
        'rank': 1,
        'rating': "R - 17+ (violence & profanity)",
        'season': "spring",
        'studios': "Bones",
        'synopsis': "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]",
        'title': "Fullmetal Alchemist: Brotherhood",
        'year': 2009,

    },
    {
        'genres': "Drama",
        'id': "28735",
        'images': "https://cdn.myanimelist.net/images/anime/2/77907l.jpg",
        'links': 'https://animethemes.moe/video/RakugoShinju-OP1.webm',
        'rank': 83,
        'rating': "PG-13 - Teens 13 or older",
        'season': "winter",
        'studios': "Studio Deen",
        'synopsis': "Yotarou is a former yakuza member fresh out of prison and fixated on just one thing: rather than return to a life of crime, the young man aspires to take to the stage of rakugo, a traditional Japanese form of comedic storytelling. Inspired during his incarceration by the performance of distinguished practitioner Yakumo Yuurakutei, he sets his mind on meeting the man who changed his life. After hearing Yotarou's desperate appeal for his mentorship, Yakumo is left with no choice but to accept his very first apprentice. As he eagerly begins his training, Yotarou meets Konatsu, an abrasive young woman who has been under Yakumo's care ever since her beloved father Sukeroku Yuurakutei, another prolific rakugo performer, passed away. Through her hidden passion, Yotarou is drawn to Sukeroku's unique style of rakugo despite learning under contrasting techniques. Upon seeing this, old memories and feelings return to Yakumo who reminisces about a much earlier time when he made a promise with his greatest rival. Shouwa Genroku Rakugo Shinjuu is a story set in both the past and present, depicting the art of rakugo, the relationships it creates, and the lives and hearts of those dedicated to keeping the unique form of storytelling alive. [Written by MAL Rewrite]",
        'title': "Shouwa Genroku Rakugo Shinjuu",
        'year': 2016
    },
    {
        'genres': "Adventure",
        'id': "11061",
        'images': "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
        'links': 'https://animethemes.moe/video/HunterHunter2011-OP1.webm',
        'rank': 7,
        'rating': "PG-13 - Teens 13 or older",
        'season': "fall",
        'studios': "Madhouse",
        'synopsis': "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased. Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path. During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world. [Written by MAL Rewrite]",
        'title': "Hunter x Hunter (2011)",
        'year': 2011
    },
    {
        'genres': "Comedy",
        'id': "10165",
        'images': "https://cdn.myanimelist.net/images/anime/3/75617l.jpg",
        'links': 'https://animethemes.moe/video/Nichijou-OP1.webm',
        'rank': 130,
        'rating': "PG-13 - Teens 13 or older",
        'season': "spring",
        'studios': "Kyoto Animation",
        'synopsis': "Nichijou primarily focuses on the daily antics of a trio of childhood friends—high school girls Mio Naganohara, Yuuko Aioi and Mai Minakami—whose stories soon intertwine with the young genius Hakase Shinonome, her robot caretaker Nano, and their talking cat Sakamoto. With every passing day, the lives of these six, as well as of the many people around them, experience both the calms of normal life and the insanity of the absurd. Walking to school, being bitten by a talking crow, spending time with friends, and watching the principal suplex a deer: they are all in a day's work in the extraordinary everyday lives of those in Nichijou. [Written by MAL Rewrite]",
        'title': "Nichijou",
        'year': 2011
    },
    {
        'genres': "Sports",
        'id': "19647",
        'images': "https://cdn.myanimelist.net/images/anime/6/56147l.jpg",
        'links': 'https://animethemes.moe/video/HajimeNoIppoRising-OP1.webm',
        'rank': 78,
        'rating': "PG-13 - Teens 13 or older",
        'season': "fall",
        'studios': "Madhouse",
        'synopsis': "Japanese Featherweight Champion Makunouchi Ippo has defended his title belt once more with the help of his devastating signature move: the Dempsey Roll. However, new challengers are rising up left and right, claiming to have an answer for the move responsible for crushing his opponents. Will Ippo be able to step up to the challenge, or will the weight of his pride destroy him before he finds out just what it means to be strong? Meanwhile, fellow Kamogawa Gym mate Aoki Masaru is just a hop, skip, and a Frog Punch away from claiming his own belt, ready to take on the Japanese Lightweight Champion! Hajime no Ippo: Rising continues Ippo's quest to become stronger, featuring the same cast of loveable dimwits from Kamogawa Gym, as they put their bodies and hearts on the line to make their way in the harsh world of professional boxing. With a will of iron, Ippo steps into the ring once again. [Written by MAL Rewrite]",
        'title': "Hajime no Ippo: Rising",
        'year': 2013
    },
    {
        'genres': "Avant Garde",
        'id': "28851",
        'images': "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg",
        'links': "https://animethemes.moe/video/KoeNoKatachi-OP1.webm",
        'rank': 16,
        'rating': "PG-13 - Teens 13 or older",
        'season': "summer",
        'studios': "Kyoto Animation",
        'synopsis': "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past. [Written by MAL Rewrite]",
        'title': "Koe no Katachi",
        'year': 2022
    }
]

for ft in featured:
    print(ft)
    entry = ft
    aniCollection.insert_one(ft)

