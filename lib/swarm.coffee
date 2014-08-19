


TorrentClient = require( 'node-torrent' )
fs = require('fs');


module.exports = ({ dataDir }) ->
  client = new TorrentClient
    logLevel: 'DEBUG'

  files = fs.readdirSync( dataDir )
  for filename in files
    path = "#{ dataDir }/#{ filename }"
    torrent = client.addTorrent( path )
    console.log( "Torrent file found: #{ path } status: #{ torrent.status }" )

  # when the torrent completes, move it's files to another area
  torrent.on 'complete', ->
    console.log('torrent complete!')
    torrent.files.forEach (file) ->
      # newPath = "/new/path/#{ file.path }"
      # fs.rename( file.path, newPath )
      # while still seeding need to make sure file.path points to the right place
      file.path = newPath

  # Retun client instance
  client


