import "./styles/style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Testimonial } from "./types";

import { Avatar } from "./Avatar";
import { BackAndFrontButtons } from "./BackAndFrontButtons";
import { TestimonialGroup } from "./TestimonialGroup";

const API_URL = "https://testimonialapi.toolcarton.com/api";
const maxNoTestimonial = 7;

export const Testimonials = () => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [errors, setErrors] = useState(false);

	const [testimonialNo, setTestimonialNo] = useState<number>(0);

	const changeTestimonialNo = (noToChange: number) => {
		setTestimonialNo(
			(currValue) =>
				(currValue + noToChange + maxNoTestimonial) % maxNoTestimonial
		);
	};

	useEffect(() => {
		const fetchTestimonials = async () => {
			const res = await axios.get(API_URL);

			setTestimonials(res.data.slice(0, maxNoTestimonial));

			if (!res.data) {
				setErrors(true);
			}
			setIsLoading(false);
		};
		fetchTestimonials();
	}, []);

	return (
		<div className='main-container'>
			<p className='title'>Testimonials</p>
			{isLoading ? (
				<p>Loading . . .</p>
			) : !errors ? (
				<>
					<TestimonialGroup
						testimonials={testimonials}
						currentTestimonialNo={testimonialNo}
					/>

					<div className='avatar-arrow-container'>
						<div className='avatars-container'>
							{testimonials.map((testimonial) => (
								<Avatar
									{...{
										...testimonial,
										setTestimonialNo,
										testimonialNo,
									}}
									key={testimonial.id}
								/>
							))}
						</div>
						<BackAndFrontButtons callback={changeTestimonialNo} />
					</div>
				</>
			) : (
				<div>
					We had trouble with your request, refresh the page please
				</div>
			)}
		</div>
	);
};
