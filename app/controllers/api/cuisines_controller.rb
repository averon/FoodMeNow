module Api
  class CuisinesController < ApiController
    def index
      @cuisines = Restaurant.pluck(:cuisine).uniq
      render json: @cuisines
    end
  end
end
