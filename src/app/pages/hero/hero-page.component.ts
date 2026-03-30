import { Component, signal, computed } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
    templateUrl: './hero-page.component.html',
    imports: [ UpperCasePipe ]
})

export class HeroPageComponent  { 
    name = signal('Iron Man');
    age = signal(45);

    heroDescription = computed(() => {
        const description = `${this.name()} is ${this.age()}`;
        return description;
    }); 

    capitalizedName = computed(() => this.name().toUpperCase());
     

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
