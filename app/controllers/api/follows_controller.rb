class Api::FollowsController < ApplicationController

    def index
        @follows = Follow.all
        render :index
    end

    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages
        end

    end
    
    def destroy
        @follow = Follow.find_by(id: params[:id])
        
        if @follow && @follow.destroy!
            render :index
        else
            render json: ['No existing follow to destroy']
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:user_id, :following_id)
    end
end
