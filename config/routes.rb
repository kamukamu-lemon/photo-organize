Rails.application.routes.draw do
  devise_for :users
  resources :images
  
  authenticated :user do
    root to: 'images#index', as: :authenticated_root
  end
  devise_scope :user do
    root to: 'devise/sessions#new', as: :unauthenticated_root
  end
end
 