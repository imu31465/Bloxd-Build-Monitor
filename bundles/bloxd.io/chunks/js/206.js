export const id = 206;
export const ids = [206];
export const modules = {
  41493: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      FORMER_BLOCK_IMAGE_NAMES: () => YB.e,
      textureAnimationData: () => DB.t,
      textureNameToIndex: () => DB.u
    });
    var YB = GB(39417),
      DB = GB(9927)
  },
  10027: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => QB
    });
    var YB = GB(9974);
    const DB = "Air",
      QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39417: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => DB
    });
    const YB = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((BB => [BB, `${BB}_block`])));

    function DB(BB) {
      var OB;
      return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);