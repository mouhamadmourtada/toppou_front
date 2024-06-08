// ceci est un model pour le localstorage, il doit représenter user.
/*
voici ce qu'un user doit avoir
"getUser": {
		"id": 1,
		"email": "diop@gmail.com",
		"username": "mcarred",
		"prenom": "mouhamad",
		"nom": "mouhamad",
		"dateNaissance": "2000-02-02T00:00:00.000+00:00",
		"roles": [
			{
				"id": 1,
				"libelle": "chercheur",
				"description": "les chercheurs"
			}
		]
	},
*/

// maintenant génère le model

export default class User {
    constructor(id, email, username, prenom, nom, dateNaissance, roles) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.roles = roles;
    }
}