var SMAlong;
var SMAshort;
var SMAtrigger;
var SMAtriggerPen;
var backtestRun = false;
var BTinvert = false;

function backtest() {

    document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p> Backtesting Strategy for better triggers, please wait... </p>');
    //console.log('backtesting strategy for possible changes')
    // Back testing to find winrate for last
    backtestRun = true;
    //convert all trade durations to ticks

    var testduration;
    var BTwins = 0;
    var BTlosses = 0;
    var BTprofit = 0;

    if (AutotradeDurationUnit == 'm') {

        testduration = AutotradeDurationInt * 30;
    }

    if (AutotradeDurationUnit == 't') {

        testduration = AutotradeDurationInt * 1;
    }

    if (AutotradeDurationUnit == 's') {

        testduration = AutotradeDurationInt * 2;
    }


    for (var i = 25; i < ticks.length; i++) {
        // Open and Close point
        var triggerpoint = ticks[i + 2];
        var closepoint = ticks[i + testduration + 2];
        var backtestData = ticks.slice(i - 20, i)
        // TA
        SMAlongBT = ss.mean(backtestData.slice(-19, -1));
        SMAshortBT = ss.mean(backtestData.slice(-12, -1));
        SMAtriggerBT = ss.mean(backtestData.slice(-4, -1));
        SMAtriggerPenBT = ss.mean(backtestData.slice(-5, -2));

        if (SMAtriggerBT > SMAshortBT && SMAshortBT > SMAlongBT && SMAtriggerBT > SMAtriggerPenBT) {

            if (triggerpoint < closepoint) {
                BTwins++;
                BTprofit += stakestake * 0.94;
            }

        }

        if (SMAtriggerBT < SMAshortBT && SMAshortBT < SMAlongBT && SMAtriggerBT < SMAtriggerPenBT) {

            if (triggerpoint > closepoint) {
                BTlosses++;
                BTprofit -= stakestake;
            }

        }

        if (i == ticks.length - 2) {

            BRwinrate = Math.floor(BTwins / (BTwins + BTlosses) * 10000) / 100;
            if (BTwins < BTlosses) {
                BTinvert = true;
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p> Backtesting WR:' + BRwinrate + '%...Using Inverted triggers </p>');

            } else {
                BTinvert = false;
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p> Backtesting WR:' + BRwinrate + '%...Using Standard triggers </p>');

            }
            console.log('wins: ' + BTwins, 'losses: ' + BTlosses, 'winrate: ' + BRwinrate, 'profit: $' + BTprofit)
        }
    }


}

function adaptiveMLrun() {



    if (lastSecond >= 50 || backtestRun === false) {

        backtest()
    }


    SMAlong = ss.mean(ticks.slice(-20, -2));
    SMAshort = ss.mean(ticks.slice(-13, -2));
    SMAtrigger = ss.mean(ticks.slice(-5, -2));
    SMAtriggerPen = ss.mean(ticks.slice(-6, -3));


    if (runrun && autoTrade && tradeInProgress === false) {
        let time = moment().format("kk:mm:ss");
        //  //console.log('SMAlong=' + SMAlong, 'SMAshort=' + SMAshort, 'SMAtrigger=' + SMAtrigger, 'SMApen=' + SMAtriggerPen)


        //  if (lastSecond + candleLengthAdjust >= candleEnding) { // Open in new candle more or less
        //  //console.log('time window Open for trade')
        if (SMAtrigger > SMAshort && SMAshort > SMAlong && SMAtrigger > SMAtriggerPen) {

            if (BTinvert && BRwinrate < 45) {
                //console.log('put event');
                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                //console.log('Moving Average PUT trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Inverse Moving Average PUT triggered </p>');
                callOrPut = 'PUT';
                //  tradeInProgress: true
                trade();
            } else if (BRwinrate > 55) {

                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                //console.log('Moving Average CALL trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Moving Average CALL triggered </p>');
                callOrPut = 'CALL';
                //  tradeInProgress: true
                trade();

            }

        }

        //if function for PUT event

        if (SMAtrigger < SMAshort && SMAshort < SMAlong && SMAtrigger < SMAtriggerPen) {
            if (BTinvert && BRwinrate < 45) {
                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                //console.log('Moving Average CALL trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Inverse Moving Average CALL triggered </p>');
                callOrPut = 'CALL';
                //  tradeInProgress: true
                trade();
            } else if (BRwinrate > 55) {

                //console.log('put event');
                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                //console.log('Moving Average PUT trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Moving Average PUT triggered </p>');
                callOrPut = 'PUT';
                //  tradeInProgress: true
                trade();
            }

        }
    }

}