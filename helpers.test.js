describe("Helper test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 10;
    tipAmtInput.value = 5;
    submitPaymentInfo();
    
  });

  it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(5);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(45);
  });

  it('should sum total tip percent on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(50);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(110);
    expect(sumPaymentTotal('tipPercent')).toEqual(70);
  });

  it('should sum tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
  });

  afterEach(function() {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});