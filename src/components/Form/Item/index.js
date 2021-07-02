import { Field } from 'rc-field-form';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CustomText from '../../Text';
import Box from '@src/components/Box';

const Item = ({ children, description, ...props }) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }
    return description;
  };

  return (
    <Field {...props}>
      {({ onChange, value }, meta, context) => {
        const { errors } = meta;
        const hasError = errors && errors[0];

        if (typeof children === 'function') {
          return (
            <>
              <Box margin={[0, 0, 5, 0]}>
                {children({ onChange, value, meta, hasError }, context)}
              </Box>
              {renderDescription()}
              {hasError && (
                <View style={styles.errorContainer}>
                  {!!hasError && (
                    <CustomText type="error">{hasError}</CustomText>
                  )}
                </View>
              )}
            </>
          );
        }

        return (
          <>
            <Box margin={[0, 0, 5, 0]}>
              {React.cloneElement(children, {
                onChange,
                value,
                hasError,
                ...children.props,
              })}
            </Box>
            {renderDescription()}
            {hasError && (
              <View style={styles.errorContainer}>
                {!!hasError && <CustomText type="error">{hasError}</CustomText>}
              </View>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default Item;
