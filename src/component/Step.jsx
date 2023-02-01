import Item from '../component/Item'
import Line from '../component/Line'
import { Check }  from './icons/Check';
import { Delivery } from './icons//Delivery'
import { Cash } from './icons/Cash'
import { Click } from './icons/Click'

// ---------------------------------
// 使用說明：
// 1. 本元件基於 tailwind 開發，請先安裝 tailwind
// 2. [CSS 設定] 中，可自行替換三種狀態的色碼
// 3. 可於 stepAry 中切換：finish / process / wait 三種狀態
// 4. 若需切換狀態，請將 stepAry 中的 icon / status / lineStatus  狀態修改為一致
// ---------------------------------

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
    icon: <Click status={finishIcon}/>,
    status: finish,
    lineStatus: finishLine
  },
  {
    title: 'Pay',
    icon: <Cash status={finishIcon}/>,
    status: finish,
    lineStatus: finishLine
  },
  {
    title: 'Deliver',
    icon: <Delivery status={processIcon}/>,
    status: process,
    lineStatus: processLine
  },
  {
  title: 'Done !',
  icon: <Check status={waitIcon}/>,
  status: wait,
  lineStatus: waitLine
  }
]

function Step() {
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

export default Step