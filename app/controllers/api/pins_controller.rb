class Api::PinsController < ApplicationController
    def index
        @pins = Pin.order("created_at DESC")
        render :index
    end

    def show
        @pin = Pin.find_by(id: params[:id])
        render :show
    end

    def create
        @pin = Pin.new(pin_params)
        
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 401
        end
    end

    def update
         @pin = Pin.find_by(id: params[:id])

         if @pin.update(pin_params)
            render :show
         else
            render json: @pin.errors.full_messages, status: 401
         end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])

        if @pin && @pin.destroy
            render json: ["pin was deleted"]
        else
            render json: @pin.errors.full_messages, status: 401
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :description, :user_id, :image)
    end
end
