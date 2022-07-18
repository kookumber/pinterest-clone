class UpdateStatusDefaultToFalsePublic < ActiveRecord::Migration[5.2]
  def change
    change_column_default :boards, :public, false
  end
end
