class BlogPostsController < ApplicationController
    def index
        blog_posts = BlogPost.all 
        render json: blog_posts
    end

    def create
        blog_post = BlogPost.new(title: params[:title], content: params[:content])
        if blog_post.save
            render json: blog_post
        end
    end
end
