Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      # get: '/profile', 'users#profile' 
    end
  end
      
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # ATTENTION! (below)
  # I commented this out during Marc's review session (this line wasn't in his templates)
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
