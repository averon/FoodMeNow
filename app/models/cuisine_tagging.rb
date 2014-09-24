class CuisineTagging < ActiveRecord::Base
  validates :cuisine_tag_id, :restaurant_id, presence: true

  belongs_to :restaurant
  belongs_to :cuisine_tag
end
