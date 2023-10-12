import React, {Component, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import TagInput from 'react-native-tags-input';

const TagComponent = () => {

    const [tags, setTags] = useState({tags: '', tagsArray: []});

    const updateTagState = (state) => {
        setTags(state);
    }

    return (
        <SafeAreaView>
            <TagInput
                updateState={updateTagState}
                placeholder={"Tags..."}
                label={"Enter any tags contents"}
                labelStyle={{color: "blue", fontSize: 16, fontWeight: 700}}
                inputContainerStyle={{borderStyle: 'solid', borderWidth: 1, borderRadius: 10, padding: 5, marginTop: 10}}
                tagStyle={{backgroundColor: '#D9D9D9'}}
                tagTextStyle={{fontSize: 14, fontWeight: 700}}
                tags={tags}
            />
        </SafeAreaView>
    )
}

export default TagComponent;
