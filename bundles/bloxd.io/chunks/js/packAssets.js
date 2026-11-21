export const id = 44;
export const ids = [44, 195];
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
  },
  61218: (dd, Jd, kd) => {
    kd.d(Jd, {
      packAssets: () => Rd
    });
    var pd = kd(3018),
      Nd = kd(3051),
      Wd = kd(9306),
      Pd = kd(3068),
      Zd = kd(3095);

    function gd(dd, Jd, kd, pd) {
      const Nd = `${(0,Pd.b)(dd,Jd)}|sheets${kd}`;
      return pd === Zd.b ? Nd : `${Nd}|layers${pd}`
    }
    var Cd = kd(3103),
      Kd = kd(3030),
      od = kd(3022),
      ld = kd(3073);
    var Qd = kd(43247);
    const Ld = 256;
    let Od = null,
      ed = null;

    function Rd(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zd.b;
      if ((null === (Jd = Od) || void 0 === Jd ? void 0 : Jd.pack) === dd.pack && Od.maxLayerWidth === kd) return Od.assets;
      const Rd = (0, Qd.d)(dd.pack, (0, Qd.h)(dd));
      if (null === Rd || !(0, Nd.f)(Rd)) return Promise.resolve(null);
      const Gd = async function(dd, Jd, kd) {
        var Qd;
        const Od = null !== (Qd = dd.textureOverrides) && void 0 !== Qd ? Qd : {},
          {
            id: Rd,
            version: Gd
          } = dd.metaData,
          vd = Jd && Rd !== pd.s.CUSTOM,
          xd = {};
        vd && (ed = xd);
        let qd, Bd, sd = vd ? await async function(dd, Jd, kd, pd) {
          const Nd = gd(dd, Jd, kd, Zd.b),
            Wd = gd(dd, Jd, kd, pd),
            Cd = await (0, Pd.f)((dd => dd === Nd || dd === Wd));
          return null !== Cd && (pd === Zd.b || Cd.blockAtlasWidth <= pd) ? Cd : null
        }(Rd, Gd, Ld, kd): null;
        if (null === sd) {
          const {
            blockMetadata: dd,
            getDefaultTexture: Jd,
            textureNameToIndex: Wd
          } = await (0, Nd.j)(), Zd = (0, Kd.e)(dd, ((dd, kd) => ({
            url: Id(Od, Jd, dd, "block" === kd ? od.f.BLOCK : od.f.ITEM)
          }))), Cd = await
          function(dd, Jd, kd, pd, Nd, Wd) {
            return (0, ld.b)((Pd => Pd.WasmTextureWorker.generateRequired(dd, Jd, kd, pd, Nd, Wd)))
          }(dd, Wd, Zd, Rd === pd.e, kd, Ld), Qd = Cd.assets;
          sd = {
            ...Qd,
            averageColors: {}
          }, qd = Cd.averageColors(), vd && (Bd = qd.then((async dd => {
            null !== dd && ed === xd && await
            function(dd, Jd, kd, pd, Nd) {
              return (0, Pd.h)(gd(dd, Jd, pd, Nd), kd)
            }(Rd, Gd, {
              ...Qd,
              averageColors: dd
            }, Ld, Cd.layerCap)
          })))
        }
        return function(dd, Jd) {
          var kd, pd;
          let Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Zd = dd.averageColors, 0 === Object.keys(null !== Zd && void 0 !== Zd ? Zd : {}).length ? null : dd.averageColors)),
            Pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Zd;
          const gd = null !== (kd = Jd.textureOverrides) && void 0 !== kd ? kd : {},
            Kd = null !== (pd = Jd.modelOverrides) && void 0 !== pd ? pd : {},
            od = 0 === Object.keys(Kd).length ? {} : (0, Wd.refusedPackModels)((0, Wd.packDisplayName)(Jd.metaData), Kd, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: ld,
              rotatedBlockTextures: Qd
            } = dd,
            Ld = dd => {
              var Jd, kd;
              return null !== (Jd = null !== (kd = ld[dd]) && void 0 !== kd ? kd : Qd[dd]) && void 0 !== Jd ? Jd : null
            };
          return {
            terrain: {
              atlasSheets: dd.blockAtlasArr,
              texture: Ld
            },
            sheetPixels: [...dd.blockAtlasPixels],
            heldUntil: Pd,
            sheetLayout: dd.imagesPerAtlas,
            sheetWidth: dd.blockAtlasWidth,
            armourAtlasUrl: dd.armourAtlas,
            texture: dd => {
              var Jd, kd;
              return null !== (Jd = null !== (kd = Ld(dd)) && void 0 !== kd ? kd : (0, Cd.d)(gd, dd)) && void 0 !== Jd ? Jd : null
            },
            model: dd => void 0 === od[dd] && Kd[dd] || null,
            averageColours: Nd
          }
        }(sd, dd, qd, Bd)
      }(Rd, null === dd.gameSource, kd), vd = {
        pack: dd.pack,
        maxLayerWidth: kd,
        assets: Gd
      };
      return Od = vd, Gd.catch((() => {
        Od === vd && (Od = null)
      })), Gd
    }

    function Id(dd, Jd, pd, Nd) {
      const Wd = (0, Cd.d)(dd, pd);
      if (Wd) return Wd;
      try {
        return Jd(pd, Nd).url
      } catch {
        return kd(3153)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);