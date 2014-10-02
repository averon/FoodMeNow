class AddCrossStreetsToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :cross_streets, :string
  end
end
