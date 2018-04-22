# This super simple ruby http server is provided only
# for development and test purposes.

require 'webrick'
require 'json'

# On heroku the environment variable should be used.
port = ENV['PORT'].nil? ? 3000 : ENV['PORT'].to_i

puts "Super Simple Ruby Http Server started: http://localhost:#{port}/"

# root directory set do ./puglic by default.
root = File.expand_path './public'

# comments resource path
comments_path = "#{root}/comments.json";

# creating the server is a piece of cake!
server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

# Add the ability to respond to a POST request on comments.json
server.mount_proc '/comments.json' do |req, res|
  comments = JSON.parse(File.read(comments_path));

  if req.request_method == 'POST'
    # Assume it's well formed
    comment = {}
    req.query.each do |key, value|
      comment[key] = value.force_encoding('UTF-8')
    end
    comments << comment
    File.write(comments_path, JSON.pretty_generate(comments, indent: '    '))
  end

  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res.body = JSON.generate(comments)
end


# Handle ^C
trap('INT') { server.shutdown }

# GO!
server.start
