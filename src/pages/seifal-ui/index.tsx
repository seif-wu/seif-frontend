import React, { ReactElement } from 'react';
import SeifalUILayout from '../../components/Layouts/SeifalUILayout';

const SeifalUIIndexPage = () => {
  return <div>IndexPage</div>;
};

SeifalUIIndexPage.getLayout = function getLayout(page: ReactElement) {
  return <SeifalUILayout>{page}</SeifalUILayout>;
};

export default SeifalUIIndexPage;
