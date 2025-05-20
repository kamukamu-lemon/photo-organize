FactoryBot.define do
  factory :user do
    nickname              { Faker::Internet.username }
    email                 { Faker::Internet.email }
    password              { "1a#{Faker::Internet.password(min_length: 6)}" }
    password_confirmation { password }
  end
end
