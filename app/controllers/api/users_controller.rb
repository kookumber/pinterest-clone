class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      # Tell the user that something went wrong. Let them try again.
      render json: @user.errors.full_messages, status: 422 #Unprocessable entity
    end
  end

  def show

    @user = User.find(params[:id])
    @boards = @user.boards
    @board_pins = @user.board_pins

    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  # def update
  #   @user = User.find(params[:id])
  #   if @user.update(user_params)
  #     redirect_to user_url(@user)
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  # def destroy
  #   @user = User.find(params[:id])
  #   if @user.destroy
  #     redirect_to users_url
  #   else
  #     render plain: "You can't destroy what's not there."
  #   end
  # end

  private

  def user_params
    # params.require(:user).permit(:username, :email)
    # Add password
    params.require(:user).permit(:username, :email, :password)
  end
end
