import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent {
src :string= "./assets/5.jpg";
src2 :string = "./assets/10.jpg";
src3:string ="./assets/100.jpg";
src4:string ="./assets/2.jpg";
src5:string ="./assets/500.jpg";
  movies = [

  ];
  movie: any;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
