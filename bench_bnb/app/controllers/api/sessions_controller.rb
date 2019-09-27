class Api::SessionsController < ApplicationController
  
  def new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      log_in(@user)
      render json: @user
    else
      render json: "Invalid username or password", status: 422
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      render json: "User not logged in", status: 404
    end
  end
  
end