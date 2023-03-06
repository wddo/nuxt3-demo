export const useScrollPosition = () => {
  const scroll = reactive({ y: 0 });

  const onScroll = (ypos: number) => {
    scroll.y = ypos;
  };

  const scrollHandler = () => {
    const { scrollY } = window;

    requestAnimationFrame(() => {
      onScroll(scrollY);
    });
  };

  onMounted(() => window.addEventListener("scroll", scrollHandler));
  onUnmounted(() => window.removeEventListener("scroll", scrollHandler));

  return { scroll };
};
