
console.log ('Building Ethos...')
console.log( 'Workind dir: ', __dirname )

NwBuilder = require( 'node-webkit-builder' )
nw = new NwBuilder
  files: '../**/**' # use the glob format
  platforms: ['win','osx']
  macCredits: './oxs_credits.html'
  macIcns: './icons/ethereum-logo.icns'
  winIco: './icons/ethereum-logo.ico'

# Log stuff you want
nw.on('log',  console.log);

# And supports callbacks
nw.build (err) ->
  if err
    console.log(err)
  else
    console.log( 'Success!')