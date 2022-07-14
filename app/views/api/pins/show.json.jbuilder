json.extract! @pin, :id, :title, :description, :user_id
json.imageUrl url_for(@pin.image)