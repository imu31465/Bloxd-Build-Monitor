export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6219: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab = Ub(6225),
      Mb = Ub(1023);
    const Tb = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Eb(bb) {
      let {
        diagnostics: ab,
        more: Ub = 0,
        t: Eb
      } = bb;
      return (0, Mb.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [ab.map(((bb, ab) => {
          const Ub = (0, Ab.f)(bb),
            Yb = function(bb, ab) {
              const Ub = (0, Ab.e)(null !== bb && void 0 !== bb ? bb : []);
              if (0 === Ub.length) return null;
              return Ub.map((bb => bb.map((bb => ab(Tb[bb]))).join(", "))).join("; ")
            }(bb.variants, Eb);
          return (0, Mb.jsxs)("li", {
            children: [Ub && (0, Mb.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Ub
            }), bb.message, Yb && (0, Mb.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Eb("shaderPack:onlyIn", {
                variants: Yb
              })
            })]
          }, ab)
        })), Ub > 0 && (0, Mb.jsx)("li", {
          children: Eb("shaderPack:moreErrors", {
            count: String(Ub)
          })
        })]
      })
    }
  },
  6237: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => tb,
      g: () => wb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(4638),
      Yb = Ub(1254),
      Bb = Ub(990),
      eb = Ub(1352),
      vb = Ub(1134),
      Lb = Ub(101),
      Pb = Ub(6212),
      Xb = Ub(6233);
    class jb extends Error {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(bb, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = bb, this.params = ab
      }
    }
    const Rb = 1024,
      kb = 101010256,
      yb = 33639248,
      Zb = 67324752,
      Db = 22,
      zb = 46,
      xb = 30,
      ib = 65535,
      fb = 65535,
      mb = 4294967295,
      pb = 0,
      Nb = 8,
      Wb = new TextDecoder;

    function Hb(bb) {
      const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
        Ub = function(bb) {
          const ab = bb.byteLength - Db;
          for (let Ub = ab; Ub >= Math.max(0, ab - ib); Ub--)
            if (bb.getUint32(Ub, !0) === kb && Ub + Db + bb.getUint16(Ub + 20, !0) <= bb.byteLength) return Ub;
          throw new jb("shaderPack:loadNotZip")
        }(ab),
        Ab = ab.getUint16(Ub + 8, !0),
        Mb = ab.getUint16(Ub + 10, !0),
        Tb = ab.getUint32(Ub + 12, !0),
        Eb = ab.getUint32(Ub + 16, !0);
      if (Mb === fb || Tb === mb || Eb === mb) throw hb();
      if (0 !== ab.getUint16(Ub + 4, !0) || 0 !== ab.getUint16(Ub + 6, !0) || Ab !== Mb) throw new jb("shaderPack:loadSplitZip");
      if (Mb > Rb) throw new jb("shaderPack:loadTooManyZipEntries", {
        count: String(Rb)
      });
      const Yb = Eb + Tb;
      if (Yb > Ub) throw Fb();
      const Bb = [];
      let eb = Eb;
      for (let vb = 0; vb < Mb; vb++) {
        if (eb + zb > Yb || ab.getUint32(eb, !0) !== yb) throw Fb();
        const Ub = ab.getUint16(eb + 8, !0),
          Ab = ab.getUint16(eb + 10, !0),
          Mb = ab.getUint32(eb + 20, !0),
          Tb = ab.getUint32(eb + 24, !0),
          vb = ab.getUint16(eb + 28, !0),
          Lb = ab.getUint16(eb + 30, !0),
          Pb = ab.getUint16(eb + 32, !0),
          Xb = ab.getUint32(eb + 42, !0),
          jb = eb + zb;
        if (eb = jb + vb + Lb + Pb, eb > Yb) throw Fb();
        if (Mb === mb || Tb === mb || Xb === mb) throw hb();
        const Rb = Wb.decode(bb.subarray(jb, jb + vb)).replace(/\\/g, "/");
        Rb.endsWith("/") || Bb.push({
          path: Rb,
          method: Ab,
          encrypted: 0 !== (1 & Ub),
          compressedSize: Mb,
          dataOffset: db(ab, Xb, Mb, Eb)
        })
      }
      return Bb
    }
    async function Ib(bb, ab, Ub) {
      if (ab.encrypted) throw new jb("shaderPack:loadEncrypted", {
        path: ab.path
      });
      if (ab.method === pb) return ab.compressedSize > Ub ? null : bb.subarray(ab.dataOffset, ab.dataOffset + ab.compressedSize);
      if (ab.method === Nb) return async function(bb, ab, Ub) {
        const Ab = new Blob([bb]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Mb = [];
        let Tb = 0;
        try {
          for (;;) {
            const {
              done: bb,
              value: Ub
            } = await Ab.read();
            if (bb) break;
            if (Tb += Ub.byteLength, Tb > ab) return await Ab.cancel(), null;
            Mb.push(Ub)
          }
        } catch (Bb) {
          throw new jb("shaderPack:loadDecompressFailed", {
            path: Ub
          }, {
            cause: Bb
          })
        }
        const Eb = new Uint8Array(Tb);
        let Yb = 0;
        for (const eb of Mb) Eb.set(eb, Yb), Yb += eb.byteLength;
        return Eb
      }(bb.slice(ab.dataOffset, ab.dataOffset + ab.compressedSize), Ub, ab.path);
      throw new jb("shaderPack:loadUnsupportedCompression", {
        path: ab.path,
        method: String(ab.method)
      })
    }

    function db(bb, ab, Ub, Ab) {
      if (ab + xb > Ab || bb.getUint32(ab, !0) !== Zb) throw Fb();
      const Mb = ab + xb + bb.getUint16(ab + 26, !0) + bb.getUint16(ab + 28, !0);
      if (Mb + Ub > Ab) throw Fb();
      return Mb
    }

    function Fb() {
      return new jb("shaderPack:loadZipDamaged")
    }

    function hb() {
      return new jb("shaderPack:loadZip64")
    }
    const Gb = 33554432,
      Qb = 65536;
    async function qb(bb) {
      if (1 === bb.length && bb[0].name.toLowerCase().endsWith(".zip")) {
        const ab = bb[0];
        if (ab.size > Gb) throw new jb("shaderPack:loadZipTooBig", {
          megabytes: String(Gb / 1048576)
        });
        return async function(bb) {
          return ub(Hb(bb).map((ab => ({
            path: ab.path,
            read: Ub => Ib(bb, ab, Ub)
          }))))
        }(new Uint8Array(await ab.arrayBuffer()))
      }
      return ub(bb.map((bb => ({
        path: rb(bb),
        read: ab => async function(bb, ab) {
          return bb.size > ab ? null : new Uint8Array(await bb.arrayBuffer())
        }(bb, ab)
      }))))
    }
    async function ub(bb) {
      const ab = function(bb) {
          const ab = bb.length > 0 ? bb[0].path.indexOf("/") : -1;
          if (-1 === ab) return bb;
          const Ub = bb[0].path.slice(0, ab + 1);
          if (!bb.every((bb => bb.path.startsWith(Ub)))) return bb;
          return bb.map((bb => ({
            ...bb,
            path: bb.path.slice(Ub.length)
          })))
        }(bb.filter((bb => ! function(bb) {
          const ab = bb.split("/"),
            Ub = ab[ab.length - 1];
          return ab.includes("__MACOSX") || Ub.startsWith("._") || ".DS_Store" === Ub
        }(bb.path)))),
        Ub = ab.filter((bb => "pack.json" === bb.path.toLowerCase()));
      if (0 === Ub.length) throw new jb("shaderPack:loadNoManifest");
      if (Ub.length > 1) throw new jb("shaderPack:loadDuplicateManifest");
      const Ab = Ub[0],
        Mb = await Ab.read(Qb);
      if (null === Mb) throw new jb("shaderPack:loadManifestTooBig", {
        kilobytes: String(Qb / 1024)
      });
      const Tb = function(bb) {
          let ab;
          try {
            ab = JSON.parse(bb)
          } catch (Yb) {
            throw new jb("shaderPack:loadManifestNotJson", {
              error: Yb.message
            }, {
              cause: Yb
            })
          }
          if ("object" !== typeof ab || null === ab || Array.isArray(ab)) throw new jb("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Ub,
            name: Ab,
            author: Mb,
            description: Tb,
            keepCircleShadows: Eb
          } = ab;
          if (void 0 === Ub) throw new jb("shaderPack:loadNoApiVersion", {
            version: String(Xb.b)
          });
          if (!(0, Xb.i)(Ub)) throw new jb("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Ub),
            version: String(Xb.b)
          });
          if ("string" !== typeof Ab || "" === Ab.trim()) throw new jb("shaderPack:loadNoName");
          if (void 0 !== Mb && null !== Mb && "string" !== typeof Mb) throw new jb("shaderPack:loadAuthorNotString");
          if (void 0 !== Tb && null !== Tb && "string" !== typeof Tb) throw new jb("shaderPack:loadDescriptionNotString");
          if (void 0 !== Eb && "boolean" !== typeof Eb) throw new jb("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Ub,
            name: Ab,
            author: "string" === typeof Mb ? Mb : null,
            description: "string" === typeof Tb && "" !== Tb.trim() ? Tb : null,
            keepCircleShadows: !0 === Eb
          }
        }(Kb(Mb, Ab.path)),
        Eb = ab.filter((bb => bb.path.toLowerCase().endsWith(".wgsl"))).sort(((bb, ab) => (0, Pb.m)(bb.path, ab.path)));
      if (0 === Eb.length) throw new jb("shaderPack:loadNoWgsl");
      if (Eb.length > Pb.c) throw new jb("shaderPack:loadTooManyWgsl", {
        count: String(Pb.c)
      });
      const Yb = Eb.find(((bb, ab) => ab > 0 && bb.path === Eb[ab - 1].path));
      if (Yb) throw new jb("shaderPack:loadDuplicatePath", {
        path: Yb.path
      });
      const Bb = [];
      let eb = Pb.f;
      for (const vb of Eb) {
        const bb = await vb.read(eb);
        if (null === bb) throw new jb("shaderPack:loadSourceTooBig", {
          kilobytes: String(Pb.f / 1024)
        });
        eb -= bb.byteLength, Bb.push({
          path: vb.path,
          source: Kb(bb, vb.path)
        })
      }
      return {
        manifest: Tb,
        files: Bb
      }
    }

    function rb(bb) {
      return (bb.webkitRelativePath || bb.path || bb.name).replace(/^\.?\//, "")
    }

    function Kb(bb, ab) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(bb)
      } catch (Ub) {
        throw new jb("shaderPack:loadNotUtf8", {
          path: ab
        }, {
          cause: Ub
        })
      }
    }
    var ob = Ub(6225),
      lb = Ub(1023);

    function tb(bb) {
      let {
        busy: ab,
        disabled: Ub,
        onFiles: Mb
      } = bb;
      const {
        t: Pb
      } = (0, vb.A)(), Xb = (0, Ab.useRef)(null), jb = !(0, Lb.isMobile)(), {
        getRootProps: Rb,
        getInputProps: kb,
        isDragActive: yb,
        open: Zb
      } = (0, Eb.b)({
        onDrop: Mb,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Ub
      });
      return (0, lb.jsxs)("div", {
        ...Rb({
          className: Tb()("ShaderPackDropZone", {
            ActiveDrag: yb,
            Disabled: Ub
          })
        }),
        children: [(0, lb.jsx)("input", {
          ...kb({
            webkitdirectory: "true"
          })
        }), (0, lb.jsx)("input", {
          ref: Xb,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(bb) {
            const ab = Array.from(bb.target.files);
            bb.target.value = "", Mb(ab)
          }
        }), ab && (0, lb.jsx)(Yb.b, {}), !ab && (0, lb.jsxs)(lb.Fragment, {
          children: [(0, lb.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, lb.jsx)(Bb.e, {
              name: "up-from-bracket"
            })
          }), (0, lb.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Pb(jb ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, lb.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [jb && (0, lb.jsx)(eb.g, {
              disabled: Ub,
              onClick: Zb,
              children: Pb("shaderPack:chooseFolder")
            }), (0, lb.jsx)(eb.g, {
              disabled: Ub,
              onClick: () => {
                Xb.current.click()
              },
              children: Pb("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function wb(bb) {
      const {
        t: ab
      } = (0, vb.A)(), [Ub, Mb] = (0, Ab.useState)(!1), [Tb, Eb] = (0, Ab.useState)(null), Yb = (0, Ab.useRef)(!1);
      return {
        loading: Ub,
        error: Tb,
        setError: Eb,
        onFiles: async function(Ub) {
          if (!Yb.current) {
            Yb.current = !0, Mb(!0), Eb(null);
            try {
              await bb(await qb(Ub))
            } catch (Ab) {
              Ab instanceof jb ? Eb((0, ob.h)(ab, Ab.translationKey, Ab.params)) : (console.error("Failed to load the shader pack", Ab), Eb(ab("shaderPack:unexpectedError")))
            } finally {
              Yb.current = !1, Mb(!1)
            }
          }
        }
      }
    }
  },
  6225: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      f: () => Eb,
      h: () => Tb
    });
    var Ab = Ub(6233);
    const Mb = [bb => bb.strict ? "strict" : "nonStrict", bb => bb.program];

    function Tb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ab = {};
      for (const Mb in Ub) Ab[Mb] = `\0${Mb}\0`;
      return bb(ab, Ab).replace(/\0(\w+)\0/g, ((bb, ab) => Ub[ab]))
    }

    function Eb(bb) {
      return null === bb.file ? null : bb.line > 0 ? `${bb.file}:${bb.line}` : bb.file
    }

    function Yb(bb) {
      const ab = new Map(bb.map((bb => [Bb(bb).join("."), bb])));
      if (0 === ab.size) return [];
      const Ub = vb([...ab.values()]);
      return 0 === Ub[0].length ? [] : Ub
    }

    function Bb(bb) {
      return Mb.map((ab => ab(bb)))
    }
    const eb = Mb.map((bb => new Set(Ab.f.map(bb)).size));

    function vb(bb) {
      const ab = Mb.map((ab => new Set(bb.map(ab)))),
        Ub = ab.reduce(((bb, ab) => bb * ab.size), 1),
        Ab = ab.every(((bb, ab) => 1 === bb.size || bb.size === eb[ab]));
      if (Ub === bb.length && Ab) return [Mb.filter(((bb, Ub) => 1 === ab[Ub].size)).map((ab => ab(bb[0])))];
      let Tb = null;
      for (let Eb = 0; Eb < Mb.length; Eb++) {
        if (1 === ab[Eb].size) continue;
        const Ub = Lb(bb, Mb[Eb]).flatMap(vb);
        (null === Tb || Ub.length < Tb.length) && (Tb = Ub)
      }
      return Tb
    }

    function Lb(bb, ab) {
      const Ub = new Map;
      for (const Mb of bb) {
        var Ab;
        const bb = ab(Mb);
        Ub.set(bb, [...null !== (Ab = Ub.get(bb)) && void 0 !== Ab ? Ab : [], Mb])
      }
      return [...Ub.values()]
    }
  },
  6233: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.g,
      f: () => Mb,
      i: () => Ab.q
    });
    var Ab = Ub(6212);
    const Mb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ab => ({
      strict: bb,
      program: ab
    })))))
  },
  6285: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      forgetShaderPackActiveHint: () => Hb,
      isOtherApiVersion: () => mb,
      isShaderPackActive: () => zb,
      isShaderPackChangePending: () => fb,
      markShaderPackChangePending: () => ib,
      pageShaderPackValidationVersion: () => pb,
      reconcileStoredShaderPackHint: () => Wb,
      removeShaderPack: () => Db,
      replaceShaderPack: () => kb,
      saveShaderPack: () => Rb,
      shaderPackNeedsCheck: () => Nb,
      storedPackOutcome: () => xb,
      storedShaderPackFiles: () => Pb,
      toStoredShaderPack: () => Lb
    });
    var Ab = Ub(6212),
      Mb = Ub(6233),
      Tb = Ub(31),
      Eb = Ub(3132),
      Yb = Ub(6294),
      Bb = Ub(6262);
    const eb = "shaderPackChangePending";
    let vb = null;

    function Lb(bb, ab, Ub) {
      return {
        manifest: bb.manifest,
        files: (0, Ab.w)(bb.files),
        validation: ab,
        ...Ub && {
          listing: Ub
        }
      }
    }

    function Pb(bb) {
      return Object.keys(bb.files).map((ab => ({
        path: ab,
        source: bb.files[ab]
      })))
    }
    let Xb = Promise.resolve();

    function jb(bb) {
      const ab = Xb.then(bb);
      return Xb = ab.catch((() => {})), ab
    }

    function Rb(bb, ab) {
      return jb((() => yb(bb, ab)))
    }

    function kb(bb, ab, Ub) {
      return jb((async () => JSON.stringify(await (0, Yb.f)()) === JSON.stringify(bb) && (null === ab ? (await Zb(), !0) : yb(ab, Ub))))
    }
    async function yb(bb, ab) {
      const Ub = await Tb.c.setItem(Yb.b, bb);
      return Ub && Ib(bb, ab), Ub
    }
    async function Zb() {
      await Tb.c.removeItem(Yb.b), Tb.f.removeItem(Eb.d)
    }

    function Db() {
      return jb(Zb)
    }

    function zb(bb, ab) {
      return "active" === xb(bb, ab).kind
    }

    function xb(bb, ab) {
      var Ub;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : mb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) || bb.validation.fromRecheck ? null === ab ? {
        kind: "none",
        reason: "noCompiler"
      } : Nb(bb, ab) ? {
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

    function ib() {
      Tb.j.setItem(eb, performance.timeOrigin)
    }

    function fb() {
      return Tb.j.getItem(eb) === performance.timeOrigin
    }

    function mb(bb) {
      return !(0, Mb.i)(bb.manifest.apiVersion)
    }

    function pb(bb) {
      return vb ??= bb.mN((0, Bb.shaderPackTextures)()), vb
    }

    function Nb(bb, ab) {
      var Ub;
      return (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.headerVersion) !== pb(ab)
    }

    function Wb(bb) {
      return jb((async () => {
        Ib(await (0, Yb.f)(!0), bb)
      }))
    }

    function Hb() {
      return jb((async () => {
        Tb.f.removeItem(Eb.d)
      }))
    }

    function Ib(bb, ab) {
      zb(bb, ab) ? Tb.f.setItem(Eb.d, !0) : Tb.f.removeItem(Eb.d)
    }
  },
  6262: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadShaderPackTextures: () => Eb,
      shaderPackTextures: () => Yb
    });
    var Ab = Ub(6212);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Tb ??= Promise.all([Ub.e(69), Ub.e(198)]).then((() => Ub(39620))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ab,
          textureNameToIndex: Ub,
          textureAnimationData: Tb
        } = bb;
        return Mb ??= (0, Ab.i)(Ub, Tb, ab), Mb
      })), Tb
    }

    function Yb() {
      if (null === Mb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Mb
    }
  },
  6281: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => Yb
    });
    var Ab = Ub(6285),
      Mb = Ub(6262),
      Tb = Ub(119);
    const Eb = 100;
    async function Yb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ub = navigator.gpu) && void 0 !== Ub ? Ub : null;
      const Eb = bb.i6(ab, (0, Mb.shaderPackTextures)());
      if (Eb.errors.length > 0) return eb(bb, Eb.errors, Eb.offInStrict);
      const Yb = await async function(bb) {
        if (!bb) return null;
        try {
          const ab = await (0, Tb.y)(bb);
          return ab ? await ab.requestDevice() : null
        } catch (ab) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ab), null
        }
      }(Ab);
      if (!Yb) return null;
      let Bb = !1;
      Yb.lost.then((() => {
        Bb = !0
      }));
      try {
        const ab = await Promise.all(Eb.validationModules.map((ab => async function(bb, ab, Ub) {
          ab.pushErrorScope("validation");
          const Ab = ab.createShaderModule({
              code: Ub.code
            }),
            Mb = ab.popErrorScope(),
            {
              messages: Tb
            } = await Ab.getCompilationInfo(),
            Eb = Tb.filter((bb => "error" === bb.type)).map((ab => bb.mapValidationMessage(Ub, ab))),
            Yb = await Mb;
          Yb && 0 === Eb.length && Eb.push({
            file: null,
            line: 0,
            message: Yb.message,
            variants: [Ub.key]
          });
          return Eb
        }(bb, Yb, ab))));
        return Bb ? null : eb(bb, bb.xUb(ab.flat()), Eb.offInStrict)
      } catch (vb) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vb), null
      } finally {
        Yb.destroy()
      }
    }
    async function Bb(bb, ab) {
      var Ub;
      if (!(0, Ab.shaderPackNeedsCheck)(bb, ab) || (0, Ab.isOtherApiVersion)(bb)) return bb;
      const Mb = await Yb(ab, (0, Ab.storedShaderPackFiles)(bb));
      if (!Mb) return bb;
      const Tb = !1 === (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) && !bb.validation.fromRecheck,
        Eb = {
          ...bb,
          validation: Tb ? Mb : {
            ...Mb,
            fromRecheck: !0
          }
        };
      return await (0, Ab.replaceShaderPack)(bb, Eb, ab) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Eb
    }

    function eb(bb, ab, Ub) {
      return {
        headerVersion: (0, Ab.pageShaderPackValidationVersion)(bb),
        ok: 0 === ab.length,
        errors: ab.slice(0, Eb),
        moreErrors: Math.max(0, ab.length - Eb),
        offInStrict: Ub
      }
    }
  },
  6212: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      f: () => Tb,
      g: () => Ab,
      i: () => jb,
      m: () => vb,
      q: () => Mb,
      u: () => Bb,
      w: () => eb,
      y: () => Lb
    });
    const Ab = 5;

    function Mb(bb) {
      return bb === Ab
    }
    const Tb = 262144,
      Eb = 256,
      Yb = 256;

    function Bb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ab = [];
      for (const [Ub, Ab] of Object.entries(bb)) {
        if ("string" !== typeof Ab) return `${Ub} isn't text.`;
        ab.push({
          path: Ub,
          source: Ab
        })
      }
      return ab.sort(((bb, ab) => vb(bb.path, ab.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Eb) return `The pack has more than ${Eb} .wgsl files.`;
          const ab = new Set;
          for (const {
              path: Ub
            }
            of bb) {
            const bb = Pb(Ub);
            if (null !== bb) return bb;
            if (ab.has(Ub)) return `The pack has two files at ${Ub}.`;
            ab.add(Ub)
          }
          return Lb(bb) > Tb ? `The pack's .wgsl files are over ${Tb/1024} KB in total.` : null
        }(ab) ?? ab
    }

    function eb(bb) {
      const ab = {};
      for (const Ub of bb) ab[Ub.path] = Ub.source;
      return ab
    }

    function vb(bb, ab) {
      return bb < ab ? -1 : bb > ab ? 1 : 0
    }

    function Lb(bb) {
      const ab = new TextEncoder;
      let Ub = 0;
      for (const {
          source: Ab
        }
        of bb) Ub += ab.encode(Ab).byteLength;
      return Ub
    }

    function Pb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Yb) return `A file path is over ${Yb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Xb = /^(.*)\[rot\[([1-4])$/;

    function jb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ab = new Map;
      ab.forEach(((bb, ab) => {
        let {
          numAnimStates: Ub,
          animStartIdx: Mb
        } = bb;
        for (let Tb = 1; Tb < Ub; Tb++) Ab.set(Mb + Tb - 1, ab)
      }));
      const Mb = Object.entries(bb),
        Tb = new Map;
      for (const [Rb, kb] of Mb) {
        const bb = Xb.exec(Rb);
        "1" === bb?.[2] && Tb.set(bb[1], kb + 1)
      }
      const Eb = bb => {
          const ab = Xb.exec(bb);
          return ab && Tb.has(ab[1]) ? {
            root: ab[1],
            rotation: Number(ab[2]) - 1
          } : null
        },
        Yb = new Set(Mb.map((bb => {
          let [ab] = bb;
          return Eb(ab)?.root ?? ab
        }))),
        Bb = (bb, Ub) => {
          const Ab = bb.replace(/_?0$/, "");
          return (ab[Ub]?.numAnimStates ?? 0) > 1 && !Yb.has(Ab) ? Ab : bb
        },
        eb = new Map;
      for (const [Xb, Rb] of Mb) eb.set(Rb, Bb(Eb(Xb)?.root ?? Xb, Rb));
      const vb = Mb.reduce(((bb, ab) => {
          let [, Ub] = ab;
          return Math.max(bb, Ub + 1)
        }), 0),
        Lb = Array.from({
          length: vb
        }, ((bb, ab) => ({
          id: ab + 1,
          rotation: 0
        }))),
        Pb = new Map,
        jb = new Map;
      for (const [Xb, Rb] of Mb) {
        const bb = Eb(Xb),
          ab = Ab.get(Rb);
        if (void 0 !== ab) {
          const Ub = eb.get(ab);
          jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "frame"
          }), bb && !jb.has(bb.root) && jb.set(bb.root, {
            name: bb.root,
            texture: Ub,
            kind: "frame"
          });
          continue
        }
        const Ub = eb.get(Rb),
          Mb = bb?.root ?? Xb;
        if (Ub !== Mb && jb.set(Mb, {
            name: Mb,
            texture: Ub,
            kind: "frame"
          }), bb) {
          const ab = Tb.get(bb.root);
          Lb[Rb] = {
            id: ab,
            rotation: bb.rotation
          }, Pb.set(Ub, ab), jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "rotation"
          })
        } else Pb.set(Ub, Rb + 1)
      }
      for (const Xb of Pb.keys()) jb.delete(Xb);
      for (const [Xb, Rb] of Ub) {
        const bb = Pb.get(Rb);
        void 0 === bb || Pb.has(Xb) || (Pb.set(Xb, bb), jb.delete(Xb))
      }
      return {
        named: [...Pb].sort(((bb, ab) => {
          let [Ub] = bb, [Ab] = ab;
          return Ub < Ab ? -1 : Ub > Ab ? 1 : 0
        })).map((bb => {
          let [ab, Ub] = bb;
          return {
            name: ab,
            id: Ub
          }
        })),
        aliases: [...jb.values()],
        layers: Lb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);