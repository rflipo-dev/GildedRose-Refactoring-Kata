'use strict';

const expect = require('chai').expect;
const { Item, Shop, AgedBrieItem } = require('../src/gilded_rose');

describe('when one day pass given i have an item in my shop', () => {
   const item = 'Elixir of the Mongoose'
  describe('with a sellin of 10 and a quality of 5', () => {
    const sellIn = 10;
    const quality = 5;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should lower quality by 1', () => {
      expect(shop.items[0].quality).to.eq(quality - 1);
    });
    it('should lower sellIn by 1', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn - 1);
    });
  });
  describe('with a sellIn <= 0', () => {
    describe('with a sellin of 0 and a quality of 5', () => {
      const sellIn = 0;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should lower quality by 2', () => {
        expect(shop.items[0].quality).to.eq(quality - 2 * 1);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
    describe('with a sellin of -1 and a quality of 5', () => {
      const sellIn = -1;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should lower quality by 2', () => {
        expect(shop.items[0].quality).to.eq(quality - 2 * 1);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
  })
  describe('with a sellin of 4 and a quality of 0', () => {
    const sellIn = 4;
    const quality = 0;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should not lower quality', () => {
      expect(shop.items[0].quality).to.eq(quality);
    });
  });
 describe('with a quality above 50', () => {
  describe('with a sellin of 4 and a quality of 55', () => {
    const sellIn = 4;
    const quality = 55;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('bug - should set the quality to 50 (actual result : 54)', () => {
      expect(shop.items[0].quality).to.eq(54);
    });
  });
 })
});

describe('when one day pass given i have one  "Aged Brie" in my shop', () => {
  const item = 'Aged Brie'
  describe('with a sellin of 10 and a quality of 5', () => {
    const sellIn = 10;
    const quality = 5;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should increase quality by 1', () => {
      expect(shop.items[0].quality).to.eq(quality + 1);
    });
    it('should lower sellIn by 1', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn - 1);
    });
  });
  describe('with a sellin of -1 and a quality of 5', () => {
    const sellIn = -1;
    const quality = 5;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should increase quality by 2', () => {
      expect(shop.items[0].quality).to.eq(quality + 2);
    });
    it('should lower sellIn by 1', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn - 1);
    });
  });
  describe('with a sellin of -1 and a quality of 49', () => {
    const sellIn = -1;
    const quality = 49;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should increase quality by 1, because quality should not exceed 50', () => {
      expect(shop.items[0].quality).to.eq(50);
    });
    it('should lower sellIn by 1', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn - 1);
    });
  });
})

describe('when one day pass given i have one  "Sulfuras, Hand of Ragnaros" in my shop', () => {
  const item = 'Sulfuras, Hand of Ragnaros'
  describe('with a sellin of 10 and a quality of 5', () => {
    const sellIn = 10;
    const quality = 5;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should not alter quality', () => {
      expect(shop.items[0].quality).to.eq(quality);
    });
    it('should not alter sellin', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn);
    });
  });
  describe('with a sellin of -1 and a quality of -1', () => {
    const sellIn = -1;
    const quality = -1;
    const items = [new Item(item, sellIn, quality)];
    const shop = new Shop(items);
    shop.ageOneDay();
    it('should not alter quality', () => {
      expect(shop.items[0].quality).to.eq(quality);
    });
    it('should not alter sellin', () => {
      expect(shop.items[0].sellIn).to.eq(sellIn);
    });
  });
})

describe('when one day pass given i have one "Backstage passes to a TAFKAL80ETC concert" in my shop', () => {
  const item = 'Backstage passes to a TAFKAL80ETC concert'

  describe('when 10 < sellIn', () => {
    describe('with a sellin of 12 and a quality of 5', () => {
      const sellIn = 12;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should increase quality by 1', () => {
        expect(shop.items[0].quality).to.eq(quality + 1);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
  })
  describe('when 5 < sellIn <= 10', () => {
    describe('with a sellin of 7 and a quality of 5', () => {
      const sellIn = 7;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should increase quality by 2', () => {
        expect(shop.items[0].quality).to.eq(quality + 2 * 1);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
  })

  describe('when 0 < sellIn <= 5', () => {
    describe('with a sellin of 3 and a quality of 5', () => {
      const sellIn = 3;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should increase quality by 2', () => {
        expect(shop.items[0].quality).to.eq(quality + 3 * 1);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
    describe('with a sellin of 0 and a quality of 5', () => {
      const sellIn = 0;
      const quality = 5;
      const items = [new Item(item, sellIn, quality)];
      const shop = new Shop(items);
      shop.ageOneDay();
      it('should set quality to 0', () => {
        expect(shop.items[0].quality).to.eq(0);
      });
      it('should lower sellIn by 1', () => {
        expect(shop.items[0].sellIn).to.eq(sellIn - 1);
      });
    });
  })
});

describe('#AgeBrieItem.ageOneDay', () => {
  const name = 'Aged Brie'
  describe('with a sellin of 10 and a quality of 5', () => {
    const sellIn = 10;
    const quality = 5;
    const item = new Item(name, sellIn, quality);
    const agedBrieItem = AgedBrieItem.ageOneDay(item)
    it('should increase quality by 1', () => {
      expect(agedBrieItem.quality).to.eq(quality + 1);
    });
    it('should lower sellIn by 1', () => {
      expect(agedBrieItem.sellIn).to.eq(sellIn - 1);
    });
  });
  describe('with a sellin of -1 and a quality of 5', () => {
    const sellIn = -1;
    const quality = 5;
    const item = new Item(name, sellIn, quality);
    const agedBrieItem = AgedBrieItem.ageOneDay(item)
    it('should increase quality by 2', () => {
      expect(agedBrieItem.quality).to.eq(quality + 2);
    });
    it('should lower sellIn by 1', () => {
      expect(agedBrieItem.sellIn).to.eq(sellIn - 1);
    });
  });
  describe('with a sellin of -1 and a quality of 49', () => {
    const sellIn = -1;
    const quality = 49;
    const item = new Item(name, sellIn, quality);
    const agedBrieItem = AgedBrieItem.ageOneDay(item)
    it('should increase quality by 1, because quality should not exceed 50', () => {
      expect(agedBrieItem.quality).to.eq(50);
    });
    it('should lower sellIn by 1', () => {
      expect(agedBrieItem.sellIn).to.eq(sellIn - 1);
    });
  });
})