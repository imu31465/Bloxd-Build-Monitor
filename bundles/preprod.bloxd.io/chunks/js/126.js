export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6467: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(6473),
      lq = gq(1070);
    const Oq = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function mq(qq) {
      let {
        diagnostics: Eq,
        more: gq = 0,
        t: mq
      } = qq;
      return (0, lq.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Eq.map(((qq, Eq) => {
          const gq = (0, Yq.g)(qq),
            xq = function(qq, Eq) {
              const gq = (0, Yq.d)(null !== qq && void 0 !== qq ? qq : []);
              if (0 === gq.length) return null;
              return gq.map((qq => qq.map((qq => Eq(Oq[qq]))).join(", "))).join("; ")
            }(qq.variants, mq);
          return (0, lq.jsxs)("li", {
            children: [gq && (0, lq.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: gq
            }), qq.message, xq && (0, lq.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: mq("shaderPack:onlyIn", {
                variants: xq
              })
            })]
          }, Eq)
        })), gq > 0 && (0, lq.jsx)("li", {
          children: mq("shaderPack:moreErrors", {
            count: String(gq)
          })
        })]
      })
    }
  },
  6490: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Rq,
      c: () => Uq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(4792),
      xq = gq(1326),
      Aq = gq(1025),
      cq = gq(1422),
      uq = gq(1183),
      Bq = gq(96),
      Wq = gq(6458),
      Nq = gq(6482);
    class aq extends Error {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(qq, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = qq, this.params = Eq
      }
    }
    const Vq = 1024,
      dq = 101010256,
      jq = 33639248,
      Hq = 67324752,
      oq = 22,
      Pq = 46,
      Qq = 30,
      yq = 65535,
      tq = 65535,
      rq = 4294967295,
      vq = 0,
      hq = 8,
      nq = new TextDecoder;

    function bq(qq) {
      const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength),
        gq = function(qq) {
          const Eq = qq.byteLength - oq;
          for (let gq = Eq; gq >= Math.max(0, Eq - yq); gq--)
            if (qq.getUint32(gq, !0) === dq && gq + oq + qq.getUint16(gq + 20, !0) <= qq.byteLength) return gq;
          throw new aq("shaderPack:loadNotZip")
        }(Eq),
        Yq = Eq.getUint16(gq + 8, !0),
        lq = Eq.getUint16(gq + 10, !0),
        Oq = Eq.getUint32(gq + 12, !0),
        mq = Eq.getUint32(gq + 16, !0);
      if (lq === tq || Oq === rq || mq === rq) throw Mq();
      if (0 !== Eq.getUint16(gq + 4, !0) || 0 !== Eq.getUint16(gq + 6, !0) || Yq !== lq) throw new aq("shaderPack:loadSplitZip");
      if (lq > Vq) throw new aq("shaderPack:loadTooManyZipEntries", {
        count: String(Vq)
      });
      const xq = mq + Oq;
      if (xq > gq) throw fq();
      const Aq = [];
      let cq = mq;
      for (let uq = 0; uq < lq; uq++) {
        if (cq + Pq > xq || Eq.getUint32(cq, !0) !== jq) throw fq();
        const gq = Eq.getUint16(cq + 8, !0),
          Yq = Eq.getUint16(cq + 10, !0),
          lq = Eq.getUint32(cq + 20, !0),
          Oq = Eq.getUint32(cq + 24, !0),
          uq = Eq.getUint16(cq + 28, !0),
          Bq = Eq.getUint16(cq + 30, !0),
          Wq = Eq.getUint16(cq + 32, !0),
          Nq = Eq.getUint32(cq + 42, !0),
          aq = cq + Pq;
        if (cq = aq + uq + Bq + Wq, cq > xq) throw fq();
        if (lq === rq || Oq === rq || Nq === rq) throw Mq();
        const Vq = nq.decode(qq.subarray(aq, aq + uq)).replace(/\\/g, "/");
        Vq.endsWith("/") || Aq.push({
          path: Vq,
          method: Yq,
          encrypted: 0 !== (1 & gq),
          compressedSize: lq,
          dataOffset: Zq(Eq, Nq, lq, mq)
        })
      }
      return Aq
    }
    async function iq(qq, Eq, gq) {
      if (Eq.encrypted) throw new aq("shaderPack:loadEncrypted", {
        path: Eq.path
      });
      if (Eq.method === vq) return Eq.compressedSize > gq ? null : qq.subarray(Eq.dataOffset, Eq.dataOffset + Eq.compressedSize);
      if (Eq.method === hq) return async function(qq, Eq, gq) {
        const Yq = new Blob([qq]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          lq = [];
        let Oq = 0;
        try {
          for (;;) {
            const {
              done: qq,
              value: gq
            } = await Yq.read();
            if (qq) break;
            if (Oq += gq.byteLength, Oq > Eq) return await Yq.cancel(), null;
            lq.push(gq)
          }
        } catch (Aq) {
          throw new aq("shaderPack:loadDecompressFailed", {
            path: gq
          }, {
            cause: Aq
          })
        }
        const mq = new Uint8Array(Oq);
        let xq = 0;
        for (const cq of lq) mq.set(cq, xq), xq += cq.byteLength;
        return mq
      }(qq.slice(Eq.dataOffset, Eq.dataOffset + Eq.compressedSize), gq, Eq.path);
      throw new aq("shaderPack:loadUnsupportedCompression", {
        path: Eq.path,
        method: String(Eq.method)
      })
    }

    function Zq(qq, Eq, gq, Yq) {
      if (Eq + Qq > Yq || qq.getUint32(Eq, !0) !== Hq) throw fq();
      const lq = Eq + Qq + qq.getUint16(Eq + 26, !0) + qq.getUint16(Eq + 28, !0);
      if (lq + gq > Yq) throw fq();
      return lq
    }

    function fq() {
      return new aq("shaderPack:loadZipDamaged")
    }

    function Mq() {
      return new aq("shaderPack:loadZip64")
    }
    const Tq = 33554432,
      zq = 65536;
    async function Sq(qq) {
      if (1 === qq.length && qq[0].name.toLowerCase().endsWith(".zip")) {
        const Eq = qq[0];
        if (Eq.size > Tq) throw new aq("shaderPack:loadZipTooBig", {
          megabytes: String(Tq / 1048576)
        });
        return async function(qq) {
          return pq(bq(qq).map((Eq => ({
            path: Eq.path,
            read: gq => iq(qq, Eq, gq)
          }))))
        }(new Uint8Array(await Eq.arrayBuffer()))
      }
      return pq(qq.map((qq => ({
        path: Gq(qq),
        read: Eq => async function(qq, Eq) {
          return qq.size > Eq ? null : new Uint8Array(await qq.arrayBuffer())
        }(qq, Eq)
      }))))
    }
    async function pq(qq) {
      const Eq = function(qq) {
          const Eq = qq.length > 0 ? qq[0].path.indexOf("/") : -1;
          if (-1 === Eq) return qq;
          const gq = qq[0].path.slice(0, Eq + 1);
          if (!qq.every((qq => qq.path.startsWith(gq)))) return qq;
          return qq.map((qq => ({
            ...qq,
            path: qq.path.slice(gq.length)
          })))
        }(qq.filter((qq => ! function(qq) {
          const Eq = qq.split("/"),
            gq = Eq[Eq.length - 1];
          return Eq.includes("__MACOSX") || gq.startsWith("._") || ".DS_Store" === gq
        }(qq.path)))),
        gq = Eq.filter((qq => "pack.json" === qq.path.toLowerCase()));
      if (0 === gq.length) throw new aq("shaderPack:loadNoManifest");
      if (gq.length > 1) throw new aq("shaderPack:loadDuplicateManifest");
      const Yq = gq[0],
        lq = await Yq.read(zq);
      if (null === lq) throw new aq("shaderPack:loadManifestTooBig", {
        kilobytes: String(zq / 1024)
      });
      const Oq = function(qq) {
          let Eq;
          try {
            Eq = JSON.parse(qq)
          } catch (xq) {
            throw new aq("shaderPack:loadManifestNotJson", {
              error: xq.message
            }, {
              cause: xq
            })
          }
          if ("object" !== typeof Eq || null === Eq || Array.isArray(Eq)) throw new aq("shaderPack:loadManifestNotObject");
          const {
            apiVersion: gq,
            name: Yq,
            author: lq,
            description: Oq,
            keepCircleShadows: mq
          } = Eq;
          if (void 0 === gq) throw new aq("shaderPack:loadNoApiVersion", {
            version: String(Nq.b)
          });
          if (!(0, Nq.e)(gq)) throw new aq("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(gq),
            version: String(Nq.b)
          });
          if ("string" !== typeof Yq || "" === Yq.trim()) throw new aq("shaderPack:loadNoName");
          if (void 0 !== lq && null !== lq && "string" !== typeof lq) throw new aq("shaderPack:loadAuthorNotString");
          if (void 0 !== Oq && null !== Oq && "string" !== typeof Oq) throw new aq("shaderPack:loadDescriptionNotString");
          if (void 0 !== mq && "boolean" !== typeof mq) throw new aq("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: gq,
            name: Yq,
            author: "string" === typeof lq ? lq : null,
            description: "string" === typeof Oq && "" !== Oq.trim() ? Oq : null,
            keepCircleShadows: !0 === mq
          }
        }(Lq(lq, Yq.path)),
        mq = Eq.filter((qq => qq.path.toLowerCase().endsWith(".wgsl"))).sort(((qq, Eq) => (0, Wq.k)(qq.path, Eq.path)));
      if (0 === mq.length) throw new aq("shaderPack:loadNoWgsl");
      if (mq.length > Wq.d) throw new aq("shaderPack:loadTooManyWgsl", {
        count: String(Wq.d)
      });
      const xq = mq.find(((qq, Eq) => Eq > 0 && qq.path === mq[Eq - 1].path));
      if (xq) throw new aq("shaderPack:loadDuplicatePath", {
        path: xq.path
      });
      const Aq = [];
      let cq = Wq.f;
      for (const uq of mq) {
        const qq = await uq.read(cq);
        if (null === qq) throw new aq("shaderPack:loadSourceTooBig", {
          kilobytes: String(Wq.f / 1024)
        });
        cq -= qq.byteLength, Aq.push({
          path: uq.path,
          source: Lq(qq, uq.path)
        })
      }
      return {
        manifest: Oq,
        files: Aq
      }
    }

    function Gq(qq) {
      return (qq.webkitRelativePath || qq.path || qq.name).replace(/^\.?\//, "")
    }

    function Lq(qq, Eq) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(qq)
      } catch (gq) {
        throw new aq("shaderPack:loadNotUtf8", {
          path: Eq
        }, {
          cause: gq
        })
      }
    }
    var Jq = gq(6473),
      kq = gq(1070);

    function Rq(qq) {
      let {
        busy: Eq,
        disabled: gq,
        onFiles: lq
      } = qq;
      const {
        t: Wq
      } = (0, uq.v)(), Nq = (0, Yq.useRef)(null), aq = !(0, Bq.isMobile)(), {
        getRootProps: Vq,
        getInputProps: dq,
        isDragActive: jq,
        open: Hq
      } = (0, mq.e)({
        onDrop: lq,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: gq
      });
      return (0, kq.jsxs)("div", {
        ...Vq({
          className: Oq()("ShaderPackDropZone", {
            ActiveDrag: jq,
            Disabled: gq
          })
        }),
        children: [(0, kq.jsx)("input", {
          ...dq({
            webkitdirectory: "true"
          })
        }), (0, kq.jsx)("input", {
          ref: Nq,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(qq) {
            const Eq = Array.from(qq.target.files);
            qq.target.value = "", lq(Eq)
          }
        }), Eq && (0, kq.jsx)(xq.e, {}), !Eq && (0, kq.jsxs)(kq.Fragment, {
          children: [(0, kq.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, kq.jsx)(Aq.d, {
              name: "up-from-bracket"
            })
          }), (0, kq.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Wq(aq ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, kq.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [aq && (0, kq.jsx)(cq.g, {
              disabled: gq,
              onClick: Hq,
              children: Wq("shaderPack:chooseFolder")
            }), (0, kq.jsx)(cq.g, {
              disabled: gq,
              onClick: () => {
                Nq.current.click()
              },
              children: Wq("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Uq(qq) {
      const {
        t: Eq
      } = (0, uq.v)(), [gq, lq] = (0, Yq.useState)(!1), [Oq, mq] = (0, Yq.useState)(null), xq = (0, Yq.useRef)(!1);
      return {
        loading: gq,
        error: Oq,
        setError: mq,
        onFiles: async function(gq) {
          if (!xq.current) {
            xq.current = !0, lq(!0), mq(null);
            try {
              await qq(await Sq(gq))
            } catch (Yq) {
              Yq instanceof aq ? mq((0, Jq.k)(Eq, Yq.translationKey, Yq.params)) : (console.error("Failed to load the shader pack", Yq), mq(Eq("shaderPack:unexpectedError")))
            } finally {
              xq.current = !1, lq(!1)
            }
          }
        }
      }
    }
  },
  6473: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      g: () => mq,
      k: () => Oq
    });
    var Yq = gq(6482);
    const lq = [qq => qq.strict ? "strict" : "nonStrict", qq => qq.program];

    function Oq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Yq = {};
      for (const lq in gq) Yq[lq] = `\0${lq}\0`;
      return qq(Eq, Yq).replace(/\0(\w+)\0/g, ((qq, Eq) => gq[Eq]))
    }

    function mq(qq) {
      return null === qq.file ? null : qq.line > 0 ? `${qq.file}:${qq.line}` : qq.file
    }

    function xq(qq) {
      const Eq = new Map(qq.map((qq => [Aq(qq).join("."), qq])));
      if (0 === Eq.size) return [];
      const gq = uq([...Eq.values()]);
      return 0 === gq[0].length ? [] : gq
    }

    function Aq(qq) {
      return lq.map((Eq => Eq(qq)))
    }
    const cq = lq.map((qq => new Set(Yq.c.map(qq)).size));

    function uq(qq) {
      const Eq = lq.map((Eq => new Set(qq.map(Eq)))),
        gq = Eq.reduce(((qq, Eq) => qq * Eq.size), 1),
        Yq = Eq.every(((qq, Eq) => 1 === qq.size || qq.size === cq[Eq]));
      if (gq === qq.length && Yq) return [lq.filter(((qq, gq) => 1 === Eq[gq].size)).map((Eq => Eq(qq[0])))];
      let Oq = null;
      for (let mq = 0; mq < lq.length; mq++) {
        if (1 === Eq[mq].size) continue;
        const gq = Bq(qq, lq[mq]).flatMap(uq);
        (null === Oq || gq.length < Oq.length) && (Oq = gq)
      }
      return Oq
    }

    function Bq(qq, Eq) {
      const gq = new Map;
      for (const lq of qq) {
        var Yq;
        const qq = Eq(lq);
        gq.set(qq, [...null !== (Yq = gq.get(qq)) && void 0 !== Yq ? Yq : [], lq])
      }
      return [...gq.values()]
    }
  },
  6482: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq.h,
      c: () => lq,
      e: () => Yq.o
    });
    var Yq = gq(6458);
    const lq = [!1, !0].flatMap((qq => ["terrain", "liquid", "model"].map((Eq => ({
      strict: qq,
      program: Eq
    })))))
  },
  6531: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      forgetShaderPackActiveHint: () => bq,
      isOtherApiVersion: () => rq,
      isShaderPackActive: () => Pq,
      isShaderPackChangePending: () => tq,
      markShaderPackChangePending: () => yq,
      pageShaderPackValidationVersion: () => vq,
      reconcileStoredShaderPackHint: () => nq,
      removeShaderPack: () => oq,
      replaceShaderPack: () => dq,
      saveShaderPack: () => Vq,
      shaderPackNeedsCheck: () => hq,
      storedPackOutcome: () => Qq,
      storedShaderPackFiles: () => Wq,
      toStoredShaderPack: () => Bq
    });
    var Yq = gq(6458),
      lq = gq(6482),
      Oq = gq(38),
      mq = gq(3324),
      xq = gq(6535),
      Aq = gq(6514);
    const cq = "shaderPackChangePending";
    let uq = null;

    function Bq(qq, Eq, gq) {
      return {
        manifest: qq.manifest,
        files: (0, Yq.w)(qq.files),
        validation: Eq,
        ...gq && {
          listing: gq
        }
      }
    }

    function Wq(qq) {
      return Object.keys(qq.files).map((Eq => ({
        path: Eq,
        source: qq.files[Eq]
      })))
    }
    let Nq = Promise.resolve();

    function aq(qq) {
      const Eq = Nq.then(qq);
      return Nq = Eq.catch((() => {})), Eq
    }

    function Vq(qq, Eq) {
      return aq((() => jq(qq, Eq)))
    }

    function dq(qq, Eq, gq) {
      return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
    }
    async function jq(qq, Eq) {
      const gq = await Oq.f.setItem(xq.b, qq);
      return gq && iq(qq, Eq), gq
    }
    async function Hq() {
      await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
    }

    function oq() {
      return aq(Hq)
    }

    function Pq(qq, Eq) {
      return "active" === Qq(qq, Eq).kind
    }

    function Qq(qq, Eq) {
      var gq;
      return null === qq ? {
        kind: "none",
        reason: "nothingStored"
      } : rq(qq) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.ok) || qq.validation.fromRecheck ? null === Eq ? {
        kind: "none",
        reason: "noCompiler"
      } : hq(qq, Eq) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : qq.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yq() {
      Oq.k.setItem(cq, performance.timeOrigin)
    }

    function tq() {
      return Oq.k.getItem(cq) === performance.timeOrigin
    }

    function rq(qq) {
      return !(0, lq.e)(qq.manifest.apiVersion)
    }

    function vq(qq) {
      return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
    }

    function hq(qq, Eq) {
      var gq;
      return (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.headerVersion) !== vq(Eq)
    }

    function nq(qq) {
      return aq((async () => {
        iq(await (0, xq.d)(!0), qq)
      }))
    }

    function bq() {
      return aq((async () => {
        Oq.i.removeItem(mq.c)
      }))
    }

    function iq(qq, Eq) {
      Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
    }
  },
  6514: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      loadShaderPackTextures: () => mq,
      shaderPackTextures: () => xq
    });
    var Yq = gq(6458);
    let lq = null,
      Oq = null;

    function mq() {
      return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eq,
          textureNameToIndex: gq,
          textureAnimationData: Oq
        } = qq;
        return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
      })), Oq
    }

    function xq() {
      if (null === lq) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return lq
    }
  },
  6526: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      e: () => xq
    });
    var Yq = gq(6531),
      lq = gq(6514),
      Oq = gq(118);
    const mq = 100;
    async function xq(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gq = navigator.gpu) && void 0 !== gq ? gq : null;
      const mq = qq.tqq(Eq, (0, lq.shaderPackTextures)());
      if (mq.errors.length > 0) return cq(qq, mq.errors, mq.offInStrict);
      const xq = await async function(qq) {
        if (!qq) return null;
        try {
          const Eq = await (0, Oq.v)(qq);
          return Eq ? await Eq.requestDevice() : null
        } catch (Eq) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Eq), null
        }
      }(Yq);
      if (!xq) return null;
      let Aq = !1;
      xq.lost.then((() => {
        Aq = !0
      }));
      try {
        const Eq = await Promise.all(mq.validationModules.map((Eq => async function(qq, Eq, gq) {
          Eq.pushErrorScope("validation");
          const Yq = Eq.createShaderModule({
              code: gq.code
            }),
            lq = Eq.popErrorScope(),
            {
              messages: Oq
            } = await Yq.getCompilationInfo(),
            mq = Oq.filter((qq => "error" === qq.type)).map((Eq => qq.mapValidationMessage(gq, Eq))),
            xq = await lq;
          xq && 0 === mq.length && mq.push({
            file: null,
            line: 0,
            message: xq.message,
            variants: [gq.key]
          });
          return mq
        }(qq, xq, Eq))));
        return Aq ? null : cq(qq, qq.aYq(Eq.flat()), mq.offInStrict)
      } catch (uq) {
        return console.error("Couldn't validate the shader pack on WebGPU.", uq), null
      } finally {
        xq.destroy()
      }
    }
    async function Aq(qq, Eq) {
      var gq;
      if (!(0, Yq.shaderPackNeedsCheck)(qq, Eq) || (0, Yq.isOtherApiVersion)(qq)) return qq;
      const lq = await xq(Eq, (0, Yq.storedShaderPackFiles)(qq));
      if (!lq) return qq;
      const Oq = !1 === (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.ok) && !qq.validation.fromRecheck,
        mq = {
          ...qq,
          validation: Oq ? lq : {
            ...lq,
            fromRecheck: !0
          }
        };
      return await (0, Yq.replaceShaderPack)(qq, mq, Eq) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mq
    }

    function cq(qq, Eq, gq) {
      return {
        headerVersion: (0, Yq.pageShaderPackValidationVersion)(qq),
        ok: 0 === Eq.length,
        errors: Eq.slice(0, mq),
        moreErrors: Math.max(0, Eq.length - mq),
        offInStrict: gq
      }
    }
  },
  6458: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Bq,
      d: () => mq,
      f: () => Oq,
      h: () => Yq,
      j: () => aq,
      k: () => uq,
      o: () => lq,
      s: () => Aq,
      w: () => cq
    });
    const Yq = 5;

    function lq(qq) {
      return qq === Yq
    }
    const Oq = 262144,
      mq = 256,
      xq = 256;

    function Aq(qq) {
      if ("object" !== typeof qq || null === qq || Array.isArray(qq)) return "The pack has no files.";
      const Eq = [];
      for (const [gq, Yq] of Object.entries(qq)) {
        if ("string" !== typeof Yq) return `${gq} isn't text.`;
        Eq.push({
          path: gq,
          source: Yq
        })
      }
      return Eq.sort(((qq, Eq) => uq(qq.path, Eq.path))),
        function(qq) {
          if (0 === qq.length) return "The pack has no .wgsl files.";
          if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
          const Eq = new Set;
          for (const {
              path: gq
            }
            of qq) {
            const qq = Wq(gq);
            if (null !== qq) return qq;
            if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
            Eq.add(gq)
          }
          return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
        }(Eq) ?? Eq
    }

    function cq(qq) {
      const Eq = {};
      for (const gq of qq) Eq[gq.path] = gq.source;
      return Eq
    }

    function uq(qq, Eq) {
      return qq < Eq ? -1 : qq > Eq ? 1 : 0
    }

    function Bq(qq) {
      const Eq = new TextEncoder;
      let gq = 0;
      for (const {
          source: Yq
        }
        of qq) gq += Eq.encode(Yq).byteLength;
      return gq
    }

    function Wq(qq) {
      if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
      if (qq.length > xq) return `A file path is over ${xq} characters.`;
      if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
      return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
    }
    const Nq = /^(.*)\[rot\[([1-4])$/;

    function aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Yq = new Map;
      Eq.forEach(((qq, Eq) => {
        let {
          numAnimStates: gq,
          animStartIdx: lq
        } = qq;
        for (let Oq = 1; Oq < gq; Oq++) Yq.set(lq + Oq - 1, Eq)
      }));
      const lq = Object.entries(qq),
        Oq = new Map;
      for (const [Vq, dq] of lq) {
        const qq = Nq.exec(Vq);
        "1" === qq?.[2] && Oq.set(qq[1], dq + 1)
      }
      const mq = qq => {
          const Eq = Nq.exec(qq);
          return Eq && Oq.has(Eq[1]) ? {
            root: Eq[1],
            rotation: Number(Eq[2]) - 1
          } : null
        },
        xq = new Set(lq.map((qq => {
          let [Eq] = qq;
          return mq(Eq)?.root ?? Eq
        }))),
        Aq = (qq, gq) => {
          const Yq = qq.replace(/_?0$/, "");
          return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
        },
        cq = new Map;
      for (const [Nq, Vq] of lq) cq.set(Vq, Aq(mq(Nq)?.root ?? Nq, Vq));
      const uq = lq.reduce(((qq, Eq) => {
          let [, gq] = Eq;
          return Math.max(qq, gq + 1)
        }), 0),
        Bq = Array.from({
          length: uq
        }, ((qq, Eq) => ({
          id: Eq + 1,
          rotation: 0
        }))),
        Wq = new Map,
        aq = new Map;
      for (const [Nq, Vq] of lq) {
        const qq = mq(Nq),
          Eq = Yq.get(Vq);
        if (void 0 !== Eq) {
          const gq = cq.get(Eq);
          aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "frame"
          }), qq && !aq.has(qq.root) && aq.set(qq.root, {
            name: qq.root,
            texture: gq,
            kind: "frame"
          });
          continue
        }
        const gq = cq.get(Vq),
          lq = qq?.root ?? Nq;
        if (gq !== lq && aq.set(lq, {
            name: lq,
            texture: gq,
            kind: "frame"
          }), qq) {
          const Eq = Oq.get(qq.root);
          Bq[Vq] = {
            id: Eq,
            rotation: qq.rotation
          }, Wq.set(gq, Eq), aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "rotation"
          })
        } else Wq.set(gq, Vq + 1)
      }
      for (const Nq of Wq.keys()) aq.delete(Nq);
      for (const [Nq, Vq] of gq) {
        const qq = Wq.get(Vq);
        void 0 === qq || Wq.has(Nq) || (Wq.set(Nq, qq), aq.delete(Nq))
      }
      return {
        named: [...Wq].sort(((qq, Eq) => {
          let [gq] = qq, [Yq] = Eq;
          return gq < Yq ? -1 : gq > Yq ? 1 : 0
        })).map((qq => {
          let [Eq, gq] = qq;
          return {
            name: Eq,
            id: gq
          }
        })),
        aliases: [...aq.values()],
        layers: Bq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);