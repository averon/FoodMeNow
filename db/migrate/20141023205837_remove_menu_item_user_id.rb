class RemoveMenuItemUserId < ActiveRecord::Migration
  def change
    remove_column :menu_items, :user_id, :integer
  end
end
