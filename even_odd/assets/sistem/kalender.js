var _0x992e = ["\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x67\x65\x74\x44\x61\x74\x65", "\x2D", "\x20\x32\x33\x3A\x35\x39\x3A\x35\x39", "\x20\x30\x30\x3A\x30\x30\x3A\x30\x30", "\x4A\x61\x6E\x75\x61\x72\x69", "\x46\x65\x62\x72\x75\x61\x72\x69", "\x4D\x61\x72\x65\x74", "\x41\x70\x72\x69\x6C", "\x4D\x65\x69", "\x4A\x75\x6E\x69", "\x4A\x75\x6C\x69", "\x41\x67\x75\x73\x74\x75\x73", "\x53\x65\x70\x74\x65\x6D\x62\x65\x72", "\x4F\x6B\x74\x6F\x62\x65\x72", "\x4E\x6F\x76\x65\x6D\x62\x65\x72", "\x44\x65\x73\x65\x6D\x62\x65\x72", "\x74\x65\x78\x74", "\x23\x74\x68\x6E", "\x50\x65\x72\x6F\x6C\x65\x68\x61\x6E\x20\x52\x65\x62\x61\x74\x65\x20\x42\x75\x6C\x61\x6E\x20", "\x20", "\x23\x62\x6C\x6E", "\x76\x61\x6C", "\x23\x6E\x6F\x77", "\x23\x6E\x6F\x77\x78", "\x23\x73\x74\x61\x72\x74", "\x23\x65\x6E\x64"];
var date = new Date(),
    bulan = date[_0x992e[0]](),
    tahun = date[_0x992e[1]](),
    nowDay = new Date(date[_0x992e[1]](), date[_0x992e[0]](), date[_0x992e[2]]()),
    firstDay = new Date(date[_0x992e[1]](), date[_0x992e[0]](), 1),
    lastDay = new Date(date[_0x992e[1]](), date[_0x992e[0]]() + 1, 0),
    thisday = (nowDay[_0x992e[1]]()) + _0x992e[3] + (nowDay[_0x992e[0]]() + 1) + _0x992e[3] + nowDay[_0x992e[2]](),
    lastDayWithSlashes = (lastDay[_0x992e[1]]()) + _0x992e[3] + (lastDay[_0x992e[0]]() + 1) + _0x992e[3] + lastDay[_0x992e[2]]() + _0x992e[4],
    fisrtDayWithSlashes = (firstDay[_0x992e[1]]()) + _0x992e[3] + (firstDay[_0x992e[0]]() + 1) + _0x992e[3] + firstDay[_0x992e[2]]() + _0x992e[5],
    arrbulan = [_0x992e[6], _0x992e[7], _0x992e[8], _0x992e[9], _0x992e[10], _0x992e[11], _0x992e[12], _0x992e[13], _0x992e[14], _0x992e[15], _0x992e[16], _0x992e[17]];
$(_0x992e[19])[_0x992e[18]](tahun);
$(_0x992e[22])[_0x992e[18]](_0x992e[20] + arrbulan[bulan] + _0x992e[21] + tahun);
$(_0x992e[24])[_0x992e[23]](thisday + _0x992e[5]);
$(_0x992e[25])[_0x992e[23]](thisday + _0x992e[4]);
$(_0x992e[26])[_0x992e[23]](fisrtDayWithSlashes);
$(_0x992e[27])[_0x992e[23]](lastDayWithSlashes)