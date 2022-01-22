/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
  const g = new Map();

  // строим граф
  for (let i = 0; i < equations.length; i++) {
    const [x, y] = equations[i];
    const val = values[i];

    // кладем веса в нужные места в матрице
    putIfAbsent(g, x, y, val);
    putIfAbsent(g, y, x, 1 / val);
  }

  const results = [];

  // бежим по всем запросам
  for (const [from, to] of queries) {
    // возвращаем -1, если в графе нет первого числа
    if (!g.has(from)) {
      results.push(-1);
      continue;
    }

    // Обход в ширину
    // в очереди храним пары: узел, путь
    const q = [[from, 1]];
    const visited = new Set();
    let result = -1;

    // бежим, пока очередь не пустая
    while (q.length > 0) {
      const [curr, path] = q.shift();

      if (curr === to) {
        result = path;
        break;
      }

      // проверяем на посещенные узлы
      if (visited.has(curr)) {
        continue;
      }
      visited.add(curr);

      if (g.has(curr)) {
        // добавляем в очередь новых деток и обновляем вес
        for (const k of g.get(curr).keys()) {
          q.push([k, g.get(curr).get(k) * path]);
        }
      }
    }
    results.push(result);
  }
  return results;
};

// хелпер, строит матрицу
function putIfAbsent(map, x, y, v) {
  if (!map.has(x)) {
    map.set(x, new Map());
  }
  map.get(x).set(y, v);
}
