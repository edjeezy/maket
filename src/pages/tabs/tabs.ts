import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { SellpagePage } from "../sellpage/sellpage";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SellpagePage;
  tab3Root = LoginPage;

  constructor() {

  }
}
