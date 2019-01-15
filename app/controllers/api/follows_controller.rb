class Api::PicturesController < ApplicationController
  def index
    @follows = Follow.all

    render :index
  end
  
  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).
      permit(:user_id, :follower_id)
  end
end