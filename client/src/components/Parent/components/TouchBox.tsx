import React, { useRef } from 'react';
import styled from 'styled-components';


export type TouchBoxProps = {
	touchEffect?: string;
	children?: any;
	bgColor?: string;
	style?: React.CSSProperties;
};

export default function TouchBox({
	touchEffect = 'pressed',
	bgColor = 'transparent',
	style,
	children,
}: TouchBoxProps) {
	const ref = useRef<HTMLDivElement>(null);
    const touchStart = (ref:any, className:any) => {     
			ref?.current.classList.add(className);
		
	};
	const touchEnd = (ref:any, className:any) => {
		if (ref === undefined) return;
		else {
			ref.current.classList.remove(className);
		}
	};
	return (
		<Wrapper
			ref={ref}
			onTouchStart={()=>{
	            touchStart(ref,touchEffect);
            }}
			onTouchEnd={()=>{
                touchEnd(ref,touchEffect);
            }}
			bgColor={bgColor}
			style={style}
		>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.div<{ bgColor: string }>`
	background-color: ${props => props.bgColor};
	cursor: pointer;
	border-radius: 0.8rem;
`;
