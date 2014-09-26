module Api
  class OrdersController < ApiController
    def show
      @order = Order.find_by_id(params[:id])
      render json: @order
    end

    def new
      @order = Order.new
      render json: @order
    end

    def create
      # after login
    end

    private
    
    def order_params
      params.require(:order).permit(:user_id, :tip_amount, :total)
    end
  end
end
