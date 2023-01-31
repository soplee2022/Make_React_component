import { useState } from 'react'
import { Check }  from '../src/component/Check';
import { Delivery } from '../src/component/Delivery'
import Item from '../src/component/Item'
import Line from '../src/component/Line'
import checkGray from '../src/icons/check-gray.svg'
import checkGreen from '../src/icons/check-green.svg'
import deliveryGray from '../src/icons/delivery-gray.svg'
import deliveryGreen from '../src/icons/delivery-green.svg'
import cashGray from '../src/icons/cash-gray.svg'
import cashGreen from '../src/icons/cash-green.svg'

// Ant Design 的東西
import { Steps } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { floatButtonPrefixCls } from 'antd/es/float-button/FloatButton';
// const App = () => (
  //   <>
  //     <Steps style={stepsStyle}
  //     items={[
    //       {
      //         title: 'Login',
      //         status: 'finish',
      //         icon: <UserOutlined />,
      //       }
      //     ]}
      //   />
      //   </>
      // );
      
      //todo: 根據 status 變更樣式 (finish:primary / wait: gray)
      //todo: 去除 Tailwind，寫成 style
      
// status css
const finish = 'text-primary';
const wait = 'text-gray-500';
const waitIcon = '#cccccc';
const finishIcon = '#49927a';

const stepAry = [
  {
    title: 'Step.1',
    icon: <Check color={finishIcon}/>,
    status: finish
  },
  {
    title: 'Step.2',
    icon: <Delivery color={finishIcon}/>,
    status: finish
  },
  {
    title: 'Done !',
    icon: <Check color={waitIcon}/>,
    status: wait
  },
  {
  title: 'Done !',
  icon: <Check color={waitIcon}/>,
  status: wait
  }
]


function App() {
  return (
    <div className="flex space-x-6 items-center m-8">
      {stepAry.map((item, index) => {
        return(
          <>
            <Item title={item.title} icon={item.icon} status={item.status}/>
            { index===stepAry.length-1 ? null : <Line /> }
          </>
        )
      })}
    </div>
  )
}
export default App



