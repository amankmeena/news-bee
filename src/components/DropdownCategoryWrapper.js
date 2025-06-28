import React from 'react';
import { useLocation } from 'react-router-dom';
import DropdownCategory from './DropdownCategory';

const DropdownCategoryWrapper = () => {
  const location = useLocation();
  return <DropdownCategory location={location} />;
};

export default DropdownCategoryWrapper;
