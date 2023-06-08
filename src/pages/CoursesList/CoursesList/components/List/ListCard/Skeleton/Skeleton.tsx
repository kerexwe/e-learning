import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props:any) => (
  <ContentLoader 
    speed={2}
    width={808}
    height={320}
    viewBox="0 0 808 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-4" y="-2" rx="0" ry="0" width="240" height="320" /> 
    <rect x="260" y="14" rx="0" ry="0" width="86" height="20" /> 
    <rect x="700" y="10" rx="0" ry="0" width="84" height="36" /> 
    <rect x="252" y="112" rx="0" ry="0" width="510" height="28" /> 
    <rect x="253" y="69" rx="0" ry="0" width="400" height="26" /> 
    <rect x="256" y="155" rx="0" ry="0" width="164" height="28" /> 
    <rect x="1000" y="155" rx="0" ry="0" width="97" height="26" />
    <rect x="257" y="200" rx="0" ry="0" width="257" height="40" /> 
    <rect x="262" y="270" rx="0" ry="0" width="96" height="26" /> 
    <rect x="343" y="270" rx="0" ry="0" width="96" height="26" /> 
  </ContentLoader>
)

export default Skeleton