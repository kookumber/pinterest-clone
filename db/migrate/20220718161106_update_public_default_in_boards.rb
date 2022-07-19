class UpdatePublicDefaultInBoards < ActiveRecord::Migration[5.2]
  def change
    # Removing board and adding back to remove null: false 
    remove_column :boards, :public

    add_column :boards, :public, :boolean, default: false
  end
end
