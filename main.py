#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import requests
import json2html
import os.path

from google.cloud import translate
from flask import Flask, render_template, send_from_directory
from jinja2 import Template
from flask_cors import CORS


app = Flask(__name__)

@app.route('/data/<path:path>')
def send_data(path):
    print("data is requested:\n\n\n")
    return send_from_directory('data', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


@app.route("/")
def hello():
    jsonfile = "740.json"
    j_text = load_json("740.json")
    equipamientos = j_text["equipamiento"]
    translate_client = translate.Client()
    cache_filename = "cache.txt"
    if os.path.isfile(cache_filename):
        cache = load_json(cache_filename)
    else:
        cache = {}
    for equipamiento in equipamientos:
        if "horario" in equipamiento.keys():
            original_text = equipamiento["horario"]
            target = 'en'
            if original_text in cache.keys():
                translation = cache[original_text]
            else:
                # Translates some text into English
                translation = translate_client.translate(
                    equipamiento["horario"],
                    target_language=target)
                print("using google service")
                cache[original_text] = translation
            equipamiento["opening_hours"] = translation["translatedText"]
    cache_string = json.dumps(cache)
    new_file = open("cache.txt", 'w')
    new_file.write(cache_string)
    return render_template('template.html', items=equipamientos)

def load_json(filename):
    f = open(filename)
    f_text = f.read()
    j_text = json.loads(f_text)
    return j_text


if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)

