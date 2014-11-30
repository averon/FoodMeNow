class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :delivery_addresses
  has_many :payment_methods  
  has_many :orders

  def self.find_by_credentials(email, password)
    found_user = self.find_by_email(email)
    
    return nil unless found_user  
    return found_user if found_user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def current_address
    delivery_addresses.find_by_current_address(true)
  end

  def current_billing
    payment_methods.find_by_current_billing(true)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
