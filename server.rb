# Author: Julio Cesar Fausto.
# Created at: 11/09/2015.
#
# This super simple ruby http server is provided only
# for development and test purposes.

require 'webrick'

# Default port. Change it if you need.
port = 3000

puts "Super Simple Ruby Http Server started: http://localhost:#{port}/"

# root directory set do ./puglic by default.
root = File.expand_path './public'

# creating the server is a piece of cake!
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

# Handle ^C
trap('INT') { server.shutdown }

# GO!
server.start
