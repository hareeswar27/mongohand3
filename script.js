const mongoose = require('mongoose');
const User = require('./index.js');
const Data = require('./Data');


async function run(){
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/Human_Resource");

        // A different method to push data 
    // const user = new User({ name : "John", age : 22})
    // await user.save();
    // const res = await User.insertMany(user);
    // console.log(user);



    // Data.map(async (data) => {
    //     emp = new User(data);
    //     const res = await User.insertMany(emp)
    //     console.log(res._id);
    // })

    // -------------------------------------------------------------------------------------------

    //Q2. Query the collection ""User"" and list the employees who are having salary more than 30000
    // const salRes = await User.find({
    //    salary : { $gt : 30000 } 
    // })
    // console.log(salRes);

    // --------------------------------------------------------------------------------------

    //Q3. Query the collection ""User"" and list the employees who are having experience more than 2 years.
    // const expRes = await User.find({
    //     overaallExp : { $gt : 2 }
    // })
    // console.log(expRes);

    // -----------------------------------------------------------------------------------------

    //Q4. Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
    const gradExp = await User.find({
        yearGrad : { $gt : 2015 },
        overaallExp : { $gt : 1 }
    })
    console.log(gradExp);


    
    //Q5. Delete all the documents from ""employee"" where last company is Y"

    const response6 = await User.deleteMany({
        lastCompany: "Y",
      });
      console.log(response6);
  


    } catch(er){
        console.log(er);
    }
}
run();