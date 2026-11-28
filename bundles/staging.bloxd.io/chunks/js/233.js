export const id = 233;
export const ids = [233];
export const modules = {
  35647: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      packDisplayName: () => Hd,
      packModelMessage: () => yd,
      packModelSummary: () => Td,
      refusedPackModels: () => bd
    });
    var Wd = md(35653),
      Fd = md(35662);
    const Rd = "DRACO",
      Xd = 0,
      Kd = 1,
      hd = 0,
      vd = 1,
      Qd = 32768;

    function td(dd) {
      const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      let md = 0;
      const Wd = () => {
          if (md >= dd.byteLength) throw new RangeError("past the stream");
          return dd[md++]
        },
        Fd = () => {
          if (md + 4 > dd.byteLength) throw new RangeError("past the stream");
          const Wd = Od.getUint32(md, !0);
          return md += 4, Wd
        },
        td = () => {
          let dd = 0;
          for (let Od = 0; Od < 35; Od += 7) {
            const md = Wd();
            if (dd += (127 & md) * 2 ** Od, 0 === (128 & md)) return dd
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let dd = 0; dd < Rd.length; dd++)
          if (Wd() !== Rd.charCodeAt(dd)) return null;
        const Od = Wd(),
          od = Wd(),
          Nd = Wd(),
          qd = Wd(),
          Hd = Wd() | Wd() << 8;
        if (2 !== Od) return null;
        0 !== (Hd & Qd) && function(dd, Od, md) {
          const Wd = () => {
              Od(md())
            },
            Fd = () => {
              let md = 1,
                Fd = !0;
              for (; md > 0;) {
                md--, Fd || Wd(), Fd = !1;
                const Rd = dd();
                for (let md = 0; md < Rd; md++) Wd(), Od(dd());
                md += dd()
              }
            },
            Rd = dd();
          for (let Xd = 0; Xd < Rd; Xd++) dd(), Fd();
          Fd()
        }(td, (Od => {
          if (md + Od > dd.byteLength) throw new RangeError("past the stream");
          md += Od
        }), Wd);
        const yd = od < 2 ? Fd : td;
        if (Nd === Xd) return {
          faces: 0,
          vertices: Fd(),
          minor: od
        };
        if (Nd !== Kd) return null;
        if (qd === hd) {
          return {
            faces: yd(),
            vertices: yd(),
            minor: od
          }
        }
        if (qd !== vd) return null;
        Wd(), od < 2 && td();
        const bd = td();
        return {
          faces: td(),
          vertices: bd,
          minor: od
        }
      } catch {
        return null
      }
    }

    function od(dd, Od, md) {
      var Wd, Fd;
      if (null === (Wd = null === (Fd = dd.extensionsUsed) || void 0 === Fd ? void 0 : Fd.includes("KHR_draco_mesh_compression")) || void 0 === Wd || !Wd) return null;
      for (const Hd of null !== (Rd = dd.meshes) && void 0 !== Rd ? Rd : []) {
        var Rd;
        for (const Wd of Hd.primitives) {
          var Xd, Kd, hd, vd, Qd, od;
          const Fd = null === (Xd = Wd.extensions) || void 0 === Xd ? void 0 : Xd.KHR_draco_mesh_compression;
          if ("object" !== typeof Fd || null === Fd) continue;
          const Rd = null === (Kd = dd.bufferViews) || void 0 === Kd ? void 0 : Kd[Fd.bufferView];
          if (null === Od || void 0 === Rd) return Nd;
          const Hd = null !== (hd = Rd.byteOffset) && void 0 !== hd ? hd : 0,
            yd = td(Od.subarray(Hd, Hd + Rd.byteLength));
          if (null === yd && !md) continue;
          const bd = null !== (vd = dd.accessors) && void 0 !== vd ? vd : [],
            Td = null === (Qd = bd[Wd.attributes.POSITION]) || void 0 === Qd ? void 0 : Qd.count,
            pd = void 0 === Wd.indices ? 0 : null === (od = bd[Wd.indices]) || void 0 === od ? void 0 : od.count;
          if (null === yd || void 0 === Td || void 0 === pd || 3 * yd.faces !== pd || yd.vertices > Td) return Nd;
          if (md && yd.minor < 2) return qd
        }
      }
      return null
    }
    const Nd = "has a Draco stream whose counts don't match its accessors",
      qd = "has a Draco stream too old to decode: export it again";

    function Hd(dd) {
      var Od;
      return null !== (Od = dd.name) && void 0 !== Od ? Od : dd.fromFolderName || dd.id
    }

    function yd(dd, Od, md) {
      return `Texture pack "${dd}": model "${Od}" was not loaded because it ${md}. The default model is used instead.`
    }

    function bd(dd, Od, md) {
      let {
        strictDraco: Rd = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Xd = {};
      for (const [Kd, hd] of Object.entries(Od)) {
        let Od;
        if (hd.startsWith("data:")) try {
          const dd = new Uint8Array((0, Fd.n)(hd));
          if (Od = (0, Wd.e)(dd), null === Od) {
            const {
              json: md,
              bin: Wd
            } = (0, Fd.v)(dd);
            Od = od(md, Wd, Rd)
          }
        } catch {
          Od = "is not a binary glTF 2.0 file"
        } else Od = "loads data from outside the file";
        Od && (Xd[Kd] = Od, md && console.warn(yd(dd, Kd, Od)))
      }
      return Xd
    }

    function Td(dd, Od) {
      const md = Object.keys(Od);
      if (0 === md.length) return null;
      if (1 === md.length) return yd(dd, md[0], Od[md[0]]);
      const Wd = md.map((dd => `"${dd}" ${Od[dd]}`)).join("; ");
      return `Texture pack "${dd}": ${md.length} models were not loaded (${Wd}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);