export const id = 44;
export const ids = [44, 202];
export const modules = {
  34348: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      packDisplayName: () => Om,
      packModelMessage: () => Ym,
      packModelSummary: () => jm,
      refusedPackModels: () => qm
    });
    var hm = fm(34357),
      Am = fm(34363);
    const am = "DRACO",
      xm = 0,
      wm = 1,
      Dm = 0,
      im = 1,
      Rm = 32768;

    function pm(mm) {
      const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      let fm = 0;
      const hm = () => {
          if (fm >= mm.byteLength) throw new RangeError("past the stream");
          return mm[fm++]
        },
        Am = () => {
          if (fm + 4 > mm.byteLength) throw new RangeError("past the stream");
          const hm = Tm.getUint32(fm, !0);
          return fm += 4, hm
        },
        pm = () => {
          let mm = 0;
          for (let Tm = 0; Tm < 35; Tm += 7) {
            const fm = hm();
            if (mm += (127 & fm) * 2 ** Tm, 0 === (128 & fm)) return mm
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let mm = 0; mm < am.length; mm++)
          if (hm() !== am.charCodeAt(mm)) return null;
        const Tm = hm(),
          Em = hm(),
          om = hm(),
          Om = hm(),
          Ym = hm() | hm() << 8;
        if (2 !== Tm) return null;
        0 !== (Ym & Rm) && function(mm, Tm, fm) {
          const hm = () => {
              Tm(fm())
            },
            Am = () => {
              let fm = 1,
                Am = !0;
              for (; fm > 0;) {
                fm--, Am || hm(), Am = !1;
                const am = mm();
                for (let fm = 0; fm < am; fm++) hm(), Tm(mm());
                fm += mm()
              }
            },
            am = mm();
          for (let xm = 0; xm < am; xm++) mm(), Am();
          Am()
        }(pm, (Tm => {
          if (fm + Tm > mm.byteLength) throw new RangeError("past the stream");
          fm += Tm
        }), hm);
        const qm = Em < 2 ? Am : pm;
        if (om === xm) return {
          faces: 0,
          vertices: Am()
        };
        if (om !== wm) return null;
        if (Om === Dm) {
          return {
            faces: qm(),
            vertices: qm()
          }
        }
        if (Om !== im) return null;
        hm(), Em < 2 && pm();
        const jm = pm();
        return {
          faces: pm(),
          vertices: jm
        }
      } catch {
        return null
      }
    }

    function Em(mm, Tm, fm) {
      var hm, Am;
      if (null === (hm = null === (Am = mm.extensionsUsed) || void 0 === Am ? void 0 : Am.includes("KHR_draco_mesh_compression")) || void 0 === hm || !hm) return null;
      for (const Om of null !== (am = mm.meshes) && void 0 !== am ? am : []) {
        var am;
        for (const hm of Om.primitives) {
          var xm, wm, Dm, im, Rm, Em;
          const Am = null === (xm = hm.extensions) || void 0 === xm ? void 0 : xm.KHR_draco_mesh_compression;
          if ("object" !== typeof Am || null === Am) continue;
          const am = null === (wm = mm.bufferViews) || void 0 === wm ? void 0 : wm[Am.bufferView];
          if (null === Tm || void 0 === am) return om;
          const Om = null !== (Dm = am.byteOffset) && void 0 !== Dm ? Dm : 0,
            Ym = pm(Tm.subarray(Om, Om + am.byteLength));
          if (null === Ym && !fm) continue;
          const qm = null !== (im = mm.accessors) && void 0 !== im ? im : [],
            jm = null === (Rm = qm[hm.attributes.POSITION]) || void 0 === Rm ? void 0 : Rm.count,
            Vm = void 0 === hm.indices ? 0 : null === (Em = qm[hm.indices]) || void 0 === Em ? void 0 : Em.count;
          if (null === Ym || void 0 === jm || void 0 === Vm || 3 * Ym.faces !== Vm || Ym.vertices > jm) return om
        }
      }
      return null
    }
    const om = "has a Draco stream whose counts don't match its accessors";

    function Om(mm) {
      var Tm;
      return null !== (Tm = mm.name) && void 0 !== Tm ? Tm : mm.fromFolderName || mm.id
    }

    function Ym(mm, Tm, fm) {
      return `Texture pack "${mm}": model "${Tm}" was not loaded because it ${fm}. The default model is used instead.`
    }

    function qm(mm, Tm, fm) {
      let {
        strictDraco: am = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xm = {};
      for (const [wm, Dm] of Object.entries(Tm)) {
        let Tm;
        if (Dm.startsWith("data:")) try {
          const mm = new Uint8Array((0, Am.r)(Dm));
          if (Tm = (0, hm.c)(mm), null === Tm) {
            const {
              json: fm,
              bin: hm
            } = (0, Am.w)(mm);
            Tm = Em(fm, hm, am)
          }
        } catch {
          Tm = "is not a binary glTF 2.0 file"
        } else Tm = "loads data from outside the file";
        Tm && (xm[wm] = Tm, fm && console.warn(Ym(mm, wm, Tm)))
      }
      return xm
    }

    function jm(mm, Tm) {
      const fm = Object.keys(Tm);
      if (0 === fm.length) return null;
      if (1 === fm.length) return Ym(mm, fm[0], Tm[fm[0]]);
      const hm = fm.map((mm => `"${mm}" ${Tm[mm]}`)).join("; ");
      return `Texture pack "${mm}": ${fm.length} models were not loaded (${hm}). The default models are used instead.`
    }
  },
  61569: (mm, Tm, fm) => {
    fm.d(Tm, {
      packAssets: () => jm
    });
    var hm = fm(2123),
      Am = fm(2114),
      am = fm(34348),
      xm = fm(3201),
      wm = fm(3238);

    function Dm(mm, Tm, fm, hm) {
      const Am = `${(0,xm.b)(mm,Tm)}|sheets${fm}`;
      return hm === wm.b ? Am : `${Am}|layers${hm}`
    }
    var im = fm(3242),
      Rm = fm(3173),
      pm = fm(3162),
      Em = fm(3210);
    var om = fm(50992);
    const Om = 256;
    let Ym = null,
      qm = null;

    function jm(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wm.b;
      if ((null === (Tm = Ym) || void 0 === Tm ? void 0 : Tm.pack) === mm.pack && Ym.maxLayerWidth === fm) return Ym.assets;
      const jm = (0, om.g)(mm.pack, (0, om.l)(mm));
      if (null === jm || !(0, Am.f)(jm)) return Promise.resolve(null);
      const Im = async function(mm, Tm, fm) {
        var om;
        const Ym = null !== (om = mm.textureOverrides) && void 0 !== om ? om : {},
          {
            id: jm,
            version: Im
          } = mm.metaData,
          Km = Tm && jm !== hm.l.CUSTOM,
          Qm = {};
        Km && (qm = Qm);
        let nm, Jm, cm = Km ? await async function(mm, Tm, fm, hm) {
          const Am = Dm(mm, Tm, fm, wm.b),
            am = Dm(mm, Tm, fm, hm),
            im = await (0, xm.h)((mm => mm === Am || mm === am));
          return null !== im && (hm === wm.b || im.blockAtlasWidth <= hm) ? im : null
        }(jm, Im, Om, fm): null;
        if (null === cm) {
          const {
            blockMetadata: mm,
            getDefaultTexture: Tm,
            textureNameToIndex: am
          } = await (0, Am.i)(), wm = (0, Rm.c)(mm, ((mm, fm) => ({
            url: Vm(Ym, Tm, mm, "block" === fm ? pm.f.BLOCK : pm.f.ITEM)
          }))), im = await
          function(mm, Tm, fm, hm, Am, am) {
            return (0, Em.b)((xm => xm.WasmTextureWorker.generateRequired(mm, Tm, fm, hm, Am, am)))
          }(mm, am, wm, jm === hm.c, fm, Om), om = im.assets;
          cm = {
            ...om,
            averageColors: {}
          }, nm = im.averageColors(), Km && (Jm = nm.then((async mm => {
            null !== mm && qm === Qm && await
            function(mm, Tm, fm, hm, Am) {
              return (0, xm.l)(Dm(mm, Tm, hm, Am), fm)
            }(jm, Im, {
              ...om,
              averageColors: mm
            }, Om, im.layerCap)
          })))
        }
        return function(mm, Tm) {
          var fm, hm;
          let Am = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((wm = mm.averageColors, 0 === Object.keys(null !== wm && void 0 !== wm ? wm : {}).length ? null : mm.averageColors)),
            xm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var wm;
          const Dm = null !== (fm = Tm.textureOverrides) && void 0 !== fm ? fm : {},
            Rm = null !== (hm = Tm.modelOverrides) && void 0 !== hm ? hm : {},
            pm = 0 === Object.keys(Rm).length ? {} : (0, am.refusedPackModels)((0, am.packDisplayName)(Tm.metaData), Rm, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Em,
              rotatedBlockTextures: om
            } = mm,
            Om = mm => {
              var Tm, fm;
              return null !== (Tm = null !== (fm = Em[mm]) && void 0 !== fm ? fm : om[mm]) && void 0 !== Tm ? Tm : null
            };
          return {
            terrain: {
              atlasSheets: mm.blockAtlasArr,
              texture: Om
            },
            sheetPixels: [...mm.blockAtlasPixels],
            heldUntil: xm,
            sheetLayout: mm.imagesPerAtlas,
            sheetWidth: mm.blockAtlasWidth,
            armourAtlasUrl: mm.armourAtlas,
            texture: mm => {
              var Tm, fm;
              return null !== (Tm = null !== (fm = Om(mm)) && void 0 !== fm ? fm : (0, im.c)(Dm, mm)) && void 0 !== Tm ? Tm : null
            },
            model: mm => void 0 === pm[mm] && Rm[mm] || null,
            averageColours: Am
          }
        }(cm, mm, nm, Jm)
      }(jm, null === mm.gameSource, fm), Km = {
        pack: mm.pack,
        maxLayerWidth: fm,
        assets: Im
      };
      return Ym = Km, Im.catch((() => {
        Ym === Km && (Ym = null)
      })), Im
    }

    function Vm(mm, Tm, hm, Am) {
      const am = (0, im.c)(mm, hm);
      if (am) return am;
      try {
        return Tm(hm, Am).url
      } catch {
        return fm(3326)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);