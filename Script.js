
let quantity;
let giftName;
let confirmQuantity;


const recipt = document.getElementById('recipt')

 function giftAdd(price) {
    quantity = parseInt(prompt('Enter the Number Quantity of Gift you would like to purchase'));
    if(isNaN(quantity)){
        alert("Quanity is not a Number Please Repreat the process")
    }else{
        giftName = prompt('Enter the Name you would like to Display on the Gift');
        if(giftName === ''){
            alert("You Must give a name to the gift .. Please repeat the process")
        }else{

            let total = price*quantity
           if(total > 50){
            tax = (total * 13)/100
            grandTotal = total + tax;
            recipt.innerHTML = `
            <h3>Billing Details</h3>
            <p>Quantity : ${quantity}</p>
            <p>Gift Name : ${giftName}</p>
            <p>Shipping Charges : Free</p>
            <p>cost : ${total}$</p>
            <p>taxes : ${tax}$</p>
            <h4>Total : ${grandTotal}$</h4>
            `
           } else{
            tax = (total * 13)/100
            let shipping = 10 
            grandTotal = total + tax + shipping;
            recipt.innerHTML = `
            <h3>Billing Details</h3>
            <p>Quantity : ${quantity}</p>
            <p>Gift Name : ${giftName}</p>
            <p>Shipping Charges : ${shipping}$</p>
            <p>cost : ${total}$</p>
            <p>taxes : ${tax}$</p>
            <h4>Total : ${grandTotal}$</h4>
            `
           }

        }
    }

}


