if @follows 
    @follows.each do |follow|
        json.set! follow.id do
            json.extract! follow, :id, :user_id, :following_id
        end
    end
end