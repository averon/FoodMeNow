class AddImgPathToMenuItem < ActiveRecord::Migration
  def change
    add_column :menu_items, :img_path, :string
  end
end
