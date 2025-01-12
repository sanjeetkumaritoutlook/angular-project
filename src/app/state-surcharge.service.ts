import { Injectable } from '@angular/core';

@Injectable()
export class StateSurchargeService {
  constructor() {}

  _searchTerm: string;
  _range: number;
  _memoisedRange: { [key: string]: any } = {};
  _lastRangeId: string;

  mockLoadData(rangeFrom: number, rangeTo: number) {
    this._range = rangeTo + 1 - rangeFrom;
    const rangeId = `${rangeTo + 1}-${rangeFrom}`;
    return this.loadData(rangeId);
  }

  loadData(rangeId: string) {
    let data;
    if (this._memoisedRange[rangeId]) {
      console.log('Returning memoised range:', rangeId);
      data = this._memoisedRange[rangeId];
    } else {
      this._memoisedRange[rangeId] = this.getRandomSample(
        sampleData,
        this._range
      );
      data = this._memoisedRange[rangeId];
    }
    this._lastRangeId = rangeId;
    return data;
  }

  getTotalCount() {
    return Array.from({ length: 1000 }).map((_) => {});
  }

  reset() {
    return this.getRandomSample(sampleData, this._range);
  }

  searchStates() {
    return this.searchAndSample(sampleData, this._searchTerm, this._range);
  }

  setSearchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
  }

  private getRandomSample(array: any[], sampleSize: number): any[] {
    if (sampleSize > array.length) {
      throw new Error('Sample size cannot be larger than the array size.');
    }

    // Shuffle the array using Fisher-Yates (Knuth) shuffle
    const shuffledArray = [...array]; // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap
    }

    // Return the first `sampleSize` elements of the shuffled array
    return shuffledArray.slice(0, sampleSize);
  }

  private searchAndSample<T extends { [key: string]: any }>(
    array: T[],
    searchTerm: string,
    sampleSize: number
  ): T[] {
    // Convert the search term to lowercase for case-insensitive matching
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter the array for items that contain the search term in any of their string properties
    const filteredArray = array.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );

    // Check if there are enough items in the filtered array
    if (sampleSize > filteredArray.length) {
      sampleSize = filteredArray.length;
    }

    // Shuffle the filtered array using Fisher-Yates shuffle
    const shuffledArray = [...filteredArray];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap
    }

    // Return the first `sampleSize` elements of the shuffled array
    return shuffledArray.slice(0, sampleSize);
  }
}

const sampleData = [
  {
    state: 'Oklahoma',
    distribution: '10',
    surchargeState: false,
    stateRanking: 1,
  },
  {
    state: 'Arizona',
    distribution: '5',
    surchargeState: false,
    stateRanking: 2,
  },
  {
    state: 'Rhode Island',
    distribution: '0',
    surchargeState: false,
    stateRanking: 3,
  },
  {
    state: 'Oklahoma',
    distribution: '5',
    surchargeState: false,
    stateRanking: 4,
  },
  {
    state: 'Vermont',
    distribution: '3',
    surchargeState: false,
    stateRanking: 5,
  },
  {
    state: 'Vermont',
    distribution: '0',
    surchargeState: true,
  },
  {
    state: 'Kentucky',
    distribution: '2',
    surchargeState: true,
  },
  {
    state: 'Kentucky',
    distribution: '0',
    surchargeState: true,
  },
  {
    state: 'Vermont',
    distribution: '35',
    surchargeState: true,
  },
  {
    state: 'West Virginia',
    distribution: '4',
    surchargeState: true,
  },
  {
    state: 'Vermont',
    distribution: '8',
    surchargeState: true,
  },
  {
    state: 'Kentucky',
    distribution: '3',
    surchargeState: true,
  },
  {
    state: 'Floria',
    distribution: '8',
    surchargeState: true,
  },
  {
    state: 'Rhode Island',
    distribution: '0',
    surchargeState: false,
    stateRanking: 3,
  },
];
