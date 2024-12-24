function solution(babbling) {
    const validPattern = /^(aya|ye|woo|ma)+$/;
    return babbling.filter(word => validPattern.test(word)).length;
}
