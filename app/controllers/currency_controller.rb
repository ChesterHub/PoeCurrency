class CurrencyController < ApplicationController

  def index
  	CurrencyWorker.perform_async()
  end

  def show
  end

end
