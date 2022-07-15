Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update, :destroy] #CRUD
    resources :pins, only: [:index, :create, :show, :update, :destroy] #CRUD
    resources :boards, only: [:index, :create, :show, :update, :destroy] #CRUD
    resources :saved_pins, only: [:index, :create, :destroy]
    
    resource :session, only: [:create, :destroy]
  end
  

end
