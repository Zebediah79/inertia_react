import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Create({ post }) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });
    const route = useRoute(); //useRoute method from Ziggy package

    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);        //hardcoded routes
        put(route("posts.update", post)); //useRoute method from Ziggy package
    }

    return (
        <>
            <Head title="Edit" />
            <h1 className="title">Update post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
}
