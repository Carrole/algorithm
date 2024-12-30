function solution(name, yearning, photo) {
    const nameYearningMap = new Map(name.map((item, index) => [item, yearning[index]]));

    return photo.map(arr => arr.reduce((sum, name) => sum + (nameYearningMap[name] || 0), 0));
}
