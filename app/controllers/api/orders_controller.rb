module Api
  class OrdersController < ApiController
    def new
      @order = Order.new
      render json: @order
    end

    def create
      fail
      current_user
    end

    private
    
    def order_params
      params.require(:order).permit(:subtotal, :tip, :tax, :total)
    end
  end
end
