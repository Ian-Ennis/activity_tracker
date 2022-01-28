class ApplicationController < ActionController::API
  before_action :authorized

  # make key something long and indecipherable and store it in an environment cariable somewhere that isnt checked-in. That way its not attached. 
  def encode_token(payload)
    JWT.encode(payload, 'sa89243hcx82349$@$!@+ASDWD{:AC(*ASD#')
  end

  def auth_header
    #  Authorization: Bearer asoijasdojadsoj(token)
    request.headers["Authorization"]
  end


  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'sa89243hcx82349$@$!@+ASDWD{:AC(*ASD#', true, algorithm: 'HS256')
      rescue
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    # negating twice to force something to be true or false (rubyism !!)
    !!current_user
  end

  def authorized
    if logged_in?
      true
    else
      render json: {message: "Please log in!"}, status: :unauthorized
    end
  end

end
