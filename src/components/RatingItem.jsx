import React from "react";

type Props = {
  isOrange?: boolean
};

const RatingItem = ({ isOrange = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect width="16" height="16" fill="#E5E5E5" />
      <g id="Food Landing page" clipPath="url(#clip0_0_1)">
        <rect
          width="1440"
          height="5498"
          transform="translate(-433 -2965)"
          fill="white"
        />
        <g id="Menu">
          <g id="Menu_2">
            <g id="Group 120">
              <g id="Group 119">
                <g id="Group 118">
                  <g id="Group 106">
                    <g id="Group 99">
                      <g id="Group 46">
                        <g id="Group 45">
                          <g id="Group 44">
                            <g id="Group 17">
                              <g id="Group 13">
                                <g id="Rectangle 39">
                                  <path
                                    d="M-283 -315C-283 -356.421 -249.421 -390 -208 -390H67C72.5229 -390 77 -385.523 77 -380V46C77 51.5228 72.5229 56 67 56H-273C-278.523 56 -283 51.5229 -283 46V-315Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M-282.5 -315C-282.5 -356.145 -249.145 -389.5 -208 -389.5H67C72.2467 -389.5 76.5 -385.247 76.5 -380V46C76.5 51.2467 72.2467 55.5 67 55.5H-273C-278.247 55.5 -282.5 51.2467 -282.5 46V-315Z"
                                    stroke="black"
                                    strokeOpacity="0.1"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="Group 105">
                      <g id="Group 87">
                        <g id="star 3" clipPath="url(#clip1_0_1)">
                          <g id="Group">
                            <g id="Group_2">
                              <path
                                id="Vector"
                                d="M16 6.18179L10.1863 5.79957L7.99681 0.299072L5.80734 5.79957L0 6.18179L4.45419 9.96385L2.99256 15.701L7.99681 12.5379L13.0011 15.701L11.5395 9.96385L16 6.18179Z"
                                fill={isOrange ? "#DC780B" : "#EDEDED"}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="1440"
            height="5498"
            fill="white"
            transform="translate(-433 -2965)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RatingItem;
