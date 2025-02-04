import { StyleSheet } from 'react-native';
import { theme, mixins } from '../../styles';

export default StyleSheet.create({
  listItemContainer: {
    ...mixins.button,
    backgroundColor: theme.color.foregroundPrimary,
  },
  listItemOuterContainer: {
    marginVertical: 8,
    borderRadius: mixins.button.borderRadius,
  },
  listItemContentContainer: {
    flexDirection: 'column',
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTopContent: {
    flexDirection: 'row',
  },
  listItemTitle: {
    color: theme.color.textPrimary,
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSize.regular,
    marginBottom: 6,
  },
  listItemSubtitle: {
    color: theme.color.textSecondary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  checkboxContainer: {    
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,

    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 5,

    ...mixins.imageIcon,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    margin: 0,
  },
});
