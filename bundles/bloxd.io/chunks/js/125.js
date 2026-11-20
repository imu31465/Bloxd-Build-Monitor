export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6315: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(6319),
      Sv = Pv(1082);
    const ev = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function gv(vv) {
      let {
        diagnostics: zv,
        more: Pv = 0,
        t: gv
      } = vv;
      return (0, Sv.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [zv.map(((vv, zv) => {
          const Pv = (0, hv.g)(vv),
            pv = function(vv, zv) {
              const Pv = (0, hv.e)(null !== vv && void 0 !== vv ? vv : []);
              if (0 === Pv.length) return null;
              return Pv.map((vv => vv.map((vv => zv(ev[vv]))).join(", "))).join("; ")
            }(vv.variants, gv);
          return (0, Sv.jsxs)("li", {
            children: [Pv && (0, Sv.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Pv
            }), vv.message, pv && (0, Sv.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: gv("shaderPack:onlyIn", {
                variants: pv
              })
            })]
          }, zv)
        })), Pv > 0 && (0, Sv.jsx)("li", {
          children: gv("shaderPack:moreErrors", {
            count: String(Pv)
          })
        })]
      })
    }
  },
  6335: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Mv,
      f: () => yv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(4698),
      pv = Pv(1327),
      dv = Pv(1042),
      Nv = Pv(1442),
      lv = Pv(1175),
      Tv = Pv(73),
      Wv = Pv(6306),
      wv = Pv(6328);
    class av extends Error {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(vv, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = vv, this.params = zv
      }
    }
    const sv = 1024,
      Cv = 101010256,
      iv = 33639248,
      cv = 67324752,
      Gv = 22,
      mv = 46,
      jv = 30,
      fv = 65535,
      Fv = 65535,
      Yv = 4294967295,
      nv = 0,
      Ov = 8,
      Dv = new TextDecoder;

    function Kv(vv) {
      const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength),
        Pv = function(vv) {
          const zv = vv.byteLength - Gv;
          for (let Pv = zv; Pv >= Math.max(0, zv - fv); Pv--)
            if (vv.getUint32(Pv, !0) === Cv && Pv + Gv + vv.getUint16(Pv + 20, !0) <= vv.byteLength) return Pv;
          throw new av("shaderPack:loadNotZip")
        }(zv),
        hv = zv.getUint16(Pv + 8, !0),
        Sv = zv.getUint16(Pv + 10, !0),
        ev = zv.getUint32(Pv + 12, !0),
        gv = zv.getUint32(Pv + 16, !0);
      if (Sv === Fv || ev === Yv || gv === Yv) throw xv();
      if (0 !== zv.getUint16(Pv + 4, !0) || 0 !== zv.getUint16(Pv + 6, !0) || hv !== Sv) throw new av("shaderPack:loadSplitZip");
      if (Sv > sv) throw new av("shaderPack:loadTooManyZipEntries", {
        count: String(sv)
      });
      const pv = gv + ev;
      if (pv > Pv) throw Rv();
      const dv = [];
      let Nv = gv;
      for (let lv = 0; lv < Sv; lv++) {
        if (Nv + mv > pv || zv.getUint32(Nv, !0) !== iv) throw Rv();
        const Pv = zv.getUint16(Nv + 8, !0),
          hv = zv.getUint16(Nv + 10, !0),
          Sv = zv.getUint32(Nv + 20, !0),
          ev = zv.getUint32(Nv + 24, !0),
          lv = zv.getUint16(Nv + 28, !0),
          Tv = zv.getUint16(Nv + 30, !0),
          Wv = zv.getUint16(Nv + 32, !0),
          wv = zv.getUint32(Nv + 42, !0),
          av = Nv + mv;
        if (Nv = av + lv + Tv + Wv, Nv > pv) throw Rv();
        if (Sv === Yv || ev === Yv || wv === Yv) throw xv();
        const sv = Dv.decode(vv.subarray(av, av + lv)).replace(/\\/g, "/");
        sv.endsWith("/") || dv.push({
          path: sv,
          method: hv,
          encrypted: 0 !== (1 & Pv),
          compressedSize: Sv,
          dataOffset: Uv(zv, wv, Sv, gv)
        })
      }
      return dv
    }
    async function Vv(vv, zv, Pv) {
      if (zv.encrypted) throw new av("shaderPack:loadEncrypted", {
        path: zv.path
      });
      if (zv.method === nv) return zv.compressedSize > Pv ? null : vv.subarray(zv.dataOffset, zv.dataOffset + zv.compressedSize);
      if (zv.method === Ov) return async function(vv, zv, Pv) {
        const hv = new Blob([vv]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Sv = [];
        let ev = 0;
        try {
          for (;;) {
            const {
              done: vv,
              value: Pv
            } = await hv.read();
            if (vv) break;
            if (ev += Pv.byteLength, ev > zv) return await hv.cancel(), null;
            Sv.push(Pv)
          }
        } catch (dv) {
          throw new av("shaderPack:loadDecompressFailed", {
            path: Pv
          }, {
            cause: dv
          })
        }
        const gv = new Uint8Array(ev);
        let pv = 0;
        for (const Nv of Sv) gv.set(Nv, pv), pv += Nv.byteLength;
        return gv
      }(vv.slice(zv.dataOffset, zv.dataOffset + zv.compressedSize), Pv, zv.path);
      throw new av("shaderPack:loadUnsupportedCompression", {
        path: zv.path,
        method: String(zv.method)
      })
    }

    function Uv(vv, zv, Pv, hv) {
      if (zv + jv > hv || vv.getUint32(zv, !0) !== cv) throw Rv();
      const Sv = zv + jv + vv.getUint16(zv + 26, !0) + vv.getUint16(zv + 28, !0);
      if (Sv + Pv > hv) throw Rv();
      return Sv
    }

    function Rv() {
      return new av("shaderPack:loadZipDamaged")
    }

    function xv() {
      return new av("shaderPack:loadZip64")
    }
    const tv = 33554432,
      qv = 65536;
    async function Iv(vv) {
      if (1 === vv.length && vv[0].name.toLowerCase().endsWith(".zip")) {
        const zv = vv[0];
        if (zv.size > tv) throw new av("shaderPack:loadZipTooBig", {
          megabytes: String(tv / 1048576)
        });
        return async function(vv) {
          return Qv(Kv(vv).map((zv => ({
            path: zv.path,
            read: Pv => Vv(vv, zv, Pv)
          }))))
        }(new Uint8Array(await zv.arrayBuffer()))
      }
      return Qv(vv.map((vv => ({
        path: Zv(vv),
        read: zv => async function(vv, zv) {
          return vv.size > zv ? null : new Uint8Array(await vv.arrayBuffer())
        }(vv, zv)
      }))))
    }
    async function Qv(vv) {
      const zv = function(vv) {
          const zv = vv.length > 0 ? vv[0].path.indexOf("/") : -1;
          if (-1 === zv) return vv;
          const Pv = vv[0].path.slice(0, zv + 1);
          if (!vv.every((vv => vv.path.startsWith(Pv)))) return vv;
          return vv.map((vv => ({
            ...vv,
            path: vv.path.slice(Pv.length)
          })))
        }(vv.filter((vv => ! function(vv) {
          const zv = vv.split("/"),
            Pv = zv[zv.length - 1];
          return zv.includes("__MACOSX") || Pv.startsWith("._") || ".DS_Store" === Pv
        }(vv.path)))),
        Pv = zv.filter((vv => "pack.json" === vv.path.toLowerCase()));
      if (0 === Pv.length) throw new av("shaderPack:loadNoManifest");
      if (Pv.length > 1) throw new av("shaderPack:loadDuplicateManifest");
      const hv = Pv[0],
        Sv = await hv.read(qv);
      if (null === Sv) throw new av("shaderPack:loadManifestTooBig", {
        kilobytes: String(qv / 1024)
      });
      const ev = function(vv) {
          let zv;
          try {
            zv = JSON.parse(vv)
          } catch (pv) {
            throw new av("shaderPack:loadManifestNotJson", {
              error: pv.message
            }, {
              cause: pv
            })
          }
          if ("object" !== typeof zv || null === zv || Array.isArray(zv)) throw new av("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Pv,
            name: hv,
            author: Sv,
            description: ev,
            keepCircleShadows: gv
          } = zv;
          if (void 0 === Pv) throw new av("shaderPack:loadNoApiVersion", {
            version: String(wv.d)
          });
          if (!(0, wv.i)(Pv)) throw new av("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Pv),
            version: String(wv.d)
          });
          if ("string" !== typeof hv || "" === hv.trim()) throw new av("shaderPack:loadNoName");
          if (void 0 !== Sv && null !== Sv && "string" !== typeof Sv) throw new av("shaderPack:loadAuthorNotString");
          if (void 0 !== ev && null !== ev && "string" !== typeof ev) throw new av("shaderPack:loadDescriptionNotString");
          if (void 0 !== gv && "boolean" !== typeof gv) throw new av("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Pv,
            name: hv,
            author: "string" === typeof Sv ? Sv : null,
            description: "string" === typeof ev && "" !== ev.trim() ? ev : null,
            keepCircleShadows: !0 === gv
          }
        }(Av(Sv, hv.path)),
        gv = zv.filter((vv => vv.path.toLowerCase().endsWith(".wgsl"))).sort(((vv, zv) => (0, Wv.q)(vv.path, zv.path)));
      if (0 === gv.length) throw new av("shaderPack:loadNoWgsl");
      if (gv.length > Wv.e) throw new av("shaderPack:loadTooManyWgsl", {
        count: String(Wv.e)
      });
      const pv = gv.find(((vv, zv) => zv > 0 && vv.path === gv[zv - 1].path));
      if (pv) throw new av("shaderPack:loadDuplicatePath", {
        path: pv.path
      });
      const dv = [];
      let Nv = Wv.f;
      for (const lv of gv) {
        const vv = await lv.read(Nv);
        if (null === vv) throw new av("shaderPack:loadSourceTooBig", {
          kilobytes: String(Wv.f / 1024)
        });
        Nv -= vv.byteLength, dv.push({
          path: lv.path,
          source: Av(vv, lv.path)
        })
      }
      return {
        manifest: ev,
        files: dv
      }
    }

    function Zv(vv) {
      return (vv.webkitRelativePath || vv.path || vv.name).replace(/^\.?\//, "")
    }

    function Av(vv, zv) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(vv)
      } catch (Pv) {
        throw new av("shaderPack:loadNotUtf8", {
          path: zv
        }, {
          cause: Pv
        })
      }
    }
    var Lv = Pv(6319),
      Hv = Pv(1082);

    function Mv(vv) {
      let {
        busy: zv,
        disabled: Pv,
        onFiles: Sv
      } = vv;
      const {
        t: Wv
      } = (0, lv.x)(), wv = (0, hv.useRef)(null), av = !(0, Tv.isMobile)(), {
        getRootProps: sv,
        getInputProps: Cv,
        isDragActive: iv,
        open: cv
      } = (0, gv.d)({
        onDrop: Sv,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Pv
      });
      return (0, Hv.jsxs)("div", {
        ...sv({
          className: ev()("ShaderPackDropZone", {
            ActiveDrag: iv,
            Disabled: Pv
          })
        }),
        children: [(0, Hv.jsx)("input", {
          ...Cv({
            webkitdirectory: "true"
          })
        }), (0, Hv.jsx)("input", {
          ref: wv,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(vv) {
            const zv = Array.from(vv.target.files);
            vv.target.value = "", Sv(zv)
          }
        }), zv && (0, Hv.jsx)(pv.c, {}), !zv && (0, Hv.jsxs)(Hv.Fragment, {
          children: [(0, Hv.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Hv.jsx)(dv.b, {
              name: "up-from-bracket"
            })
          }), (0, Hv.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Wv(av ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Hv.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [av && (0, Hv.jsx)(Nv.d, {
              disabled: Pv,
              onClick: cv,
              children: Wv("shaderPack:chooseFolder")
            }), (0, Hv.jsx)(Nv.d, {
              disabled: Pv,
              onClick: () => {
                wv.current.click()
              },
              children: Wv("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function yv(vv) {
      const {
        t: zv
      } = (0, lv.x)(), [Pv, Sv] = (0, hv.useState)(!1), [ev, gv] = (0, hv.useState)(null), pv = (0, hv.useRef)(!1);
      return {
        loading: Pv,
        error: ev,
        setError: gv,
        onFiles: async function(Pv) {
          if (!pv.current) {
            pv.current = !0, Sv(!0), gv(null);
            try {
              await vv(await Iv(Pv))
            } catch (hv) {
              hv instanceof av ? gv((0, Lv.i)(zv, hv.translationKey, hv.params)) : (console.error("Failed to load the shader pack", hv), gv(zv("shaderPack:unexpectedError")))
            } finally {
              pv.current = !1, Sv(!1)
            }
          }
        }
      }
    }
  },
  6319: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      g: () => gv,
      i: () => ev
    });
    var hv = Pv(6328);
    const Sv = [vv => vv.strict ? "strict" : "nonStrict", vv => vv.program];

    function ev(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hv = {};
      for (const Sv in Pv) hv[Sv] = `\0${Sv}\0`;
      return vv(zv, hv).replace(/\0(\w+)\0/g, ((vv, zv) => Pv[zv]))
    }

    function gv(vv) {
      return null === vv.file ? null : vv.line > 0 ? `${vv.file}:${vv.line}` : vv.file
    }

    function pv(vv) {
      const zv = new Map(vv.map((vv => [dv(vv).join("."), vv])));
      if (0 === zv.size) return [];
      const Pv = lv([...zv.values()]);
      return 0 === Pv[0].length ? [] : Pv
    }

    function dv(vv) {
      return Sv.map((zv => zv(vv)))
    }
    const Nv = Sv.map((vv => new Set(hv.g.map(vv)).size));

    function lv(vv) {
      const zv = Sv.map((zv => new Set(vv.map(zv)))),
        Pv = zv.reduce(((vv, zv) => vv * zv.size), 1),
        hv = zv.every(((vv, zv) => 1 === vv.size || vv.size === Nv[zv]));
      if (Pv === vv.length && hv) return [Sv.filter(((vv, Pv) => 1 === zv[Pv].size)).map((zv => zv(vv[0])))];
      let ev = null;
      for (let gv = 0; gv < Sv.length; gv++) {
        if (1 === zv[gv].size) continue;
        const Pv = Tv(vv, Sv[gv]).flatMap(lv);
        (null === ev || Pv.length < ev.length) && (ev = Pv)
      }
      return ev
    }

    function Tv(vv, zv) {
      const Pv = new Map;
      for (const Sv of vv) {
        var hv;
        const vv = zv(Sv);
        Pv.set(vv, [...null !== (hv = Pv.get(vv)) && void 0 !== hv ? hv : [], Sv])
      }
      return [...Pv.values()]
    }
  },
  6328: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.j,
      g: () => Sv,
      i: () => hv.r
    });
    var hv = Pv(6306);
    const Sv = [!1, !0].flatMap((vv => ["terrain", "liquid", "model"].map((zv => ({
      strict: vv,
      program: zv
    })))))
  },
  6369: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      forgetShaderPackActiveHint: () => Kv,
      isOtherApiVersion: () => Yv,
      isShaderPackActive: () => mv,
      isShaderPackChangePending: () => Fv,
      markShaderPackChangePending: () => fv,
      pageShaderPackValidationVersion: () => nv,
      reconcileStoredShaderPackHint: () => Dv,
      removeShaderPack: () => Gv,
      replaceShaderPack: () => Cv,
      saveShaderPack: () => sv,
      shaderPackNeedsCheck: () => Ov,
      storedPackOutcome: () => jv,
      storedShaderPackFiles: () => Wv,
      toStoredShaderPack: () => Tv
    });
    var hv = Pv(6306),
      Sv = Pv(6328),
      ev = Pv(39),
      gv = Pv(3201),
      pv = Pv(6377),
      dv = Pv(6351);
    const Nv = "shaderPackChangePending";
    let lv = null;

    function Tv(vv, zv, Pv) {
      return {
        manifest: vv.manifest,
        files: (0, hv.u)(vv.files),
        validation: zv,
        ...Pv && {
          listing: Pv
        }
      }
    }

    function Wv(vv) {
      return Object.keys(vv.files).map((zv => ({
        path: zv,
        source: vv.files[zv]
      })))
    }
    let wv = Promise.resolve();

    function av(vv) {
      const zv = wv.then(vv);
      return wv = zv.catch((() => {})), zv
    }

    function sv(vv, zv) {
      return av((() => iv(vv, zv)))
    }

    function Cv(vv, zv, Pv) {
      return av((async () => JSON.stringify(await (0, pv.g)()) === JSON.stringify(vv) && (null === zv ? (await cv(), !0) : iv(zv, Pv))))
    }
    async function iv(vv, zv) {
      const Pv = await ev.f.setItem(pv.c, vv);
      return Pv && Vv(vv, zv), Pv
    }
    async function cv() {
      await ev.f.removeItem(pv.c), ev.h.removeItem(gv.b)
    }

    function Gv() {
      return av(cv)
    }

    function mv(vv, zv) {
      return "active" === jv(vv, zv).kind
    }

    function jv(vv, zv) {
      var Pv;
      return null === vv ? {
        kind: "none",
        reason: "nothingStored"
      } : Yv(vv) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) || vv.validation.fromRecheck ? null === zv ? {
        kind: "none",
        reason: "noCompiler"
      } : Ov(vv, zv) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : vv.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function fv() {
      ev.l.setItem(Nv, performance.timeOrigin)
    }

    function Fv() {
      return ev.l.getItem(Nv) === performance.timeOrigin
    }

    function Yv(vv) {
      return !(0, Sv.i)(vv.manifest.apiVersion)
    }

    function nv(vv) {
      return lv ??= vv.RD((0, dv.shaderPackTextures)()), lv
    }

    function Ov(vv, zv) {
      var Pv;
      return (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.headerVersion) !== nv(zv)
    }

    function Dv(vv) {
      return av((async () => {
        Vv(await (0, pv.g)(!0), vv)
      }))
    }

    function Kv() {
      return av((async () => {
        ev.h.removeItem(gv.b)
      }))
    }

    function Vv(vv, zv) {
      mv(vv, zv) ? ev.h.setItem(gv.b, !0) : ev.h.removeItem(gv.b)
    }
  },
  6351: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      loadShaderPackTextures: () => gv,
      shaderPackTextures: () => pv
    });
    var hv = Pv(6306);
    let Sv = null,
      ev = null;

    function gv() {
      return ev ??= Promise.all([Pv.e(70), Pv.e(198)]).then((() => Pv(39807))).then((vv => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zv,
          textureNameToIndex: Pv,
          textureAnimationData: ev
        } = vv;
        return Sv ??= (0, hv.n)(Pv, ev, zv), Sv
      })), ev
    }

    function pv() {
      if (null === Sv) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Sv
    }
  },
  6367: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      e: () => pv
    });
    var hv = Pv(6369),
      Sv = Pv(6351),
      ev = Pv(90);
    const gv = 100;
    async function pv(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Pv = navigator.gpu) && void 0 !== Pv ? Pv : null;
      const gv = vv.L_(zv, (0, Sv.shaderPackTextures)());
      if (gv.errors.length > 0) return Nv(vv, gv.errors, gv.offInStrict);
      const pv = await async function(vv) {
        if (!vv) return null;
        try {
          const zv = await (0, ev.m)(vv);
          return zv ? await zv.requestDevice() : null
        } catch (zv) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zv), null
        }
      }(hv);
      if (!pv) return null;
      let dv = !1;
      pv.lost.then((() => {
        dv = !0
      }));
      try {
        const zv = await Promise.all(gv.validationModules.map((zv => async function(vv, zv, Pv) {
          zv.pushErrorScope("validation");
          const hv = zv.createShaderModule({
              code: Pv.code
            }),
            Sv = zv.popErrorScope(),
            {
              messages: ev
            } = await hv.getCompilationInfo(),
            gv = ev.filter((vv => "error" === vv.type)).map((zv => vv.mapValidationMessage(Pv, zv))),
            pv = await Sv;
          pv && 0 === gv.length && gv.push({
            file: null,
            line: 0,
            message: pv.message,
            variants: [Pv.key]
          });
          return gv
        }(vv, pv, zv))));
        return dv ? null : Nv(vv, vv.Jzv(zv.flat()), gv.offInStrict)
      } catch (lv) {
        return console.error("Couldn't validate the shader pack on WebGPU.", lv), null
      } finally {
        pv.destroy()
      }
    }
    async function dv(vv, zv) {
      var Pv;
      if (!(0, hv.shaderPackNeedsCheck)(vv, zv) || (0, hv.isOtherApiVersion)(vv)) return vv;
      const Sv = await pv(zv, (0, hv.storedShaderPackFiles)(vv));
      if (!Sv) return vv;
      const ev = !1 === (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) && !vv.validation.fromRecheck,
        gv = {
          ...vv,
          validation: ev ? Sv : {
            ...Sv,
            fromRecheck: !0
          }
        };
      return await (0, hv.replaceShaderPack)(vv, gv, zv) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gv
    }

    function Nv(vv, zv, Pv) {
      return {
        headerVersion: (0, hv.pageShaderPackValidationVersion)(vv),
        ok: 0 === zv.length,
        errors: zv.slice(0, gv),
        moreErrors: Math.max(0, zv.length - gv),
        offInStrict: Pv
      }
    }
  },
  6306: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      j: () => hv,
      n: () => av,
      q: () => lv,
      r: () => Sv,
      t: () => dv,
      u: () => Nv,
      x: () => Tv
    });
    const hv = 5;

    function Sv(vv) {
      return vv === hv
    }
    const ev = 262144,
      gv = 256,
      pv = 256;

    function dv(vv) {
      if ("object" !== typeof vv || null === vv || Array.isArray(vv)) return "The pack has no files.";
      const zv = [];
      for (const [Pv, hv] of Object.entries(vv)) {
        if ("string" !== typeof hv) return `${Pv} isn't text.`;
        zv.push({
          path: Pv,
          source: hv
        })
      }
      return zv.sort(((vv, zv) => lv(vv.path, zv.path))),
        function(vv) {
          if (0 === vv.length) return "The pack has no .wgsl files.";
          if (vv.length > gv) return `The pack has more than ${gv} .wgsl files.`;
          const zv = new Set;
          for (const {
              path: Pv
            }
            of vv) {
            const vv = Wv(Pv);
            if (null !== vv) return vv;
            if (zv.has(Pv)) return `The pack has two files at ${Pv}.`;
            zv.add(Pv)
          }
          return Tv(vv) > ev ? `The pack's .wgsl files are over ${ev/1024} KB in total.` : null
        }(zv) ?? zv
    }

    function Nv(vv) {
      const zv = {};
      for (const Pv of vv) zv[Pv.path] = Pv.source;
      return zv
    }

    function lv(vv, zv) {
      return vv < zv ? -1 : vv > zv ? 1 : 0
    }

    function Tv(vv) {
      const zv = new TextEncoder;
      let Pv = 0;
      for (const {
          source: hv
        }
        of vv) Pv += zv.encode(hv).byteLength;
      return Pv
    }

    function Wv(vv) {
      if (!vv.toLowerCase().endsWith(".wgsl")) return `${vv} isn't a .wgsl file.`;
      if (vv.length > pv) return `A file path is over ${pv} characters.`;
      if (vv.includes("\\") || /[\u0000-\u001f]/.test(vv)) return `${vv} isn't a valid file path.`;
      return vv.split("/").some((vv => "" === vv || "." === vv || ".." === vv)) ? `${vv} isn't a valid file path.` : null
    }
    const wv = /^(.*)\[rot\[([1-4])$/;

    function av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hv = new Map;
      zv.forEach(((vv, zv) => {
        let {
          numAnimStates: Pv,
          animStartIdx: Sv
        } = vv;
        for (let ev = 1; ev < Pv; ev++) hv.set(Sv + ev - 1, zv)
      }));
      const Sv = Object.entries(vv),
        ev = new Map;
      for (const [sv, Cv] of Sv) {
        const vv = wv.exec(sv);
        "1" === vv?.[2] && ev.set(vv[1], Cv + 1)
      }
      const gv = vv => {
          const zv = wv.exec(vv);
          return zv && ev.has(zv[1]) ? {
            root: zv[1],
            rotation: Number(zv[2]) - 1
          } : null
        },
        pv = new Set(Sv.map((vv => {
          let [zv] = vv;
          return gv(zv)?.root ?? zv
        }))),
        dv = (vv, Pv) => {
          const hv = vv.replace(/_?0$/, "");
          return (zv[Pv]?.numAnimStates ?? 0) > 1 && !pv.has(hv) ? hv : vv
        },
        Nv = new Map;
      for (const [wv, sv] of Sv) Nv.set(sv, dv(gv(wv)?.root ?? wv, sv));
      const lv = Sv.reduce(((vv, zv) => {
          let [, Pv] = zv;
          return Math.max(vv, Pv + 1)
        }), 0),
        Tv = Array.from({
          length: lv
        }, ((vv, zv) => ({
          id: zv + 1,
          rotation: 0
        }))),
        Wv = new Map,
        av = new Map;
      for (const [wv, sv] of Sv) {
        const vv = gv(wv),
          zv = hv.get(sv);
        if (void 0 !== zv) {
          const Pv = Nv.get(zv);
          av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "frame"
          }), vv && !av.has(vv.root) && av.set(vv.root, {
            name: vv.root,
            texture: Pv,
            kind: "frame"
          });
          continue
        }
        const Pv = Nv.get(sv),
          Sv = vv?.root ?? wv;
        if (Pv !== Sv && av.set(Sv, {
            name: Sv,
            texture: Pv,
            kind: "frame"
          }), vv) {
          const zv = ev.get(vv.root);
          Tv[sv] = {
            id: zv,
            rotation: vv.rotation
          }, Wv.set(Pv, zv), av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "rotation"
          })
        } else Wv.set(Pv, sv + 1)
      }
      for (const wv of Wv.keys()) av.delete(wv);
      for (const [wv, sv] of Pv) {
        const vv = Wv.get(sv);
        void 0 === vv || Wv.has(wv) || (Wv.set(wv, vv), av.delete(wv))
      }
      return {
        named: [...Wv].sort(((vv, zv) => {
          let [Pv] = vv, [hv] = zv;
          return Pv < hv ? -1 : Pv > hv ? 1 : 0
        })).map((vv => {
          let [zv, Pv] = vv;
          return {
            name: zv,
            id: Pv
          }
        })),
        aliases: [...av.values()],
        layers: Tv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);