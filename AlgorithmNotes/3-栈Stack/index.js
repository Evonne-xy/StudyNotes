isValid();
function isValid() {
    var s = '()';
    if(s.length % 2 === 1){return false;}
    const stack = [];
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if ( c === '(' || c === '{' || c === '['){
            stack.push(c);
        }else{
            const top = stack[s.length - 1];
            if(top === '(' && c === ')' ||
               top === '{' && c === '}' ||
               top === '[' && c === ']'){
                   stack.pop();
               }else{
                   return false;
               }
        }
    }
    return stack.length === 0;

}