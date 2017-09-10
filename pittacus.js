/**
 *  Very dead simple in-browser unit-test microlibrary, with zero deps.
 *  
 *  Background turns green if all tests pass, otherwise red.
 *
 *  View the JavaScript console.log to see failures reasons.
 */

var PittacusTest = {

    run: function( tests ) {

         var failures = 0

         for(var testName in tests) {

             var testAction = tests[ testName ]

             try {

                 testAction.apply( this )

                 console.log('Test: ', testName, 'OK') 

             } catch( e ) {

                 failures++

                 console.log('Test:', testName, 'FAILED', e)

                 console.log( e.stack )  

             }
         }

         setTimeout(function(){

            if( window.document && document.body ) {

                document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
            } 

         }, 0)
    },

    fail: function( msg ) {

    },

    assert: function( value, msg ) {
           
    },
 
    assertEquals: function( expected, actual ) {

                  if( expected != actual ) {

                      throw new Error('assertEquals() "' + expected + '" != "' + actual + '"')
                  }
    },

    assertStrictEquals: function( expected, actual ) {

                  if( expected !== actual ) {

                      throw new Error('assertEquals() "' + expected + '" !== "' + actual + '"')
                  }
    }    
};

var tests = PittacusTest.run.bind( PittacusTest ),
       eq = PittacusTest.assertEquals.bind( PittacusTest )