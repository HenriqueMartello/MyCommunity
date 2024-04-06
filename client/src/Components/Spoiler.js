import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Spoiler = ({ title, text }) => {
  const [showSpoiler, setShowSpoiler] = useState(false);

  const toggleSpoiler = () => {
    setShowSpoiler(!showSpoiler);
  };

  return (
    <View>
      <Button title={showSpoiler ? 'Hide ' + title : 'Reveal ' + title} onPress={toggleSpoiler} />
      {showSpoiler && <Text>{text}</Text>}
    </View>
  );
};

export default Spoiler;