# some useful code from http://brizzled.clapper.org/blog/2012/03/05/using-twitter-bootstrap-with-jekyll/

# Where to find our custom LESS file.
BOOTSTRAP_CUSTOM_LESS = 'bootstrap/less/custom.less'

task :bootstrap_css do |t|
  puts "Compiling #{BOOTSTRAP_CUSTOM_LESS}"
  sh 'lessc', '--compress', BOOTSTRAP_CUSTOM_LESS, 'bootstrap/css/bootstrap.min.css'
  sh 'jekyll build'
end

task :default => :bootstrap_css



