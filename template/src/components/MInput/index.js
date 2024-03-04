import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Pressable, TextInput, View } from 'react-native';
import { Colors, FONT_STYLE } from 'styles';
import { deviceInfo, normalize } from 'utils';
import { MIcon, MText } from 'components';
import { ICON_NAMES } from 'components/MIcons/icon_names';

const MInput = ({
  label = '',
  labelStyle = {},
  secure = false,
  onBlur,
  errorText,
  keyboardType,
  placeholder = '',
  value = '',
  inputContainerStyle = {},
  onChange,
  search,
  validated,
  showSupportMessage,
  renderRightIcon,
  onPress,
  editable,
  multiline = false,
  autoCapitalize = 'none',
  backgroundColor = Colors.gray_cool['100'],
  values,
  showValidation,
}) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <KeyboardAvoidingView
      {...(deviceInfo.ios
        ? {
            behavior: 'padding',
            keyboardVerticalOffset: normalize(10),
            enabled: true,
          }
        : {})}>
      <View
        style={{
          backgroundColor:
            validated && errorText
              ? Colors.red['100']
              : Colors.gray_cool['100'],
          borderRadius: normalize(12),
          paddingHorizontal: normalize(16),
          paddingVertical:
            value || focused
              ? normalize(deviceInfo.ios ? 10 : 5.5)
              : normalize(17),
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Pressable
              onPress={() => {
                setTimeout(() => {
                  inputRef.current.focus();
                }, 150);
                setFocused(true);
              }}>
              <MText
                children={placeholder}
                globalStyle={[
                  value || focused
                    ? {
                        ...FONT_STYLE.text_h6.regular,
                        lineHeight: deviceInfo.ios ? 0 : normalize(18),
                      }
                    : {
                        ...FONT_STYLE.text_h5.regular,
                        lineHeight: deviceInfo.ios ? 0 : normalize(20),
                      },
                  {
                    ...labelStyle,
                    color: Colors.gray_iron['400'],
                  },
                ]}
              />
            </Pressable>
            <TextInput
              ref={inputRef}
              style={{
                ...FONT_STYLE.text_h5.regular,
                lineHeight: deviceInfo.ios ? 0 : normalize(18),
                height: focused || value ? undefined : 0,
                padding: 0,
              }}
              onPressIn={onPress}
              placeholderTextColor={Colors.gray_iron['400']}
              keyboardType={keyboardType}
              value={value}
              onChangeText={onChange}
              onBlur={() => {
                if (onBlur) {
                  onBlur();
                }

                setFocused(false);
              }}
              editable={editable}
              onFocus={() => setFocused(true)}
              secureTextEntry={secure && viewPassword}
              multiline={multiline}
              autoCapitalize={autoCapitalize}
            />
          </View>
          {value && focused ? (
            <Pressable onPress={() => onChange('')}>
              <MIcon name={ICON_NAMES.CROSS} />
            </Pressable>
          ) : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export { MInput };
