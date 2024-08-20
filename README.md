# jekyll-theme-teddy

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-teddy"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-teddy
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-teddy

## Configuration
There are some variables you can use to customize this theme.

### _config.yml
* **source_repository_url**\
  This will be used to link to your repository and individual files in your repository.
* **source_repository_url_path_prefix**\
  This is the url part that is between your source_repository_url and the page path.
  On github this is `blob/main`
* **last_post**\
  This is used to add a link to your latest post.

### front matter
* **title**\
  Adds a h1 title.
* **toc**\
  Auto generate table of contents if set to true.
* **post (only in home layout)**\
  This is used to generate the card view on the home page.
  It accepts a list of objects. 
  example:
  ```
  posts: [
    {
      "image": "Resources/img1.png", 
      "image-alt": "image 1",
      "link": "Posts/post1", 
      "title": "Post 1", 
      "description": "My Post 1", 
      "footer-text": "January 1970"
    },
    {
      "image": "Resources/img2.png", 
      "image-alt": "image 2",
      "link": "Posts/post2", 
      "title": "Post 2", 
      "description": "My Post 2", 
      "footer-text": "January 1970"
    }
  }
  ```

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-teddy.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
