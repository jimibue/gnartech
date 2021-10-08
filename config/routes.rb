Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get "jobs", to: "jobs#index"
    end
    namespace :v2 do
      get "jobs", to: "jobs#index"
    end
  end
end
