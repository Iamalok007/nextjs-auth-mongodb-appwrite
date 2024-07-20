export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="
        text-4xl font-bold text-center 
        mb-4 text-blue-500
        ">Profile</h1>
        <span>{params.id}</span>
        <hr />
        </div>
    );
    }