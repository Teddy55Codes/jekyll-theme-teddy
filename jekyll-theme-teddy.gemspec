# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-teddy"
  spec.version       = "0.4.0"
  spec.authors       = ["Teddy55Codes"]
  spec.email         = ["teddy@teddy.email"]

  spec.summary       = "The theme used for https://github.com/Teddy55Codes/Blog"
  spec.homepage      = "https://github.com/Teddy55Codes/jekyll-theme-teddy"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown|woff2)|$)))}i)
  end

  spec.required_ruby_version = ">= 2.4.0"

  spec.platform = Gem::Platform::RUBY
  spec.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
  spec.add_runtime_dependency "jekyll-toc", "~> 0.19.0"
end