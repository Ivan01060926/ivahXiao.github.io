function testFun () {
  console.log('已運行')
}

// await fetch("https://ebook.nlpi.edu.tw/personal/csrftoken", {
//   headers: {
//     accept: "application/json, text/javascript, */*; q=0.01",
//     "accept-language":
//       "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5",
//     "sec-ch-ua":
//       '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sec-gpc": "1",
//     "x-requested-with": "XMLHttpRequest",
//   },
//   referrer: "https://ebook.nlpi.edu.tw/",
//   referrerPolicy: "strict-origin-when-cross-origin",
//   body: null,
//   method: "GET",
//   mode: "cors",
//   credentials: "include",
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((getJson) => {
//     fetch("https://ebook.nlpi.edu.tw/personal/login", {
//       headers: {
//         accept: "application/json, text/javascript, */*; q=0.01",
//         "accept-language":
//           "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5",
//         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "sec-ch-ua":
//           '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": '"Windows"',
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "sec-gpc": "1",
//         "x-requested-with": "XMLHttpRequest",
//       },
//       referrer: "https://ebook.nlpi.edu.tw/",
//       referrerPolicy: "strict-origin-when-cross-origin",
//       body: "readercode=O100165064&readerpass=z01060926&csrf=" + getJson.val,
//       method: "POST",
//       mode: "cors",
//       credentials: "include",
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((myJson) => {
//         fetch(
//           "https://ebook.nlpi.edu.tw/personal/LendFileHistory?start=2&ajaxQuery=Y",
//           {
//             headers: {
//               accept: "application/json, text/javascript, */*; q=0.01",
//               "accept-language":
//                 "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5",
//               "sec-ch-ua":
//                 '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
//               "sec-ch-ua-mobile": "?0",
//               "sec-ch-ua-platform": '"Windows"',
//               "sec-fetch-dest": "empty",
//               "sec-fetch-mode": "cors",
//               "sec-fetch-site": "same-origin",
//               "sec-gpc": "1",
//               "x-requested-with": "XMLHttpRequest",
//             },
//             referrer: "https://ebook.nlpi.edu.tw/personal/circulation",
//             referrerPolicy: "strict-origin-when-cross-origin",
//             body: null,
//             method: "GET",
//             mode: "cors",
//             credentials: "include",
//           }
//         )
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             for (let i = 1; i < data.tp + 1; i++) {
//               fetch(
//                 "https://ebook.nlpi.edu.tw/personal/LendFileHistory?start=" +
//                   i.toString() +
//                   "&ajaxQuery=Y",
//                 {
//                   headers: {
//                     accept: "application/json, text/javascript, */*; q=0.01",
//                     "accept-language":
//                       "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5",
//                     "sec-ch-ua":
//                       '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
//                     "sec-ch-ua-mobile": "?0",
//                     "sec-ch-ua-platform": '"Windows"',
//                     "sec-fetch-dest": "empty",
//                     "sec-fetch-mode": "cors",
//                     "sec-fetch-site": "same-origin",
//                     "sec-gpc": "1",
//                     "x-requested-with": "XMLHttpRequest",
//                   },
//                   referrer: "https://ebook.nlpi.edu.tw/personal/circulation",
//                   referrerPolicy: "strict-origin-when-cross-origin",
//                   body: null,
//                   method: "GET",
//                   mode: "cors",
//                   credentials: "include",
//                 }
//               )
//                 .then((res) => {
//                   return res.json();
//                 })
//                 .then((bookName) => {
//                   for (let i = 0; i < bookName.data.length; i++) {
//                     console.log(bookName.data[i]["title"]);
//                   }
//                   console.log(bookName.data);
//                 });
//             }
//           });
//       });
//   });
