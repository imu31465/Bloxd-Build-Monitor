export const id = 205;
export const ids = [205];
export const modules = {
  34452: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      packDisplayName: () => ft,
      packModelMessage: () => wt,
      packModelSummary: () => Nt,
      refusedPackModels: () => yt
    });
    var Ot = Vt(34459),
      qt = Vt(34466);
    const Dt = "DRACO",
      mt = 0,
      dt = 1,
      jt = 0,
      Ht = 1,
      Xt = 32768;

    function Qt(tt) {
      const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      let Vt = 0;
      const Ot = () => {
          if (Vt >= tt.byteLength) throw new RangeError("past the stream");
          return tt[Vt++]
        },
        qt = () => {
          if (Vt + 4 > tt.byteLength) throw new RangeError("past the stream");
          const Ot = et.getUint32(Vt, !0);
          return Vt += 4, Ot
        },
        Qt = () => {
          let tt = 0;
          for (let et = 0; et < 35; et += 7) {
            const Vt = Ot();
            if (tt += (127 & Vt) * 2 ** et, 0 === (128 & Vt)) return tt
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let tt = 0; tt < Dt.length; tt++)
          if (Ot() !== Dt.charCodeAt(tt)) return null;
        const et = Ot(),
          lt = Ot(),
          Et = Ot(),
          ft = Ot(),
          wt = Ot() | Ot() << 8;
        if (2 !== et) return null;
        0 !== (wt & Xt) && function(tt, et, Vt) {
          const Ot = () => {
              et(Vt())
            },
            qt = () => {
              let Vt = 1,
                qt = !0;
              for (; Vt > 0;) {
                Vt--, qt || Ot(), qt = !1;
                const Dt = tt();
                for (let Vt = 0; Vt < Dt; Vt++) Ot(), et(tt());
                Vt += tt()
              }
            },
            Dt = tt();
          for (let mt = 0; mt < Dt; mt++) tt(), qt();
          qt()
        }(Qt, (et => {
          if (Vt + et > tt.byteLength) throw new RangeError("past the stream");
          Vt += et
        }), Ot);
        const yt = lt < 2 ? qt : Qt;
        if (Et === mt) return {
          faces: 0,
          vertices: qt()
        };
        if (Et !== dt) return null;
        if (ft === jt) {
          return {
            faces: yt(),
            vertices: yt()
          }
        }
        if (ft !== Ht) return null;
        Ot(), lt < 2 && Qt();
        const Nt = Qt();
        return {
          faces: Qt(),
          vertices: Nt
        }
      } catch {
        return null
      }
    }

    function lt(tt, et, Vt) {
      var Ot, qt;
      if (null === (Ot = null === (qt = tt.extensionsUsed) || void 0 === qt ? void 0 : qt.includes("KHR_draco_mesh_compression")) || void 0 === Ot || !Ot) return null;
      for (const ft of null !== (Dt = tt.meshes) && void 0 !== Dt ? Dt : []) {
        var Dt;
        for (const Ot of ft.primitives) {
          var mt, dt, jt, Ht, Xt, lt;
          const qt = null === (mt = Ot.extensions) || void 0 === mt ? void 0 : mt.KHR_draco_mesh_compression;
          if ("object" !== typeof qt || null === qt) continue;
          const Dt = null === (dt = tt.bufferViews) || void 0 === dt ? void 0 : dt[qt.bufferView];
          if (null === et || void 0 === Dt) return Et;
          const ft = null !== (jt = Dt.byteOffset) && void 0 !== jt ? jt : 0,
            wt = Qt(et.subarray(ft, ft + Dt.byteLength));
          if (null === wt && !Vt) continue;
          const yt = null !== (Ht = tt.accessors) && void 0 !== Ht ? Ht : [],
            Nt = null === (Xt = yt[Ot.attributes.POSITION]) || void 0 === Xt ? void 0 : Xt.count,
            Mt = void 0 === Ot.indices ? 0 : null === (lt = yt[Ot.indices]) || void 0 === lt ? void 0 : lt.count;
          if (null === wt || void 0 === Nt || void 0 === Mt || 3 * wt.faces !== Mt || wt.vertices > Nt) return Et
        }
      }
      return null
    }
    const Et = "has a Draco stream whose counts don't match its accessors";

    function ft(tt) {
      var et;
      return null !== (et = tt.name) && void 0 !== et ? et : tt.fromFolderName || tt.id
    }

    function wt(tt, et, Vt) {
      return `Texture pack "${tt}": model "${et}" was not loaded because it ${Vt}. The default model is used instead.`
    }

    function yt(tt, et, Vt) {
      let {
        strictDraco: Dt = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mt = {};
      for (const [dt, jt] of Object.entries(et)) {
        let et;
        if (jt.startsWith("data:")) try {
          const tt = new Uint8Array((0, qt.r)(jt));
          if (et = (0, Ot.b)(tt), null === et) {
            const {
              json: Vt,
              bin: Ot
            } = (0, qt.z)(tt);
            et = lt(Vt, Ot, Dt)
          }
        } catch {
          et = "is not a binary glTF 2.0 file"
        } else et = "loads data from outside the file";
        et && (mt[dt] = et, Vt && console.warn(wt(tt, dt, et)))
      }
      return mt
    }

    function Nt(tt, et) {
      const Vt = Object.keys(et);
      if (0 === Vt.length) return null;
      if (1 === Vt.length) return wt(tt, Vt[0], et[Vt[0]]);
      const Ot = Vt.map((tt => `"${tt}" ${et[tt]}`)).join("; ");
      return `Texture pack "${tt}": ${Vt.length} models were not loaded (${Ot}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);