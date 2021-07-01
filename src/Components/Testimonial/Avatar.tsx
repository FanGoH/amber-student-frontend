import { AvatarProps } from "./types";

export const Avatar = ({
	id,
	name,
	avatar,
	setTestimonialNo,
	testimonialNo,
}: AvatarProps) => {
	return (
		<div
			className={`${id - 1 === testimonialNo ? "active" : ""} wrapper`}
			key={id}>
			<img
				onClick={() => setTestimonialNo(id - 1)}
				className='avatar-image'
				src={avatar}
				alt={name}
			/>
		</div>
	);
};
