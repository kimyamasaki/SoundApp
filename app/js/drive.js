 /**
     * This function is called the first time that the Realtime model is created
     * for a file. This function should be used to initialize any values of the
     * model. In this case, we just create the single string model that will be
     * used to control our text box. The string has a starting value of 'Hello
     * Realtime World!', and is named 'text'.
     * @param model {gapi.drive.realtime.Model} the Realtime root model object.
     */
    function initializeModel(model) {
      var string = model.createString();
      model.getRoot().set('text', string);

      //var saveList = model.createList([0]);
      //model.getRoot().set('saveList', list);

    }

    /**
     * This function is called when the Realtime file has been loaded. It should
     * be used to initialize any user interface components and event handlers
     * depending on the Realtime model. In this case, create a text control binder
     * and bind it to our string model that we created in initializeModel.
     * @param doc {gapi.drive.realtime.Document} the Realtime document.
     */

     var string;

    function onFileLoaded(doc) {
      string = doc.getModel().getRoot().get('text');
      //var savelist = doc.getModel().getRoot().get('saveList');

      // Keeping one box updated with a String binder.
      var textArea1 = document.getElementById('editor1');
      gapi.drive.realtime.databinding.bindString(string, textArea1);



      //Save list event listener
      //gapi.drive.realtime.databinding.bindString(saveList);

      // Keeping one box updated with a custom EventListener.
      var textArea2 = document.getElementById('editor2');
      gapi.drive.realtime.databinding.bindString(string, textArea2);
      var updateTextArea2 = function(e) {
        
        textArea2.value = string;
      };
      string.addEventListener(gapi.drive.realtime.EventType.TEXT_INSERTED, updateTextArea2);
      string.addEventListener(gapi.drive.realtime.EventType.TEXT_DELETED, updateTextArea2);
      textArea2.onkeyup = function() {
        string.setText(textArea2.value);
      };
      updateTextArea2();

      // Enabling UI Elements.
      textArea1.disabled = false;
      textArea2.disabled = false;

    }

    /**
     * Options for the Realtime loader.
     */
    var realtimeOptions = {
      /**
       * Client ID from the console.
       */
      clientId: '1049892313325-4cv61ff57a22efmfts234g68necc1s5p.apps.googleusercontent.com',

      /**
       * The ID of the button to click to authorize. Must be a DOM element ID.
       */
      authButtonElementId: 'authorizeButton',

      /**
       * Function to be called when a Realtime model is first created.
       */
      initializeModel: initializeModel,

      /**
       * Autocreate files right after auth automatically.
       */
      autoCreate: true,

      /**
       * The name of newly created Drive files.
       */
      defaultTitle: "SoundApp Save File",

      /**
       * The MIME type of newly created Drive Files. By default the application
       * specific MIME type will be used:
       *     application/vnd.google-apps.drive-sdk.
       */
      newFileMimeType: null, // Using default.

      /**
       * Function to be called every time a Realtime file is loaded.
       */
      onFileLoaded: onFileLoaded,

      /**
       * Function to be called to inityalize custom Collaborative Objects types.
       */
      registerTypes: null, // No action.

      /**
       * Function to be called after authorization and before loading files.
       */
      afterAuth: null // No action.
    }

    /**
     * Start the Realtime loader with the options.
     */
    function startRealtime() {
      var realtimeLoader = new rtclient.RealtimeLoader(realtimeOptions);
      realtimeLoader.start();
    }
