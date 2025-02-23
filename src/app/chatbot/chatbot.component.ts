import { Component ,OnInit} from '@angular/core';
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
export class ChatbotComponent implements OnInit{
  messages: { role: string; text: string }[] = [];
  userInput = '';
  isTyping = false;
  isDarkMode = false;
  
  userAvatar = 'https://i.pravatar.cc/40?u=user';
  aiAvatar = 'https://i.pravatar.cc/40?u=ai';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Load chat history
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }

    // Load dark mode preference
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'User', text: this.userInput });
    this.isTyping = true;

    this.chatService.sendMessage(this.userInput).subscribe(response => {
      const botReply = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
      this.messages.push({ role: 'AI', text: botReply });
      this.isTyping = false;

      // Save chat history
      localStorage.setItem('chatHistory', JSON.stringify(this.messages));
    });

    this.userInput = '';
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
  }

  startVoiceInput() {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event: any) => {
      this.userInput = event.results[0][0].transcript;
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event);
    };
  } 
}
