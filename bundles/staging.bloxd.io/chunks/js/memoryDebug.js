export const id = 46;
export const ids = [46];
export const modules = {
  5209: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      startMemoryDebug: () => wV
    });
    var JV = xV(3194),
      YV = xV(3142);
    const UV = 6e4,
      yV = 5,
      pV = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var QV = xV(691);
    const nV = [];

    function wV() {
      (0, YV.p)() && (0, YV.v)(vV), ZV(), setInterval(ZV, UV)
    }

    function ZV() {
      var VV;
      const {
        client: eV,
        playedS: xV,
        snapshot: UV
      } = (0, QV.n)(), wV = null !== (VV = UV.wasmMainMiB) && void 0 !== VV ? VV : function() {
        try {
          return (0, QV.V)((0, JV.x)().buffer.byteLength)
        } catch {
          return null
        }
      }(), ZV = function(VV) {
        let {
          client: eV,
          playedS: xV,
          hidden: JV,
          snapshot: YV
        } = VV;
        const UV = [`client=${null!==eV&&void 0!==eV?eV:"none"}`];
        null !== xV && UV.push(`playedS=${xV}`);
        const yV = YV.pageAgeS;
        "number" === typeof yV && UV.push(`pageAgeS=${yV}`), UV.push("hidden=" + (JV ? 1 : 0));
        for (const QV of pV) {
          const VV = YV[QV];
          "number" === typeof VV && Number.isFinite(VV) && UV.push(`${QV}=${VV}`)
        }
        return UV.join(" ")
      }({
        client: eV,
        playedS: xV,
        hidden: document.hidden,
        snapshot: {
          ...UV,
          wasmMainMiB: wV
        }
      });
      (0, YV.p)() ? (nV.push(ZV), nV.length >= yV && vV()) : (0, YV.i)("memory", ZV)
    }

    function vV() {
      for (const VV of nV.splice(0))(0, YV.i)("memory", VV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);