class OrderItem < ActiveRecord::Base
  validates :name, :price, :order_id, presence: true

  belongs_to :order
end
