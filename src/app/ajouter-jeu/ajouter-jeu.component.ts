// ajouter-jeu.component.ts
import { Component } from '@angular/core';
import { JeuxService } from '../jeux.service'; // Importez le service

@Component({
  selector: 'app-ajouter-jeu',
  templateUrl: './ajouter-jeu.component.html',
  styleUrls: ['./ajouter-jeu.component.css']
})
export class AjouterJeuComponent {
  nouveauJeu: any = {}; // Le modèle de données pour le jeu à ajouter

  constructor(private jeuxService: JeuxService) { }

  ajouterJeu() {
    // Utilisez votre service pour envoyer les données du jeu à votre API Flask
    this.jeuxService.ajouternouveauJeu(this.nouveauJeu).subscribe(response => {
      // Gérez la réponse de l'API, par exemple, affichez un message de confirmation
      console.log('Jeu ajouté avec succès !', response);
      // Réinitialisez le formulaire
      this.nouveauJeu = {};
    }, error => {
      // Gérez les erreurs éventuelles
      console.error('Erreur lors de l\'ajout du jeu :', error);
    });
  }
}
