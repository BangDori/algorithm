function solution(s) {
    const nums = s.split(" ").map(num => parseInt(num)).sort((a, b) => a-b);
    const answer = `${nums[0]} ${nums.at(-1)}`

    return answer;
}