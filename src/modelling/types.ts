export type DataItem = {
  id: string
  name: string
}


export type Aspect_D = DataItem & {
  name: string 
  notes: Note_D[]
  ideas: Idea_D[]
}


export type Note_D = DataItem &  {
  name
  
}
export type Idea_D = DataItem & {
  name
}

export type Data = {
  aspects: Aspect_D[]
  notes: Note_D[]
  ideas: Idea_D[]

}

export type DataListKey = (keyof Data)