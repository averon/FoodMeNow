class MenuCategory < ActiveRecord::Base
  validates :name, :restaurant_id, presence: true

  belongs_to :restaurant
  has_many :menu_items
end
