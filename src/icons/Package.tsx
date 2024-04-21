import { SVGAttributes } from "react";
export default function Package({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="M1 12.5V5.408c0-.691.205-1.366.588-1.941l1.199-1.799A1.5 1.5 0 0 1 4.035 1h6.93c.501 0 .97.251 1.248.668l1.199 1.799c.383.575.588 1.25.588 1.941V12.5a1.503 1.503 0 0 1-1.5 1.5h-10A1.503 1.503 0 0 1 1 12.5m11.567-8.499-1.186-1.778A.5.5 0 0 0 10.965 2H8v2h4.5zM7 2H4.035a.5.5 0 0 0-.416.223L2.433 4.001 2.5 4H7zm6 10.5v-7a.5.5 0 0 0-.146-.354A.5.5 0 0 0 12.5 5h-10a.5.5 0 0 0-.354.146A.5.5 0 0 0 2 5.5v7c0 .133.053.26.146.354A.5.5 0 0 0 2.5 13h10c.133 0 .26-.053.354-.146A.5.5 0 0 0 13 12.5"/><path d="M9.5 6c.133 0 .26.053.354.146a.504.504 0 0 1 0 .708A.5.5 0 0 1 9.5 7h-4a.5.5 0 0 1-.354-.146.504.504 0 0 1 0-.708A.5.5 0 0 1 5.5 6z"/></svg>
  );
}
