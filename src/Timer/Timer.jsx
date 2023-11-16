import {React, useEffect} from 'react'
import './Timer.css'

export default function Timer() {
    useEffect(() => {
        const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
        let today = new Date(),
          dd = String(today.getDate()).padStart(2, '0'),
          mm = String(today.getMonth() + 1).padStart(2, '0'),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = '11/30/',
          birthday = dayMonth + yyyy;
    
        today = mm + '/' + dd + '/' + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
    
        const countDown = new Date(birthday).getTime();
        const x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;
    
          document.getElementById('days').innerText = Math.floor(distance / day);
          document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
          document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
          document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
    
          // do something later when date is reached
          if (distance < 0) {
            document.getElementById('headline').innerText = "It's time!";
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            clearInterval(x);
          }
        }, 0);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(x);
      }, []);
  return (
    <div>
         <div class="timer">
            <h1 id="headline">MALHAAR STARTS IN</h1>
            <div className="content">
              <ul>
                <li>
                  <span id="days"></span>days
                </li>
                <li>
                  <span id="hours"></span>Hours
                </li>
                <li>
                  <span id="minutes"></span>Minutes
                </li>
                <li>
                  <span id="seconds"></span>Seconds
                </li>
              </ul>
            </div>
            <div id="content" class="emoji">
              <span>🥳</span>
              <span>🎉</span>
              <span>🎂</span>
            </div>
          </div>
    </div>
  )
}
