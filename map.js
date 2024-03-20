const obj = {
    name: "Dmytro",
    age: 40,
    job: "Fullstack",
  };
  
  const entries = [
    ["name", "Dmytro"],
    ["age", 40],
    ["job", "Fullstack"],
  ];
  
  console.log(Object.entries(obj)); // [ [ 'name', 'Dmytro' ], [ 'age', 40 ], [ 'job', 'Fullstack' ] ]
  console.log(Object.fromEntries(entries)); // { name: 'Dmytro', age: 40, job: 'Fullstack' }//
  
  const map = new Map(entries);
  console.log(map); // { 'name': 'Dmytro', 'age': 40, 'job': 'Fullstack' }
  
  console.log(map.get("job")); // 'Fullstack'
  
  map.set("newField", 42).set(obj, "Value of object").set(NaN, "NaN !!!");
  // console.log(map); // Map {'name': 'Dmytro', 'age': 40, 'job': 'Fullstack',
  //                   // 'newField': 42,  { name: 'Dmytro', age: 40, job: 'Fullstack' }: 'Value of object'}
  // console.log(map.get(obj)); // 'Value of object'
  // console.log(map.get(NaN)); // 'NaN !!!'
  // console.log(map.delete("job")); // true
  // console.log(map); /** Map {
  //                              'name': 'Dmytro',
  //                              'age': 40,
  //                              'newField': 42,
  //                              { name: 'Dmytro', age: 40, job: 'Fullstack' }: 'Value of object',
  //                              NaN: 'NaN !!!'
  //                            } */
  // console.log(map.has("job")); // false
  // console.log(map.size); // 5
  // map.clear();
  // console.log(map.size); // 0
  
  // ===================================================
  
  for (let entry of map.entries()) {
    console.log(entry); /**
                                [ 'name', 'Dmytro' ] ​​​​​at ​​​​​​​​entry​​​ ​quokka.js:45:5​
    
                                [ 'age', 40 ] ​​​​​at ​​​​​​​​entry​​​ ​quokka.js:45:5​
    
                                [ 'job', 'Fullstack' ​​​​​at ​​​​​​​​entry​​​ ​quokka.js:45:5​
    
                                [ 'newField', 42 ] ​​​​​at ​​​​​​​​entry​​​ ​quokka.js:45:5​
    
                                [ { name: 'Dmytro', age: 40, job: 'Fullstack' }, 'Value of object' ] at ​​​​​​​​entry​​​ ​quokka.js:45:5​
    
                                [ NaN, 'NaN !!!' ] ​​​​​at ​​​​​​​​entry​​​ ​quokka.js:45:5​ 
                                */
  }
  
  for (let [key, value] of map) {
    console.log(key, value); // получаем значения не массив
  }
  
  for (let val of map.values()) {
    console.log(val); /** 'Dmytro' ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
    
                              40 ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
        
                             'Fullstack' ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
        
                             42 ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
        
                             'Value of object' ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
        
                             'NaN !!!' ​​​​​at ​​​​​​​​val​​​ ​quokka.js:65:5​
                        */
  }
  
  for (let key of map.keys()) {
    console.log(key);
  } /** 'name' ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
    
    'age' ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
    
    'job' ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
    
    'newField' ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
    
    { name: 'Dmytro', age: 40, job: 'Fullstack' }
      ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
    
    NaN ​​​​​at ​​​​​​​​key​​​ ​quokka.js:81:5​
     */
  
  map.forEach((val, key, m) => {
    console.log(
      key,
      val
    ); /** [ 'name', 'Dmytro' ] ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
    
        [ 'age', 40 ] ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
        
        [ 'job', 'Fullstack' ]
          ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
        
        [ 'newField', 42 ] ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
        
        [ { name: 'Dmytro', age: 40, job: 'Fullstack' }, 'Value of object' ]
          ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
        
        [ NaN, 'NaN !!!' ] ​​​​​at ​​​​​​​​key​​​ ​quokka.js:97:5​
         */
  });
  
  // =========================================================================
  //   const array = [...map];
  //   console.log(array); /**Array(6) [
  //     [ 'name', 'Dmytro' ],
  //     [ 'age', 40 ],
  //     [ 'job', 'Fullstack' ],
  //     [ 'newField', 42 ],
  //     [ { name: 'Dmytro', age: 40, job: 'Fullstack' }, 'Value of object' ],
  //     [ NaN, 'NaN !!!' ]
  //   ] */
  
  // ==========================================================================
  const array = Array.from(map);
  console.log(array); /** Array(6) [
      [ 'name', 'Dmytro' ],
      [ 'age', 40 ],
      [ 'job', 'Fullstack' ],
      [ 'newField', 42 ],
      [ { name: 'Dmytro', age: 40, job: 'Fullstack' }, 'Value of object' ],
      [ NaN, 'NaN !!!' ]
    ]  */
  // ==========================================================================
  const mapObj = Object.fromEntries(map.entries());
  console.log(mapObj); /** 
    {
      name: 'Dmytro',
      age: 40,
      job: 'Fullstack',
      newField: 42,
      '[object Object]': 'Value of object',
      NaN: 'NaN !!!'
    } */
  
  // =============================================================================
  const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];
  
  const visits = new Map();
  visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60));
  function lastVisit(user) {
    return visits.get(user);
  }
  
  console.log(lastVisit(users[1])); // '2024-03-20T14:21:30.000Z'