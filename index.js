var numberRoller = 1;

function takeANumber(katzDeli) {
  numberRoller++;
  katzDeli.push(numberRoller)
  return `Your number is ${numberRoller}` 
   

  
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else if (deliLine !== 0) {
      return `Currently serving ${deliLine.shift()}.`;
    }
  
  }

function currentLine(line) {
  let lineArray = [];
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else if (line.length !== 0) {
    for (let lineIndex = 0; lineIndex < line.length; lineIndex++) 
		lineArray.push(`${lineIndex + 1}. ${line[lineIndex]}`);
		return `The line is currently: ${lineArray.join(', ')}`
    }
}
   