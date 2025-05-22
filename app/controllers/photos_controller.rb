class PhotosController < ApplicationController
before_action :set_photo, only: [:show, :edit, :update, :destroy]

  def index
    @photos = Photo.all.order(created_at: :desc)
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      redirect_to authenticated_root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
   
  end

  def edit
   
  end

  def update
    if @photo.update(photo_params)
      redirect_to authenticated_root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @photo.destroy
    redirect_to authenticated_root_path
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :memo, { images: [] }).merge(user_id: current_user.id)
  end

  def set_photo
    @photo =  Photo.find(params[:id])
  end

end
