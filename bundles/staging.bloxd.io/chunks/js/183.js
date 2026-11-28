export const id = 183;
export const ids = [183];
export const modules = {
  10109: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(10112),
      Hb = Mb(661),
      pb = Mb(160);

    function Vb(bb) {
      var wb, Mb;
      if ((0, Hb.K)(bb)) return !0;
      const Vb = null !== (wb = null === (Mb = pb.siteUsedData[pb.siteUsed]) || void 0 === Mb ? void 0 : Mb.adConfig.showRewardedAds) && void 0 !== wb && wb;
      for (const Hb in bb) {
        const wb = bb[Hb];
        if (null !== wb && void 0 !== wb && wb.items)
          for (const bb in wb.items)
            if ((0, eb.i)(wb.items[bb], Vb)) return !1
      }
      return !0
    }
  },
  64384: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      getClientGameLeaderboardKey: () => eb.r,
      getClientGameMapKey: () => eb.s,
      shopIsEmpty: () => Hb.c
    });
    var eb = Mb(3531),
      Hb = Mb(10109)
  },
  10112: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return !bb.hidden && (wb || !bb.isRewardedAd)
    }

    function Hb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function pb(bb, wb) {
      var Mb;
      if ("dropdown" === (null === (Mb = bb.userInput) || void 0 === Mb ? void 0 : Mb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const Mb of bb.userInput.dropdownOptions)
          if (Hb(Mb) === wb) return "object" === typeof Mb ? Mb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", wb)
      }
      return bb.cost
    }

    function Vb(bb, wb, Mb) {
      var eb;
      const Hb = null !== (eb = Mb.excludedPlayers) && void 0 !== eb ? eb : [wb];
      return bb.filter((bb => !Hb.includes(bb)))
    }
    Mb.d(wb, {
      d: () => pb,
      f: () => Hb,
      g: () => Vb,
      i: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);