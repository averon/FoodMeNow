class SessionsController < ApplicationController
  def index
    @user = User.all
    render :index
  end

  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find_by_session_token(session[:session_token])

    if @user
      render 'show.json.jbuilder'
    else
      render json: @user, status: :unprocessable_entity
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user 
      login!(@user)
      flash.now[:success] = ["Successfully logged in as #{@user}"]
      render 'show.json.jbuilder'
    else
      render json: @user, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find_by_session_token(session[:session_token])
    logout!(@user)
    flash[:success] = ["Successfully logged out!"]
    render json: @user 
  end
end
