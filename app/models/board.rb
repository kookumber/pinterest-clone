class Board < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :public, inclusion: { in: [true, false] }
    # validates :public, exclusion: { in: [nil] }

    before_validation :defaults, :on => :create

    def defaults
        self.public ||= false
    end

    
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
    
    def featured_pins
        pins = self.saved_pins_on_board.where(board_id: self.id).limit(3)
    end

end
