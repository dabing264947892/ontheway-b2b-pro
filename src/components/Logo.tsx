export default function Logo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 450 100" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {/* Abstract Red Wings `<` simulating airplane and compass */}
            <g fill="#E62B22">
                {/* Main upper wing sweep */}
                <path d="M 120 10 Q 70 10 10 50 L 20 60 Q 75 30 135 25 Z" />
                {/* Lower body wing sweep */}
                <path d="M 10 50 Q 60 85 105 100 L 85 100 Q 40 85 0 50 Z" />
                {/* Inner aero strut */}
                <path d="M 25 50 L 115 15 L 100 15 L 12 50 Z" />
            </g>
            {/* ON THE WAY text with modern UI rounded styling */}
            <text
                x="135"
                y="65"
                fontFamily="ui-rounded, 'Arial Rounded MT Bold', 'Nunito', 'Quicksand', system-ui, sans-serif"
                fontWeight="800"
                fontSize="46"
                letterSpacing="1.5"
                fill="#C8A86B"
            >
                ON THE WAY
            </text>
        </svg>
    );
}
