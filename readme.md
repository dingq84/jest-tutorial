# 測試分享
## 前言
測試不只是可以增加對程式碼的信心，也是變相思考編寫程式的邏輯，在剛開始學習寫測試的時候，是不是常常碰到下列的問題，如果是不用太煩惱，這正是你成長的一個重要過程。  
1.程式邏輯太過複雜，無法測試  
2.A function牽涉太多function，要實現執行環境太繁瑣  
3. 

---

## 大綱
1. **Jest**
  * 介紹
  * 環境部署
  * Jest Cli簡介
  * descirbe、it(test)、expect
  * 常用matcher
  * mock  
2. **React-test-library**
3. **vue-unit-test**
4. **實戰**
  * Normal function
  * Asynchronous function
  * Api  

---

## 一、Jest
### 1.介紹  
Jest是一套由Facebook開發且維護的單元測試工具，是由Jasmine發展過來的，語法十分相似，且自帶mock function，可協助模擬測試環境，不需額外下載套件，也可直接在測試裡面使用Promise、Async/await，也提供諸多斷言器和覆蓋率報告，還有相當特別的快照(Snapshot)，而且已納入Create-React-App標配的測試工具，Vue cli也可以選擇Jest做為預設測試工具，能有個理由不用他嗎？
### 2.環境部署
  >如果是使用Vue、React等等框架套件的朋友們，套件所提供的create project都可以直接設定完Jest基本環境，所以請直接跳過這一part
  1. 下載Jest  

  <code>
    npm i -S jest  (yarn add jest)  
  </code>  

  2. package.json新增一個scripts, 如下圖，因為我們並非將jest安裝在全局，因此需要透過npm去執行jest，如果希望直接使用jest cli的話，請在上一點改成npm i -g jest，安裝在全局

      <img src="./images/Jest/scripts.png" alt="'test': 'jest'" width="250" />  
  3. 執行npm run test，可看到下圖
    <img src="./images/Jest/npm-run-test.png" alt="'test': 'jest'" width="250" />

### 3.Jest Cli簡介
### 4.describe、it(test)、expect
### 5.常用matcher
### 6.mock

---