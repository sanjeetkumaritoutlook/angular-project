import { Component } from '@angular/core';
import { SentimentService } from '../sentiment.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  textInput = "";
  sentimentScore: number | null = null;
  sentimentMagnitude: number | null = null;
  sentimentLabel: string | null = null;

  constructor(private sentimentService: SentimentService) {}

  analyzeText() {
    if (!this.textInput.trim()) return;

    this.sentimentService.analyzeSentiment(this.textInput).subscribe(
      (response: any) => {
        this.sentimentScore = response.documentSentiment.score;
        this.sentimentMagnitude = response.documentSentiment.magnitude;
        this.sentimentLabel = this.getSentimentLabel(this.sentimentScore ?? 0);
      },
      (error) => {
        console.error("Error analyzing sentiment:", error);
      }
    );
  }

  getSentimentLabel(score: number): string {
    if (score > 0.25) return "Positive 😊";
    if (score < -0.25) return "Negative 😡";
    return "Neutral 😐";
  }
}
