class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render :index
  end

  def show
    @picture = Picture.find(params[:id])
    render :show
  end

end
