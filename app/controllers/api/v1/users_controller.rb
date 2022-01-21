class Api::V1::UsersController < ApplicationController

    def create 
        user = User.create(user_params)
        if user.valid?
            token = encode_token(user_id: user.id)
            render json: { user: UserSerialier.new(user), jwt: token }, status: :created}
        else
            render json: {error: "Could not create user!"}, status: :unprocessable_entity
        end

    end

    private

    der user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
