from flask import Flask
from flask.ext.mongoengine import MongoEngine

app = Flask(__name__)
app.config["MONGODB_SETTINGS"] = {'DB': "blogpost"}
app.config["SECRET_KEY"] = "thug"

db = MongoEngine(app)

if __name__ == '__main__':
    app.run()