json.(@user, :id, :email, :session_token)

json.current_address @user.current_address, :full_name, :street_address, :city, :state, :postal_code, :tel

json.delivery_addresses @user.delivery_addresses do |delivery_info|
  json.full_name      delivery_info.full_name
  json.street_address delivery_info.street_address
  json.city           delivery_info.city
  json.state          delivery_info.state
  json.postal_code    delivery_info.postal_code
  json.tel            delivery_info.tel
end

json.current_billing do
  json.card_number @user.current_billing.card_number.scan(/.{4}|.+/).join("-")
  json.exp_date    @user.current_billing.exp_date
  json.cvv         @user.current_billing.cvv
  json.zip         @user.current_billing.zip
end

json.payment_methods @user.payment_methods do |payment_method|
  json.card_number payment_method.card_number.scan(/.{4}|.+/).join("-")
  json.exp_date    payment_method.exp_date
  json.cvv         payment_method.cvv
  json.zip         payment_method.zip
end
