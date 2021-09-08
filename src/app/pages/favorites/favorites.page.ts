import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {
  private favorites: string[];
  public favoriteAnimals: any[];

  constructor(private animalsService: AnimalsService, private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.fetchFavorites();
  }

  private fetchFavorites() {
    this.favorites = this.animalsService.getFavorites();

    this.favoriteAnimals = [];
    for (let favorite of this.favorites) {
      this.favoriteAnimals.push(this.animalsService.getAnimal(favorite));
    }

    if (!this.favoriteAnimals) {
      this.favoriteAnimals = undefined;
    }
  }

  public showAnimal(animal: any) {
    this.navCtrl.navigateForward([`animals/${animal.Name}`]);
  }

  public isFavorite(animalName: string): boolean {
      return this.animalsService.getFavorites().includes(animalName);
  }

  public removeFavorite(animalName: string) {
    this.animalsService.removeFavorite(animalName);
    this.fetchFavorites();
  }
}
