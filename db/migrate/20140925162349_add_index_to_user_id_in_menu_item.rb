class AddIndexToUserIdInMenuItem < ActiveRecord::Migration
  def change
    add_index :menu_items, :user_id
  end
end
