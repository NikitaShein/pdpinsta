import {filmSvg} from '../theme/icons/film.icon';
import {homeSvg} from '../theme/icons/home.icon';
import {searchSvg} from '../theme/icons/search.icon';
import {profileSvg} from '../theme/icons/profile.icon';
import {plusCircleSvg} from '../theme/icons/plusCircle.icon';
import {dotsSvg} from '../theme/icons/dots.icon';
import {likeSvg} from '../theme/icons/like.icon';
import {repostSvg} from '../theme/icons/repost.icon';
import {bookmarkSvg} from '../theme/icons/bookmark.icon';
import {commentSvg} from '../theme/icons/comment.icon';

export const getSvg = (
  color: string,
  name: string,
  strokeColor: string | undefined,
  strokeWidth?: string | undefined,
) => {
  const currentSvg: (
    color: string,
    strokeColor: string | undefined,
    strokeWidth: string | undefined,
  ) => string = svgs[name as keyof typeof svgs];

  return currentSvg(color, strokeColor, strokeWidth);
};

export const svgs: {[key: string]: (color: string) => string} = {
  home: homeSvg,
  search: searchSvg,
  film: filmSvg,
  profile: profileSvg,
  plusCircle: plusCircleSvg,
  dots: dotsSvg,
  like: likeSvg,
  repost: repostSvg,
  bookmark: bookmarkSvg,
  comment: commentSvg,
};
