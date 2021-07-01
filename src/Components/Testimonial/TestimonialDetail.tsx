import { Testimonial } from "./types";

export const TestimonialDetails = ({
	testimonial: { designation, lorem, message, name, avatar },
	className,
}: {
	testimonial: Testimonial;
	className?: string;
}) => {
	return (
		<div
			className={`testimonial-detail ${className}`}
			onAnimationEnd={(e) => {
				e.currentTarget.classList.remove("animate");
			}}>
			<h2 className='testimonial-message'>{message}</h2>
			<p>{lorem}</p>
			<div className='bottom-container'>
				<div className='role-container'>
					<img
						className='avatar-image in-detail-avatar'
						src={avatar}
						alt={name}
					/>
					<div className='role'>
						<b className='role'>{name}</b>
						<span>{designation}</span>
					</div>
				</div>
				<button className='link'>Read full story</button>
			</div>
		</div>
	);
};
