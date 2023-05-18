function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

// NRZ-L - non return to zero level
// 1 - codificat pe nivelul high pe durata perioadei
// 0 - codificat pe nivelul low pe durata perioadei
function getNRZLLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▔▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '|▁▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '|▔▔';
        result.push(symbol);
    }
    return result;
}

// NRZ-M - non return to zero mark
// 1 - produce o tranzitie la inceputul perioadei
// 0 - pastreaza nivelul
function getNRZLLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋'; check = 0;
        if (parseInt(bits[i].value) == 1 && check == 0) {
          symbol = '∣▔▔';
          check = 1; // the signal is on HIGH
        }
        if (parseInt(bits[i].value) == 1 && check == 1) {
          symbol = '▔▔∣';
          check = 0; // the signal is on LOW
        }
        if (parseInt(bits[i].value) == 0 &&  check == 1) symbol = '▔▔';
        if (parseInt(bits[i].value) == 0 && check == 0) symbol = '__';
        result.push(symbol);
    }
    return result;
}

// NRZ-S - non return to zero space
// 0 - produce o tranzitie la inceputul perioadei
// 1 - pastreaza nivelul
function getNRZLLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋'; check = 0;
        if (parseInt(bits[i].value) == 0 && check == 0) {
          symbol = '∣▔▔';
          check = 1; // the signal is on HIGH
        }
        if (parseInt(bits[i].value) == 0 && check == 1) {
          symbol = '▔▔∣';
          check = 0; // the signal is on LOW
        }
        if (parseInt(bits[i].value) == 1 &&  check == 1) symbol = '▔▔';
        if (parseInt(bits[i].value) == 1 && check == 0) symbol = '__';
        result.push(symbol);
    }
    return result;
}

// RZ - return to zero
function getRZLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

// biphase level
// 1 - reprezentat ca o secventa de 10
// 0 - reprezentat ca o secventa de 01
function getBiphaseLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

// biphase mark
// 1 - tranzitie la inceput si T/2
// 0 - tranzitie la inceput
function getBiphaseMarkEncoding(bits) {
    var result = []; check = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && check == 0) symbol = '|▔|_';
        if (parseInt(bits[i].value) == 1 && check == 1) symbol = '|▁∣▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 0) {
          symbol = '∣▔▔';
          check = 1;
        }
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 1) {
          symbol = '|__';
          check = 0;
        }
        result.push(symbol);
      }
      return result;
}

// biphase space
// 1 - introduce o tranzitie la inceputul perioadei
// 0 - introduce o tranzitie la inceputul perioadei si la T/2
function getBiphaseSpaceEncoding(bits) {
    var result = []; check = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && check == 0) {
          symbol = '▁∣▔';
          check = 1;
        }
        if (parseInt(bits[i].value) == 1 && check == 1) {
          symbol = '▔|_';
          check = 0;
        }
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 0) symbol = '∣▔∣▁';
        result.push(symbol);
      }
   return result;
}

// biphase level differential
// 0 - tranzitie la inceput si T/2
// 1 - tranzitie la T/2
function getBiphaseLevelDifferentialEncoding(bits) {
    var result = []; check = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && check == 0) {
          symbol = '▔|_';
          check = 0;
        }
        if (parseInt(bits[i].value) == 1 && check == 1) {
          symbol = '▁∣▔';
          check = 1;
        }
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && check == 0) symbol = '∣▔∣▁';
        result.push(symbol);
      }
   return result;
}

// delay modulation (Miller) - bifazic intarziat
// 1 - tranzitie T/2
// 0 - tranzitie la T daca urmeaza un bit de 0
function getDelayModulationEncoding(bits) {
  var result = []; check = 0;
  for (var i = 0; i < bits.length - 1; i++) {
      let symbol = '⚋⚋';
      if (parseInt(bits[i].value) == 1 && check == 0) {
        symbol = '▔|_';
        check = 0;
      }
      if (parseInt(bits[i].value) == 1 && check == 1) {
        symbol = '▁∣▔';
        check = 1;
      }
      if (parseInt(bits[i].value) == 0 && i > 0 && check == 0 && parseInt(bits[i + 1].value) == 0) {
        symbol = '∣▔▔';
        check = 1;
      }
      if (parseInt(bits[i].value) == 0 && i > 0 && check == 1 && parseInt(bits[i + 1].value) == 0) {
        symbol = '|__';
        check = 0;
      }
      result.push(symbol);
    }
    return result;
}
