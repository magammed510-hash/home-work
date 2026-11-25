import type { User } from "./types";

const IMAGE_API = "https://to-dos-api.softclub.tj/images/";

interface UserCardProps {
    elem: User;
    onDelete: (id: number) => void;
    onEdit: (elem: User) => void;
}

function UserCard({ elem, onDelete, onEdit }: UserCardProps) {
    const hasImage = elem.images && elem.images.length > 0;

    return (
        <div className="card">
            {hasImage ? (
                <img src={`${IMAGE_API}${elem.images[0].imageName}`} alt={elem.name} />
            ) : (
                <div className="noImage">Расм нест</div>
            )}
            <h1>{elem.name}</h1>
            <p>{elem.description}</p>
            <div className="card-btns">
                <button onClick={() => onDelete(elem.id)}>Delete</button>
                <button onClick={() => onEdit(elem)}>Edit</button>
            </div>
        </div>
    );
}

export default UserCard;
