class Activity < ApplicationRecord
    belongs_to :user, optional: true
end
