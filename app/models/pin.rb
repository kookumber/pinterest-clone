class Pin < ApplicationRecord

    validates :title, :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    # def ensure_photo  
    #     unless self.phot.attached?
    #         errors[:photo] << "Must include a picture"
    #     end
    # end
end
