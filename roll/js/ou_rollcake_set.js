document.getElementById('msSetting').innerHTML = '<table width="100%" border="0"> <tr> <td> <p align="left"><strong>OVER UNDER - ROLL CAKE</strong></p> <table width="100%" border="0"> <tr> <td></td> <td align="center">Contract:</td> <td align="center">Volatility:</td> <td align="center">LDP:</td> <td align="center">Duration:</td> </tr> <tr> <td>Cake #1:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_c1" size="1" id="ou_rollcake_c1"><option value="DIGITOVER" selected="selected">Digit Over</option><option value="DIGITUNDER">Digit Under</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_v1" size="1" id="ou_rollcake_v1"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_l1" size="1" id="ou_rollcake_l1"><option value="RANDOM">Random</option><option value="0">0</option><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_d1" size="1" id="ou_rollcake_d1"><option value="RANDOM" selected="selected">Random</option><option value="1">1 tick</option><option value="2">2 ticks</option><option value="3">3 ticks</option><option value="4">4 ticks</option><option value="5">5 ticks</option><option value="6">6 ticks</option><option value="7">7 ticks</option><option value="8">8 ticks</option><option value="9">9 ticks</option><option value="10">10 ticks</option></select></div></td> </tr> <tr> <td>Cake #2:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_c2" size="1" id="ou_rollcake_c2"><option value="DIGITOVER">Digit Over</option><option value="DIGITUNDER" selected="selected">Digit Under</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_v2" size="1" id="ou_rollcake_v2"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_l2" size="1" id="ou_rollcake_l2"><option value="RANDOM">Random</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8" selected="selected">8</option><option value="9">9</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_d2" size="1" id="ou_rollcake_d2"><option value="RANDOM" selected="selected">Random</option><option value="1">1 tick</option><option value="2">2 ticks</option><option value="3">3 ticks</option><option value="4">4 ticks</option><option value="5">5 ticks</option><option value="6">6 ticks</option><option value="7">7 ticks</option><option value="8">8 ticks</option><option value="9">9 ticks</option><option value="10">10 ticks</option></select></div></td> </tr> <tr> <td>Cake #3:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_c3" size="1" id="ou_rollcake_c3"><option value="DIGITOVER" selected="selected">Digit Over</option><option value="DIGITUNDER">Digit Under</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_v3" size="1" id="ou_rollcake_v3"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_l3" size="1" id="ou_rollcake_l3"><option value="RANDOM">Random</option><option value="0">0</option><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_d3" size="1" id="ou_rollcake_d3"><option value="RANDOM" selected="selected">Random</option><option value="1">1 tick</option><option value="2">2 ticks</option><option value="3">3 ticks</option><option value="4">4 ticks</option><option value="5">5 ticks</option><option value="6">6 ticks</option><option value="7">7 ticks</option><option value="8">8 ticks</option><option value="9">9 ticks</option><option value="10">10 ticks</option></select></div></td> </tr> <tr><td height="8px"></td></tr> <tr><td colspan="5" align="center">Move to next Cake : <table width="40%"><tr><td><div class="dropdown"><select class="dropdown-select" name="ou_rollcake_next" size="1" id="ou_rollcake_next"><option value="ALWAYS" selected="selected">Always</option><option value="IF WIN">If Win</option><option value="IF LOSS">If Loss</option></select></div></td></tr></table></td> </tr> <tr><td height="8px"></td></tr> <tr><td colspan="5" align="right"><a style="color:#fff" href="#" onclick="$.modal.close(); $(\'#modalStra\').modal();">Change Strategy</a> <a class="buttonSave" href="#close" rel="modal:close">Save</a> </td></tr> </table> </td> </tr> </table>';