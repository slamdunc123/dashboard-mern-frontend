const prodEnv = true;
const uri = !prodEnv
	? process.env.NEXT_PUBLIC_DEV_URI
	: process.env.NEXT_PUBLIC_PROD_URI;

export default uri;