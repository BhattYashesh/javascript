function getFormattedDate()
{
    let b = new Date()
    let d = (b.getFullYear());
    let y = (b.getMonth());
    let x=(b.getDate())

    return d + " " + y + " " + x;
    
}
console.log(getFormattedDate());