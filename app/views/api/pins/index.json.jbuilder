@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :title, :description, :user_id
    end
end

# state will look as so...
# {
#     1: 
#         {
#             id: 1,
#             title: 'Title Name',
#             description: 'Description of pin here...',
#             user_id: 2
#         },
#     2: {
#             id: 2,
#             title: 'Title Name Again',
#             description: 'Description of pin second time...',
#             user_id: 1
#         },
#     3: {...}
# }