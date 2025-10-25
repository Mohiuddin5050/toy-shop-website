import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";
import Loading from "./Loading";

const ToyDetails = () => {
    const { toyId } = useParams();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        fetch("/toys.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedToy = data.find(
                    (item) => item.toyId === parseInt(toyId)
                );
                setToy(selectedToy);
            });
    }, [toyId]);

    const handleTryNow = (e) => {
        e.preventDefault();
        toast.success(`You successfully tried ${toy.toyName}!`, {
            position: "top-center",
            autoClose: 2000,
        });
    };

    if (!toy) {
        return <Loading />
    }

    return (
        <div className="flex justify-center items-center py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100 max-w-4xl">
                <figure className="lg:w-1/2">
                    <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full h-full object-cover p-2 rounded-xl"
                    />
                </figure>

                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl text-purple-700">
                        {toy.toyName}
                    </h2>

                    <p className="text-gray-600">{toy.description}</p>

                    <div className="mt-2 space-y-1">
                        <p>
                            <span className="font-semibold">Seller:</span> {toy.sellerName}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span> {toy.sellerEmail}
                        </p>
                        <p>
                            <span className="font-semibold">Category:</span> {toy.subCategory}
                        </p>
                        <p>
                            <span className="font-semibold">Available:</span>{" "}
                            {toy.availableQuantity} pcs
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span>{" "}
                            <span className="text-purple-700 font-bold">
                                ${toy.price.toFixed(2)}
                            </span>
                        </p>
                    </div>

                    <div className="flex items-center gap-1 mt-2 text-yellow-500">
                        {[...Array(Math.round(toy.rating))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                            ({toy.rating})
                        </span>
                    </div>

                    <form onSubmit={handleTryNow} className="mt-8 space-y-3">
                        <h3 className="text-lg font-semibold text-purple-700">
                            Try Now Form
                        </h3>

                        <input
                            type="text"

                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"

                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />

                        <button className="btn bg-purple-600 text-white w-full">
                            Try Now
                        </button>
                    </form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ToyDetails;
