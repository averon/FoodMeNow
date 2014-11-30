# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141024170042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "delivery_addresses", force: true do |t|
    t.string   "full_name",                       null: false
    t.string   "street_address",                  null: false
    t.string   "city",                            null: false
    t.string   "state",                           null: false
    t.string   "postal_code",                     null: false
    t.string   "tel"
    t.integer  "user_id",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "current_address", default: false
  end

  add_index "delivery_addresses", ["user_id"], name: "index_delivery_addresses_on_user_id", using: :btree

  create_table "menu_categories", force: true do |t|
    t.string   "name",          null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "ord",           null: false
  end

  add_index "menu_categories", ["name", "restaurant_id"], name: "index_menu_categories_on_name_and_restaurant_id", unique: true, using: :btree
  add_index "menu_categories", ["name"], name: "index_menu_categories_on_name", using: :btree
  add_index "menu_categories", ["restaurant_id"], name: "index_menu_categories_on_restaurant_id", using: :btree

  create_table "menu_items", force: true do |t|
    t.string   "name",             null: false
    t.integer  "price",            null: false
    t.integer  "menu_category_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "img_path"
    t.text     "description"
  end

  add_index "menu_items", ["menu_category_id"], name: "index_menu_items_on_menu_category_id", using: :btree
  add_index "menu_items", ["name", "menu_category_id"], name: "index_menu_items_on_name_and_menu_category_id", unique: true, using: :btree
  add_index "menu_items", ["name"], name: "index_menu_items_on_name", using: :btree

  create_table "order_items", force: true do |t|
    t.string   "name"
    t.integer  "price"
    t.integer  "order_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "order_items", ["order_id"], name: "index_order_items_on_order_id", using: :btree

  create_table "orders", force: true do |t|
    t.integer  "user_id"
    t.integer  "tip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "total"
    t.integer  "tax"
    t.integer  "restaurant_id"
    t.integer  "subtotal"
  end

  add_index "orders", ["restaurant_id"], name: "index_orders_on_restaurant_id", using: :btree
  add_index "orders", ["user_id"], name: "index_orders_on_user_id", using: :btree

  create_table "payment_methods", force: true do |t|
    t.string   "card_number",                     null: false
    t.string   "exp_date",                        null: false
    t.string   "cvv",                             null: false
    t.string   "zip",                             null: false
    t.integer  "user_id",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "current_billing", default: false
  end

  add_index "payment_methods", ["user_id"], name: "index_payment_methods_on_user_id", using: :btree

  create_table "restaurants", force: true do |t|
    t.string   "name",                       null: false
    t.string   "street_address",             null: false
    t.string   "city",                       null: false
    t.string   "state",                      null: false
    t.integer  "zip",                        null: false
    t.string   "telephone",                  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "rating",         default: 0
    t.integer  "price",          default: 0
    t.string   "cross_streets"
    t.string   "img_path"
    t.string   "cuisine"
  end

  add_index "restaurants", ["cuisine"], name: "index_restaurants_on_cuisine", using: :btree
  add_index "restaurants", ["name"], name: "index_restaurants_on_name", using: :btree
  add_index "restaurants", ["street_address"], name: "index_restaurants_on_street_address", unique: true, using: :btree
  add_index "restaurants", ["telephone"], name: "index_restaurants_on_telephone", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
