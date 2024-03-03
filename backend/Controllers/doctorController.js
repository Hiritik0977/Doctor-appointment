import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'
export const registerDoctor = 
async (req, res) => {
    try {
      const {
        email,
        password,
        role,
      } = req.body;
      console.log(req.body)

      // Create a new user with the provided data
      const newDoctor = new Doctor({
        email,
        password,
        
        role: "doctor" // Set the role as "doctor"
      });

      // Save the user to the database
      await newDoctor.save();

      res.status(201).json({ message: "Doctor registered successfully", user: newDoctor });
    } catch (error) {
      console.error("Error registering doctor:", error);
      res.status(500).json({ message: "An error occurred while registering doctor" });
    }
  }




export const updateDoctor = async(req,res) =>
{
    const id = req.params.id
    try{
        const updateDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body}, {new:true});

        res.status(200).json({success:true, message:'Successfully updated', data:updateDoctor});

    } catch (err) {
        res.status(500).json({success:false, message:'Failed to updated' });
    }
}


export const deleteDoctor = async(req,res) =>
{
    const id = req.params.id
    try{
        await Doctor.findByIdAndDelete(id,);

        res.status(200).json({success:true, message:'Successfully deleted', });

    } catch (err) {
        res.status(500).json({success:false, message:'Failed to delete' });
    }
}


export const getSingleDoctor = async(req,res) =>
{
    const id = req.params.id;
    try{
        const doctor = await Doctor.findById(id).select('-password');

        res.status(200).json({success:true, message:'Doctor found ', data:doctor});

    } catch (err) {
        res.status(404).json({success:false, message:'No Doctor found' });
    }
}

export const getAllDoctor = async(req,res) =>
{
    try{
        const doctors = await Doctor.find({isApproved:'approved'}).select('-password');

        res.status(200).json({success:true, message:'Doctors found', data:doctors});

    } catch (err) {
        res.status(404).json({success:false, message:'Not found' });
    }
}