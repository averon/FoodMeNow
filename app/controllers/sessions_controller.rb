class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user 
      login!(@user)
      flash.now[:success] = ["Successfully logged in as #{@user}"]
      render :show
    else
      render json: @user, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find_by_credentials(user_params)
    logout!(@user)
    flash[:success] = ["Successfully logged out!"]
    render new_session_url
  end
end
