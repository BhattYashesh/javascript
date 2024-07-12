let ar=[1,2,3,4,5];
    let sum=0;
   let avg;
    for(let x=0;x<ar.length;x++)
    {
          sum+=ar[x];
          
       avg=sum/ar.length;
    }

    console.log(sum);
    console.log(avg);