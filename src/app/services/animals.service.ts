import { Injectable } from "@angular/core";

@Injectable()
export class AnimalsService {
    private animals: any[] = [
        {
            "Name": "Dog",
            "Food": {
                "Likes": ["Meat", "Bones"],
                "Dislikes": ["Onion"]
            },
            "Image": "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "Name": "Cat",
            "Food": {
                "Likes": ["Fish", "Milk"],
                "Dislikes": ["Dogfood"]
            },
            "Image": "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "Name": "Horse",
            "Food": {
                "Likes": ["Carrots", "Apples", "Grass"],
                "Dislikes": ["Meat"]
            },
            "Image": "https://images.pexels.com/photos/6468/animal-brown-horse.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "Name": "Bird",
            "Food": {
                "Likes": ["Seeds", "Insects"],
                "Dislikes": []
            },
            "Image": "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            "Name": "Squirrel",
            "Food": {
                "Likes": ["Nuts"],
                "Dislikes": ["Apples", "Insects"]
            },
            "Image": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    ];

    private favoriteAnimals: string[] = [];

    public getAnimals(): any[] {
        return this.animals;
    }

    public getAnimal(name: string): any {
        return this.animals.find(animal => animal.Name === name);
    }

    public getFavorites(): string[] {
        return this.favoriteAnimals;
    }

    public setFavorite(name: string) {
        if (this.favoriteAnimals.includes(name)) {
            return this.getFavorites();
        }

        this.favoriteAnimals.push(name);
        return this.getFavorites();
    }

    public removeFavorite(name: string) {
        if (!this.favoriteAnimals.includes(name)) {
            return this.getFavorites();
        }

        const favoriteIndex = this.favoriteAnimals.findIndex(favorite => favorite === name);
        if (favoriteIndex !== -1) {
            this.favoriteAnimals.splice(favoriteIndex, 1);
        }

        return this.getFavorites();
    }
    
}