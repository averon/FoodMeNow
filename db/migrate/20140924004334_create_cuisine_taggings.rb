class CreateCuisineTaggings < ActiveRecord::Migration
  def change
    create_table :cuisine_taggings do |t|
      t.integer :cuisine_tag_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

    add_index :cuisine_taggings, [:cuisine_tag_id, :restaurant_id], unique: true
  end
end
