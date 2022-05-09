/*
3) Создать обычный объект и сделать его итерируемым.
При этом итерация должна происходить следующим образом:
Должны поочерёдно проходиться все значения от свойства объекта from,
 до свойства to. (в случае если to < from - должна возникать ошибка).
Если to или from не указаны ИЛИ to или from не являются числами,
должна возникать ошибка. Объект должен называться myIterable.
> Примеры:

const myIterable = { from: 1, to: 4 };
for (let item of myIterable) {
 console.log(item); // 1, 2, 3, 4
}
const myIterable = { from: 'aaa', to: 4 };
for (let item of myIterable) { // Ошибка!
 console.log(item);
}
 */

