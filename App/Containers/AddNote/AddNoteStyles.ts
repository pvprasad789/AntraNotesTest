import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 20,
  },
  btnSubmit: {
    backgroundColor: '#dd6b47',
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSubmit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  inputTitle: {
    height: 40,
    borderWidth: 0.5,
    borderColor: '#767676',
    borderRadius: 8,
    marginTop: 4,
    paddingHorizontal: 8,
  },
  inputDesc: {
    height: 100,
    borderWidth: 0.5,
    borderColor: '#767676',
    borderRadius: 8,
    marginTop: 4,
    padding: 8,
  },
});
