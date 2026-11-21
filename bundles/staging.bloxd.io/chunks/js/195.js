export const id = 195;
export const ids = [195];
export const modules = {
  9306: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      packDisplayName: () => Ld,
      packModelMessage: () => Od,
      packModelSummary: () => Rd,
      refusedPackModels: () => ed
    });
    var pd = kd(9310),
      Nd = kd(9315);
    const Wd = "DRACO",
      Pd = 0,
      Zd = 1,
      gd = 0,
      Cd = 1,
      Kd = 32768;

    function od(dd) {
      const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      let kd = 0;
      const pd = () => {
          if (kd >= dd.byteLength) throw new RangeError("past the stream");
          return dd[kd++]
        },
        Nd = () => {
          if (kd + 4 > dd.byteLength) throw new RangeError("past the stream");
          const pd = Jd.getUint32(kd, !0);
          return kd += 4, pd
        },
        od = () => {
          let dd = 0;
          for (let Jd = 0; Jd < 35; Jd += 7) {
            const kd = pd();
            if (dd += (127 & kd) * 2 ** Jd, 0 === (128 & kd)) return dd
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let dd = 0; dd < Wd.length; dd++)
          if (pd() !== Wd.charCodeAt(dd)) return null;
        const Jd = pd(),
          ld = pd(),
          Qd = pd(),
          Ld = pd(),
          Od = pd() | pd() << 8;
        if (2 !== Jd) return null;
        0 !== (Od & Kd) && function(dd, Jd, kd) {
          const pd = () => {
              Jd(kd())
            },
            Nd = () => {
              let kd = 1,
                Nd = !0;
              for (; kd > 0;) {
                kd--, Nd || pd(), Nd = !1;
                const Wd = dd();
                for (let kd = 0; kd < Wd; kd++) pd(), Jd(dd());
                kd += dd()
              }
            },
            Wd = dd();
          for (let Pd = 0; Pd < Wd; Pd++) dd(), Nd();
          Nd()
        }(od, (Jd => {
          if (kd + Jd > dd.byteLength) throw new RangeError("past the stream");
          kd += Jd
        }), pd);
        const ed = ld < 2 ? Nd : od;
        if (Qd === Pd) return {
          faces: 0,
          vertices: Nd()
        };
        if (Qd !== Zd) return null;
        if (Ld === gd) {
          return {
            faces: ed(),
            vertices: ed()
          }
        }
        if (Ld !== Cd) return null;
        pd(), ld < 2 && od();
        const Rd = od();
        return {
          faces: od(),
          vertices: Rd
        }
      } catch {
        return null
      }
    }

    function ld(dd, Jd, kd) {
      var pd, Nd;
      if (null === (pd = null === (Nd = dd.extensionsUsed) || void 0 === Nd ? void 0 : Nd.includes("KHR_draco_mesh_compression")) || void 0 === pd || !pd) return null;
      for (const Ld of null !== (Wd = dd.meshes) && void 0 !== Wd ? Wd : []) {
        var Wd;
        for (const pd of Ld.primitives) {
          var Pd, Zd, gd, Cd, Kd, ld;
          const Nd = null === (Pd = pd.extensions) || void 0 === Pd ? void 0 : Pd.KHR_draco_mesh_compression;
          if ("object" !== typeof Nd || null === Nd) continue;
          const Wd = null === (Zd = dd.bufferViews) || void 0 === Zd ? void 0 : Zd[Nd.bufferView];
          if (null === Jd || void 0 === Wd) return Qd;
          const Ld = null !== (gd = Wd.byteOffset) && void 0 !== gd ? gd : 0,
            Od = od(Jd.subarray(Ld, Ld + Wd.byteLength));
          if (null === Od && !kd) continue;
          const ed = null !== (Cd = dd.accessors) && void 0 !== Cd ? Cd : [],
            Rd = null === (Kd = ed[pd.attributes.POSITION]) || void 0 === Kd ? void 0 : Kd.count,
            Id = void 0 === pd.indices ? 0 : null === (ld = ed[pd.indices]) || void 0 === ld ? void 0 : ld.count;
          if (null === Od || void 0 === Rd || void 0 === Id || 3 * Od.faces !== Id || Od.vertices > Rd) return Qd
        }
      }
      return null
    }
    const Qd = "has a Draco stream whose counts don't match its accessors";

    function Ld(dd) {
      var Jd;
      return null !== (Jd = dd.name) && void 0 !== Jd ? Jd : dd.fromFolderName || dd.id
    }

    function Od(dd, Jd, kd) {
      return `Texture pack "${dd}": model "${Jd}" was not loaded because it ${kd}. The default model is used instead.`
    }

    function ed(dd, Jd, kd) {
      let {
        strictDraco: Wd = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Pd = {};
      for (const [Zd, gd] of Object.entries(Jd)) {
        let Jd;
        if (gd.startsWith("data:")) try {
          const dd = new Uint8Array((0, Nd.q)(gd));
          if (Jd = (0, pd.b)(dd), null === Jd) {
            const {
              json: kd,
              bin: pd
            } = (0, Nd.w)(dd);
            Jd = ld(kd, pd, Wd)
          }
        } catch {
          Jd = "is not a binary glTF 2.0 file"
        } else Jd = "loads data from outside the file";
        Jd && (Pd[Zd] = Jd, kd && console.warn(Od(dd, Zd, Jd)))
      }
      return Pd
    }

    function Rd(dd, Jd) {
      const kd = Object.keys(Jd);
      if (0 === kd.length) return null;
      if (1 === kd.length) return Od(dd, kd[0], Jd[kd[0]]);
      const pd = kd.map((dd => `"${dd}" ${Jd[dd]}`)).join("; ");
      return `Texture pack "${dd}": ${kd.length} models were not loaded (${pd}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);