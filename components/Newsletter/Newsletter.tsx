import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-muted m-20 lg:m-24 mt-2 py-12 md:py-16 lg:py-20 flex items-center justify-center rounded-2xl">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">
            Stay up to date with our newsletter
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Subscribe to our newsletter to receive the latest updates, news, and exclusive offers.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit" className="rounded-md">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
