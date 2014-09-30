class CreatePaymentMethods < ActiveRecord::Migration
  def change
    create_table :payment_methods do |t|
      t.string :card_number, null: false
      t.string :exp_date, null: false
      t.string :cvv, null: false
      t.string :zip, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :payment_methods, :user_id
  end
end
