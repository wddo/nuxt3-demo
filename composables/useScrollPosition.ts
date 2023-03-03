export const useScrollPosition = () => {
  const scroll = reactive({ y: 0 });

  let ticking = false;

  const scrollHandler = () => {
    const { scrollY } = window;

    if (!ticking) {
      requestAnimationFrame(() => {
        scroll.y = scrollY;

        ticking = false;
      });

      ticking = true;
    }
  };

  onMounted(() => window.addEventListener("scroll", scrollHandler));
  onUnmounted(() => window.removeEventListener("scroll", scrollHandler));

  return { scroll };
};
