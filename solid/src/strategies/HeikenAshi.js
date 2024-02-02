/*jshint esversion: 6 */
var po2;
var pc2;
var hao;
var hac;
var hah;
var hal;
var closeList;
var openList;
var highList;
var lowList;


function HeikenAshirun() {

    closeList = Rxlong_close_list;
    openList = Rxlong_open_list;
    highList = Rxlong_high_list;
    lowList = Rxlong_low_list;


    pc2 = closeList[closeList.length - 2];
    po2 = openList[openList.length - 2];
    hao = (po2 + pc2) / 2;
    hac = (Close + Open + High + Low) / 4;

    console.log(
        'HA Close' + hac,
        'HA Open' + hao,
        'Close' + Close,
    );

    if (runrun && autoTrade && tradeInProgress === false) {

        let time = moment().format("kk:mm:ss");

        let candleEnding = 60 * 1 - 3;
        let candleLengthAdjust = 60 * 1 - 60;

        console.log('seconds = ' + lastSecond, 'seconds in candle left' + candleLengthAdjust)



        //  if (lastSecond + candleLengthAdjust >= candleEnding) { // Open in new candle more or less
        console.log('time window Open for trade')
        if (hac > hao && Close > hac) {
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('Heiken Ashi CALL trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Heiken Ashi CALL triggered </p>');
            callOrPut = 'CALL';
            //  tradeInProgress: true
            trade();

        }

        //if function for PUT event

        if (hac < hao && Close < hac) {
            console.log('put event');
            tradeDurationInt = AutotradeDurationInt;
            tradeDurationUnit = AutotradeDurationUnit;
            tradeInProgress = true;
            lockauto = 1;
            console.log('Heiken Ashi PUT trade')
            document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : Heiken Ashi PUT triggered </p>');
            callOrPut = 'PUT';
            //  tradeInProgress: true
            trade();
        }
    }

}