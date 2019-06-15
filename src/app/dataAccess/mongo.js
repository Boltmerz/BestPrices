import mongoose from 'mongoose';
mongoose.set('useFindAndModify',false);

export default {
    connect: async () => {
        console.log('Connecting.....');
        try {
            await mongoose.connect(process.env.MONGO_DB_CONNECTION, { useNewUrlParser: true }).catch(err=>{throw new Error(err.message);})
            console.log('DB Connected...!');
        } catch (error) {
            console.log(`Error was thrown: ${error.message}`);
        }
        
    }
}
