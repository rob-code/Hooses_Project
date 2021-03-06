class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :owner_groups
  has_many :profiles
  has_many :topics
  has_many :messages
  has_many :kitchen_table_posts
  has_many :houses, through: :owner_groups, source: :houses 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


end
