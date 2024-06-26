import { SVGAttributes } from "react";
export default function SdCardBack({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="M12.5 7H12v1h1v4.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5V4.914c0-.398.158-.779.439-1.06l2.415-2.415A1.5 1.5 0 0 1 5.914 1H11.5A1.503 1.503 0 0 1 13 2.5V7zM12 6V2.5a.5.5 0 0 0-.146-.354A.5.5 0 0 0 11.5 2H5.914a.5.5 0 0 0-.353.146L3.146 4.561A.5.5 0 0 0 3 4.914V12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9h-1V6z"/><path d="M5 5.25v1.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 6.75v-1.5A.25.25 0 0 1 4.25 5h.5a.25.25 0 0 1 .25.25M7 3.25v1.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 4.75v-1.5A.25.25 0 0 1 6.25 3h.5a.25.25 0 0 1 .25.25M9 3.25v1.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 4.75v-1.5A.25.25 0 0 1 8.25 3h.5a.25.25 0 0 1 .25.25M11 3.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25"/></svg>
  );
}
