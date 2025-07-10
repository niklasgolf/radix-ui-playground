
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const NewRadix = () => (
  <Avatar.Root>
    <Avatar.Image
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
  </Avatar.Root>
);

export default NewRadix;
