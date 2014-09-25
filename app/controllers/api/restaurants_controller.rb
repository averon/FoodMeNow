module Api
  class RestaurantsController < ApiController 
    def index
      @restaurants = Restaurant.all
      render json: @restaurants
    end

    def show
      @restaurant = Restaurant.find(params[:id])
      render :show
    end
  end
end