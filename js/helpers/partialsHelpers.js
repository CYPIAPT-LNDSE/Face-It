function updatePartials(results){

  evolvePartials( extractFromResults(results) , (res)=>{return res} )

  function extractFromResults(results){
    var tmp = results.reduce((acc, el)=>{
      return acc.concat([{[el.apiGuess[0]]: el.userGuess}]) 
    }, [])
    return tmp
  }

  function evolvePartials(extracted, cb){  //this evolve the partials datastructure
    //get partials form pouch

    db.get('partials').then(function(partials) {
      extracted.forEach((extractedElement, i)=>{
        console.log(partials.partials)
        partials.partials.forEach((realEl)=>{
          if(realEl.properType.toLowerCase() == Object.keys(extractedElement)[0]){
            realEl.data[1]['score'] += 1
            if(extractedElement[Object.keys(extractedElement)[0]] == Object.keys(extractedElement)[0]){
              realEl.data[0]['score'] += 1
            }
          }
        })
      })
      return db.put({
        _id: 'partials',
        _rev: partials._rev,
        partials: partials.partials      
      });
    })
  }

}

