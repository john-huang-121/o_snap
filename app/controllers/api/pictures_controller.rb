class Api::PicturesController < ApplicationController
  def index
    if params[:data]
      @pictures = Picture.search_pictures(params[:data])
      render :index
    else
      @pictures = Picture.all
      render :index
    end
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
      permit(:title, :description, :tags, :user_id, :picture)
  end
end
