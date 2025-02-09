export function useOrders() {
    const data = JSON.parse(localStorage.getItem('order') || '[]')
    return {data}
}