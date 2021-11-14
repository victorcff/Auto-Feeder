import React from 'react';
import { ColorValue, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  title: string,
  color: ColorValue,
  backgroundColor: ColorValue,
  icon?: React.ComponentProps<typeof FontAwesome>['name'];
}

export function SaveTimesButton({
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
          <FontAwesome name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>
            { title }
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}