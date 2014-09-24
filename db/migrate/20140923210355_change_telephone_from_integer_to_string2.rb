class ChangeTelephoneFromIntegerToString2 < ActiveRecord::Migration
  def change
    change_column(:restaurants, :telephone, :string)
  end
end
