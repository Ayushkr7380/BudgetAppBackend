import { Schema , model  } from "mongoose";

// const expenditureSchema = new Schema({
//    year:[
//     {
//         totalamountyear:{
//             type:String,
//             required:true
//         },
//         month :[
//             {
//                 totalamountmonth:{
//                     type:String,
//                     required:true
//                 },
//                 day :[
//                     {
//                         totalamountday :{
//                             type:String,
//                             required:true,
//                         },
//                         daydata:[
//                             {
//                                 data :{
//                                     type:String,
//                                     reuired:true
//                                 },
//                                 amount:{
//                                     type:String,
//                                     required:true
//                                 }
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
//    ]
// })

// const daySchema = new Schema({
//     daydata:[
//         {         
//             data:{
//                 type:String,
//                 required:true
//             },
//             amount :{
//                 type:String,
//                 required:true
//             }
//         }
//     ],
//     totalamount : {
//         type:String,
//         required:true
//     },
// },{
//     timestamps:true
// });

// const monthSchema = new Schema({
//     day:[daySchema],
//     totalamountmonth :{
//         type:String,
//         required:true
//     }
// },{
//     timestamps:true
// });

// const yearSchmea = new Schema({
//     totalamountyear:{
//         type:String,
//         required:true
//     },
//     month :[monthSchema]
// },{
//     timestamps:true
// });

// const expenditureSchema = new Schema({
//     year:[yearSchmea]
// },{
//     timestamps:true
// });

// const expenditure = model('expenditure',expenditureSchema);

const expenditureSchema = new Schema({
    datalist:{
        user:{
            type:Schema.Types.ObjectId,
            ref:'BudgetUser',
            required:true
        },
        data:[
            {
                itemname:{
                    type:String,
                    required:true
                },
                price:{
                    type:String,
                    required:true
                }
            }
        ],
        totalamount:{
            type:String,
            required:true
        }
    }
},{
    timestamps:true
});

const expenditure = model('Expenditure',expenditureSchema);

export default expenditure;