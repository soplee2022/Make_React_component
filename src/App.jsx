import Item from '../src/component/Item'
import Line from '../src/component/Line'
import { Check }  from '../src/component/Check';
import { Delivery } from '../src/component/Delivery'
import { Cash } from '../src/component/Cash'
import { Click } from '../src/component/Click'

// 請先安裝 tailwind
// 可於 stepAry 中切換：finish / process / wait 三種狀態
// [CSS 設定] 中，可變更三種狀態的色碼

// [CSS 設定] title status 
const finish = 'text-[#49927a]';
const wait = 'text-[#cccccc]';
const process = finish;

// [CSS 設定] icon status
const waitIcon = '#cccccc';
const finishIcon = '#49927a';
const processIcon = finishIcon;

// [CSS 設定] line status
const finishLine = 'border-[#49927a]';
const waitLine = 'border-[#cccccc]'
const processLine = waitLine;

const stepAry = [
  {
    title: 'Select',
    icon: <Click color={finishIcon}/>,
    status: finish,
    lineStatus: finishLine
  },
  {
    title: 'Pay',
    icon: <Cash color={finishIcon}/>,
    status: finish,
    lineStatus: finishLine
  },
  {
    title: 'Deliver',
    icon: <Delivery color={processIcon}/>,
    status: process,
    lineStatus: processLine
  },
  {
  title: 'Done !',
  icon: <Check color={waitIcon}/>,
  status: wait,
  lineStatus: waitLine
  }
]

function App() {
  return (
    <div className="flex space-x-6 items-center m-8">
      {stepAry.map((item, index) => {
        return(
          <>
            <Item title={item.title} icon={item.icon} status={item.status}/>
            { index===stepAry.length-1 ? null : <Line status={item.lineStatus}/> }
          </>
        )
      })}
    </div>
  )
}
export default App



