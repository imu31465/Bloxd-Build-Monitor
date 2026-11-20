export const id = 55;
export const ids = [55];
export const modules = {
  39873: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      prefetchWasmClient: () => xz,
      startJoinLoad: () => Bz,
      startLoadAheadOfJoin: () => rz
    });
    var Fz = sz(3376),
      Wz = sz(35828),
      Xz = sz(39875),
      Oz = sz(1060),
      oz = sz(601),
      vz = sz(39887),
      Uz = (sz(39903), sz(39908)),
      Kz = sz(39912),
      uz = sz(39938);
    const Nz = "[bloxd-wasm-client]";
    let bz = null,
      wz = null,
      Dz = null,
      gz = null,
      Hz = null;

    function Bz() {
      return gz ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const zz = await (0, Kz.I)();
        if (null === zz) return;
        if ((0, vz.m)(zz)) return (0, Kz.L)("none"), void Pz("none");
        if ("wasm" !== (0, oz.d)(window.location.search) && null !== (0, Uz.c)(zz, (0, Uz.d)(zz, !0))) return (0, Kz.L)("none"), void Pz("none");
        (0, Kz.L)(zz.backend);
        const tz = await zz.load();
        Pz(tz.name), "unloaded" === (0, Fz.H)() && (0, Kz.l)(), await (0, Wz.h)(tz, Xz.h) || console.warn(`${Nz} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((zz => {
        console.warn(`${Nz} the join's early wasm load did not start: the boot loads the client itself`, zz)
      })), gz
    }

    function Pz(zz) {
      null !== Hz && (0, Oz.logClientMeasurement)("wasm_compile_ahead", {
        hit: Hz === zz ? 1 : 0
      }, {
        guessed: Hz,
        loaded: zz
      })
    }

    function rz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Dz) {
        var tz;
        const sz = null !== (tz = zz.joinStarted) && void 0 !== tz ? tz : () => !1;
        Dz = Promise.all([xz(zz), Yz(sz)]).then((() => {}))
      }
      return Dz
    }

    function Yz(zz) {
      return wz ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const tz = await (0, Kz.h)();
        null === tz || zz() || "unloaded" !== (0, Fz.H)() || (Hz = tz.name, await (0, Wz.c)([tz, Xz.h], "low"))
      })().catch((zz => {
        console.warn(`${Nz} the compile ahead of the join did not start: the join loads the client itself`, zz)
      })), wz
    }

    function xz() {
      let {
        joinStarted: zz = () => !1,
        language: tz = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return bz ??= async function(zz, tz) {
        if (!await async function(zz) {
            if (zz()) return !1;
            let tz;
            try {
              var Fz;
              const zz = await fetch(`${sz.p}static/js/7rj44.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!zz.ok) throw new Error(`HTTP ${zz.status}`);
              if (/\bno-store\b/.test(null !== (Fz = zz.headers.get("Cache-Control")) && void 0 !== Fz ? Fz : "")) return !1;
              const Wz = await zz.json();
              if (!Array.isArray(Wz)) throw new Error("not a list");
              tz = Wz
            } catch (Xz) {
              return console.warn(`${Nz} the join's chunk list did not load: the join downloads its chunks itself`, Xz), !zz()
            }
            if (zz()) return !1;
            const Wz = document.createElement("link").relList.supports("prefetch");
            for (const Oz of tz) {
              const zz = `${sz.p}${Oz}`;
              Wz ? mz(zz) : Jz(zz).catch((tz => {
                console.warn(`${Nz} prefetching ${zz} failed`, tz)
              }))
            }
            return !0
          }(zz)) return;
        const Fz = [Jz((0, uz.g)())];
        (0, uz.c)(tz) && Fz.push(Jz((0, uz.j)()));
        await Promise.all(Fz)
      }(zz, tz).catch((zz => {
        console.warn(`${Nz} the prefetch failed: the join downloads the client itself`, zz)
      })), bz
    }

    function mz(zz) {
      const tz = document.createElement("link");
      tz.rel = "prefetch", tz.href = zz, zz.endsWith(".js") && (tz.crossOrigin = "anonymous"), document.head.appendChild(tz)
    }
    async function Jz(zz) {
      const tz = await fetch(zz, {
        priority: "low"
      });
      if (!tz.ok) throw new Error(`Fetching ${zz} failed: HTTP ${tz.status}`);
      const sz = tz.body.getReader();
      for (; !(await sz.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);