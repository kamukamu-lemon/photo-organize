class Photo < ApplicationRecord
  belongs_to :user
  has_many_attached :images

  validates :title, :images, presence: true
  #validates :images, 
            #length: { minimum: 1, maximum: 10, too_short: 'must include at least %<count> image',
                      #too_long: 'cannot include more than %<count> images' }
end
