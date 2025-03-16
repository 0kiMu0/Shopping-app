import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type ItemProps = {
  item: {
    name: string;
    description: string;
  };
};

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <Card className="item-card">
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
