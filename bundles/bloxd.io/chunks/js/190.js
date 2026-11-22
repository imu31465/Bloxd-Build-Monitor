export const id = 190;
export const ids = [190];
export const modules = {
  40060: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      FORMER_BLOCK_IMAGE_NAMES: () => Dk.b,
      textureAnimationData: () => fk.r,
      textureNameToIndex: () => fk.s
    });
    var Dk = ik(38304),
      fk = ik(9020)
  },
  9105: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk
    });
    var Dk = ik(9063);
    const fk = "Air",
      Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38304: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk,
      c: () => fk
    });
    const Dk = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((kk => [kk, `${kk}_block`])));

    function fk(kk) {
      var ek;
      return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);