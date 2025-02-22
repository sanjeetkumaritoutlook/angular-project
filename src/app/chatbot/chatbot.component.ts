import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  messages: Message[] = [];
  userInput: string = '';
  loading: boolean = false;

  constructor(private chatService: ChatService) {}
//If you're sending too many requests quickly, add a delay between requests.

  sendMessage() {
    if (!this.userInput.trim() || this.loading) return; // Prevent spam requests
  
    this.messages.push({ sender: 'user', text: this.userInput });
    this.loading = true;
  
    setTimeout(() => { // Add a delay to reduce requests
      this.chatService.sendMessage(this.userInput).subscribe(
        (response) => {
          const aiResponse = response.choices[0]?.message?.content || 'No response';
          this.messages.push({ sender: 'bot', text: aiResponse });
          this.loading = false;
        },
        (error) => {
          this.messages.push({ sender: 'bot', text: 'Too many requests! Try again later.' });
          this.loading = false;
        }
      );
    }, 1000); // Delay of 1 second
  }
  
}
