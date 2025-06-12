class Photo < ApplicationRecord
  belongs_to :user
  has_many_attached :images

  validates :title, :images, presence: true
  validates :images,
            length: { minimum: 1, maximum: 10, too_short: 'must include at least %<count> image',
                      too_long: 'cannot include more than %<count> images' }

  def self.ransackable_attributes(_auth_object = nil)
    %w[title memo created_at updated_at]
  end

  def self.ransackable_associations(_auth_object = nil)
    %w[user images_attachments images_blobs]
  end
end
