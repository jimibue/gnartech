class Api::V1::JobsController < ApplicationController
  def index
    render json: Job.all_with_skills
  end
end
