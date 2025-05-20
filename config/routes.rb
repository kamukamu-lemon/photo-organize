Rails.application.routes.draw do
  devise_for :users
  resources :photos
  
  authenticated :user do
    root to: 'photos#index', as: :authenticated_root
  end
  devise_scope :user do
    root to: 'devise/sessions#new', as: :unauthenticated_root
  end
end

 