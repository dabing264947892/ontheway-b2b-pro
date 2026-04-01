export default function Logo({ className }: { className?: string }) {
    return (
        <svg 
            viewBox="0 0 320 100" 
            className={className} 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Chunky Red Wings `<` simulating airplane and compass */}
            <g fill="#E62B22">
                {/* Upper thick sweep */}
                <path d="M 100 15 Q 55 15 5 50 L 20 65 Q 65 35 115 35 Z" />
                {/* Lower thick sweep */}
                <path d="M 5 50 Q 55 85 105 100 L 90 100 Q 45 80 0 50 Z" />
                {/* Aero core strut */}
                <path d="M 20 50 L 105 25 L 95 25 L 12 50 Z" />
            </g>
            {/* ON THE WAY text with modern UI rounded styling */}
            <text
                x="110"
                y="65"
                fontFamily="ui-rounded, 'Arial Rounded MT Bold', 'Nunito', 'Quicksand', system-ui, sans-serif"
                fontWeight="800"
                fontSize="42"
                letterSpacing="1.2"
                fill="#C8A86B"
            >
                ON THE WAY
            </text>
        </svg>
    );
}
