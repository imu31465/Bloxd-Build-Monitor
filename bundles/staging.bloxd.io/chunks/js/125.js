export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6293: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    var Rk = Bk(6295),
      tk = Bk(1069);
    const ak = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Xk(kk) {
      let {
        diagnostics: Fk,
        more: Bk = 0,
        t: Xk
      } = kk;
      return (0, tk.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Fk.map(((kk, Fk) => {
          const Bk = (0, Rk.d)(kk),
            bk = function(kk, Fk) {
              const Bk = (0, Rk.c)(null !== kk && void 0 !== kk ? kk : []);
              if (0 === Bk.length) return null;
              return Bk.map((kk => kk.map((kk => Fk(ak[kk]))).join(", "))).join("; ")
            }(kk.variants, Xk);
          return (0, tk.jsxs)("li", {
            children: [Bk && (0, tk.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Bk
            }), kk.message, bk && (0, tk.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Xk("shaderPack:onlyIn", {
                variants: bk
              })
            })]
          }, Fk)
        })), Bk > 0 && (0, tk.jsx)("li", {
          children: Xk("shaderPack:moreErrors", {
            count: String(Bk)
          })
        })]
      })
    }
  },
  6307: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ck,
      i: () => Zk
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(4664),
      bk = Bk(1288),
      wk = Bk(1028),
      dk = Bk(1389),
      sk = Bk(1149),
      Vk = Bk(98),
      Jk = Bk(6289),
      Ak = Bk(6299);
    class ek extends Error {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(kk, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = kk, this.params = Fk
      }
    }
    const yk = 1024,
      fk = 101010256,
      mk = 33639248,
      Wk = 67324752,
      vk = 22,
      ik = 46,
      Yk = 30,
      Lk = 65535,
      Ok = 65535,
      Ek = 4294967295,
      Sk = 0,
      Nk = 8,
      Hk = new TextDecoder;

    function uk(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength),
        Bk = function(kk) {
          const Fk = kk.byteLength - vk;
          for (let Bk = Fk; Bk >= Math.max(0, Fk - Lk); Bk--)
            if (kk.getUint32(Bk, !0) === fk && Bk + vk + kk.getUint16(Bk + 20, !0) <= kk.byteLength) return Bk;
          throw new ek("shaderPack:loadNotZip")
        }(Fk),
        Rk = Fk.getUint16(Bk + 8, !0),
        tk = Fk.getUint16(Bk + 10, !0),
        ak = Fk.getUint32(Bk + 12, !0),
        Xk = Fk.getUint32(Bk + 16, !0);
      if (tk === Ok || ak === Ek || Xk === Ek) throw ck();
      if (0 !== Fk.getUint16(Bk + 4, !0) || 0 !== Fk.getUint16(Bk + 6, !0) || Rk !== tk) throw new ek("shaderPack:loadSplitZip");
      if (tk > yk) throw new ek("shaderPack:loadTooManyZipEntries", {
        count: String(yk)
      });
      const bk = Xk + ak;
      if (bk > Bk) throw Uk();
      const wk = [];
      let dk = Xk;
      for (let sk = 0; sk < tk; sk++) {
        if (dk + ik > bk || Fk.getUint32(dk, !0) !== mk) throw Uk();
        const Bk = Fk.getUint16(dk + 8, !0),
          Rk = Fk.getUint16(dk + 10, !0),
          tk = Fk.getUint32(dk + 20, !0),
          ak = Fk.getUint32(dk + 24, !0),
          sk = Fk.getUint16(dk + 28, !0),
          Vk = Fk.getUint16(dk + 30, !0),
          Jk = Fk.getUint16(dk + 32, !0),
          Ak = Fk.getUint32(dk + 42, !0),
          ek = dk + ik;
        if (dk = ek + sk + Vk + Jk, dk > bk) throw Uk();
        if (tk === Ek || ak === Ek || Ak === Ek) throw ck();
        const yk = Hk.decode(kk.subarray(ek, ek + sk)).replace(/\\/g, "/");
        yk.endsWith("/") || wk.push({
          path: yk,
          method: Rk,
          encrypted: 0 !== (1 & Bk),
          compressedSize: tk,
          dataOffset: gk(Fk, Ak, tk, Xk)
        })
      }
      return wk
    }
    async function Mk(kk, Fk, Bk) {
      if (Fk.encrypted) throw new ek("shaderPack:loadEncrypted", {
        path: Fk.path
      });
      if (Fk.method === Sk) return Fk.compressedSize > Bk ? null : kk.subarray(Fk.dataOffset, Fk.dataOffset + Fk.compressedSize);
      if (Fk.method === Nk) return async function(kk, Fk, Bk) {
        const Rk = new Blob([kk]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          tk = [];
        let ak = 0;
        try {
          for (;;) {
            const {
              done: kk,
              value: Bk
            } = await Rk.read();
            if (kk) break;
            if (ak += Bk.byteLength, ak > Fk) return await Rk.cancel(), null;
            tk.push(Bk)
          }
        } catch (wk) {
          throw new ek("shaderPack:loadDecompressFailed", {
            path: Bk
          }, {
            cause: wk
          })
        }
        const Xk = new Uint8Array(ak);
        let bk = 0;
        for (const dk of tk) Xk.set(dk, bk), bk += dk.byteLength;
        return Xk
      }(kk.slice(Fk.dataOffset, Fk.dataOffset + Fk.compressedSize), Bk, Fk.path);
      throw new ek("shaderPack:loadUnsupportedCompression", {
        path: Fk.path,
        method: String(Fk.method)
      })
    }

    function gk(kk, Fk, Bk, Rk) {
      if (Fk + Yk > Rk || kk.getUint32(Fk, !0) !== Wk) throw Uk();
      const tk = Fk + Yk + kk.getUint16(Fk + 26, !0) + kk.getUint16(Fk + 28, !0);
      if (tk + Bk > Rk) throw Uk();
      return tk
    }

    function Uk() {
      return new ek("shaderPack:loadZipDamaged")
    }

    function ck() {
      return new ek("shaderPack:loadZip64")
    }
    const Gk = 33554432,
      Tk = 65536;
    async function rk(kk) {
      if (1 === kk.length && kk[0].name.toLowerCase().endsWith(".zip")) {
        const Fk = kk[0];
        if (Fk.size > Gk) throw new ek("shaderPack:loadZipTooBig", {
          megabytes: String(Gk / 1048576)
        });
        return async function(kk) {
          return Dk(uk(kk).map((Fk => ({
            path: Fk.path,
            read: Bk => Mk(kk, Fk, Bk)
          }))))
        }(new Uint8Array(await Fk.arrayBuffer()))
      }
      return Dk(kk.map((kk => ({
        path: zk(kk),
        read: Fk => async function(kk, Fk) {
          return kk.size > Fk ? null : new Uint8Array(await kk.arrayBuffer())
        }(kk, Fk)
      }))))
    }
    async function Dk(kk) {
      const Fk = function(kk) {
          const Fk = kk.length > 0 ? kk[0].path.indexOf("/") : -1;
          if (-1 === Fk) return kk;
          const Bk = kk[0].path.slice(0, Fk + 1);
          if (!kk.every((kk => kk.path.startsWith(Bk)))) return kk;
          return kk.map((kk => ({
            ...kk,
            path: kk.path.slice(Bk.length)
          })))
        }(kk.filter((kk => ! function(kk) {
          const Fk = kk.split("/"),
            Bk = Fk[Fk.length - 1];
          return Fk.includes("__MACOSX") || Bk.startsWith("._") || ".DS_Store" === Bk
        }(kk.path)))),
        Bk = Fk.filter((kk => "pack.json" === kk.path.toLowerCase()));
      if (0 === Bk.length) throw new ek("shaderPack:loadNoManifest");
      if (Bk.length > 1) throw new ek("shaderPack:loadDuplicateManifest");
      const Rk = Bk[0],
        tk = await Rk.read(Tk);
      if (null === tk) throw new ek("shaderPack:loadManifestTooBig", {
        kilobytes: String(Tk / 1024)
      });
      const ak = function(kk) {
          let Fk;
          try {
            Fk = JSON.parse(kk)
          } catch (bk) {
            throw new ek("shaderPack:loadManifestNotJson", {
              error: bk.message
            }, {
              cause: bk
            })
          }
          if ("object" !== typeof Fk || null === Fk || Array.isArray(Fk)) throw new ek("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Bk,
            name: Rk,
            author: tk,
            description: ak,
            keepCircleShadows: Xk
          } = Fk;
          if (void 0 === Bk) throw new ek("shaderPack:loadNoApiVersion", {
            version: String(Ak.b)
          });
          if (!(0, Ak.g)(Bk)) throw new ek("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Bk),
            version: String(Ak.b)
          });
          if ("string" !== typeof Rk || "" === Rk.trim()) throw new ek("shaderPack:loadNoName");
          if (void 0 !== tk && null !== tk && "string" !== typeof tk) throw new ek("shaderPack:loadAuthorNotString");
          if (void 0 !== ak && null !== ak && "string" !== typeof ak) throw new ek("shaderPack:loadDescriptionNotString");
          if (void 0 !== Xk && "boolean" !== typeof Xk) throw new ek("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Bk,
            name: Rk,
            author: "string" === typeof tk ? tk : null,
            description: "string" === typeof ak && "" !== ak.trim() ? ak : null,
            keepCircleShadows: !0 === Xk
          }
        }(Pk(tk, Rk.path)),
        Xk = Fk.filter((kk => kk.path.toLowerCase().endsWith(".wgsl"))).sort(((kk, Fk) => (0, Jk.k)(kk.path, Fk.path)));
      if (0 === Xk.length) throw new ek("shaderPack:loadNoWgsl");
      if (Xk.length > Jk.b) throw new ek("shaderPack:loadTooManyWgsl", {
        count: String(Jk.b)
      });
      const bk = Xk.find(((kk, Fk) => Fk > 0 && kk.path === Xk[Fk - 1].path));
      if (bk) throw new ek("shaderPack:loadDuplicatePath", {
        path: bk.path
      });
      const wk = [];
      let dk = Jk.d;
      for (const sk of Xk) {
        const kk = await sk.read(dk);
        if (null === kk) throw new ek("shaderPack:loadSourceTooBig", {
          kilobytes: String(Jk.d / 1024)
        });
        dk -= kk.byteLength, wk.push({
          path: sk.path,
          source: Pk(kk, sk.path)
        })
      }
      return {
        manifest: ak,
        files: wk
      }
    }

    function zk(kk) {
      return (kk.webkitRelativePath || kk.path || kk.name).replace(/^\.?\//, "")
    }

    function Pk(kk, Fk) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(kk)
      } catch (Bk) {
        throw new ek("shaderPack:loadNotUtf8", {
          path: Fk
        }, {
          cause: Bk
        })
      }
    }
    var hk = Bk(6295),
      qk = Bk(1069);

    function Ck(kk) {
      let {
        busy: Fk,
        disabled: Bk,
        onFiles: tk
      } = kk;
      const {
        t: Jk
      } = (0, sk.x)(), Ak = (0, Rk.useRef)(null), ek = !(0, Vk.isMobile)(), {
        getRootProps: yk,
        getInputProps: fk,
        isDragActive: mk,
        open: Wk
      } = (0, Xk.d)({
        onDrop: tk,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Bk
      });
      return (0, qk.jsxs)("div", {
        ...yk({
          className: ak()("ShaderPackDropZone", {
            ActiveDrag: mk,
            Disabled: Bk
          })
        }),
        children: [(0, qk.jsx)("input", {
          ...fk({
            webkitdirectory: "true"
          })
        }), (0, qk.jsx)("input", {
          ref: Ak,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(kk) {
            const Fk = Array.from(kk.target.files);
            kk.target.value = "", tk(Fk)
          }
        }), Fk && (0, qk.jsx)(bk.b, {}), !Fk && (0, qk.jsxs)(qk.Fragment, {
          children: [(0, qk.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, qk.jsx)(wk.d, {
              name: "up-from-bracket"
            })
          }), (0, qk.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Jk(ek ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, qk.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [ek && (0, qk.jsx)(dk.g, {
              disabled: Bk,
              onClick: Wk,
              children: Jk("shaderPack:chooseFolder")
            }), (0, qk.jsx)(dk.g, {
              disabled: Bk,
              onClick: () => {
                Ak.current.click()
              },
              children: Jk("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Zk(kk) {
      const {
        t: Fk
      } = (0, sk.x)(), [Bk, tk] = (0, Rk.useState)(!1), [ak, Xk] = (0, Rk.useState)(null), bk = (0, Rk.useRef)(!1);
      return {
        loading: Bk,
        error: ak,
        setError: Xk,
        onFiles: async function(Bk) {
          if (!bk.current) {
            bk.current = !0, tk(!0), Xk(null);
            try {
              await kk(await rk(Bk))
            } catch (Rk) {
              Rk instanceof ek ? Xk((0, hk.e)(Fk, Rk.translationKey, Rk.params)) : (console.error("Failed to load the shader pack", Rk), Xk(Fk("shaderPack:unexpectedError")))
            } finally {
              bk.current = !1, tk(!1)
            }
          }
        }
      }
    }
  },
  6295: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      d: () => Xk,
      e: () => ak
    });
    var Rk = Bk(6299);
    const tk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];

    function ak(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Rk = {};
      for (const tk in Bk) Rk[tk] = `\0${tk}\0`;
      return kk(Fk, Rk).replace(/\0(\w+)\0/g, ((kk, Fk) => Bk[Fk]))
    }

    function Xk(kk) {
      return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
    }

    function bk(kk) {
      const Fk = new Map(kk.map((kk => [wk(kk).join("."), kk])));
      if (0 === Fk.size) return [];
      const Bk = sk([...Fk.values()]);
      return 0 === Bk[0].length ? [] : Bk
    }

    function wk(kk) {
      return tk.map((Fk => Fk(kk)))
    }
    const dk = tk.map((kk => new Set(Rk.d.map(kk)).size));

    function sk(kk) {
      const Fk = tk.map((Fk => new Set(kk.map(Fk)))),
        Bk = Fk.reduce(((kk, Fk) => kk * Fk.size), 1),
        Rk = Fk.every(((kk, Fk) => 1 === kk.size || kk.size === dk[Fk]));
      if (Bk === kk.length && Rk) return [tk.filter(((kk, Bk) => 1 === Fk[Bk].size)).map((Fk => Fk(kk[0])))];
      let ak = null;
      for (let Xk = 0; Xk < tk.length; Xk++) {
        if (1 === Fk[Xk].size) continue;
        const Bk = Vk(kk, tk[Xk]).flatMap(sk);
        (null === ak || Bk.length < ak.length) && (ak = Bk)
      }
      return ak
    }

    function Vk(kk, Fk) {
      const Bk = new Map;
      for (const tk of kk) {
        var Rk;
        const kk = Fk(tk);
        Bk.set(kk, [...null !== (Rk = Bk.get(kk)) && void 0 !== Rk ? Rk : [], tk])
      }
      return [...Bk.values()]
    }
  },
  6299: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk.h,
      d: () => tk,
      g: () => Rk.m
    });
    var Rk = Bk(6289);
    const tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  6358: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      forgetShaderPackActiveHint: () => uk,
      isOtherApiVersion: () => Ek,
      isShaderPackActive: () => ik,
      isShaderPackChangePending: () => Ok,
      markShaderPackChangePending: () => Lk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Hk,
      removeShaderPack: () => vk,
      replaceShaderPack: () => fk,
      saveShaderPack: () => yk,
      shaderPackNeedsCheck: () => Nk,
      storedPackOutcome: () => Yk,
      storedShaderPackFiles: () => Jk,
      toStoredShaderPack: () => Vk
    });
    var Rk = Bk(6289),
      tk = Bk(6299),
      ak = Bk(42),
      Xk = Bk(3255),
      bk = Bk(6361),
      wk = Bk(6340);
    const dk = "shaderPackChangePending";
    let sk = null;

    function Vk(kk, Fk, Bk) {
      return {
        manifest: kk.manifest,
        files: (0, Rk.s)(kk.files),
        validation: Fk,
        ...Bk && {
          listing: Bk
        }
      }
    }

    function Jk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let Ak = Promise.resolve();

    function ek(kk) {
      const Fk = Ak.then(kk);
      return Ak = Fk.catch((() => {})), Fk
    }

    function yk(kk, Fk) {
      return ek((() => mk(kk, Fk)))
    }

    function fk(kk, Fk, Bk) {
      return ek((async () => JSON.stringify(await (0, bk.e)()) === JSON.stringify(kk) && (null === Fk ? (await Wk(), !0) : mk(Fk, Bk))))
    }
    async function mk(kk, Fk) {
      const Bk = await ak.f.setItem(bk.d, kk);
      return Bk && Mk(kk, Fk), Bk
    }
    async function Wk() {
      await ak.f.removeItem(bk.d), ak.i.removeItem(Xk.b)
    }

    function vk() {
      return ek(Wk)
    }

    function ik(kk, Fk) {
      return "active" === Yk(kk, Fk).kind
    }

    function Yk(kk, Fk) {
      var Bk;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : Ek(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : Nk(kk, Fk) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : kk.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Lk() {
      ak.j.setItem(dk, performance.timeOrigin)
    }

    function Ok() {
      return ak.j.getItem(dk) === performance.timeOrigin
    }

    function Ek(kk) {
      return !(0, tk.g)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return sk ??= kk.qS((0, wk.shaderPackTextures)()), sk
    }

    function Nk(kk, Fk) {
      var Bk;
      return (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.headerVersion) !== Sk(Fk)
    }

    function Hk(kk) {
      return ek((async () => {
        Mk(await (0, bk.e)(!0), kk)
      }))
    }

    function uk() {
      return ek((async () => {
        ak.i.removeItem(Xk.b)
      }))
    }

    function Mk(kk, Fk) {
      ik(kk, Fk) ? ak.i.setItem(Xk.b, !0) : ak.i.removeItem(Xk.b)
    }
  },
  6340: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadShaderPackTextures: () => Xk,
      shaderPackTextures: () => bk
    });
    var Rk = Bk(6289);
    let tk = null,
      ak = null;

    function Xk() {
      return ak ??= Promise.all([Bk.e(69), Bk.e(198)]).then((() => Bk(39906))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Bk,
          textureAnimationData: ak
        } = kk;
        return tk ??= (0, Rk.i)(Bk, ak, Fk), tk
      })), ak
    }

    function bk() {
      if (null === tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tk
    }
  },
  6356: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      g: () => bk
    });
    var Rk = Bk(6358),
      tk = Bk(6340),
      ak = Bk(117);
    const Xk = 100;
    async function bk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Bk = navigator.gpu) && void 0 !== Bk ? Bk : null;
      const Xk = kk.N7(Fk, (0, tk.shaderPackTextures)());
      if (Xk.errors.length > 0) return dk(kk, Xk.errors, Xk.offInStrict);
      const bk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ak.w)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Rk);
      if (!bk) return null;
      let wk = !1;
      bk.lost.then((() => {
        wk = !0
      }));
      try {
        const Fk = await Promise.all(Xk.validationModules.map((Fk => async function(kk, Fk, Bk) {
          Fk.pushErrorScope("validation");
          const Rk = Fk.createShaderModule({
              code: Bk.code
            }),
            tk = Fk.popErrorScope(),
            {
              messages: ak
            } = await Rk.getCompilationInfo(),
            Xk = ak.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Bk, Fk))),
            bk = await tk;
          bk && 0 === Xk.length && Xk.push({
            file: null,
            line: 0,
            message: bk.message,
            variants: [Bk.key]
          });
          return Xk
        }(kk, bk, Fk))));
        return wk ? null : dk(kk, kk.EBk(Fk.flat()), Xk.offInStrict)
      } catch (sk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", sk), null
      } finally {
        bk.destroy()
      }
    }
    async function wk(kk, Fk) {
      var Bk;
      if (!(0, Rk.shaderPackNeedsCheck)(kk, Fk) || (0, Rk.isOtherApiVersion)(kk)) return kk;
      const tk = await bk(Fk, (0, Rk.storedShaderPackFiles)(kk));
      if (!tk) return kk;
      const ak = !1 === (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) && !kk.validation.fromRecheck,
        Xk = {
          ...kk,
          validation: ak ? tk : {
            ...tk,
            fromRecheck: !0
          }
        };
      return await (0, Rk.replaceShaderPack)(kk, Xk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xk
    }

    function dk(kk, Fk, Bk) {
      return {
        headerVersion: (0, Rk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, Xk),
        moreErrors: Math.max(0, Fk.length - Xk),
        offInStrict: Bk
      }
    }
  },
  6289: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      d: () => ak,
      h: () => Rk,
      i: () => ek,
      k: () => sk,
      m: () => tk,
      q: () => wk,
      s: () => dk,
      w: () => Vk
    });
    const Rk = 5;

    function tk(kk) {
      return kk === Rk
    }
    const ak = 262144,
      Xk = 256,
      bk = 256;

    function wk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Bk, Rk] of Object.entries(kk)) {
        if ("string" !== typeof Rk) return `${Bk} isn't text.`;
        Fk.push({
          path: Bk,
          source: Rk
        })
      }
      return Fk.sort(((kk, Fk) => sk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > Xk) return `The pack has more than ${Xk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Bk
            }
            of kk) {
            const kk = Jk(Bk);
            if (null !== kk) return kk;
            if (Fk.has(Bk)) return `The pack has two files at ${Bk}.`;
            Fk.add(Bk)
          }
          return Vk(kk) > ak ? `The pack's .wgsl files are over ${ak/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function dk(kk) {
      const Fk = {};
      for (const Bk of kk) Fk[Bk.path] = Bk.source;
      return Fk
    }

    function sk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Vk(kk) {
      const Fk = new TextEncoder;
      let Bk = 0;
      for (const {
          source: Rk
        }
        of kk) Bk += Fk.encode(Rk).byteLength;
      return Bk
    }

    function Jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > bk) return `A file path is over ${bk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Ak = /^(.*)\[rot\[([1-4])$/;

    function ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Rk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Bk,
          animStartIdx: tk
        } = kk;
        for (let ak = 1; ak < Bk; ak++) Rk.set(tk + ak - 1, Fk)
      }));
      const tk = Object.entries(kk),
        ak = new Map;
      for (const [yk, fk] of tk) {
        const kk = Ak.exec(yk);
        "1" === kk?.[2] && ak.set(kk[1], fk + 1)
      }
      const Xk = kk => {
          const Fk = Ak.exec(kk);
          return Fk && ak.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        bk = new Set(tk.map((kk => {
          let [Fk] = kk;
          return Xk(Fk)?.root ?? Fk
        }))),
        wk = (kk, Bk) => {
          const Rk = kk.replace(/_?0$/, "");
          return (Fk[Bk]?.numAnimStates ?? 0) > 1 && !bk.has(Rk) ? Rk : kk
        },
        dk = new Map;
      for (const [Ak, yk] of tk) dk.set(yk, wk(Xk(Ak)?.root ?? Ak, yk));
      const sk = tk.reduce(((kk, Fk) => {
          let [, Bk] = Fk;
          return Math.max(kk, Bk + 1)
        }), 0),
        Vk = Array.from({
          length: sk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Jk = new Map,
        ek = new Map;
      for (const [Ak, yk] of tk) {
        const kk = Xk(Ak),
          Fk = Rk.get(yk);
        if (void 0 !== Fk) {
          const Bk = dk.get(Fk);
          ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "frame"
          }), kk && !ek.has(kk.root) && ek.set(kk.root, {
            name: kk.root,
            texture: Bk,
            kind: "frame"
          });
          continue
        }
        const Bk = dk.get(yk),
          tk = kk?.root ?? Ak;
        if (Bk !== tk && ek.set(tk, {
            name: tk,
            texture: Bk,
            kind: "frame"
          }), kk) {
          const Fk = ak.get(kk.root);
          Vk[yk] = {
            id: Fk,
            rotation: kk.rotation
          }, Jk.set(Bk, Fk), ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "rotation"
          })
        } else Jk.set(Bk, yk + 1)
      }
      for (const Ak of Jk.keys()) ek.delete(Ak);
      for (const [Ak, yk] of Bk) {
        const kk = Jk.get(yk);
        void 0 === kk || Jk.has(Ak) || (Jk.set(Ak, kk), ek.delete(Ak))
      }
      return {
        named: [...Jk].sort(((kk, Fk) => {
          let [Bk] = kk, [Rk] = Fk;
          return Bk < Rk ? -1 : Bk > Rk ? 1 : 0
        })).map((kk => {
          let [Fk, Bk] = kk;
          return {
            name: Fk,
            id: Bk
          }
        })),
        aliases: [...ek.values()],
        layers: Vk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);