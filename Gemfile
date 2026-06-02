source "https://rubygems.org"

# Explicit floor aligned with the lockfile. The Dependabot security fix pulls
# activesupport 8.1.3, which requires Ruby >= 3.2; even activesupport 7.2.3.1
# (the lowest version that patches the advisories) needs >= 3.1, so EOL Ruby
# 3.1/2.7 cannot be supported regardless. Matches GitHub Pages' Ruby 3.3.x.
# The classic Pages build ignores this directive and the lockfile; it only
# guards local `bundle install` / `jekyll serve` with a clear error.
ruby ">= 3.2"

# gem "rails"
gem 'github-pages'
gem 'jekyll', '>= 3.6.3'
