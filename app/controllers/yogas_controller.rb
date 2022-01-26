class YogasController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :oopsies

def index
    render json: Yoga.all, status: :ok
end

def show
    render json: find_yoga, status: :ok
end

def destroy
    yoga = find_yoga
    yoga.destroy
    head :no_content
end

private

def find_yoga
    Yoga.find(params[:id])
end

def oopsies
    render json: {"error": "Yoga not found"}, status: :not_found
end

end
