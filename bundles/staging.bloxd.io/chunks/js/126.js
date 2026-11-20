export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6331: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(6335),
      Ob = hb(1007);
    const Gb = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Ub(bb) {
      let {
        diagnostics: ub,
        more: hb = 0,
        t: Ub
      } = bb;
      return (0, Ob.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [ub.map(((bb, ub) => {
          const hb = (0, Bb.i)(bb),
            Lb = function(bb, ub) {
              const hb = (0, Bb.e)(null !== bb && void 0 !== bb ? bb : []);
              if (0 === hb.length) return null;
              return hb.map((bb => bb.map((bb => ub(Gb[bb]))).join(", "))).join("; ")
            }(bb.variants, Ub);
          return (0, Ob.jsxs)("li", {
            children: [hb && (0, Ob.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: hb
            }), bb.message, Lb && (0, Ob.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Ub("shaderPack:onlyIn", {
                variants: Lb
              })
            })]
          }, ub)
        })), hb > 0 && (0, Ob.jsx)("li", {
          children: Ub("shaderPack:moreErrors", {
            count: String(hb)
          })
        })]
      })
    }
  },
  6347: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => qb,
      d: () => Eb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(4723),
      Lb = hb(1242),
      Yb = hb(966),
      Sb = hb(1357),
      ab = hb(1095),
      Hb = hb(86),
      wb = hb(6324),
      Zb = hb(6344);
    class Xb extends Error {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(bb, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = bb, this.params = ub
      }
    }
    const pb = 1024,
      ob = 101010256,
      Ab = 33639248,
      lb = 67324752,
      Kb = 22,
      Wb = 46,
      Cb = 30,
      db = 65535,
      rb = 65535,
      jb = 4294967295,
      nb = 0,
      Db = 8,
      xb = new TextDecoder;

    function zb(bb) {
      const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
        hb = function(bb) {
          const ub = bb.byteLength - Kb;
          for (let hb = ub; hb >= Math.max(0, ub - db); hb--)
            if (bb.getUint32(hb, !0) === ob && hb + Kb + bb.getUint16(hb + 20, !0) <= bb.byteLength) return hb;
          throw new Xb("shaderPack:loadNotZip")
        }(ub),
        Bb = ub.getUint16(hb + 8, !0),
        Ob = ub.getUint16(hb + 10, !0),
        Gb = ub.getUint32(hb + 12, !0),
        Ub = ub.getUint32(hb + 16, !0);
      if (Ob === rb || Gb === jb || Ub === jb) throw tb();
      if (0 !== ub.getUint16(hb + 4, !0) || 0 !== ub.getUint16(hb + 6, !0) || Bb !== Ob) throw new Xb("shaderPack:loadSplitZip");
      if (Ob > pb) throw new Xb("shaderPack:loadTooManyZipEntries", {
        count: String(pb)
      });
      const Lb = Ub + Gb;
      if (Lb > hb) throw vb();
      const Yb = [];
      let Sb = Ub;
      for (let ab = 0; ab < Ob; ab++) {
        if (Sb + Wb > Lb || ub.getUint32(Sb, !0) !== Ab) throw vb();
        const hb = ub.getUint16(Sb + 8, !0),
          Bb = ub.getUint16(Sb + 10, !0),
          Ob = ub.getUint32(Sb + 20, !0),
          Gb = ub.getUint32(Sb + 24, !0),
          ab = ub.getUint16(Sb + 28, !0),
          Hb = ub.getUint16(Sb + 30, !0),
          wb = ub.getUint16(Sb + 32, !0),
          Zb = ub.getUint32(Sb + 42, !0),
          Xb = Sb + Wb;
        if (Sb = Xb + ab + Hb + wb, Sb > Lb) throw vb();
        if (Ob === jb || Gb === jb || Zb === jb) throw tb();
        const pb = xb.decode(bb.subarray(Xb, Xb + ab)).replace(/\\/g, "/");
        pb.endsWith("/") || Yb.push({
          path: pb,
          method: Bb,
          encrypted: 0 !== (1 & hb),
          compressedSize: Ob,
          dataOffset: ib(ub, Zb, Ob, Ub)
        })
      }
      return Yb
    }
    async function gb(bb, ub, hb) {
      if (ub.encrypted) throw new Xb("shaderPack:loadEncrypted", {
        path: ub.path
      });
      if (ub.method === nb) return ub.compressedSize > hb ? null : bb.subarray(ub.dataOffset, ub.dataOffset + ub.compressedSize);
      if (ub.method === Db) return async function(bb, ub, hb) {
        const Bb = new Blob([bb]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Ob = [];
        let Gb = 0;
        try {
          for (;;) {
            const {
              done: bb,
              value: hb
            } = await Bb.read();
            if (bb) break;
            if (Gb += hb.byteLength, Gb > ub) return await Bb.cancel(), null;
            Ob.push(hb)
          }
        } catch (Yb) {
          throw new Xb("shaderPack:loadDecompressFailed", {
            path: hb
          }, {
            cause: Yb
          })
        }
        const Ub = new Uint8Array(Gb);
        let Lb = 0;
        for (const Sb of Ob) Ub.set(Sb, Lb), Lb += Sb.byteLength;
        return Ub
      }(bb.slice(ub.dataOffset, ub.dataOffset + ub.compressedSize), hb, ub.path);
      throw new Xb("shaderPack:loadUnsupportedCompression", {
        path: ub.path,
        method: String(ub.method)
      })
    }

    function ib(bb, ub, hb, Bb) {
      if (ub + Cb > Bb || bb.getUint32(ub, !0) !== lb) throw vb();
      const Ob = ub + Cb + bb.getUint16(ub + 26, !0) + bb.getUint16(ub + 28, !0);
      if (Ob + hb > Bb) throw vb();
      return Ob
    }

    function vb() {
      return new Xb("shaderPack:loadZipDamaged")
    }

    function tb() {
      return new Xb("shaderPack:loadZip64")
    }
    const Jb = 33554432,
      eb = 65536;
    async function Nb(bb) {
      if (1 === bb.length && bb[0].name.toLowerCase().endsWith(".zip")) {
        const ub = bb[0];
        if (ub.size > Jb) throw new Xb("shaderPack:loadZipTooBig", {
          megabytes: String(Jb / 1048576)
        });
        return async function(bb) {
          return sb(zb(bb).map((ub => ({
            path: ub.path,
            read: hb => gb(bb, ub, hb)
          }))))
        }(new Uint8Array(await ub.arrayBuffer()))
      }
      return sb(bb.map((bb => ({
        path: Mb(bb),
        read: ub => async function(bb, ub) {
          return bb.size > ub ? null : new Uint8Array(await bb.arrayBuffer())
        }(bb, ub)
      }))))
    }
    async function sb(bb) {
      const ub = function(bb) {
          const ub = bb.length > 0 ? bb[0].path.indexOf("/") : -1;
          if (-1 === ub) return bb;
          const hb = bb[0].path.slice(0, ub + 1);
          if (!bb.every((bb => bb.path.startsWith(hb)))) return bb;
          return bb.map((bb => ({
            ...bb,
            path: bb.path.slice(hb.length)
          })))
        }(bb.filter((bb => ! function(bb) {
          const ub = bb.split("/"),
            hb = ub[ub.length - 1];
          return ub.includes("__MACOSX") || hb.startsWith("._") || ".DS_Store" === hb
        }(bb.path)))),
        hb = ub.filter((bb => "pack.json" === bb.path.toLowerCase()));
      if (0 === hb.length) throw new Xb("shaderPack:loadNoManifest");
      if (hb.length > 1) throw new Xb("shaderPack:loadDuplicateManifest");
      const Bb = hb[0],
        Ob = await Bb.read(eb);
      if (null === Ob) throw new Xb("shaderPack:loadManifestTooBig", {
        kilobytes: String(eb / 1024)
      });
      const Gb = function(bb) {
          let ub;
          try {
            ub = JSON.parse(bb)
          } catch (Lb) {
            throw new Xb("shaderPack:loadManifestNotJson", {
              error: Lb.message
            }, {
              cause: Lb
            })
          }
          if ("object" !== typeof ub || null === ub || Array.isArray(ub)) throw new Xb("shaderPack:loadManifestNotObject");
          const {
            apiVersion: hb,
            name: Bb,
            author: Ob,
            description: Gb,
            keepCircleShadows: Ub
          } = ub;
          if (void 0 === hb) throw new Xb("shaderPack:loadNoApiVersion", {
            version: String(Zb.c)
          });
          if (!(0, Zb.i)(hb)) throw new Xb("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(hb),
            version: String(Zb.c)
          });
          if ("string" !== typeof Bb || "" === Bb.trim()) throw new Xb("shaderPack:loadNoName");
          if (void 0 !== Ob && null !== Ob && "string" !== typeof Ob) throw new Xb("shaderPack:loadAuthorNotString");
          if (void 0 !== Gb && null !== Gb && "string" !== typeof Gb) throw new Xb("shaderPack:loadDescriptionNotString");
          if (void 0 !== Ub && "boolean" !== typeof Ub) throw new Xb("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: hb,
            name: Bb,
            author: "string" === typeof Ob ? Ob : null,
            description: "string" === typeof Gb && "" !== Gb.trim() ? Gb : null,
            keepCircleShadows: !0 === Ub
          }
        }(mb(Ob, Bb.path)),
        Ub = ub.filter((bb => bb.path.toLowerCase().endsWith(".wgsl"))).sort(((bb, ub) => (0, wb.n)(bb.path, ub.path)));
      if (0 === Ub.length) throw new Xb("shaderPack:loadNoWgsl");
      if (Ub.length > wb.d) throw new Xb("shaderPack:loadTooManyWgsl", {
        count: String(wb.d)
      });
      const Lb = Ub.find(((bb, ub) => ub > 0 && bb.path === Ub[ub - 1].path));
      if (Lb) throw new Xb("shaderPack:loadDuplicatePath", {
        path: Lb.path
      });
      const Yb = [];
      let Sb = wb.h;
      for (const ab of Ub) {
        const bb = await ab.read(Sb);
        if (null === bb) throw new Xb("shaderPack:loadSourceTooBig", {
          kilobytes: String(wb.h / 1024)
        });
        Sb -= bb.byteLength, Yb.push({
          path: ab.path,
          source: mb(bb, ab.path)
        })
      }
      return {
        manifest: Gb,
        files: Yb
      }
    }

    function Mb(bb) {
      return (bb.webkitRelativePath || bb.path || bb.name).replace(/^\.?\//, "")
    }

    function mb(bb, ub) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(bb)
      } catch (hb) {
        throw new Xb("shaderPack:loadNotUtf8", {
          path: ub
        }, {
          cause: hb
        })
      }
    }
    var Ib = hb(6335),
      Pb = hb(1007);

    function qb(bb) {
      let {
        busy: ub,
        disabled: hb,
        onFiles: Ob
      } = bb;
      const {
        t: wb
      } = (0, ab.K)(), Zb = (0, Bb.useRef)(null), Xb = !(0, Hb.isMobile)(), {
        getRootProps: pb,
        getInputProps: ob,
        isDragActive: Ab,
        open: lb
      } = (0, Ub.e)({
        onDrop: Ob,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: hb
      });
      return (0, Pb.jsxs)("div", {
        ...pb({
          className: Gb()("ShaderPackDropZone", {
            ActiveDrag: Ab,
            Disabled: hb
          })
        }),
        children: [(0, Pb.jsx)("input", {
          ...ob({
            webkitdirectory: "true"
          })
        }), (0, Pb.jsx)("input", {
          ref: Zb,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(bb) {
            const ub = Array.from(bb.target.files);
            bb.target.value = "", Ob(ub)
          }
        }), ub && (0, Pb.jsx)(Lb.c, {}), !ub && (0, Pb.jsxs)(Pb.Fragment, {
          children: [(0, Pb.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Pb.jsx)(Yb.e, {
              name: "up-from-bracket"
            })
          }), (0, Pb.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: wb(Xb ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Pb.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [Xb && (0, Pb.jsx)(Sb.e, {
              disabled: hb,
              onClick: lb,
              children: wb("shaderPack:chooseFolder")
            }), (0, Pb.jsx)(Sb.e, {
              disabled: hb,
              onClick: () => {
                Zb.current.click()
              },
              children: wb("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Eb(bb) {
      const {
        t: ub
      } = (0, ab.K)(), [hb, Ob] = (0, Bb.useState)(!1), [Gb, Ub] = (0, Bb.useState)(null), Lb = (0, Bb.useRef)(!1);
      return {
        loading: hb,
        error: Gb,
        setError: Ub,
        onFiles: async function(hb) {
          if (!Lb.current) {
            Lb.current = !0, Ob(!0), Ub(null);
            try {
              await bb(await Nb(hb))
            } catch (Bb) {
              Bb instanceof Xb ? Ub((0, Ib.k)(ub, Bb.translationKey, Bb.params)) : (console.error("Failed to load the shader pack", Bb), Ub(ub("shaderPack:unexpectedError")))
            } finally {
              Lb.current = !1, Ob(!1)
            }
          }
        }
      }
    }
  },
  6335: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      i: () => Ub,
      k: () => Gb
    });
    var Bb = hb(6344);
    const Ob = [bb => bb.strict ? "strict" : "nonStrict", bb => bb.program];

    function Gb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Bb = {};
      for (const Ob in hb) Bb[Ob] = `\0${Ob}\0`;
      return bb(ub, Bb).replace(/\0(\w+)\0/g, ((bb, ub) => hb[ub]))
    }

    function Ub(bb) {
      return null === bb.file ? null : bb.line > 0 ? `${bb.file}:${bb.line}` : bb.file
    }

    function Lb(bb) {
      const ub = new Map(bb.map((bb => [Yb(bb).join("."), bb])));
      if (0 === ub.size) return [];
      const hb = ab([...ub.values()]);
      return 0 === hb[0].length ? [] : hb
    }

    function Yb(bb) {
      return Ob.map((ub => ub(bb)))
    }
    const Sb = Ob.map((bb => new Set(Bb.f.map(bb)).size));

    function ab(bb) {
      const ub = Ob.map((ub => new Set(bb.map(ub)))),
        hb = ub.reduce(((bb, ub) => bb * ub.size), 1),
        Bb = ub.every(((bb, ub) => 1 === bb.size || bb.size === Sb[ub]));
      if (hb === bb.length && Bb) return [Ob.filter(((bb, hb) => 1 === ub[hb].size)).map((ub => ub(bb[0])))];
      let Gb = null;
      for (let Ub = 0; Ub < Ob.length; Ub++) {
        if (1 === ub[Ub].size) continue;
        const hb = Hb(bb, Ob[Ub]).flatMap(ab);
        (null === Gb || hb.length < Gb.length) && (Gb = hb)
      }
      return Gb
    }

    function Hb(bb, ub) {
      const hb = new Map;
      for (const Ob of bb) {
        var Bb;
        const bb = ub(Ob);
        hb.set(bb, [...null !== (Bb = hb.get(bb)) && void 0 !== Bb ? Bb : [], Ob])
      }
      return [...hb.values()]
    }
  },
  6344: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.i,
      f: () => Ob,
      i: () => Bb.q
    });
    var Bb = hb(6324);
    const Ob = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ub => ({
      strict: bb,
      program: ub
    })))))
  },
  6388: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      forgetShaderPackActiveHint: () => zb,
      isOtherApiVersion: () => jb,
      isShaderPackActive: () => Wb,
      isShaderPackChangePending: () => rb,
      markShaderPackChangePending: () => db,
      pageShaderPackValidationVersion: () => nb,
      reconcileStoredShaderPackHint: () => xb,
      removeShaderPack: () => Kb,
      replaceShaderPack: () => ob,
      saveShaderPack: () => pb,
      shaderPackNeedsCheck: () => Db,
      storedPackOutcome: () => Cb,
      storedShaderPackFiles: () => wb,
      toStoredShaderPack: () => Hb
    });
    var Bb = hb(6324),
      Ob = hb(6344),
      Gb = hb(29),
      Ub = hb(3237),
      Lb = hb(6394),
      Yb = hb(6365);
    const Sb = "shaderPackChangePending";
    let ab = null;

    function Hb(bb, ub, hb) {
      return {
        manifest: bb.manifest,
        files: (0, Bb.v)(bb.files),
        validation: ub,
        ...hb && {
          listing: hb
        }
      }
    }

    function wb(bb) {
      return Object.keys(bb.files).map((ub => ({
        path: ub,
        source: bb.files[ub]
      })))
    }
    let Zb = Promise.resolve();

    function Xb(bb) {
      const ub = Zb.then(bb);
      return Zb = ub.catch((() => {})), ub
    }

    function pb(bb, ub) {
      return Xb((() => Ab(bb, ub)))
    }

    function ob(bb, ub, hb) {
      return Xb((async () => JSON.stringify(await (0, Lb.g)()) === JSON.stringify(bb) && (null === ub ? (await lb(), !0) : Ab(ub, hb))))
    }
    async function Ab(bb, ub) {
      const hb = await Gb.f.setItem(Lb.d, bb);
      return hb && gb(bb, ub), hb
    }
    async function lb() {
      await Gb.f.removeItem(Lb.d), Gb.j.removeItem(Ub.d)
    }

    function Kb() {
      return Xb(lb)
    }

    function Wb(bb, ub) {
      return "active" === Cb(bb, ub).kind
    }

    function Cb(bb, ub) {
      var hb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : jb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) || bb.validation.fromRecheck ? null === ub ? {
        kind: "none",
        reason: "noCompiler"
      } : Db(bb, ub) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : bb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function db() {
      Gb.m.setItem(Sb, performance.timeOrigin)
    }

    function rb() {
      return Gb.m.getItem(Sb) === performance.timeOrigin
    }

    function jb(bb) {
      return !(0, Ob.i)(bb.manifest.apiVersion)
    }

    function nb(bb) {
      return ab ??= bb.VJ((0, Yb.shaderPackTextures)()), ab
    }

    function Db(bb, ub) {
      var hb;
      return (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.headerVersion) !== nb(ub)
    }

    function xb(bb) {
      return Xb((async () => {
        gb(await (0, Lb.g)(!0), bb)
      }))
    }

    function zb() {
      return Xb((async () => {
        Gb.j.removeItem(Ub.d)
      }))
    }

    function gb(bb, ub) {
      Wb(bb, ub) ? Gb.j.setItem(Ub.d, !0) : Gb.j.removeItem(Ub.d)
    }
  },
  6365: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      loadShaderPackTextures: () => Ub,
      shaderPackTextures: () => Lb
    });
    var Bb = hb(6324);
    let Ob = null,
      Gb = null;

    function Ub() {
      return Gb ??= Promise.all([hb.e(70), hb.e(199)]).then((() => hb(39946))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ub,
          textureNameToIndex: hb,
          textureAnimationData: Gb
        } = bb;
        return Ob ??= (0, Bb.j)(hb, Gb, ub), Ob
      })), Gb
    }

    function Lb() {
      if (null === Ob) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ob
    }
  },
  6384: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      d: () => Lb
    });
    var Bb = hb(6388),
      Ob = hb(6365),
      Gb = hb(104);
    const Ub = 100;
    async function Lb(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (hb = navigator.gpu) && void 0 !== hb ? hb : null;
      const Ub = bb.k_(ub, (0, Ob.shaderPackTextures)());
      if (Ub.errors.length > 0) return Sb(bb, Ub.errors, Ub.offInStrict);
      const Lb = await async function(bb) {
        if (!bb) return null;
        try {
          const ub = await (0, Gb.x)(bb);
          return ub ? await ub.requestDevice() : null
        } catch (ub) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ub), null
        }
      }(Bb);
      if (!Lb) return null;
      let Yb = !1;
      Lb.lost.then((() => {
        Yb = !0
      }));
      try {
        const ub = await Promise.all(Ub.validationModules.map((ub => async function(bb, ub, hb) {
          ub.pushErrorScope("validation");
          const Bb = ub.createShaderModule({
              code: hb.code
            }),
            Ob = ub.popErrorScope(),
            {
              messages: Gb
            } = await Bb.getCompilationInfo(),
            Ub = Gb.filter((bb => "error" === bb.type)).map((ub => bb.mapValidationMessage(hb, ub))),
            Lb = await Ob;
          Lb && 0 === Ub.length && Ub.push({
            file: null,
            line: 0,
            message: Lb.message,
            variants: [hb.key]
          });
          return Ub
        }(bb, Lb, ub))));
        return Yb ? null : Sb(bb, bb.Rhb(ub.flat()), Ub.offInStrict)
      } catch (ab) {
        return console.error("Couldn't validate the shader pack on WebGPU.", ab), null
      } finally {
        Lb.destroy()
      }
    }
    async function Yb(bb, ub) {
      var hb;
      if (!(0, Bb.shaderPackNeedsCheck)(bb, ub) || (0, Bb.isOtherApiVersion)(bb)) return bb;
      const Ob = await Lb(ub, (0, Bb.storedShaderPackFiles)(bb));
      if (!Ob) return bb;
      const Gb = !1 === (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) && !bb.validation.fromRecheck,
        Ub = {
          ...bb,
          validation: Gb ? Ob : {
            ...Ob,
            fromRecheck: !0
          }
        };
      return await (0, Bb.replaceShaderPack)(bb, Ub, ub) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ub
    }

    function Sb(bb, ub, hb) {
      return {
        headerVersion: (0, Bb.pageShaderPackValidationVersion)(bb),
        ok: 0 === ub.length,
        errors: ub.slice(0, Ub),
        moreErrors: Math.max(0, ub.length - Ub),
        offInStrict: hb
      }
    }
  },
  6324: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      i: () => Bb,
      j: () => Xb,
      n: () => ab,
      q: () => Ob,
      t: () => Yb,
      v: () => Sb,
      z: () => Hb
    });
    const Bb = 5;

    function Ob(bb) {
      return bb === Bb
    }
    const Gb = 262144,
      Ub = 256,
      Lb = 256;

    function Yb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ub = [];
      for (const [hb, Bb] of Object.entries(bb)) {
        if ("string" !== typeof Bb) return `${hb} isn't text.`;
        ub.push({
          path: hb,
          source: Bb
        })
      }
      return ub.sort(((bb, ub) => ab(bb.path, ub.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Ub) return `The pack has more than ${Ub} .wgsl files.`;
          const ub = new Set;
          for (const {
              path: hb
            }
            of bb) {
            const bb = wb(hb);
            if (null !== bb) return bb;
            if (ub.has(hb)) return `The pack has two files at ${hb}.`;
            ub.add(hb)
          }
          return Hb(bb) > Gb ? `The pack's .wgsl files are over ${Gb/1024} KB in total.` : null
        }(ub) ?? ub
    }

    function Sb(bb) {
      const ub = {};
      for (const hb of bb) ub[hb.path] = hb.source;
      return ub
    }

    function ab(bb, ub) {
      return bb < ub ? -1 : bb > ub ? 1 : 0
    }

    function Hb(bb) {
      const ub = new TextEncoder;
      let hb = 0;
      for (const {
          source: Bb
        }
        of bb) hb += ub.encode(Bb).byteLength;
      return hb
    }

    function wb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Lb) return `A file path is over ${Lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Zb = /^(.*)\[rot\[([1-4])$/;

    function Xb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Bb = new Map;
      ub.forEach(((bb, ub) => {
        let {
          numAnimStates: hb,
          animStartIdx: Ob
        } = bb;
        for (let Gb = 1; Gb < hb; Gb++) Bb.set(Ob + Gb - 1, ub)
      }));
      const Ob = Object.entries(bb),
        Gb = new Map;
      for (const [pb, ob] of Ob) {
        const bb = Zb.exec(pb);
        "1" === bb?.[2] && Gb.set(bb[1], ob + 1)
      }
      const Ub = bb => {
          const ub = Zb.exec(bb);
          return ub && Gb.has(ub[1]) ? {
            root: ub[1],
            rotation: Number(ub[2]) - 1
          } : null
        },
        Lb = new Set(Ob.map((bb => {
          let [ub] = bb;
          return Ub(ub)?.root ?? ub
        }))),
        Yb = (bb, hb) => {
          const Bb = bb.replace(/_?0$/, "");
          return (ub[hb]?.numAnimStates ?? 0) > 1 && !Lb.has(Bb) ? Bb : bb
        },
        Sb = new Map;
      for (const [Zb, pb] of Ob) Sb.set(pb, Yb(Ub(Zb)?.root ?? Zb, pb));
      const ab = Ob.reduce(((bb, ub) => {
          let [, hb] = ub;
          return Math.max(bb, hb + 1)
        }), 0),
        Hb = Array.from({
          length: ab
        }, ((bb, ub) => ({
          id: ub + 1,
          rotation: 0
        }))),
        wb = new Map,
        Xb = new Map;
      for (const [Zb, pb] of Ob) {
        const bb = Ub(Zb),
          ub = Bb.get(pb);
        if (void 0 !== ub) {
          const hb = Sb.get(ub);
          Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "frame"
          }), bb && !Xb.has(bb.root) && Xb.set(bb.root, {
            name: bb.root,
            texture: hb,
            kind: "frame"
          });
          continue
        }
        const hb = Sb.get(pb),
          Ob = bb?.root ?? Zb;
        if (hb !== Ob && Xb.set(Ob, {
            name: Ob,
            texture: hb,
            kind: "frame"
          }), bb) {
          const ub = Gb.get(bb.root);
          Hb[pb] = {
            id: ub,
            rotation: bb.rotation
          }, wb.set(hb, ub), Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "rotation"
          })
        } else wb.set(hb, pb + 1)
      }
      for (const Zb of wb.keys()) Xb.delete(Zb);
      for (const [Zb, pb] of hb) {
        const bb = wb.get(pb);
        void 0 === bb || wb.has(Zb) || (wb.set(Zb, bb), Xb.delete(Zb))
      }
      return {
        named: [...wb].sort(((bb, ub) => {
          let [hb] = bb, [Bb] = ub;
          return hb < Bb ? -1 : hb > Bb ? 1 : 0
        })).map((bb => {
          let [ub, hb] = bb;
          return {
            name: ub,
            id: hb
          }
        })),
        aliases: [...Xb.values()],
        layers: Hb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);