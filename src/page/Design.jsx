import { CariereDesign } from 'components/About-design/Cariere-design';
import { BenefitsDesign } from 'components/Benefits-design/Benefits-design';
import { Experience } from 'components/Experience-design/Experience';
import { ForWho } from 'components/ForHo-design/ForWho';
import { Goals } from 'components/Goals/Goals';
import { HeroDesign } from 'components/Hero-design/Hero-design';
import { Programm } from 'components/Programm-design/Programm-design';

export const Design = () => {
  return (
    <>
      <HeroDesign />
      <CariereDesign />
      <Experience />
      <ForWho />
      <Programm />
      <BenefitsDesign />
      <Goals />
    </>
  );
};
