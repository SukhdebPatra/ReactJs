const GM="GM"
const GN="GN"

let gmAction=()=>{
    console.log("gm action reduc action file")
    return {type:GM}
}


let gnAction =()=>{
    return {type:GN}
}

export {gmAction,gnAction,GM,GN}

