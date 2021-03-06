Rails.application.routes.draw do
  resources :users, only: [:new, :show, :create, :destroy] do
    resources :delivery_addresses, only: [:index]
    resources :payment_methods, only: [:index]
    resources :orders, only: [:index, :show]
  end

  resources :sessions, only: [:new, :create]
  get '/current_user', to: 'sessions#show'
  get '/sign_out', to: 'sessions#destroy'

  resources :charges

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :show]
    resources :cuisines, only: [:index]
    resources :menu_categories, only: [:show]
    resources :menu_items, only: [:show]
    resources :orders, only: [:new, :create]
  end

  root 'static_pages#root'
end
