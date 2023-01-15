import { Cariere } from 'components/Cariere/Cariere';
import { Choices } from 'components/Choices/Choices';
import { Courses } from 'components/Courses/Courses';
import { Customers } from 'components/Customers/Customers';
import { Enroll } from 'components/Enroll/Enroll';
import { Goals } from 'components/Goals/Goals';
import { Hero } from 'components/Hero/Hero';
import { Preferense } from 'components/Preferense/Preferense';

export const Home = () => {
  return (
    <>
      <Hero />
      <Customers />
      <Preferense />
      <Cariere />
      <Choices />
      <Goals />
      <Courses />
      <Enroll />
    </>
  );
};
