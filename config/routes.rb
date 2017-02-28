Rails.application.routes.draw do
	require 'sidekiq/web'
	mount Sidekiq::Web => "/sk"

  get 'currency/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'currency#index'
end
