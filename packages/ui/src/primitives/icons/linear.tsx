import { Icon, type IconProps } from './icon';

export default function Linear(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox='0 0 20 20'>
        <g clipPath='url(#clip0_2269_3241)'>
          <mask
            id='mask0_2269_3241'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='20'
            height='20'
          >
            <path
              d='M20 0H0V20H20V0Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask0_2269_3241)'>
            <path
              d='M0.245082 12.3046C0.200582 12.1149 0.426578 11.9954 0.564358 12.1332L7.86684 19.4356C8.00462 19.5734 7.88514 19.7994 7.69544 19.7549C4.0103 18.8904 1.10956 15.9897 0.245082 12.3046ZM0.000378269 9.37782C-0.00315048 9.43448 0.0181527 9.4898 0.0582926 9.52994L10.4701 19.9417C10.5102 19.9818 10.5655 20.0032 10.6222 19.9996C11.096 19.9701 11.5609 19.9076 12.0147 19.8144C12.1676 19.783 12.2207 19.5952 12.1103 19.4848L0.51519 7.8897C0.404818 7.77932 0.216956 7.83244 0.185555 7.98534C0.0923722 8.43906 0.0298912 8.90398 0.000378269 9.37782ZM0.842186 5.94108C0.808888 6.01584 0.825848 6.1032 0.883716 6.16108L13.8389 19.1163C13.8968 19.1742 13.9842 19.1911 14.0589 19.1578C14.4161 18.9987 14.7623 18.8193 15.096 18.621C15.2064 18.5554 15.2235 18.4037 15.1327 18.3129L1.68713 4.86734C1.59631 4.77652 1.44459 4.79356 1.37898 4.90398C1.18072 5.23766 1.0013 5.58386 0.842186 5.94108ZM2.53174 3.6148C2.45772 3.54078 2.45314 3.42206 2.52288 3.34398C4.3559 1.29186 7.02228 0 9.99038 0C15.5185 0 20 4.48146 20 10.0096C20 12.9777 18.7081 15.6441 16.656 17.4771C16.578 17.5469 16.4592 17.5423 16.3852 17.4683L2.53174 3.6148Z'
              fill='url(#paint0_linear_2269_3241)'
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_2269_3241'
            x1='10'
            y1='0'
            x2='10'
            y2='20'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#5C6BF1' />
            <stop
              offset='1'
              stopColor='#283188'
            />
          </linearGradient>
          <clipPath id='clip0_2269_3241'>
            <rect
              width='20'
              height='20'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
}
