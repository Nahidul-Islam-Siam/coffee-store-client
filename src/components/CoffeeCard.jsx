import Swal from "sweetalert2";


const CoffeeCard = ({coffee}) => {
    const {_id, name,quantity,supplier,taste,category,details,photo} = coffee


    const handlDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-4">
    <h2 className="card-title">Name: {name}</h2>
    <div>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    </div>
    <div className="join join-vertical space-y-4">
  <button className="btn join-item hover:btn-primary">View</button>
  <button className="btn join-item hover:btn-primary">Edit</button>
  <button
  onClick={()=> handlDelete(_id)}
   className="btn join-item hover:btn-primary bg-orange-500">x</button>
</div>
   
  </div>
</div>
    );
};

export default CoffeeCard;
