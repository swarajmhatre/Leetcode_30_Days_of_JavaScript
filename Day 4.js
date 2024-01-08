var createCounter = function(init) {
    var current = init;
    return {
        increment: ()=>{
            current++;
            return current;
        },
        decrement: ()=>{
            current--;
                        return current;
        },
        reset: ()=>{
            current = init;
            return current;        
    }

    }
};
