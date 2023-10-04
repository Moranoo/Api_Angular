import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service'; // Importez le service

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css']
})
export class ListGameComponent implements OnInit {
  jeux: any[] = []; // Déclarez la propriété 'jeux' comme un tableau vide

  constructor(private jeuxService: JeuxService) { }

  ngOnInit() {
    // Utilisez le service pour récupérer les jeux et stockez-les dans la propriété 'jeux'
    this.jeuxService.getJeux().subscribe((data: any[]) => {
      this.jeux = data; // Stockez les données dans la propriété 'jeux'
    });
  }
}
