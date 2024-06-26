import { Component, OnInit } from '@angular/core';
import brawlers from '../../assets/API_Brawlers.json';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrls: ['./brawler.component.css']
})
export class BrawlerComponent implements OnInit {
  public listeBrawlers: any[] = [];
  public sortedBrawlers: any[] = [];
  public searchTerm : string = "";

  constructor() {}

  ngOnInit() {
    this.listeBrawlers = brawlers;
    this.sortedBrawlers = this.listeBrawlers[0].items; 
  }

  sortBrawlers() {
    this.sortedBrawlers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sortBrawlersReverse() {
    this.sortedBrawlers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameB < nameA) return -1;
      if (nameB > nameA) return 1;
      return 0;
    });

  
  }


  sortId() {
    this.sortedBrawlers.sort((a, b) => {
      const Id1 = a.id;
      const Id2 = b.id;
      if (Id1 < Id2) return -1;
      if (Id1 > Id2) return 1;
      return 0;
    });
  }

  getRarityClass(rarity: string): string {
    switch (rarity) {
      case 'common':
        return 'common-bg';

      case 'rare':
        return 'rare-bg';

      case 'super_rare':
        return 'super_rare-bg';

      case 'epic':
        return 'epic-bg';

      case 'mythic':
        return 'mythic-bg';

      case 'legendary':
        return 'legendary-bg';



      default:
        return '';
    }
  }


  sortRarity() {
    const rarityMapping: { [key: string]: number } = {
      'common': 1,
      'rare': 2,
      'super_rare': 3,
      'epic': 4,
      'mythic': 5,
      'legendary': 6
    };
  
    this.sortedBrawlers.sort((a, b) => {
      const rarityA = rarityMapping[a.rarity.toLowerCase()] || Number.MAX_SAFE_INTEGER;
      const rarityB = rarityMapping[b.rarity.toLowerCase()] || Number.MAX_SAFE_INTEGER;
  
      return rarityA - rarityB;
    });
  }


  sortRarityReverse() {
    const rarityMapping: { [key: string]: number } = {
      'common': 6,
      'rare': 5,
      'super_rare': 4,
      'epic': 3,
      'mythic': 2,
      'legendary': 1
    };
  
    this.sortedBrawlers.sort((a, b) => {
      const rarityA = rarityMapping[a.rarity.toLowerCase()] || Number.MAX_SAFE_INTEGER;
      const rarityB = rarityMapping[b.rarity.toLowerCase()] || Number.MAX_SAFE_INTEGER;
  
      return rarityA - rarityB;
    });
  }

  filterBrawlers(): any[] {
    return this.sortedBrawlers.filter(brawler =>
      brawler.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updateSearchTerm(event: any): void {
    this.searchTerm = event.target.value;
  }

  


}
