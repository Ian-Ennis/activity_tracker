class User < ApplicationRecord
    has_many :activities
    
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false}

    def authenticate(password)
        if BCrypt::Password.new(self.password_digest) == password
            self
        else
            false
        end
    end
end
