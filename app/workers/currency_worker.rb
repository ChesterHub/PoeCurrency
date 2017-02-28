class CurrencyWorker
	include Sidekiq::Worker
	sidekiq_options retry: false

	def perform()
		puts "SIDEKIQ worker generating"
	end


end