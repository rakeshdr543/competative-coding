function canMakeWord(word) {
    word=word.toUpperCase()

    const blocks=[
['B', 'O']
['X',' K'],
['D',' Q'],
['C',' P'],
['N',' A'],
['G',' T'],
['R',' E'],
['T',' G'],
['Q',' D'],
['F',' S'],
['J',' W'],
['H',' U'],
['V',' I'],
['A',' N'],
['O',' B'],
['E',' R'],
['F',' S'],
['L',' Y'],
['P',' C'],
['Z',' M'],
    ]
    
    const letters=word.split('')
    let foundWord=''
    
    
    letters.forEach((letter)=>{
      for(let i=0;i<blocks.length;i++){
        if(blocks[i].includes(letter)){
          foundWord+=letter
          blocks.splice(i,1)
          break
        }
      }
    })
    return word===foundWord
    }

    console(canMakeWord('hey'))