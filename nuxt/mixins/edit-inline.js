const MixinEditInline = {
  data: () => ({
    inline: {
      edit: false,
    }
  }),

  methods: {
    toggleInlineEdit() {
      this.inline.edit = !this.inline.edit
    }
  }
}

export { MixinEditInline }
