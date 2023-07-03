import { Component } from  "@angular/core";

@Component({
    selector: "app-counter",
    template: `
 
    <hr>
    <p> {{ counter }} </p>

    <button (click)="increaseBy(+1)">Incrementar</button>
    <button (click)="resert(10)">Reset</button>
    <button (click)="increaseBy(-1)">Decrementar</button>
        
    `
})
 
export class CounterComponent {

    public counter: number = 10;

    public increaseBy(value:number): void {
        this.counter += value;;  
      
      }
    
      public resert(value:number): void {
        this.counter = value;
      }
}


