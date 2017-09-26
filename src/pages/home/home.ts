import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';


@Component({
    templateUrl: 'home.html'
  })
export class HomePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;
  emailCompos : EmailComposer;

  constructor(private emailComposer : EmailComposer) {
    this.emailCompos = emailComposer;
    this.stackConfig = {
      allowedDirections: [
        Direction.LEFT,
        Direction.RIGHT
      ],
      throwOutConfidence: (offsetX: number, offsetY: number, targetElement: HTMLElement) => {
        // you would put ur logic based on offset & targetelement to determine
        // what is your throwout confidence
        const xConfidence = Math.min(Math.abs(offsetX) / targetElement.offsetWidth, 1);
        const yConfidence = Math.min(Math.abs(offsetY) / targetElement.offsetHeight, 1);

        return Math.max(xConfidence, yConfidence);
      },
      minThrowOutDistance: 900    // default value is 400
    };

    this.cards = [
      { name: 'Leo Vinci', picture: '/assets/images/red.jpg', fatherName: 'Hamid', motherName: 'Khaleda', phoneNumber: '12345678' },
      { name: 'Mike Posner', picture: '/assets/images/blue.jpg', fatherName: 'Khaled', motherName: 'Hamida', phoneNumber: '87654321' },
      { name: 'Raph Nadal', picture: '/assets/images/purple.jpg', fatherName: 'Ananta', motherName: 'Bushra', phoneNumber: '1000000' }, 
      { name: 'Pirate Bay', picture: '/assets/images/orange.jpg', fatherName: 'Jalil', motherName: 'Maisha', phoneNumber: '19999999' }
    ];
  }

  /*ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }*/

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }

  present(yes : boolean){
    if(yes){
      console.log("PRESENT");
     // this.emailCompos.isAvailable().then((available: boolean) =>{
       //  if(available) {
           console.log("EMAIL Working");
           let email = {
              to: 'shahed.khan@ulab.edu.bd',
              cc: 'shahed.khan@ulab.edu.b',
              subject: 'Cordova Icons',
              body: 'How are you? Nice greetings from Shahed',
              isHtml: true
            };
            // Send a text message using default options
            console.log(email);
            this.emailCompos.open(email);
            console.log("EMAIL SENT"+this.emailCompos.toString());
          
      } else {
      console.log("ABSENT");
    }
  }
}

