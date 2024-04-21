import { SVGAttributes } from "react";
export default function Add({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="M7 8H3V7h4V3h1v4h4v1H8v4H7z"/></svg>
  );
}
