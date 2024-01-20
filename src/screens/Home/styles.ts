import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  constainer: {
    height: '100%',
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: 173,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    gap: 12,
  },
  form: {
    marginTop: -32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 16,
    fontWeight: '400',
    color:  '#F2F2F2',
  },
  button: {
    padding: 18,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    maxHeight: '70%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  touchdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 33,
    marginBottom: 20,
  },
  Created: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textCreatd: {
    fontSize: 14,
    fontWeight: '700',
    color:  '#4EA8DE',
  },
  Completed: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textCompleted: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8284FA',
  },
  numberTouchdown: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D9D9D9',
    backgroundColor: '#333',
    borderRadius: 999,
    height: 19,
    paddingLeft: 8,
    paddingRight: 8,
  }
})