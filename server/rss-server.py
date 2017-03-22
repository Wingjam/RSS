import datetime
import pyrebase

config = {
  "apiKey": "AIzaSyApDGQ5w-QZr_D-8d2a1YYwKsFscaYhDXw",
  "authDomain": "remote-sugar-shack.firebaseapp.com",
  "databaseURL": "https://remote-sugar-shack.firebaseio.com",
  "storageBucket": "remote-sugar-shack.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
db.child("timestamp").child(date).set("Im up!")