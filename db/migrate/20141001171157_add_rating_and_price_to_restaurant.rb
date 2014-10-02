class AddRatingAndPriceToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :rating, :integer, default: 0
    add_column :restaurants, :price, :integer, default: 0
  end
end
