class Api::SessionsController < ApplicationController

  def create
    # Find user by credentials
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
      )
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
      render json: ['Your email and/or password are incorrect. Please try again.'], status: 401
    else
    # Log them in and redirect them if we find them
      login!(@user)
      render json: @user
    end

  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ['Not currently logged in'], status: 404
    end
  end
end
