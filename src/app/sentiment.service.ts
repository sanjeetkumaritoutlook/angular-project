import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private apiKey = '1fb82878c7bf86a55bbb4661489ee9b0d7e68419';
  private apiUrl = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}
  analyzeSentiment(text: string): Observable<any> {
    const requestBody = {
      document: {
        content: text,
        type: 'PLAIN_TEXT',
      },
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log("Request body:", requestBody); // Add this line
    return this.http.post(this.apiUrl, requestBody, httpOptions);
  }
}
