export const id = 53;
export const ids = [53, 233];
export const modules = {
  35568: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      packDisplayName: () => tr,
      packModelMessage: () => hr,
      packModelSummary: () => Yr,
      refusedPackModels: () => zr
    });
    var Zr = Qr(35576),
      Wr = Qr(35580);
    const ar = "DRACO",
      jr = 0,
      Ir = 1,
      fr = 0,
      Er = 1,
      pr = 32768;

    function xr(rr) {
      const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
      let Qr = 0;
      const Zr = () => {
          if (Qr >= rr.byteLength) throw new RangeError("past the stream");
          return rr[Qr++]
        },
        Wr = () => {
          if (Qr + 4 > rr.byteLength) throw new RangeError("past the stream");
          const Zr = Sr.getUint32(Qr, !0);
          return Qr += 4, Zr
        },
        xr = () => {
          let rr = 0;
          for (let Sr = 0; Sr < 35; Sr += 7) {
            const Qr = Zr();
            if (rr += (127 & Qr) * 2 ** Sr, 0 === (128 & Qr)) return rr
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let rr = 0; rr < ar.length; rr++)
          if (Zr() !== ar.charCodeAt(rr)) return null;
        const Sr = Zr(),
          mr = Zr(),
          Nr = Zr(),
          Ur = Zr(),
          tr = Zr() | Zr() << 8;
        if (2 !== Sr) return null;
        0 !== (tr & pr) && function(rr, Sr, Qr) {
          const Zr = () => {
              Sr(Qr())
            },
            Wr = () => {
              let Qr = 1,
                Wr = !0;
              for (; Qr > 0;) {
                Qr--, Wr || Zr(), Wr = !1;
                const ar = rr();
                for (let Qr = 0; Qr < ar; Qr++) Zr(), Sr(rr());
                Qr += rr()
              }
            },
            ar = rr();
          for (let jr = 0; jr < ar; jr++) rr(), Wr();
          Wr()
        }(xr, (Sr => {
          if (Qr + Sr > rr.byteLength) throw new RangeError("past the stream");
          Qr += Sr
        }), Zr);
        const hr = mr < 2 ? Wr : xr;
        if (Nr === jr) return {
          faces: 0,
          vertices: Wr(),
          minor: mr
        };
        if (Nr !== Ir) return null;
        if (Ur === fr) {
          return {
            faces: hr(),
            vertices: hr(),
            minor: mr
          }
        }
        if (Ur !== Er) return null;
        Zr(), mr < 2 && xr();
        const zr = xr();
        return {
          faces: xr(),
          vertices: zr,
          minor: mr
        }
      } catch {
        return null
      }
    }

    function mr(rr, Sr, Qr) {
      var Zr, Wr;
      if (null === (Zr = null === (Wr = rr.extensionsUsed) || void 0 === Wr ? void 0 : Wr.includes("KHR_draco_mesh_compression")) || void 0 === Zr || !Zr) return null;
      for (const tr of null !== (ar = rr.meshes) && void 0 !== ar ? ar : []) {
        var ar;
        for (const Zr of tr.primitives) {
          var jr, Ir, fr, Er, pr, mr;
          const Wr = null === (jr = Zr.extensions) || void 0 === jr ? void 0 : jr.KHR_draco_mesh_compression;
          if ("object" !== typeof Wr || null === Wr) continue;
          const ar = null === (Ir = rr.bufferViews) || void 0 === Ir ? void 0 : Ir[Wr.bufferView];
          if (null === Sr || void 0 === ar) return Nr;
          const tr = null !== (fr = ar.byteOffset) && void 0 !== fr ? fr : 0,
            hr = xr(Sr.subarray(tr, tr + ar.byteLength));
          if (null === hr && !Qr) continue;
          const zr = null !== (Er = rr.accessors) && void 0 !== Er ? Er : [],
            Yr = null === (pr = zr[Zr.attributes.POSITION]) || void 0 === pr ? void 0 : pr.count,
            nr = void 0 === Zr.indices ? 0 : null === (mr = zr[Zr.indices]) || void 0 === mr ? void 0 : mr.count;
          if (null === hr || void 0 === Yr || void 0 === nr || 3 * hr.faces !== nr || hr.vertices > Yr) return Nr;
          if (Qr && hr.minor < 2) return Ur
        }
      }
      return null
    }
    const Nr = "has a Draco stream whose counts don't match its accessors",
      Ur = "has a Draco stream too old to decode: export it again";

    function tr(rr) {
      var Sr;
      return null !== (Sr = rr.name) && void 0 !== Sr ? Sr : rr.fromFolderName || rr.id
    }

    function hr(rr, Sr, Qr) {
      return `Texture pack "${rr}": model "${Sr}" was not loaded because it ${Qr}. The default model is used instead.`
    }

    function zr(rr, Sr, Qr) {
      let {
        strictDraco: ar = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const jr = {};
      for (const [Ir, fr] of Object.entries(Sr)) {
        let Sr;
        if (fr.startsWith("data:")) try {
          const rr = new Uint8Array((0, Wr.t)(fr));
          if (Sr = (0, Zr.e)(rr), null === Sr) {
            const {
              json: Qr,
              bin: Zr
            } = (0, Wr.z)(rr);
            Sr = mr(Qr, Zr, ar)
          }
        } catch {
          Sr = "is not a binary glTF 2.0 file"
        } else Sr = "loads data from outside the file";
        Sr && (jr[Ir] = Sr, Qr && console.warn(hr(rr, Ir, Sr)))
      }
      return jr
    }

    function Yr(rr, Sr) {
      const Qr = Object.keys(Sr);
      if (0 === Qr.length) return null;
      if (1 === Qr.length) return hr(rr, Qr[0], Sr[Qr[0]]);
      const Zr = Qr.map((rr => `"${rr}" ${Sr[rr]}`)).join("; ");
      return `Texture pack "${rr}": ${Qr.length} models were not loaded (${Zr}). The default models are used instead.`
    }
  },
  64836: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      packAssets: () => zr
    });
    var Zr = Qr(2325),
      Wr = Qr(2304),
      ar = Qr(35568),
      jr = Qr(4419),
      Ir = Qr(4448);

    function fr(rr, Sr, Qr, Zr) {
      const Wr = `${(0,jr.c)(rr,Sr)}|sheets${Qr}`;
      return Zr === Ir.c ? Wr : `${Wr}|layers${Zr}`
    }
    var Er = Qr(4452),
      pr = Qr(4392),
      xr = Qr(4377),
      mr = Qr(4421);
    var Nr = Qr(55173);
    const Ur = 256;
    let tr = null,
      hr = null;

    function zr(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ir.c;
      if ((null === (Sr = tr) || void 0 === Sr ? void 0 : Sr.pack) === rr.pack && tr.maxLayerWidth === Qr) return tr.assets;
      const zr = (0, Nr.f)(rr.pack, (0, Nr.j)(rr));
      if (null === zr || !(0, Wr.g)(zr)) return Promise.resolve(null);
      const nr = async function(rr, Sr, Qr) {
        var Nr;
        const tr = null !== (Nr = rr.textureOverrides) && void 0 !== Nr ? Nr : {},
          {
            id: zr,
            version: nr
          } = rr.metaData,
          er = Sr && zr !== Zr.o.CUSTOM,
          Kr = {};
        er && (hr = Kr);
        let yr, Br, Tr = er ? await async function(rr, Sr, Qr, Zr) {
          const Wr = fr(rr, Sr, Qr, Ir.c),
            ar = fr(rr, Sr, Qr, Zr),
            Er = await (0, jr.h)((rr => rr === Wr || rr === ar));
          return null !== Er && (Zr === Ir.c || Er.blockAtlasWidth <= Zr) ? Er : null
        }(zr, nr, Ur, Qr): null;
        if (null === Tr) {
          const {
            blockMetadata: rr,
            getDefaultTexture: Sr,
            textureNameToIndex: ar
          } = await (0, Wr.n)(), Ir = (0, pr.e)(rr, ((rr, Qr) => ({
            url: Yr(tr, Sr, rr, "block" === Qr ? xr.g.BLOCK : xr.g.ITEM)
          }))), Er = await
          function(rr, Sr, Qr, Zr, Wr, ar) {
            return (0, mr.d)((jr => jr.WasmTextureWorker.generateRequired(rr, Sr, Qr, Zr, Wr, ar)))
          }(rr, ar, Ir, zr === Zr.e, Qr, Ur), Nr = Er.assets;
          Tr = {
            ...Nr,
            averageColors: {}
          }, yr = Er.averageColors(), er && (Br = yr.then((async rr => {
            null !== rr && hr === Kr && await
            function(rr, Sr, Qr, Zr, Wr) {
              return (0, jr.n)(fr(rr, Sr, Zr, Wr), Qr)
            }(zr, nr, {
              ...Nr,
              averageColors: rr
            }, Ur, Er.layerCap)
          })))
        }
        return function(rr, Sr) {
          var Qr, Zr;
          let Wr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Ir = rr.averageColors, 0 === Object.keys(null !== Ir && void 0 !== Ir ? Ir : {}).length ? null : rr.averageColors)),
            jr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Ir;
          const fr = null !== (Qr = Sr.textureOverrides) && void 0 !== Qr ? Qr : {},
            pr = null !== (Zr = Sr.modelOverrides) && void 0 !== Zr ? Zr : {},
            xr = 0 === Object.keys(pr).length ? {} : (0, ar.refusedPackModels)((0, ar.packDisplayName)(Sr.metaData), pr, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: mr,
              rotatedBlockTextures: Nr
            } = rr,
            Ur = rr => {
              var Sr, Qr;
              return null !== (Sr = null !== (Qr = mr[rr]) && void 0 !== Qr ? Qr : Nr[rr]) && void 0 !== Sr ? Sr : null
            };
          return {
            terrain: {
              atlasSheets: rr.blockAtlasArr,
              texture: Ur
            },
            sheetPixels: [...rr.blockAtlasPixels],
            heldUntil: jr,
            sheetLayout: rr.imagesPerAtlas,
            sheetWidth: rr.blockAtlasWidth,
            armourAtlasUrl: rr.armourAtlas,
            texture: rr => {
              var Sr, Qr;
              return null !== (Sr = null !== (Qr = Ur(rr)) && void 0 !== Qr ? Qr : (0, Er.e)(fr, rr)) && void 0 !== Sr ? Sr : null
            },
            model: rr => void 0 === xr[rr] && pr[rr] || null,
            averageColours: Wr
          }
        }(Tr, rr, yr, Br)
      }(zr, null === rr.gameSource, Qr), er = {
        pack: rr.pack,
        maxLayerWidth: Qr,
        assets: nr
      };
      return tr = er, nr.catch((() => {
        tr === er && (tr = null)
      })), nr
    }

    function Yr(rr, Sr, Zr, Wr) {
      const ar = (0, Er.e)(rr, Zr);
      if (ar) return ar;
      try {
        return Sr(Zr, Wr).url
      } catch {
        return Qr(4512)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);