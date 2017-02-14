require 'open-uri'
require 'nokogiri'

url = "http://currency.poe.trade/search?league=Breach&online=&want=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23&have=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"

test_url = "http://currency.poe.trade/search?league=Breach&online=x&want=1-2-3-4-5-6&have=1-2-3-4-5-6"

document = open(test_url)
content = document.read
parsed_content = Nokogiri::HTML(content)

# puts parsed_content.css('.displayoffer').css('.displayoffer-primary').css('.currency-name').length

currency_array = parsed_content.css('.displayoffer').css('.row').css('.large-6').css('.displayoffer-primary')


def show_currency(arr)
	arr.each do |div|
		currency_receiving = div.css('.currency-name')[0].inner_text.strip!
		currency_offering = div.css('.currency-name')[1].inner_text.strip!
		value = div.css('.displayoffer-middle').inner_text.split(' ')

		puts "#{value[2]} #{currency_offering}(s) will get you #{value[0]} #{currency_receiving}(s)"
		puts "---------------------------------------------------------------------------"
	end

	p arr.length
end

show_currency(currency_array)

# p currency_array[0].css(".currency-name").inner_text
# p currency_array[0].css('.displayoffer-middle').inner_text.split(' ')
# puts "----------------------------------"
# puts currency_array[2].css('.currency-name').inner_text
# puts "----------------------------------"
# puts currency_array[3].css('.currency-name').inner_text

# puts currency_array.length
