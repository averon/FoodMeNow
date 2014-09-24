class MenuItem < ActiveRecord::Base
  validates :name, :price, presence: true

  belongs_to :menu_category
  has_one :restaurant, through: :menu_category, source: :restaurant
end
