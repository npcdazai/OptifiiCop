import React, { forwardRef } from 'react';
import { Input } from "@chakra-ui/react";

export const formatCurrency = (value) => {
  if (!value) return '';
  const [integer, decimal] = value.split('.');
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
};

const CurrencyInput = forwardRef(({ value, onChange, ...props }, ref) => {
  console.log(props);
  

  const handleChange = (event) => {
    let { value } = event?.target;

    // Remove non-numeric characters except decimal point
    value = value?.replace(/[^0-9.]/g, '');

    // Ensure only one decimal point
    const parts = value?.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts?.slice(1)?.join('');
    }

    onChange(value); // Pass the raw value to parent or use it directly
  };

  return (
    <Input
      {...props}
      ref={ref}  // Forward ref here
      type="text"
      value={formatCurrency(value)}
      onChange={handleChange}
    />
  );
});

export default CurrencyInput;
