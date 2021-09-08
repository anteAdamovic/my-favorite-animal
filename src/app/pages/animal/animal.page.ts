import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-animal',
  templateUrl: 'animal.page.html',
  styleUrls: ['animal.page.scss']
})
export class AnimalPage {
  public animal: any = {};

  private paramsSubscription: Subscription;

  constructor(private animalsService: AnimalsService, private route: ActivatedRoute, private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.route.params.subscribe(param => {
      this.animal = this.animalsService.getAnimal(param.id);
    });
  }

  ionViewWillLeave() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  public navigateBack() {
    this.navCtrl.back();
  }

  public setFavorite() {
    this.animalsService.setFavorite(this.animal.Name);
  }

  public removeFavorite() {
    this.animalsService.removeFavorite(this.animal.Name);
  }

  public isFavorite() {
    return this.animalsService.getFavorites().includes(this.animal.Name);
  }
}
