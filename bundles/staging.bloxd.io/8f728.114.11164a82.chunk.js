export const id = 114;
export const ids = [114, 116, 119];
export const modules = {
  5564: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(5568),
      Ic = nc(957);
    const rB = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function uc(cB) {
      let {
        diagnostics: Bc,
        more: nc = 0,
        t: uc
      } = cB;
      return (0, Ic.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Bc.map(((cB, Bc) => {
          const nc = (0, Vc.g)(cB),
            sc = function(cB, Bc) {
              const nc = (0, Vc.c)(null !== cB && void 0 !== cB ? cB : []);
              if (0 === nc.length) return null;
              return nc.map((cB => cB.map((cB => Bc(rB[cB]))).join(", "))).join("; ")
            }(cB.variants, uc);
          return (0, Ic.jsxs)("li", {
            children: [nc && (0, Ic.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: nc
            }), cB.message, sc && (0, Ic.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: uc("shaderPack:onlyIn", {
                variants: sc
              })
            })]
          }, Bc)
        })), nc > 0 && (0, Ic.jsx)("li", {
          children: uc("shaderPack:moreErrors", {
            count: String(nc)
          })
        })]
      })
    }
  },
  5577: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Hc,
      g: () => Fc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(4006),
      sc = nc(1188),
      Mc = nc(926),
      Pc = nc(1255),
      qB = nc(1051),
      Oc = nc(107),
      Tc = nc(5561),
      fc = nc(5570);
    class mB extends Error {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(cB, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = cB, this.params = Bc
      }
    }
    const ec = 1024,
      tB = 101010256,
      Sc = 33639248,
      yB = 67324752,
      zB = 22,
      pc = 46,
      hc = 30,
      aB = 65535,
      lc = 65535,
      Yc = 4294967295,
      Lc = 0,
      gB = 8,
      Uc = new TextDecoder;

    function bB(cB) {
      const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength),
        nc = function(cB) {
          const Bc = cB.byteLength - zB;
          for (let nc = Bc; nc >= Math.max(0, Bc - aB); nc--)
            if (cB.getUint32(nc, !0) === tB && nc + zB + cB.getUint16(nc + 20, !0) <= cB.byteLength) return nc;
          throw new mB("shaderPack:loadNotZip")
        }(Bc),
        Vc = Bc.getUint16(nc + 8, !0),
        Ic = Bc.getUint16(nc + 10, !0),
        rB = Bc.getUint32(nc + 12, !0),
        uc = Bc.getUint32(nc + 16, !0);
      if (Ic === lc || rB === Yc || uc === Yc) throw vB();
      if (0 !== Bc.getUint16(nc + 4, !0) || 0 !== Bc.getUint16(nc + 6, !0) || Vc !== Ic) throw new mB("shaderPack:loadSplitZip");
      if (Ic > ec) throw new mB("shaderPack:loadTooManyZipEntries", {
        count: String(ec)
      });
      const sc = uc + rB;
      if (sc > nc) throw Cc();
      const Mc = [];
      let Pc = uc;
      for (let qB = 0; qB < Ic; qB++) {
        if (Pc + pc > sc || Bc.getUint32(Pc, !0) !== Sc) throw Cc();
        const nc = Bc.getUint16(Pc + 8, !0),
          Vc = Bc.getUint16(Pc + 10, !0),
          Ic = Bc.getUint32(Pc + 20, !0),
          rB = Bc.getUint32(Pc + 24, !0),
          qB = Bc.getUint16(Pc + 28, !0),
          Oc = Bc.getUint16(Pc + 30, !0),
          Tc = Bc.getUint16(Pc + 32, !0),
          fc = Bc.getUint32(Pc + 42, !0),
          mB = Pc + pc;
        if (Pc = mB + qB + Oc + Tc, Pc > sc) throw Cc();
        if (Ic === Yc || rB === Yc || fc === Yc) throw vB();
        const ec = Uc.decode(cB.subarray(mB, mB + qB)).replace(/\\/g, "/");
        ec.endsWith("/") || Mc.push({
          path: ec,
          method: Vc,
          encrypted: 0 !== (1 & nc),
          compressedSize: Ic,
          dataOffset: Qc(Bc, fc, Ic, uc)
        })
      }
      return Mc
    }
    async function Zc(cB, Bc, nc) {
      if (Bc.encrypted) throw new mB("shaderPack:loadEncrypted", {
        path: Bc.path
      });
      if (Bc.method === Lc) return Bc.compressedSize > nc ? null : cB.subarray(Bc.dataOffset, Bc.dataOffset + Bc.compressedSize);
      if (Bc.method === gB) return async function(cB, Bc, nc) {
        const Vc = new Blob([cB]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Ic = [];
        let rB = 0;
        try {
          for (;;) {
            const {
              done: cB,
              value: nc
            } = await Vc.read();
            if (cB) break;
            if (rB += nc.byteLength, rB > Bc) return await Vc.cancel(), null;
            Ic.push(nc)
          }
        } catch (Mc) {
          throw new mB("shaderPack:loadDecompressFailed", {
            path: nc
          }, {
            cause: Mc
          })
        }
        const uc = new Uint8Array(rB);
        let sc = 0;
        for (const Pc of Ic) uc.set(Pc, sc), sc += Pc.byteLength;
        return uc
      }(cB.slice(Bc.dataOffset, Bc.dataOffset + Bc.compressedSize), nc, Bc.path);
      throw new mB("shaderPack:loadUnsupportedCompression", {
        path: Bc.path,
        method: String(Bc.method)
      })
    }

    function Qc(cB, Bc, nc, Vc) {
      if (Bc + hc > Vc || cB.getUint32(Bc, !0) !== yB) throw Cc();
      const Ic = Bc + hc + cB.getUint16(Bc + 26, !0) + cB.getUint16(Bc + 28, !0);
      if (Ic + nc > Vc) throw Cc();
      return Ic
    }

    function Cc() {
      return new mB("shaderPack:loadZipDamaged")
    }

    function vB() {
      return new mB("shaderPack:loadZip64")
    }
    const Dc = 33554432,
      Nc = 65536;
    async function Ec(cB) {
      if (1 === cB.length && cB[0].name.toLowerCase().endsWith(".zip")) {
        const Bc = cB[0];
        if (Bc.size > Dc) throw new mB("shaderPack:loadZipTooBig", {
          megabytes: String(Dc / 1048576)
        });
        return async function(cB) {
          return oc(bB(cB).map((Bc => ({
            path: Bc.path,
            read: nc => Zc(cB, Bc, nc)
          }))))
        }(new Uint8Array(await Bc.arrayBuffer()))
      }
      return oc(cB.map((cB => ({
        path: Wc(cB),
        read: Bc => async function(cB, Bc) {
          return cB.size > Bc ? null : new Uint8Array(await cB.arrayBuffer())
        }(cB, Bc)
      }))))
    }
    async function oc(cB) {
      const Bc = function(cB) {
          const Bc = cB.length > 0 ? cB[0].path.indexOf("/") : -1;
          if (-1 === Bc) return cB;
          const nc = cB[0].path.slice(0, Bc + 1);
          if (!cB.every((cB => cB.path.startsWith(nc)))) return cB;
          return cB.map((cB => ({
            ...cB,
            path: cB.path.slice(nc.length)
          })))
        }(cB.filter((cB => ! function(cB) {
          const Bc = cB.split("/"),
            nc = Bc[Bc.length - 1];
          return Bc.includes("__MACOSX") || nc.startsWith("._") || ".DS_Store" === nc
        }(cB.path)))),
        nc = Bc.filter((cB => "pack.json" === cB.path.toLowerCase()));
      if (0 === nc.length) throw new mB("shaderPack:loadNoManifest");
      if (nc.length > 1) throw new mB("shaderPack:loadDuplicateManifest");
      const Vc = nc[0],
        Ic = await Vc.read(Nc);
      if (null === Ic) throw new mB("shaderPack:loadManifestTooBig", {
        kilobytes: String(Nc / 1024)
      });
      const rB = function(cB) {
          let Bc;
          try {
            Bc = JSON.parse(cB)
          } catch (sc) {
            throw new mB("shaderPack:loadManifestNotJson", {
              error: sc.message
            }, {
              cause: sc
            })
          }
          if ("object" !== typeof Bc || null === Bc || Array.isArray(Bc)) throw new mB("shaderPack:loadManifestNotObject");
          const {
            apiVersion: nc,
            name: Vc,
            author: Ic,
            description: rB,
            keepCircleShadows: uc
          } = Bc;
          if (void 0 === nc) throw new mB("shaderPack:loadNoApiVersion", {
            version: String(fc.e)
          });
          if (!(0, fc.k)(nc)) throw new mB("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(nc),
            version: String(fc.e)
          });
          if ("string" !== typeof Vc || "" === Vc.trim()) throw new mB("shaderPack:loadNoName");
          if (void 0 !== Ic && null !== Ic && "string" !== typeof Ic) throw new mB("shaderPack:loadAuthorNotString");
          if (void 0 !== rB && null !== rB && "string" !== typeof rB) throw new mB("shaderPack:loadDescriptionNotString");
          if (void 0 !== uc && "boolean" !== typeof uc) throw new mB("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: nc,
            name: Vc,
            author: "string" === typeof Ic ? Ic : null,
            description: "string" === typeof rB && "" !== rB.trim() ? rB : null,
            keepCircleShadows: !0 === uc
          }
        }(wc(Ic, Vc.path)),
        uc = Bc.filter((cB => cB.path.toLowerCase().endsWith(".wgsl"))).sort(((cB, Bc) => (0, Tc.p)(cB.path, Bc.path)));
      if (0 === uc.length) throw new mB("shaderPack:loadNoWgsl");
      if (uc.length > Tc.d) throw new mB("shaderPack:loadTooManyWgsl", {
        count: String(Tc.d)
      });
      const sc = uc.find(((cB, Bc) => Bc > 0 && cB.path === uc[Bc - 1].path));
      if (sc) throw new mB("shaderPack:loadDuplicatePath", {
        path: sc.path
      });
      const Mc = [];
      let Pc = Tc.g;
      for (const qB of uc) {
        const cB = await qB.read(Pc);
        if (null === cB) throw new mB("shaderPack:loadSourceTooBig", {
          kilobytes: String(Tc.g / 1024)
        });
        Pc -= cB.byteLength, Mc.push({
          path: qB.path,
          source: wc(cB, qB.path)
        })
      }
      return {
        manifest: rB,
        files: Mc
      }
    }

    function Wc(cB) {
      return (cB.webkitRelativePath || cB.path || cB.name).replace(/^\.?\//, "")
    }

    function wc(cB, Bc) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(cB)
      } catch (nc) {
        throw new mB("shaderPack:loadNotUtf8", {
          path: Bc
        }, {
          cause: nc
        })
      }
    }
    var kB = nc(5568),
      Xc = nc(957);

    function Hc(cB) {
      let {
        busy: Bc,
        disabled: nc,
        onFiles: Ic
      } = cB;
      const {
        t: Tc
      } = (0, qB.x)(), fc = (0, Vc.useRef)(null), mB = !(0, Oc.isMobile)(), {
        getRootProps: ec,
        getInputProps: tB,
        isDragActive: Sc,
        open: yB
      } = (0, uc.b)({
        onDrop: Ic,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: nc
      });
      return (0, Xc.jsxs)("div", {
        ...ec({
          className: rB()("ShaderPackDropZone", {
            ActiveDrag: Sc,
            Disabled: nc
          })
        }),
        children: [(0, Xc.jsx)("input", {
          ...tB({
            webkitdirectory: "true"
          })
        }), (0, Xc.jsx)("input", {
          ref: fc,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(cB) {
            const Bc = Array.from(cB.target.files);
            cB.target.value = "", Ic(Bc)
          }
        }), Bc && (0, Xc.jsx)(sc.e, {}), !Bc && (0, Xc.jsxs)(Xc.Fragment, {
          children: [(0, Xc.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Xc.jsx)(Mc.e, {
              name: "up-from-bracket"
            })
          }), (0, Xc.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Tc(mB ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Xc.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [mB && (0, Xc.jsx)(Pc.d, {
              disabled: nc,
              onClick: yB,
              children: Tc("shaderPack:chooseFolder")
            }), (0, Xc.jsx)(Pc.d, {
              disabled: nc,
              onClick: () => {
                fc.current.click()
              },
              children: Tc("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Fc(cB) {
      const {
        t: Bc
      } = (0, qB.x)(), [nc, Ic] = (0, Vc.useState)(!1), [rB, uc] = (0, Vc.useState)(null), sc = (0, Vc.useRef)(!1);
      return {
        loading: nc,
        error: rB,
        setError: uc,
        onFiles: async function(nc) {
          if (!sc.current) {
            sc.current = !0, Ic(!0), uc(null);
            try {
              await cB(await Ec(nc))
            } catch (Vc) {
              Vc instanceof mB ? uc((0, kB.h)(Bc, Vc.translationKey, Vc.params)) : (console.error("Failed to load the shader pack", Vc), uc(Bc("shaderPack:unexpectedError")))
            } finally {
              sc.current = !1, Ic(!1)
            }
          }
        }
      }
    }
  },
  5568: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => uc,
      h: () => rB
    });
    var Vc = nc(5570);
    const Ic = [cB => cB.strict ? "strict" : "nonStrict", cB => cB.program];

    function rB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Vc = {};
      for (const Ic in nc) Vc[Ic] = `\0${Ic}\0`;
      return cB(Bc, Vc).replace(/\0(\w+)\0/g, ((cB, Bc) => nc[Bc]))
    }

    function uc(cB) {
      return null === cB.file ? null : cB.line > 0 ? `${cB.file}:${cB.line}` : cB.file
    }

    function sc(cB) {
      const Bc = new Map(cB.map((cB => [Mc(cB).join("."), cB])));
      if (0 === Bc.size) return [];
      const nc = qB([...Bc.values()]);
      return 0 === nc[0].length ? [] : nc
    }

    function Mc(cB) {
      return Ic.map((Bc => Bc(cB)))
    }
    const Pc = Ic.map((cB => new Set(Vc.h.map(cB)).size));

    function qB(cB) {
      const Bc = Ic.map((Bc => new Set(cB.map(Bc)))),
        nc = Bc.reduce(((cB, Bc) => cB * Bc.size), 1),
        Vc = Bc.every(((cB, Bc) => 1 === cB.size || cB.size === Pc[Bc]));
      if (nc === cB.length && Vc) return [Ic.filter(((cB, nc) => 1 === Bc[nc].size)).map((Bc => Bc(cB[0])))];
      let rB = null;
      for (let uc = 0; uc < Ic.length; uc++) {
        if (1 === Bc[uc].size) continue;
        const nc = Oc(cB, Ic[uc]).flatMap(qB);
        (null === rB || nc.length < rB.length) && (rB = nc)
      }
      return rB
    }

    function Oc(cB, Bc) {
      const nc = new Map;
      for (const Ic of cB) {
        var Vc;
        const cB = Bc(Ic);
        nc.set(cB, [...null !== (Vc = nc.get(cB)) && void 0 !== Vc ? Vc : [], Ic])
      }
      return [...nc.values()]
    }
  },
  5570: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.k,
      h: () => Ic,
      k: () => Vc.q
    });
    var Vc = nc(5561);
    const Ic = [!1, !0].flatMap((cB => ["terrain", "liquid", "model"].map((Bc => ({
      strict: cB,
      program: Bc
    })))))
  },
  5624: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      forgetShaderPackActiveHint: () => bB,
      isOtherApiVersion: () => Yc,
      isShaderPackActive: () => pc,
      isShaderPackChangePending: () => lc,
      markShaderPackChangePending: () => aB,
      pageShaderPackValidationVersion: () => Lc,
      reconcileStoredShaderPackHint: () => Uc,
      removeShaderPack: () => zB,
      replaceShaderPack: () => tB,
      saveShaderPack: () => ec,
      shaderPackNeedsCheck: () => gB,
      storedPackOutcome: () => hc,
      storedShaderPackFiles: () => Tc,
      toStoredShaderPack: () => Oc
    });
    var Vc = nc(5561),
      Ic = nc(5570),
      rB = nc(51),
      uc = nc(2585),
      sc = nc(5626),
      Mc = nc(5608);
    const Pc = "shaderPackChangePending";
    let qB = null;

    function Oc(cB, Bc, nc) {
      return {
        manifest: cB.manifest,
        files: (0, Vc.u)(cB.files),
        validation: Bc,
        ...nc && {
          listing: nc
        }
      }
    }

    function Tc(cB) {
      return Object.keys(cB.files).map((Bc => ({
        path: Bc,
        source: cB.files[Bc]
      })))
    }
    let fc = Promise.resolve();

    function mB(cB) {
      const Bc = fc.then(cB);
      return fc = Bc.catch((() => {})), Bc
    }

    function ec(cB, Bc) {
      return mB((() => Sc(cB, Bc)))
    }

    function tB(cB, Bc, nc) {
      return mB((async () => JSON.stringify(await (0, sc.e)()) === JSON.stringify(cB) && (null === Bc ? (await yB(), !0) : Sc(Bc, nc))))
    }
    async function Sc(cB, Bc) {
      const nc = await rB.d.setItem(sc.c, cB);
      return nc && Zc(cB, Bc), nc
    }
    async function yB() {
      await rB.d.removeItem(sc.c), rB.h.removeItem(uc.b)
    }

    function zB() {
      return mB(yB)
    }

    function pc(cB, Bc) {
      return "active" === hc(cB, Bc).kind
    }

    function hc(cB, Bc) {
      var nc;
      return null === cB ? {
        kind: "none",
        reason: "nothingStored"
      } : Yc(cB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) || cB.validation.fromRecheck ? null === Bc ? {
        kind: "none",
        reason: "noCompiler"
      } : gB(cB, Bc) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : cB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function aB() {
      rB.i.setItem(Pc, performance.timeOrigin)
    }

    function lc() {
      return rB.i.getItem(Pc) === performance.timeOrigin
    }

    function Yc(cB) {
      return !(0, Ic.k)(cB.manifest.apiVersion)
    }

    function Lc(cB) {
      return qB ??= cB.EBc((0, Mc.shaderPackTextures)()), qB
    }

    function gB(cB, Bc) {
      var nc;
      return (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.headerVersion) !== Lc(Bc)
    }

    function Uc(cB) {
      return mB((async () => {
        Zc(await (0, sc.e)(!0), cB)
      }))
    }

    function bB() {
      return mB((async () => {
        rB.h.removeItem(uc.b)
      }))
    }

    function Zc(cB, Bc) {
      pc(cB, Bc) ? rB.h.setItem(uc.b, !0) : rB.h.removeItem(uc.b)
    }
  },
  5608: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadShaderPackTextures: () => uc,
      shaderPackTextures: () => sc
    });
    var Vc = nc(5561);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= Promise.all([nc.e(60), nc.e(180)]).then((() => nc(38499))).then((cB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Bc,
          textureNameToIndex: nc,
          textureAnimationData: rB
        } = cB;
        return Ic ??= (0, Vc.l)(nc, rB, Bc), Ic
      })), rB
    }

    function sc() {
      if (null === Ic) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ic
    }
  },
  5618: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mc,
      h: () => sc
    });
    var Vc = nc(5624),
      Ic = nc(5608),
      rB = nc(134);
    const uc = 100;
    async function sc(cB, Bc) {
      var nc;
      let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (nc = navigator.gpu) && void 0 !== nc ? nc : null;
      const uc = cB.Cuc(Bc, (0, Ic.shaderPackTextures)());
      if (uc.errors.length > 0) return Pc(cB, uc.errors, uc.offInStrict);
      const sc = await async function(cB) {
        if (!cB) return null;
        try {
          const Bc = await (0, rB.s)(cB);
          return Bc ? await Bc.requestDevice() : null
        } catch (Bc) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Bc), null
        }
      }(Vc);
      if (!sc) return null;
      let Mc = !1;
      sc.lost.then((() => {
        Mc = !0
      }));
      try {
        const Bc = await Promise.all(uc.validationModules.map((Bc => async function(cB, Bc, nc) {
          Bc.pushErrorScope("validation");
          const Vc = Bc.createShaderModule({
              code: nc.code
            }),
            Ic = Bc.popErrorScope(),
            {
              messages: rB
            } = await Vc.getCompilationInfo(),
            uc = rB.filter((cB => "error" === cB.type)).map((Bc => cB.mapValidationMessage(nc, Bc))),
            sc = await Ic;
          sc && 0 === uc.length && uc.push({
            file: null,
            line: 0,
            message: sc.message,
            variants: [nc.key]
          });
          return uc
        }(cB, sc, Bc))));
        return Mc ? null : Pc(cB, cB.UPc(Bc.flat()), uc.offInStrict)
      } catch (qB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", qB), null
      } finally {
        sc.destroy()
      }
    }
    async function Mc(cB, Bc) {
      var nc;
      if (!(0, Vc.shaderPackNeedsCheck)(cB, Bc) || (0, Vc.isOtherApiVersion)(cB)) return cB;
      const Ic = await sc(Bc, (0, Vc.storedShaderPackFiles)(cB));
      if (!Ic) return cB;
      const rB = !1 === (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) && !cB.validation.fromRecheck,
        uc = {
          ...cB,
          validation: rB ? Ic : {
            ...Ic,
            fromRecheck: !0
          }
        };
      return await (0, Vc.replaceShaderPack)(cB, uc, Bc) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), uc
    }

    function Pc(cB, Bc, nc) {
      return {
        headerVersion: (0, Vc.pageShaderPackValidationVersion)(cB),
        ok: 0 === Bc.length,
        errors: Bc.slice(0, uc),
        moreErrors: Math.max(0, Bc.length - uc),
        offInStrict: nc
      }
    }
  },
  5561: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      k: () => Vc,
      l: () => mB,
      p: () => qB,
      q: () => Ic,
      r: () => Mc,
      u: () => Pc,
      x: () => Oc
    });
    const Vc = 5;

    function Ic(cB) {
      return cB === Vc
    }
    const rB = 262144,
      uc = 256,
      sc = 256;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB || Array.isArray(cB)) return "The pack has no files.";
      const Bc = [];
      for (const [nc, Vc] of Object.entries(cB)) {
        if ("string" !== typeof Vc) return `${nc} isn't text.`;
        Bc.push({
          path: nc,
          source: Vc
        })
      }
      return Bc.sort(((cB, Bc) => qB(cB.path, Bc.path))),
        function(cB) {
          if (0 === cB.length) return "The pack has no .wgsl files.";
          if (cB.length > uc) return `The pack has more than ${uc} .wgsl files.`;
          const Bc = new Set;
          for (const {
              path: nc
            }
            of cB) {
            const cB = Tc(nc);
            if (null !== cB) return cB;
            if (Bc.has(nc)) return `The pack has two files at ${nc}.`;
            Bc.add(nc)
          }
          return Oc(cB) > rB ? `The pack's .wgsl files are over ${rB/1024} KB in total.` : null
        }(Bc) ?? Bc
    }

    function Pc(cB) {
      const Bc = {};
      for (const nc of cB) Bc[nc.path] = nc.source;
      return Bc
    }

    function qB(cB, Bc) {
      return cB < Bc ? -1 : cB > Bc ? 1 : 0
    }

    function Oc(cB) {
      const Bc = new TextEncoder;
      let nc = 0;
      for (const {
          source: Vc
        }
        of cB) nc += Bc.encode(Vc).byteLength;
      return nc
    }

    function Tc(cB) {
      if (!cB.toLowerCase().endsWith(".wgsl")) return `${cB} isn't a .wgsl file.`;
      if (cB.length > sc) return `A file path is over ${sc} characters.`;
      if (cB.includes("\\") || /[\u0000-\u001f]/.test(cB)) return `${cB} isn't a valid file path.`;
      return cB.split("/").some((cB => "" === cB || "." === cB || ".." === cB)) ? `${cB} isn't a valid file path.` : null
    }
    const fc = /^(.*)\[rot\[([1-4])$/;

    function mB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Vc = new Map;
      Bc.forEach(((cB, Bc) => {
        let {
          numAnimStates: nc,
          animStartIdx: Ic
        } = cB;
        for (let rB = 1; rB < nc; rB++) Vc.set(Ic + rB - 1, Bc)
      }));
      const Ic = Object.entries(cB),
        rB = new Map;
      for (const [ec, tB] of Ic) {
        const cB = fc.exec(ec);
        "1" === cB?.[2] && rB.set(cB[1], tB + 1)
      }
      const uc = cB => {
          const Bc = fc.exec(cB);
          return Bc && rB.has(Bc[1]) ? {
            root: Bc[1],
            rotation: Number(Bc[2]) - 1
          } : null
        },
        sc = new Set(Ic.map((cB => {
          let [Bc] = cB;
          return uc(Bc)?.root ?? Bc
        }))),
        Mc = (cB, nc) => {
          const Vc = cB.replace(/_?0$/, "");
          return (Bc[nc]?.numAnimStates ?? 0) > 1 && !sc.has(Vc) ? Vc : cB
        },
        Pc = new Map;
      for (const [fc, ec] of Ic) Pc.set(ec, Mc(uc(fc)?.root ?? fc, ec));
      const qB = Ic.reduce(((cB, Bc) => {
          let [, nc] = Bc;
          return Math.max(cB, nc + 1)
        }), 0),
        Oc = Array.from({
          length: qB
        }, ((cB, Bc) => ({
          id: Bc + 1,
          rotation: 0
        }))),
        Tc = new Map,
        mB = new Map;
      for (const [fc, ec] of Ic) {
        const cB = uc(fc),
          Bc = Vc.get(ec);
        if (void 0 !== Bc) {
          const nc = Pc.get(Bc);
          mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "frame"
          }), cB && !mB.has(cB.root) && mB.set(cB.root, {
            name: cB.root,
            texture: nc,
            kind: "frame"
          });
          continue
        }
        const nc = Pc.get(ec),
          Ic = cB?.root ?? fc;
        if (nc !== Ic && mB.set(Ic, {
            name: Ic,
            texture: nc,
            kind: "frame"
          }), cB) {
          const Bc = rB.get(cB.root);
          Oc[ec] = {
            id: Bc,
            rotation: cB.rotation
          }, Tc.set(nc, Bc), mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "rotation"
          })
        } else Tc.set(nc, ec + 1)
      }
      for (const fc of Tc.keys()) mB.delete(fc);
      for (const [fc, ec] of nc) {
        const cB = Tc.get(ec);
        void 0 === cB || Tc.has(fc) || (Tc.set(fc, cB), mB.delete(fc))
      }
      return {
        named: [...Tc].sort(((cB, Bc) => {
          let [nc] = cB, [Vc] = Bc;
          return nc < Vc ? -1 : nc > Vc ? 1 : 0
        })).map((cB => {
          let [Bc, nc] = cB;
          return {
            name: Bc,
            id: nc
          }
        })),
        aliases: [...mB.values()],
        layers: Oc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);