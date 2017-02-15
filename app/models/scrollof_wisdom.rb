class ScrollofWisdom < ApplicationRecord
	belongs_to :league

	validates :ign, presence: true
	validates :league_id, presence: true
end
