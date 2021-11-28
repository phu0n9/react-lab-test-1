import React,{useState,useEffect} from 'react'
import '../stylesheet/Form.css'
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'
import SelectType from './SelectType';

export default function Form({book,type}) {
    const [name,setName] = useState("")
    const [author,setAuthor] = useState("")
    const [price,setPrice] = useState("")
    const [format,setFormat] = useState("")
    const [typeUpdate,setTypeOnUpdate] = useState("")
    const [rating,setRating] = useState("")
    const [image,setImage] = useState("")
    const navigate = useNavigate()
    let {id} = useParams()
    const [typeList,setTypeList] = useState([])

    useEffect(() =>{
        const getTypeList = async () =>{
            await axios.get(`https://bookaroo-api.herokuapp.com/api/v1/type`,{
                headers: {"Access-Control-Allow-Origin": "*"}
            })
            .then((response) =>{
                setTypeList(response.data)
            })
            .catch((error) => console.error(error))
        }
        getTypeList()
    },[])

    useEffect(() => {
        setName(book.name)
        setAuthor(book.author)
        setPrice(book.price)
        setFormat(book.format)
        setTypeOnUpdate(type.typeName)
    }, [book,type.typeName])

    const nameOnChange = (e) => {
        setName(e.target.value)
    }

    const authorOnChange = (e) => {
        setAuthor(e.target.value)
    }

    const priceOnChange = (e) => {
        setPrice(e.target.value)
    }

    const formatOnChange = (e) => {
        setFormat(e.target.value)
    }

    const selectOnChange = (e) =>{
        e.preventDefault()
        setTypeOnUpdate(e.target.value)
    }

    const ratingOnChange = (e) => {
        setRating(e.target.value)
    }

    const imageOnChange = (e) => {
        setImage(e.target.value)
    }

    const onClickSubmitButton = async (e) =>{
        e.preventDefault()
        if (book === ""){
            // https://bookaroo-api.herokuapp.com
            console.log(name,author,price,format,image,rating,typeUpdate)
            if (name != null && author != null && price != null && format != null && typeUpdate != null && rating != null && image != null){
                await axios.post(`https://bookaroo-api.herokuapp.com/api/v1/product`,{
                "name": name,
                "author" : author,
                "price": price,
                "format" : format,
                "image":image,
                "rating":rating,
                "type": {"id":typeUpdate},
            })
            .then(() => {
                navigate(`/`)
            })
            .catch((err) => {console.error(err.response.data)})
            }
            else{
                alert("No field should be missing, price,rating should be number and image should be url")
            }
        }
        else{
            if (name != null && author != null && price != null && format != null && typeUpdate != null){
                await axios.put(`https://bookaroo-api.herokuapp.com/api/v1/product/${book.id}`,{
                    "name": name,
                    "author" : author,
                    "price": price,
                    "format" : format,
                    "type": {"typeName":typeUpdate},
                })
                .then(() => {
                    navigate(`/book/${id}`)
                })
                .catch((err) => {console.error(err)})
            }
            else{
                alert("Please enter missing values.")
            }
        }
    }

    return (
    <div className="form-container">
        <div className="left">
            <div className="header">
            <h2 className="animation a1">Form</h2>
            <h4 className="animation a2">Edit these followings:</h4>
        </div>
            <div className="form">
                <input type="text" className="form-field animation a4" placeholder="book name" value={name} onChange={nameOnChange} required/>
                <input type="text" className="form-field animation a4" placeholder="author name" value={author} onChange={authorOnChange} required/>
                <input type="number" className="form-field animation a4" placeholder="price" value={price} onChange={priceOnChange} required/>
                {book === ""? <input type="number" className="form-field animation a4" placeholder="rating" value={rating} onChange={ratingOnChange} required/>: ""}
                <input type="text" className="form-field animation a4" placeholder="format" value={format} onChange={formatOnChange} required/>
                {book === "" ? <input type="url" className="form-field animation a4" placeholder="image" value={image} onChange={imageOnChange} required/>: ""}

                <SelectType typeList={typeList} selectOnChange={selectOnChange}/>
                <button className="animation a6" onClick={onClickSubmitButton}>SUBMIT</button>
            </div>
        </div>
        <div className="right"></div>
    </div>

    )
}
