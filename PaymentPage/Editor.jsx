/* eslint-disable */

import React, { useState } from "react";
import { View, Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Button } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import ImagePicker from "react-native-image-crop-picker";
import ImgToBase64 from 'react-native-image-base64';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const handleHead = ({ tintColor }) => <Text style={{ color: tintColor, marginRight: 5, fontSize: 24 }}>H1</Text>
const handleHead2 = ({ tintColor }) => <Text style={{ color: tintColor, fontSize: 17 }}>H2</Text>
const handleHead3 = ({ tintColor }) => <Text style={{ color: tintColor, fontSize: 14 }}>H3</Text>
const handleForeColor = ({ tintColor }) => <Text style={{ color: tintColor, fontSize: 14, fontWeight: "bold" }}>C</Text>
const customIcon = ({ tintColor }) => <FontAwesomeIcon name="video-camera" style={{ color: tintColor, fontSize: 18 }} />

const TempScreen = () => {

    const richText = React.useRef();
    const [editorValue, setEditorValue] = useState('');

    const pickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image) => {
            convertBase64Image(image);
        });
    }

    const handleCustomAction = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video);
            videoToBase64(video.path, function(base64String) {
                console.log(base64String);
            });
            // convertBase64Video(video);
            // {"duration": 5376, "height": 1280, "mime": "video/mp4", "modificationDate": "1688236305000", "path": "file:///data/user/0/com.project/cache/react-native-image-crop-picker/VID_20230701_235920.mp4", "size": 4487555, "width": 720}
            // encodeFileBase64(video);
        });
    }

    const convertBase64Image = (image) => {
        console.log(image.path);
        ImgToBase64.getBase64String(image.path)
            .then((base64String) => {
                const str = `data:${image.mime};base64,${base64String}`;
                richText.current?.insertImage(
                    str
                );
            })
            .catch(err => console.log(err));
    }

    function videoToBase64(videoPath, callback) {
        var reader = new FileReader();
        reader.onloadend = function () {
          var base64String = reader.result.split(',')[1];
          callback(base64String);
        };
        reader.readAsDataURL(videoPath);
    }

    const convertBase64Video = (video) => {
        console.log(video.path);
        console.log(video.mime);
        // ImgToBase64.getBase64String(video.path)
        //     .then((base64String) => {
        //         const str = `data:${video.mime};base64,${base64String}`;
        //         richText.current?.insertVideo(
        //             str
        //         );
        //     })
        //     .catch(err => console.log(err));
    }

    return (
        <SafeAreaView>
            <ScrollView style={{padding : 20}}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                    <RichEditor
                        ref={richText}
                        placeholder="Enter page description"
                        initialHeight={100}
                        onChange={(text) => {
                            setEditorValue(text);
                        }}
                        editorStyle={{
                            backgroundColor: "#FEFEFE",
                            color: "#31184d",
                            placeholderColor: "grey",
                            caretColor: "#31184d",
                        }}
                    />
                </KeyboardAvoidingView>
            </ScrollView>

            <RichToolbar
                editor={richText}
                actions={[
                    actions.heading1,
                    actions.heading2,
                    actions.heading3,
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.insertBulletsList,
                    actions.insertOrderedList]}
                iconMap={{ [actions.heading1]: handleHead, [actions.heading2]: handleHead2, [actions.heading3]: handleHead3 }}
                
            />
            <RichToolbar
                editor={richText}
                actions={[
                    actions.hiliteColor,
                    actions.insertLink,
                    actions.insertImage,
                    'customAction',
                    actions.alignLeft,
                    actions.alignRight,
                    actions.undo,
                    actions.redo]}
                onPressAddImage={() => pickImage()}
                iconMap={{ customAction: customIcon, [actions.hiliteColor] : handleForeColor }}
                customAction={handleCustomAction}
            />

        </SafeAreaView>
    );
};

export default TempScreen;