import { ReactNode, createContext, useState, useReducer } from "react";
import { 
         addNewCycleAction, 
         interruptCurrantCycleAction, 
         markCurrentCycleAsFinishedAction 
        } from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData{
    task: string
    minutesAmount: number

}

interface CyclesContextType {
    cycles:Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptionCurrantCycle: () => void
  }

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProvierProps{
    children: ReactNode
}


export function CyclesContextProvier({
    children, 

      }: CyclesContextProvierProps){
        const [cyclesState, dispatch] = useReducer(cyclesReducer,{
      cycles:[], 
      activeCycleId: null,
    }, 
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())

  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptionCurrantCycle() {
    dispatch(interruptCurrantCycleAction())

  }

    return(
        <CyclesContext.Provider
          value={{
            cycles,
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle, 
            interruptionCurrantCycle, 
          }}
          >
            {children}
              </CyclesContext.Provider> )}
