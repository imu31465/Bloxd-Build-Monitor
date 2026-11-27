export const id = 48;
export const ids = [48];
export const modules = {
  5590: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      startMemoryDebug: () => VR
    });
    var yR = GR(2448),
      tR = GR(3960);
    const uR = 6e4,
      ZR = 5,
      qR = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var iR = GR(715);
    const fR = [];

    function VR() {
      (0, tR.p)() && (0, tR.w)(wR), KR(), setInterval(KR, uR)
    }

    function KR() {
      var RR;
      const {
        client: JR,
        playedS: GR,
        snapshot: uR
      } = (0, iR.o)(), VR = null !== (RR = uR.wasmMainMiB) && void 0 !== RR ? RR : function() {
        try {
          return (0, iR.K)((0, yR.m)().buffer.byteLength)
        } catch {
          return null
        }
      }(), KR = function(RR) {
        let {
          client: JR,
          playedS: GR,
          hidden: yR,
          snapshot: tR
        } = RR;
        const uR = [`client=${null!==JR&&void 0!==JR?JR:"none"}`];
        null !== GR && uR.push(`playedS=${GR}`);
        const ZR = tR.pageAgeS;
        "number" === typeof ZR && uR.push(`pageAgeS=${ZR}`), uR.push("hidden=" + (yR ? 1 : 0));
        for (const iR of qR) {
          const RR = tR[iR];
          "number" === typeof RR && Number.isFinite(RR) && uR.push(`${iR}=${RR}`)
        }
        return uR.join(" ")
      }({
        client: JR,
        playedS: GR,
        hidden: document.hidden,
        snapshot: {
          ...uR,
          wasmMainMiB: VR
        }
      });
      (0, tR.p)() ? (fR.push(KR), fR.length >= ZR && wR()) : (0, tR.k)("memory", KR)
    }

    function wR() {
      for (const RR of fR.splice(0))(0, tR.k)("memory", RR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);