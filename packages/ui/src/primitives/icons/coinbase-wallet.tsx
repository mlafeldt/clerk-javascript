import { Icon, type IconProps } from './icon';

export default function CoinbaseWallet(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox='0 0 20 20'>
        <g clipPath='url(#clip0_132_5)'>
          <path
            d='M10 20C15.5231 20 20 15.5231 20 10C20 4.47688 15.5231 0 10 0C4.47688 0 0 4.47688 0 10C0 15.5231 4.47688 20 10 20Z'
            fill='#0052FF'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3 10C3 13.8662 6.13375 17 10 17C13.8656 17 17 13.8662 17 10C17 6.13375 13.8656 3 10 3C6.13375 3 3 6.13375 3 10ZM8.21125 7.74437C8.08743 7.74437 7.96867 7.79356 7.88112 7.88112C7.79356 7.96867 7.74437 8.08743 7.74437 8.21125V11.7887C7.74437 12.0469 7.95312 12.2556 8.21125 12.2556H11.7887C11.9126 12.2556 12.0313 12.2064 12.1189 12.1189C12.2064 12.0313 12.2556 11.9126 12.2556 11.7887V8.21125C12.2556 8.08743 12.2064 7.96867 12.1189 7.88112C12.0313 7.79356 11.9126 7.74437 11.7887 7.74437H8.21125Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_132_5'>
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
