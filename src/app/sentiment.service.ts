import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private apiKey = 'YOUR_GOOGLE_API_KEY';
  private apiUrl = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}
  analyzeSentiment(text: string): Observable<any> {
    const body = {
      document: {
        type: "PLAIN_TEXT",
        content: text
      }
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
