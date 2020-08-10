class BlogPostsController < ApplicationController
    def index
        blog_posts = BlogPost.all 
        render json: blog_posts
    end
end
