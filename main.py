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
    original_json_filename = "data/740.json"
    modified_json_filename = "data/740modified.json"
    translation_cache_filename = "data/translation_cache.json"


    original_json = load_json(original_json_filename)
    equipamientos = original_json["equipamiento"]
    translate_client = translate.Client()

    if os.path.isfile(translation_cache_filename):
        cache = load_json(translation_cache_filename)
    else:
        cache = {}

    if os.path.isfile(modified_json_filename):
        modified_json = load_json(modified_json_filename)
    else:
        modified_json = {}

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
    new_file = open(translation_cache_filename, 'w')
    new_file.write(cache_string)

    modified_json["equipamiento"] = equipamientos
    modified_json_string = json.dumps(modified_json)
    new_file = open(modified_json_filename, 'w')
    new_file.write(modified_json_string)

    return render_template('template.html', items=equipamientos)

def load_json(filename):
    f = open(filename)
    f_text = f.read()
    j_text = json.loads(f_text)
    return j_text


if __name__ == '__main__':
    CORS(app)
    #app.run(debug=True)
    app.run(host='0.0.0.0', port=6025, debug=True)

