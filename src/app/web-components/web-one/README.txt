How These Components Work
Each component tracks form changes using ngModelChange.
When the user types, it fires onFormChange(), which emits a formDirty event.
If the user clicks "Save," it emits formClean, resetting the dirty state.
The parent Angular app listens for these events and prevents navigation if any form is dirty.