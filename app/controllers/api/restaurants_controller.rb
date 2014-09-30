module Api
  class RestaurantsController < ApiController 
    def index
      @restaurants = parse_cuisines 
      render :index
    end

    def show
      @restaurant = Restaurant.find(params[:id])
      render :show
    end

    private

    def parse_cuisines
      return Restaurant.all unless params[:cuisines]

      cuisine_tags = params[:cuisines].split(',')
      cuisines = CuisineTag.where(name: cuisine_tags)

      restaurants = cuisines.map do |cuisine|
        cuisine.restaurants
      end.flatten!
    end
  end
end
