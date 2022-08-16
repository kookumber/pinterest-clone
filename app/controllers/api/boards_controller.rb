class Api::BoardsController < ApplicationController
    
    def index
        # @boards = Board.all

        if params[:user_id]
            @boards = Board.where(user_id: params[:user_id])
        else
            @boards = Board.all
        end
    end

    def create
        @board = Board.new(board_params)
        @boards = Board.all
        @board_pins = @board.pins
        @user = @board.user
        
        if @board.save 
            # render :show
            render "/api/users/show"
        else
            # render json: @board.errors.full_messages, status: 401
            render json: ["did not save board"]
        end
    end
    
    def show
        @board = Board.find_by(id: params[:id])
        @pins = @board.pins

        if @board
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        @pins = @board.pins

        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        @boards = Board.all
        if @board && @board.destroy
            render :index
        else
            render json: ['Unable to delete the board'], status: 401
        end
    end

    def board_params
        params.require(:board).permit(:name, :details, :user_id, :public)
    end

end
