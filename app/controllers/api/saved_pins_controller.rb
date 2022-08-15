class Api::SavedPinsController < ApplicationController
    def index
        @saved_pins = SavedPin.all
        render :index
    end

    # Not actually creating any content but just an assocation between a pin and a board
    def create
        @saved_pin = SavedPin.new(saved_pin_params)
        
        if @saved_pin.save
            render :show
        else
            render json: @saved_pin.errors.full_messages, status: 401
        end
    end

    # Not actually deleting any pins/boards but just delete a pins association to a board
    def destroy
        @saved_pin = SavedPin.find_by(id: params[:id])

        if @saved_pin && @saved_pin.destroy
            render :json ["The pin has been removed from the board"]
        else
            render :json ["No pin on board to delete"], status: 404
        end
    end

    def saved_pin_params
        params.require(:saved_pin).permit(:board_id, :pin_id)
    end
end
