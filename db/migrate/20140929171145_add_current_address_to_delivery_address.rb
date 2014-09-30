class AddCurrentAddressToDeliveryAddress < ActiveRecord::Migration
  def change
    add_column :delivery_addresses, :current_address, :boolean, default: false
  end
end
