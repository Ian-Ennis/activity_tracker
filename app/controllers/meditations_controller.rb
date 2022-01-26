class MeditationsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :oopsies

    def index
        render json: Meditation.all, status: :ok
    end

    def show
       render json: find_meditation, status: :ok
    end

    def destroy
        meditation = find_meditation
        meditation.destroy
        head :no_content
    end

    private

    def find_meditation
        Meditation.find(params[:id])
    end

    def oopsies
        render json: {"error": "Meditation not found"}, status: :not_found
    end

end
