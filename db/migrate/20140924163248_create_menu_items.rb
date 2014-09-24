class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.integer :menu_category_id, null: false

      t.timestamps
    end

    add_index :menu_items, :name
    add_index :menu_items, :menu_category_id
    add_index :menu_items, [:name, :menu_category_id], unique: true
  end
end
