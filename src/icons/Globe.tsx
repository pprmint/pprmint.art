import { SVGAttributes } from "react";
export default function Globe({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="M7.5.9c3.643 0 6.6 2.957 6.6 6.6s-2.957 6.6-6.6 6.6A6.603 6.603 0 0 1 .9 7.5C.9 3.857 3.857.9 7.5.9M2.104 6a5.6 5.6 0 0 0 0 3h1.98a8.5 8.5 0 0 1 0-3zm.384 4a5.62 5.62 0 0 0 3.397 2.863C5.217 12.094 4.667 11.11 4.326 10zm2.886 0c.451 1.292 1.224 2.361 2.126 3.002.902-.641 1.675-1.71 2.126-3.002zm5.3 0c-.341 1.11-.891 2.094-1.559 2.863A5.62 5.62 0 0 0 12.512 10zm2.222-1a5.6 5.6 0 0 0 0-3h-1.98a8.5 8.5 0 0 1 0 3zm-.384-4a5.62 5.62 0 0 0-3.397-2.863c.668.769 1.218 1.753 1.559 2.863zM9.626 5C9.175 3.708 8.402 2.639 7.5 1.998 6.598 2.639 5.825 3.708 5.374 5zm-5.3 0c.341-1.11.891-2.094 1.559-2.863A5.62 5.62 0 0 0 2.488 5zM5.1 6a7.6 7.6 0 0 0 0 3h4.8a7.6 7.6 0 0 0 0-3z"/></svg>
  );
}
