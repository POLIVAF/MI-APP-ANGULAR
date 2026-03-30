import { Component, OnInit, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.component.html'
})

export class HeroPageComponent  { 
    name = signal('Iron Man');
    age = signal(45);

    getHeroDescription() {
        return `${this.name()} is ${this.age()}`;
    }
     changeAge() {
        this.age.set(60);
    }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Iron Man');
        this.age.set(45);
    }

}
