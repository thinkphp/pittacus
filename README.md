# Pittacus

Very simple in-browser unit-test microlibrary, with zero deps. Background turns green if all tests pass, otherwise red.

## Usage

  <script type="text/javascript" src="pittacus.js"></script>
  <script>
          function factorial(n) {
                   if(n == 0) return 1
                   else return n * factorial(n - 1)
          }
          function add(a, b) {
                   return a + b
          }
          function bubblesort( arr ) {
                   var finished = 0, 
                       swapped, 
                       last = arr.length - 1;
                   while(!finished) {
                          swapped = 0
                          for(var i = 0; i < last; ++i) {
 
                                  if(parseInt(arr[ i ]) > parseInt(arr[ i + 1 ])) {
                                     var tmp = arr[ i ]
                                         arr[ i ] = arr[ i + 1 ] 
                                         arr[ i + 1 ] = tmp
                                     swapped = 1
                                  }
                          }
                          if( swapped ) last--
                              else
                                        finished = 1 
                   } 
                   return arr
          }
          tests({
                'Factorial Numbers': function() {
                      eq(120, factorial(5)) 
                      eq(1, factorial(1)) 
                      eq(2, factorial(2)) 
                      eq(6, factorial(3)) 
                      eq(24, factorial(4)) 
                },
                'Adds Numbers': function() {
                      eq(3, add(1,2)) 
                      eq(7, add(3,4)) 
                      eq(11, add(5,6)) 
                      eq(15, add(7,8)) 
                      eq(18, add(8,10)) 
                },
                'Sorting': function() {
                      eq([1,2,3].toString(), bubblesort([1,2,3]).toString()) 
                      eq([0,1,2,3,4,5,6,7,8,9].toString(), bubblesort([9,8,7,6,5,4,3,2,1,0]).toString()) 
                      eq([-3,-2,-1,1,2,3].toString(), bubblesort([1,2,3,-3,-2,-1]).toString()) 
                }            
          }) 