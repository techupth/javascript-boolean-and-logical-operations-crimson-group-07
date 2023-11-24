// Exercise #2: Promotion Conditions

let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEventtrue = true;
let isPlatinum = true;

let hasPromotion = true;

let lastMonthPaidByJohn = 4001;
isWeekday = true; //friday
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEventtrue = true;
isPlatinum = false; //Member-gold->false

lastMonthPaidMoreThan4000 = lastMonthPaidByJohn > 4000;
hasPromotion =
  lastMonthPaidMoreThan4000 &&
  isWeekday &&
  !hasBoughtProductFromITCategory &&
  !hasAttendedDiscountEventtrue &&
  isPlatinum;

console.log(hasPromotion); //false
