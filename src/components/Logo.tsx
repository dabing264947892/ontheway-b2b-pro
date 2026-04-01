export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 380 110"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            {/*
             * Red brand mark: a bold stylized "<" chevron.
             * Upper arm: sweeps from top-right down to the central tip.
             * Lower arm: sweeps from the tip back up to the bottom-right.
             * A curved notch cuts into the upper arm, giving it the
             * distinctive "R-like" concavity seen in the real logo.
             */}
            <g fill="#E8311F">
                {/* Upper arm of the chevron, with inner curve notch */}
                <path d="
                    M 85 8
                    C 72 8, 55 18, 18 52
                    L 8 62
                    L 18 72
                    C 30 58, 46 42, 58 32
                    C 50 46, 46 58, 50 72
                    L 68 72
                    C 64 58, 68 42, 82 28
                    C 70 28, 62 22, 66 12
                    Z
                " />
                {/* Lower arm of the chevron */}
                <path d="
                    M 8 62
                    C 30 84, 56 96, 82 100
                    L 90 100
                    C 90 100, 60 88, 28 68
                    Z
                " />
            </g>
            {/* "ON THE WAY" wordmark in warm gold, rounded font */}
            <text
                x="108"
                y="73"
                fontFamily="'Nunito', 'Quicksand', 'Arial Rounded MT Bold', ui-rounded, sans-serif"
                fontWeight="700"
                fontSize="46"
                letterSpacing="2"
                fill="#C8A050"
            >
                ON THE WAY
            </text>
        </svg>
    );
}
