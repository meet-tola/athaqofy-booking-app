import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2 font-roca">
            Contact Us
          </h1>
          <p className="text-muted-foreground">
            Ready to embark on your pilgrimage? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your requirements and any questions you have"
                  rows={4}
                  className="border-gray-300"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          {/* Support Information */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Phone Support
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:08033040661" className="hover:underline">
                      08033040661
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:070651745060" className="hover:underline">
                      070651745060
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Email Support
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <a
                      href="mailto:athaqofy@gmail.com"
                      className="hover:underline"
                    >
                      athaqofy@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="mailto:support@athaqofy.com"
                      className="hover:underline"
                    >
                      support@athaqofy.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Office Location
                  </h3>
                  <p className="text-gray-600 mb-1">101 Bale Street,</p>
                  <p className="text-gray-600">Olodi Apapa, Lagos, Nigeria.</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Visit us for in-person consultation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
