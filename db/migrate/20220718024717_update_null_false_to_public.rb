class UpdateNullFalseToPublic < ActiveRecord::Migration[5.2]
  def change
    change_column_null :boards, :public, false
  end
end
