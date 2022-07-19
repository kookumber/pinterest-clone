class Follow < ApplicationRecord

    validates :user_id, presence: true

    belongs_to :user, #This user is the person that is following 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :following, #This following is the other user that the above user is following
        primary_key: :id,
        foreign_key: :following_id,
        class_name: :User


end
