from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.leagueoflegends.com/ko-kr/')
loginButton = driver.find_element(By.CSS_SELECTOR, '#riotbar-right-content > div.undefined.riotbar-account-reset._2f9sdDMZUGg63xLkFmv-9O.riotbar-account-container > div:nth-child(1) > a')
loginButton.click()
driver.implicitly_wait(10)

idInput = driver.find_element(By.NAME, 'username')
passwordInput = driver.find_element(By.NAME,'password')

idInput.send_keys('test')
passwordInput.send_keys('test')

#/
enterLoginInfo = driver.find_element(By.CSS_SELECTOR, 'body > div:nth-child(4) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > button')
enterLoginInfo.click()