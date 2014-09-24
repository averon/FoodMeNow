class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user 
      login!(@user)
      flash[:success] = ["Successfully logged in as #{@user}"]
      redirect_to users_url
    else
      flash.now[:errors] = ["Invalid email/password combination"]
      render :new
    end
  end

  def destroy
    @user = User.find_by_credentials(user_params)
    logout!(@user)
    flash[:success] = ["Successfully logged out!"]
    render new_session_url
  end
end
