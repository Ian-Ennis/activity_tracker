Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      get '/login', to: 'auth#create'
      post '/profile', to: 'users#profile' 
    end
  end
end
