import React from 'react';

import {NativeModules, Platform} from 'react-native';
const ImageCropPicker = NativeModules.ImageCropPicker;

class DocumentPickerUtil {
    static allFiles() {
      return (Platform.OS === 'android') ? "*/*" : "public.content";
    }

    static images() {
      return (Platform.OS === 'android') ? "image/*" : "public.image";
    }

    static plainText() {
      return (Platform.OS === 'android') ? "text/plain" : "public.plain-text";
    }

    static audio() {
      return (Platform.OS === 'android') ? "audio/*" : "public.audio";
    }

    static pdf() {
      return (Platform.OS === 'android') ? "application/pdf" : "com.adobe.pdf";
    }
  }

  module.exports = {DocumentPickerUtil, ImageCropPicker};