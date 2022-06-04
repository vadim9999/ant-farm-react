const ukUa = {
  translation: {
    about: {
      diplomaProject: "Дипломний проект",
    },
    appLayout: {
      header: {
        logoText: "Мурашина ферма",
      },
      sidebar: {
        about: "Про автора",
        dashboard: "Моніторинг",
        videoStreaming: "Відеотрансляція",
        mediaFiles: "Медіафайли",
        settings: "Налаштування",
      },
    },
    dashboard: {
      inSots: "В сотах",
      inArena: "В арені",
      inRoom: "В кімнаті",
      waterLevel: "Рівень води",
      notifications: {
        errorGettingSensorsData: "Помилка в отриманні даних з датчиків",
      },
    },
    mediaFiles: {
      file: "Файл",
      acceptDeleteFile: "Ви впевнені що хочете видалити файл?",
    },
    settings: {
      youtubeSettings: "Налаштування для YouTube",
      feedSettings: "Налаштування годівниці",
      farmControl: "Керування фермою",
      powerOff: "Вимкнути",
      reboot: "Перезавантажити",
      feedSettingsForm: {
        interval: "Інтервал (днях)",
        submit: "Зберегти",
      },
      streamingSettingsForm: {
        youtubeLink: "Посилання youtube",
        youtubeKey: "Ключ youtube",
        submit: "Зберегти",
        schema: {
          inputLink: "Введіть посилання",
          inputKey: "Введіть ключ",
        },
      },
      notifications: {
        savedYoutubeSettings:
          "Налаштування для відеотрансляції в YouTube збережені!",
        savedFeedSettings: "Налаштування для годівниці збережені",
        powerOff: "Вимикання...",
        reboot: "Перезавантаження...",
      },
    },
    videoStreaming: {
      takePicture: {
        takePicture: "Створити зображення",
        notifications: {
          createdSuccessfully: 'Зображення "{{fileName}}" створено успішно`',
        },
        takePictureForm: {
          fileName: "Назва зображення",
          quality: "Якість зображення",
          cancel: "Скасувати",
          submit: "Підтвердити",
          schema: {
            inputFileName: "Введіть назву зображення",
          },
        },
      },
      feedNow: {
        feedNow: "Погодувати зараз",
        notifications: {
          feededSuccessfully: "Погодовано успішно",
        },
      },
      streamingControls: {
        startStreaming: "Почати трансляцію",
        stopStreaming: "Зупинити трансляцію",
        streamingForm: {
          quality: "Якість зображення",
          cancel: "Скасувати",
          submit: "Підтвердити",
        },
      },
      videoRecording: {
        startRecording: "Почати запис",
        videoRecord: "Відеозапис",
        stopRecording: "Зупинити запис",
        videoRecordingForm: {
          fileName: "Ім'я файлу",
          quality: "Якість",
          cancel: "Скасувати",
          submit: "Підтвердити",
          schema: {
            inputFileName: "Введіть назву відеофайлу",
          },
        },
        notifications: {
          recordCreatedSuccessfully: "Запис створено",
          recordStartedSuccessfully: "Запис почався",
        },
      },
      popup: {
        noSettings:
          "Налаштування для трансляції не встановлені перейдіть на сторінку ",
        settings: "Налаштування",
      },
    },
  },
};

export default ukUa;
