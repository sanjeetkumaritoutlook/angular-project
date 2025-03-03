import { Component } from '@angular/core';
import { SentimentService } from '../sentiment.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  textToAnalyze: string = '';
  sentimentResult: any;

  constructor(private nlpService: SentimentService) {}

  analyzeSentiment() {
    this.nlpService.analyzeSentiment(this.textToAnalyze).subscribe(
      (result: any) => {
        this.sentimentResult = result.documentSentiment;
      },
      (error) => {
        console.error('Error analyzing sentiment:', error);
      }
    );
  }

  getSentimentLabel(score: number): string {
    if (score > 0.25) return "Positive 😊";
    if (score < -0.25) return "Negative 😡";
    return "Neutral 😐";
  }
}
