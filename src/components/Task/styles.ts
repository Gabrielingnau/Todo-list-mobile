import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#333',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkBox: {
    width: 22,
    height: 22,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4ea8de'
  },
  checkBoxTrue: {
    width: 24,
    height: 24,
    borderRadius: 999,
    backgroundColor: '#5e60ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
    maxWidth: 200,
  },
  TextTrue: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
    textDecorationLine: "line-through",
    maxWidth: 200,
  },
})