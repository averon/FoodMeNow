Rails.application.routes.draw do
  resources :users, only: [:new, :create, :destroy]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :show]
    resources :cuisine_tags, only: [:index]
    resources :menu_categories, only: [:show]
    resources :menu_items, only: [:show]
  end

  root 'static_pages#root'
end
