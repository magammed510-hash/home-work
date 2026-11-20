import { useState, useEffect } from "react";
import axios from "axios";
import style from '../ComponentsCss/card3.module.css';

const API = 'https://to-dos-api.softclub.tj/api/to-dos';
const IMAGE_API = 'https://to-dos-api.softclub.tj/images/';

function Card3() {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editImage, setEditImage] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const getData = async () => {
        try {
            const response = await axios.get(API);
            setUser(response.data.data);
        } catch (error) { console.log(error); }
    };

    useEffect(() => { getData(); }, []);

    async function delUser(id: number | string) {
        try {
            await axios.delete(API, 
            { params: { id: id } 
        });
            getData();
        } catch (error) { console.log(error); }
    }

    async function addUser(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("Name", name);
            formData.append("Description", description);
            if (image) 
            formData.append("Images", image);
            await axios.post(API, formData, { headers: { "Content-Type": "multipart/form-data" } });
            setName(""); setDescription(""); setImage(null); setIsAddModalOpen(false); getData();
        } catch (error) { console.log(error); }
    }

    function openEditModal(elem) {
        setEditId(elem.id);
        setEditName(elem.name);
        setEditDescription(elem.description);
        setIsEditModalOpen(true);
    }

    async function updateUser(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("Id", editId);
            formData.append("Name", editName);
            formData.append("Description", editDescription);
            if (editImage) formData.append("Images", editImage);
            await axios.put(API, formData, { headers: { "Content-Type": "multipart/form-data" } });
            setIsEditModalOpen(false); setEditId(null); setEditName(""); setEditDescription(""); setEditImage(null); getData();
        } catch (error) { console.log(error); }
    }

    return (
        <div className={style.container}>
            <div className={style.headerRow}>
                <div>
                    <h2 className={style.mainTitle}>Our most popular Hotels</h2>
                    <p className={style.mainSub}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <button onClick={() => setIsAddModalOpen(true)} className={style.viewAllBtn}>
                    View All / + Add
                </button>
            </div>

            <div className={style.gridContainer}>
                {user.map((elem) => {
                    const imageName = elem.images && elem.images.length > 0 ? elem.images[0].imageName : null;
                    return (
                        <div key={elem.id} className={style.card}>
                            <div className={style.imgBox}>
                                {imageName ? (
                                    <img src={`${IMAGE_API}${imageName}`} alt={elem.name} className={style.hotelImg} />
                                ) : (
                                    <div className={style.noImage}>No Image</div>
                                )}
                            </div>
                            <div className={style.cardContent}>
                                <p className={style.locationText}>{elem.description}</p>
                                <h3 className={style.hotelName}>{elem.name}</h3>
                                <div className={style.cardFooter}>
                                    <span className={style.price}>$200 Par Night</span>
                                    <div className={style.ratingBox}>
                                        <span className={style.stars}>★★★★★</span>
                                        <span className={style.ratingNum}>4.8</span>
                                    </div>
                                </div>
                                <div className={style.cardActions}>
                                    <button onClick={() => openEditModal(elem)} className={style.editBtn}>Edit</button>
                                    <button onClick={() => delUser(elem.id)} className={style.deleteBtn}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {isAddModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <h3>Add New Hotel</h3>
                        <form onSubmit={addUser} className={style.modalForm}>
                            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="text" placeholder="Description (Location)..." value={description} onChange={(e) => setDescription(e.target.value)} required />
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                            <div className={style.modalBtns}>
                                <button type="submit" className={style.saveBtn}>Add</button>
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className={style.cancelBtn}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <h3>Edit Hotel</h3>
                        <form onSubmit={updateUser} className={style.modalForm}>
                            <input type="text" placeholder="Name..." value={editName} onChange={(e) => setEditName(e.target.value)} required />
                            <input type="text" placeholder="Description..." value={editDescription} onChange={(e) => setEditDescription(e.target.value)} required />
                            <input type="file" onChange={(e) => setEditImage(e.target.files[0])} />
                            <div className={style.modalBtns}>
                                <button type="submit" className={style.saveBtn}>Save</button>
                                <button type="button" onClick={() => setIsEditModalOpen(false)} className={style.cancelBtn}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card3;