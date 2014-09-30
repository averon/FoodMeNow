class UsersController < ApplicationController
  def new
    render :new
  end

  def show
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    render 'show.json.jbuilder'
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      flash[:success] = ["Successfully created user #{@user}"]
      render 'show.json.jbuilder'
    else
      flash.now[:errors] = ["Invalid email/password combination"]
      render :new
    end
  end

  def destroy
    @user = User.find_by_credentials(user_params)
    @user.destroy!
    flash[:success] = ["Successfully deleted user #{@user}"]
    redirect_to new_user_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
