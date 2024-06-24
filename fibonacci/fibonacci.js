// fib(n) = fib(n-1) + fib(n-2)

function fibs(num) {
    let answer = [];
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
            answer.push(1);
        } else {
            answer.push(answer[i - 1] + answer[i - 2]);
        }
    }
    return answer;
}

function fibsRec(num) {
    if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    } else {
        let answer = fibsRec(num - 1);
        let nextNum = answer[answer.length - 1] + answer[answer.length - 2];
        answer.push(nextNum);
        return answer;
    }
}

console.log(fibs(8));
console.log(fibsRec(8));

