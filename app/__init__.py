import os.path
from flask import Flask
from config import config
from flask.ext.sqlalchemy import SQLAlchemy

shouldInitializeDB = not os.path.exists('app/app.db')
app = Flask(__name__)
app.config.from_object(app.config.from_object(config['development']))

db = SQLAlchemy(app)

from app import views, models

if shouldInitializeDB:
    print 'No app.db, creating database'
    db.create_all()
    db.session.commit()
else:
    print 'Found app.db, not going to create database again'
