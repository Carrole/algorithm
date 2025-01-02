function solution(k, m, score) {
    score.sort((a, b) => b - a);

    let maxProfit = 0;

    for (let i = 0; i < score.length; i += m) {
        if (i + m > score.length) break;

        const boxScore = score[i + m - 1];
        maxProfit += boxScore * m;
    }

    return maxProfit;
}
