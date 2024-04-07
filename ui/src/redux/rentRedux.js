import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orderItems: [],
  orderItemsSlected: [],
  shippingAddress: {
  },
  user: '',
  isSucessOrder: false,
}

export const orderSlide = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      const {orderItem} = action.payload
      const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem.product)
      if(itemOrder){
        if(itemOrder.amount <= itemOrder.countInstock) {
          itemOrder.amount += orderItem?.amount
          state.isSucessOrder = true
          state.isErrorOrder = false
        }
      }else {
        state.orderItems.push(orderItem)
      }
    },
    resetOrder: (state) => {
      state.isSucessOrder = false
    },
    removeOrderProduct: (state, action) => {
      const {idProduct} = action.payload
      
      const itemOrder = state?.orderItems?.filter((item) => item?.product !== idProduct)
      const itemOrderSeleted = state?.orderItemsSlected?.filter((item) => item?.product !== idProduct)

      state.orderItems = itemOrder;
      state.orderItemsSlected = itemOrderSeleted;
    },
    removeAllOrderProduct: (state, action) => {
      const {listChecked} = action.payload
      const itemOrders = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
      const itemOrdersSelected = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
      state.orderItems = itemOrders
      state.orderItemsSlected = itemOrdersSelected

    },
    selectedOrder: (state, action) => {
      const {listChecked} = action.payload
      const orderSelected = []
      state.orderItems.forEach((order) => {
        if(listChecked.includes(order.product)){
          orderSelected.push(order)
        };
      });
      state.orderItemsSlected = orderSelected
    }
  },
})

// Action creators are generated for each case reducer function
export const { addOrderProduct,increaseAmount,decreaseAmount,removeOrderProduct,removeAllOrderProduct, selectedOrder,resetOrder } = orderSlide.actions

export default orderSlide.reducer