import { PostType } from "@/interfaces/postType";
import pathPrefix from "@/lib/pathPrefix";

type Props = {
  type: PostType;
};

const prefix = pathPrefix();

const Avatar = ({ type } : Props ) => {
  let picture = '';
  let name = '';

  switch (type) {
    case 'music':
      picture = prefix + '/assets/blog/categories/music.png'
      name = 'Music';
      break;
    case 'travel':
      picture = prefix + '/assets/blog/categories/travel.png'
      name = 'Travel';
      break;
    case 'coding':
      picture = prefix + '/assets/blog/categories/coding.png'
      name = 'Coding';
      break;
  };

  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
