namespace :script do
	desc "Scrape for currency and save them to the DB"
	task :scrape => :environment do
		ruby "script/mine.rb"
	end

	desc "Calculate Averages and send JSON to Redis"
	task :redis => :environment do
		ruby "script/generateRedis.rb"
	end

	
end

namespace :test do
	desc "Test basic functionality of Webpage"
	task :basic => :environment do
		ruby "test/seleniumTest.rb"
	end
end