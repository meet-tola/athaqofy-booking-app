import ClientComponent from './ClientComponent';

import { heading } from './ServerComponent';

const HeroSection = () => {
  return <ClientComponent heading={heading} />;
};

export default HeroSection;