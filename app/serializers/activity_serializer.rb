class ActivitySerializer < ActiveModel::Serializer
  belongs_to :user
  
  attributes :id, :name, :minutes
end
