class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render :index
  end

  def show
    @picture = Picture.find(params[:id])
    render :show
  end

  def create
    @picture = Picture.new(picture_params)

    if @picture.save
      render 'api/pictures/show'
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  private

  def picture_params
    params.require(:picture).
      permit(:title, :description, :user_id, :picture)
  end
end
