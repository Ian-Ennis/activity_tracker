Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile' 
    end
  end

  resources :meditations, only: [:index, :create]
  resources :yogas, only: [:index, :create]
  resources :cardios, only: [:index, :create]

end
