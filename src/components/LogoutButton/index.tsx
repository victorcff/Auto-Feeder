import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';
import {  
  ColorValue,
  Text,
  TouchableOpacity, 
  TouchableOpacityProps,
  View,
} from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  icon: React.ComponentProps<typeof AntDesign>['name'];
}

export function LogoutButton({
  icon,
  title,
  color,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        {...rest}
      >
        {
          <>
            <AntDesign name={icon} size={25} style={styles.icon} />
            <Text style={[ styles.title, { color } ]}>
              { title }
            </Text>
          </>
        }
      </TouchableOpacity>
    </View>
  );
}