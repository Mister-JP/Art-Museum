// public/custom-cursor.js
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');
    let mouseX = 0;
    let mouseY = 0;
    let angle = 0;
    const angleThreshold = 1; // Adjust this value to control the sensitivity
    const smoothingFactor = 0.1; // Adjust this value to control the smoothing
  
    function roundToNearest45(degrees) {
      return Math.round(degrees / 45) * 45;
    }
  
    function moveCursor(e) {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - mouseX;
      const dy = y - mouseY;
      let newAngle;
      newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    //   newAngle = 180 + newAngle;
      
      newAngle = roundToNearest45(newAngle);
      const angleDifference = Math.abs(newAngle - angle);
      if ((dx!==0 || dy!==0) || (angleDifference > angleThreshold || angleDifference < (360 - angleThreshold))) {
        angle += (newAngle - angle) * smoothingFactor;
        cursor.style.transform = `rotate(${angle + 90}deg)`;
      }
  
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  
      mouseX = x;
      mouseY = y;
    }
  
    document.addEventListener('mousemove', moveCursor);
  });
  