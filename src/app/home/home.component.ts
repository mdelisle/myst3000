import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { DatePipe } from '@angular/common';

export interface Message {
  user: string;
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  player: YT.Player;
  public id = 'qDuKsiwS5xw';
  messagesCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;
  datePipe = new DatePipe('en-US');

  constructor(private quoteService: QuoteService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messagesCollection = this.afs.collection<Message>('chat_messages');
      this.messages = this.messagesCollection.valueChanges();
  }

  savePlayer(player: YT.Player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }

  newMessage(message: string) {
    const date = this.datePipe.transform(new Date(), 'h:m');
    const data = { text: message, user: 'Diesel', timestamp: date };
    this.messagesCollection.add(data);
  }

}
