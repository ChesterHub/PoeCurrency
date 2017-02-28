class CurrencyController < ApplicationController

  def index
  	@chaos_avg = ChaosOrb.average(:Exalted_orb)
  end

  def show
  end

  def create
  end
end
