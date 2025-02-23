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
  isTyping = false;
  
  // Avatars
  userAvatar = 'https://i.pravatar.cc/40?u=user';  // Random user avatar
  aiAvatar = 'https://i.pravatar.cc/40?u=ai';  // Random AI avatar

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'User', text: this.userInput });
    this.isTyping = true;  // Show typing indicator

    this.chatService.sendMessage(this.userInput).subscribe(response => {
      const botReply = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
      this.messages.push({ role: 'AI', text: botReply });
      this.isTyping = false;  // Hide typing indicator
    });

    this.userInput = '';
  }

  // ✅ Format text: Replace newlines with <br> for proper display
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  } 
}
