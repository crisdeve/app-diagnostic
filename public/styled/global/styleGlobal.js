// styles/global.js
import css from 'styled-jsx/css'
import theme from '../theme';

export default css.global`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${theme.fontFamily.segoe} !important;

}


.mt-10 {
  margin-top: 10px;
}
  
.container{
  width: 100%;
  position: absolute;
  top: 0;
}

.Polaris-Tabs__Wrapper {
  background: #f6f6f7;
}

.card-diagnostic--tab{
  width: 55%; 
}

.card-diagnostic--customize{
  width: 40%;
}

.content-tab-customize{
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
}

.input-text, .input-textarea{
  margin: 4rem 0;
}

.input-question > .input {
  width: 100%;
}

.input-colors > .input {
  height: 50px;
  margin: 0;
  padding: 0px;
  width: 16%;
  border: none;
}

textarea {
  width: 100%;
  height: 75px;
}

.setting-required > .check-custom {
  width: 20px ;
}

.setting-multiple > .check-custom {
  width: 20px ;
}
.setting-recommended > .check-custom {
  width: 20px ;
}

.setting-score > .check-custom {
  width: 20px ;
}

/* sidebar */

.link-close {
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transition: .1s;
  
}

.link-close > div {
    display: flex;
    align-items: center;
    justify-content: center;
}
path {
  fill: #5C5F62;
}

.link-close[aria-current]path {
  fill: #7551DC;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  height: 100vh;
  position: absolute;
  background: #fff;
  transition: .3s;
  z-index: 1000;

}

.open-close {
  width: 16px;
  margin-top: 20px;
  position: absolute;
  top: 260px;
  
  cursor: pointer;
}

.arrow-close {
  transform: rotate(180deg);
  left: 175px;
  transition: .3s;
}
.arrow-open {
  left: 38px;
  transition: .3s;
}

.link-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
}

.link-container > a {
  text-decoration: none;
}

.sidebar-open {
  display: flex;
  flex-direction: column;
  width: 184px;
  height: 100vh;
  position: absolute;
  background: #fff;
  transition: .3s;
  z-index: 1000;
}

.link-open {
  display: flex;
  height: 33px;  
  align-items: center;
  gap: 15px;
  transition: .1s;
  margin: 0px 6px 12px 6px;
  padding-left: 11px;

}

.link-open > p {
  color: #202223;
  font-weight: 600;
  font-size: 14px;
}

.link-open > div {
  display: flex;
  align-items: center;
  justify-content: center;
}


.link-open[aria-current] {
  position: relative;
  background: #F2EDFF;
  border-radius: 5px;
  padding-left: 11px;
}

.link-open[aria-current]::after {
    position: absolute;
    content: "";
    height: 33px;
    width: 2px;
    background: #7551DC;
    left: -6px;
    top: 0;


}
.link-open[aria-current]p {
  color: #7551DC;
}
.link-open[aria-current]path {
  fill: #7551DC;
}


`