import { Component } from '@angular/core';

import { AdventurePage } from '../adventure/adventure';
import { InventoryPage } from '../inventory/inventory';
import { CharacterPage } from '../character/character';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AdventurePage;
  tab2Root: any = InventoryPage;
  tab3Root: any = CharacterPage;

  constructor() {

  }
}
