class ActivitySerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :name, :minutes, :notes, :yoga_type, :workout, :distance
end
