import { lazy, Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { schema } from "./schema";
import type { FormValues } from "./schema";
import type { User } from "./types";
import "./App.css";

const AddForm = lazy(() => import("./AddForm"));
const UserCard = lazy(() => import("./UserCard"));

const API = "https://to-dos-api.softclub.tj/api/to-dos";

function App() {
    const [user, setUser] = useState<User[]>([]);
    const [id, setId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    async function getData() {
        try {
            const response = await axios.get<{ data: User[] }>(API);
            setUser(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    async function delUser(id: number) {
        try {
            await axios.delete(`${API}?id=${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    }

    function editUser(elem: User) {
        setId(elem.id);
        setValue("name", elem.name);
        setValue("description", elem.description);
    }

    function cancelEdit() {
        reset();
        setId(null);
    }

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const formData = new FormData();
            formData.append("Name", data.name);
            formData.append("Description", data.description);

            if (data.image && data.image[0]) {
                formData.append("Images", data.image[0]);
            }

            if (id) {
                formData.append("Id", String(id));
                await axios.put(API, formData);
            } else {
                await axios.post(API, formData);
            }

            getData();
            reset();
            setId(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <Suspense fallback={<p>мембри интернет гзарони ана ак ждат кн...</p>}>
                <AddForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                    id={id}
                    onCancel={cancelEdit}
                />

                <div className="card-list">
                    {user.map((elem) => (
                        <UserCard
                            key={elem.id}
                            elem={elem}
                            onDelete={delUser}
                            onEdit={editUser}
                        />
                    ))}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
