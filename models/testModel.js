import { Schema , model  } from "mongoose";


const testSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'BudgetUser',
        required:true
    },
    ExpenditureName:{
        type:String,
        required:true,
    },
    ExpenditureAmount:{
        type:String,
        required:true,
    },
    ExpenditureDate:{
        type:Date,
        required:true,
    }
});

const TestSchema = model('TestSchema',testSchema);
export default TestSchema;