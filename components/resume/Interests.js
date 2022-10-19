const InterestsList = {
  English: [
    {
      title: "Interests",
      list: ["Nature", "Tech", "Startups"],
    },
    {
      title: "Languages",
      list: ["French", "English", "Spanish"],
    },
    {
      title: "Sports",
      list: ["Tennis", "Cycling", "Basketball"],
    },
  ],
  Spanish: [
    {
      title: "Intereses",
      list: ["Naturaleza", "Tecnología", "Startups"],
    },
    {
      title: "Idioma",
      list: ["Francés", "Inglés", "Español"],
    },
    {
      title: "Deportes",
      list: ["Tenis", "Ciclismo", "Basquet"],
    },
  ],
  French: [
    {
      title: "Intérêts",
      list: ["Nature", "Tech", "Startups"],
    },
    {
      title: "Langue",
      list: ["Français", "Anglais", "Espagnol"],
    },
    {
      title: "Sports",
      list: ["Tennis", "Cyclisme", "Basquet"],
    },
  ],
};

const margins = [
  ["", "", ""],
  ["mr-16", "mr-3", ""],
  ["mr-16", "mr-10", ""],
];

const getSvg = (n) => {
  if (n == 0)
    return (
      <svg width="38" height="40" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28.4696 33.5265L27.1279 32.8557L27.1279 32.8557L28.4696 33.5265ZM35.083 20.2996L36.4246 20.9704L36.4246 20.9704L35.083 20.2996ZM16.5811 35.5027L16.9449 34.0475L16.9449 34.0475L16.5811 35.5027ZM9.47424 16.72L8.22617 15.8879C8.0619 16.1343 7.97424 16.4238 7.97424 16.72H9.47424ZM18.922 13.3304C18.0936 13.3304 17.422 14.002 17.422 14.8304C17.422 15.6588 18.0936 16.3304 18.922 16.3304V13.3304ZM10.419 16.3304C11.2474 16.3304 11.919 15.6588 11.919 14.8304C11.919 14.002 11.2474 13.3304 10.419 13.3304V16.3304ZM15.8843 7.10494L17.1323 7.93699L17.1323 7.93699L15.8843 7.10494ZM31.7029 13.3304H22.7011V16.3304H31.7029V13.3304ZM29.8112 34.1973L36.4246 20.9704L33.7414 19.6288L27.1279 32.8557L29.8112 34.1973ZM9.11044 35.1812L16.2173 36.9579L16.9449 34.0475L9.83805 32.2708L9.11044 35.1812ZM17.4977 37.1155H25.0894V34.1155H17.4977V37.1155ZM24.2011 14.8304V5.38263H21.2011V14.8304H24.2011ZM18.922 0.103516H18.7416V3.10352H18.922V0.103516ZM7.97424 16.72V33.726H10.9742V16.72H7.97424ZM16.2173 36.9579C16.6361 37.0626 17.0661 37.1155 17.4977 37.1155V34.1155C17.3114 34.1155 17.1257 34.0927 16.9449 34.0475L16.2173 36.9579ZM27.1279 32.8557C26.7418 33.6278 25.9527 34.1155 25.0894 34.1155V37.1155C27.089 37.1155 28.917 35.9858 29.8112 34.1973L27.1279 32.8557ZM24.2011 5.38263C24.2011 2.46705 21.8376 0.103516 18.922 0.103516V3.10352C20.1807 3.10352 21.2011 4.12391 21.2011 5.38263H24.2011ZM31.7029 16.3304C33.3971 16.3304 34.4991 18.1134 33.7414 19.6288L36.4246 20.9704C38.1797 17.4603 35.6273 13.3304 31.7029 13.3304V16.3304ZM22.7011 13.3304H18.922V16.3304H22.7011V13.3304ZM10.419 13.3304H5.69513V16.3304H10.419V13.3304ZM0.416016 18.6095V29.9469H3.41602V18.6095H0.416016ZM5.69513 35.226H9.47424V32.226H5.69513V35.226ZM0.416016 29.9469C0.416016 32.8624 2.77956 35.226 5.69513 35.226V32.226C4.43641 32.226 3.41602 31.2056 3.41602 29.9469H0.416016ZM5.69513 13.3304C2.77956 13.3304 0.416016 15.694 0.416016 18.6095H3.41602C3.41602 17.3508 4.43641 16.3304 5.69513 16.3304V13.3304ZM14.6362 6.27289L8.22617 15.8879L10.7223 17.552L17.1323 7.93699L14.6362 6.27289ZM15.5325 3.31267C15.5325 4.36625 15.2206 5.39626 14.6362 6.27289L17.1323 7.93699C18.0453 6.56755 18.5325 4.95852 18.5325 3.31267H15.5325ZM18.7416 0.103516C16.9693 0.103516 15.5325 1.5403 15.5325 3.31267H18.5325C18.5325 3.19716 18.6261 3.10352 18.7416 3.10352V0.103516Z"
          fill="#98CDD2"
        />
      </svg>
    );
  if (n == 1)
    return (
      <svg width="40" height="40" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.01562 4.16039C1.1872 4.16039 0.515625 4.83196 0.515625 5.66039C0.515625 6.48882 1.1872 7.16039 2.01562 7.16039V4.16039ZM24.2358 7.16039C25.0642 7.16039 25.7358 6.48882 25.7358 5.66039C25.7358 4.83196 25.0642 4.16039 24.2358 4.16039V7.16039ZM14.6257 1.95703C14.6257 1.1286 13.9541 0.457031 13.1257 0.457031C12.2973 0.457031 11.6257 1.1286 11.6257 1.95703H14.6257ZM11.6257 5.66039C11.6257 6.48882 12.2973 7.16039 13.1257 7.16039C13.9541 7.16039 14.6257 6.48882 14.6257 5.66039H11.6257ZM13.9874 24.2931C14.5628 24.8892 15.5124 24.9059 16.1084 24.3305C16.7044 23.7552 16.7212 22.8056 16.1458 22.2096L13.9874 24.2931ZM9.71504 12.4833C9.39262 11.7202 8.51263 11.363 7.74951 11.6854C6.9864 12.0078 6.62915 12.8878 6.95157 13.6509L9.71504 12.4833ZM19.6066 28.2322C18.7782 28.2322 18.1066 28.9038 18.1066 29.7322C18.1066 30.5606 18.7782 31.2322 19.6066 31.2322V28.2322ZM32.5683 31.2322C33.3968 31.2322 34.0683 30.5606 34.0683 29.7322C34.0683 28.9038 33.3968 28.2322 32.5683 28.2322V31.2322ZM15.4874 34.6164C15.1169 35.3574 15.4173 36.2584 16.1582 36.6289C16.8992 36.9994 17.8002 36.699 18.1707 35.9581L15.4874 34.6164ZM26.0875 16.7705L27.4291 16.0996C27.175 15.5915 26.6556 15.2705 26.0875 15.2705C25.5193 15.2705 24.9999 15.5915 24.7458 16.0996L26.0875 16.7705ZM34.0042 35.9581C34.3747 36.699 35.2757 36.9994 36.0167 36.6289C36.7576 36.2584 37.058 35.3574 36.6875 34.6164L34.0042 35.9581ZM21.5509 5.90857C21.688 5.09156 21.1368 4.31813 20.3198 4.18106C19.5028 4.044 18.7293 4.5952 18.5923 5.41221L21.5509 5.90857ZM1.34808 28.6277C0.606208 28.9964 0.303676 29.8967 0.672353 30.6386C1.04103 31.3804 1.94131 31.683 2.68317 31.3143L1.34808 28.6277ZM2.01562 7.16039H24.2358V4.16039H2.01562V7.16039ZM11.6257 1.95703V5.66039H14.6257V1.95703H11.6257ZM16.1458 22.2096C13.4439 19.4106 11.251 16.1188 9.71504 12.4833L6.95157 13.6509C8.63328 17.6312 11.0329 21.2325 13.9874 24.2931L16.1458 22.2096ZM19.6066 31.2322H32.5683V28.2322H19.6066V31.2322ZM18.1707 35.9581L27.4291 17.4413L24.7458 16.0996L15.4874 34.6164L18.1707 35.9581ZM24.7458 17.4413L34.0042 35.9581L36.6875 34.6164L27.4291 16.0996L24.7458 17.4413ZM18.5923 5.41221C16.8812 15.6114 10.3156 24.1713 1.34808 28.6277L2.68317 31.3143C12.4906 26.4404 19.6769 17.0786 21.5509 5.90857L18.5923 5.41221Z"
          fill="#98CDD2"
        />
      </svg>
    );
  if (n == 2)
    return (
      <svg width="36" height="40" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.7234 16.487V2.05957L2.17383 24.7312H16.6012L16.6012 39.1586L35.1508 16.487L20.7234 16.487Z"
          stroke="#98CDD2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
};

export default function Interests({ language }) {
  return (
    <div className="flex flex-col md:flex-row justyfy-between items-center md:py-10 mr-5 md:mr-0 text-xs md:text-sm text-palette-grey-blue">
      {[0, 1, 2].map((element) => {
        return (
          <div
            key={element.toString()}
            className="flex flex-row w-full md:w-2/6 space-x-2 items-center mx-8 justify-between"
          >
            <div className="flex flex-col space-y-2 items-center w-16 md:w-20">
              {getSvg(element)}
              <p className="font-semibold text-sm md:text-base tarcking-wider">
                {InterestsList[language][element]["title"]}
              </p>
            </div>
            <div className="flex flex-col flex-grow justify-center space-y-1 font-light tracking-wide h-24 md:h-64">
              {[0, 1, 2].map((i) => {
                return (
                  <div
                    key={element.toString() + i.toString()}
                    className={
                      "flex ml-6 items-center border border-palette-orange border-opacity-50 rounded px-4 "
                    }
                  >
                    <div className="rounded">
                      {InterestsList[language][element]["list"][i]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}