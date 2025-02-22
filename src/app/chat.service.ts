import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  //private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiUrl = environment.openaiApiUrl; // Safe API URL
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-3.5-turbo', // Use 'gpt-4' if available
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
