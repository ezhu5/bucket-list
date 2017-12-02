import { Component } from '@angular/core';

import { ChartsPage } from '../charts/charts';
import { ExplorePage } from '../explore/explore';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExplorePage;
  tab2Root = ChartsPage;
  tab3Root = HomePage;

  constructor() {

  }
}
