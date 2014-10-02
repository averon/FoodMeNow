module Api
  class RestaurantsController < ApiController 
    def index
      @restaurants = parse_cuisines
      @restaurants.merge!(parse_prices)
      @restaurants.merge!(parse_ratings)
      render :index
    end

    def show
      @restaurant = Restaurant.find(params[:id])
      render :show
    end

    private

    def parse_cuisines
      return Restaurant.all unless params[:cuisines]

      Restaurant
        .includes(:cuisine_tags)
        .where(
          cuisine_tags: {
            name: params[:cuisines]
          }
        )
    end

    def parse_prices
      return @restaurants unless params[:prices]
      Restaurant.where(price: params[:prices])
    end

    def parse_ratings
      return @restaurants unless params[:ratings]
      Restaurant.where(rating: params[:ratings])
    end
  end
end
