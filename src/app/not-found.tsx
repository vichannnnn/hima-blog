import Link from "next/link";
import { Button } from "@components/Button";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen w-4/5 flex flex-col mx-auto items-center text-center">
        <h2 className="mt-4 mb-4">404 - Page Not Found</h2>
        <div className="flex flex-col items-center mb-16">
          <p className="text-xl mt-1 mb-1">
            You shouldn&apos;t be here! The page or whatever content you&apos;re
            trying to look for probably doesn&apos;t exist here.. yet.
          </p>
        </div>
        <Link href="/" passHref>
          <Button
            sx={{
              backgroundColor: "#8b95d9",
              borderRadius: "4px",
              padding: "4px 8px 4px 8px",
              "&:hover": {
                backgroundColor: "#a3ace4",
                border: "none",
                boxShadow: "none",
              },
            }}
          >
            Back to home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
