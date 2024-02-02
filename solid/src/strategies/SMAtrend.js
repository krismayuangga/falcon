var SMAlong;
var SMAshort;


function SMAtrendrun() {

    SMAlong1 = ss.mean(ticks.slice(-21, -2));
    SMAshort1 = ss.mean(ticks.slice(-6, -2));
    SMAlong2 = ss.mean(ticks.slice(-20));
    SMAshort2 = ss.mean(ticks.slice(-5));

    console.log(SMAshort2, SMAshort1, SMAlong2, SMAlong1)




    if (runrun && autoTrade && tradeInProgress === false) {
        let time = moment().format("kk:mm:ss");
        //  console.log('SMAlong=' + SMAlong, 'SMAshort=' + SMAshort, 'SMAtrigger=' + SMAtrigger, 'SMApen=' + SMAtriggerPen)


        //  if (lastSecond + candleLengthAdjust >= candleEnding) { // Open in new candle more or less
        console.log('time window Open for trade')
        if (SMAshort2 > SMAshort1 && SMAlong2 > SMAlong1) {
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('SMA Trend CALL trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : SMA Trend CALL triggered </p>');
            callOrPut = 'CALL';
            //  tradeInProgress: true
            trade();

        }

        //if function for PUT event

        if (SMAshort2 < SMAshort1 && SMAlong2 < SMAlong1) {
            console.log('put event');
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('SMA Trend PUT trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : SMA Trend PUT triggered </p>');
            callOrPut = 'PUT';
            //  tradeInProgress: true
            trade();
        }
    }

}