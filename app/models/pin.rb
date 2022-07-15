class Pin < ApplicationRecord

    validates :title, :user_id, presence: true

    has_one_attached :image
   
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :saved_pins_on_board,
        primary_key: :id,
        foreign_key: :pin_id,
        class_name: :SavedPin

    has_many :boards,
        through: :saved_pins_on_board,
        source: :board
    

    # def ensure_photo  
    #     unless self.phot.attached?
    #         errors[:photo] << "Must include a picture"
    #     end
    # end
end
