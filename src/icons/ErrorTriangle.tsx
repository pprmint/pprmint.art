import { SVGAttributes } from "react";
export default function ErrorTriangle({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="m10.03 10.354-.707.707L4.97 6.707 5.677 6z"/><path d="M1.503 14.008a1.5 1.5 0 0 1-1.291-2.263L6.209 1.601a1.5 1.5 0 0 1 2.582 0l5.997 10.144a1.499 1.499 0 0 1-1.291 2.263zm0-1h11.994a.499.499 0 0 0 .43-.755L7.93 2.11a.5.5 0 0 0-.86 0L1.073 12.253a.5.5 0 0 0 .43.755"/><path d="m9.323 6 .707.707-4.353 4.354-.707-.707z"/></svg>
  );
}
