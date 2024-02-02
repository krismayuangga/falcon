var LiveApi = window['binary-live-api'].LiveApi;

//var OauthData;
var rangeMargin;
var switched = true;
var updatedChart = true;
var api = new LiveApi({
    appId: 36270
});
var savPar;
var accounts = {};
var marketGood = false;
var baseData;
var pushData;
var BRwinrate;
var stream;
var callOrPut = 'NONE';
var lastTick;
var autoStrat;
var autoStrattype = 'hilower';
var tick;
var ticks;
var times;
var lastEpoch;
var lastSecond;
var Rxlong_close_list;
var Rxlong_open_list;
var Rxlong_high_list;
var Rxlong_low_list;
var Close;
var Pen;
var Open;
var High;
var Low;
var epochs;
var timeStamp;
var timeStamp2;
var tradeLine;
var noCandlesOnChart;
var chartRangeMaximum;
var changeMinimum;
var closelistChart;
var highlistChart;
var openlistChart;
var lowlistChart;
var timestampChart;
var closelistReverse;
var highlistReverse;
var openlistReverse;
var lowlistReverse;
var timestampReverse;
var connected = false;
var tradeBarrier;

var MGReset = 0;
var trailingStop = 0;
var takeProfit = 5;
var stopLoss = 50;
var autoThresh = 0;
var autoTrade;
var drawonTop = false;
// Settings replacements for code
var duation;
var duration_unit;
var tradeInProgress = false; //settings.get('tradeInProgress.tradeInProgress')
var winLossBarrier = 'no open trade'; //settings.get('barrier.barrier')
var sellProfit; //settings.get('sellprofit.sellprofit');
var canSell; //settings.get('canSell.canSell')
var tradeBarrier;

//autoMarkets

var close_list_R_10;
var close_list_R_25;
var close_list_R_50;
var Rclose_list__100;
var close_list_R_75;
var close_list_RDBEAR;
var close_list_RDBULL;

var open_list_R_10;
var open_list_R_25;
var open_list_R_50;
var Ropen_list__100;
var open_list_R_75;
var open_list_RDBEAR;
var open_list_RDBULL;

var high_list_R_10;
var high_list_R_25;
var high_list_R_50;
var Rhigh_list__100;
var high_list_R_75;
var high_list_RDBEAR;
var high_list_RDBULL;


var low_list_R_10;
var low_list_R_25;
var low_list_R_50;
var Rlow_list__100;
var low_list_R_75;
var low_list_RDBEAR;
var low_list_RDBULL;



// Parse Cached Data!


if (localStorage.getItem('storedautoSym')) {

    var autoSymbol = localStorage.getItem('storedautoSym')
} else {
    var autoSymbol = false;
}

if (localStorage.getItem('storedToken')) {

    var tokenToBeUsed = localStorage.getItem('storedToken');
} else {
    var tokenToBeUsed;
}
if (localStorage.getItem('storedSymbol')) {

    var symbolsymbol = localStorage.getItem('storedSymbol');
} else {
    var symbolsymbol = 'R_100';
}
if (localStorage.getItem('storedStrat')) {

    var strategy = localStorage.getItem('storedStrat');
} else {
    var strategy = 'manual';
}
if (localStorage.getItem('storedAutoStrat')) {

    var autoStrat = localStorage.getItem('storedAutoStrat');
} else {
    var autoStrat = 'priceAction';
}
if (localStorage.getItem('storedinitialStake')) {

    var initialStakeinitialStake = localStorage.getItem('storedinitialStake');
} else {
    var initialStakeinitialStake = 0.35;
}
if (localStorage.getItem('storedTakeProfit')) {

    var takeProfit = localStorage.getItem('storedTakeProfit');
} else {
    var takeProfit = 15;
}
if (localStorage.getItem('storedStopLoss')) {

    var stopLoss = localStorage.getItem('storedStopLoss');
} else {
    var stopLoss = 100;
}
if (localStorage.getItem('storedTrailingStop')) {

    var trailingStop = localStorage.getItem('storedTrailingStop');
} else {
    var trailingStop = 0;
}
if (localStorage.getItem('storedMGReset')) {

    var MGReset = localStorage.getItem('storedMGReset');
} else {
    var MGReset = 0;
}
if (localStorage.getItem('storedMGStyle')) {

    var MGStyle = localStorage.getItem('storedMGStyle');
} else {
    var MGStyle = 'Oscar';
}
if (localStorage.getItem('storedAutoThresh')) {

    var autoThresh = localStorage.getItem('storedAutoThresh');
} else {
    var autoThresh = 10;
}
if (localStorage.getItem('storedMTdur')) {

    var ManualtradeDurationInt = localStorage.getItem('storedMTdur');
} else {
    var ManualtradeDurationInt = 15;
}
if (localStorage.getItem('storedMTunit')) {

    var ManualtradeDurationUnit = localStorage.getItem('storedMTunit');
} else {
    var ManualtradeDurationUnit = 's';
}
if (localStorage.getItem('storedATdur')) {

    var AutotradeDurationInt = localStorage.getItem('storedATdur');
} else {
    var AutotradeDurationInt = 15;
}
if (localStorage.getItem('storedATunit')) {

    var AutotradeDurationUnit = localStorage.getItem('storedATunit');
} else {
    var AutotradeDurationUnit = 's';
}




// Parse Trade Data

if (localStorage.getItem('storedstakestake')) {
    stakestake = localStorage.getItem('storedstakestake');

} else {
    stakestake = initialStakeinitialStake;
}

if (localStorage.getItem('storedwinswins')) {
    winswins = localStorage.getItem('storedwinswins') * 1;

} else {
    winswins = 0;
}

if (localStorage.getItem('storedlosseslosses')) {
    losseslosses = localStorage.getItem('storedlosseslosses') * 1;

} else {
    losseslosses = 0;
}

if (localStorage.getItem('storedconsecutiveWins')) {
    consecutiveWins = localStorage.getItem('storedconsecutiveWins') * 1;

} else {
    consecutiveWins = 0;
}

if (localStorage.getItem('storedcompoundWins')) {
    compoundWins = localStorage.getItem('storedcompoundWins') * 1;

} else {
    compoundWins = 0;
}

if (localStorage.getItem('storedconsecutiveLosses')) {
    consecutiveLosses = localStorage.getItem('storedconsecutiveLosses') * 1;

} else {
    consecutiveLosses = 0;
}

if (localStorage.getItem('storedcumLosscumLoss')) {
    cumLosscumLoss = localStorage.getItem('storedcumLosscumLoss') * 1;

} else {
    cumLosscumLoss = 0;
}

if (localStorage.getItem('storedpeakStake')) {
    peakStake = localStorage.getItem('storedpeakStake') * 1;

} else {
    peakStake = 0;
}

if (localStorage.getItem('storedmaxConLosses')) {
    maxConLosses = localStorage.getItem('storedmaxConLosses') * 1;

} else {
    maxConLosses = 0;
}

if (localStorage.getItem('storedmaxConWins')) {
    maxConWins = localStorage.getItem('storedmaxConWins') * 1;

} else {
    maxConWins = 0;
}

if (localStorage.getItem('storedwinrate')) {
    winrate = localStorage.getItem('storedwinrate') * 1;

} else {
    winrate = 0;
}

if (localStorage.getItem('storedprofit')) {
    profit = localStorage.getItem('storedprofit') * 1;

} else {
    profit = 0;
}

if (localStorage.getItem('storedpeakProfit')) {
    peakProfit = localStorage.getItem('storedpeakProfit') * 1;

} else {
    peakProfit = 0;
}

if (localStorage.getItem('storedpeakLoss')) {
    peakLoss = localStorage.getItem('storedpeakLoss') * 1;

} else {
    peakLoss = 0;
}

if (localStorage.getItem('storedladderProfit')) {
    ladderProfit = localStorage.getItem('storedladderProfit') * 1;

} else {
    ladderProfit = 0;
}

if (localStorage.getItem('storedladdersCompleted')) {
    laddersCompleted = localStorage.getItem('storedladdersCompleted') * 1;

} else {
    laddersCompleted = 0;
}

if (localStorage.getItem('storedladderLevel')) {
    ladderLevel = localStorage.getItem('storedladderLevel') * 1;

} else {
    ladderLevel = 0;
}




// settings.get('tokenToBeUsed.tokenToBeUsed')
var balance; //settings.set('balance.balance')
var currency; // settings.set('currency currency')
var loginId; // settings.set('loginid.loginId')

// settings.get('initialStake.initialStake')
/*
var stakestake = initialStakeinitialStake;
var winswins = 0; //settings.get('wins.wins') 
var losseslosses = 0; // settings.get('losses.losses')
var consecutiveWins = 0;
var compoundWins = 0;
var consecutiveLosses = 0;
var consecutiveWins = 0;
var cumLosscumLoss = 0;
var peakStake = 0;
var maxConLosses = 0;
var maxConWins = 0;
var winrate = 0;
var profit = 0;
var peakProfit = 0;
var peakLoss = 0;
var ladderProfit = 0;
var laddersCompleted = 0;
var ladderLevel = 0;

*/

//settings.get('stake.stake')


var strat = 'Manual'; //settings.get('strat.strat')

var contractId; //settings.set('contractid.contractid')
var message; //settings.set('message.message')
var errorCount;
var resultOnClose; //settings.set('resultOnClose.resultOnClose')
var runrun = false;
var autoTrade = false; //settings.set('autoTrade.autoTrade')



var lockAuto;

var autoLimit;

var placeCall;
var placePut;

var trading = 0;
var winLossSpot1;
var winLossSpot2
var normalRange;
var normalRange2;