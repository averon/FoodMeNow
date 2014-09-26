class AddUserIdToMenuItem < ActiveRecord::Migration
  def change
    add_column :menu_items, :user_id, :integer
  end
end
