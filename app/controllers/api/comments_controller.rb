class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all

    render :index
  end
  
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    return nil unless @comment

    if @comment.update(user_params)
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).
      permit(:picture_id, :commenter_id, :body)
  end
end