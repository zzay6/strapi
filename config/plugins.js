module.exports = () => ({
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        items: [
          'paragraph', 'heading1', 'heading2', '|',
          'bold', 'italic', 'underline', 'link', '|',
          'bulletedList', 'numberedList', '|',
          'insertTable', 'blockQuote', 'mediaEmbed', '|',
          'undo', 'redo'
        ],
      },
    },
  },
});
