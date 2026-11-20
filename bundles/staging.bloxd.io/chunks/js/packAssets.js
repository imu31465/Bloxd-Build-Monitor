export const id = 44;
export const ids = [44, 194];
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
  },
  60916: (vv, zv, Pv) => {
    Pv.d(zv, {
      packAssets: () => iv
    });
    var hv = Pv(2944),
      Sv = Pv(2972),
      ev = Pv(9074),
      gv = Pv(2987),
      pv = Pv(3013);

    function dv(vv, zv, Pv, hv) {
      const Sv = `${(0,gv.d)(vv,zv)}|sheets${Pv}`;
      return hv === pv.d ? Sv : `${Sv}|layers${hv}`
    }
    var Nv = Pv(3019),
      lv = Pv(2960),
      Tv = Pv(2950),
      Wv = Pv(2992);
    var wv = Pv(42716);
    const av = 256;
    let sv = null,
      Cv = null;

    function iv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pv.d;
      if ((null === (zv = sv) || void 0 === zv ? void 0 : zv.pack) === vv.pack && sv.maxLayerWidth === Pv) return sv.assets;
      const iv = (0, wv.h)(vv.pack, (0, wv.m)(vv));
      if (null === iv || !(0, Sv.g)(iv)) return Promise.resolve(null);
      const Gv = async function(vv, zv, Pv) {
        var wv;
        const sv = null !== (wv = vv.textureOverrides) && void 0 !== wv ? wv : {},
          {
            id: iv,
            version: Gv
          } = vv.metaData,
          mv = zv && iv !== hv.j.CUSTOM,
          jv = {};
        mv && (Cv = jv);
        let fv, Fv, Yv = mv ? await async function(vv, zv, Pv, hv) {
          const Sv = dv(vv, zv, Pv, pv.d),
            ev = dv(vv, zv, Pv, hv),
            Nv = await (0, gv.l)((vv => vv === Sv || vv === ev));
          return null !== Nv && (hv === pv.d || Nv.blockAtlasWidth <= hv) ? Nv : null
        }(iv, Gv, av, Pv): null;
        if (null === Yv) {
          const {
            blockMetadata: vv,
            getDefaultTexture: zv,
            textureNameToIndex: ev
          } = await (0, Sv.l)(), pv = (0, lv.e)(vv, ((vv, Pv) => ({
            url: cv(sv, zv, vv, "block" === Pv ? Tv.d.BLOCK : Tv.d.ITEM)
          }))), Nv = await
          function(vv, zv, Pv, hv, Sv, ev) {
            return (0, Wv.d)((gv => gv.WasmTextureWorker.generateRequired(vv, zv, Pv, hv, Sv, ev)))
          }(vv, ev, pv, iv === hv.b, Pv, av), wv = Nv.assets;
          Yv = {
            ...wv,
            averageColors: {}
          }, fv = Nv.averageColors(), mv && (Fv = fv.then((async vv => {
            null !== vv && Cv === jv && await
            function(vv, zv, Pv, hv, Sv) {
              return (0, gv.q)(dv(vv, zv, hv, Sv), Pv)
            }(iv, Gv, {
              ...wv,
              averageColors: vv
            }, av, Nv.layerCap)
          })))
        }
        return function(vv, zv) {
          var Pv, hv;
          let Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((pv = vv.averageColors, 0 === Object.keys(null !== pv && void 0 !== pv ? pv : {}).length ? null : vv.averageColors)),
            gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var pv;
          const dv = null !== (Pv = zv.textureOverrides) && void 0 !== Pv ? Pv : {},
            lv = null !== (hv = zv.modelOverrides) && void 0 !== hv ? hv : {},
            Tv = 0 === Object.keys(lv).length ? {} : (0, ev.refusedPackModels)((0, ev.packDisplayName)(zv.metaData), lv, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Wv,
              rotatedBlockTextures: wv
            } = vv,
            av = vv => {
              var zv, Pv;
              return null !== (zv = null !== (Pv = Wv[vv]) && void 0 !== Pv ? Pv : wv[vv]) && void 0 !== zv ? zv : null
            };
          return {
            terrain: {
              atlasSheets: vv.blockAtlasArr,
              texture: av
            },
            sheetPixels: [...vv.blockAtlasPixels],
            heldUntil: gv,
            sheetLayout: vv.imagesPerAtlas,
            sheetWidth: vv.blockAtlasWidth,
            armourAtlasUrl: vv.armourAtlas,
            texture: vv => {
              var zv, Pv;
              return null !== (zv = null !== (Pv = av(vv)) && void 0 !== Pv ? Pv : (0, Nv.d)(dv, vv)) && void 0 !== zv ? zv : null
            },
            model: vv => void 0 === Tv[vv] && lv[vv] || null,
            averageColours: Sv
          }
        }(Yv, vv, fv, Fv)
      }(iv, null === vv.gameSource, Pv), mv = {
        pack: vv.pack,
        maxLayerWidth: Pv,
        assets: Gv
      };
      return sv = mv, Gv.catch((() => {
        sv === mv && (sv = null)
      })), Gv
    }

    function cv(vv, zv, hv, Sv) {
      const ev = (0, Nv.d)(vv, hv);
      if (ev) return ev;
      try {
        return zv(hv, Sv).url
      } catch {
        return Pv(3050)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);