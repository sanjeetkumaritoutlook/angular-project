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
  messages: { role: string; text: string }[] = [];
  userInput = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'User', text: this.userInput });

    this.chatService.sendMessage(this.userInput).subscribe(response => {
      const botReply = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
      this.messages.push({ role: 'AI', text: botReply });
    });

    this.userInput = '';
  }

  // ✅ Format text: Replace newlines with <br> and make bullet points work
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>'); // Convert newlines to <br> for proper rendering
  } 
}
