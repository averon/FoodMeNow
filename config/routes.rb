Rails.application.routes.draw do
  resources :users, only: [:new, :show, :create, :destroy] do
    resources :delivery_addresses, only: [:index]
  end
  resources :sessions, only: [:new, :show, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :show]
    resources :cuisine_tags, only: [:index, :show]
    resources :menu_categories, only: [:show]
    resources :menu_items, only: [:show]
    resources :orders, only: [:new, :create, :show]
  end

  root 'static_pages#root'
end
