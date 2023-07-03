import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    
    public name: string = 'Ironman' 
    public age: number = 45;
    
   get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    geHeroDescription(): string {
        return `${this.name} - ${this.age}`;
    }


 ChagenHero(): void {
        this.name = 'Spiderman';
   
    }

 chAngeAge(): void {
        this.age = 20;
    }

    resetHeroe(): void {
        this.name = 'Ironman';
        this.age = 45;
    }   
    

}
