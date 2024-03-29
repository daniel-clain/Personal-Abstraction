import { autorun, makeAutoObservable } from "mobx"
import { AppStore } from "../view/store"

export type GameData = {
  time?: number
  level?: number
  paused?: boolean
}

export class Game {
  time = 0
  level = 0
  private _paused = true
  private gameTimeout

  constructor(gameData?: GameData) {
    makeAutoObservable(this)
    if(gameData){
      this.setGameData(gameData)
    }
  }


  start = () => {
    this.unpause()
  }

  setGameData(gameData: GameData){
    const {time, level, paused} = gameData
    if(time){
      this.time = time
    }
    if(level){
      this.level = level
    }
    if(paused){
      this.paused = paused
    }
  }
  
  togglePause = () => {
    console.log('activeGame :>> ', this);
    this.paused ? 
      this.unpause() : 
      this.pause()
      console.log('g.paused :>> ', this.paused);
  
  }

  set paused(paused){
    if(paused){
      this.stopTimer()
    }
    else{
      this.startTimer()
    }
    this._paused = paused
  }
  get paused(){
    return this._paused
  }
  
  pause(){
    this.paused = true
    console.log('game paused')
  }

  unpause(){
    this.paused = false
    console.log('game unpaused')
  }
    
  startTimer(){
    this.gameTimeout = setInterval(() => {
      this.time += 5
      this.save()
      console.log(this.time % 2 ? 'tick' : 'tock');
      console.log('time: ', this.time)
    }, 5000)

  }
  stopTimer(){
    clearTimeout(this.gameTimeout)
  }
  
  saveBeforeUnload = () => {
    function listener(){
      this.save()
      return confirm()
    }
  
    document.addEventListener('beforeunload', listener);
  
    function removeEventListener(){
      document.removeEventListener('beforeunload', listener)
    }
    return removeEventListener
  }

  private getGameData(): GameData{
    return {
      time: this.time,
      level: this.level,
      paused: true
    }
  }

  save(){
    const gameData = this.getGameData()
    fetch('/save-game', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameData)
    })
  }

}