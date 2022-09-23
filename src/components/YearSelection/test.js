class response {
  constructor(statusMsg, newLine = null, heading, message){
    this.msg = statusMsg
    this.body = {
      newLine: newLine,
      heading: heading,
      message: message
    }
  }
}

let test = new
    response(
        "VALID_START_NODE", 
        {
          start: {x: 0, y: 0}, 
          end: {x: 1, y: 1}
        },
        "Player 2",
        null)

console.log(JSON.stringify(test))