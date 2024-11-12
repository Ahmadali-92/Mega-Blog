import React from "react";
import { useForm } from "react-hook-form";
import service from "../appwrite/config";
import { useSelector } from "react-redux";

function Postform({ post }) {
  const { userData } = useSelector((state) => state.user);
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "",
      },
    });

  const postSubmit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        await service.deletePost(post.featuredImage);
      }
      const UpPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (UpPost) {
        Navigate("/post/:file.$id");
      }
    } else {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(postSubmit)}></form>
    </>
  );
}

export default Postform;
