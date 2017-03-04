class CurrencyController < ApplicationController

  def index
  	# CurrencyWorker.perform_async()
  	@currency = JSON.parse($redis.get("currency"))
  end


end
