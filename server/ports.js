var inspector = function(){

  var get = function(req, res){

    const { spawnSync } = require( 'child_process' )
const ls = spawnSync( 'pm2', ['list'] )
const grep = spawnSync('grep', ['online'],  {
  input: ls.stdout,
  encoding:'utf8'
})
const pids = spawnSync('awk', ['{ print $2, $8 }'], {
  input: grep.stdout,
  encoding:'utf8'
})
const thenames = pids.stdout.toString('utf8')
    console.log(18)
const ports = spawnSync('lsof', ['-i'])
const nodeports = spawnSync('grep', ['node'], {
  input: ports.stdout,
  encoding: 'utf8'
})
var theapps = []
var applines = pids.stdout.toString().split('\n');

applines.forEach(function(line) {
  var f = {name:line.split(' ')[0],pid:split(' ')[1]}
  theapps.push(f)
})

var lines = nodeports.stdout.toString().split('\n');

              var returnLines = [];
              lines.forEach(function(line) {
     
              var e = {port:line.split('localhost:').pop().split(' ').shift()}
              console.log(e)
              returnLines.push(e);
              });
              console.log(23)
              res.json({ports:returnLines,apps:theapps});
          }


  return {
      get: get
  }
};

module.exports = inspector;
