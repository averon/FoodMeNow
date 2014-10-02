class AddImgPathToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :img_path, :string
  end
end
