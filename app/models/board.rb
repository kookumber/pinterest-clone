class Board < ApplicationRecord
    validates :name, :user_id, :public, presence: true
    validates :public, inclusion: { in: [true, false]}

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :saved_pins_on_board,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :SavedPin
    
    has_many :pins,
        through: :saved_pins_on_board,
        source: :pin

end
