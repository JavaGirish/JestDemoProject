const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer', 'coke','apples','oranges'
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  test('the shopping list has coke on it', () => {
    expect(shoppingList).toContain('coke');
    
  });


  