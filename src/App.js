import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa6'
import './App.css';
function App() {
  let link = 'https://api.api-ninjas.com/v1/quotes'
  let key = 'hcYe3Wiq6noxtpr6WDzKvQ==YOyeaj5sPPKtpvmz'
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  
  useEffect(() => {
    getData()
  }, [])
  
  async function getData(){
    let response = await fetch(link, {headers: {'X-Api-Key': key}})
    let data = await response.json()
    setQuote(data[0]['quote'])
    setAuthor(data[0]['author'])
  }

  function changeTheme(){
    let themeActive = document.getElementById('toggle-btn')
  
    if(themeActive.classList.contains('light-active')){ 
      themeActive.classList.toggle('light-active')
      document.documentElement.style = `
        --cor-1: #6c6880;
        --cor-2: #2e2e33;
        --cor-font-1: #fff; 
        --cor-font-2: #f3e0ef; 
      `
    } else {
      themeActive.classList.toggle('light-active')
      document.documentElement.style = `
        --cor-1: #2e2e33;
        --cor-2: #f3e0ef;
        --cor-font-1: #fff; 
        --cor-font-2: #b9b0d2; 
      `
    }
  }

  return (
    <div className="App">
        <div id='quote-box'>
          <div id='theme'>
            <span id='toggle-btn'></span>
            <span className="theme-icon" id='icon-dark'  onClick={() => changeTheme()}></span>
            <span className="theme-icon" id='icon-light' onClick={() => changeTheme()}></span>
          </div>
          <p id='text'>{quote}</p>
          <cite id='author'>- {author}</cite>

          <a href='#' id='new-quote' onClick={() => getData()}>New quote</a>
          <a href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target='_blank' rel='noreferrer' id='tweet-quote'>
              <FaTwitter id='tweet-quote-icon'/>
              <span>Tweet</span>
          </a>
        </div>
    </div>
  );
}

export default App;
