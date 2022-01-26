class ActivitiesController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_bad_thing
#     def create
#         activity = Activity.create!(activities_params)
#         render json: activity, status: :created
#     end

#     private

#     def activities_params
#         params.permit(:yoga_id, :cardio_id, :meditations_id)
#     end

#     def render_bad_thing e
#         render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
#     end

end
