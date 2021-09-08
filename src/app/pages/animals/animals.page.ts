import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: 'animals.page.html',
  styleUrls: ['animals.page.scss']
})
export class AnimalsPage {
  public animals: any[] = [];

  constructor(private animalsService: AnimalsService, private navCtrl: NavController) {
      this.animals = animalsService.getAnimals();
  }

  public showAnimal(animal: any) {
    this.navCtrl.navigateForward([`animals/${animal.Name}`]);
  }

  public isFavorite(animalName: string): boolean {
      return this.animalsService.getFavorites().includes(animalName);
  }

  public setFavorite(animalName: string) {
    this.animalsService.setFavorite(animalName);
  }

  public removeFavorite(animalName: string) {
    this.animalsService.removeFavorite(animalName);
  }
}
