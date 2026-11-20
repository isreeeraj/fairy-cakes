import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BAKERY_TIME_SLOTS,
  CAFE_SPOTS,
  CAKE_FLAVORS,
  CRAVING_OPTIONS,
  DEFAULT_CAKE_CONFIG,
  MENU_ROWS,
  TESTIMONIALS,
  buildWhatsAppOrderUrl,
  calculateCakeEstimate,
  formatIndianTime,
  formatInr,
  formatSpotCounter,
  getNextSlideIndex,
  getPrevSlideIndex,
  getWheelArrowAngle,
} from './fairyCakesData';

test('slider index helpers wrap cleanly in both directions', () => {
  assert.equal(getNextSlideIndex(0, 3), 1);
  assert.equal(getNextSlideIndex(2, 3), 0);
  assert.equal(getPrevSlideIndex(0, 3), 2);
  assert.equal(getPrevSlideIndex(1, 3), 0);
  assert.equal(getNextSlideIndex(0, 0), 0);
});

test('craving wheel angle maps each quadrant to its pointer direction', () => {
  assert.equal(getWheelArrowAngle('celebration'), -135);
  assert.equal(getWheelArrowAngle('savory'), -45);
  assert.equal(getWheelArrowAngle('chill'), 135);
  assert.equal(getWheelArrowAngle('treat'), 45);
});

test('spot counter formats zero-padded index/total pairs', () => {
  assert.equal(formatSpotCounter(0, 4), '01/04');
  assert.equal(formatSpotCounter(2, 4), '03/04');
  assert.equal(formatSpotCounter(3, 4), '04/04');
});

test('formatIndianTime and BAKERY_TIME_SLOTS use 12-hour Indian am/pm format', () => {
  assert.equal(formatIndianTime('5', '30', 'pm'), '5:30 pm');
  assert.equal(formatIndianTime('10', '00', 'am'), '10:00 am');
  const formatted = BAKERY_TIME_SLOTS.map((slot) =>
    formatIndianTime(slot.hour, slot.minute, slot.period)
  );
  assert.deepEqual(formatted, ['10:00 am', '11:00 am', '5:30 pm', '11:00 pm']);
  for (const slot of BAKERY_TIME_SLOTS) {
    const numericHour = Number(slot.hour);
    assert.ok(numericHour >= 1 && numericHour <= 12);
  }
});

test('formatInr formats Indian Rupee strings cleanly', () => {
  assert.equal(formatInr(1220), '₹1,220');
  assert.equal(formatInr(650), '₹650');
  assert.equal(formatInr(2670), '₹2,670');
});

test('calculateCakeEstimate computes default Spanish Delight + Praline total accurately', () => {
  const estimate = calculateCakeEstimate(DEFAULT_CAKE_CONFIG);
  assert.equal(estimate.isCustomQuote, false);
  assert.equal(estimate.total, 1220);
  assert.equal(estimate.flavorName, 'Spanish Delight');
  assert.equal(estimate.weightLabel, '1 kg');
});

test('calculateCakeEstimate scales weight, eggless surcharge, shape, frosting, and midnight slot', () => {
  const estimate = calculateCakeEstimate({
    ...DEFAULT_CAKE_CONFIG,
    weightId: '2kg',
    dietary: 'eggless',
    shapeId: 'heart',
    frostingId: 'choco-ganache',
    addOnIds: ['praline', 'choco-chips'],
    timeSlotId: 'midnight',
  });
  assert.equal(estimate.isCustomQuote, false);
  assert.equal(estimate.total, 3000);
});

test('calculateCakeEstimate marks Custom Theme Cakes or Full 3D Fondant as Custom Quote', () => {
  const themeEstimate = calculateCakeEstimate({
    ...DEFAULT_CAKE_CONFIG,
    flavorId: 'custom-theme',
  });
  assert.equal(themeEstimate.isCustomQuote, true);
  assert.equal(themeEstimate.total, null);

  const fondantEstimate = calculateCakeEstimate({
    ...DEFAULT_CAKE_CONFIG,
    frostingId: 'full-3d-fondant',
  });
  assert.equal(fondantEstimate.isCustomQuote, true);
  assert.equal(fondantEstimate.total, null);
});

test('buildWhatsAppOrderUrl encodes Fairy Cakes Parippally order summary', () => {
  const config = {
    ...DEFAULT_CAKE_CONFIG,
    inscription: 'Happy Birthday Meera!',
    celebrationDate: '2026-08-15',
  };
  const estimate = calculateCakeEstimate(config);
  const url = buildWhatsAppOrderUrl(config, estimate);
  assert.ok(url.startsWith('https://wa.me/?text='));
  const decoded = decodeURIComponent(url.replace('https://wa.me/?text=', ''));
  assert.ok(decoded.includes('Fairy Cakes Parippally'));
  assert.ok(decoded.includes('Spanish Delight'));
  assert.ok(decoded.includes('Happy Birthday Meera!'));
  assert.ok(decoded.includes('₹1,220'));
});

test('catalog completeness covers all Fairy Cakes items and sections', () => {
  assert.equal(MENU_ROWS.length, 3);
  assert.equal(CRAVING_OPTIONS.length, 4);
  assert.equal(BAKERY_TIME_SLOTS.length, 4);
  assert.equal(CAFE_SPOTS.length, 4);
  assert.equal(TESTIMONIALS.length, 3);
  assert.equal(CAKE_FLAVORS.length, 11);
  const totalMenuItems = MENU_ROWS.flat().reduce((acc, cat) => acc + cat.items.length, 0);
  assert.equal(totalMenuItems, 25);
});
