export const id = 40;
export const ids = [40];
export const modules = {
  4790: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      startMemoryDebug: () => jT
    });
    var WT = mT(2992),
      zT = mT(2929);
    const MT = 6e4,
      gT = 5,
      nT = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var HT = mT(684);
    const kT = [];

    function jT() {
      (0, zT.v)() && (0, zT.E)(LT), lT(), setInterval(lT, MT)
    }

    function lT() {
      var TT;
      const {
        client: UT,
        playedS: mT,
        snapshot: MT
      } = (0, HT.m)(), jT = null !== (TT = MT.wasmMainMiB) && void 0 !== TT ? TT : function() {
        try {
          return (0, HT.G)((0, WT.u)().buffer.byteLength)
        } catch {
          return null
        }
      }(), lT = function(TT) {
        let {
          client: UT,
          playedS: mT,
          hidden: WT,
          snapshot: zT
        } = TT;
        const MT = [`client=${null!==UT&&void 0!==UT?UT:"none"}`];
        null !== mT && MT.push(`playedS=${mT}`);
        const gT = zT.pageAgeS;
        "number" === typeof gT && MT.push(`pageAgeS=${gT}`), MT.push("hidden=" + (WT ? 1 : 0));
        for (const HT of nT) {
          const TT = zT[HT];
          "number" === typeof TT && Number.isFinite(TT) && MT.push(`${HT}=${TT}`)
        }
        return MT.join(" ")
      }({
        client: UT,
        playedS: mT,
        hidden: document.hidden,
        snapshot: {
          ...MT,
          wasmMainMiB: jT
        }
      });
      (0, zT.v)() ? (kT.push(lT), kT.length >= gT && LT()) : (0, zT.m)("memory", lT)
    }

    function LT() {
      for (const TT of kT.splice(0))(0, zT.m)("memory", TT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);