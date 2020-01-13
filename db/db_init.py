from flask import Flask, request, jsonify
 
app = Flask(__name__)

@app.route('/')
def index():
    page = []
    page.append("<html>")
    page.append("<head>")
    page.append("Flask page")
    page.append("<br>")
    page.append("<a href=\"/design/add\">add design</a>")
    page.append("</head>")
    page.append("</html>")
    return '\n'.join(word for word in page)

@app.route('/api/designs/add', methods = ['GET','POST'])
def submit():
    if request.method == 'GET':
        page = []   
        page.append("<html>")
        page.append("<head>")
        page.append("Flask adding design")
        page.append("<br>")
        page.append("<a href=\"/\">home</a>")
        page.append("</head>")
        page.append("</html>")
        return '\n'.join(w for w in page)
    elif request.method == 'POST':
        temp = request.json
        print(str(temp))
        return 'success?'

@app.route('/api/designs')
def returnDesigns():
    designs = [
        {'id': 1, 'categoryId': 1, 'projectName': 'firstAlbum', 'figureName': 'woori.png'},
        {'id': 2, 'categoryId': 1, 'projectName': 'hearts/25', 'figureName': 'hearts.jpg' },
        {'id': 3, 'categoryId':2, 'projectName': 'privateCruise', 'figureName': 'privateCruise100.jpg'}
    ]
    print("hello from python")
    return jsonify(designs)


if __name__ == '__main__':
    app.debug = True
    app.run(port = 7000)