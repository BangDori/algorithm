const OPEN = '('
const CLOSE = ')'

function solution(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === OPEN) {
            stack.push(s[i]);
            continue;
        }
                
        if (s[i] === CLOSE && stack.at(-1) === OPEN) {
            stack.pop();
            continue
        }
        
        return false;
    }

    return stack.length === 0;
}