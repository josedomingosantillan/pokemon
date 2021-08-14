Rails.application.routes.draw do
  get 'principal_page/index'
  get 'pokemon_with_rails/index'
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'principal_page#index'
end
