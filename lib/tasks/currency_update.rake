namespace :scripts do
	desc "Scrape for currency and save them to the DB"
	task :scrape => :environment do
		ruby "script/mine.rb"
	end

	desc "Calculate Averages and send JSON to Redis"
	task :average => :environment do
		ruby "script/generateRedis.rb"
	end

	
end