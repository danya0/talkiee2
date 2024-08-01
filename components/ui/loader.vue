<template>
  <div class="loader" />
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  --s: 25px;
  --g: 5px;

  width: calc(3 * (1.353 * var(--s) + var(--g)));
  display: grid;
  justify-items: end;
  aspect-ratio: 3;
  overflow: hidden;
  --_m: linear-gradient(90deg, #0000, #000 15px calc(100% - 15px), #0000);
  -webkit-mask: var(--_m);
  mask: var(--_m);
}
.loader:before {
  content: '';
  width: calc(4 * 100% / 3);
  background: conic-gradient(
    from -90deg at var(--s) calc(0.353 * var(--s)),
    #4a6fb5 135deg,
    #0c2c6b 0 270deg,
    #304877 0
  );
  --_m: linear-gradient(
      to bottom right,
      #0000 calc(0.25 * var(--s)),
      #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
      #0000 0
    ),
    conic-gradient(
      from -90deg at right var(--g) bottom var(--g),
      #000 90deg,
      #0000 0
    );
  -webkit-mask: var(--_m);
  mask: var(--_m);
  background-size: calc(100% / 4) 100%;
  -webkit-mask-size: calc(100% / 4) 100%;
  mask-size: calc(100% / 4) 100%;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l8 1s infinite linear;
}
@keyframes l8 {
  to {
    transform: translate(calc(100% / 4));
  }
}
</style>
