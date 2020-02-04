'use-strict';

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrieItem {
  static ageOneDay(item) {
    const MAX_QUALITY = 50;
    
    item.sellIn = item.sellIn - 1;
    item.sellIn < 0
      ? (item.quality = Math.min(item.quality + 2, MAX_QUALITY))
      : (item.quality = Math.min(item.quality + 1, MAX_QUALITY));

    return item;
  }
}

class Shop {
  MAX_QUALITY = 50;
  constructor(items = []) {
    this.items = items;
  }

  ageOneDay() {
    return this.items.map(item => this.ageItemOneDay(item));
  }

  ageItemOneDay(item) {
    if (item.name == 'Aged Brie') {
      return AgedBrieItem.ageOneDay(item);
    }
    if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < this.MAX_QUALITY) {
        item.quality = item.quality + 1;
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < this.MAX_QUALITY) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < this.MAX_QUALITY) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    }
  }
}

module.exports = {
  Item: Item,
  Shop: Shop,
  AgedBrieItem: AgedBrieItem
};
