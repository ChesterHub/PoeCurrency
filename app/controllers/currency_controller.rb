class CurrencyController < ApplicationController

  def index
  	# CurrencyWorker.perform_async()
  	@currency = $redis.get("currency")
  end

  def show
  end

end
