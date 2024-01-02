import Head from 'next/head';

const CustomHead = ({ title, meta }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={meta || 'Next Level Events'} />
		</Head>
	);
};

export default CustomHead;
