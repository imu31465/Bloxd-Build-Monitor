export const id = 48;
export const ids = [48];
export const modules = {
  5521: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      startMemoryDebug: () => pr
    });
    var Zr = Qr(2396),
      Wr = Qr(3909);
    const ar = 6e4,
      jr = 5,
      Ir = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var fr = Qr(719);
    const Er = [];

    function pr() {
      (0, Wr.t)() && (0, Wr.D)(mr), xr(), setInterval(xr, ar)
    }

    function xr() {
      var rr;
      const {
        client: Sr,
        playedS: Qr,
        snapshot: ar
      } = (0, fr.p)(), pr = null !== (rr = ar.wasmMainMiB) && void 0 !== rr ? rr : function() {
        try {
          return (0, fr.X)((0, Zr.s)().buffer.byteLength)
        } catch {
          return null
        }
      }(), xr = function(rr) {
        let {
          client: Sr,
          playedS: Qr,
          hidden: Zr,
          snapshot: Wr
        } = rr;
        const ar = [`client=${null!==Sr&&void 0!==Sr?Sr:"none"}`];
        null !== Qr && ar.push(`playedS=${Qr}`);
        const jr = Wr.pageAgeS;
        "number" === typeof jr && ar.push(`pageAgeS=${jr}`), ar.push("hidden=" + (Zr ? 1 : 0));
        for (const fr of Ir) {
          const rr = Wr[fr];
          "number" === typeof rr && Number.isFinite(rr) && ar.push(`${fr}=${rr}`)
        }
        return ar.join(" ")
      }({
        client: Sr,
        playedS: Qr,
        hidden: document.hidden,
        snapshot: {
          ...ar,
          wasmMainMiB: pr
        }
      });
      (0, Wr.t)() ? (Er.push(xr), Er.length >= jr && mr()) : (0, Wr.l)("memory", xr)
    }

    function mr() {
      for (const rr of Er.splice(0))(0, Wr.l)("memory", rr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);