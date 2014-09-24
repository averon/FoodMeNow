class Restaurant < ActiveRecord::Base
  validates :name, :street_address, :city, :state, :zip, :telephone, presence: true

  has_many :cuisine_taggings
  has_many :cuisine_tags, through: :cuisine_taggings, source: :cuisine_tag
  has_many :menu_categories
  has_many :menu_items, through: :menu_categories, source: :menu_items
end
