class Api::LikesController < ApplicationController
  def index
    @likes = Like.all

    render :index
  end
  
  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).
      permit(:picture_id, :liker_id)
  end
end