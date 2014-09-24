class AddOrdToMenuCategories < ActiveRecord::Migration
  def change
    add_column :menu_categories, :ord, :integer, null: false
  end
end
