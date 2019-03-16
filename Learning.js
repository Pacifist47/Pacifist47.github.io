let generateEmail=(name,message)=>{

  return `hi ${name} ${message}`
}

let name = window.prompt(`Enter Name`)
let message = window.prompt(`Enter Message`)

alert(generateEmail(name,message))

