Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/profile', to: 'users#profile' 
      get '/login', to: 'auth#create'
    end
  end
end
