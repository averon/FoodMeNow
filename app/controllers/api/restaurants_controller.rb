module Api
  class RestaurantsController < ApiController 
    def index
      @restaurants = Restaurant.all
      render json: @restaurants
    end
  end
end
