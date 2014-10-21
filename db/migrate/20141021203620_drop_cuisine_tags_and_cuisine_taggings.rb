class DropCuisineTagsAndCuisineTaggings < ActiveRecord::Migration
  def change
    drop_table :cuisine_taggings
    drop_table :cuisine_tags
  end
end
