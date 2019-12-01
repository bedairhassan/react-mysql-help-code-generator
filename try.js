let destruct=(myVariables)=>{

    let string ='\nconst {'

    for(let i=0;i<myVariables.length;i++){

        string+=myVariables[i]+','
    }

    string = string.slice(0,-1)

    string+='}=item\n'

    return string
}

let main = (myVariables,nameOfComponent)=>{

    let string = "import { useEffect, useState } from 'react';";
    string+="\nimport * as React from 'react';";
    string+="\nimport Service from ''"
    string+="\nimport Column from ''"
    
    string+=`\nexport default function ${nameOfComponent}(props) {`
    string+="\nconst [getData, setData] = useState(['empty data'])"
    
    for (let i = 0; i < myVariables.length; i++) { 
        string+=`\nconst [${myVariables[i]},set${myVariables[i]}] = useState('')`
    }

    let readFromFileNamedReadAll =''
    string+=readFromFileNamedReadAll

    string += '\nlet Edit = (item) => {'

    string+= destruct(myVariables)

    for( let i=0;i<myVariables.length;i++){

        string+=`\nset${myVariables[i]}(${myVariables[i]})\n`
    }

    string+='}'

    return string
}

// input
let myVariables = ['id', 'description']
let nameOfComponent = 'MyComponent'


console.log(main(myVariables,nameOfComponent))



