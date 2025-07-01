from flask import Flask, jsonify
from flask_cors import flask_cors

app = Flask(__name__)
CORS(app)

@app.route('/api/message')
def message():
    return jsonify(('message': 'Welcome to my simple landing page!'))

if __name__== '__main__':
    app.run(host='0.0.0.0', port=5000)