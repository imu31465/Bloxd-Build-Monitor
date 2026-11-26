export const id = 47;
export const ids = [47];
export const modules = {
  5173: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      startMemoryDebug: () => EH
    });
    var AH = LH(3168),
      rH = LH(3105);
    const SH = 6e4,
      hH = 5,
      tH = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var zH = LH(644);
    const CH = [];

    function EH() {
      (0, rH.s)() && (0, rH.y)(GH), XH(), setInterval(XH, SH)
    }

    function XH() {
      var HH;
      const {
        client: BH,
        playedS: LH,
        snapshot: SH
      } = (0, zH.n)(), EH = null !== (HH = SH.wasmMainMiB) && void 0 !== HH ? HH : function() {
        try {
          return (0, zH.Q)((0, AH.u)().buffer.byteLength)
        } catch {
          return null
        }
      }(), XH = function(HH) {
        let {
          client: BH,
          playedS: LH,
          hidden: AH,
          snapshot: rH
        } = HH;
        const SH = [`client=${null!==BH&&void 0!==BH?BH:"none"}`];
        null !== LH && SH.push(`playedS=${LH}`);
        const hH = rH.pageAgeS;
        "number" === typeof hH && SH.push(`pageAgeS=${hH}`), SH.push("hidden=" + (AH ? 1 : 0));
        for (const zH of tH) {
          const HH = rH[zH];
          "number" === typeof HH && Number.isFinite(HH) && SH.push(`${zH}=${HH}`)
        }
        return SH.join(" ")
      }({
        client: BH,
        playedS: LH,
        hidden: document.hidden,
        snapshot: {
          ...SH,
          wasmMainMiB: EH
        }
      });
      (0, rH.s)() ? (CH.push(XH), CH.length >= hH && GH()) : (0, rH.j)("memory", XH)
    }

    function GH() {
      for (const HH of CH.splice(0))(0, rH.j)("memory", HH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);