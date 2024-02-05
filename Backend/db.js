const mongoose = require('mongoose')
const monoURI = 'mongodb+srv://traction:adwait23@cluster0.iy8ytvh.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    await mongoose.connect(monoURI, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log('connected')
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const food_category = await mongoose.connection.db.collection("food_category");
                food_category.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })

            // }
        })
    }
});
    
}
module.exports = mongoDB;
// if(err) console.log(err);
// else{
//     global.food_items = data;
//     console.log()