/*
Pадача из видео на https://yandex.ru/jobs/services/hr-tech/frontend

Написать функцию, которая определяет, является ли переданная строка палиндромом
(читается слева-направо и справа-налево одинаково).
Примеры палиндромов:
- Казак
- А роза упала на лапу Азора
- Do geese see God?
- Madam, I'm Adam

Ограничение по памяти O(1).
*/

function isLetterOrNumber(letter) {
    return letter.match(/[А-ЯЁa-z0-9]/i)
}

function isPolyndrom(str) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex <= rightIndex) {
        const leftLetter = str[leftIndex];
        const rightLetter = str[rightIndex];
        
        if (!isLetterOrNumber(leftLetter)) {
            leftIndex++;
            continue;
        }
        if (!isLetterOrNumber(rightLetter)) {
            rightIndex--;
            continue;
        }
        if (leftLetter.toLowerCase() === rightLetter.toLowerCase()) {
            leftIndex++;
            rightIndex--;
        } else {
            return false;
        }
    }

    return true;
}
console.log(
    isPolyndrom('Тест'),
    isPolyndrom(''),
    isPolyndrom('Казак'),
    isPolyndrom("А роза упала на лапу Азора"),
    isPolyndrom("Do geese see God?"),
    isPolyndrom("Madam, I'm Adam"),
)