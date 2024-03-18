import mainReducer, { CardType, addItem, deleteAll, deleteItem, initialState, updateItem } from './listSlice'

describe('mainSlice reducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(initialState, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle addItem', () => {
    const itemToAdd: CardType = {
      id: 1,
      name: 'Test Item',
      country: 'Test Country',
      image: 'test.jpg',
      price_per_ton: 100,
      offered_volume_in_tons: 50,
      distribution_weight: 10,
      supplier_name: 'Test Supplier',
      earliest_delivery: '2024-03-15',
      sdgs: [1, 2],
      description: 'Test Description',
      count: 1,
    }
    const action = addItem(itemToAdd)
    const nextState = mainReducer(initialState, action)
    expect(nextState.cart.length).toEqual(1)
    expect(nextState.cart[0]).toEqual(itemToAdd)
  })

  it('should handle deleteItem', () => {
    const initialStateWithItem: CardType[] = [
      {
        id: 1,
        name: 'Test Item',
        country: 'Test Country',
        image: 'test.jpg',
        price_per_ton: 100,
        offered_volume_in_tons: 50,
        distribution_weight: 10,
        supplier_name: 'Test Supplier',
        earliest_delivery: '2024-03-15',
        sdgs: [1, 2],
        description: 'Test Description',
        count: 1,
      },
    ]
    const action = deleteItem(1)
    const nextState = mainReducer({ ...initialState, cart: initialStateWithItem }, action)
    expect(nextState.cart.length).toEqual(0)
  })

  it('should handle deleteAll', () => {
    const initialStateWithItems: CardType[] = [
      {
        id: 1,
        name: 'Test Item 1',
        country: 'Test Country 1',
        image: 'test1.jpg',
        price_per_ton: 100,
        offered_volume_in_tons: 50,
        distribution_weight: 10,
        supplier_name: 'Test Supplier 1',
        earliest_delivery: '2024-03-15',
        sdgs: [1, 2],
        description: 'Test Description 1',
        count: 1,
      },
      {
        id: 2,
        name: 'Test Item 2',
        country: 'Test Country 2',
        image: 'test2.jpg',
        price_per_ton: 200,
        offered_volume_in_tons: 60,
        distribution_weight: 15,
        supplier_name: 'Test Supplier 2',
        earliest_delivery: '2024-03-16',
        sdgs: [3, 4],
        description: 'Test Description 2',
        count: 2,
      },
    ]
    const action = deleteAll()
    const nextState = mainReducer({ ...initialState, cart: initialStateWithItems }, action)
    expect(nextState.cart.length).toEqual(0)
  })

  it('should handle updateItem', () => {
    const initialStateWithItem: CardType[] = [
      {
        id: 1,
        name: 'Test Item',
        country: 'Test Country',
        image: 'test.jpg',
        price_per_ton: 100,
        offered_volume_in_tons: 50,
        distribution_weight: 10,
        supplier_name: 'Test Supplier',
        earliest_delivery: '2024-03-15',
        sdgs: [1, 2],
        description: 'Test Description',
        count: 1,
      },
    ]
    const updatedItem: CardType = {
      id: 1,
      name: 'Updated Item',
      country: 'Updated Country',
      image: 'updated.jpg',
      price_per_ton: 200,
      offered_volume_in_tons: 60,
      distribution_weight: 15,
      supplier_name: 'Updated Supplier',
      earliest_delivery: '2024-03-16',
      sdgs: [3, 4],
      description: 'Updated Description',
      count: 2,
    }
    const action = updateItem(updatedItem)
    const nextState = mainReducer({ ...initialState, cart: initialStateWithItem }, action)
    expect(nextState.cart.length).toEqual(1)
    expect(nextState.cart[0]).toEqual(updatedItem)
  })
})
