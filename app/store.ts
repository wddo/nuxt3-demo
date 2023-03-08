const context = reactive({
  initial: false,
  setInitial: (value: boolean) => {
    context.initial = value;
  },
});

export const store = readonly(context);
