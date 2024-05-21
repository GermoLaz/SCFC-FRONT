import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Difference } from '../models/difference.model';

@Injectable({
  providedIn: 'root'
})
export class DifferenceService {
  private differenceSource = new BehaviorSubject<{ differencesFromFile1: Difference[], differencesFromFile2: Difference[] }>({ differencesFromFile1: [], differencesFromFile2: [] });
  currentDifferences = this.differenceSource.asObservable();

  constructor() { }

  changeDifferences(differences: { differencesFromFile1: Difference[], differencesFromFile2: Difference[] }) {
    this.differenceSource.next(differences);
  }
}
