import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import * as React from 'react';

/**
 * Gets and returns properties from an instance of Object
 *
 * Used for extending and creating a mutable `File`
 * without modifying its instance
 *
 * @param obj - instance to get props from
 */
function getPropsDerived(obj) {
  // Item will be converted to new type
  const item = {}; // For each property in object,
  // eslint-disable-next-line guard-for-in, no-restricted-syntax

  for (const prop in obj) {
    // Set new property
    item[prop] = obj[prop];
  } // Returns new object


  return item;
}
/**
 * Generates a random ID to track file uniqueness
 */


function generateId() {
  return `backyard-file-${Math.round(Math.random() * 1e9)}`;
}
/**
 * Backyard React File Upload useFileReducer Hook
 *
 * @internal
 *
 * Used as a state reducer to manage files to be handled by the `FileUpload` UI
 *
 * Documentation:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 */


const useFileReducer = ({
  maxFiles,
  defaultFiles,
  onFileAdd,
  onFileRemove,
  onDrop,
  onChange,
  onSuccess,
  onError
}) => {
  // State for whether or not all files are successful
  const [hasSuccess, setHasSuccess] = React.useState(false); // State for whether or not any file has an error

  const [hasError, setHasError] = React.useState(false); // State reducer for all files managed by `FileUpload`

  const [state, stateReducer] = React.useReducer(stateReducerHelper, defaultFiles, reduceFiles);
  const [prevState, setPrevState] = React.useState(state);
  /**
   * Creates an extended `File` object out of its instance
   *
   * @param file - `File` instance to create `FileUploadFile` out of
   */

  function createFile(file) {
    // Convert properties to new type
    const newFile = file; // Set default file state if not already defined

    newFile.state = newFile.state || 'created'; // Set default ID if not defined

    newFile.id = newFile?.id || generateId();
    /**
     * Modify file dispatcher
     * Add or modify new properties for `FileUploadFile`
     *
     * @param fileProps - New file properties to add/overwrite
     */

    newFile.modify = fileProps => {
      // Hold modified `File`
      const newFileModified = newFile; // For each file prop,

      Object.keys(fileProps).forEach(prop => {
        // Modify `File` to new file prop
        newFileModified[prop] = fileProps[prop];
      }); // If `fileReducer` defined,

      if (stateReducer) {
        // Run modify fileReducer
        stateReducer({
          type: 'modify',
          file: newFileModified
        });
      }
    };
    /**
     * Remove file from `FileUpload`
     */


    newFile.remove = () => {
      // Trigger remove file with id
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      removeFile(newFile.id);
    };
    /**
     * Modify file state dispatcher
     * Change state of the file
     *
     * @param state - state of the file
     * @param errors - errors to add/modify
     */


    newFile.setState = (state, errors) => newFile.modify({
      state,
      errors
    });
    /**
     * Modify file errors dispatcher
     * Add/modify/remove errors for file
     *
     * @param errors - list of `FileError`s
     */


    newFile.setErrors = errors => newFile.modify({
      errors
    }); // `FileUploadFile`


    return newFile;
  }
  /**
   * Add a file to the file reducer
   *
   * @param file - file to add
   */


  function addFile(file) {
    const newFile = createFile(file);
    stateReducer({
      type: 'add',
      file: newFile
    });
  }
  /**
   * Remove a file from the dispatcher
   *
   * @param id - id of file to remove
   */


  function removeFile(id) {
    stateReducer({
      type: 'remove',
      id
    });
  }
  /**
   * Handle `onDrop` event
   * This function depends on `react-dropzone` handler
   *
   * @param acceptedFiles - list of accepted files from `react-dropzone` handler
   * @param rejectedFiles - list of rejected files from `react-dropzone` handler
   * @param event - drop event from `react-dropzone` handler
   */


  function handleDrop(acceptedFiles, rejectedFiles, event) {
    // Create `FileUploadFile`s from accepted files
    const newAcceptedFiles = acceptedFiles.map(file => {
      // Create `FileUploadFile` from accepted `File`
      const acceptedFile = createFile(file); // Set state to accepted

      acceptedFile.state = 'accepted'; // Return accepted `FileUploadFile`

      return acceptedFile;
    }); // Create `FileUploadFile`s from rejected files

    const newRejectedFiles = rejectedFiles.map(({
      file,
      errors: errorList
    }) => {
      // Create `FileUploadFile` from rejected `File`
      const rejectedFile = createFile(file); // Set state and errors to rejected

      rejectedFile.state = 'rejected';
      rejectedFile.errors = errorList; // Return rejected `FileUploadFile`

      return rejectedFile;
    }); // Add list of new files to file reducer

    stateReducer({
      type: 'add',
      file: [...newAcceptedFiles, ...newRejectedFiles],
      callback: newFiles => {
        // After adding files,
        // If `onDrop` trigger defined,
        if (onDrop) {
          // Trigger `onDrop`
          onDrop(event, {
            files: Object.values(newFiles),
            acceptedFiles: Object.values(newAcceptedFiles),
            rejectedFiles: Object.values(newRejectedFiles)
          });
        }
      }
    });
  }
  /**
   * Validates errors from new file states
   *
   * @param files - list of new files to validate
   */


  function validateFiles(files) {
    // Hold file types here
    const successFiles = [];
    const errorFiles = [];
    const normalFiles = []; // For each file...

    Object.values(files).forEach(file => {
      // Depending on state...
      switch (file.state) {
        // When completed or accepted...
        case 'completed':
        case 'accepted':
          // File was successful
          successFiles.push(file);
          break;
        // When error or rejected...

        case 'error':
        case 'rejected':
          // File had an error
          errorFiles.push(file);
          break;
        // By default,

        default:
          // File is normal
          // Not yet successful or errored
          normalFiles.push(file);
      }
    }); // If files were successful,

    if (successFiles.length > 0) {
      // Update success state to true
      setHasSuccess(true); // If `onSuccess` trigger defined,

      if (onSuccess) {
        // Trigger `onSuccess`
        onSuccess(successFiles, errorFiles, normalFiles);
      } // Else, no successful files,

    } else {
      // Update success state to false
      setHasSuccess(false);
    } // If files had errors,


    if (errorFiles.length > 0) {
      // Update error state to true,
      setHasError(true); // If `onError` trigger is defined,

      if (onError) {
        // Trigger `onError`
        onError(errorFiles, successFiles, normalFiles);
      } // Else, no file had an error,

    } else {
      // Update error state to false
      setHasError(false);
    }
  }
  /**
   * Reduces files from list to add to file reducer
   *
   * @param files - incoming files to reduce
   */


  function reduceFiles(fileList) {
    // Reduce each new file from list...
    const newFilesValue = fileList.reduce((newFiles, newFile) => {
      // Create file
      const file = createFile(newFile); // Add to file map

      return _extends({}, newFiles, {
        [file.id]: file
      });
    }, {}); // Return new file map

    return {
      value: newFilesValue,
      action: {
        type: 'add',
        file: Object.values(newFilesValue)
      }
    };
  }
  /**
   * Handles state/action logic for `fileReducer` call
   *
   * @param state - current file upload state map
   * @param action - action to perform on file reducer
   */


  function stateReducerHandler({
    value,
    action
  }) {
    // Depending on action type...
    switch (action.type) {
      // When 'add'...
      case 'add':
        // If action file is a list,
        if (Array.isArray(action.file)) {
          // Reduce file list
          const newFiles = reduceFiles(action.file); // Add new files to file map

          return {
            value: _extends({}, value, newFiles.value),
            action
          };
        } // Else action file is a single file...
        // Generate new id if not already defined
        // eslint-disable-next-line no-case-declarations


        const id = action?.file?.id || generateId(); // Get properties from `File` instance
        // eslint-disable-next-line no-case-declarations

        const newFile = action.file; // Return file state map

        return {
          value: _extends({}, value, {
            [id]: newFile
          }),
          action
        };
      // When 'remove'...

      case 'remove':
        // If action id is a list of ids,
        if (Array.isArray(action.id)) {
          // Store list of removed files
          const removedFiles = []; // For each id to remove...

          action.id.forEach(fileId => {
            // If file exists in map,
            if (value[fileId]) {
              // Push file to list of removed files
              removedFiles.push(value[fileId]); // Delete file from map
              // eslint-disable-next-line no-param-reassign

              delete value[fileId];
            }
          }); // Return state map without files

          return {
            value,
            action
          };
        } // Else single id was given...
        // Destruct file from map
        // eslint-disable-next-line no-case-declarations


        const _action$id = action.id,
              newValueRemove = _objectWithoutPropertiesLoose(value, [_action$id].map(_toPropertyKey)); // Return file map without file


        return {
          value: newValueRemove,
          action
        };
      // When 'modify'...

      case 'modify':
        // If action file is list,
        if (Array.isArray(action.file)) {
          // Return file map with modified files
          return {
            value: _extends({}, value, action.file.reduce((modifiedState, modifiedFile) => {
              // Hold modified file state
              const newFileStateModified = modifiedState; // Set new modified file state

              newFileStateModified[modifiedFile.id] = modifiedFile; // Modify single file by id

              return newFileStateModified;
            }, {})),
            action
          };
        } // Else single file to modify...
        // Return file map with modified file
        // eslint-disable-next-line no-case-declarations


        const newStateModify = value; // Set new modified file state

        newStateModify[action.file.id] = action.file;
        return {
          value: newStateModify,
          action
        };
      // By default,

      default:
        // Do nothing to file map
        return {
          value,
          action
        };
    }
  }
  /**
   * Clamps number of files to `maxFiles` number
   *
   * @param newFiles - new files being added
   */


  function clampFilesToMax({
    value,
    action
  }) {
    // Get ids from total files
    const newFileIds = Object.keys(value); // If max files is defined, and more files are being added than allowed,

    if (maxFiles > 0 && newFileIds.length > maxFiles) {
      // Remove excess old files
      return stateReducerHandler({
        value,
        action: {
          type: 'remove',
          id: newFileIds.slice(0, newFileIds.length - maxFiles)
        }
      });
    } // No change


    return {
      value,
      action
    };
  }
  /**
   * Helper function to handle before and after `fileReducer` logic
   *
   * @param state - current file map
   * @param action - action to perform on file map
   */


  function stateReducerHelper({
    value
  }, action) {
    // Run handler logic on state/action
    return clampFilesToMax(stateReducerHandler({
      value,
      action
    }));
  } // Side effect for when state changes...


  React.useEffect(() => {
    // If state defined,
    if (state) {
      // Get previous and current state
      const current = state;
      const previous = prevState; // If callback defined in action,

      if (typeof current.action?.callback === 'function') {
        // Trigger action callback
        // `onDrop` is called here
        current.action.callback(current.value);
      } // Validate files


      validateFiles(current.value); // Switch on current action type...

      switch (current.action?.type) {
        // When adding files,
        case 'add':
          // If multiple files are added,
          if (Array.isArray(current.action.file)) {
            // If files are defined and callback defined,
            if (current.action.file.length > 0 && onFileAdd) {
              // Get files array
              const files = current.action.file; // Trigger callback

              onFileAdd(files, Object.values(current.value));
            } // Else if single file defined,

          } else if (current.action.file?.id) {
            // If callback defined,
            if (onFileAdd) {
              // Convert file to array
              const files = [current.action.file]; // Trigger callback

              onFileAdd(files, Object.values(current.value));
            }
          }

          break;
        // When removing files,

        case 'remove':
          // If array of ids provided,
          if (Array.isArray(current.action.id)) {
            // If ids defined and callback defined,
            if (current.action.id.length > 0 && onFileRemove) {
              // Map ids to files from previous state
              const files = current.action.id.map(id => previous.value[id]); // Trigger callback

              onFileRemove(files, Object.values(current.value));
            } // Else if one id defined,

          } else if (current.action?.id) {
            // If file existed in previous state and callback defined,
            if (previous?.value[current.action.id] && onFileRemove) {
              // Convert file id to array
              const files = [previous.value[current.action.id]]; // Trigger callback

              onFileRemove(files, Object.values(current.value));
            }
          }

          break;

        default: // do nothing

      } // If current value is not equal to previous value,


      if (JSON.stringify(current.value) !== JSON.stringify(previous.value)) {
        // If `onChange` trigger defined,
        if (onChange) {
          // Trigger `onChange`
          onChange({
            files: Object.values(current.value)
          });
        }
      } // Update previous state value


      setPrevState(current);
    }
  }, [state]);
  return {
    state,
    hasSuccess,
    hasError,
    stateReducer,
    createFile,
    addFile,
    removeFile,
    handleDrop
  };
};
/**
 * File reducer state is a map of files by id
 */


export { useFileReducer, getPropsDerived, generateId };
export default useFileReducer;