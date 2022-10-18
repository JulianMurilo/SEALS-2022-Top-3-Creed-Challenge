import App from './App';
import Index from './index'

function play() {
  document.querySelector("div").style.setProperty (
      "animation-name", "example"
  )
  document.querySelector("div").style.setProperty (
      "animation-duration", "1s"
  )
  document.querySelector("div").style.setProperty (
      "animation-iteration-count", "infinite"
  )
}

function stop() {
  document.querySelector("div").style.setProperty (
      "animation-name", "example"
  )
  document.querySelector("div").style.setProperty (
      "animation-duration", "1s"
  )
  document.querySelector("div").style.setProperty (
      "animation-iteration-count", "1"
  )
}
