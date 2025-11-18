// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { productSubmit } from "../../../helper/https";
import FileInputLoader from "./FileInputLoader";

function ProductForm() {

  const [form, setForm] = useState({
    "name": "",
    "sku": "",
    "price": "",
    "category_id": 1,
    "status": 1,
    "small_img": ""
  });

  const [formError, setFormError] = useState({
    "name": "",
    "sku": "",
    "price": "",
    "desc":"",
    "small_img": ""
  })
  const [selected, setSelected] = useState(null)

  const [images, setImages] = useState([]);

  const handleForm = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    console.log(name, "", value)
    setForm({ ...form, [name]: value })
  }

  /** category image */
  const catImage = (id) => {
    // e.preventDefault()
    // const { name, value } = e.target;
    // debugger
    // console.log(name," ",value);
    setSelected((prev) => (id === prev ? null : id));
  }
  const handleImages = (id, e) => {
    //e.preventDefault()
    console.log(id);
    debugger
    setImages({ ...images, [id]: e.target.files[0] });

  }

  const validate = () => {
    debugger
    let validation = true;
    let error = {
      "name": "",
      "sku": "",
      "price": "",
      "desc":"",
      "small_img": "",
      
    };
    if(form.name==""){
      error.name="Name Field Requied";
      validation=false;
    }
    if(form.sku==""){
      error.sku= "Sku Field Required";
      validation=false;
    }
    if(form.price==""){
      error.price="Price Field is required";
      validation=false;

    }
    if(form.desc==""){
      error.desc="Descrption Field is required";
      validation=false;

    }
    setFormError(error);
    return validation;

  }
  const submitForm = (e) => {
    e.preventDefault();
    if(validate()){
      debugger
    
    console.log(selected, images[selected]);
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('cat_image', images[selected])

    for (let key in form) {
      formData.append(key, form[key]);
    }
    // formData.append('images',images)
    // debugger
    console.log(form);
    //   images.forEach((image, index) => {
    //     console.log(index,image);
    //     debugger
    //     formData.append('images', image);
    // });
    for (let key in images) {
      formData.append('images', images[key])
    }
    console.log(formData);

    debugger;
    productSubmit(formData).then(res => {

    }).catch(err => {
      alert("something wrong")
      console.log(err);
    })
    console.log(formData);
  }
  }

  return (
    <>
      <form className='form' onSubmit={submitForm}>
        <div className="form-group ">
          <label htmlFor="name" className="col-sm-2 col-form-label">Product name</label>
          <div className="col-sm-4">
            <input type="text" onChange={handleForm} className="form-control" id="name" value={form.p_name} name="name" />
            {formError.name && (<span>{formError.name}</span>)}
          </div>

        </div>
        <div className="form-group ">
          <label htmlFor="sku" className="col-sm-2 col-form-label">SKU</label>
          <div className="col-sm-4">
            <input type="text" onChange={handleForm} className="form-control" id="sku" value={form.sku} name="sku" />
            {formError.sku && (<span>{formError.sku}</span>)}
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-4">
            <input type="text" onChange={handleForm} className="form-control" id="price" value={form.price} name="price" />
            {formError.price && (<span>{formError.price}</span>)}
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="description" className="col-sm-2 col-form-label">description</label>
          <div className="col-sm-4">
            <input type="text" onChange={handleForm} className="form-control" id="description" value={form.description} name="description" />
            {formError.desc && (<span>{formError.desc}</span>)}
          </div>
        </div>
        {/* <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-4">
            <input type="text" onChange={handleForm} className="form-control" id="description" value={form.description} name="description" />

          </div>
        </div> */}
        <div className="form-group ">
          <label htmlFor="description" className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-4">
            <FileInputLoader imageSet={handleImages} selectImage={catImage} selected={selected} />
            {/* <input type="file" onChange={handleImages} className="form-control" />
              <input type="file" onChange={handleImages} className="form-control" />
              <input type="file" onChange={handleImages} className="form-control" />
              <input type="file" onChange={handleImages} className="form-control" />
            <input type="file" onChange={handleImages} className="form-control" id="images" value={images} name="images" /> */}

          </div>
        </div>
        <button className="btn btn-info" >Submit</button>
      </form>
    </>
  );
}

export default ProductForm;