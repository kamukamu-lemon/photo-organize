require 'rails_helper'

RSpec.describe Photo, type: :model do
  before do
    @photo = FactoryBot.build(:photo)
  end

  describe '写真登録機能' do
    context '写真登録ができる場合' do
      it 'titleとimagesが存在していてれば保存できる' do
        expect(@photo).to be_valid
      end
      it 'memoが空でも保存できる' do
        @photo.memo = ''
        expect(@photo).to be_valid
      end
    end

    context '登録できないとき' do
      it 'titleが空では登録できない' do
        @photo.title = ''
        @photo.valid?
        expect(@photo.errors.full_messages).to include("Title can't be blank")
      end

      it 'imagesが空では登録できない' do
        @photo.images = []
        @photo.valid?
        expect(@photo.errors.full_messages).to include("Images can't be blank")
      end

      it 'userが紐付いていないと保存できない' do
        @photo.user = nil
        @photo.valid?
        expect(@photo.errors.full_messages).to include('User must exist')
      end
    end
  end
end
