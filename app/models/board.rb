class Board < ApplicationRecord
    validates :name, :user_id, :public, presence: true
    validates :public, inclusion: { in: [true, false]}

    belongs_to :user,
        primary_key: :id,
        foreign_key:, :user_id,
        class_name: :User
end
