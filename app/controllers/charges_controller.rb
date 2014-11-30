class ChargesController < ApplicationController
  def new
  end

  def create
    @amount = params[:order][:price]

    customer = Stripe::Customer.create(
      email: params[:user][:email],
      card: params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: @amount,
      description: 'Rails stripe customer',
      currency: 'usd'
    )
#  rescue Stipe::CardError => e
  end
end
