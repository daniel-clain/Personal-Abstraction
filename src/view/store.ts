

import { action, autorun, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import { Aspect_D, Data, Idea_D, Note_D } from "../modelling/types";

export class AppStore{
  aspects: Aspect_D[] = []
  notes: Note_D[] = []
  ideas: Idea_D[] = []

  constructor() {
    makeAutoObservable(this)
    this.initialSetup()
  }
  initialSetup(){
    this.getData()
    .then(({aspects, notes, ideas}) => {
      this.aspects = aspects
      this.notes = notes
      this.ideas = ideas
    })
  }

  private async getData(): Promise<Data>{
    return {
      aspects: [],
      ideas: [],
      notes: []
    }
  }

}

export const store = new AppStore()
