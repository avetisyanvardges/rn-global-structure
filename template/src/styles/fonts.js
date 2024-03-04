import { normalize } from 'utils';

const FONTS = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semi_bold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
};
const FONT_STYLE = {
  display_h1: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
  },
  display_h2: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
  },
  display_h3: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
  },
  display_h4: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
  },
  display_h5: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
  },
  display_h6: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
  },
  text_h2: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
  },
  text_h3: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
  },
  text_h4: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
  },
  text_h5: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
  },
  text_h6: {
    regular: {
      fontFamily: FONTS.regular,
      fontWeight: '400',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    medium: {
      fontFamily: FONTS.medium,
      fontWeight: '500',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    semi_bold: {
      fontFamily: FONTS.semi_bold,
      fontWeight: '600',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    bold: {
      fontFamily: FONTS.bold,
      fontWeight: '700',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
  },
};

export { FONTS, FONT_STYLE };
