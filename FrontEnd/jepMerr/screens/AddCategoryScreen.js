import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddCategoryScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState({ value: '', error: '' })
    const [type, setType] = useState({ value: '', error: '' })
  
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
              
                setImage({value:result.assets[0].uri});
                setType({value:result.assets[0].type})
                
            }
        } catch (error) {
            console.error(error);
        }
    };
  
    const handleAddCategory = async () => {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
  
        if (image) {
          // Get the file extension from the image URI
          const uriComponents = image.value.split('.');
          const fileExtension = uriComponents[uriComponents.length - 1].toLowerCase();
  
          // Determine the file type based on the extension
          let fileType = 'image/jpeg'; // Default to jpeg
          if (fileExtension === 'png') {
            fileType = 'image/png';
          } else if (fileExtension === 'jpg' || fileExtension === 'jpeg') {
            fileType = 'image/jpeg';
          }
  
          formData.append('category_image', {
                uri: image.value,
                type: 'image/jpeg',
                name: 'photo.jpeg',
          });
        }
  
        const response = await fetch('http://192.168.200.140:8000/products/allCategories/', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
  
        console.log('Response status:', response.status);
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
  
        // If the request was successful, you might want to reset the form
        setName('');
        setDescription('');
        setImage({ value: '' });

  
        // Handle success scenario
        console.log('Category added successfully!');
      } catch (error) {
        // Handle error scenario
        console.error('Error adding category:', error.message);
      }
    };
  
  
 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Category Name"
        onChangeText={(text) => setName(text)}
        value={name}
        style={{ width: '80%', marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Category Description"
        onChangeText={(text) => setDescription(text)}
        value={description}
        style={{ width: '80%', marginBottom: 10, padding: 10, borderWidth: 1 }}
        multiline
      />
      <TouchableOpacity onPress={pickImage} style={{ marginBottom: 10 }}>
        <Text style={{ color: 'blue', fontSize: 16 }}>Select an image</Text>
      </TouchableOpacity>
      {image.value && <Image source={{ uri: image.value }} style={{ width: 200, height: 200, marginBottom: 10 }} />}
      <Button title="Add Category" onPress={handleAddCategory} />
    </View>
  );
};

export default AddCategoryScreen;
