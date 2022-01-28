class ActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Activity.all, status: :ok
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def update
        activity = find_activity
        activity.update(activity_params)
        render json: activity
    end

    def destroy
        activity = find_activity
        activity.destroy
        head :no_content
    end

    private

    def find_activity
        Activity.find(params[:id])
    end

    def activity_params
        params.permit(:name, :length, :minutes, :notes, :yoga_type, :workout, :distance)
    end

    def render_not_found_response
        render json: { error: "Activity not found" }, status: :not_found
    end

end
