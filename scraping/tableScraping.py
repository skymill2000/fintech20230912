from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.melon.com/chart/index.htm')
#/html/body/section/section/article/div[1]/h2
table = driver.find_element(By.XPATH, '//*[@id="frm"]/div/table/tbody');
tableRows = table.find_elements(By.TAG_NAME, 'tr')

for index, value in enumerate(tableRows):
    title = value.find_elements(By.TAG_NAME, 'td')[5].text
    print(title)
    
    #좋아요 갯수 출력
    likes = value.find_elements(By.TAG_NAME, 'td')[7].text
    print(likes)