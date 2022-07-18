@boards.each do |board| #Loop through all users boards
    json.set! board.id do 
        json.extract! board, :id, :name, :details, :user_id #Get items for each board
        json.pins board.pins.each do |pin| #Run association and get pins linked to board
            json.set! pin.id do
                json.extract! pin, :id, :title, :description, :user_id #Get pin data for board
                json.imageUrl url_for(pin.image) #Also get pin image so we can display first image in board selector
            end
        end
    end
end

