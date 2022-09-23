// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


function linearCalc(a,b,c){

    let n = -c;

    for(let i=0; a*i<=n; i++){

        if((n-a*i)%b==0){
            console.log(`x = ${i} ; y = ${(n-a*i)/b}`);
        }

    }

}

// linearCalc(2,3,-7);

linearCalc(1,2,-5);
