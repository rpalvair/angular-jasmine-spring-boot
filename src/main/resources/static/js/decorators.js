

  helloApp.config([ "$provide", function( $provide )
      {
            // Use the `decorator` solution to substitute or attach behaviors to
            // original service instance; @see angular-mocks for more examples....

            $provide.decorator( '$log', [ "$delegate", function( $delegate )
            {
                // Save the original $log.debug()
                var debugFn = $delegate.debug;

                $delegate.debug = function( )
                {
                  var args    = [].slice.call(arguments),
                      now     = new Date().toISOString().slice(0, 10);;

                  // Prepend timestamp
                  //args[0] = supplant("{0} - {1}", [ now, args[0] ]);

                   args[0] = now + ":" + args[0];

                  // Call the original with the output prepended with formatted timestamp
                  debugFn.apply(null, args)
                };

                return $delegate;
            }]);
      }]);