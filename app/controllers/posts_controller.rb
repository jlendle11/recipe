class PostsController < ApplicationController
  # before_action :set_post, only: [:show, :update, :destroy, :create]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    #   title: post_params[:title],
    #   ingredients: post_params[:ingredients],
    #   instructions: post_params[:instructions],
    #   user_id: params[:id]
    # })
    # binding.pry
    if @post.save
      render json: @post, status: :created
    # else
    #   render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_post
    #   @post = Post.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :ingredients, :instructions, :user_id)
    end
end
