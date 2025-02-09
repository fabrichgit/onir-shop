export async function createOrder(data: unknown, id: string){
    let orders = JSON.parse(localStorage.getItem('order') || '[]')
    console.log(id);
    orders = [data, ...orders]
    localStorage.setItem('order', JSON.stringify(orders))
    return orders
}