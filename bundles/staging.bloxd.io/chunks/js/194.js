export const id = 194;
export const ids = [194];
export const modules = {
  9074: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      packDisplayName: () => av,
      packModelMessage: () => sv,
      packModelSummary: () => iv,
      refusedPackModels: () => Cv
    });
    var hv = Pv(9078),
      Sv = Pv(9087);
    const ev = "DRACO",
      gv = 0,
      pv = 1,
      dv = 0,
      Nv = 1,
      lv = 32768;

    function Tv(vv) {
      const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      let Pv = 0;
      const hv = () => {
          if (Pv >= vv.byteLength) throw new RangeError("past the stream");
          return vv[Pv++]
        },
        Sv = () => {
          if (Pv + 4 > vv.byteLength) throw new RangeError("past the stream");
          const hv = zv.getUint32(Pv, !0);
          return Pv += 4, hv
        },
        Tv = () => {
          let vv = 0;
          for (let zv = 0; zv < 35; zv += 7) {
            const Pv = hv();
            if (vv += (127 & Pv) * 2 ** zv, 0 === (128 & Pv)) return vv
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let vv = 0; vv < ev.length; vv++)
          if (hv() !== ev.charCodeAt(vv)) return null;
        const zv = hv(),
          Wv = hv(),
          wv = hv(),
          av = hv(),
          sv = hv() | hv() << 8;
        if (2 !== zv) return null;
        0 !== (sv & lv) && function(vv, zv, Pv) {
          const hv = () => {
              zv(Pv())
            },
            Sv = () => {
              let Pv = 1,
                Sv = !0;
              for (; Pv > 0;) {
                Pv--, Sv || hv(), Sv = !1;
                const ev = vv();
                for (let Pv = 0; Pv < ev; Pv++) hv(), zv(vv());
                Pv += vv()
              }
            },
            ev = vv();
          for (let gv = 0; gv < ev; gv++) vv(), Sv();
          Sv()
        }(Tv, (zv => {
          if (Pv + zv > vv.byteLength) throw new RangeError("past the stream");
          Pv += zv
        }), hv);
        const Cv = Wv < 2 ? Sv : Tv;
        if (wv === gv) return {
          faces: 0,
          vertices: Sv()
        };
        if (wv !== pv) return null;
        if (av === dv) {
          return {
            faces: Cv(),
            vertices: Cv()
          }
        }
        if (av !== Nv) return null;
        hv(), Wv < 2 && Tv();
        const iv = Tv();
        return {
          faces: Tv(),
          vertices: iv
        }
      } catch {
        return null
      }
    }

    function Wv(vv, zv, Pv) {
      var hv, Sv;
      if (null === (hv = null === (Sv = vv.extensionsUsed) || void 0 === Sv ? void 0 : Sv.includes("KHR_draco_mesh_compression")) || void 0 === hv || !hv) return null;
      for (const av of null !== (ev = vv.meshes) && void 0 !== ev ? ev : []) {
        var ev;
        for (const hv of av.primitives) {
          var gv, pv, dv, Nv, lv, Wv;
          const Sv = null === (gv = hv.extensions) || void 0 === gv ? void 0 : gv.KHR_draco_mesh_compression;
          if ("object" !== typeof Sv || null === Sv) continue;
          const ev = null === (pv = vv.bufferViews) || void 0 === pv ? void 0 : pv[Sv.bufferView];
          if (null === zv || void 0 === ev) return wv;
          const av = null !== (dv = ev.byteOffset) && void 0 !== dv ? dv : 0,
            sv = Tv(zv.subarray(av, av + ev.byteLength));
          if (null === sv && !Pv) continue;
          const Cv = null !== (Nv = vv.accessors) && void 0 !== Nv ? Nv : [],
            iv = null === (lv = Cv[hv.attributes.POSITION]) || void 0 === lv ? void 0 : lv.count,
            cv = void 0 === hv.indices ? 0 : null === (Wv = Cv[hv.indices]) || void 0 === Wv ? void 0 : Wv.count;
          if (null === sv || void 0 === iv || void 0 === cv || 3 * sv.faces !== cv || sv.vertices > iv) return wv
        }
      }
      return null
    }
    const wv = "has a Draco stream whose counts don't match its accessors";

    function av(vv) {
      var zv;
      return null !== (zv = vv.name) && void 0 !== zv ? zv : vv.fromFolderName || vv.id
    }

    function sv(vv, zv, Pv) {
      return `Texture pack "${vv}": model "${zv}" was not loaded because it ${Pv}. The default model is used instead.`
    }

    function Cv(vv, zv, Pv) {
      let {
        strictDraco: ev = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const gv = {};
      for (const [pv, dv] of Object.entries(zv)) {
        let zv;
        if (dv.startsWith("data:")) try {
          const vv = new Uint8Array((0, Sv.x)(dv));
          if (zv = (0, hv.d)(vv), null === zv) {
            const {
              json: Pv,
              bin: hv
            } = (0, Sv.H)(vv);
            zv = Wv(Pv, hv, ev)
          }
        } catch {
          zv = "is not a binary glTF 2.0 file"
        } else zv = "loads data from outside the file";
        zv && (gv[pv] = zv, Pv && console.warn(sv(vv, pv, zv)))
      }
      return gv
    }

    function iv(vv, zv) {
      const Pv = Object.keys(zv);
      if (0 === Pv.length) return null;
      if (1 === Pv.length) return sv(vv, Pv[0], zv[Pv[0]]);
      const hv = Pv.map((vv => `"${vv}" ${zv[vv]}`)).join("; ");
      return `Texture pack "${vv}": ${Pv.length} models were not loaded (${hv}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);