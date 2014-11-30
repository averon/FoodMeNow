class AddTaxAndRestaurantToOrder < ActiveRecord::Migration
  def change
    rename_column :orders, :tip_amount, :tip
    add_column :orders, :tax, :integer
    add_column :orders, :restaurant_id, :integer
    add_index :orders, :restaurant_id
  end
end
