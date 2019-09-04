describe('Gilded Rose', function() {
  it('should increase quality of Aged Brie as it gets older', function() {
    update_quality();

    expect(items[1].quality).toBe(1);
  });

  it('should degrade Conjured item quality twice as fast as normal items', function() {
    expect(items[0].quality).toBe(19);
    expect(items[5].quality).toBe(4);
  });

  it('should degrade quality 2x as fast when sell in date is past', function() {
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    update_quality();

    expect(items[2].quality).toBe(0);
  });

  it('should increase quality of backstage passes by 2 ten days or fewer before concert', function() {
    expect(items[4].quality).toBe(27);
  });

  it('should increase quality of backstage passes by 3 ten days or fewer before concert', function() {
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    expect(items[4].quality).toBe(38);
  });

  it('should quality of backstage passes to 0 after concert has passed', function() {
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    update_quality();
    expect(items[4].quality).toBe(0);
  });

  it('should not degrade the quality of Sulfuras', function() {
    expect(items[3].quality).toBe(80);
  });

  it("should never increase an item's quality over 50", function() {
    for (var i = 0; i < 36; i++) {
      update_quality();
    }

    expect(items[1].quality).toBe(50);
  });

  it("should never decrease an item's quality under", function() {
    expect(items[2].quality).toBe(0);
  });
});
