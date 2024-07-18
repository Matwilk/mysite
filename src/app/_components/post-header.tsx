import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type PostType } from "@/interfaces/postType";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  postType: PostType;
};

export function PostHeader({ title, coverImage, date, postType }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-row flex-nowrap justify-center items-center gap-x-4 text-xl">
        <Avatar type={postType} />
        |
        <DateFormatter dateString={date} />
      </div>
      <div className="mx-16 md:my-8">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
