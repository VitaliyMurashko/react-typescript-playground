export const checkBalanceStr = (str:string) => {
    const stack = [], open = "(", close = ")";
    let index = 0; 
            for (const symbol of str)
            {
                
                let i = open.indexOf(symbol);
                let c = close.indexOf(symbol);
                if (i + 1 === c) return false;
                if (i > -1) stack.push(close[i]);
                if (i > -1 && index !==i) index = i;
                if (index + 1 === i) return false;
                if (close.includes(symbol) && symbol != stack.pop()) return false
            }
            return stack.length == 0;
}