import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
 
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
 
  @Component({
    templateUrl: 'home.original.html'
  })
 
export class HomePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  endMessage: string = '';
  counter: number;
  presentCounter: number = 0;
  absentCounter: number = 0;
  
  constructor(private http: Http) {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
    this.counter = 1;
  }
  
  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
    
    this.cards = [{name: ''}];
    this.addNewCards(this.counter);
  }

// Called whenever we drag an element
onItemMove(element, x, y, r) {
  var color = '';
  var abs = Math.abs(x);
  let min = Math.trunc(Math.min(16*16 - abs, 16*16));
  let hexCode = this.decimalToHex(min, 2);
  
  if (x < 0) {
    color = '#FF' + hexCode + hexCode;
  } else {
    color = '#' + hexCode + 'FF' + hexCode;
  }
  
  element.style.background = color;
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
}
 
// Connected through HTML
present(present: boolean) {
  let removedCard = this.cards.pop();
  this.counter++;
  this.addNewCards(this.counter);
  if (present) {
    this.presentCounter++;
    this.recentCard = removedCard.name + ' is present!';
  } else {
    this.absentCounter++;
    this.recentCard = removedCard.name + ' is absent!';
  }
  
  if(this.counter == 5){
   this.endMessage = " No More student left";
   this.endMessage += " Absent # "+ this.absentCounter + " Present # "+ this.presentCounter;

  }
}
 
// Add new cards to our array
addNewCards(count: number) {
  if (count == 1) {
    this.cards.push({name: "Raphael", picture: '/assets/images/red.jpg'});
  } else if (count == 2) {
    this.cards.push({name: "Micheal", picture: '/assets/images/orange.jpg'});
  } else if (count == 3) {
    this.cards.push({name: "Donatello", picture: '/assets/images/purple.jpg'});
  } else if (count == 4) {
    this.cards.push({name: "Leonardo", picture: '/assets/images/blue.jpg'});
  } else {
    this.cards.push({name: "", picture: ''});
  }
 /* this.http.get('https://randomuser.me/api/?results=' + count)
  .map(data => data.json().results)
  .subscribe(result => {
    for (let val of result) {
      console.log("Value: "+val.toString());
      console.log("Res: "+result.toString());
      this.cards.push(val);
    }
  })*/
}
 
// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  
  while (hex.length < padding) {
    hex = "0" + hex;
  }
  
  return hex;
}
}