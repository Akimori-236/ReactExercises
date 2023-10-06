import { useState } from "react";

export function HoverDetection() {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<div>
			<button
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				Hover over me!
			</button>
			{isHovering && (
				<div>
					I'll appear when you hover over the button.
				</div>
			)}
		</div>
	);
}