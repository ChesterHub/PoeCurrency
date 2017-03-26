require File.expand_path('../../config/environment',  __FILE__)

test_pass = 0
test_fail = 0
test_errors = []

driver = Selenium::WebDriver.for :chrome
driver.navigate.to 'http://localhost:3000'
# driver.navigate.to 'http://poeexchange.com/'

sleep 1

# Test for title
if driver.title == 'PoE Exchange'
	puts "Test1: Title found.".green
	test_pass += 1
else
	puts test_errors << "Test1: Title not found.".red
	test_fail += 1
end

# Test for react elements
ps = driver.page_source
if ps.include?('<div data-react-class="Currency"')
	puts "Test2: React Class 'Currency' found.".green
	test_pass += 1
else
	puts test_errors << "Test2: React Class 'Currency' not found.".red
	test_fail += 1
end

if ps.include?('<div data-react-class="AllCurrency"')
	puts "Test3: React Class 'AllCurrency' found.".green
	test_pass += 1
else
	puts test_errors << "Test3: React Class 'AllCurrency' not found.".red
	test_fail += 1
end


# -------------------INTRO SECTION-------------------
# Check for intro combo boxes
begin
	league = driver.find_element(:class_name, "select-forms-first").find_element(:class_name, "combo-boxes")
	puts "Test4: League Combobox found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test4: League Combobox not found. #{e}".red
	test_fail += 1
end

begin
	filter = driver.find_element(:class_name, "select-forms-third").find_element(:class_name, "combo-boxes")
	puts "Test5: Filter Combobox found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test5: Filter Combobox not found. #{e}".red
	test_fail += 1
end

begin
	ratio = driver.find_element(:class_name, "select-forms-second").find_elements(:class_name, "combo-boxes")
	puts "Test6: Ratio Comboboxes found.".green
	test_pass += 1
rescue
	puts test_errors << "Test6: Ratio Comboboxes not found. #{e}".red
	test_fail += 1
end

# Test intro comboboxes
if league && filter && ratio
	puts "----Test7: testing...----".yellow
	sleep 1

	league.send_keys "Standard"
	filter.send_keys "One Day Ago"
	ratio[0].send_keys "Exalted Orb"
	ratio[1].send_keys "Chaos Orb"

	# Check for results
	ps = driver.page_source
	if ps.include?('<div class="image-ratios fadeinfast"')
		puts "   -Test7-1: Currency Text found.".green
		test_pass += 1
	else
		puts test_errors << "Test7-1: Currency Text not found.".red
		test_fail += 1
	end

	if ps.include?('<img class="images" src="currency/ChaosOrb.png"')
		puts "   -Test7-2: ChaosOrb image found.".green
		test_pass += 1
	else
		puts test_errors << "Test7-2: ChaosOrb image not found.".red
		test_fail += 1
	end

	if ps.include?('<p id="currency-text"')
		puts "   -Test7-3: Currency Results found.".green
		test_pass += 1
	else
		puts test_errors << "Test7-3: Currency Results not found.".red
		test_fail += 1
	end

else
	puts test_errors << "Test7: Missing combobox, cannot test functionalities.".red
	test_fail += 3
end


# -------------------TABLE SECTION-------------------
# Check for table comboboxes
begin
	filter_table = driver.find_element(:class_name, "select-forms-fourth").find_element(:class_name, "combo-boxes-table")
	puts "Test8: Filter Table Combobox found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test8: Filter Table Combobox not found. #{e}".red
	test_fail += 1
end

begin
	league_table = driver.find_element(:class_name, "table-form").find_element(:class_name, "combo-boxes-table")
	puts "Test9: League Table Combobox found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test9: League Table Combobox not found. #{e}".red
	test_fail += 1
end

# check for table
begin
	table = driver.find_element(:class_name, "currency-table")
	puts "Test10: Table found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test10: Table not found. #{e}".red
	test_fail += 1
end


# Test table comboboxes
if filter_table && league_table && table
	puts "----Test11: testing...----".yellow
	sleep 1

	filter_table.send_keys "One Week Ago"
	league_table.send_keys "Legacy"

	# check for results
	ps = driver.page_source
	if ps.include?('<th class="table-headers"><img src="currency/ArmourerScrap.png"')
		puts "   -Test11-1: Armourer Scrap Image found.".green
		test_pass += 1
	else
		puts test_errors << "Test11-1: Armourer Scrap Image not found.".red
		test_fail += 1
	end

	if ps.include?('<td class="table-values animation-hover"><span>1:</span><!-- react-text: 1763 --> 1<!-- /react-text --></td>')
		puts "   -Test11-2: VaalOrb 1:1 ratio found.".green
		test_pass += 1
	else
		puts test_errors << "Test11-2: VaalOrb 1:1 ratio not found.".red
		test_fail += 1
	end


else
	puts test_errors << "Test11: Missing Tables or Comboboxes, cannot test functionalities.".red
	test_fail += 2
end

# check for faq
begin
	faq = driver.find_element(:id, "faq")
	puts "Test12: FAQ found.".green
	test_pass += 1
rescue Exception => e
	puts test_errors << "Test12: FAQ not found. #{e}".red
	test_fail += 1
end



# Results
sleep 1
puts "--" * 30
if test_errors.any?
	puts "#{test_pass} tests passed.".green
	puts "#{test_fail} tests failed.".red
	puts "----errors:".yellow
	test_errors.each { |e| puts e.red }
else
	puts "ALL #{test_pass} TESTS PASSED!".green
end

sleep 5





