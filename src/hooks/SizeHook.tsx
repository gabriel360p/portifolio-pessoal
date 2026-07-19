import { useEffect, useState } from 'react';

interface Size {
	widthSize: number;
	heightSize: number;
}

export function SizeHook(): Size {
	const [size, setSize] = useState<Size>({
		widthSize: window.innerWidth,
		heightSize: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setSize({
				widthSize: window.innerWidth,
				heightSize: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return size;
}
