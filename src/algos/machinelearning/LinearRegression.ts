/**
 * Algory
 *
 * Copyright (c) Anurag Muthyam <anu.drumcoder@gmail.com>
 * https://github.com/aryaghan-mutum
 *
 */
// FIXME: 
// const curry = require('curry')
// const R = require('ramda')
// /**
//  * @remarks Linear Regression
//  */
// export const linearRegression = curry(

//     (data: any) => {
//         let m, b

//         const dataLength = data.length;

//         if (dataLength === 1) {
//             m = 0
//             b = data[0][1]
//         } else {
//             let sumX = 0,
//                 sumY = 0,
//                 sumXX = 0,
//                 sumXY = 0

//             let point, x, y;

           
//             for (let i = 0; i < dataLength; i++) {
//                 point = data[i];
//                 x = point[0];
//                 y = point[1];

//                 sumX += x;
//                 sumY += y;

//                 sumXX += x * x;
//                 sumXY += x * y;
//             }

//             m = (dataLength * sumXY - sumX * sumY) / (dataLength * sumXX - sumX * sumX);
//             b = sumY / dataLength - (m * sumX) / dataLength;
//         }

//         return { m: m, b: b }
//     })