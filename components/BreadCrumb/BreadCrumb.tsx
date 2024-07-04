import React, { FC } from 'react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from 'lucide-react';

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbComponentProps = {
  title: string;
  items: BreadcrumbItem[];
};

const BreadcrumbComponent: FC<BreadcrumbComponentProps> = ({ title, items }) => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      <img
        src="/image/breadcrumbBg.png"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl mb-4">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
