class ActivitySerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :name, :minutes, :notes, :workout, :distance
end
