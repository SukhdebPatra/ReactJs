const GM='GM';
const GN='GN'
let gmAction=()=>{
    console.log("GM Action - reducer Action file")
    return {type:GM}
}

let gnAction=()=>{
    return {type:GN}
}
export {gmAction,gnAction,GN,GM}