class RemoveCurrentAddressIdFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :current_address_id
  end
end
