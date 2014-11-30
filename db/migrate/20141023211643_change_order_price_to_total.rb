class ChangeOrderPriceToTotal < ActiveRecord::Migration
  def change
    rename_column :orders, :price, :total
  end
end
