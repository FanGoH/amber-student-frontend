import { useEffect, useState } from "react";
import { TestimonialDetails } from "./TestimonialDetail";
import { TestimonialGroupProps } from "./types";

const determineDirection = (prevNo: number, currentNo: number) => {
	if (prevNo <= currentNo) {
		return "left-to-right";
	}

	return "right-to-left";
};

const animateClass = (shouldAnimate: boolean) =>
	shouldAnimate ? "animate" : "";

export const TestimonialGroup = ({
	testimonials,
	currentTestimonialNo,
}: TestimonialGroupProps) => {
	const [prevNo, setPrevNo] = useState<number>(0);
	const [currentNo, setCurrentNo] = useState<number>(currentTestimonialNo);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		setCurrentNo((currValue) => {
			setPrevNo(currValue);
			setShouldAnimate(true);
			return currentTestimonialNo;
		});
	}, [currentTestimonialNo]);

	const transitionDirection = determineDirection(prevNo, currentNo);
	const animationClass = animateClass(shouldAnimate);

	const classes = `${transitionDirection} ${animationClass}`;

	return (
		<section
			className={`testimonial ${classes} `}
			onAnimationEnd={(e) => {
				e.currentTarget.classList.remove("animate");
				setShouldAnimate(false);
			}}>
			<TestimonialDetails
				className={`in ${classes}`}
				testimonial={testimonials[currentNo]}
			/>
			<TestimonialDetails
				className={`out ${classes}`}
				testimonial={testimonials[prevNo]}
			/>
		</section>
	);
};
