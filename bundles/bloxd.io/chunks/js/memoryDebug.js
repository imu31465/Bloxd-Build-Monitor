export const id = 48;
export const ids = [48];
export const modules = {
  5464: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      startMemoryDebug: () => Qd
    });
    var Wd = md(2421),
      Fd = md(3903);
    const Rd = 6e4,
      Xd = 5,
      Kd = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var hd = md(739);
    const vd = [];

    function Qd() {
      (0, Fd.q)() && (0, Fd.B)(od), td(), setInterval(td, Rd)
    }

    function td() {
      var dd;
      const {
        client: Od,
        playedS: md,
        snapshot: Rd
      } = (0, hd.u)(), Qd = null !== (dd = Rd.wasmMainMiB) && void 0 !== dd ? dd : function() {
        try {
          return (0, hd.bb)((0, Wd.t)().buffer.byteLength)
        } catch {
          return null
        }
      }(), td = function(dd) {
        let {
          client: Od,
          playedS: md,
          hidden: Wd,
          snapshot: Fd
        } = dd;
        const Rd = [`client=${null!==Od&&void 0!==Od?Od:"none"}`];
        null !== md && Rd.push(`playedS=${md}`);
        const Xd = Fd.pageAgeS;
        "number" === typeof Xd && Rd.push(`pageAgeS=${Xd}`), Rd.push("hidden=" + (Wd ? 1 : 0));
        for (const hd of Kd) {
          const dd = Fd[hd];
          "number" === typeof dd && Number.isFinite(dd) && Rd.push(`${hd}=${dd}`)
        }
        return Rd.join(" ")
      }({
        client: Od,
        playedS: md,
        hidden: document.hidden,
        snapshot: {
          ...Rd,
          wasmMainMiB: Qd
        }
      });
      (0, Fd.q)() ? (vd.push(td), vd.length >= Xd && od()) : (0, Fd.k)("memory", td)
    }

    function od() {
      for (const dd of vd.splice(0))(0, Fd.k)("memory", dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);