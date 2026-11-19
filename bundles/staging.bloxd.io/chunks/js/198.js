export const id = 198;
export const ids = [198];
export const modules = {
  39608: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      FORMER_BLOCK_IMAGE_NAMES: () => ID.b,
      textureAnimationData: () => pD.u,
      textureNameToIndex: () => pD.y
    });
    var ID = cD(38101),
      pD = cD(9141)
  },
  9237: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => iD
    });
    var ID = cD(9189);
    const pD = "Air",
      iD = Object.freeze(new ID.d(pD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38101: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      d: () => pD
    });
    const ID = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((DD => [DD, `${DD}_block`])));

    function pD(DD) {
      var CD;
      return null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);