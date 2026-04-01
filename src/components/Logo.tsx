export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 260 70"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet"
            style={{ overflow: "visible" }}
        >
            {/*
             * Brand mark: red left-pointing angular chevron
             * Matches the real OTW logo: bold angular shape like a
             * stylized arrow/wing pointing left, with a curved inner notch.
             *
             * Coordinates designed for 60px-tall icon at x=0, centered vertically on 70px canvas.
             */}
            {/* Outer silhouette of the chevron */}
            <path
                d="
                    M 58 5
                    C 48 5, 35 14, 5 35
                    L 2 38
                    L 5 41
                    C 22 54, 40 62, 58 65
                    L 62 65
                    C 44 62, 28 54, 12 42
                    C 32 38, 50 30, 60 18
                    L 60 5
                    Z
                "
                fill="#E8311F"
            />
            {/* Inner concave cutout to create the wing notch */}
            <path
                d="
                    M 58 10
                    C 45 10, 34 18, 14 36
                    C 28 30, 44 24, 56 24
                    L 56 10
                    Z
                "
                fill="white"
            />

            {/* "ON THE WAY" wordmark */}
            <text
                x="74"
                y="50"
                fontFamily="'Nunito', 'Quicksand', 'DM Sans', 'Arial', sans-serif"
                fontWeight="800"
                fontSize="32"
                letterSpacing="1"
                fill="#C8A050"
            >
                ON THE WAY
            </text>
        </svg>
    );
}
