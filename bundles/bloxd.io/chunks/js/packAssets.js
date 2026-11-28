export const id = 53;
export const ids = [53, 233];
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
  },
  64983: (dd, Od, md) => {
    md.d(Od, {
      packAssets: () => bd
    });
    var Wd = md(2337),
      Fd = md(2319),
      Rd = md(35647),
      Xd = md(4427),
      Kd = md(4458);

    function hd(dd, Od, md, Wd) {
      const Fd = `${(0,Xd.d)(dd,Od)}|sheets${md}`;
      return Wd === Kd.c ? Fd : `${Fd}|layers${Wd}`
    }
    var vd = md(4464),
      Qd = md(4400),
      td = md(4385),
      od = md(4433);
    var Nd = md(55093);
    const qd = 256;
    let Hd = null,
      yd = null;

    function bd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kd.c;
      if ((null === (Od = Hd) || void 0 === Od ? void 0 : Od.pack) === dd.pack && Hd.maxLayerWidth === md) return Hd.assets;
      const bd = (0, Nd.g)(dd.pack, (0, Nd.i)(dd));
      if (null === bd || !(0, Fd.c)(bd)) return Promise.resolve(null);
      const pd = async function(dd, Od, md) {
        var Nd;
        const Hd = null !== (Nd = dd.textureOverrides) && void 0 !== Nd ? Nd : {},
          {
            id: bd,
            version: pd
          } = dd.metaData,
          Yd = Od && bd !== Wd.n.CUSTOM,
          gd = {};
        Yd && (yd = gd);
        let wd, Ed, Jd = Yd ? await async function(dd, Od, md, Wd) {
          const Fd = hd(dd, Od, md, Kd.c),
            Rd = hd(dd, Od, md, Wd),
            vd = await (0, Xd.i)((dd => dd === Fd || dd === Rd));
          return null !== vd && (Wd === Kd.c || vd.blockAtlasWidth <= Wd) ? vd : null
        }(bd, pd, qd, md): null;
        if (null === Jd) {
          const {
            blockMetadata: dd,
            getDefaultTexture: Od,
            textureNameToIndex: Rd
          } = await (0, Fd.j)(), Kd = (0, Qd.b)(dd, ((dd, md) => ({
            url: Td(Hd, Od, dd, "block" === md ? td.c.BLOCK : td.c.ITEM)
          }))), vd = await
          function(dd, Od, md, Wd, Fd, Rd) {
            return (0, od.d)((Xd => Xd.WasmTextureWorker.generateRequired(dd, Od, md, Wd, Fd, Rd)))
          }(dd, Rd, Kd, bd === Wd.d, md, qd), Nd = vd.assets;
          Jd = {
            ...Nd,
            averageColors: {}
          }, wd = vd.averageColors(), Yd && (Ed = wd.then((async dd => {
            null !== dd && yd === gd && await
            function(dd, Od, md, Wd, Fd) {
              return (0, Xd.m)(hd(dd, Od, Wd, Fd), md)
            }(bd, pd, {
              ...Nd,
              averageColors: dd
            }, qd, vd.layerCap)
          })))
        }
        return function(dd, Od) {
          var md, Wd;
          let Fd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Kd = dd.averageColors, 0 === Object.keys(null !== Kd && void 0 !== Kd ? Kd : {}).length ? null : dd.averageColors)),
            Xd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Kd;
          const hd = null !== (md = Od.textureOverrides) && void 0 !== md ? md : {},
            Qd = null !== (Wd = Od.modelOverrides) && void 0 !== Wd ? Wd : {},
            td = 0 === Object.keys(Qd).length ? {} : (0, Rd.refusedPackModels)((0, Rd.packDisplayName)(Od.metaData), Qd, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: od,
              rotatedBlockTextures: Nd
            } = dd,
            qd = dd => {
              var Od, md;
              return null !== (Od = null !== (md = od[dd]) && void 0 !== md ? md : Nd[dd]) && void 0 !== Od ? Od : null
            };
          return {
            terrain: {
              atlasSheets: dd.blockAtlasArr,
              texture: qd
            },
            sheetPixels: [...dd.blockAtlasPixels],
            heldUntil: Xd,
            sheetLayout: dd.imagesPerAtlas,
            sheetWidth: dd.blockAtlasWidth,
            armourAtlasUrl: dd.armourAtlas,
            texture: dd => {
              var Od, md;
              return null !== (Od = null !== (md = qd(dd)) && void 0 !== md ? md : (0, vd.e)(hd, dd)) && void 0 !== Od ? Od : null
            },
            model: dd => void 0 === td[dd] && Qd[dd] || null,
            averageColours: Fd
          }
        }(Jd, dd, wd, Ed)
      }(bd, null === dd.gameSource, md), Yd = {
        pack: dd.pack,
        maxLayerWidth: md,
        assets: pd
      };
      return Hd = Yd, pd.catch((() => {
        Hd === Yd && (Hd = null)
      })), pd
    }

    function Td(dd, Od, Wd, Fd) {
      const Rd = (0, vd.e)(dd, Wd);
      if (Rd) return Rd;
      try {
        return Od(Wd, Fd).url
      } catch {
        return md(4525)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);