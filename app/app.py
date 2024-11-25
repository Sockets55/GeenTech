from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
  return render_template("index.html")


@app.route('/login')
def login():
  return render_template("login.html")


@app.route('/XpertSof')
def equipo():
  return render_template("XpertSof.html")


@app.route('/contacto')
def contacto():
  return render_template("contacto.html")


if __name__ == "__main__":
  app.run(debug=True, host='0.0.0.0', port=8080)
