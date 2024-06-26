import { SVGAttributes } from "react";
export default function Fingerprint({ ...props }: SVGAttributes<SVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor" {...props}><path d="M7 7.5h1V10H7zM7 11h1v3H7z"/><path d="M6 13H5v-3h1zm0-4H5V7.5a2.5 2.5 0 0 1 4.811-.955l-.924.383A1.5 1.5 0 0 0 6 7.5zm3-1.283h1V13H9z"/><path d="M8.301 3.071A4.505 4.505 0 0 1 12 7.5v2.433h-1V7.5a3.501 3.501 0 0 0-5.39-2.945l-.542-.841a4.47 4.47 0 0 1 3.233-.643M4 12H3V7.5q.001-.578.139-1.113l.969.247A3.5 3.5 0 0 0 4 7.5zm.428-6.177-.877-.481q.273-.496.657-.909l.731.682q-.298.32-.511.708M11 10.933h1v1h-1z"/><path d="M2 10H1V7.5c0-2.487 1.4-4.651 3.455-5.743l.469.883A5.5 5.5 0 0 0 2 7.5zm3.765-7.721-.315-.948a6.505 6.505 0 0 1 8.059 3.687l-.924.383a5.505 5.505 0 0 0-6.82-3.122m7.097 3.993.975-.222q.162.701.163 1.45V10h-1V7.5q-.001-.634-.138-1.228"/><circle cx="7.5" cy="7.5" r=".5"/></svg>
  );
}
