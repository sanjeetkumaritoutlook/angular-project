import { Component } from '@angular/core';
import { SentimentService } from '../sentiment.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  text = '';
  sentiment: string | null = null;
  score: number | null = null;

  constructor(private sentimentService: SentimentService) {}

  analyzeText() {
    this.sentimentService.analyzeSentiment(this.text).subscribe(response => {
      const sentimentData = response.documentSentiment;
      this.sentiment = sentimentData.score > 0 ? "Positive" : sentimentData.score < 0 ? "Negative" : "Neutral";
      this.score = sentimentData.score;
    });
  }
}
