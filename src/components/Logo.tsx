export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 360 80"
            width="360"
            height="80"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet"
        >
            {/*
             * Bold left-pointing chevron "<" using a simple 6-point polygon.
             * No curves — guaranteed to render correctly in all browsers.
             *
             * Point layout (viewBox 0 0 360 80):
             *   A(74,4)  ──top outer right
             *   B(4,40)  ──outer tip (leftmost point)
             *   C(74,76) ──bottom outer right
             *   D(74,58) ──bottom inner right  (18px offset from C)
             *   E(28,40) ──inner tip           (24px right of outer tip)
             *   F(74,22) ──top inner right     (18px offset from A)
             *
             * This creates two thick diagonal arms meeting at a sharp left point.
             */}
            <polygon
                points="74,4 4,40 74,76 74,58 28,40 74,22"
                fill="#E8311F"
            />

            {/* Gold "ON THE WAY" wordmark */}
            <text
                x="92"
                y="53"
                fontFamily="Nunito, 'DM Sans', 'Segoe UI', Arial, sans-serif"
                fontWeight="800"
                fontSize="33"
                letterSpacing="2"
                fill="#C8A050"
            >
                ON THE WAY
            </text>
        </svg>
    );
}
