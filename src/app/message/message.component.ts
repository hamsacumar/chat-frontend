import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'] 
})

export class MessageComponent implements OnInit{
  messages: Message[] =[];
  newMessage: Message ={
    senderId: '',
    receiverId:'',
    content:''
  };


  constructor(private messageService: MessageService){}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.messageService.getMessage().subscribe( data =>{
      console.log('Fetched messages:', data);
      this.messages = data;
    });
  }

   sendMessage() {
    this.messageService.sendMessage(this.newMessage).subscribe(sent => {
      this.messages.push(sent);
      this.newMessage = { senderId: '', receiverId: '', content: '' };
    });
  }

  selectReceiver(receiverId: string) {
  this.newMessage.receiverId = receiverId;
}


}
