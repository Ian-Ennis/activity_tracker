class CardiosController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :oopsies

def index
    render json: Cardio.all, status: :ok
end

def show
    render json: find_cardio, status: :ok
end

def destroy
    cardio = find_cardio
    cardio.destroy
    head :no_content
end

private

def find_cardio
    Cardio.find(params[:id])
end

def oopsies
    render json: {"error": "Cario not found"}, status: :not_found
end

end
