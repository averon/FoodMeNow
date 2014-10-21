class AddIndexToCuisineOnRestaurant < ActiveRecord::Migration
  def change
    add_index :restaurants, :cuisine
  end
end
