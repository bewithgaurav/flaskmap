from flask import Flask,render_template
from pymongo import MongoClient
from flask.ext.pymongo import *
from celery import Celery
from flask.ext.mongoengine import *
import json

app = Flask(__name__)
client = MongoClient('mongodb://username:password@example.com:port/databasename')
db=client.raw_data


@app.route('/truckrc/<truckid>',methods=['GET','POST'])
def showList(truckid):
	truckrc=str(truckid)
	obj=db.express_cargo.find_one({"truck_rc": truckrc})
	return render_template('map.html',obj=json.dumps(obj['pvt_data']),truckrc=truckrc)

@app.route('/')
def showMap(name=None):
	obj=(db.express_cargo.distinct("truck_rc"))
	return render_template('index.html',obj=obj)

if __name__=='__main__':
	app.run(debug=True)

