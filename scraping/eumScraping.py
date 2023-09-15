from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

option = webdriver.ChromeOptions()
option.add_experimental_option('detach', True)

driver = webdriver.Chrome(options=option)

driver.get('https://www.eum.go.kr/web/am/amMain.jsp')

#서울특별시 서대문구 북가좌동 일반 456번지 공시 지가를 조회해주세요

sido = Select(driver.find_element(By.XPATH,'//*[@id="selSido"]'))
sido.select_by_visible_text('서울특별시')
driver.implicitly_wait(1)

gun = Select(driver.find_element(By.XPATH,'//*[@id="selSgg"]'))
gun.select_by_visible_text('서대문구')
driver.implicitly_wait(1)

dong = Select(driver.find_element(By.XPATH,'//*[@id="selUmd"]'))
dong.select_by_visible_text('북가좌동')
driver.implicitly_wait(1)

bobn = driver.find_element(By.XPATH,'//*[@id="bobn"]')
bobn.send_keys(456)

# bubn = driver.find_element(By.XPATH,'//*[@id="bubn"]')
# bubn.send_keys(1)

button = driver.find_element(By.XPATH, '//*[@id="frm"]/fieldset/div[3]/p/span/a')
button.click()

price = driver.find_element(By.XPATH, '//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(price.text)