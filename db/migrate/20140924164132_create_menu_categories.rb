class CreateMenuCategories < ActiveRecord::Migration
  def change
    create_table :menu_categories do |t|
      t.string :name, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :menu_categories, :name
    add_index :menu_categories, :restaurant_id
    add_index :menu_categories, [:name, :restaurant_id], unique: true
  end
end
