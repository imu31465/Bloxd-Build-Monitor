export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6258: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(6260),
      Wb = sb(1087);
    const ab = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Tb(bb) {
      let {
        diagnostics: cb,
        more: sb = 0,
        t: Tb
      } = bb;
      return (0, Wb.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [cb.map(((bb, cb) => {
          const sb = (0, kb.f)(bb),
            Ub = function(bb, cb) {
              const sb = (0, kb.d)(null !== bb && void 0 !== bb ? bb : []);
              if (0 === sb.length) return null;
              return sb.map((bb => bb.map((bb => cb(ab[bb]))).join(", "))).join("; ")
            }(bb.variants, Tb);
          return (0, Wb.jsxs)("li", {
            children: [sb && (0, Wb.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: sb
            }), bb.message, Ub && (0, Wb.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Tb("shaderPack:onlyIn", {
                variants: Ub
              })
            })]
          }, cb)
        })), sb > 0 && (0, Wb.jsx)("li", {
          children: Tb("shaderPack:moreErrors", {
            count: String(sb)
          })
        })]
      })
    }
  },
  6273: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ab,
      h: () => wb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(4665),
      Ub = sb(1327),
      Ib = sb(1039),
      Hb = sb(1431),
      fb = sb(1197),
      Mb = sb(117),
      Xb = sb(6250),
      nb = sb(6269);
    class mb extends Error {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(bb, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = bb, this.params = cb
      }
    }
    const lb = 1024,
      Qb = 101010256,
      eb = 33639248,
      Cb = 67324752,
      Nb = 22,
      Vb = 46,
      Lb = 30,
      ub = 65535,
      Yb = 65535,
      hb = 4294967295,
      Jb = 0,
      gb = 8,
      Bb = new TextDecoder;

    function tb(bb) {
      const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
        sb = function(bb) {
          const cb = bb.byteLength - Nb;
          for (let sb = cb; sb >= Math.max(0, cb - ub); sb--)
            if (bb.getUint32(sb, !0) === Qb && sb + Nb + bb.getUint16(sb + 20, !0) <= bb.byteLength) return sb;
          throw new mb("shaderPack:loadNotZip")
        }(cb),
        kb = cb.getUint16(sb + 8, !0),
        Wb = cb.getUint16(sb + 10, !0),
        ab = cb.getUint32(sb + 12, !0),
        Tb = cb.getUint32(sb + 16, !0);
      if (Wb === Yb || ab === hb || Tb === hb) throw Eb();
      if (0 !== cb.getUint16(sb + 4, !0) || 0 !== cb.getUint16(sb + 6, !0) || kb !== Wb) throw new mb("shaderPack:loadSplitZip");
      if (Wb > lb) throw new mb("shaderPack:loadTooManyZipEntries", {
        count: String(lb)
      });
      const Ub = Tb + ab;
      if (Ub > sb) throw Db();
      const Ib = [];
      let Hb = Tb;
      for (let fb = 0; fb < Wb; fb++) {
        if (Hb + Vb > Ub || cb.getUint32(Hb, !0) !== eb) throw Db();
        const sb = cb.getUint16(Hb + 8, !0),
          kb = cb.getUint16(Hb + 10, !0),
          Wb = cb.getUint32(Hb + 20, !0),
          ab = cb.getUint32(Hb + 24, !0),
          fb = cb.getUint16(Hb + 28, !0),
          Mb = cb.getUint16(Hb + 30, !0),
          Xb = cb.getUint16(Hb + 32, !0),
          nb = cb.getUint32(Hb + 42, !0),
          mb = Hb + Vb;
        if (Hb = mb + fb + Mb + Xb, Hb > Ub) throw Db();
        if (Wb === hb || ab === hb || nb === hb) throw Eb();
        const lb = Bb.decode(bb.subarray(mb, mb + fb)).replace(/\\/g, "/");
        lb.endsWith("/") || Ib.push({
          path: lb,
          method: kb,
          encrypted: 0 !== (1 & sb),
          compressedSize: Wb,
          dataOffset: Pb(cb, nb, Wb, Tb)
        })
      }
      return Ib
    }
    async function yb(bb, cb, sb) {
      if (cb.encrypted) throw new mb("shaderPack:loadEncrypted", {
        path: cb.path
      });
      if (cb.method === Jb) return cb.compressedSize > sb ? null : bb.subarray(cb.dataOffset, cb.dataOffset + cb.compressedSize);
      if (cb.method === gb) return async function(bb, cb, sb) {
        const kb = new Blob([bb]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Wb = [];
        let ab = 0;
        try {
          for (;;) {
            const {
              done: bb,
              value: sb
            } = await kb.read();
            if (bb) break;
            if (ab += sb.byteLength, ab > cb) return await kb.cancel(), null;
            Wb.push(sb)
          }
        } catch (Ib) {
          throw new mb("shaderPack:loadDecompressFailed", {
            path: sb
          }, {
            cause: Ib
          })
        }
        const Tb = new Uint8Array(ab);
        let Ub = 0;
        for (const Hb of Wb) Tb.set(Hb, Ub), Ub += Hb.byteLength;
        return Tb
      }(bb.slice(cb.dataOffset, cb.dataOffset + cb.compressedSize), sb, cb.path);
      throw new mb("shaderPack:loadUnsupportedCompression", {
        path: cb.path,
        method: String(cb.method)
      })
    }

    function Pb(bb, cb, sb, kb) {
      if (cb + Lb > kb || bb.getUint32(cb, !0) !== Cb) throw Db();
      const Wb = cb + Lb + bb.getUint16(cb + 26, !0) + bb.getUint16(cb + 28, !0);
      if (Wb + sb > kb) throw Db();
      return Wb
    }

    function Db() {
      return new mb("shaderPack:loadZipDamaged")
    }

    function Eb() {
      return new mb("shaderPack:loadZip64")
    }
    const ib = 33554432,
      Ob = 65536;
    async function Gb(bb) {
      if (1 === bb.length && bb[0].name.toLowerCase().endsWith(".zip")) {
        const cb = bb[0];
        if (cb.size > ib) throw new mb("shaderPack:loadZipTooBig", {
          megabytes: String(ib / 1048576)
        });
        return async function(bb) {
          return Kb(tb(bb).map((cb => ({
            path: cb.path,
            read: sb => yb(bb, cb, sb)
          }))))
        }(new Uint8Array(await cb.arrayBuffer()))
      }
      return Kb(bb.map((bb => ({
        path: Zb(bb),
        read: cb => async function(bb, cb) {
          return bb.size > cb ? null : new Uint8Array(await bb.arrayBuffer())
        }(bb, cb)
      }))))
    }
    async function Kb(bb) {
      const cb = function(bb) {
          const cb = bb.length > 0 ? bb[0].path.indexOf("/") : -1;
          if (-1 === cb) return bb;
          const sb = bb[0].path.slice(0, cb + 1);
          if (!bb.every((bb => bb.path.startsWith(sb)))) return bb;
          return bb.map((bb => ({
            ...bb,
            path: bb.path.slice(sb.length)
          })))
        }(bb.filter((bb => ! function(bb) {
          const cb = bb.split("/"),
            sb = cb[cb.length - 1];
          return cb.includes("__MACOSX") || sb.startsWith("._") || ".DS_Store" === sb
        }(bb.path)))),
        sb = cb.filter((bb => "pack.json" === bb.path.toLowerCase()));
      if (0 === sb.length) throw new mb("shaderPack:loadNoManifest");
      if (sb.length > 1) throw new mb("shaderPack:loadDuplicateManifest");
      const kb = sb[0],
        Wb = await kb.read(Ob);
      if (null === Wb) throw new mb("shaderPack:loadManifestTooBig", {
        kilobytes: String(Ob / 1024)
      });
      const ab = function(bb) {
          let cb;
          try {
            cb = JSON.parse(bb)
          } catch (Ub) {
            throw new mb("shaderPack:loadManifestNotJson", {
              error: Ub.message
            }, {
              cause: Ub
            })
          }
          if ("object" !== typeof cb || null === cb || Array.isArray(cb)) throw new mb("shaderPack:loadManifestNotObject");
          const {
            apiVersion: sb,
            name: kb,
            author: Wb,
            description: ab,
            keepCircleShadows: Tb
          } = cb;
          if (void 0 === sb) throw new mb("shaderPack:loadNoApiVersion", {
            version: String(nb.e)
          });
          if (!(0, nb.k)(sb)) throw new mb("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(sb),
            version: String(nb.e)
          });
          if ("string" !== typeof kb || "" === kb.trim()) throw new mb("shaderPack:loadNoName");
          if (void 0 !== Wb && null !== Wb && "string" !== typeof Wb) throw new mb("shaderPack:loadAuthorNotString");
          if (void 0 !== ab && null !== ab && "string" !== typeof ab) throw new mb("shaderPack:loadDescriptionNotString");
          if (void 0 !== Tb && "boolean" !== typeof Tb) throw new mb("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: sb,
            name: kb,
            author: "string" === typeof Wb ? Wb : null,
            description: "string" === typeof ab && "" !== ab.trim() ? ab : null,
            keepCircleShadows: !0 === Tb
          }
        }(zb(Wb, kb.path)),
        Tb = cb.filter((bb => bb.path.toLowerCase().endsWith(".wgsl"))).sort(((bb, cb) => (0, Xb.o)(bb.path, cb.path)));
      if (0 === Tb.length) throw new mb("shaderPack:loadNoWgsl");
      if (Tb.length > Xb.e) throw new mb("shaderPack:loadTooManyWgsl", {
        count: String(Xb.e)
      });
      const Ub = Tb.find(((bb, cb) => cb > 0 && bb.path === Tb[cb - 1].path));
      if (Ub) throw new mb("shaderPack:loadDuplicatePath", {
        path: Ub.path
      });
      const Ib = [];
      let Hb = Xb.h;
      for (const fb of Tb) {
        const bb = await fb.read(Hb);
        if (null === bb) throw new mb("shaderPack:loadSourceTooBig", {
          kilobytes: String(Xb.h / 1024)
        });
        Hb -= bb.byteLength, Ib.push({
          path: fb.path,
          source: zb(bb, fb.path)
        })
      }
      return {
        manifest: ab,
        files: Ib
      }
    }

    function Zb(bb) {
      return (bb.webkitRelativePath || bb.path || bb.name).replace(/^\.?\//, "")
    }

    function zb(bb, cb) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(bb)
      } catch (sb) {
        throw new mb("shaderPack:loadNotUtf8", {
          path: cb
        }, {
          cause: sb
        })
      }
    }
    var qb = sb(6260),
      db = sb(1087);

    function Ab(bb) {
      let {
        busy: cb,
        disabled: sb,
        onFiles: Wb
      } = bb;
      const {
        t: Xb
      } = (0, fb.E)(), nb = (0, kb.useRef)(null), mb = !(0, Mb.isMobile)(), {
        getRootProps: lb,
        getInputProps: Qb,
        isDragActive: eb,
        open: Cb
      } = (0, Tb.c)({
        onDrop: Wb,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: sb
      });
      return (0, db.jsxs)("div", {
        ...lb({
          className: ab()("ShaderPackDropZone", {
            ActiveDrag: eb,
            Disabled: sb
          })
        }),
        children: [(0, db.jsx)("input", {
          ...Qb({
            webkitdirectory: "true"
          })
        }), (0, db.jsx)("input", {
          ref: nb,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(bb) {
            const cb = Array.from(bb.target.files);
            bb.target.value = "", Wb(cb)
          }
        }), cb && (0, db.jsx)(Ub.d, {}), !cb && (0, db.jsxs)(db.Fragment, {
          children: [(0, db.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, db.jsx)(Ib.b, {
              name: "up-from-bracket"
            })
          }), (0, db.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Xb(mb ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, db.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [mb && (0, db.jsx)(Hb.d, {
              disabled: sb,
              onClick: Cb,
              children: Xb("shaderPack:chooseFolder")
            }), (0, db.jsx)(Hb.d, {
              disabled: sb,
              onClick: () => {
                nb.current.click()
              },
              children: Xb("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function wb(bb) {
      const {
        t: cb
      } = (0, fb.E)(), [sb, Wb] = (0, kb.useState)(!1), [ab, Tb] = (0, kb.useState)(null), Ub = (0, kb.useRef)(!1);
      return {
        loading: sb,
        error: ab,
        setError: Tb,
        onFiles: async function(sb) {
          if (!Ub.current) {
            Ub.current = !0, Wb(!0), Tb(null);
            try {
              await bb(await Gb(sb))
            } catch (kb) {
              kb instanceof mb ? Tb((0, qb.g)(cb, kb.translationKey, kb.params)) : (console.error("Failed to load the shader pack", kb), Tb(cb("shaderPack:unexpectedError")))
            } finally {
              Ub.current = !1, Wb(!1)
            }
          }
        }
      }
    }
  },
  6260: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => Tb,
      g: () => ab
    });
    var kb = sb(6269);
    const Wb = [bb => bb.strict ? "strict" : "nonStrict", bb => bb.program];

    function ab(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const kb = {};
      for (const Wb in sb) kb[Wb] = `\0${Wb}\0`;
      return bb(cb, kb).replace(/\0(\w+)\0/g, ((bb, cb) => sb[cb]))
    }

    function Tb(bb) {
      return null === bb.file ? null : bb.line > 0 ? `${bb.file}:${bb.line}` : bb.file
    }

    function Ub(bb) {
      const cb = new Map(bb.map((bb => [Ib(bb).join("."), bb])));
      if (0 === cb.size) return [];
      const sb = fb([...cb.values()]);
      return 0 === sb[0].length ? [] : sb
    }

    function Ib(bb) {
      return Wb.map((cb => cb(bb)))
    }
    const Hb = Wb.map((bb => new Set(kb.h.map(bb)).size));

    function fb(bb) {
      const cb = Wb.map((cb => new Set(bb.map(cb)))),
        sb = cb.reduce(((bb, cb) => bb * cb.size), 1),
        kb = cb.every(((bb, cb) => 1 === bb.size || bb.size === Hb[cb]));
      if (sb === bb.length && kb) return [Wb.filter(((bb, sb) => 1 === cb[sb].size)).map((cb => cb(bb[0])))];
      let ab = null;
      for (let Tb = 0; Tb < Wb.length; Tb++) {
        if (1 === cb[Tb].size) continue;
        const sb = Mb(bb, Wb[Tb]).flatMap(fb);
        (null === ab || sb.length < ab.length) && (ab = sb)
      }
      return ab
    }

    function Mb(bb, cb) {
      const sb = new Map;
      for (const Wb of bb) {
        var kb;
        const bb = cb(Wb);
        sb.set(bb, [...null !== (kb = sb.get(bb)) && void 0 !== kb ? kb : [], Wb])
      }
      return [...sb.values()]
    }
  },
  6269: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.j,
      h: () => Wb,
      k: () => kb.p
    });
    var kb = sb(6250);
    const Wb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((cb => ({
      strict: bb,
      program: cb
    })))))
  },
  6321: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      forgetShaderPackActiveHint: () => tb,
      isOtherApiVersion: () => hb,
      isShaderPackActive: () => Vb,
      isShaderPackChangePending: () => Yb,
      markShaderPackChangePending: () => ub,
      pageShaderPackValidationVersion: () => Jb,
      reconcileStoredShaderPackHint: () => Bb,
      removeShaderPack: () => Nb,
      replaceShaderPack: () => Qb,
      saveShaderPack: () => lb,
      shaderPackNeedsCheck: () => gb,
      storedPackOutcome: () => Lb,
      storedShaderPackFiles: () => Xb,
      toStoredShaderPack: () => Mb
    });
    var kb = sb(6250),
      Wb = sb(6269),
      ab = sb(37),
      Tb = sb(3222),
      Ub = sb(6328),
      Ib = sb(6301);
    const Hb = "shaderPackChangePending";
    let fb = null;

    function Mb(bb, cb, sb) {
      return {
        manifest: bb.manifest,
        files: (0, kb.u)(bb.files),
        validation: cb,
        ...sb && {
          listing: sb
        }
      }
    }

    function Xb(bb) {
      return Object.keys(bb.files).map((cb => ({
        path: cb,
        source: bb.files[cb]
      })))
    }
    let nb = Promise.resolve();

    function mb(bb) {
      const cb = nb.then(bb);
      return nb = cb.catch((() => {})), cb
    }

    function lb(bb, cb) {
      return mb((() => eb(bb, cb)))
    }

    function Qb(bb, cb, sb) {
      return mb((async () => JSON.stringify(await (0, Ub.d)()) === JSON.stringify(bb) && (null === cb ? (await Cb(), !0) : eb(cb, sb))))
    }
    async function eb(bb, cb) {
      const sb = await ab.d.setItem(Ub.b, bb);
      return sb && yb(bb, cb), sb
    }
    async function Cb() {
      await ab.d.removeItem(Ub.b), ab.h.removeItem(Tb.c)
    }

    function Nb() {
      return mb(Cb)
    }

    function Vb(bb, cb) {
      return "active" === Lb(bb, cb).kind
    }

    function Lb(bb, cb) {
      var sb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : hb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.ok) || bb.validation.fromRecheck ? null === cb ? {
        kind: "none",
        reason: "noCompiler"
      } : gb(bb, cb) ? {
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

    function ub() {
      ab.i.setItem(Hb, performance.timeOrigin)
    }

    function Yb() {
      return ab.i.getItem(Hb) === performance.timeOrigin
    }

    function hb(bb) {
      return !(0, Wb.k)(bb.manifest.apiVersion)
    }

    function Jb(bb) {
      return fb ??= bb.lY((0, Ib.shaderPackTextures)()), fb
    }

    function gb(bb, cb) {
      var sb;
      return (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.headerVersion) !== Jb(cb)
    }

    function Bb(bb) {
      return mb((async () => {
        yb(await (0, Ub.d)(!0), bb)
      }))
    }

    function tb() {
      return mb((async () => {
        ab.h.removeItem(Tb.c)
      }))
    }

    function yb(bb, cb) {
      Vb(bb, cb) ? ab.h.setItem(Tb.c, !0) : ab.h.removeItem(Tb.c)
    }
  },
  6301: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadShaderPackTextures: () => Tb,
      shaderPackTextures: () => Ub
    });
    var kb = sb(6250);
    let Wb = null,
      ab = null;

    function Tb() {
      return ab ??= Promise.all([sb.e(69), sb.e(198)]).then((() => sb(39908))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cb,
          textureNameToIndex: sb,
          textureAnimationData: ab
        } = bb;
        return Wb ??= (0, kb.l)(sb, ab, cb), Wb
      })), ab
    }

    function Ub() {
      if (null === Wb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wb
    }
  },
  6314: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      d: () => Ub
    });
    var kb = sb(6321),
      Wb = sb(6301),
      ab = sb(145);
    const Tb = 100;
    async function Ub(bb, cb) {
      var sb;
      let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (sb = navigator.gpu) && void 0 !== sb ? sb : null;
      const Tb = bb.N9(cb, (0, Wb.shaderPackTextures)());
      if (Tb.errors.length > 0) return Hb(bb, Tb.errors, Tb.offInStrict);
      const Ub = await async function(bb) {
        if (!bb) return null;
        try {
          const cb = await (0, ab.w)(bb);
          return cb ? await cb.requestDevice() : null
        } catch (cb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", cb), null
        }
      }(kb);
      if (!Ub) return null;
      let Ib = !1;
      Ub.lost.then((() => {
        Ib = !0
      }));
      try {
        const cb = await Promise.all(Tb.validationModules.map((cb => async function(bb, cb, sb) {
          cb.pushErrorScope("validation");
          const kb = cb.createShaderModule({
              code: sb.code
            }),
            Wb = cb.popErrorScope(),
            {
              messages: ab
            } = await kb.getCompilationInfo(),
            Tb = ab.filter((bb => "error" === bb.type)).map((cb => bb.mapValidationMessage(sb, cb))),
            Ub = await Wb;
          Ub && 0 === Tb.length && Tb.push({
            file: null,
            line: 0,
            message: Ub.message,
            variants: [sb.key]
          });
          return Tb
        }(bb, Ub, cb))));
        return Ib ? null : Hb(bb, bb.Nsb(cb.flat()), Tb.offInStrict)
      } catch (fb) {
        return console.error("Couldn't validate the shader pack on WebGPU.", fb), null
      } finally {
        Ub.destroy()
      }
    }
    async function Ib(bb, cb) {
      var sb;
      if (!(0, kb.shaderPackNeedsCheck)(bb, cb) || (0, kb.isOtherApiVersion)(bb)) return bb;
      const Wb = await Ub(cb, (0, kb.storedShaderPackFiles)(bb));
      if (!Wb) return bb;
      const ab = !1 === (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.ok) && !bb.validation.fromRecheck,
        Tb = {
          ...bb,
          validation: ab ? Wb : {
            ...Wb,
            fromRecheck: !0
          }
        };
      return await (0, kb.replaceShaderPack)(bb, Tb, cb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Tb
    }

    function Hb(bb, cb, sb) {
      return {
        headerVersion: (0, kb.pageShaderPackValidationVersion)(bb),
        ok: 0 === cb.length,
        errors: cb.slice(0, Tb),
        moreErrors: Math.max(0, cb.length - Tb),
        offInStrict: sb
      }
    }
  },
  6250: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab,
      j: () => kb,
      l: () => mb,
      o: () => fb,
      p: () => Wb,
      t: () => Ib,
      u: () => Hb,
      w: () => Mb
    });
    const kb = 5;

    function Wb(bb) {
      return bb === kb
    }
    const ab = 262144,
      Tb = 256,
      Ub = 256;

    function Ib(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const cb = [];
      for (const [sb, kb] of Object.entries(bb)) {
        if ("string" !== typeof kb) return `${sb} isn't text.`;
        cb.push({
          path: sb,
          source: kb
        })
      }
      return cb.sort(((bb, cb) => fb(bb.path, cb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Tb) return `The pack has more than ${Tb} .wgsl files.`;
          const cb = new Set;
          for (const {
              path: sb
            }
            of bb) {
            const bb = Xb(sb);
            if (null !== bb) return bb;
            if (cb.has(sb)) return `The pack has two files at ${sb}.`;
            cb.add(sb)
          }
          return Mb(bb) > ab ? `The pack's .wgsl files are over ${ab/1024} KB in total.` : null
        }(cb) ?? cb
    }

    function Hb(bb) {
      const cb = {};
      for (const sb of bb) cb[sb.path] = sb.source;
      return cb
    }

    function fb(bb, cb) {
      return bb < cb ? -1 : bb > cb ? 1 : 0
    }

    function Mb(bb) {
      const cb = new TextEncoder;
      let sb = 0;
      for (const {
          source: kb
        }
        of bb) sb += cb.encode(kb).byteLength;
      return sb
    }

    function Xb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Ub) return `A file path is over ${Ub} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const nb = /^(.*)\[rot\[([1-4])$/;

    function mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const kb = new Map;
      cb.forEach(((bb, cb) => {
        let {
          numAnimStates: sb,
          animStartIdx: Wb
        } = bb;
        for (let ab = 1; ab < sb; ab++) kb.set(Wb + ab - 1, cb)
      }));
      const Wb = Object.entries(bb),
        ab = new Map;
      for (const [lb, Qb] of Wb) {
        const bb = nb.exec(lb);
        "1" === bb?.[2] && ab.set(bb[1], Qb + 1)
      }
      const Tb = bb => {
          const cb = nb.exec(bb);
          return cb && ab.has(cb[1]) ? {
            root: cb[1],
            rotation: Number(cb[2]) - 1
          } : null
        },
        Ub = new Set(Wb.map((bb => {
          let [cb] = bb;
          return Tb(cb)?.root ?? cb
        }))),
        Ib = (bb, sb) => {
          const kb = bb.replace(/_?0$/, "");
          return (cb[sb]?.numAnimStates ?? 0) > 1 && !Ub.has(kb) ? kb : bb
        },
        Hb = new Map;
      for (const [nb, lb] of Wb) Hb.set(lb, Ib(Tb(nb)?.root ?? nb, lb));
      const fb = Wb.reduce(((bb, cb) => {
          let [, sb] = cb;
          return Math.max(bb, sb + 1)
        }), 0),
        Mb = Array.from({
          length: fb
        }, ((bb, cb) => ({
          id: cb + 1,
          rotation: 0
        }))),
        Xb = new Map,
        mb = new Map;
      for (const [nb, lb] of Wb) {
        const bb = Tb(nb),
          cb = kb.get(lb);
        if (void 0 !== cb) {
          const sb = Hb.get(cb);
          mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "frame"
          }), bb && !mb.has(bb.root) && mb.set(bb.root, {
            name: bb.root,
            texture: sb,
            kind: "frame"
          });
          continue
        }
        const sb = Hb.get(lb),
          Wb = bb?.root ?? nb;
        if (sb !== Wb && mb.set(Wb, {
            name: Wb,
            texture: sb,
            kind: "frame"
          }), bb) {
          const cb = ab.get(bb.root);
          Mb[lb] = {
            id: cb,
            rotation: bb.rotation
          }, Xb.set(sb, cb), mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "rotation"
          })
        } else Xb.set(sb, lb + 1)
      }
      for (const nb of Xb.keys()) mb.delete(nb);
      for (const [nb, lb] of sb) {
        const bb = Xb.get(lb);
        void 0 === bb || Xb.has(nb) || (Xb.set(nb, bb), mb.delete(nb))
      }
      return {
        named: [...Xb].sort(((bb, cb) => {
          let [sb] = bb, [kb] = cb;
          return sb < kb ? -1 : sb > kb ? 1 : 0
        })).map((bb => {
          let [cb, sb] = bb;
          return {
            name: cb,
            id: sb
          }
        })),
        aliases: [...mb.values()],
        layers: Mb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);