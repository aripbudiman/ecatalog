import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const Provider = ({ children }) => {
    const [OrderItems, setOrderItems] = useState([]);
    const [subtotal, setSubtotal] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dataModalOrder, setDataModalOrder] = useState([]);

    const addOrder = (newOrder) => {
        const updatedOrderItems = [...OrderItems];
        updatedOrderItems.push(newOrder);
        setOrderItems(updatedOrderItems);
        const updateSubtotal = [...subtotal];
        updateSubtotal.push({
            name: newOrder.name,
            size_id: newOrder.size[0].id,
            price: newOrder.size[0].price,
            size: newOrder.size[0].size,
            qty: 1,
            img: newOrder.image,
        });
        setSubtotal(updateSubtotal);
    };

    const deleteAllOrder = () => {
        setOrderItems([]);
        setSubtotal([]);
    };

    const plusQty = (index) => {
        const updateSubtotal = [...subtotal];
        updateSubtotal[index].qty += 1;
        setSubtotal(updateSubtotal);
    };
    const minusQty = (index) => {
        const updateSubtotal = [...subtotal];
        updateSubtotal[index].qty -= 1;
        setSubtotal(updateSubtotal);
    };

    const updatePrice = (index, price, size_id, size) => {
        const updateSubtotal = [...subtotal];
        updateSubtotal[index].price = parseFloat(price);
        updateSubtotal[index].size_id = size_id;
        updateSubtotal[index].size = size;
        setSubtotal(updateSubtotal);
    };

    const deleteOrder = (index) => {
        const updatedOrderItems = [...OrderItems];
        updatedOrderItems.splice(index, 1);
        setOrderItems(updatedOrderItems);
        const updateSubtotal = [...subtotal];
        updateSubtotal.splice(index, 1);
        setSubtotal(updateSubtotal);
    };

    const orderDetailStore = (data) => {
        setOrderDetail(data);
    };
    var currentDate = new Date();
    var firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );
    var lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );
    // Mengonversi tanggal ke format yang lebih mudah dibaca
    var options = { year: "numeric", month: "short", day: "numeric" };
    var formattedFirstDay = firstDay.toLocaleDateString(undefined, options);
    var formattedLastDay = lastDay.toLocaleDateString(undefined, options);
    return (
        <Context.Provider
            value={{
                formattedFirstDay,
                formattedLastDay,
                OrderItems,
                addOrder,
                deleteOrder,
                setOrderItems,
                subtotal,
                plusQty,
                minusQty,
                updatePrice,
                orderDetail,
                orderDetailStore,
                isOpen,
                setIsOpen,
                setOrderDetail,
                dataModalOrder,
                setDataModalOrder,
                deleteAllOrder,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
