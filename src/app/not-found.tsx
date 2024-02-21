import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <Image
        src="/stickersPA/sPA75.png"
        height={128}
        width={128}
        alt="404-icon"
      />
      <p>We couldn&apos;t find the page you were looking for.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
