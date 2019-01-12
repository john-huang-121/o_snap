class Api::PicturesController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render ''
    else
      render json: @follow.errors.full_messages, status 422
    end
  end

  private

  def follow_params
  
  end
end