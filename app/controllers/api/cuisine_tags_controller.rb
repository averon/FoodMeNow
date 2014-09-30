module Api
  class CuisineTagsController < ApiController
    def index
      @cuisine_tags = CuisineTag.all
      render :index
    end

    def show
      @cuisine_tag = CuisineTag.find_by_id(params[:id])
      render :show
    end
  end
end
