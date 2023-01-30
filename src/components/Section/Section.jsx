import PropTypes from 'prop-types';
import { SectionStyle} from './SectionStyle';
import { Text } from '@chakra-ui/react'

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      {title && <Text as='b' color='teal' fontSize='2xl'>{title}</Text>}
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
