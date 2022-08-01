# json.extract! @board, :id, :name, :details, :user_id, :public

json.board do 
    json.extract! @board, :id, :name, :details, :user_id, :public
end


    json.pins do
        @pins.each do |pin|
            json.set! pin.id do
                json.extract! pin, :id, :title, :description
                json.imageUrl url_for(pin.image)
            end
        end
    end
