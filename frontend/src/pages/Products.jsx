import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import api from "../api";
import Product from "../components/ProductFull";
import Review from "../components/Review";

function Products() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [form, setForm] = useState({ title: "", description: "" });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        api.get(`/shop/products/${id}/`).then((res) => setProduct(res.data)).catch((err) => alert(err));
        fetchReviews();
        // get logged-in user
        api.get("/shop/me/").then((res) => setCurrentUser(res.data)).catch(() => setCurrentUser(null));
    }, [id]);

    const fetchReviews = () => {
        api.get(`/shop/products/${id}/reviews/`).then((res) => setReviews(res.data)).catch((err) => alert(err));
    };

    const AddtoCart = () => {
        api.post("/shop/cart/items/", { product_id: product.id, amount: 1 }).then((res) => {
            if (res.status === 201) alert("Added To Cart");
            else alert("Failed To Add To Cart");
        }).catch(() => alert("Please Login Before Adding To Cart"));
    };

    const handleDelete = (reviewId) => {
        api.delete(`/shop/products/reviews/${reviewId}/`).then(() => {
            setReviews(reviews.filter((r) => r.id !== reviewId));
        }).catch((err) => alert("Failed to delete review"));
    };

    const handleSubmit = () => {
        if (!form.title || !form.description) return alert("Please fill in all fields");
        setSubmitting(true);
        api.post(`/shop/products/${id}/reviews/create/`, {
            title: form.title,
            description: form.description,
            product_id: parseInt(id),
        }).then(() => {
            setForm({ title: "", description: "" });
            fetchReviews(); // refresh list
        }).catch(() => alert("Failed to submit review. You may have already reviewed this product."))
          .finally(() => setSubmitting(false));
    };

    // check if logged-in user already has a review
    const userHasReview = currentUser && reviews.some((r) => r.author === currentUser.username);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <Product product={product} onAdd={AddtoCart} />

            <h1>Reviews</h1>

            {reviews.map((review) => (
                <div key={review.id}>
                    <Review review={review} />
                    {currentUser && review.author === currentUser.username && (
                        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
                    )}
                </div>
            ))}

            {/* Show form only if logged in and hasn't reviewed yet */}
            {currentUser && !userHasReview && (
                <div>
                    <h2>Write a Review</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                    />
                    <button onClick={handleSubmit} disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit Review"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Products;