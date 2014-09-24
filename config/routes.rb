Rails.application.routes.draw do
  resources :users, only: [:new, :create, :destroy]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index]
    resources :cuisine_tags, only: [:index]
  end

  root 'static_pages#root'
end
