import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { StyledCard, Title } from './styles';

export interface CardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export const Card = ({ title, imageSrc, imageAlt }: CardProps) => (
  <StyledCard>
    {title.length > 0 && <Title>{title}</Title>}
    {imageSrc.length > 0 && (
      <Image src={imageSrc} alt={imageAlt} height={100} width={200} />
    )}
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  imageSrc: '',
  imageAlt: '',
};
