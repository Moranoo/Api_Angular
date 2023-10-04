from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)


# Configuration de la base de données
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/game'
db = SQLAlchemy(app)


class Jeu(db.Model):
    __tablename__ = 'jeux'
    Id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Certificate = db.Column(db.String(10))
    Director = db.Column(db.Text)
    Genre = db.Column(db.String(255))
    NumberOfVotes = db.Column(db.String(20))
    Popularity = db.Column(db.Integer)
    Runtime = db.Column(db.String(20))
    Stars = db.Column(db.String(255))
    Summary = db.Column(db.Text)
    Title = db.Column(db.String(255))
    UserRating = db.Column(db.String(20))
    Year = db.Column(db.String(20))


@app.route('/api/jeux', methods=['GET'])
@cross_origin()
def get_jeux():
    jeux = Jeu.query.limit(15).all()  # Limitez les résultats à 15 lignes
    jeu_list = [{"Id": jeu.Id, "Certificate": jeu.Certificate, "Director": jeu.Director,
                 "Genre": jeu.Genre, "NumberOfVotes": jeu.NumberOfVotes, "Popularity": jeu.Popularity,
                 "Runtime": jeu.Runtime, "Stars": jeu.Stars, "Summary": jeu.Summary,
                 "Title": jeu.Title, "UserRating": jeu.UserRating, "Year": jeu.Year} for jeu in jeux]
    return jsonify(jeu_list)


if __name__ == '__main__':
    app.run(debug=True)
