class Activity < ApplicationRecord
    belongs_to :meditations
    belongs_to :cardios
    belongs_to :yogas
    belongs_to :users
end
