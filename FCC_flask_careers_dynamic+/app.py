from flask import Flask, render_template, jsonify

app = Flask(__name__)

JOBS = [
    {
        'id': 1,
        'title': "Data Analyst",
        "location": "India",
        "salary": "10000",
    },
     {
        'id': 2,
        'title': "Data Scientist",
        "location": "USA",
        "salary": "100005",
    },
     {
        'id': 3,
        'title': "Data Engineer",
        "location": "China",
        "salary": "101000",
    },
     {
        'id': 4,
        'title': "Web developer",
        "location": "Ukraine",
        "salary": "1000010",
    }
]

@app.route("/")
def hello():
    return render_template("home.html", jobs=JOBS);

@app.route("/api/jobs")
def list_jobs():
    return jsonify(JOBS)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)