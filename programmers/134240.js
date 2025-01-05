function solution(food) {
    return food.reduceRight((acc, cur, idx) => {
        if(idx < 1) return acc;

        const newStr = `${idx}`.repeat(Math.floor(cur / 2));

        acc = newStr + acc + newStr;

        return acc;
    },'0');
}
