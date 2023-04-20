import React,{Component} from 'react'
import { View } from '@tarojs/components'
import {VirtualList} from '@tarojs/components/virtual-list'
import './index.less'

const Row = React.memo(()=><View>hello</View>)

function Index(){
  const data = Array(10).fill(0).map((i,idx)=>idx+1)
  return (
      <View className='index'>
        hello
        <VirtualList
          height={800} /* 列表的高度 */
          width='100%' /* 列表的宽度 */
          item={Row} /* 列表单项组件，这里只能传入一个组件 */
          itemData={data} /* 渲染列表的数据 */
          itemCount={data.length} /* 渲染列表的长度 */
          itemSize={100}
        />
      </View>
    )
}

export default Index


// function buildData(offset = 0) {
//   return Array(100)
//     .fill(0)
//     .map((_, i) => i + offset)
// }

// const Row = React.memo(({ id, index, data }:any) => {
//   return (
//     <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
//       Row {index} : {data[index]}
//     </View>
//   )
// })

// export default class Index extends Component {
//   state = {
//     data: buildData(0),
//   }

//   render() {
//     const { data } = this.state
//     const dataLen = data.length
//     return (
//       <VirtualList
//         height={800} /* 列表的高度 */
//         width='100%' /* 列表的宽度 */
//         item={Row} /* 列表单项组件，这里只能传入一个组件 */
//         itemData={data} /* 渲染列表的数据 */
//         itemCount={dataLen} /* 渲染列表的长度 */
//         itemSize={100} /* 列表单项的高度  */
//       />
//     )
//   }
// }
