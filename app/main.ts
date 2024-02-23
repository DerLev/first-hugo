import flamethrower from 'flamethrower-router'
import store, {isLoading, notLoading} from './store'

export const router = flamethrower({ prefetch: 'hover', log: false })

window.addEventListener('flamethrower:router:fetch', () => {
  store.dispatch(isLoading())
})

window.addEventListener('flamethrower:router:end', () => {
  setTimeout(() => {
    store.dispatch(notLoading())
  }, 400)
})

export * from './components/counter'
export * from './components/navProgress'

/* print hello in console */
console.log(`%c
888    888 888     888  .d8888b.   .d88888b.                    888     888 8888888 88888888888 8888888888 
888    888 888     888 d88P  Y88b d88P" "Y88b                   888     888   888       888     888        
888    888 888     888 888    888 888     888                   888     888   888       888     888        
8888888888 888     888 888        888     888        888        Y88b   d88P   888       888     8888888    
888    888 888     888 888  88888 888     888      8888888       Y88b d88P    888       888     888        
888    888 888     888 888    888 888     888        888          Y88o88P     888       888     888        
888    888 Y88b. .d88P Y88b  d88P Y88b. .d88P                      Y888P      888       888     888        
888    888  "Y88888P"   "Y8888P88  "Y88888P"                        Y8P     8888888     888     8888888888 

`, 'font-family: monospace; color: #c63390;')
