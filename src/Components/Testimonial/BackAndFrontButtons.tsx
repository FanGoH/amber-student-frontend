import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IconContext } from "react-icons";

export const BackAndFrontButtons = ({
	callback,
}: {
	callback: (no: number) => void;
}) => {
	return (
		<nav className='arrowButtonsContainer'>
			<IconContext.Provider value={{ size: "3rem", className: "arrows" }}>
				<button className='arrowButtons' onClick={() => callback(-1)}>
					<BsArrowLeftShort />
				</button>
				<button className='arrowButtons' onClick={() => callback(1)}>
					<BsArrowRightShort />
				</button>
			</IconContext.Provider>
		</nav>
	);
};
