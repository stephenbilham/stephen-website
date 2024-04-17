import Image, { StaticImageData } from "next/image";
import avatar from "../../public/me.jpg";

type ReadOnlyAvatarProps = Readonly<{
	src: StaticImageData;
	alt: string;
	width?: number;
	height?: number;
}>;

export function Avatar({
	src,
	alt,
	width = 200,
	height = 200,
}: ReadOnlyAvatarProps) {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className="rounded-full"
		/>
	);
}

export function AvatarOfMe() {
	return <Avatar src={avatar} alt="A portrait of me" />;
}
