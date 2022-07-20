class Api::BoardsController < ApplicationController
    
    def index
        # @boards = Board.all

        # @boards.each do |board|
        #     board.saved_pins_on_board = board.featured_pins
        # end

        if params[:user_id]
            @boards = Board.where(user_id: params[:user_id])
        else
            @boards = Board.all
        end
    end

    def create
        @board = Board.new(board_params)

        if @board.save 
            render :show
        else
            # render json: @board.errors.full_messages, status: 401
            render json: ["did not save board"]
        end
    end
    
    def show
        @board = Board.find_by(id: params[:id])
        
        if @board
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        
        if @board.update
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
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
