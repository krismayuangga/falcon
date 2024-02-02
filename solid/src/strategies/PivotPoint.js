// Binary Bot Candle Pattern Recognition.


var SRcloseList;
var SRopenList;
var SRhighList;
var SRlowList;
var ppclose;
var ppopen;
var pphigh;
var pplow;
var ohlcInput;
var singleInput;
var closeInput;
var highSRLowList;
var pivotPPResult;
var pivotPPResult;
var penClose;
var lastClose;

var pivotPP;

var pivotPPResult;

var SRsignal;
var pivotPPResult;

var haveIrun = false;




function PivotPointrun() {

    pivotPPResult = false;
    pivotPP = true;


    if (runrun && autoTrade && tradeInProgress === false) {

        let seconds = epochs;
        let candleEnding = 60 / 1.2;
        let candleStarting = 60 / 10;


        if (haveIrun === false || symbolsymbol != SRsignal) {
            SRsignal = symbolsymbol;
            haveIrun = true;
            console.log('New Market')



            api.getTickHistory(symbolsymbol, {
                end: 'latest',
                style: 'candles',
                granularity: 600,
                count: 2
            }).then(function (response) {
                //   //console.log(response)
                SRcloseList = response.candles.map(candles => candles.close * 1);
                SRopenList = response.candles.map(candles => candles.open * 1);
                SRhighList = response.candles.map(candles => candles.high * 1);
                SRlowList = response.candles.map(candles => candles.low * 1);



                ppclose = SRcloseList.slice(-2)[0]
                ppopen = SRopenList.slice(-2)[0]
                pphigh = SRhighList.slice(-2)[0]
                pplow = SRlowList.slice(-2)[0]

                //console.log('Updating S&R data')

            }).catch(function (error) {

                let string = error.message;
                let position = string.indexOf(`{`);
                let message = string.slice(0, position - 1);
                //var pos = string.indexOf('{')-1
                // var message = string.substring(0,pos);
                //console.log(message);
                // //console.log(position);


            })
        }

        // trading candles

        penClose = Pen;
        lastClose = Close;


        // ------------------  ANALYZE DATA  ----------------------



        //Calculate the shizzle here!

        ohlcInput = {
            open: SRopenList,
            high: SRhighList,
            close: SRcloseList,
            low: SRlowList,
        }
        singleInput = [{
            c: ppclose,
            h: pphigh,
            l: pplow,
        }]

        highSRLowList = [{
            h: pphigh,
            l: pplow,
        }]

        closeInput = {
            values: SRcloseList,
        }

        let floorPivots = tw.floorPivots(singleInput);



        pivotPPResult = floorPivots[0].floor.pl
        SRonePPbullResult = floorPivots[0].floor.s1
        SRonePPbearResult = floorPivots[0].floor.s2
        SRtwoPPbullPPResult = floorPivots[0].floor.r1
        SRtwoPPbearResult = floorPivots[0].floor.r1
        if (seconds > 58) {
            haveIrun = false;
        }


        if (pivotPPResult < lastClose && pivotPPResult > penClose && pivotPP) { // ************************************************************************************************************************************************
            let time = moment().format("kk:mm:ss");


            if (seconds > candleEnding || seconds < candleStarting) {

                //  //console.log('New Candle')


            } else {

                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                console.log('PivotPoint CALL trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : PivotPoint CALL triggered </p>');
                callOrPut = 'CALL';
                //  tradeInProgress: true
                trade();
            }
        }



        //if function for PUT event
        else if (pivotPPResult > lastClose && pivotPPResult < penClose && pivotPP) {

            let time = moment().format("kk:mm:ss");



            if (seconds > candleEnding || seconds < candleStarting) {
                //   //console.log('New Candle')

            } else {


                tradeDurationInt = AutotradeDurationInt;
                tradeDurationUnit = AutotradeDurationUnit;
                tradeInProgress = true;
                lockauto = 1;
                console.log('PivotPoint PUT trade')
                document.getElementById('notifyme').insertAdjacentHTML("afterbegin", '<p>' + time + ': : PivotPoint PUT triggered </p>');
                callOrPut = 'PUT';
                //  tradeInProgress: true
                trade();

            }

        }

    }


}