class CreateDeliveryAddresses < ActiveRecord::Migration
  def change
    create_table :delivery_addresses do |t|
      t.string :full_name, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :postal_code, null: false
      t.string :tel
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :delivery_addresses, :user_id
  end
end
