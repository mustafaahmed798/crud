import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../Redux/crudSlice";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [id, setId] = useState(null);
  const posts = useSelector((state) => state.crud.posts);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="form">
        <h1>Curd posts using Redux-toolkit</h1>

        <div className="bord">
          <input
            type="text"
            value={title}
            placeholder="Enter post title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            value={description}
            placeholder="Enter post desc"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addPost({ id: posts.length + 1, title, description }));
              setTitle("");
              setDescription("");
            }}
          >
            Add Post
          </button>
        </div>
      </div>
      <div className="posts">
        {posts.length > 0
          ? posts.map((post) => (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button
                  onClick={() => {
                    setIsEdit(true);
                    setId(post.id);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deletePost(post.id))}>
                  Delete
                </button>
                <br />
                {isEdit && id == post.id && (
                  <>
                    <input
                      type="text"
                      placeholder="Updated Title"
                      onChange={(e) => {
                        post.title && setUpdateTitle(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Updated Desc"
                      onChange={(e) => setUpdateDescription(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updateTitle,
                            description: updateDescription,
                          })
                        );
                        setIsEdit(false);
                      }}
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
            ))
          : "There is no posts yet"}
      </div>
    </div>
  );
};

export default Posts;
