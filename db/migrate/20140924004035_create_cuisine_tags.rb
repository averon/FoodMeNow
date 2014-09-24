class CreateCuisineTags < ActiveRecord::Migration
  def change
    create_table :cuisine_tags do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :cuisine_tags, :name, unique: true
  end
end
