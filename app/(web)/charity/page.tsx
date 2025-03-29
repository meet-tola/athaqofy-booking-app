import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, Users, Play, ArrowRight, HandHeart } from "lucide-react"

export default function CharityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('https://placehold.co/1920x500')] bg-cover bg-center text-white">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4 md:space-y-6">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Make a Difference
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Support Our Charitable Initiatives
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed bg-black/40 p-4 rounded-lg">
            Join us in making a positive impact on communities around the world through our various charity programs.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-white/90">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Charities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Initiatives
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Charity Programs</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our ongoing charitable initiatives and see how you can contribute to making a difference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Charity Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400" alt="Water Well Project" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">Ongoing</div>
              </div>
              <CardHeader>
                <CardTitle>Water Well Project</CardTitle>
                <CardDescription>Providing clean water to communities in need</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our Water Well Project aims to build sustainable water sources in drought-affected regions, providing
                  clean water to thousands of people.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="text-sm">142 Donors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ends in 45 days</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span>$32,500 raised</span>
                    <span>$50,000 goal</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Donate Now</Button>
              </CardFooter>
            </Card>

            {/* Charity Card 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400" alt="Orphan Sponsorship" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">Featured</div>
              </div>
              <CardHeader>
                <CardTitle>Orphan Sponsorship</CardTitle>
                <CardDescription>Supporting orphans with education and care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our Orphan Sponsorship program provides education, healthcare, and basic necessities to orphaned
                  children in multiple countries.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="text-sm">287 Donors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">124 Children</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "78%" }}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span>$78,000 raised</span>
                    <span>$100,000 goal</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Donate Now</Button>
              </CardFooter>
            </Card>

            {/* Charity Card 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="https://placehold.co/600x400" alt="Food Distribution" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">Urgent</div>
              </div>
              <CardHeader>
                <CardTitle>Food Distribution</CardTitle>
                <CardDescription>Providing meals to families in crisis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our Food Distribution program provides essential food packages to families affected by natural
                  disasters, conflicts, and poverty.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="text-sm">198 Donors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ends in 15 days</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span>$22,500 raised</span>
                    <span>$50,000 goal</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Donate Now</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" className="gap-2">
              View All Charities <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Past Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Past Charity Work</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See the difference we've made together through our completed charity projects.
              </p>
            </div>
          </div>

          <Tabs defaultValue="2023" className="mt-12">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2022">2022</TabsTrigger>
              <TabsTrigger value="2021">2021</TabsTrigger>
            </TabsList>
            <TabsContent value="2023" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>School Building Project</CardTitle>
                    <CardDescription>Completed December 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="School Building Project"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built a new school in rural Tanzania, providing education access to over 500 children.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">500+ Beneficiaries</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Medical Camp</CardTitle>
                    <CardDescription>Completed August 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Medical Camp"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Organized medical camps in remote villages, providing healthcare services to over 2,000 people.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">2,000+ Beneficiaries</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ramadan Food Distribution</CardTitle>
                    <CardDescription>Completed April 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Ramadan Food Distribution"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Distributed food packages to 1,500 families during the holy month of Ramadan.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">1,500 Families</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="2022" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Water Well Construction</CardTitle>
                    <CardDescription>Completed November 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Water Well Construction"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built 25 water wells across drought-affected regions in Africa, providing clean water to
                      thousands.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">10,000+ Beneficiaries</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Orphanage Support</CardTitle>
                    <CardDescription>Completed July 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Orphanage Support"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Renovated 5 orphanages and provided educational materials, clothing, and food supplies.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">350+ Children</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eid Gifts Distribution</CardTitle>
                    <CardDescription>Completed May 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Eid Gifts Distribution"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Distributed Eid gifts and new clothes to 2,000 orphans and underprivileged children.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">2,000 Children</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="2021" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>COVID-19 Relief</CardTitle>
                    <CardDescription>Completed December 2021</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="COVID-19 Relief"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Provided medical supplies, food packages, and financial support to families affected by COVID-19.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">5,000+ Families</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Winter Clothing Drive</CardTitle>
                    <CardDescription>Completed November 2021</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Winter Clothing Drive"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Distributed winter clothing, blankets, and heaters to refugee families in cold regions.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">3,000+ Beneficiaries</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mosque Construction</CardTitle>
                    <CardDescription>Completed June 2021</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 mb-4">
                      <Image
                        src="https://placehold.co/600x400"
                        alt="Mosque Construction"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Built 3 mosques in remote villages, providing places of worship for local communities.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">1,500+ Worshippers</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Media Gallery
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Videos & Images</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See our charity work in action through videos and images from our various projects.
              </p>
            </div>
          </div>

          <Tabs defaultValue="videos" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:w-auto">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
            </TabsList>
            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video 1 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image
                      src="https://placehold.co/600x400"
                      alt="Water Well Project Video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Water Well Project in Somalia</h3>
                    <p className="text-sm text-muted-foreground mt-1">See how your donations are changing lives</p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image src="https://placehold.co/600x400" alt="Orphanage Visit" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Visit to Al-Amal Orphanage</h3>
                    <p className="text-sm text-muted-foreground mt-1">Meeting the children you've helped support</p>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image src="https://placehold.co/600x400" alt="Food Distribution" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Ramadan Food Distribution</h3>
                    <p className="text-sm text-muted-foreground mt-1">Providing iftar meals to those in need</p>
                  </div>
                </div>

                {/* Video 4 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image src="https://placehold.co/600x400" alt="School Opening" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">New School Opening Ceremony</h3>
                    <p className="text-sm text-muted-foreground mt-1">Celebrating education access for all</p>
                  </div>
                </div>

                {/* Video 5 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image src="https://placehold.co/600x400" alt="Medical Camp" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Medical Camp in Rural Areas</h3>
                    <p className="text-sm text-muted-foreground mt-1">Bringing healthcare to those who need it most</p>
                  </div>
                </div>

                {/* Video 6 */}
                <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                  <div className="relative aspect-video">
                    <Image src="https://placehold.co/600x400" alt="Qurban Distribution" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                        <Play className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Qurban Distribution Program</h3>
                    <p className="text-sm text-muted-foreground mt-1">Sharing the blessings of Eid al-Adha</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="images" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Image Gallery */}
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="https://placehold.co/600x400"
                    alt="Charity Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline">View Full Gallery</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* New Donation Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                New Initiative
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Help Build a School in Yemen
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our newest initiative to build a school for 300 children in a remote village in Yemen.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="https://placehold.co/600x400"
                alt="School Building Project in Yemen"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Project Details</h3>
                <p className="text-muted-foreground">
                  This project aims to build a fully equipped school with 10 classrooms, a library, computer lab, and
                  playground for 300 children in a remote village in Yemen where educational facilities are
                  non-existent.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Raised: $45,000</span>
                  <span>Goal: $120,000</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "37.5%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold">37.5%</div>
                  <div className="text-xs text-muted-foreground">Funded</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold">128</div>
                  <div className="text-xs text-muted-foreground">Donors</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-xs text-muted-foreground">Days Left</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Select Donation Amount</h4>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline">$50</Button>
                  <Button variant="outline">$100</Button>
                  <Button variant="outline">$250</Button>
                  <Button variant="outline">$500</Button>
                  <Button variant="outline">$1000</Button>
                  <Button variant="outline">Custom</Button>
                </div>
                <Button className="w-full" size="lg">
                  Donate Now
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <HandHeart className="h-4 w-4" />
                <span>100% of donations go directly to the project</span>
              </div>

              <Button variant="link" className="w-full">
                Read More About This Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Donors Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those who have contributed to our charitable initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Testimonial 1 */}
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src="https://placehold.co/600x400" alt="Ahmed S." fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Ahmed S.</h3>
                    <p className="text-sm text-muted-foreground">Regular Donor</p>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been donating to Athaqofy's charity initiatives for years. Their transparency and the impact
                    they make is truly inspiring. I can see exactly where my donations are going."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src="https://placehold.co/600x400" alt="Fatima K." fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Fatima K.</h3>
                    <p className="text-sm text-muted-foreground">Monthly Donor</p>
                  </div>
                  <p className="text-muted-foreground">
                    "What sets Athaqofy apart is their commitment to sustainable projects. They don't just provide
                    temporary relief, but create lasting change in communities."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src="https://placehold.co/600x400" alt="Mohammed R." fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mohammed R.</h3>
                    <p className="text-sm text-muted-foreground">Corporate Partner</p>
                  </div>
                  <p className="text-muted-foreground">
                    "Our company has partnered with Athaqofy for our CSR initiatives. Their professionalism and the
                    impact of their projects have exceeded our expectations."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Make a Difference Today</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Your donation, no matter how small, can change lives. Join us in our mission to create a better world
                for those in need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Monthly Donor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

