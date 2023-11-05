//1.Ən bahalı məhsul

// fetch('https://northwind.vercel.app/api/products')
//   .then(response => response.json())
//   .then(data => {
//     data.sort((a, b) => b.unitPrice - a.unitPrice);
//     const xyz = data[0];
//     console.log("Ən bahali məhsul:", xyz);
//   })

// 2.
// fetch("https://northwind.vercel.app/api/products")
//   .then(response => response.json())
//   .then(data => {
//     let totalqiymet = 0;
//     let totalmiqdar = 0;

//     data.forEach(product => {
//       if (product.unitsInStock > 0) {
//         totalqiymet += product.unitsInStock;
//         totalmiqdar++;
//       }
//     });

//     const ortaqiymet = (totalqiymet / totalmiqdar).toFixed(0)

//     console.log("ortalama:",ortaqiymet);
//   })


// 3.“C” ilə başlayan məhsullar 


// fetch('https://northwind.vercel.app/api/products')
//   .then(response => response.json())
//   .then(data => {
//     const xyzC = data.filter(product => product.name.startsWith("C"));
//     console.log("C ilə başlayan məhsullar:", xyzC);
//   })




// customers

// 1.“London” şəhərindəki müştəriləri console a yaz 


// fetch("https://northwind.vercel.app/api/customers")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             if (element.address.city === "London") {
//                 console.log(element.companyName);
//             }
//         });
//     })


// 2.Region NULL olan nə qədər customer var?
// fetch("https://northwind.vercel.app/api/customers")
// .then(response => response.json())
// .then(data =>{
//    let filtered = data.filter(item => item.address.region ==="NULL")
//     console.log(filtered.length);
// })


// /posts

// 1.Id-si 1 olan userin nə qədər postu var?

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => {
//         let filteredx = data.filter(item => item.userId == "1")
//         console.log(filteredx.length);
//     })


// /albums

// 1. 1 nömrəli albümdə nə qədər fotoqraf var?
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(data => {
//         let filteredy = data.filter(item => item.userId == "1")
//         console.log(filteredy.length);
//     })
