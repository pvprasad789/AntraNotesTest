import React, {useLayoutEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './NotesListStyles';
import Swipeout from 'react-native-swipeout';
import {connect} from 'react-redux';
import {deleteNote} from '../../Actions/NotesActions'

const NotesList = (props: any) => {
  const [reloadData, setReloadData] = useState(false)

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => renderRightButton(),
    });
  }, [props.navigation]);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setReloadData((prevState) => !prevState)
    });
    return unsubscribe;
  }, [props.navigation]);

  const renderRightButton = () => {
    return (
      <TouchableOpacity onPress={() => moveToAddNotes("Add Note", undefined)} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginRight: 8, marginBottom: 4}}>
        <Text style={{fontSize: 25, color: 'white'}}>{"+"}</Text>
      </TouchableOpacity>
    )
  }
 
  const moveToAddNotes = (isFrom: string, item: undefined) => {
    props.navigation.navigate("AddNote", {
      isFrom: isFrom,
      item: item
    })
  }

  const deleteNoteTapped = (item: any) => {
    props.deleteNote(item.id)
  }

  const noteTapped = (item: any) => {
    moveToAddNotes("Edit Note", item)
  }

  const renderListItem = (item: any) => {
    return (
      <Swipeout style={styles.viSwipe} right={[{
        text: "Delete",
        type: 'delete',
        onPress: () => deleteNoteTapped(item)
      }]}>
        <TouchableOpacity style={{padding: 8}} onPress={() => noteTapped(item)}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}} numberOfLines={1} >{item.title}</Text>
          <Text style={{fontSize: 14}} numberOfLines={2} >{item.description}</Text>
        </TouchableOpacity>
      </Swipeout>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginTop: 8}}
        data={props.notesArr}
        extraData={reloadData}
        renderItem={({item}) => renderListItem(item)}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  notesArr: state.notesReducer.notesArr
});

const mapDispatchToProps = (dispatch: any) => ({
  deleteNote: (noteId: number) => dispatch(deleteNote(noteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);