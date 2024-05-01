import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name,quantity,supplier,taste,category,details,photo} = coffee
    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
console.log(updatedCoffee);


// send data to the server
fetch(`https://coffee-store-server-7170xcm69-nahidul-islam-siams-projects.vercel.app/coffee/${_id}`,{
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatedCoffee)
})
.then(res=> res.json())
.then(data =>{
    console.log(data);
    if(data.modifiedCount > 0)
    Swal.fire({
        title: 'Success!',
        text: 'Coffee Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
})
    }
    return (
        <div  className='bg-[#F4F3F0] p-24'>
        <h1 className='text-3xl font-extrabold'>Update Coffee: {name}</h1>
        <form onSubmit={handleUpdateCoffee}>
  {/* form name & quantity  row */}
<div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Coffee Name</span>
</label>
<input type="text" defaultValue={name} placeholder="Enter coffee name" 
name="name"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Available Quantity</span>
</label>
<input type="text" 
name='quantity'
defaultValue={quantity}
placeholder="Available Quantity" className="input input-bordered w-full " />

</div>
</div>
   {/* form supplier row */}
   <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Supplier</span>
</label>
<input type="text" defaultValue={supplier} placeholder="Supplier" 
name="supplier"
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Taste</span>
</label>
<input type="text" 
name='taste'
defaultValue={taste}
placeholder="Taste" className="input input-bordered w-full " />

</div>
</div>
   {/* form category & details row */}
   <div className='md:flex mb-8'>
<div className="form-control  md:w-1/2">
<label className="label">
<span className="label-text">Category</span>
</label>
<input type="text" placeholder="Category" 
name="category"
defaultValue={category}
className="input input-bordered w-full " />

</div>
<div className="form-control ml-4  md:w-1/2">
<label className="label">
<span className="label-text">Details</span>
</label>
<input type="text" 
name='details'
defaultValue={details}
placeholder="Details" className="input input-bordered w-full " />

</div>
</div>
   {/* form Photo url row */}
   <div className='mb-8'>
<div className="form-control  w-full">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<input type="text" placeholder="Photo URL" 
name="photo"
defaultValue={photo}
className="input input-bordered w-full " />

</div>

</div>

<input className='btn btn-block bg-gray-700 text-white' type="submit" value='Update Coffee'/>
</form>
  
    </div>
    );
};

export default UpdateCoffee;