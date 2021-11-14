import React from 'react';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  ColorValue 
} from 'react-native';


type Props = TouchableOpacityProps & {
  title: string;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
}

export function WifiButton({
  title,
  color,
  backgroundColor,
  icon,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      {...rest}
    >
      {
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>
            { title }
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}