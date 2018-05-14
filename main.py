#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import requests
import json2html
import os.path

from google.cloud import translate
from flask import Flask, render_template
from jinja2 import Template

app = Flask(__name__)


@app.route("/")
def hello():
    # jsonFileInString = loadJSON("https://www.zaragoza.es/sede/servicio/equipamiento/category/740.json")
    jsonfile = "740.json"

    j_text = load_json("740.json")
    equipamientos = j_text["equipamiento"]

    #print("equipamientos = %s"%equipamientos)

    translate_client = translate.Client()
    cache_filename = "cache.txt"

    if os.path.isfile(cache_filename):
        cache = load_json(cache_filename)
    else:
        cache = {}

    for equipamiento in equipamientos:
        #print("equipamiento = %s"%equipamiento)
        #print("equipamiento.keys() = %s"%equipamiento.keys())

        if "horario" in equipamiento.keys():
            original_text = equipamiento["horario"]
            #print("original_text = %s"%original_text)
            target = 'en'

            if original_text in cache.keys():
                #print("using cache")

                translation = cache[original_text]

            else:
                # Translates some text into English
                translation = translate_client.translate(
                    equipamiento["horario"],
                    target_language=target)
                print("using google service")

                cache[original_text] = translation

            equipamiento["opening_hours"] = translation["translatedText"]

    #return "equipamientos = %s"%equipamientos





    cache_string = json.dumps(cache)
    new_file = open("cache.txt", 'w')
    new_file.write(cache_string)


    return render_template('template.html', items=equipamientos)

def load_json(filename):
    f = open(filename)
    f_text = f.read()
    j_text = json.loads(f_text)
    #print("j_text = %s"%j_text)

    return j_text


if __name__ == '__main__':
    app.run(debug=True)

