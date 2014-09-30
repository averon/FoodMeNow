class AddCurrentBillingToPaymentMethod < ActiveRecord::Migration
  def change
    add_column :payment_methods, :current_billing, :boolean, default: false
  end
end
