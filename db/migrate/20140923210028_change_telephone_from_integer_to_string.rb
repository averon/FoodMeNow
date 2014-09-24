class ChangeTelephoneFromIntegerToString < ActiveRecord::Migration
  def change
    change_column(:restaurants, :telephone, :integer)
  end
end
