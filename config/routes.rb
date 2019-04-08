Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show, :edit, :destroy]
    resources :pictures, only: [:index, :update, :create, :show, :destroy]
    resources :follows, only: [:index, :create, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:index, :create, :edit, :destroy]
  end
end
