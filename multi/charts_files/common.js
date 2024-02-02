function getParameterByName(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
        c = b.exec(location.search);
    return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
}


//search an object name (name : key) and return 1st object.key of found object(s)

function findValueByPrefix(object, prefix) {
    for (var property in object) {
      if (object.hasOwnProperty(property) && 
         property.toString().startsWith(prefix)) {
         return object[property];
      }
    }
  }


  //search an object name (name : key) and return ALL object.keys of found object(s)

function makeObjectByPrefix(object, prefix) {
    let result = [];
    for (var property in object) {
      if (object.hasOwnProperty(property) && 
         property.toString().startsWith(prefix)) {
         result.push(object[property]);
         console.log(result)
      }
    } 
  }