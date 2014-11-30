class ChangeOrderItemUserIdToOrderId < ActiveRecord::Migration
  def change
    rename_column :order_items, :user_id, :order_id
  end
end
