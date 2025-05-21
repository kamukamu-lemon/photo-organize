FactoryBot.define do
  factory :photo do
    title { Faker::Lorem.sentence }
    memo { Faker::Lorem.paragraph }

    association :user
    
    after(:build) do |photo|
      photo.images.attach(io: File.open('public/images/test_image.png'), filename: 'test_image.png')
    end
  end
end
