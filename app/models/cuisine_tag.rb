class CuisineTag < ActiveRecord::Base
  validates :name, presence: true

  has_many :cuisine_taggings
  has_many :restaurants, through: :cuisine_taggings, source: :restaurant
end
