import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styles from './AddNoteStyles'
import {connect} from 'react-redux';
import {addNote, updateNote} from '../../Actions/NotesActions'

const AddNote = (props: any) => {
  const {isFrom, item} = props.route.params
  const [title, setTitleStr] = useState(item?.title ?? "")
  const [description, setDescriptionStr] = useState(item?.description ?? "")

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: isFrom
    });
  }, [props.navigation]);

  const submitTapped = () => {
    let message = ""
    if (title === "") {
      message = "Please enter title"
    } else if (description === "") {
      message = "Please enter description"
    }
    if (message === "") {
      if (isFrom === "Edit Note") {
        props.updateNote({
          id: item.id,
          title: title,
          description: description
        })
      } else {
        props.addNote({
          title: title,
          description: description
        })
      }
      props.navigation.goBack()
    } else {
      Alert.alert("Alert", message)
    }
  }

  const onChangeTitle = (text: string) => {
    setTitleStr(text)
  }

  const onChangeDesc = (text: string) => {
    setDescriptionStr(text)
  }

  return (
    <KeyboardAwareScrollView>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.head}>Title</Text>
        <TextInput 
          style={styles.inputTitle}
          value={title}
          onChangeText={(text) => onChangeTitle(text)}
        />
        <Text style={styles.head}>Description</Text>
        <TextInput 
          multiline
          maxLength={50}
          style={styles.inputDesc}
          value={description}
          onChangeText={(text) => onChangeDesc(text)}
        />
        <TouchableOpacity style={styles.btnSubmit} onPress={submitTapped}>
          <Text style={styles.txtSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  addNote: (body: any) => dispatch(addNote(body)),
  updateNote: (body: any) => dispatch(updateNote(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
