class Api::V2::JobsController < ApplicationController
  def index
    render json: "v2 jobs"
  end
end
