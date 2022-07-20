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
# debugger

# @user.boards do |board|
#     json.set! board.id do
#         json.extract! board, :id, :name, :details, :user_id
#     end
# end

# json.boards do
#     json.extract! @user.boards.each do |board|
#         json.set! board, :id, :name, :details, :user_id
#     end
# end

# json.pins do
#     json.extract! @user.board_pins.each do |pin|
#         json.set! pin, :title, :id, :image
#     end
# end