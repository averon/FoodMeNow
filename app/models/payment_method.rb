class PaymentMethod < ActiveRecord::Base
  validates :card_number, :exp_date, :cvv, :zip, :user_id, presence: true
  validates :card_number, length: { is: 16 }
  validates :exp_date, length: { in: 5..7 }
  validates :cvv, length: { in: 3..4 }

  belongs_to :user
end
