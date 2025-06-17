import React from 'react';
import ProductCard from './ProductCard';
function App() {
  return (
    <div>
      <ProductCard 
        title="iPhone 15" 
        price={1099} 
        description="Latest model with improved battery life." 
      />
    </div>
  );
}
export default App;
