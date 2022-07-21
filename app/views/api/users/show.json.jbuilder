json.user do 
    json.extract! @user, :id, :username, :email
    # json.set! name, json.array! @user.boards, :name

end

json.boards do
    @boards.each do |board|
       json.set! board.id do 
            json.extract! board, :id, :name, :details
       end
    end
end

json.board_pins do
    @board_pins.each do |board_pin|
        json.set! board_pin.id do
            json.extract! board_pin, :id, :title, :description, :user_id
            json.imageUrl url_for(board_pin.image)
        end
    end
end
