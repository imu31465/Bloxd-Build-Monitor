export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6459: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(6464),
      Nd = kd(1103);
    const Wd = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Pd(dd) {
      let {
        diagnostics: Jd,
        more: kd = 0,
        t: Pd
      } = dd;
      return (0, Nd.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Jd.map(((dd, Jd) => {
          const kd = (0, pd.g)(dd),
            Zd = function(dd, Jd) {
              const kd = (0, pd.e)(null !== dd && void 0 !== dd ? dd : []);
              if (0 === kd.length) return null;
              return kd.map((dd => dd.map((dd => Jd(Wd[dd]))).join(", "))).join("; ")
            }(dd.variants, Pd);
          return (0, Nd.jsxs)("li", {
            children: [kd && (0, Nd.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: kd
            }), dd.message, Zd && (0, Nd.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Pd("shaderPack:onlyIn", {
                variants: Zd
              })
            })]
          }, Jd)
        })), kd > 0 && (0, Nd.jsx)("li", {
          children: Pd("shaderPack:moreErrors", {
            count: String(kd)
          })
        })]
      })
    }
  },
  6472: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => cd,
      h: () => hd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(4841),
      Zd = kd(1359),
      gd = kd(1059),
      Cd = kd(1461),
      Kd = kd(1211),
      od = kd(95),
      ld = kd(6457),
      Qd = kd(6466);
    class Ld extends Error {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(dd, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = dd, this.params = Jd
      }
    }
    const Od = 1024,
      ed = 101010256,
      Rd = 33639248,
      Id = 67324752,
      Gd = 22,
      vd = 46,
      xd = 30,
      qd = 65535,
      Bd = 65535,
      sd = 4294967295,
      ad = 0,
      Md = 8,
      Fd = new TextDecoder;

    function Yd(dd) {
      const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength),
        kd = function(dd) {
          const Jd = dd.byteLength - Gd;
          for (let kd = Jd; kd >= Math.max(0, Jd - qd); kd--)
            if (dd.getUint32(kd, !0) === ed && kd + Gd + dd.getUint16(kd + 20, !0) <= dd.byteLength) return kd;
          throw new Ld("shaderPack:loadNotZip")
        }(Jd),
        pd = Jd.getUint16(kd + 8, !0),
        Nd = Jd.getUint16(kd + 10, !0),
        Wd = Jd.getUint32(kd + 12, !0),
        Pd = Jd.getUint32(kd + 16, !0);
      if (Nd === Bd || Wd === sd || Pd === sd) throw jd();
      if (0 !== Jd.getUint16(kd + 4, !0) || 0 !== Jd.getUint16(kd + 6, !0) || pd !== Nd) throw new Ld("shaderPack:loadSplitZip");
      if (Nd > Od) throw new Ld("shaderPack:loadTooManyZipEntries", {
        count: String(Od)
      });
      const Zd = Pd + Wd;
      if (Zd > kd) throw Sd();
      const gd = [];
      let Cd = Pd;
      for (let Kd = 0; Kd < Nd; Kd++) {
        if (Cd + vd > Zd || Jd.getUint32(Cd, !0) !== Rd) throw Sd();
        const kd = Jd.getUint16(Cd + 8, !0),
          pd = Jd.getUint16(Cd + 10, !0),
          Nd = Jd.getUint32(Cd + 20, !0),
          Wd = Jd.getUint32(Cd + 24, !0),
          Kd = Jd.getUint16(Cd + 28, !0),
          od = Jd.getUint16(Cd + 30, !0),
          ld = Jd.getUint16(Cd + 32, !0),
          Qd = Jd.getUint32(Cd + 42, !0),
          Ld = Cd + vd;
        if (Cd = Ld + Kd + od + ld, Cd > Zd) throw Sd();
        if (Nd === sd || Wd === sd || Qd === sd) throw jd();
        const Od = Fd.decode(dd.subarray(Ld, Ld + Kd)).replace(/\\/g, "/");
        Od.endsWith("/") || gd.push({
          path: Od,
          method: pd,
          encrypted: 0 !== (1 & kd),
          compressedSize: Nd,
          dataOffset: bd(Jd, Qd, Nd, Pd)
        })
      }
      return gd
    }
    async function md(dd, Jd, kd) {
      if (Jd.encrypted) throw new Ld("shaderPack:loadEncrypted", {
        path: Jd.path
      });
      if (Jd.method === ad) return Jd.compressedSize > kd ? null : dd.subarray(Jd.dataOffset, Jd.dataOffset + Jd.compressedSize);
      if (Jd.method === Md) return async function(dd, Jd, kd) {
        const pd = new Blob([dd]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Nd = [];
        let Wd = 0;
        try {
          for (;;) {
            const {
              done: dd,
              value: kd
            } = await pd.read();
            if (dd) break;
            if (Wd += kd.byteLength, Wd > Jd) return await pd.cancel(), null;
            Nd.push(kd)
          }
        } catch (gd) {
          throw new Ld("shaderPack:loadDecompressFailed", {
            path: kd
          }, {
            cause: gd
          })
        }
        const Pd = new Uint8Array(Wd);
        let Zd = 0;
        for (const Cd of Nd) Pd.set(Cd, Zd), Zd += Cd.byteLength;
        return Pd
      }(dd.slice(Jd.dataOffset, Jd.dataOffset + Jd.compressedSize), kd, Jd.path);
      throw new Ld("shaderPack:loadUnsupportedCompression", {
        path: Jd.path,
        method: String(Jd.method)
      })
    }

    function bd(dd, Jd, kd, pd) {
      if (Jd + xd > pd || dd.getUint32(Jd, !0) !== Id) throw Sd();
      const Nd = Jd + xd + dd.getUint16(Jd + 26, !0) + dd.getUint16(Jd + 28, !0);
      if (Nd + kd > pd) throw Sd();
      return Nd
    }

    function Sd() {
      return new Ld("shaderPack:loadZipDamaged")
    }

    function jd() {
      return new Ld("shaderPack:loadZip64")
    }
    const Xd = 33554432,
      fd = 65536;
    async function nd(dd) {
      if (1 === dd.length && dd[0].name.toLowerCase().endsWith(".zip")) {
        const Jd = dd[0];
        if (Jd.size > Xd) throw new Ld("shaderPack:loadZipTooBig", {
          megabytes: String(Xd / 1048576)
        });
        return async function(dd) {
          return Ud(Yd(dd).map((Jd => ({
            path: Jd.path,
            read: kd => md(dd, Jd, kd)
          }))))
        }(new Uint8Array(await Jd.arrayBuffer()))
      }
      return Ud(dd.map((dd => ({
        path: yd(dd),
        read: Jd => async function(dd, Jd) {
          return dd.size > Jd ? null : new Uint8Array(await dd.arrayBuffer())
        }(dd, Jd)
      }))))
    }
    async function Ud(dd) {
      const Jd = function(dd) {
          const Jd = dd.length > 0 ? dd[0].path.indexOf("/") : -1;
          if (-1 === Jd) return dd;
          const kd = dd[0].path.slice(0, Jd + 1);
          if (!dd.every((dd => dd.path.startsWith(kd)))) return dd;
          return dd.map((dd => ({
            ...dd,
            path: dd.path.slice(kd.length)
          })))
        }(dd.filter((dd => ! function(dd) {
          const Jd = dd.split("/"),
            kd = Jd[Jd.length - 1];
          return Jd.includes("__MACOSX") || kd.startsWith("._") || ".DS_Store" === kd
        }(dd.path)))),
        kd = Jd.filter((dd => "pack.json" === dd.path.toLowerCase()));
      if (0 === kd.length) throw new Ld("shaderPack:loadNoManifest");
      if (kd.length > 1) throw new Ld("shaderPack:loadDuplicateManifest");
      const pd = kd[0],
        Nd = await pd.read(fd);
      if (null === Nd) throw new Ld("shaderPack:loadManifestTooBig", {
        kilobytes: String(fd / 1024)
      });
      const Wd = function(dd) {
          let Jd;
          try {
            Jd = JSON.parse(dd)
          } catch (Zd) {
            throw new Ld("shaderPack:loadManifestNotJson", {
              error: Zd.message
            }, {
              cause: Zd
            })
          }
          if ("object" !== typeof Jd || null === Jd || Array.isArray(Jd)) throw new Ld("shaderPack:loadManifestNotObject");
          const {
            apiVersion: kd,
            name: pd,
            author: Nd,
            description: Wd,
            keepCircleShadows: Pd
          } = Jd;
          if (void 0 === kd) throw new Ld("shaderPack:loadNoApiVersion", {
            version: String(Qd.e)
          });
          if (!(0, Qd.m)(kd)) throw new Ld("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(kd),
            version: String(Qd.e)
          });
          if ("string" !== typeof pd || "" === pd.trim()) throw new Ld("shaderPack:loadNoName");
          if (void 0 !== Nd && null !== Nd && "string" !== typeof Nd) throw new Ld("shaderPack:loadAuthorNotString");
          if (void 0 !== Wd && null !== Wd && "string" !== typeof Wd) throw new Ld("shaderPack:loadDescriptionNotString");
          if (void 0 !== Pd && "boolean" !== typeof Pd) throw new Ld("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: kd,
            name: pd,
            author: "string" === typeof Nd ? Nd : null,
            description: "string" === typeof Wd && "" !== Wd.trim() ? Wd : null,
            keepCircleShadows: !0 === Pd
          }
        }(Dd(Nd, pd.path)),
        Pd = Jd.filter((dd => dd.path.toLowerCase().endsWith(".wgsl"))).sort(((dd, Jd) => (0, ld.r)(dd.path, Jd.path)));
      if (0 === Pd.length) throw new Ld("shaderPack:loadNoWgsl");
      if (Pd.length > ld.d) throw new Ld("shaderPack:loadTooManyWgsl", {
        count: String(ld.d)
      });
      const Zd = Pd.find(((dd, Jd) => Jd > 0 && dd.path === Pd[Jd - 1].path));
      if (Zd) throw new Ld("shaderPack:loadDuplicatePath", {
        path: Zd.path
      });
      const gd = [];
      let Cd = ld.h;
      for (const Kd of Pd) {
        const dd = await Kd.read(Cd);
        if (null === dd) throw new Ld("shaderPack:loadSourceTooBig", {
          kilobytes: String(ld.h / 1024)
        });
        Cd -= dd.byteLength, gd.push({
          path: Kd.path,
          source: Dd(dd, Kd.path)
        })
      }
      return {
        manifest: Wd,
        files: gd
      }
    }

    function yd(dd) {
      return (dd.webkitRelativePath || dd.path || dd.name).replace(/^\.?\//, "")
    }

    function Dd(dd, Jd) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(dd)
      } catch (kd) {
        throw new Ld("shaderPack:loadNotUtf8", {
          path: Jd
        }, {
          cause: kd
        })
      }
    }
    var Td = kd(6464),
      Ed = kd(1103);

    function cd(dd) {
      let {
        busy: Jd,
        disabled: kd,
        onFiles: Nd
      } = dd;
      const {
        t: ld
      } = (0, Kd.B)(), Qd = (0, pd.useRef)(null), Ld = !(0, od.isMobile)(), {
        getRootProps: Od,
        getInputProps: ed,
        isDragActive: Rd,
        open: Id
      } = (0, Pd.c)({
        onDrop: Nd,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: kd
      });
      return (0, Ed.jsxs)("div", {
        ...Od({
          className: Wd()("ShaderPackDropZone", {
            ActiveDrag: Rd,
            Disabled: kd
          })
        }),
        children: [(0, Ed.jsx)("input", {
          ...ed({
            webkitdirectory: "true"
          })
        }), (0, Ed.jsx)("input", {
          ref: Qd,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(dd) {
            const Jd = Array.from(dd.target.files);
            dd.target.value = "", Nd(Jd)
          }
        }), Jd && (0, Ed.jsx)(Zd.b, {}), !Jd && (0, Ed.jsxs)(Ed.Fragment, {
          children: [(0, Ed.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Ed.jsx)(gd.e, {
              name: "up-from-bracket"
            })
          }), (0, Ed.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: ld(Ld ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Ed.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [Ld && (0, Ed.jsx)(Cd.d, {
              disabled: kd,
              onClick: Id,
              children: ld("shaderPack:chooseFolder")
            }), (0, Ed.jsx)(Cd.d, {
              disabled: kd,
              onClick: () => {
                Qd.current.click()
              },
              children: ld("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function hd(dd) {
      const {
        t: Jd
      } = (0, Kd.B)(), [kd, Nd] = (0, pd.useState)(!1), [Wd, Pd] = (0, pd.useState)(null), Zd = (0, pd.useRef)(!1);
      return {
        loading: kd,
        error: Wd,
        setError: Pd,
        onFiles: async function(kd) {
          if (!Zd.current) {
            Zd.current = !0, Nd(!0), Pd(null);
            try {
              await dd(await nd(kd))
            } catch (pd) {
              pd instanceof Ld ? Pd((0, Td.j)(Jd, pd.translationKey, pd.params)) : (console.error("Failed to load the shader pack", pd), Pd(Jd("shaderPack:unexpectedError")))
            } finally {
              Zd.current = !1, Nd(!1)
            }
          }
        }
      }
    }
  },
  6464: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => Pd,
      j: () => Wd
    });
    var pd = kd(6466);
    const Nd = [dd => dd.strict ? "strict" : "nonStrict", dd => dd.program];

    function Wd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pd = {};
      for (const Nd in kd) pd[Nd] = `\0${Nd}\0`;
      return dd(Jd, pd).replace(/\0(\w+)\0/g, ((dd, Jd) => kd[Jd]))
    }

    function Pd(dd) {
      return null === dd.file ? null : dd.line > 0 ? `${dd.file}:${dd.line}` : dd.file
    }

    function Zd(dd) {
      const Jd = new Map(dd.map((dd => [gd(dd).join("."), dd])));
      if (0 === Jd.size) return [];
      const kd = Kd([...Jd.values()]);
      return 0 === kd[0].length ? [] : kd
    }

    function gd(dd) {
      return Nd.map((Jd => Jd(dd)))
    }
    const Cd = Nd.map((dd => new Set(pd.i.map(dd)).size));

    function Kd(dd) {
      const Jd = Nd.map((Jd => new Set(dd.map(Jd)))),
        kd = Jd.reduce(((dd, Jd) => dd * Jd.size), 1),
        pd = Jd.every(((dd, Jd) => 1 === dd.size || dd.size === Cd[Jd]));
      if (kd === dd.length && pd) return [Nd.filter(((dd, kd) => 1 === Jd[kd].size)).map((Jd => Jd(dd[0])))];
      let Wd = null;
      for (let Pd = 0; Pd < Nd.length; Pd++) {
        if (1 === Jd[Pd].size) continue;
        const kd = od(dd, Nd[Pd]).flatMap(Kd);
        (null === Wd || kd.length < Wd.length) && (Wd = kd)
      }
      return Wd
    }

    function od(dd, Jd) {
      const kd = new Map;
      for (const Nd of dd) {
        var pd;
        const dd = Jd(Nd);
        kd.set(dd, [...null !== (pd = kd.get(dd)) && void 0 !== pd ? pd : [], Nd])
      }
      return [...kd.values()]
    }
  },
  6466: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.l,
      i: () => Nd,
      m: () => pd.t
    });
    var pd = kd(6457);
    const Nd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Jd => ({
      strict: dd,
      program: Jd
    })))))
  },
  6526: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      forgetShaderPackActiveHint: () => Yd,
      isOtherApiVersion: () => sd,
      isShaderPackActive: () => vd,
      isShaderPackChangePending: () => Bd,
      markShaderPackChangePending: () => qd,
      pageShaderPackValidationVersion: () => ad,
      reconcileStoredShaderPackHint: () => Fd,
      removeShaderPack: () => Gd,
      replaceShaderPack: () => ed,
      saveShaderPack: () => Od,
      shaderPackNeedsCheck: () => Md,
      storedPackOutcome: () => xd,
      storedShaderPackFiles: () => ld,
      toStoredShaderPack: () => od
    });
    var pd = kd(6457),
      Nd = kd(6466),
      Wd = kd(33),
      Pd = kd(3282),
      Zd = kd(6534),
      gd = kd(6496);
    const Cd = "shaderPackChangePending";
    let Kd = null;

    function od(dd, Jd, kd) {
      return {
        manifest: dd.manifest,
        files: (0, pd.v)(dd.files),
        validation: Jd,
        ...kd && {
          listing: kd
        }
      }
    }

    function ld(dd) {
      return Object.keys(dd.files).map((Jd => ({
        path: Jd,
        source: dd.files[Jd]
      })))
    }
    let Qd = Promise.resolve();

    function Ld(dd) {
      const Jd = Qd.then(dd);
      return Qd = Jd.catch((() => {})), Jd
    }

    function Od(dd, Jd) {
      return Ld((() => Rd(dd, Jd)))
    }

    function ed(dd, Jd, kd) {
      return Ld((async () => JSON.stringify(await (0, Zd.g)()) === JSON.stringify(dd) && (null === Jd ? (await Id(), !0) : Rd(Jd, kd))))
    }
    async function Rd(dd, Jd) {
      const kd = await Wd.f.setItem(Zd.c, dd);
      return kd && md(dd, Jd), kd
    }
    async function Id() {
      await Wd.f.removeItem(Zd.c), Wd.i.removeItem(Pd.b)
    }

    function Gd() {
      return Ld(Id)
    }

    function vd(dd, Jd) {
      return "active" === xd(dd, Jd).kind
    }

    function xd(dd, Jd) {
      var kd;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : sd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) || dd.validation.fromRecheck ? null === Jd ? {
        kind: "none",
        reason: "noCompiler"
      } : Md(dd, Jd) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : dd.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function qd() {
      Wd.k.setItem(Cd, performance.timeOrigin)
    }

    function Bd() {
      return Wd.k.getItem(Cd) === performance.timeOrigin
    }

    function sd(dd) {
      return !(0, Nd.m)(dd.manifest.apiVersion)
    }

    function ad(dd) {
      return Kd ??= dd.rY((0, gd.shaderPackTextures)()), Kd
    }

    function Md(dd, Jd) {
      var kd;
      return (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.headerVersion) !== ad(Jd)
    }

    function Fd(dd) {
      return Ld((async () => {
        md(await (0, Zd.g)(!0), dd)
      }))
    }

    function Yd() {
      return Ld((async () => {
        Wd.i.removeItem(Pd.b)
      }))
    }

    function md(dd, Jd) {
      vd(dd, Jd) ? Wd.i.setItem(Pd.b, !0) : Wd.i.removeItem(Pd.b)
    }
  },
  6496: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      loadShaderPackTextures: () => Pd,
      shaderPackTextures: () => Zd
    });
    var pd = kd(6457);
    let Nd = null,
      Wd = null;

    function Pd() {
      return Wd ??= Promise.all([kd.e(70), kd.e(199)]).then((() => kd(40477))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Jd,
          textureNameToIndex: kd,
          textureAnimationData: Wd
        } = dd;
        return Nd ??= (0, pd.o)(kd, Wd, Jd), Nd
      })), Wd
    }

    function Zd() {
      if (null === Nd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Nd
    }
  },
  6522: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Zd
    });
    var pd = kd(6526),
      Nd = kd(6496),
      Wd = kd(111);
    const Pd = 100;
    async function Zd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (kd = navigator.gpu) && void 0 !== kd ? kd : null;
      const Pd = dd.Kdd(Jd, (0, Nd.shaderPackTextures)());
      if (Pd.errors.length > 0) return Cd(dd, Pd.errors, Pd.offInStrict);
      const Zd = await async function(dd) {
        if (!dd) return null;
        try {
          const Jd = await (0, Wd.p)(dd);
          return Jd ? await Jd.requestDevice() : null
        } catch (Jd) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Jd), null
        }
      }(pd);
      if (!Zd) return null;
      let gd = !1;
      Zd.lost.then((() => {
        gd = !0
      }));
      try {
        const Jd = await Promise.all(Pd.validationModules.map((Jd => async function(dd, Jd, kd) {
          Jd.pushErrorScope("validation");
          const pd = Jd.createShaderModule({
              code: kd.code
            }),
            Nd = Jd.popErrorScope(),
            {
              messages: Wd
            } = await pd.getCompilationInfo(),
            Pd = Wd.filter((dd => "error" === dd.type)).map((Jd => dd.mapValidationMessage(kd, Jd))),
            Zd = await Nd;
          Zd && 0 === Pd.length && Pd.push({
            file: null,
            line: 0,
            message: Zd.message,
            variants: [kd.key]
          });
          return Pd
        }(dd, Zd, Jd))));
        return gd ? null : Cd(dd, dd.gpd(Jd.flat()), Pd.offInStrict)
      } catch (Kd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Kd), null
      } finally {
        Zd.destroy()
      }
    }
    async function gd(dd, Jd) {
      var kd;
      if (!(0, pd.shaderPackNeedsCheck)(dd, Jd) || (0, pd.isOtherApiVersion)(dd)) return dd;
      const Nd = await Zd(Jd, (0, pd.storedShaderPackFiles)(dd));
      if (!Nd) return dd;
      const Wd = !1 === (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) && !dd.validation.fromRecheck,
        Pd = {
          ...dd,
          validation: Wd ? Nd : {
            ...Nd,
            fromRecheck: !0
          }
        };
      return await (0, pd.replaceShaderPack)(dd, Pd, Jd) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Pd
    }

    function Cd(dd, Jd, kd) {
      return {
        headerVersion: (0, pd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Jd.length,
        errors: Jd.slice(0, Pd),
        moreErrors: Math.max(0, Jd.length - Pd),
        offInStrict: kd
      }
    }
  },
  6457: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      h: () => Wd,
      l: () => pd,
      o: () => Ld,
      r: () => Kd,
      t: () => Nd,
      u: () => gd,
      v: () => Cd,
      w: () => od
    });
    const pd = 5;

    function Nd(dd) {
      return dd === pd
    }
    const Wd = 262144,
      Pd = 256,
      Zd = 256;

    function gd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Jd = [];
      for (const [kd, pd] of Object.entries(dd)) {
        if ("string" !== typeof pd) return `${kd} isn't text.`;
        Jd.push({
          path: kd,
          source: pd
        })
      }
      return Jd.sort(((dd, Jd) => Kd(dd.path, Jd.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Pd) return `The pack has more than ${Pd} .wgsl files.`;
          const Jd = new Set;
          for (const {
              path: kd
            }
            of dd) {
            const dd = ld(kd);
            if (null !== dd) return dd;
            if (Jd.has(kd)) return `The pack has two files at ${kd}.`;
            Jd.add(kd)
          }
          return od(dd) > Wd ? `The pack's .wgsl files are over ${Wd/1024} KB in total.` : null
        }(Jd) ?? Jd
    }

    function Cd(dd) {
      const Jd = {};
      for (const kd of dd) Jd[kd.path] = kd.source;
      return Jd
    }

    function Kd(dd, Jd) {
      return dd < Jd ? -1 : dd > Jd ? 1 : 0
    }

    function od(dd) {
      const Jd = new TextEncoder;
      let kd = 0;
      for (const {
          source: pd
        }
        of dd) kd += Jd.encode(pd).byteLength;
      return kd
    }

    function ld(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > Zd) return `A file path is over ${Zd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const Qd = /^(.*)\[rot\[([1-4])$/;

    function Ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pd = new Map;
      Jd.forEach(((dd, Jd) => {
        let {
          numAnimStates: kd,
          animStartIdx: Nd
        } = dd;
        for (let Wd = 1; Wd < kd; Wd++) pd.set(Nd + Wd - 1, Jd)
      }));
      const Nd = Object.entries(dd),
        Wd = new Map;
      for (const [Od, ed] of Nd) {
        const dd = Qd.exec(Od);
        "1" === dd?.[2] && Wd.set(dd[1], ed + 1)
      }
      const Pd = dd => {
          const Jd = Qd.exec(dd);
          return Jd && Wd.has(Jd[1]) ? {
            root: Jd[1],
            rotation: Number(Jd[2]) - 1
          } : null
        },
        Zd = new Set(Nd.map((dd => {
          let [Jd] = dd;
          return Pd(Jd)?.root ?? Jd
        }))),
        gd = (dd, kd) => {
          const pd = dd.replace(/_?0$/, "");
          return (Jd[kd]?.numAnimStates ?? 0) > 1 && !Zd.has(pd) ? pd : dd
        },
        Cd = new Map;
      for (const [Qd, Od] of Nd) Cd.set(Od, gd(Pd(Qd)?.root ?? Qd, Od));
      const Kd = Nd.reduce(((dd, Jd) => {
          let [, kd] = Jd;
          return Math.max(dd, kd + 1)
        }), 0),
        od = Array.from({
          length: Kd
        }, ((dd, Jd) => ({
          id: Jd + 1,
          rotation: 0
        }))),
        ld = new Map,
        Ld = new Map;
      for (const [Qd, Od] of Nd) {
        const dd = Pd(Qd),
          Jd = pd.get(Od);
        if (void 0 !== Jd) {
          const kd = Cd.get(Jd);
          Ld.set(Qd, {
            name: Qd,
            texture: kd,
            kind: "frame"
          }), dd && !Ld.has(dd.root) && Ld.set(dd.root, {
            name: dd.root,
            texture: kd,
            kind: "frame"
          });
          continue
        }
        const kd = Cd.get(Od),
          Nd = dd?.root ?? Qd;
        if (kd !== Nd && Ld.set(Nd, {
            name: Nd,
            texture: kd,
            kind: "frame"
          }), dd) {
          const Jd = Wd.get(dd.root);
          od[Od] = {
            id: Jd,
            rotation: dd.rotation
          }, ld.set(kd, Jd), Ld.set(Qd, {
            name: Qd,
            texture: kd,
            kind: "rotation"
          })
        } else ld.set(kd, Od + 1)
      }
      for (const Qd of ld.keys()) Ld.delete(Qd);
      for (const [Qd, Od] of kd) {
        const dd = ld.get(Od);
        void 0 === dd || ld.has(Qd) || (ld.set(Qd, dd), Ld.delete(Qd))
      }
      return {
        named: [...ld].sort(((dd, Jd) => {
          let [kd] = dd, [pd] = Jd;
          return kd < pd ? -1 : kd > pd ? 1 : 0
        })).map((dd => {
          let [Jd, kd] = dd;
          return {
            name: Jd,
            id: kd
          }
        })),
        aliases: [...Ld.values()],
        layers: od
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);