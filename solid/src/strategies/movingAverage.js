var SMAlong;
var SMAshort;
var SMAtrigger;
var SMAtriggerPen;

function movingAveragerun() {

    SMAlong = ss.mean(ticks.slice(-20, -2));
    SMAshort = ss.mean(ticks.slice(-13, -2));
    SMAtrigger = ss.mean(ticks.slice(-5, -2));
    SMAtriggerPen = ss.mean(ticks.slice(-6, -3));


    if (runrun && autoTrade && tradeInProgress === false) {
        let time = moment().format("kk:mm:ss");
        //  console.log('SMAlong=' + SMAlong, 'SMAshort=' + SMAshort, 'SMAtrigger=' + SMAtrigger, 'SMApen=' + SMAtriggerPen)


        //  if (lastSecond + candleLengthAdjust >= candleEnding) { // Open in new candle more or less
        console.log('time window Open for trade')
        if (SMAtrigger > SMAshort && SMAshort > SMAlong && SMAtrigger > SMAtriggerPen) {
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('Moving Average CALL trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Moving Average CALL triggered </p>');
            callOrPut = 'CALL';
            //  tradeInProgress: true
            trade();

        }

        //if function for PUT event

        if (SMAtrigger < SMAshort && SMAshort < SMAlong && SMAtrigger < SMAtriggerPen) {
            console.log('put event');
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('Moving Average PUT trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Moving Average PUT triggered </p>');
            callOrPut = 'PUT';
            //  tradeInProgress: true
            trade();
        }
    }

}