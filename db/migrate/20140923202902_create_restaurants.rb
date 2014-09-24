class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :street_address, null: false
      t.string :city, null: false 
      t.string :state, null: false 
      t.integer :zip, null: false  
      t.integer :telephone, null: false 

      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :street_address, unique: true
    add_index :restaurants, :telephone, unique: true
  end
end
