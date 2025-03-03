import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private apiKey = '1fb82878c7bf86a55bbb4661489ee9b0d7e68419';
  private apiUrl = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}
  analyzeSentiment(text: string): Observable<any> {
    const body = {
      document: {
        type: "PLAIN_TEXT",
        language: "en",
        content: text // Make sure 'text' is defined
      },
       encodingType: "UTF8"
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
