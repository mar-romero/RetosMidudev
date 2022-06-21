// Reto 1:

function contarOvejas(ovejas) {
  ovejas = ovejas.map((oveja) => {
    if (oveja.color === "rojo") {
      oveja.name.toUpperCase();
      if (oveja.name.includes("A") || oveja.name.includes("a")) {
        if (oveja.name.includes("N") || oveja.name.includes("n")) {
          return oveja;
        }
      }
    }
  });
  return ovejas.filter((oveja) => oveja !== undefined);
}

// Reto 2:

function listGifts(input) {
  return input
    .split(" ")
    .map((x) => x.trim())
    .filter((x) => x != "" && !x.startsWith("_"))
    .reduce((prev, current) => {
      if (prev[current]) {
        prev[current]++;
      } else {
        prev[current] = 1;
      }
      return prev;
    }, {});
}

// Reto 3:

function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  let SumardeParentesis = 0;
  for (var i = 0; i < letter.length; i++) {
    if (letter[i] === "(") {
      SumardeParentesis++;
    }
    if (SumardeParentesis === 1) {
      if (
        letter[i] === "{" ||
        letter[i] === "}" ||
        letter[i] === "[" ||
        letter[i] === "]" ||
        letter[i] === ")"
      ) {
        return false;
      } else if (letter[i] === "(") {
        if (letter[i + 1] === ")" || letter[i + 1] === "(") {
          return false;
        } else {
        }
        for (var j = i + 1; j < letter.length; j++) {
          if (
            letter[j] === "{" ||
            letter[j] === "}" ||
            letter[j] === "[" ||
            letter[j] === "]"
          ) {
            return false;
          }
          if (letter[j] === ")" || letter[j] === "(") {
            SumardeParentesis++;
          }
        }
      }
      if (SumardeParentesis % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}

// Reto 4:

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let arbol = "";
  const arbolObj = {
    asterico: "*",
    barra: "_",
    tronco: "#",
  };
  const { asterico, barra, tronco } = arbolObj;

  for (let i = 1; i <= height; i++) {
    arbol = arbol.concat(
      barra.repeat(height - i),
      asterico.repeat(i + i - 1),
      barra.repeat(height - i),
      "\n"
    );
  }
  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1),
    "\n"
  );
  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1)
  );
  return arbol;
}

// Reto 5:

function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const fechaReferencia = new Date("Dec 25, 2021");
  const dias = fechaReferencia.getTime() - date.getTime();
  const diasFaltantes = Math.ceil(dias / (1000 * 60 * 60 * 24));
  return diasFaltantes;
}

// Reto 6:

function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  const resultado = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        resultado.push(numbers[i]);
        resultado.push(numbers[j]);
        return resultado;
      }
    }
  }
  return null;
}

//Reto 7:

function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  let contenido = convertirArray(store);
  console.log(contenido);
  let buscar = contenido.find((element) => element === product);
  if (buscar) {
    return true;
  } else {
    return false;
  }
}
function convertirArray(obj) {
  let resultado = [];
  for (const prop in obj) {
    const valor = obj[prop];
    if (typeof valor === "object") {
      resultado = resultado.concat(convertirArray(valor));
      console.log(resultado);
    } else {
      console.log(valor);
      resultado.push(valor);
    }
  }
  return resultado;
}

//Reto 8:

function maxProfit(prices) {
  let ganancia = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > ganancia) {
        ganancia = prices[j] - prices[i];
      }
    }
  }
  return ganancia === 0 ? -1 : ganancia;
}

//Reto 9:

function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  let resultado = {};
  for (let i = 0; i < collection.length; i++) {
    let elemento = collection[i];
    if (typeof it === "function") {
      let key = it(elemento);
      if (resultado[key]) {
        resultado[key].push(elemento);
      } else {
        resultado[key] = [elemento];
      }
    }
    if (typeof it === "string") {
      let key = elemento[it];
      if (resultado[key]) {
        resultado[key].push(elemento);
      } else {
        resultado[key] = [elemento];
      }
    }
  }
  return resultado;
}

//Reto 10:

function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  const coins = [1, 2, 5, 10, 20, 50];
  coins.reverse();
  const response = Array(6).fill(0);
  for (let i = 0; i < coins.length; i++) {
    while (change >= coins[i]) {
      response[i]++;
      change -= coins[i];
    }
  }
  response.reverse();
  return response;
}

//Reto 11:

function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  const TicketMovie = 12;
  const TicketFidelidad = 250;
  const Descount = 0.75;

  let totalTM = TicketMovie * times;
  let totalTF = 0;
  for (let i = 1; i <= times; i++) {
    totalTF += TicketMovie * Descount ** i;
  }
  totalTF += TicketFidelidad;
  if (totalTM > totalTF) {
    return true;
  } else {
    return false;
  }
}

//Reto 12:

function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!
  const max = Math.max(...obstacles); //9
  const unseen = Array.from({ length: max })
    .fill(0)
    .reduce((acc, _, index) => {
      if (!obstacles.includes(index + 1)) acc.push(index + 1);
      return acc;
    }, []);
  for (let i = 0; i < unseen.length; i++) {
    let candidates = [];
    for (let j = 0; j <= max; j += unseen[i]) {
      candidates.push(j);
    }
    if (candidates.every((item) => !obstacles.includes(item))) {
      return unseen[i];
    }
  }
}

//Reto 13:

function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  let result = [];

  if (gifts.length === 0) {
    result = [];
  } else {
    let wrap = gifts.map((gift) => `*${gift}*`);
    const len = gifts[0].length;
    let env = "*".repeat(len + 2);
    result = result = [env, ...wrap, env];
  }
  return result;
}

//Reto 14:

function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  ids.sort();
  let missing = [];
  for (let i = 0; i < ids.length + 1; i++) {
    if (!ids.includes(i)) {
      missing.push(i);
    }
  }
  return missing[0];
}

//Reto 15:

function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  const Max = Math.max(...heights);
  const ultimo = heights.length - 1;
  for (var i = 0; i < heights.length; i++) {
    if (
      heights[i] > Max ||
      heights[i] === heights[i + 1] ||
      heights[ultimo] === Max
    ) {
      return false;
    } else {
      if (heights[i] === Max) {
        for (var j = i + 2; j < heights.length; j++) {
          if (heights[j] < heights[j + 1]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

//Reto 16:

function decodeNumber(symbols) {
  // ¡No olvides compartir tu solución en redes!
  const values = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  let respuesta = 0;
  [...symbols].forEach((_, index) => {
    console.log(values[symbols[index]]);
    if (values[symbols[index]] < values[symbols[index + 1]]) {
      respuesta -= values[symbols[index]];
    } else {
      respuesta += values[symbols[index]];
    }
  });
  return respuesta;
}

//Reto 17:

function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
  let total = 0;
  const carrier = carriers.filter((item) => item[0] === carrierID);
  total += carrier[0][1];
  if (carrier[0][2].length > 0) {
    carrier[0][2].forEach((item) => {
      total += countPackages(carriers, item);
    });
  }
  return total;
}

//Reto 18:

function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
  const contador = [];
  const resultado = files.map((file) => {
    if (contador[file]) {
      contador[file]++;
      console.log(contador[file]);
      return `${file}(${contador[file] - 1})`;
    } else {
      console.log(file);
      contador[file] = 1;
      console.log(contador[file]);
      return file;
    }
  });
  return resultado;
}

//Reto 19:

function learn(time, courses) {
  // ¡No olvides compartir tu solución en redes!
  let resultado = null;
  let parcial = 0;
  let max = 0;
  for (var i = 0; i < courses.length; i++) {
    for (var j = i + 1; j < courses.length; j++) {
      parcial = courses[i] + courses[j];
      if (parcial === time) {
        return [i, j];
      }
      if (courses[i] + courses[j] < time && max < parcial) {
        max = parcial;
        resultado = [i, j];
      }
    }
  }

  return resultado;
}

//Reto 20:

function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
  let abecedario = "abcdefghijklmnñopqrstuvwxyz";
  let letras = abecedario.split("");
  let frase = letter.toLowerCase().split("");

  let resultado = true;
  for (var i = 0; i < letras.length; i++) {
    if (frase.indexOf(letras[i]) === -1) {
      resultado = false;
    }
  }
  return resultado;
}

//Reto 21:

function canCarry(capacity, trip) {
  // ¡No olvides compartir tu solución en redes!
  const paradaMax = Math.max(
    ...trip.reduce((acc, parada) => [...acc, parada[2]])
  );
  const paradas = Array.from({ length: paradaMax }, (_, i) => i + 1);
  return paradas.reduce((regalosEncima, numParada) => {
    const parada = trip.filter((parada) => parada[1] === numParada)[0] || null;
    const paradasDejarRegalos = trip.filter(
      (tmpParada) => tmpParada[2] === numParada
    );
    const dejarRegalos =
      paradasDejarRegalos.reduce(
        (acc, paradaDejarRegalo) => acc + paradaDejarRegalo[0],
        0
      ) || 0;
    const cogerRegalos = parada ? parada[0] : 0;
    regalosEncima = regalosEncima + cogerRegalos - dejarRegalos;
    if (regalosEncima > capacity) {
      return false;
    }
    return regalosEncima;
  }, 0) === 0
    ? true
    : false;
}

//Reto 22:

function countDecorations(bigTree) {
  // ¡No olvides compartir tu solución en redes!
  const contadorDecoraciones = (arbol) => {
    const { value } = arbol;
    const left = arbol.left === null ? 0 : contadorDecoraciones(arbol.left);
    const right = arbol.right === null ? 0 : contadorDecoraciones(arbol.right);
    return value + left + right;
  };
  return contadorDecoraciones(bigTree);
}

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

//Reto 23:

function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!
  if (from.length !== to.length) return false;
  const assign = {};
  for (const i in from) {
    if (
      Object.values(assign).some((value) => value === to[i]) &&
      assign[from[i]] !== to[i]
    )
      return false;
    if (assign[from[i]] && assign[from[i]] !== to[i]) return false;
    assign[from[i]] = to[i];
  }
  return true;
}

//Reto 24:

function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!
  return false;
}

// Reto 25:


function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
      const mousePosition = game.reduce((position, row, i) => {
      const x = row.indexOf('m')
      return x === -1 ? position : { x: x, y: i }
    }, {})
    const targetPosition = { ...mousePosition };
    if (direction === 'up' && mousePosition.y !== 0) targetPosition.y = mousePosition.y - 1
    if (direction === 'down' && mousePosition.y !== game.length - 1) targetPosition.y = mousePosition.y + 1
    if (direction === 'left' && mousePosition.x !== 0) targetPosition.x = mousePosition.x - 1
    if (direction === 'right' && mousePosition.x !== game[0].length - 1) targetPosition.x = mousePosition.x + 1
    if (game[targetPosition.y][targetPosition.x] === '*') return true
    return false
  }