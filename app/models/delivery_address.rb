class DeliveryAddress < ActiveRecord::Base
  validates :full_name, :street_address, :city, :state, :postal_code, :user_id, presence: true
  belongs_to :user
end
