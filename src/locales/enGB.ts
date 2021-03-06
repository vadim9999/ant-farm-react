const enGB = {
  translation: {
    about: {
      diplomaProject: 'Diploma project'
    },
    appLayout: {
      header: {
        logoText: "Ant Farm",
      },
      sidebar: {
        about: "About",
        dashboard: "Dashboard",
        videoStreaming: "Video streaming",
        mediaFiles: "Media files",
        settings: "Settings",
      },
    },
    dashboard: {
      inSots: "In sots",
      inArena: "In arena",
      inRoom: "In room",
      waterLevel: "Water level",
      notifications: {
        errorGettingSensorsData: "Error getting sensors data",
      },
    },
    mediaFiles: {
      file: "File",
      acceptDeleteFile: "Are you sure to delete the file?",
    },
    settings: {
      youtubeSettings: "YouTuber settings",
      feedSettings: "Feed settings",
      farmControl: "Farm control",
      powerOff: "Power off",
      reboot: "Reboot",
      feedSettingsForm: {
        interval: "Interval (days)",
        submit: "Submit",
      },
      streamingSettingsForm: {
        youtubeLink: "YouTube link",
        youtubeKey: "YouTube key",
        submit: "Submit",
        schema: {
          inputLink: "Input link",
          inputKey: "Input key",
        },
      },
      notifications: {
        savedYoutubeSettings:
          "Settings for streaming in YouTube have been saved!",
        savedFeedSettings: "Feed settings have been saved!",
        powerOff: "Powering off...",
        reboot: "Rebooting...",
      },
    },
    videoStreaming: {
      takePicture: {
        takePicture: "Take picture",
        notifications: {
          createdSuccessfully: 'Зображення "{{fileName}}" створено успішно`',
        },
        takePictureForm: {
          fileName: "Image name",
          quality: "Image quality",
          cancel: "Cancel",
          submit: "Submit",
          schema: {
            inputFileName: "Input image name",
          },
        },
      },
      feedNow: {
        feedNow: "Feed now",
        notifications: {
          feededSuccessfully: "Feed successfully",
        },
      },
      streamingControls: {
        startStreaming: "Start streaming",
        stopStreaming: "Stop streaming",
        streamingForm: {
          quality: "Image quality",
          cancel: "Cancel",
          submit: "Submit",
        },
      },
      videoRecording: {
        startRecording: "Start recording",
        videoRecord: "Video record",
        stopRecording: "Stop recording",
        videoRecordingForm: {
          fileName: "File name",
          quality: "Quality",
          cancel: "Cancel",
          submit: "Submit",
          schema: {
            inputFileName: "Input file name",
          },
        },
        notifications: {
          recordCreatedSuccessfully:
            "The video record have been created successfully",
          recordStartedSuccessfully: "Started recording",
        },
      },
      popup: {
        noSettings: "Settings is empty please go to the ",
        settings: "Settings",
      },
    },
  },
};

export default enGB;
