import React from 'react';
import { ColorValue, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  icon?: React.ComponentProps<typeof FontAwesome5>['name'];
}

export function SetWeightButton({
  title,
  color,
  backgroundColor,
  icon,
  ...rest
}: Props){
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      {...rest}
    >
      {
        <>
          <FontAwesome5 name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>
            { title }
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}