const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const grouping = surveyResponses.reduce((table, response) => {
    console.log(table);
    if(table[response]){
        table[response] = table[response] + 1
        console.log(table[response],"true");
        
    }else{
        table[response] = 1
        console.log(table[response],"else");
        
    }
    return table
},{})
console.log(grouping);
