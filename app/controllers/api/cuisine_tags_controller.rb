module Api
  class CuisineTagsController < ApiController
    def index
      @cuisine_tags = CuisineTag.all
      render json: @cuisine_tags
    end
  end
end
