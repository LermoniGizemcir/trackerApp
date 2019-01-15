import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHomeRoot = HomePage;
  tabHistoryRoot = HistoryPage;
  tabSettingsRoot = SettingsPage;

  constructor() {

  }
}
