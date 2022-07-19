class User < ApplicationRecord

    attr_reader :password

    after_initialize :ensure_session_token

    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    has_many :pins,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Pin
    
    has_many :boards,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Board
    
    has_many :followers, #These are the users that follow this specific user
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Follow
    
    has_many :followings, #These are the users that this specific user is following
        primary_key: :id,
        foreign_key: :following_id,
        class_name: :Follow

        # Class method for finding a user ONLY if we have the correct email and password
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        # Set temporary instance variable so that we can validate length
        @password = password
        # Create a password_digest so that we do not have to store the plain-text password in our DB
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        # Use BCrypt's built-in method for checking if the password provided is the user's password
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        # Generate the initial session_token so that we pass the validation
        # This method runs right after the model is initialized, before any validations are run
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
