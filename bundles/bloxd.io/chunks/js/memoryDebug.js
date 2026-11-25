export const id = 40;
export const ids = [40];
export const modules = {
  4723: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      startMemoryDebug: () => VG
    });
    var wG = ZG(2868),
      SG = ZG(2801);
    const LG = 6e4,
      yG = 5,
      kG = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var UG = ZG(636);
    const YG = [];

    function VG() {
      (0, SG.n)() && (0, SG.u)(fG), pG(), setInterval(pG, LG)
    }

    function pG() {
      var GG;
      const {
        client: bG,
        playedS: ZG,
        snapshot: LG
      } = (0, UG.o)(), VG = null !== (GG = LG.wasmMainMiB) && void 0 !== GG ? GG : function() {
        try {
          return (0, UG.M)((0, wG.y)().buffer.byteLength)
        } catch {
          return null
        }
      }(), pG = function(GG) {
        let {
          client: bG,
          playedS: ZG,
          hidden: wG,
          snapshot: SG
        } = GG;
        const LG = [`client=${null!==bG&&void 0!==bG?bG:"none"}`];
        null !== ZG && LG.push(`playedS=${ZG}`);
        const yG = SG.pageAgeS;
        "number" === typeof yG && LG.push(`pageAgeS=${yG}`), LG.push("hidden=" + (wG ? 1 : 0));
        for (const UG of kG) {
          const GG = SG[UG];
          "number" === typeof GG && Number.isFinite(GG) && LG.push(`${UG}=${GG}`)
        }
        return LG.join(" ")
      }({
        client: bG,
        playedS: ZG,
        hidden: document.hidden,
        snapshot: {
          ...LG,
          wasmMainMiB: VG
        }
      });
      (0, SG.n)() ? (YG.push(pG), YG.length >= yG && fG()) : (0, SG.j)("memory", pG)
    }

    function fG() {
      for (const GG of YG.splice(0))(0, SG.j)("memory", GG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);