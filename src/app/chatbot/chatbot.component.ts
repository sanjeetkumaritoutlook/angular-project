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

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message to chat
    this.messages.push({ sender: 'user', text: this.userInput });
    this.loading = true;

    // Send message to OpenAI
    this.chatService.sendMessage(this.userInput).subscribe(
      (response) => {
        const aiResponse = response.choices[0]?.message?.content || 'No response';
        this.messages.push({ sender: 'bot', text: aiResponse });
        this.loading = false;
      },
      (error) => {
        this.messages.push({ sender: 'bot', text: 'Error getting response. Try again!' });
        this.loading = false;
      }
    );

    this.userInput = ''; // Clear input field
  }
}
