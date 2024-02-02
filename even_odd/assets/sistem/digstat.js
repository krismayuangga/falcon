var _0x1622 = ['R_75^odd', 'forget_all', 'cookie', 'R_100^3', 'Bot\x20Stopped', 'reload', 'R_50', 'lblProfit', '<b>\x20Virtual\x20Account\x20</b>', 'R_10^2', 'token', 'push', 'R_25^3', 'RDBEAR^4', 
'wss://ws.derivws.com/websockets/v3?app_id=36270', 'INIT_STAKE', 'error', 'toFixed', '|try#1', 'tick_10', 'lblNama', 'txtTPmdl', 'stringify', 'R_100^4', 'tick', 'tick_bear', 'prices', 'Buy\x20(', 'You\x27re\x20not\x20online,\x20please\x20check\x20your\x20internet\x20connection.', 'RDBEAR^8', 'loginid', '\x20Tick)', 'log', 'buy_price', 'pip_size', 'prop', '.od', ';\x20path=/', '#txtStratemdl', 'change', '#signin', 'R_75^', 'RDBULL^2', 'R_100^9', 'R_100^odd', 'selDur', 'R_10^0', 'R_25^6', 'RDBULL^1', 'R_10^5', 'onerror', '#ex1', 'api_token', 'tick_bull', 'is_virtual', 'blue', '#txtSample\x20option', 'Welcome\x20to....', 'odd', 'RDBULL^9', 'selected', 'R_100^even', '\x20|\x20msg_type:', 'buy', 'R_25', 'tick_100', 'latest', 'ticks', ';\x20expires=', 'R_10^odd', 'black', '\x20-\x20Real\x20Account', 'DIGITDIFF', '^even', 'R_50^', '#FF0000', 'setTime', 'R_100^5', 'R_25^1', 'RDBULL^odd', 'lblEmail', 'R_50^even', 'R_100^0', 'RDBEAR^3', 'RDBULL^5', 'ticks_history', 'LOSE\x20(', 'proposal_open_contract', '.ev', 'R_10^6', 'getElementById', 'split', 'Kinerja\x20Even\x20Odd\x20Bot\x20Disconnected...', 'R_25^even', 'value', 'onLine', 'RDBULL^7', 'WIN\x20(', 'TicksHistory\x20', 'R_10^even', 'R_75^even', 'txtSLmdl', 'R_50^5', 'R_50^9', 'echo_req', 'RDBEAR^1', 'RDBEAR^even', 'RDBEAR^0', '\x27>\x20-\x20', '(^|;)\x20?', 'toString', 'R_25^8', 'abs', 'R_100^7', 'R_75^6', 'WebSocket\x20Error:\x20', 'RDBEAR^odd', 'START\x20BOT', 'R_75', 'R_75^7', 'HIT\x20Target\x20Profit\x20!!!', 'tick_25', 'DIGITEVEN', 'code', 'underlying', 'R_75^2', 'R_25^9', 'R_10^', 'getItem', 'Kinerja\x20Even\x20Odd\x20Bot\x20Connected', 'lblAcc', 'RDBULL^', 'getTime', 'profit', 'shift', '\x20:\x20', 'onopen', 'R_10^7', 'R_100^1', 'R_10^3', 'round', 'style', 'R_75^0', 'R_10^8', 'R_25^2', 'R_100^', 'slice', 'setItem', 'txtSample', 'R_10^1', 'balance', 'R_25^', 'data', 'RDBEAR', 'toUTCString', 'USD', '=([^;]*)(;|$)', 'R_100', 'fullname', 'tick_75', 'status', 'authorize', 'RDBULL', 'msg_type', 'btnAutoTrade', 'max', 'DIGITODD', 'message', 'show', 'RDBULL^0', 'lblBalatas', 'R_75^5', 'R_75^8', 'onclose', 'WebSocket\x20Closed.\x20', 'R_50^4', 'R_10', 'length', '#589658', 'R_50^7', 'BINARY.COM\x20SERVER:\x20', 'white', 'R_50^8', '</font><br>', 'R_75^9', '\x20|\x20', 'apply', 'R_50^1', 'txtStake', 'min', 'floor', 'R_50^3', 'is_sold', 'color', 'STOP\x20BOT', 'RDBEAR^2', '#FFFFFF', 'R_50^odd', 'RDBEAR^6', 'backgroundColor', 'RANDOM', 'quote', 'tick_50', 'txtStakemdl', 'email', '#txtSample', 'hasOwnProperty', 'includes', 'close', 'stake', 'R_75^4', 'send', 'RDBULL^3', 'Virtual', 'hide', '^odd', 'history', 'RDBEAR^', 'R_100^2', 'R_10^9', 'red', 'random', 'lblwinloss', '#signout', 'R_50^0', 'innerHTML', 'R_25^odd'];
(function (_0xcf1531, _0x162261) {
    var _0x9c2b22 = function (_0xb8c3a5) {
        while (--_0xb8c3a5) {
            _0xcf1531['push'](_0xcf1531['shift']());
        }
    };
    _0x9c2b22(++_0x162261);
}(_0x1622, 0x151));
var _0x9c2b = function (_0xcf1531, _0x162261) {
    _0xcf1531 = _0xcf1531 - 0x0;
    var _0x9c2b22 = _0x1622[_0xcf1531];
    return _0x9c2b22;
};
var _0x45e94e = _0x9c2b;
writeLog('#FFFFFF', 'Kinerja\x20Even\x20Odd\x20Bot');
var intervalCheckInet = setInterval(function () {
    var _0x56c194 = _0x9c2b;
    if (!navigator[_0x56c194('0xd4')])
        return writeLog(_0x56c194('0x56'), _0x56c194('0x91')),
            clearInterval(intervalCheckInet),
            ezStopBot(),
            ![];
}, 0x7d0), tempCount = 0x0, total_profit = 0x0, lastbalance = 0x0, win = 0x0, lost = 0x0, last_trade_win = !![], auto_trade = ![], intervalTicksHistoryID = 0x0,
 timeoutTicksHistory = 0x1388, maxtryTicksHistory = 0x3, _0x4c25 = [_0x45e94e('0x83')], 
 iR_10 = 0x0, iR_25 = 0x0, iR_50 = 0x0, iR_75 = 0x0, iR_100 = 0x0, iRDBEAR = 0x0, iRDBULL = 0x0, arrLDDataR_10 = [], arrLDDataR_25 = [], 
 arrLDDataR_50 = [], arrLDDataR_75 = [], arrLDDataR_100 = [], arrLDDataRDBEAR = [], arrLDDataRDBULL = [], 
 arrLDR_10 = [], arrLDR_25 = [], arrLDR_50 = [], arrLDR_75 = [], arrLDR_100 = [], arrLDRDBEAR = [], arrLDRDBULL = [], tempEvenR_10 = [], 
 tempEvenR_25 = [], tempEvenR_50 = [], tempEvenR_75 = [], tempEvenR_100 = [], tempEvenRDBEAR = [], tempEvenRDBULL = [], tempOddR_10 = [], 
 tempOddR_25 = [], tempOddR_50 = [], tempOddR_75 = [], tempOddR_100 = [], tempOddRDBEAR = [], tempOddRDBULL = [], tempLDR_10, tempLDR_25, 
 tempLDR_50, tempLDR_75, tempLDR_100, tempLDRDBEAR, tempLDRDBULL, pipSizeR_10, pipSizeR_25, pipSizeR_50, pipSizeR_75, pipSizeR_100, 
 pipSizeRDBEAR, pipSizeRDBULL, tempMaxR_10, tempMaxR_25, tempMaxR_50, tempMaxR_75, tempMaxR_100, tempMaxRDBEAR, tempMaxRDBULL, tempMinR_10, 
 tempMinR_25, tempMinR_50, tempMinR_75, tempMinR_100, tempMinRDBEAR, tempMinRDBULL, intervalAuthorizeID = 0x0, timeoutAuthorize = 0x1388, 
 maxtryAuthorize = 0x3, intervalContractID = 0x0, timeoutContract = 0x1388, maxtryContract = 0x3, intervalStatementID = 0x0, 
 timeoutStatement = 0x1388, maxtryStatement = 0x3, intervalBuyID = 0x0, timeoutBuy = 0x2710, maxtryBuy = 0x3, tempDelaySeconds = 0x0, 
 intervalBuyDelayID = 0x0, timeoutBuyDelay = 0x3e8, timerPlanB = 0x0, timeoutPlanBadd = 0x2, maxtryPlanB = 0x3, PRContractID = 0x0, 
 LastContractID = 0x0, arrSymbol = [_0x45e94e('0x42'), 'R_25', _0x45e94e('0x7b'), _0x45e94e('0x8'), _0x45e94e('0x2f'), 'RDBEAR',
  _0x45e94e('0x34')], app_url = _0x4c25[0x0], ws = new WebSocket(app_url);
ws[_0x45e94e('0xa7')] = function (_0xb8c3a5) {
    var _0x45226b = _0x45e94e;
    writeLog(_0x45226b('0x56'), _0x45226b('0x5') + _0xb8c3a5[_0x45226b('0x2a')]),
        ezStopBot();
}
    ,
    ws[_0x45e94e('0x3f')] = function (_0x5e01a3) {
        var _0x303f54 = _0x45e94e;
        return clearTimeout(timerPlanB),
            clearInterval(intervalBuyDelayID),
            clearInterval(intervalBuyID),
            clearInterval(intervalContractID),
            clearInterval(intervalAuthorizeID),
            clearInterval(intervalCheckInet),
            writeLog(_0x303f54('0x56'), _0x303f54('0x79')),
            writeLog('#FFFFFF', _0x303f54('0x40') + _0x5e01a3['reason']),
            ![];
    }
    ,
    ws[_0x45e94e('0x1a')] = function (_0xe97a9f) {
        var _0x37171a = _0x45e94e;
        funcTryTicksHistory(_0x37171a('0x42')),
            funcTryTicksHistory('R_25'),
            funcTryTicksHistory(_0x37171a('0x7b')),
            funcTryTicksHistory(_0x37171a('0x8')),
            funcTryTicksHistory(_0x37171a('0x2f')),
            funcTryTicksHistory(_0x37171a('0x2b')),
            funcTryTicksHistory(_0x37171a('0x34'));



        // getCookie(_0x37171a('0x7f')) && (document[_0x37171a('0xcf')]('api_token')[_0x37171a('0xd3')] = getCookie(_0x37171a('0x7f')),
        // setTimeout(function() {
        //     authorize();
        // }, 0x3e8));

        if (getCookie('api_token')) {
            document.getElementById("txtToken").value = getCookie('api_token')
            setTimeout(function () { authorize() }, 1000);
        }
    }
    ,
    ws['onmessage'] = function (_0x48fbae) {
        var _0x3bac6e = _0x45e94e
            , _0xe49cbd = JSON['parse'](_0x48fbae[_0x3bac6e('0x2a')]);
        if (_0xe49cbd[_0x3bac6e('0x60')](_0x3bac6e('0x85')))
            writeLog(_0x3bac6e('0xc0'), _0x3bac6e('0x46') + _0xe49cbd['error'][_0x3bac6e('0xd')] + _0x3bac6e('0x4b') + _0xe49cbd['error'][_0x3bac6e('0x39')] + _0x3bac6e('0xb3') + _0xe49cbd[_0x3bac6e('0x35')]);
        else {
            if (_0xe49cbd['msg_type'] == _0x3bac6e('0x76') && _0xe49cbd)
                funcTryTicksHistory('R_10'),
                    funcTryTicksHistory(_0x3bac6e('0xb5')),
                    funcTryTicksHistory(_0x3bac6e('0x7b')),
                    funcTryTicksHistory(_0x3bac6e('0x8')),
                    funcTryTicksHistory(_0x3bac6e('0x2f')),
                    funcTryTicksHistory(_0x3bac6e('0x2b')),
                    funcTryTicksHistory('RDBULL');
            else {
                if (_0xe49cbd['msg_type'] == _0x3bac6e('0x33') && _0xe49cbd)
                    setCookie("api_token", document.getElementById("txtToken").value, 30),
                        writeLog(_0x3bac6e('0x56'), _0x3bac6e('0x13')),
                        buyDone = ![],
                        ws[_0x3bac6e('0x65')](JSON[_0x3bac6e('0x8b')]({
                            'balance': '1',
                            'subscribe': '1'
                        })),
                        account = _0xe49cbd[_0x3bac6e('0x33')],
                        email = account[_0x3bac6e('0x5e')],
                        loginid = account[_0x3bac6e('0x93')],
                        balance = account[_0x3bac6e('0x28')],
                        is_virtual = account[_0x3bac6e('0xab')],
                        fullname = account[_0x3bac6e('0x30')] == '\x20\x20' + _0x3bac6e('0x67') ? loginid : account[_0x3bac6e('0x30')] + _0x3bac6e('0xbc'),
                        firstbalance = Number(balance),
                        document['getElementById'](_0x3bac6e('0x3c'))[_0x3bac6e('0x73')] = '$\x20' + firstbalance,
                        document[_0x3bac6e('0xcf')](_0x3bac6e('0xc5'))[_0x3bac6e('0x73')] = email,
                        document[_0x3bac6e('0xcf')](_0x3bac6e('0x14'))[_0x3bac6e('0x73')] = loginid,
                        loginid[_0x3bac6e('0x24')](0x0, 0x2) == 'CR' || is_virtual == 0x0 ? cr = !![] : cr = ![],
                        is_virtual == 0x1 ? document[_0x3bac6e('0xcf')](_0x3bac6e('0x89'))[_0x3bac6e('0x73')] = _0x3bac6e('0x7d') : document[_0x3bac6e('0xcf')](_0x3bac6e('0x89'))[_0x3bac6e('0x73')] = fullname;
                else {
                    if (_0xe49cbd[_0x3bac6e('0x35')] == 'balance')
                        document[_0x3bac6e('0xcf')]('lblendbalance')['innerHTML'] = '$\x20' + _0xe49cbd['balance']['balance'][_0x3bac6e('0x86')](0x2);
                    else {
                        if (_0xe49cbd[_0x3bac6e('0x35')] == _0x3bac6e('0x6a') && _0xe49cbd) {
                            if (_0xe49cbd['echo_req']['ticks_history'] == 'R_10')
                                arrLDDataR_10 = [],
                                    arrLDDataR_10 = _0xe49cbd['history'][_0x3bac6e('0x8f')],
                                    pipSizeR_10 = _0xe49cbd[_0x3bac6e('0x97')],
                                    funcShowDataR_10();
                            else {
                                if (_0xe49cbd[_0x3bac6e('0xdd')]['ticks_history'] == _0x3bac6e('0xb5'))
                                    arrLDDataR_25 = [],
                                        arrLDDataR_25 = _0xe49cbd['history'][_0x3bac6e('0x8f')],
                                        pipSizeR_25 = _0xe49cbd[_0x3bac6e('0x97')],
                                        funcShowDataR_25();
                                else {
                                    if (_0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == _0x3bac6e('0x7b'))
                                        arrLDDataR_50 = [],
                                            arrLDDataR_50 = _0xe49cbd[_0x3bac6e('0x6a')][_0x3bac6e('0x8f')],
                                            pipSizeR_50 = _0xe49cbd[_0x3bac6e('0x97')],
                                            funcShowDataR_50();
                                    else {
                                        if (_0xe49cbd[_0x3bac6e('0xdd')]['ticks_history'] == _0x3bac6e('0x8'))
                                            arrLDDataR_75 = [],
                                                arrLDDataR_75 = _0xe49cbd[_0x3bac6e('0x6a')][_0x3bac6e('0x8f')],
                                                pipSizeR_75 = _0xe49cbd[_0x3bac6e('0x97')],
                                                funcShowDataR_75();
                                        else {
                                            if (_0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == _0x3bac6e('0x2f'))
                                                arrLDDataR_100 = [],
                                                    arrLDDataR_100 = _0xe49cbd[_0x3bac6e('0x6a')]['prices'],
                                                    pipSizeR_100 = _0xe49cbd['pip_size'],
                                                    funcShowDataR_100();
                                            else {
                                                if (_0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == _0x3bac6e('0x2b'))
                                                    arrLDDataRDBEAR = [],
                                                        arrLDDataRDBEAR = _0xe49cbd['history'][_0x3bac6e('0x8f')],
                                                        pipSizeRDBEAR = _0xe49cbd['pip_size'],
                                                        funcShowDataRDBEAR();
                                                else
                                                    _0xe49cbd[_0x3bac6e('0xdd')]['ticks_history'] == _0x3bac6e('0x34') && (arrLDDataRDBULL = [],
                                                        arrLDDataRDBULL = _0xe49cbd[_0x3bac6e('0x6a')][_0x3bac6e('0x8f')],
                                                        pipSizeRDBULL = _0xe49cbd[_0x3bac6e('0x97')],
                                                        funcShowDataRDBULL());
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (_0xe49cbd['msg_type'] == 'tick' && _0xe49cbd) {
                                if (_0xe49cbd['echo_req'][_0x3bac6e('0xca')] == 'R_10')
                                    arrLDDataR_10[_0x3bac6e('0x18')](),
                                        arrLDDataR_10[_0x3bac6e('0x80')](_0xe49cbd[_0x3bac6e('0x8d')][_0x3bac6e('0x5b')]),
                                        funcShowDataR_10();
                                else {
                                    if (_0xe49cbd[_0x3bac6e('0xdd')]['ticks_history'] == _0x3bac6e('0xb5'))
                                        arrLDDataR_25[_0x3bac6e('0x18')](),
                                            arrLDDataR_25[_0x3bac6e('0x80')](_0xe49cbd[_0x3bac6e('0x8d')][_0x3bac6e('0x5b')]),
                                            funcShowDataR_25();
                                    else {
                                        if (_0xe49cbd[_0x3bac6e('0xdd')]['ticks_history'] == _0x3bac6e('0x7b'))
                                            arrLDDataR_50[_0x3bac6e('0x18')](),
                                                arrLDDataR_50[_0x3bac6e('0x80')](_0xe49cbd['tick'][_0x3bac6e('0x5b')]),
                                                funcShowDataR_50();
                                        else {
                                            if (_0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == 'R_75')
                                                arrLDDataR_75[_0x3bac6e('0x18')](),
                                                    arrLDDataR_75[_0x3bac6e('0x80')](_0xe49cbd[_0x3bac6e('0x8d')][_0x3bac6e('0x5b')]),
                                                    funcShowDataR_75();
                                            else {
                                                if (_0xe49cbd['echo_req'][_0x3bac6e('0xca')] == _0x3bac6e('0x2f'))
                                                    arrLDDataR_100[_0x3bac6e('0x18')](),
                                                        arrLDDataR_100[_0x3bac6e('0x80')](_0xe49cbd[_0x3bac6e('0x8d')][_0x3bac6e('0x5b')]),
                                                        funcShowDataR_100();
                                                else {
                                                    if (_0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == _0x3bac6e('0x2b'))
                                                        arrLDDataRDBEAR[_0x3bac6e('0x18')](),
                                                            arrLDDataRDBEAR[_0x3bac6e('0x80')](_0xe49cbd[_0x3bac6e('0x8d')][_0x3bac6e('0x5b')]),
                                                            funcShowDataRDBEAR();
                                                    else
                                                        _0xe49cbd[_0x3bac6e('0xdd')][_0x3bac6e('0xca')] == _0x3bac6e('0x34') && (arrLDDataRDBULL[_0x3bac6e('0x18')](),
                                                            arrLDDataRDBULL['push'](_0xe49cbd['tick'][_0x3bac6e('0x5b')]),
                                                            funcShowDataRDBULL());
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (_0xe49cbd['msg_type'] == _0x3bac6e('0xb4') && _0xe49cbd)
                                    writeLog('#FFFFFF', 'Bought\x20(' + _0xe49cbd[_0x3bac6e('0xb4')][_0x3bac6e('0x96')] + ')');
                                else {
                                    if (_0xe49cbd[_0x3bac6e('0x35')] == _0x3bac6e('0xcc') && _0xe49cbd[_0x3bac6e('0xcc')][_0x3bac6e('0x52')])
                                        buyDone = ![],
                                            market = _0xe49cbd[_0x3bac6e('0xcc')][_0x3bac6e('0xe')],
                                            market_arr['push'](market),
                                            market_arr['shift'](),
                                            total_profit += _0xe49cbd['proposal_open_contract'][_0x3bac6e('0x17')],
                                            SetProft(),
                                            _0xe49cbd[_0x3bac6e('0xcc')][_0x3bac6e('0x32')] == 'won' ? (writeLog(_0x3bac6e('0xac'), _0x3bac6e('0xd6') + _0xe49cbd[_0x3bac6e('0xcc')]['profit'] + ')'),
                                                last_trade_win = !![],
                                                win_arr['push'](!![]),
                                                win_arr[_0x3bac6e('0x18')](),
                                                win++) : (writeLog('#FF0000', _0x3bac6e('0xcb') + _0xe49cbd['proposal_open_contract']['profit'] + ')'),
                                                    last_trade_win = ![],
                                                    win_arr[_0x3bac6e('0x80')](![]),
                                                    win_arr[_0x3bac6e('0x18')](),
                                                    lost++),
                                            document[_0x3bac6e('0xcf')](_0x3bac6e('0x70'))[_0x3bac6e('0x73')] = '[\x20' + win + _0x3bac6e('0x19') + lost + '\x20]',
                                            manageStake();
                                    else { }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ;
function funcShowDataR_10() {
    var _0x43bd6d = _0x45e94e;
    arrLDR_10 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenR_10 = 0x0,
        tempOddR_10 = 0x0;
    for (iR_10 = 0x0; iR_10 < arrLDDataR_10[_0x43bd6d('0x43')]; iR_10++) {
        tempLDR_10 = Math[_0x43bd6d('0x1e')](arrLDDataR_10[iR_10] * 0xa ** pipSizeR_10 % 0xa),
            arrLDR_10[tempLDR_10] = arrLDR_10[tempLDR_10] + 0x1,
            tempLDR_10 % 0x2 == 0x0 ? tempEvenR_10++ : tempOddR_10++;
    }
    tempMaxR_10 = arrLDR_10[0x0],
        tempMinR_10 = tempMaxR_10;
    for (iR_10 = 0x1; iR_10 < 0xa; iR_10++) {
        arrLDR_10[iR_10] > tempMaxR_10 && (tempMaxR_10 = arrLDR_10[iR_10]),
            arrLDR_10[iR_10] < tempMinR_10 && (tempMinR_10 = arrLDR_10[iR_10]);
    }
    for (iR_10 = 0x0; iR_10 < 0xa; iR_10++) {
        document[_0x43bd6d('0xcf')](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0xd3')] = arrLDR_10[iR_10];
        if (arrLDR_10[iR_10] == tempMaxR_10)
            document['getElementById'](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0x1f')][_0x43bd6d('0x59')] = '#589658',
                document[_0x43bd6d('0xcf')]('R_10^' + iR_10)['style']['color'] = _0x43bd6d('0x47');
        else
            arrLDR_10[iR_10] == tempMinR_10 ? (document[_0x43bd6d('0xcf')](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0x1f')][_0x43bd6d('0x59')] = _0x43bd6d('0x6e'),
                document['getElementById'](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0x1f')][_0x43bd6d('0x53')] = _0x43bd6d('0x47')) : (document[_0x43bd6d('0xcf')](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0x1f')][_0x43bd6d('0x59')] = '',
                    document[_0x43bd6d('0xcf')](_0x43bd6d('0x11') + iR_10)[_0x43bd6d('0x1f')][_0x43bd6d('0x53')] = _0x43bd6d('0xbb'));
        getLowVal(arrLDR_10[iR_10], 'R_10', iR_10);
    }
    var _0x851c53 = arrLDDataR_10[_0x43bd6d('0x24')](-0x1)[0x0]
        , _0x4d2e38 = _0x851c53[_0x43bd6d('0x0')]()[_0x43bd6d('0x24')](-0x1);
    document[_0x43bd6d('0xcf')](_0x43bd6d('0x88'))['value'] = _0x851c53,
        document[_0x43bd6d('0xcf')](_0x43bd6d('0xd8'))[_0x43bd6d('0xd3')] = Math[_0x43bd6d('0x1e')](tempEvenR_10 / document[_0x43bd6d('0xcf')](_0x43bd6d('0x26'))[_0x43bd6d('0xd3')] * 0x64),
        document[_0x43bd6d('0xcf')]('R_10^odd')[_0x43bd6d('0xd3')] = Math[_0x43bd6d('0x1e')](tempOddR_10 / document[_0x43bd6d('0xcf')](_0x43bd6d('0x26'))[_0x43bd6d('0xd3')] * 0x64);
}
function funcShowDataR_25() {
    var _0x3f260c = _0x45e94e;
    arrLDR_25 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenR_25 = 0x0,
        tempOddR_25 = 0x0;
    for (iR_25 = 0x0; iR_25 < arrLDDataR_25[_0x3f260c('0x43')]; iR_25++) {
        tempLDR_25 = Math[_0x3f260c('0x1e')](arrLDDataR_25[iR_25] * 0xa ** pipSizeR_25 % 0xa),
            arrLDR_25[tempLDR_25] = arrLDR_25[tempLDR_25] + 0x1,
            tempLDR_25 % 0x2 == 0x0 ? tempEvenR_25++ : tempOddR_25++;
    }
    tempMaxR_25 = arrLDR_25[0x0],
        tempMinR_25 = tempMaxR_25;
    for (iR_25 = 0x1; iR_25 < 0xa; iR_25++) {
        arrLDR_25[iR_25] > tempMaxR_25 && (tempMaxR_25 = arrLDR_25[iR_25]),
            arrLDR_25[iR_25] < tempMinR_25 && (tempMinR_25 = arrLDR_25[iR_25]);
    }
    for (iR_25 = 0x0; iR_25 < 0xa; iR_25++) {
        document[_0x3f260c('0xcf')]('R_25^' + iR_25)[_0x3f260c('0xd3')] = arrLDR_25[iR_25];
        if (arrLDR_25[iR_25] == tempMaxR_25)
            document[_0x3f260c('0xcf')](_0x3f260c('0x29') + iR_25)[_0x3f260c('0x1f')][_0x3f260c('0x59')] = _0x3f260c('0x44'),
                document[_0x3f260c('0xcf')]('R_25^' + iR_25)['style'][_0x3f260c('0x53')] = 'white';
        else
            arrLDR_25[iR_25] == tempMinR_25 ? (document[_0x3f260c('0xcf')]('R_25^' + iR_25)[_0x3f260c('0x1f')][_0x3f260c('0x59')] = _0x3f260c('0x6e'),
                document[_0x3f260c('0xcf')](_0x3f260c('0x29') + iR_25)[_0x3f260c('0x1f')][_0x3f260c('0x53')] = _0x3f260c('0x47')) : (document[_0x3f260c('0xcf')]('R_25^' + iR_25)[_0x3f260c('0x1f')]['backgroundColor'] = '',
                    document['getElementById'](_0x3f260c('0x29') + iR_25)[_0x3f260c('0x1f')][_0x3f260c('0x53')] = _0x3f260c('0xbb'));
        getLowVal(arrLDR_25[iR_25], 'R_25', iR_25);
    }
    var _0x962eca = arrLDDataR_25[_0x3f260c('0x24')](-0x1)[0x0]
        , _0x45451d = _0x962eca[_0x3f260c('0x0')]()['slice'](-0x1);
    document['getElementById'](_0x3f260c('0xb'))[_0x3f260c('0xd3')] = _0x962eca,
        document[_0x3f260c('0xcf')]('R_25^even')[_0x3f260c('0xd3')] = Math[_0x3f260c('0x1e')](tempEvenR_25 / document['getElementById'](_0x3f260c('0x26'))[_0x3f260c('0xd3')] * 0x64),
        document['getElementById'](_0x3f260c('0x74'))['value'] = Math[_0x3f260c('0x1e')](tempOddR_25 / document['getElementById']('txtSample')[_0x3f260c('0xd3')] * 0x64);
}
function funcShowDataR_50() {
    var _0x3310c1 = _0x45e94e;
    arrLDR_50 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenR_50 = 0x0,
        tempOddR_50 = 0x0;
    for (iR_50 = 0x0; iR_50 < arrLDDataR_50[_0x3310c1('0x43')]; iR_50++) {
        tempLDR_50 = Math[_0x3310c1('0x1e')](arrLDDataR_50[iR_50] * 0xa ** pipSizeR_50 % 0xa),
            arrLDR_50[tempLDR_50] = arrLDR_50[tempLDR_50] + 0x1,
            tempLDR_50 % 0x2 == 0x0 ? tempEvenR_50++ : tempOddR_50++;
    }
    tempMaxR_50 = arrLDR_50[0x0],
        tempMinR_50 = tempMaxR_50;
    for (iR_50 = 0x1; iR_50 < 0xa; iR_50++) {
        arrLDR_50[iR_50] > tempMaxR_50 && (tempMaxR_50 = arrLDR_50[iR_50]),
            arrLDR_50[iR_50] < tempMinR_50 && (tempMinR_50 = arrLDR_50[iR_50]);
    }
    for (iR_50 = 0x0; iR_50 < 0xa; iR_50++) {
        document[_0x3310c1('0xcf')](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0xd3')] = arrLDR_50[iR_50];
        if (arrLDR_50[iR_50] == tempMaxR_50)
            document[_0x3310c1('0xcf')](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0x1f')][_0x3310c1('0x59')] = _0x3310c1('0x44'),
                document['getElementById'](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0x1f')][_0x3310c1('0x53')] = _0x3310c1('0x47');
        else
            arrLDR_50[iR_50] == tempMinR_50 ? (document['getElementById']('R_50^' + iR_50)['style'][_0x3310c1('0x59')] = _0x3310c1('0x6e'),
                document[_0x3310c1('0xcf')](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0x1f')][_0x3310c1('0x53')] = _0x3310c1('0x47')) : (document['getElementById'](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0x1f')][_0x3310c1('0x59')] = '',
                    document['getElementById'](_0x3310c1('0xbf') + iR_50)[_0x3310c1('0x1f')][_0x3310c1('0x53')] = _0x3310c1('0xbb'));
        getLowVal(arrLDR_50[iR_50], _0x3310c1('0x7b'), iR_50);
    }
    var _0x419190 = arrLDDataR_50['slice'](-0x1)[0x0]
        , _0x8e9c1f = _0x419190[_0x3310c1('0x0')]()[_0x3310c1('0x24')](-0x1);
    document[_0x3310c1('0xcf')](_0x3310c1('0x5c'))[_0x3310c1('0xd3')] = _0x419190,
        document[_0x3310c1('0xcf')](_0x3310c1('0xc6'))[_0x3310c1('0xd3')] = Math['round'](tempEvenR_50 / document[_0x3310c1('0xcf')](_0x3310c1('0x26'))[_0x3310c1('0xd3')] * 0x64),
        document[_0x3310c1('0xcf')](_0x3310c1('0x57'))[_0x3310c1('0xd3')] = Math[_0x3310c1('0x1e')](tempOddR_50 / document[_0x3310c1('0xcf')](_0x3310c1('0x26'))[_0x3310c1('0xd3')] * 0x64);
}
function funcShowDataR_75() {
    var _0x2a0678 = _0x45e94e;
    arrLDR_75 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenR_75 = 0x0,
        tempOddR_75 = 0x0;
    for (iR_75 = 0x0; iR_75 < arrLDDataR_75[_0x2a0678('0x43')]; iR_75++) {
        tempLDR_75 = Math[_0x2a0678('0x1e')](arrLDDataR_75[iR_75] * 0xa ** pipSizeR_75 % 0xa),
            arrLDR_75[tempLDR_75] = arrLDR_75[tempLDR_75] + 0x1,
            tempLDR_75 % 0x2 == 0x0 ? tempEvenR_75++ : tempOddR_75++;
    }
    tempMaxR_75 = arrLDR_75[0x0],
        tempMinR_75 = tempMaxR_75;
    for (iR_75 = 0x1; iR_75 < 0xa; iR_75++) {
        arrLDR_75[iR_75] > tempMaxR_75 && (tempMaxR_75 = arrLDR_75[iR_75]),
            arrLDR_75[iR_75] < tempMinR_75 && (tempMinR_75 = arrLDR_75[iR_75]);
    }
    for (iR_75 = 0x0; iR_75 < 0xa; iR_75++) {
        document[_0x2a0678('0xcf')](_0x2a0678('0x9e') + iR_75)['value'] = arrLDR_75[iR_75];
        if (arrLDR_75[iR_75] == tempMaxR_75)
            document[_0x2a0678('0xcf')]('R_75^' + iR_75)[_0x2a0678('0x1f')][_0x2a0678('0x59')] = '#589658',
                document[_0x2a0678('0xcf')](_0x2a0678('0x9e') + iR_75)[_0x2a0678('0x1f')][_0x2a0678('0x53')] = _0x2a0678('0x47');
        else
            arrLDR_75[iR_75] == tempMinR_75 ? (document[_0x2a0678('0xcf')](_0x2a0678('0x9e') + iR_75)[_0x2a0678('0x1f')][_0x2a0678('0x59')] = _0x2a0678('0x6e'),
                document[_0x2a0678('0xcf')](_0x2a0678('0x9e') + iR_75)[_0x2a0678('0x1f')]['color'] = _0x2a0678('0x47')) : (document[_0x2a0678('0xcf')](_0x2a0678('0x9e') + iR_75)['style'][_0x2a0678('0x59')] = '',
                    document['getElementById'](_0x2a0678('0x9e') + iR_75)[_0x2a0678('0x1f')][_0x2a0678('0x53')] = _0x2a0678('0xbb'));
        getLowVal(arrLDR_75[iR_75], _0x2a0678('0x8'), iR_75);
    }
    var _0x5e5796 = arrLDDataR_75[_0x2a0678('0x24')](-0x1)[0x0]
        , _0x4a90f7 = _0x5e5796[_0x2a0678('0x0')]()[_0x2a0678('0x24')](-0x1);
    document[_0x2a0678('0xcf')](_0x2a0678('0x31'))['value'] = _0x5e5796,
        document['getElementById'](_0x2a0678('0xd9'))['value'] = Math[_0x2a0678('0x1e')](tempEvenR_75 / document['getElementById'](_0x2a0678('0x26'))[_0x2a0678('0xd3')] * 0x64),
        document[_0x2a0678('0xcf')](_0x2a0678('0x75'))[_0x2a0678('0xd3')] = Math[_0x2a0678('0x1e')](tempOddR_75 / document[_0x2a0678('0xcf')](_0x2a0678('0x26'))[_0x2a0678('0xd3')] * 0x64);
}
function funcShowDataR_100() {
    var _0x55c665 = _0x45e94e;
    arrLDR_100 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenR_100 = 0x0,
        tempOddR_100 = 0x0;
    for (iR_100 = 0x0; iR_100 < arrLDDataR_100[_0x55c665('0x43')]; iR_100++) {
        tempLDR_100 = Math[_0x55c665('0x1e')](arrLDDataR_100[iR_100] * 0xa ** pipSizeR_100 % 0xa),
            arrLDR_100[tempLDR_100] = arrLDR_100[tempLDR_100] + 0x1,
            tempLDR_100 % 0x2 == 0x0 ? tempEvenR_100++ : tempOddR_100++;
    }
    tempMaxR_100 = arrLDR_100[0x0],
        tempMinR_100 = tempMaxR_100;
    for (iR_100 = 0x1; iR_100 < 0xa; iR_100++) {
        arrLDR_100[iR_100] > tempMaxR_100 && (tempMaxR_100 = arrLDR_100[iR_100]),
            arrLDR_100[iR_100] < tempMinR_100 && (tempMinR_100 = arrLDR_100[iR_100]);
    }
    for (iR_100 = 0x0; iR_100 < 0xa; iR_100++) {
        document[_0x55c665('0xcf')]('R_100^' + iR_100)['value'] = arrLDR_100[iR_100];
        if (arrLDR_100[iR_100] == tempMaxR_100)
            document['getElementById'](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')][_0x55c665('0x59')] = _0x55c665('0x44'),
                document[_0x55c665('0xcf')](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')]['color'] = _0x55c665('0x47');
        else
            arrLDR_100[iR_100] == tempMinR_100 ? (document[_0x55c665('0xcf')](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')][_0x55c665('0x59')] = _0x55c665('0x6e'),
                document[_0x55c665('0xcf')](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')][_0x55c665('0x53')] = _0x55c665('0x47')) : (document[_0x55c665('0xcf')](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')]['backgroundColor'] = '',
                    document[_0x55c665('0xcf')](_0x55c665('0x23') + iR_100)[_0x55c665('0x1f')][_0x55c665('0x53')] = _0x55c665('0xbb'));
        getLowVal(arrLDR_100[iR_100], _0x55c665('0x2f'), iR_100);
    }
    var _0x1053cd = arrLDDataR_100[_0x55c665('0x24')](-0x1)[0x0]
        , _0x4b2f2d = _0x1053cd[_0x55c665('0x0')]()[_0x55c665('0x24')](-0x1);
    document[_0x55c665('0xcf')](_0x55c665('0xb6'))['value'] = _0x1053cd,
        document[_0x55c665('0xcf')](_0x55c665('0xb2'))['value'] = Math[_0x55c665('0x1e')](tempEvenR_100 / document[_0x55c665('0xcf')](_0x55c665('0x26'))['value'] * 0x64),
        document[_0x55c665('0xcf')](_0x55c665('0xa1'))[_0x55c665('0xd3')] = Math[_0x55c665('0x1e')](tempOddR_100 / document[_0x55c665('0xcf')](_0x55c665('0x26'))[_0x55c665('0xd3')] * 0x64);
}
function funcShowDataRDBEAR() {
    var _0x3f59c2 = _0x45e94e;
    arrLDRDBEAR = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenRDBEAR = 0x0,
        tempOddRDBEAR = 0x0;
    for (iRDBEAR = 0x0; iRDBEAR < arrLDDataRDBEAR['length']; iRDBEAR++) {
        tempLDRDBEAR = Math[_0x3f59c2('0x1e')](arrLDDataRDBEAR[iRDBEAR] * 0xa ** pipSizeRDBEAR % 0xa),
            arrLDRDBEAR[tempLDRDBEAR] = arrLDRDBEAR[tempLDRDBEAR] + 0x1,
            tempLDRDBEAR % 0x2 == 0x0 ? tempEvenRDBEAR++ : tempOddRDBEAR++;
    }
    tempMaxRDBEAR = arrLDRDBEAR[0x0],
        tempMinRDBEAR = tempMaxRDBEAR;
    for (iRDBEAR = 0x1; iRDBEAR < 0xa; iRDBEAR++) {
        arrLDRDBEAR[iRDBEAR] > tempMaxRDBEAR && (tempMaxRDBEAR = arrLDRDBEAR[iRDBEAR]),
            arrLDRDBEAR[iRDBEAR] < tempMinRDBEAR && (tempMinRDBEAR = arrLDRDBEAR[iRDBEAR]);
    }
    for (iRDBEAR = 0x0; iRDBEAR < 0xa; iRDBEAR++) {
        document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)[_0x3f59c2('0xd3')] = arrLDRDBEAR[iRDBEAR];
        if (arrLDRDBEAR[iRDBEAR] == tempMaxRDBEAR)
            document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)[_0x3f59c2('0x1f')][_0x3f59c2('0x59')] = '#589658',
                document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)['style']['color'] = 'white';
        else
            arrLDRDBEAR[iRDBEAR] == tempMinRDBEAR ? (document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)['style'][_0x3f59c2('0x59')] = _0x3f59c2('0x6e'),
                document['getElementById']('RDBEAR^' + iRDBEAR)['style'][_0x3f59c2('0x53')] = _0x3f59c2('0x47')) : (document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)[_0x3f59c2('0x1f')][_0x3f59c2('0x59')] = '',
                    document[_0x3f59c2('0xcf')](_0x3f59c2('0x6b') + iRDBEAR)['style'][_0x3f59c2('0x53')] = _0x3f59c2('0xbb'));
        getLowVal(arrLDRDBEAR[iRDBEAR], _0x3f59c2('0x2b'), iRDBEAR);
    }
    var _0x16c008 = arrLDDataRDBEAR['slice'](-0x1)[0x0]
        , _0x43c0d1 = _0x16c008[_0x3f59c2('0x0')]()[_0x3f59c2('0x24')](-0x1);
    document[_0x3f59c2('0xcf')](_0x3f59c2('0x8e'))['value'] = _0x16c008,
        document[_0x3f59c2('0xcf')](_0x3f59c2('0xdf'))[_0x3f59c2('0xd3')] = Math[_0x3f59c2('0x1e')](tempEvenRDBEAR / document[_0x3f59c2('0xcf')](_0x3f59c2('0x26'))[_0x3f59c2('0xd3')] * 0x64),
        document[_0x3f59c2('0xcf')](_0x3f59c2('0x6'))['value'] = Math[_0x3f59c2('0x1e')](tempOddRDBEAR / document[_0x3f59c2('0xcf')](_0x3f59c2('0x26'))[_0x3f59c2('0xd3')] * 0x64);
}
function funcShowDataRDBULL() {
    var _0x24ca85 = _0x45e94e;
    arrLDRDBULL = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        tempEvenRDBULL = 0x0,
        tempOddRDBULL = 0x0;
    for (iRDBULL = 0x0; iRDBULL < arrLDDataRDBULL[_0x24ca85('0x43')]; iRDBULL++) {
        tempLDRDBULL = Math[_0x24ca85('0x1e')](arrLDDataRDBULL[iRDBULL] * 0xa ** pipSizeRDBULL % 0xa),
            arrLDRDBULL[tempLDRDBULL] = arrLDRDBULL[tempLDRDBULL] + 0x1,
            tempLDRDBULL % 0x2 == 0x0 ? tempEvenRDBULL++ : tempOddRDBULL++;
    }
    tempMaxRDBULL = arrLDRDBULL[0x0],
        tempMinRDBULL = tempMaxRDBULL;
    for (iRDBULL = 0x1; iRDBULL < 0xa; iRDBULL++) {
        arrLDRDBULL[iRDBULL] > tempMaxRDBULL && (tempMaxRDBULL = arrLDRDBULL[iRDBULL]),
            arrLDRDBULL[iRDBULL] < tempMinRDBULL && (tempMinRDBULL = arrLDRDBULL[iRDBULL]);
    }
    for (iRDBULL = 0x0; iRDBULL < 0xa; iRDBULL++) {
        document['getElementById'](_0x24ca85('0x15') + iRDBULL)['value'] = arrLDRDBULL[iRDBULL];
        if (arrLDRDBULL[iRDBULL] == tempMaxRDBULL)
            document[_0x24ca85('0xcf')]('RDBULL^' + iRDBULL)['style'][_0x24ca85('0x59')] = '#589658',
                document[_0x24ca85('0xcf')](_0x24ca85('0x15') + iRDBULL)[_0x24ca85('0x1f')][_0x24ca85('0x53')] = _0x24ca85('0x47');
        else
            arrLDRDBULL[iRDBULL] == tempMinRDBULL ? (document['getElementById'](_0x24ca85('0x15') + iRDBULL)[_0x24ca85('0x1f')][_0x24ca85('0x59')] = _0x24ca85('0x6e'),
                document[_0x24ca85('0xcf')](_0x24ca85('0x15') + iRDBULL)[_0x24ca85('0x1f')][_0x24ca85('0x53')] = 'white') : (document[_0x24ca85('0xcf')](_0x24ca85('0x15') + iRDBULL)[_0x24ca85('0x1f')][_0x24ca85('0x59')] = '',
                    document['getElementById'](_0x24ca85('0x15') + iRDBULL)[_0x24ca85('0x1f')]['color'] = _0x24ca85('0xbb'));
        getLowVal(arrLDRDBULL[iRDBULL], _0x24ca85('0x34'), iRDBULL);
    }
    var _0xd18927 = arrLDDataRDBULL[_0x24ca85('0x24')](-0x1)[0x0]
        , _0x805302 = _0xd18927[_0x24ca85('0x0')]()[_0x24ca85('0x24')](-0x1);
    document[_0x24ca85('0xcf')](_0x24ca85('0xaa'))[_0x24ca85('0xd3')] = _0xd18927,
        document[_0x24ca85('0xcf')]('RDBULL^even')[_0x24ca85('0xd3')] = Math['round'](tempEvenRDBULL / document[_0x24ca85('0xcf')]('txtSample')[_0x24ca85('0xd3')] * 0x64),
        document[_0x24ca85('0xcf')](_0x24ca85('0xc4'))[_0x24ca85('0xd3')] = Math[_0x24ca85('0x1e')](tempOddRDBULL / document[_0x24ca85('0xcf')](_0x24ca85('0x26'))[_0x24ca85('0xd3')] * 0x64);
}
function writeLog(_0x22e885, _0x5fe5e4) {
    var _0x4b288f = _0x45e94e;
    document[_0x4b288f('0xcf')]('log')[_0x4b288f('0x73')] = '<font\x20color=\x27' + _0x22e885 + _0x4b288f('0xe1') + _0x5fe5e4 + _0x4b288f('0x49') + document['getElementById'](_0x4b288f('0x95'))[_0x4b288f('0x73')],
        console[_0x4b288f('0x95')](_0x5fe5e4);
}
function ezStopBot() {
    var _0x3d74ff = _0x45e94e;
    return ws[_0x3d74ff('0x62')](),
        ![];
}
function funcTryTicksHistory(_0x268950) {
    var _0x3777a7 = _0x45e94e;
    console[_0x3777a7('0x95')](_0x3777a7('0xd7') + _0x268950 + _0x3777a7('0x87')),
        ws[_0x3777a7('0x65')](JSON['stringify']({
            'subscribe': 0x1,
            'ticks_history': _0x268950,
            'adjust_start_time': 0x1,
            'count': document[_0x3777a7('0xcf')]('txtSample')[_0x3777a7('0xd3')],
            'end': _0x3777a7('0xb7'),
            'start': 0x1,
            'style': _0x3777a7('0xb8')
        }));
}
var ezContract, ezSymbol, ezStake, ezLdp, ezDurString, ezDur, buyDone = !![];
function ezBuyDigDiff(_0x2417d6) {
    var _0x53c518 = _0x45e94e;
    buyDone = !![],
        ezContract = _0x53c518('0xbd'),
        ezSymbol = _0x2417d6[_0x53c518('0xd0')]('^')[0x0],
        ezStake = document[_0x53c518('0xcf')](_0x53c518('0x4e'))[_0x53c518('0xd3')],
        ezLdp = _0x2417d6[_0x53c518('0xd0')]('^')[0x1],
        ezDurString = document[_0x53c518('0xcf')](_0x53c518('0xa2'))[_0x53c518('0xd3')],
        ezDurString == _0x53c518('0x5a') ? ezDur = Math[_0x53c518('0x50')](Math[_0x53c518('0x6f')]() * 0xa) + 0x1 : ezDur = parseInt(ezDurString),
        writeLog(_0x53c518('0x56'), _0x53c518('0x90') + ezStake + ')\x20' + ezSymbol + '\x20' + ezContract + '\x20' + ezLdp + '\x20' + '(' + ezDurString + _0x53c518('0x94')),
        ws[_0x53c518('0x65')](JSON[_0x53c518('0x8b')]({
            'subscribe': 0x1,
            'buy': 0x1,
            'parameters': {
                'amount': parseFloat(ezStake)['toFixed'](0x2),
                'app_markup_percentage': '5',
                'barrier': parseInt(ezLdp),
                'basis': _0x53c518('0x63'),
                'contract_type': ezContract,
                'currency': _0x53c518('0x2d'),
                'duration': parseInt(ezDur),
                'duration_unit': 't',
                'symbol': ezSymbol
            },
            'price': parseFloat(ezStake)[_0x53c518('0x86')](0x2)
        }));
}
function xeven(_0x102e74) {
    var _0x2edce3 = _0x45e94e;
    buyDone = !![],
        _0x102e74[_0x2edce3('0xd0')]('^')[0x1] == 'even' && (ezContract = _0x2edce3('0xc')),
        ezSymbol = _0x102e74[_0x2edce3('0xd0')]('^')[0x0],
        ezStake = document[_0x2edce3('0xcf')](_0x2edce3('0x4e'))[_0x2edce3('0xd3')],
        ezDurString = document[_0x2edce3('0xcf')]('selDur')[_0x2edce3('0xd3')],
        ezDurString == _0x2edce3('0x5a') ? ezDur = Math['floor'](Math[_0x2edce3('0x6f')]() * 0xa) + 0x1 : ezDur = parseInt(ezDurString),
        writeLog('#FFFFFF', _0x2edce3('0x90') + ezStake + ')\x20' + ezSymbol + '\x20' + ezContract + '\x20' + '(' + ezDurString + _0x2edce3('0x94')),
        ws['send'](JSON[_0x2edce3('0x8b')]({
            'subscribe': 0x1,
            'buy': 0x1,
            'parameters': {
                'amount': parseFloat(ezStake)[_0x2edce3('0x86')](0x2),
                'app_markup_percentage': '5',
                'basis': 'stake',
                'contract_type': ezContract,
                'currency': 'USD',
                'duration': parseInt(ezDur),
                'duration_unit': 't',
                'symbol': ezSymbol
            },
            'price': parseFloat(ezStake)[_0x2edce3('0x86')](0x2)
        }));
}
function xodd(_0x38c61e) {
    var _0x1da1af = _0x45e94e;
    buyDone = !![],
        _0x38c61e[_0x1da1af('0xd0')]('^')[0x1] == _0x1da1af('0xaf') && (ezContract = _0x1da1af('0x38')),
        ezSymbol = _0x38c61e['split']('^')[0x0],
        ezStake = document[_0x1da1af('0xcf')](_0x1da1af('0x4e'))[_0x1da1af('0xd3')],
        ezDurString = document[_0x1da1af('0xcf')](_0x1da1af('0xa2'))[_0x1da1af('0xd3')],
        ezDurString == _0x1da1af('0x5a') ? ezDur = Math[_0x1da1af('0x50')](Math[_0x1da1af('0x6f')]() * 0xa) + 0x1 : ezDur = parseInt(ezDurString),
        writeLog('#FFFFFF', _0x1da1af('0x90') + ezStake + ')\x20' + ezSymbol + '\x20' + ezContract + '\x20' + '(' + ezDurString + _0x1da1af('0x94')),
        ws[_0x1da1af('0x65')](JSON[_0x1da1af('0x8b')]({
            'subscribe': 0x1,
            'buy': 0x1,
            'parameters': {
                'amount': parseFloat(ezStake)['toFixed'](0x2),
                'app_markup_percentage': '5',
                'basis': _0x1da1af('0x63'),
                'contract_type': ezContract,
                'currency': _0x1da1af('0x2d'),
                'duration': parseInt(ezDur),
                'duration_unit': 't',
                'symbol': ezSymbol
            },
            'price': parseFloat(ezStake)[_0x1da1af('0x86')](0x2)
        }));
}
function refresh() {
    var _0x1c6d89 = _0x45e94e;
    writeLog(_0x1c6d89('0x56'), 'Refresh'),
        ws[_0x1c6d89('0x65')](JSON[_0x1c6d89('0x8b')]({
            'forget_all': _0x1c6d89('0xb8')
        }));
}
function authorize() {
    var _0x5a3dd9 = _0x45e94e;
    writeLog(_0x5a3dd9('0x56'), 'Kinerja\x20Even\x20Odd\x20Bot\x20Connecting...'),
        ws['send'](JSON['stringify']({
            'authorize': document.getElementById("txtToken").value
        })),
        authorize ? ($(_0x5a3dd9('0x9d'))[_0x5a3dd9('0x68')](),
            $(_0x5a3dd9('0x71'))[_0x5a3dd9('0x3a')]()) : ($(_0x5a3dd9('0x71'))[_0x5a3dd9('0x68')](),
                $('#signin')[_0x5a3dd9('0x3a')]());
}
function logout() {
    var _0x35b84b = _0x45e94e;
    writeLog(_0x35b84b('0x56'), _0x35b84b('0xd1')),
        deleteCookie('token'),
        location[_0x35b84b('0x7a')]();
}
writeLog(_0x45e94e('0x56'), _0x45e94e('0xae'));
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function deleteCookie(_0x5a5524) {
    setCookie('api_token', '', -0x1);
}
var market = ''
    , market_arr = ['', '']
    , win_arr = [!![], !![]];
$(function () {
    var _0x280992 = _0x45e94e;
    localStorage[_0x280992('0x12')](_0x280992('0x26')) && $(_0x280992('0xad'))['eq'](localStorage['getItem'](_0x280992('0x26')))[_0x280992('0x98')](_0x280992('0xb1'), !![]),
        $(_0x280992('0x5f'))['on'](_0x280992('0x9c'), function () {
            var _0x5ab02b = _0x280992;
            localStorage[_0x5ab02b('0x25')](_0x5ab02b('0x26'), $('option:selected', this)['index']()),
                location[_0x5ab02b('0x7a')]();
        });
});
function getLowVal(_0x2e67e8, _0x3d8f68, _0x42c701) {
    var _0x222712 = _0x45e94e
        , _0x32d296 = document[_0x222712('0xcf')](_0x222712('0xa3'))['value']
        , _0x1399fd = document['getElementById'](_0x222712('0x27'))[_0x222712('0xd3')]
        , _0x2c3fa9 = document['getElementById'](_0x222712('0x7e'))[_0x222712('0xd3')]
        , _0xdd180b = document[_0x222712('0xcf')](_0x222712('0x1d'))[_0x222712('0xd3')]
        , _0x5227c9 = document[_0x222712('0xcf')]('R_10^4')[_0x222712('0xd3')]
        , _0x531475 = document[_0x222712('0xcf')](_0x222712('0xa6'))[_0x222712('0xd3')]
        , _0x33fa3b = document[_0x222712('0xcf')](_0x222712('0xce'))['value']
        , _0xfc512 = document[_0x222712('0xcf')](_0x222712('0x1b'))[_0x222712('0xd3')]
        , _0x165563 = document[_0x222712('0xcf')](_0x222712('0x21'))[_0x222712('0xd3')]
        , _0x5f5a9b = document[_0x222712('0xcf')](_0x222712('0x6d'))[_0x222712('0xd3')]
        , _0x44e559 = document[_0x222712('0xcf')]('R_25^0')[_0x222712('0xd3')]
        , _0x951bc = document[_0x222712('0xcf')](_0x222712('0xc3'))[_0x222712('0xd3')]
        , _0xf5d01c = document[_0x222712('0xcf')](_0x222712('0x22'))[_0x222712('0xd3')]
        , _0x2c9a35 = document['getElementById'](_0x222712('0x81'))['value']
        , _0x2dc54e = document[_0x222712('0xcf')]('R_25^4')['value']
        , _0x48051a = document[_0x222712('0xcf')]('R_25^5')[_0x222712('0xd3')]
        , _0x9c308a = document['getElementById'](_0x222712('0xa4'))[_0x222712('0xd3')]
        , _0x57899e = document[_0x222712('0xcf')]('R_25^7')[_0x222712('0xd3')]
        , _0x404087 = document[_0x222712('0xcf')](_0x222712('0x1'))[_0x222712('0xd3')]
        , _0x27c908 = document[_0x222712('0xcf')](_0x222712('0x10'))[_0x222712('0xd3')]
        , _0x2495ea = document['getElementById'](_0x222712('0x72'))[_0x222712('0xd3')]
        , _0x10bd2e = document[_0x222712('0xcf')](_0x222712('0x4d'))[_0x222712('0xd3')]
        , _0x4ad491 = document[_0x222712('0xcf')]('R_50^2')[_0x222712('0xd3')]
        , _0x409ca3 = document[_0x222712('0xcf')](_0x222712('0x51'))[_0x222712('0xd3')]
        , _0x520196 = document[_0x222712('0xcf')](_0x222712('0x41'))[_0x222712('0xd3')]
        , _0x1d1a44 = document[_0x222712('0xcf')](_0x222712('0xdb'))[_0x222712('0xd3')]
        , _0x9ed5c0 = document[_0x222712('0xcf')]('R_50^6')[_0x222712('0xd3')]
        , _0x14ff3e = document[_0x222712('0xcf')](_0x222712('0x45'))[_0x222712('0xd3')]
        , _0x2c504c = document[_0x222712('0xcf')](_0x222712('0x48'))[_0x222712('0xd3')]
        , _0x4ff0c9 = document[_0x222712('0xcf')](_0x222712('0xdc'))['value']
        , _0x5272b1 = document[_0x222712('0xcf')](_0x222712('0x20'))[_0x222712('0xd3')]
        , _0x24bd2b = document[_0x222712('0xcf')]('R_75^1')[_0x222712('0xd3')]
        , _0x4718c1 = document[_0x222712('0xcf')](_0x222712('0xf'))['value']
        , _0x37eca8 = document[_0x222712('0xcf')]('R_75^3')[_0x222712('0xd3')]
        , _0x192048 = document[_0x222712('0xcf')](_0x222712('0x64'))[_0x222712('0xd3')]
        , _0x4c3165 = document[_0x222712('0xcf')](_0x222712('0x3d'))[_0x222712('0xd3')]
        , _0x38cdc1 = document[_0x222712('0xcf')](_0x222712('0x4'))[_0x222712('0xd3')]
        , _0x1e96cc = document['getElementById'](_0x222712('0x9'))[_0x222712('0xd3')]
        , _0x21ad28 = document[_0x222712('0xcf')](_0x222712('0x3e'))[_0x222712('0xd3')]
        , _0x1cc583 = document['getElementById'](_0x222712('0x4a'))['value']
        , _0x493a3c = document['getElementById'](_0x222712('0xc7'))[_0x222712('0xd3')]
        , _0x4610d5 = document[_0x222712('0xcf')](_0x222712('0x1c'))[_0x222712('0xd3')]
        , _0x32b084 = document[_0x222712('0xcf')](_0x222712('0x6c'))['value']
        , _0x5c367e = document[_0x222712('0xcf')](_0x222712('0x78'))[_0x222712('0xd3')]
        , _0x238b6e = document[_0x222712('0xcf')](_0x222712('0x8c'))[_0x222712('0xd3')]
        , _0x44e843 = document[_0x222712('0xcf')](_0x222712('0xc2'))[_0x222712('0xd3')]
        , _0x6717f4 = document[_0x222712('0xcf')]('R_100^6')[_0x222712('0xd3')]
        , _0x215d62 = document[_0x222712('0xcf')](_0x222712('0x3'))[_0x222712('0xd3')]
        , _0x2f2d89 = document[_0x222712('0xcf')]('R_100^8')[_0x222712('0xd3')]
        , _0x1737de = document[_0x222712('0xcf')](_0x222712('0xa0'))[_0x222712('0xd3')]
        , _0x1ddab6 = document[_0x222712('0xcf')](_0x222712('0xe0'))['value']
        , _0x5283a8 = document[_0x222712('0xcf')](_0x222712('0xde'))[_0x222712('0xd3')]
        , _0x5c8dcd = document[_0x222712('0xcf')](_0x222712('0x55'))['value']
        , _0x5b0ebc = document[_0x222712('0xcf')](_0x222712('0xc8'))[_0x222712('0xd3')]
        , _0x55ea0d = document[_0x222712('0xcf')](_0x222712('0x82'))['value']
        , _0x4f8cb7 = document[_0x222712('0xcf')]('RDBEAR^5')['value']
        , _0x36d8f3 = document[_0x222712('0xcf')](_0x222712('0x58'))[_0x222712('0xd3')]
        , _0x32c9cc = document[_0x222712('0xcf')]('RDBEAR^7')[_0x222712('0xd3')]
        , _0x4f0455 = document['getElementById'](_0x222712('0x92'))[_0x222712('0xd3')]
        , _0x2ffb61 = document[_0x222712('0xcf')]('RDBEAR^9')[_0x222712('0xd3')]
        , _0x170c78 = document[_0x222712('0xcf')](_0x222712('0x3b'))[_0x222712('0xd3')]
        , _0x4f7cc2 = document[_0x222712('0xcf')](_0x222712('0xa5'))['value']
        , _0x669e60 = document[_0x222712('0xcf')](_0x222712('0x9f'))['value']
        , _0x429e34 = document[_0x222712('0xcf')](_0x222712('0x66'))[_0x222712('0xd3')]
        , _0x329dd2 = document[_0x222712('0xcf')]('RDBULL^4')[_0x222712('0xd3')]
        , _0x128dc8 = document[_0x222712('0xcf')](_0x222712('0xc9'))[_0x222712('0xd3')]
        , _0x2b99da = document[_0x222712('0xcf')]('RDBULL^6')[_0x222712('0xd3')]
        , _0x43811c = document[_0x222712('0xcf')](_0x222712('0xd5'))['value']
        , _0x946c16 = document[_0x222712('0xcf')]('RDBULL^8')[_0x222712('0xd3')]
        , _0x500449 = document[_0x222712('0xcf')](_0x222712('0xb0'))[_0x222712('0xd3')]
        , _0xbf0c2 = document[_0x222712('0xcf')](_0x222712('0xd8'))[_0x222712('0xd3')]
        , _0x415a09 = document['getElementById'](_0x222712('0xba'))[_0x222712('0xd3')]
        , _0x29962e = document[_0x222712('0xcf')](_0x222712('0xd2'))['value']
        , _0x4d4001 = document[_0x222712('0xcf')](_0x222712('0x74'))[_0x222712('0xd3')]
        , _0x432acd = document[_0x222712('0xcf')](_0x222712('0xc6'))[_0x222712('0xd3')]
        , _0x21acad = document[_0x222712('0xcf')](_0x222712('0x57'))[_0x222712('0xd3')]
        , _0x3f315f = document[_0x222712('0xcf')](_0x222712('0xd9'))['value']
        , _0x1a7cb6 = document[_0x222712('0xcf')](_0x222712('0x75'))[_0x222712('0xd3')]
        , _0x21a52f = document[_0x222712('0xcf')](_0x222712('0xb2'))['value']
        , _0x4e16d5 = document['getElementById'](_0x222712('0xa1'))[_0x222712('0xd3')]
        , _0x1b0b0c = document[_0x222712('0xcf')](_0x222712('0xdf'))[_0x222712('0xd3')]
        , _0x11c334 = document['getElementById'](_0x222712('0x6'))[_0x222712('0xd3')]
        , _0x270dd8 = document[_0x222712('0xcf')]('RDBULL^even')[_0x222712('0xd3')]
        , _0x4544ab = document[_0x222712('0xcf')](_0x222712('0xc4'))['value']
        , _0x442a7d = [parseInt(_0x170c78), parseInt(_0x4f7cc2), parseInt(_0x669e60), parseInt(_0x429e34), parseInt(_0x329dd2), parseInt(_0x128dc8), parseInt(_0x2b99da), parseInt(_0x43811c), parseInt(_0x946c16), parseInt(_0x500449)];
    RDBEAR_num = [parseInt(_0x1ddab6), parseInt(_0x5283a8), parseInt(_0x5c8dcd), parseInt(_0x5b0ebc), parseInt(_0x55ea0d), parseInt(_0x4f8cb7), parseInt(_0x36d8f3), parseInt(_0x32c9cc), parseInt(_0x4f0455), parseInt(_0x2ffb61)],
        V100_num = [parseInt(_0x493a3c), parseInt(_0x4610d5), parseInt(_0x32b084), parseInt(_0x5c367e), parseInt(_0x238b6e), parseInt(_0x44e843), parseInt(_0x6717f4), parseInt(_0x215d62), parseInt(_0x2f2d89), parseInt(_0x1737de)],
        V75_num = [parseInt(_0x5272b1), parseInt(_0x24bd2b), parseInt(_0x4718c1), parseInt(_0x37eca8), parseInt(_0x192048), parseInt(_0x4c3165), parseInt(_0x38cdc1), parseInt(_0x1e96cc), parseInt(_0x21ad28), parseInt(_0x1cc583)],
        V50_num = [parseInt(_0x2495ea), parseInt(_0x10bd2e), parseInt(_0x4ad491), parseInt(_0x409ca3), parseInt(_0x520196), parseInt(_0x1d1a44), parseInt(_0x9ed5c0), parseInt(_0x14ff3e), parseInt(_0x2c504c), parseInt(_0x4ff0c9)],
        V25_num = [parseInt(_0x44e559), parseInt(_0x951bc), parseInt(_0xf5d01c), parseInt(_0x2c9a35), parseInt(_0x2dc54e), parseInt(_0x48051a), parseInt(_0x9c308a), parseInt(_0x57899e), parseInt(_0x404087), parseInt(_0x27c908)],
        V10_num = [parseInt(_0x32d296), parseInt(_0x1399fd), parseInt(_0x2c3fa9), parseInt(_0xdd180b), parseInt(_0x5227c9), parseInt(_0x531475), parseInt(_0x33fa3b), parseInt(_0xfc512), parseInt(_0x165563), parseInt(_0x5f5a9b)],
        (min_10 = Math['min'][_0x222712('0x4c')](Math, V10_num),
            min_25 = Math[_0x222712('0x4f')]['apply'](Math, V25_num),
            min_50 = Math[_0x222712('0x4f')][_0x222712('0x4c')](Math, V50_num),
            min_75 = Math[_0x222712('0x4f')][_0x222712('0x4c')](Math, V75_num),
            min_100 = Math[_0x222712('0x4f')][_0x222712('0x4c')](Math, V100_num),
            min_RDBEAR = Math[_0x222712('0x4f')][_0x222712('0x4c')](Math, RDBEAR_num),
            min_RDBULL = Math[_0x222712('0x4f')]['apply'](Math, _0x442a7d),
            arrmini = [min_10, min_25, min_50, min_75, min_100, min_RDBEAR, min_RDBULL],
            even_num = [_0xbf0c2, _0x29962e, _0x432acd, _0x3f315f, _0x21a52f, _0x1b0b0c, _0x270dd8],
            odd_num = [_0x415a09, _0x4d4001, _0x21acad, _0x1a7cb6, _0x4e16d5, _0x11c334, _0x4544ab],
            mini = Math[_0x222712('0x4f')][_0x222712('0x4c')](Math, arrmini),
            odd_max = Math[_0x222712('0x37')][_0x222712('0x4c')](Math, odd_num),
            even_max = Math[_0x222712('0x37')][_0x222712('0x4c')](Math, even_num));
    if (auto_trade) {
        const _0x25abf6 = document['getElementById'](_0x3d8f68 + _0x222712('0xbe'))['value']
            , _0x394576 = document[_0x222712('0xcf')](_0x3d8f68 + '^odd')[_0x222712('0xd3')];
        if (tradePattern == 0x0) {
            if (even_max > odd_max)
                _0x25abf6 >= even_max && !buyDone && !market_arr[_0x222712('0x61')](_0x3d8f68) && xeven(_0x3d8f68 + _0x222712('0xbe'));
            else
                odd_max > even_max && (_0x394576 >= odd_max && !buyDone && !market_arr[_0x222712('0x61')](_0x3d8f68) && xodd(_0x3d8f68 + _0x222712('0x69')));
        } else {
            if (tradePattern == 0x1)
                _0x25abf6 >= even_max && !buyDone && !market_arr[_0x222712('0x61')](_0x3d8f68) && xeven(_0x3d8f68 + _0x222712('0xbe'));
            else
                tradePattern == 0x2 && (_0x394576 >= odd_max && !buyDone && !market_arr[_0x222712('0x61')](_0x3d8f68) && xodd(_0x3d8f68 + _0x222712('0x69')));
        }
    }
}
function manageStake() {
    var _0x1df88 = _0x45e94e;
    auto_trade && ((tradePattern == 0x0 || 0x1 || 0x2) && (!win_arr[0x1] ? document[_0x1df88('0xcf')](_0x1df88('0x4e'))[_0x1df88('0xd3')] = (document[_0x1df88('0xcf')]('txtStake')['value'] * martin)[_0x1df88('0x86')](0x2) : document[_0x1df88('0xcf')](_0x1df88('0x4e'))['value'] = localStorage[_0x1df88('0x12')]('INIT_STAKE')));
}
var martin = 2.30
    , t_profot = 0x3
    , s_loss = 0x32
    , tradePattern = 0x0;
$(_0x45e94e('0x9b'))['on'](_0x45e94e('0x9c'), function () {
    var _0x13da9b = _0x45e94e;
    tradePattern = $(this)['val']();
    if (tradePattern == 0x0)
        $(_0x13da9b('0xcd'))['show'](),
            $(_0x13da9b('0x99'))['show']();
    else
        tradePattern == 0x1 ? ($('.ev')[_0x13da9b('0x3a')](),
            $(_0x13da9b('0x99'))[_0x13da9b('0x68')]()) : ($(_0x13da9b('0xcd'))[_0x13da9b('0x68')](),
                $(_0x13da9b('0x99'))[_0x13da9b('0x3a')]());
});
function StartAutoTrade() {
    var _0x4f3423 = _0x45e94e;
    !auto_trade ? $(_0x4f3423('0xa8'))['modal'](_0x4f3423('0x3a')) : (document[_0x4f3423('0xcf')](_0x4f3423('0x36'))[_0x4f3423('0xd3')] = _0x4f3423('0x7'),
        auto_trade = ![]);
}
function AutoTrade() {
    var _0x58f206 = _0x45e94e;
    !auto_trade ? (t_profot = document['getElementById'](_0x58f206('0x8a'))[_0x58f206('0xd3')],
        s_loss = document[_0x58f206('0xcf')](_0x58f206('0xda'))['value'],
        martin = document[_0x58f206('0xcf')]('txtMartinmdl')[_0x58f206('0xd3')],
        document[_0x58f206('0xcf')](_0x58f206('0x4e'))[_0x58f206('0xd3')] = document[_0x58f206('0xcf')](_0x58f206('0x5d'))[_0x58f206('0xd3')],
        document[_0x58f206('0xcf')](_0x58f206('0x36'))['value'] = _0x58f206('0x54'),
        auto_trade = !![],
        localStorage[_0x58f206('0x25')](_0x58f206('0x84'), document['getElementById'](_0x58f206('0x4e'))[_0x58f206('0xd3')])) : (document[_0x58f206('0xcf')](_0x58f206('0x36'))[_0x58f206('0xd3')] = _0x58f206('0x7'),
            auto_trade = ![]);
}
function SetProft() {
    var _0x5a5db6 = _0x45e94e
        , _0x41534a = total_profit[_0x5a5db6('0x86')](0x2);
    document[_0x5a5db6('0xcf')]('lblProfit')[_0x5a5db6('0x73')] = '$\x20' + _0x41534a;
    if (total_profit < 0x0)
        document[_0x5a5db6('0xcf')](_0x5a5db6('0x7c'))[_0x5a5db6('0x1f')]['color'] = _0x5a5db6('0x6e');
    else
        document[_0x5a5db6('0xcf')]('lblProfit')[_0x5a5db6('0x1f')]['color'] = _0x5a5db6('0xac');
    if (auto_trade) {
        if (t_profot <= total_profit)
            document['getElementById'](_0x5a5db6('0x36'))[_0x5a5db6('0xd3')] = _0x5a5db6('0x7'),
                auto_trade = ![],
                alert(_0x5a5db6('0xa'));
        else
            total_profit < 0x0 && s_loss <= Math[_0x5a5db6('0x2')](total_profit) && (document[_0x5a5db6('0xcf')]('btnAutoTrade')['value'] = _0x5a5db6('0x54'),
                auto_trade = ![],
                alert('Sorry!!!\x20StopLoss'));
    }
}
