class AddCuisineColumnToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :cuisine, :string, unique: true
  end
end
