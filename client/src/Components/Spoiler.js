import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Spoiler = ({ title, content }) => {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);

  const toggleSpoiler = () => setIsSpoilerShown(!isSpoilerShown);

  return (
    <View>
      <Button title={isSpoilerShown ? `Hide ${title}` : `Reveal ${title}`} onPress={toggleSpoiler} />
      {isSpoilerShown && <Text>{content}</Text>}
    </View>
  );
};

// Cleaned up by standardizing variable names (e.g. isSpoilerShown instead of showSpoiler),
// removing debugging statements, improving readability, and more.

export default Spoiler;