export default function SocailSideBar({ language, color }) {
  return (
    <div className="sm:fixed flex pb-5 md:pb-0 sm:flex-col sm:space-y-5 justify-evenly items-center mx-auto sm:ml-6 bottom-0 left-0 z-20">
      <a className="flex items-center w-5 h-5" target="_blank" rel="noreferrer" href="https://github.com/NicoCalvelo">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="transition-all duration-500"
            d="M9.97719 2.64914e-07C5.08412 -0.000628249 0.913003 3.54799 0.129587 8.37793C-0.653829 13.2079 2.18178 17.893 6.82419 19.439C7.32419 19.529 7.50319 19.222 7.50319 18.958C7.50319 18.721 7.49519 18.093 7.49219 17.258C4.71719 17.858 4.13119 15.92 4.13119 15.92C3.9485 15.317 3.55577 14.7993 3.02419 14.461C2.12419 13.842 3.09319 13.856 3.09319 13.856C3.73387 13.9438 4.29774 14.3235 4.62019 14.884C4.89312 15.3803 5.35295 15.747 5.89749 15.9026C6.44204 16.0583 7.0262 15.99 7.52019 15.713C7.56661 15.207 7.79173 14.7341 8.15519 14.379C5.94119 14.128 3.61319 13.272 3.61319 9.449C3.6009 8.4602 3.96809 7.5043 4.63919 6.778C4.33554 5.91731 4.3713 4.97325 4.73919 4.138C4.73919 4.138 5.57619 3.869 7.48119 5.159C9.11503 4.71101 10.8393 4.71101 12.4732 5.159C14.3792 3.868 15.2152 4.138 15.2152 4.138C15.5848 4.97286 15.6206 5.91757 15.3152 6.778C15.9887 7.50423 16.3556 8.46264 16.3392 9.453C16.3392 13.286 14.0092 14.128 11.7872 14.375C12.2665 14.8651 12.5123 15.5373 12.4622 16.221C12.4622 17.555 12.4502 18.631 12.4502 18.958C12.4502 19.225 12.6282 19.535 13.1372 19.437C17.7777 17.8884 20.6102 13.203 19.8252 8.37432C19.0402 3.54565 14.8692 -0.00111917 9.97719 2.64914e-07Z"
            fill={color}
          />
        </svg>
      </a>
      <a className="flex items-center w-5 h-5" target="_blank" rel="noreferrer" href="https://www.instagram.com/nico.calvelo/">
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-500"
          d="M9 18.036C6.54 18.036 6.25 18.023 5.29 17.981C4.54137 17.9564 3.80243 17.8042 3.105 17.531C1.89831 17.0614 0.94414 16.1069 0.475 14.9C0.212306 14.2 0.0706179 13.4605 0.056 12.713C0 11.755 0 11.441 0 9C0 6.533 0.013 6.245 0.056 5.29C0.0709376 4.54352 0.212621 3.80501 0.475 3.106C0.943631 1.89753 1.89935 0.942172 3.108 0.474C3.80664 0.210202 4.54535 0.0681443 5.292 0.054C6.247 0 6.561 0 9 0C11.48 0 11.765 0.013 12.71 0.054C13.4586 0.0682666 14.1992 0.21031 14.9 0.474C16.1083 0.942703 17.0638 1.89788 17.533 3.106C17.8001 3.81519 17.9426 4.56525 17.954 5.323C18.01 6.281 18.01 6.594 18.01 9.034C18.01 11.474 17.996 11.794 17.954 12.741C17.9391 13.4892 17.7971 14.2294 17.534 14.93C17.0637 16.1377 16.1081 17.0926 14.9 17.562C14.2002 17.8242 13.4611 17.9659 12.714 17.981C11.759 18.036 11.446 18.036 9 18.036ZM8.966 1.583C6.52 1.583 6.266 1.595 5.311 1.638C4.74098 1.64555 4.17648 1.75074 3.642 1.949C2.85275 2.25101 2.22823 2.87299 1.923 3.661C1.72321 4.2013 1.61801 4.77198 1.612 5.348C1.559 6.317 1.559 6.571 1.559 9C1.559 11.4 1.568 11.691 1.612 12.654C1.62095 13.2242 1.7261 13.7888 1.923 14.324C2.22868 15.1115 2.85309 15.733 3.642 16.035C4.17611 16.2346 4.74085 16.3398 5.311 16.346C6.279 16.402 6.534 16.402 8.966 16.402C11.419 16.402 11.673 16.39 12.62 16.346C13.1904 16.3391 13.7553 16.2339 14.29 16.035C15.0745 15.7304 15.6949 15.1103 16 14.326C16.1994 13.7852 16.3046 13.2143 16.311 12.638H16.322C16.365 11.682 16.365 11.427 16.365 8.984C16.365 6.541 16.354 6.284 16.311 5.329C16.302 4.75945 16.1969 4.19551 16 3.661C15.6956 2.87557 15.0751 2.25429 14.29 1.949C13.7555 1.74974 13.1904 1.64452 12.62 1.638C11.653 1.583 11.4 1.583 8.966 1.583ZM9 13.619C7.12999 13.6202 5.44342 12.4947 4.72686 10.7675C4.01031 9.04018 4.40491 7.05133 5.72663 5.72846C7.04836 4.40559 9.03686 4.00927 10.7648 4.72433C12.4927 5.43939 13.6196 7.12499 13.62 8.995C13.6172 11.5461 11.5511 13.614 9 13.619ZM9 5.993C7.34315 5.993 6 7.33615 6 8.993C6 10.6499 7.34315 11.993 9 11.993C10.6569 11.993 12 10.6499 12 8.993C11.9962 7.33774 10.6553 5.99685 9 5.993ZM13.8 5.28C13.2054 5.27779 12.7249 4.79459 12.726 4.20001C12.7271 3.60543 13.2094 3.12401 13.804 3.12401C14.3986 3.12401 14.8809 3.60542 14.882 4.2C14.8823 4.48686 14.7683 4.76202 14.5653 4.96468C14.3622 5.16733 14.0869 5.2808 13.8 5.28Z"
            fill={color}
        />
      </svg>
      </a>
      <a className="flex items-center w-5 h-5" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nico-calvelo-1089181b6/">
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-500"
          d="M10 18H6V6H10V8C10.8526 6.91525 12.1456 6.26857 13.525 6.237C16.0056 6.25077 18.0072 8.26938 18 10.75V18H14V11.25C13.84 10.1326 12.8818 9.30358 11.753 9.306C11.2593 9.32161 10.7932 9.53778 10.4624 9.90462C10.1316 10.2715 9.96464 10.7573 10 11.25V18ZM4 18H0V6H4V18ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
          fill={color}
        />
      </svg>
      </a>
      <a className="flex items-center w-5 h-5" target="_blank" rel="noreferrer" href="https://twitter.com/nicocalvelo_">
      <svg width="20" height="16" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-500"
          d="M18.454 2.6792C19.3504 2.14329 20.0212 1.29944 20.341 0.3052C19.4987 0.805002 18.577 1.15708 17.616 1.3462C16.2836 -0.063273 14.1725 -0.406274 12.4624 0.508856C10.7523 1.42399 9.8665 3.37069 10.3 5.2612C6.84961 5.08797 3.63497 3.45812 1.456 0.7772C0.31884 2.73862 0.899953 5.24598 2.784 6.5072C2.10271 6.4853 1.43653 6.30084 0.841 5.9692C0.841 5.9872 0.841 6.0052 0.841 6.0232C0.841394 8.06635 2.28137 9.82628 4.284 10.2312C3.65206 10.4031 2.98921 10.4284 2.346 10.3052C2.9092 12.0525 4.51955 13.2495 6.355 13.2852C4.83483 14.4783 2.95748 15.1254 1.025 15.1222C0.682471 15.1227 0.34021 15.103 0 15.0632C1.96239 16.3242 4.24637 16.9936 6.579 16.9912C9.82425 17.0135 12.943 15.7341 15.2377 13.4392C17.5324 11.1443 18.8116 8.02545 18.789 4.7802C18.789 4.5942 18.7847 4.4092 18.776 4.2252C19.6165 3.6178 20.3418 2.86535 20.918 2.0032C20.135 2.35026 19.3045 2.57812 18.454 2.6792Z"
          fill={color}
        />
      </svg>
      </a>
      <div className={"hidden sm:block h-32 w-0.25 transition-all duration-500 " + (color =='#2FEB98' ?'bg-palette-green' : color =='#EB784B' ?'bg-palette-orange' :color=='#FFEC40' ?'bg-palette-yellow' :'bg-palette-grey')} />
    </div>
  );
}
