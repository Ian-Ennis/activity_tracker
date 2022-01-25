Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      get '/login', to: 'auth#create'
      post '/profile', to: 'users#profile' 
    end
  end

  resources :meditations, only: [index, :create]
  resources :yogas, only: [index, :create]
  resources :cardios, only: [index, :create]

end
