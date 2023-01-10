import { useRouter } from "next/router";
import Link from "next/link";

const dynamicRouting = () => {
  // Declaring useRouter
  const router = useRouter();
  // Checking the content of router
  console.log("router", router);
  // Destructuring the query
  const { id } = router.query;

  return (
    <div>
      <Link href="/">Home</Link>
      {/* Dynamic display of id */}
      <h1>Welcome to dynamic page {id}</h1>
    </div>
  );
};

export default dynamicRouting;
