import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { MemoHook } from './06-memo/MemoHook'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <MemoHook></MemoHook>
      <Layout></Layout>
      <HooksApp></HooksApp>
      <FocusScreen></FocusScreen>
      <MultipleCustomHooks></MultipleCustomHooks>
      <CounterApp></CounterApp>
      <CounterWithCustomHook></CounterWithCustomHook>
      <SimpleForm></SimpleForm>
      <FormWithCustomHook></FormWithCustomHook>
    </>
    

)
