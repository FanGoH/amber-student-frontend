import { Dispatch, SetStateAction } from "react";

type ImgUrl = string;
type AudioUrl = string;

export type AvatarProps = {
	testimonialNo: number;
	setTestimonialNo: Dispatch<SetStateAction<number>>;
} & Testimonial;

export interface Testimonial {
	id: number;
	name: string;
	location: string;
	designation: string;
	avatar: ImgUrl;
	message: string;
	lorem: string;
	rating: number;
	audio: AudioUrl;
}

export interface TestimonialGroupProps {
	testimonials: Testimonial[];
	currentTestimonialNo: number;
}
