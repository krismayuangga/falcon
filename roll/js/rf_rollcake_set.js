document.getElementById('msSetting').innerHTML='<table width="100%" border="0"> <tr> <td> <p align="left"><strong>RISE FALL - ROLL CAKE</strong></p> <table width="100%" border="0"> <tr> <td></td> <td align="center">Contract:</td> <td align="center">Volatility:</td> <td colspan="2" align="center">Duration:</td> </tr> <tr> <td>Cake #1:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_c1" size="1" id="rf_rollcake_c1"><option value="CALL" selected="selected">Rise</option><option value="PUT">Fall</option><option value="RANDOM">Random</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_v1" size="1" id="rf_rollcake_v1"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="right"><input style="width:50px" name="rf_rollcake_d1" type="number" min="1" class="inputEZ" id="rf_rollcake_d1" value="1" /></td> <td align="left"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_du1" size="1" id="rf_rollcake_du1"><option value="t" selected="selected">Ticks</option><option value="s">Seconds</option><option value="m">Minutes</option><option value="h">Hours</option><option value="d">Days</option></select></div></td> </tr> <tr> <td>Cake #2:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_c2" size="1" id="rf_rollcake_c2"><option value="CALL" selected="selected">Rise</option><option value="PUT">Fall</option><option value="RANDOM">Random</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_v2" size="1" id="rf_rollcake_v2"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="right"><input style="width:50px" name="rf_rollcake_d2" type="number" min="1" class="inputEZ" id="rf_rollcake_d2" value="1" /></td> <td align="left"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_du2" size="1" id="rf_rollcake_du2"><option value="t" selected="selected">Ticks</option><option value="s">Seconds</option><option value="m">Minutes</option><option value="h">Hours</option><option value="d">Days</option></select></div></td> </tr> <tr> <td>Cake #3:</td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_c3" size="1" id="rf_rollcake_c3"><option value="CALL" selected="selected">Rise</option><option value="PUT">Fall</option><option value="RANDOM">Random</option></select></div></td> <td align="center"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_v3" size="1" id="rf_rollcake_v3"><option value="RANDOM" selected="selected">Random</option><option value="R_10">Vol 10</option><option value="R_25">Vol 25</option><option value="R_50">Vol 50</option><option value="R_75">Vol 75</option><option value="R_100">Vol 100</option><option value="RDBEAR">Bear Market</option><option value="RDBULL">Bull Market</option></select></div></td> <td align="right"><input style="width:50px" name="rf_rollcake_d3" type="number" min="1" class="inputEZ" id="rf_rollcake_d3" value="1" /></td> <td align="left"><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_du3" size="1" id="rf_rollcake_du3"><option value="t" selected="selected">Ticks</option><option value="s">Seconds</option><option value="m">Minutes</option><option value="h">Hours</option><option value="d">Days</option></select></div></td> </tr> <tr><td height="8px"></td></tr> <tr><td colspan="5" align="center">Move to next Cake : <table width="40%"><tr><td><div class="dropdown"><select class="dropdown-select" name="rf_rollcake_next" size="1" id="rf_rollcake_next"><option value="ALWAYS" selected="selected">Always</option><option value="IF WIN">If Win</option><option value="IF LOSS">If Loss</option></select></div></td></tr></table></td> </tr> <tr><td height="8px"></td></tr> <tr><td colspan="5" align="right"><a style="color:#fff" href="#" onclick="$.modal.close(); $(\'#modalStra\').modal();">Change Strategy</a> <a class="buttonSave" href="#close" rel="modal:close">Save</a> </td></tr> </table> </td> </tr> </table>';