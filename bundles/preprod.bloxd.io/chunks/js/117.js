export const id = 117;
export const ids = [117, 119, 122];
export const modules = {
  5844: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(5850),
      hy = Wy(952);
    const fy = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Zy(yb) {
      let {
        diagnostics: bb,
        more: Wy = 0,
        t: Zy
      } = yb;
      return (0, hy.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [bb.map(((yb, bb) => {
          const Wy = (0, Uy.d)(yb),
            cb = function(yb, bb) {
              const Wy = (0, Uy.b)(null !== yb && void 0 !== yb ? yb : []);
              if (0 === Wy.length) return null;
              return Wy.map((yb => yb.map((yb => bb(fy[yb]))).join(", "))).join("; ")
            }(yb.variants, Zy);
          return (0, hy.jsxs)("li", {
            children: [Wy && (0, hy.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Wy
            }), yb.message, cb && (0, hy.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Zy("shaderPack:onlyIn", {
                variants: cb
              })
            })]
          }, bb)
        })), Wy > 0 && (0, hy.jsx)("li", {
          children: Zy("shaderPack:moreErrors", {
            count: String(Wy)
          })
        })]
      })
    }
  },
  5860: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => jb,
      f: () => Dy
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(4168),
      cb = Wy(1194),
      Py = Wy(910),
      oy = Wy(1273),
      By = Wy(1042),
      Ky = Wy(94),
      ey = Wy(5835),
      qb = Wy(5852);
    class sy extends Error {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(yb, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = yb, this.params = bb
      }
    }
    const Sy = 1024,
      Ey = 101010256,
      ly = 33639248,
      mb = 67324752,
      Cy = 22,
      Ty = 46,
      Vy = 30,
      Jy = 65535,
      gb = 65535,
      Gy = 4294967295,
      Oy = 0,
      Ry = 8,
      vb = new TextDecoder;

    function ib(yb) {
      const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength),
        Wy = function(yb) {
          const bb = yb.byteLength - Cy;
          for (let Wy = bb; Wy >= Math.max(0, bb - Jy); Wy--)
            if (yb.getUint32(Wy, !0) === Ey && Wy + Cy + yb.getUint16(Wy + 20, !0) <= yb.byteLength) return Wy;
          throw new sy("shaderPack:loadNotZip")
        }(bb),
        Uy = bb.getUint16(Wy + 8, !0),
        hy = bb.getUint16(Wy + 10, !0),
        fy = bb.getUint32(Wy + 12, !0),
        Zy = bb.getUint32(Wy + 16, !0);
      if (hy === gb || fy === Gy || Zy === Gy) throw ny();
      if (0 !== bb.getUint16(Wy + 4, !0) || 0 !== bb.getUint16(Wy + 6, !0) || Uy !== hy) throw new sy("shaderPack:loadSplitZip");
      if (hy > Sy) throw new sy("shaderPack:loadTooManyZipEntries", {
        count: String(Sy)
      });
      const cb = Zy + fy;
      if (cb > Wy) throw Xy();
      const Py = [];
      let oy = Zy;
      for (let By = 0; By < hy; By++) {
        if (oy + Ty > cb || bb.getUint32(oy, !0) !== ly) throw Xy();
        const Wy = bb.getUint16(oy + 8, !0),
          Uy = bb.getUint16(oy + 10, !0),
          hy = bb.getUint32(oy + 20, !0),
          fy = bb.getUint32(oy + 24, !0),
          By = bb.getUint16(oy + 28, !0),
          Ky = bb.getUint16(oy + 30, !0),
          ey = bb.getUint16(oy + 32, !0),
          qb = bb.getUint32(oy + 42, !0),
          sy = oy + Ty;
        if (oy = sy + By + Ky + ey, oy > cb) throw Xy();
        if (hy === Gy || fy === Gy || qb === Gy) throw ny();
        const Sy = vb.decode(yb.subarray(sy, sy + By)).replace(/\\/g, "/");
        Sy.endsWith("/") || Py.push({
          path: Sy,
          method: Uy,
          encrypted: 0 !== (1 & Wy),
          compressedSize: hy,
          dataOffset: Yy(bb, qb, hy, Zy)
        })
      }
      return Py
    }
    async function My(yb, bb, Wy) {
      if (bb.encrypted) throw new sy("shaderPack:loadEncrypted", {
        path: bb.path
      });
      if (bb.method === Oy) return bb.compressedSize > Wy ? null : yb.subarray(bb.dataOffset, bb.dataOffset + bb.compressedSize);
      if (bb.method === Ry) return async function(yb, bb, Wy) {
        const Uy = new Blob([yb]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          hy = [];
        let fy = 0;
        try {
          for (;;) {
            const {
              done: yb,
              value: Wy
            } = await Uy.read();
            if (yb) break;
            if (fy += Wy.byteLength, fy > bb) return await Uy.cancel(), null;
            hy.push(Wy)
          }
        } catch (Py) {
          throw new sy("shaderPack:loadDecompressFailed", {
            path: Wy
          }, {
            cause: Py
          })
        }
        const Zy = new Uint8Array(fy);
        let cb = 0;
        for (const oy of hy) Zy.set(oy, cb), cb += oy.byteLength;
        return Zy
      }(yb.slice(bb.dataOffset, bb.dataOffset + bb.compressedSize), Wy, bb.path);
      throw new sy("shaderPack:loadUnsupportedCompression", {
        path: bb.path,
        method: String(bb.method)
      })
    }

    function Yy(yb, bb, Wy, Uy) {
      if (bb + Vy > Uy || yb.getUint32(bb, !0) !== mb) throw Xy();
      const hy = bb + Vy + yb.getUint16(bb + 26, !0) + yb.getUint16(bb + 28, !0);
      if (hy + Wy > Uy) throw Xy();
      return hy
    }

    function Xy() {
      return new sy("shaderPack:loadZipDamaged")
    }

    function ny() {
      return new sy("shaderPack:loadZip64")
    }
    const uy = 33554432,
      rb = 65536;
    async function Hy(yb) {
      if (1 === yb.length && yb[0].name.toLowerCase().endsWith(".zip")) {
        const bb = yb[0];
        if (bb.size > uy) throw new sy("shaderPack:loadZipTooBig", {
          megabytes: String(uy / 1048576)
        });
        return async function(yb) {
          return ab(ib(yb).map((bb => ({
            path: bb.path,
            read: Wy => My(yb, bb, Wy)
          }))))
        }(new Uint8Array(await bb.arrayBuffer()))
      }
      return ab(yb.map((yb => ({
        path: Fy(yb),
        read: bb => async function(yb, bb) {
          return yb.size > bb ? null : new Uint8Array(await yb.arrayBuffer())
        }(yb, bb)
      }))))
    }
    async function ab(yb) {
      const bb = function(yb) {
          const bb = yb.length > 0 ? yb[0].path.indexOf("/") : -1;
          if (-1 === bb) return yb;
          const Wy = yb[0].path.slice(0, bb + 1);
          if (!yb.every((yb => yb.path.startsWith(Wy)))) return yb;
          return yb.map((yb => ({
            ...yb,
            path: yb.path.slice(Wy.length)
          })))
        }(yb.filter((yb => ! function(yb) {
          const bb = yb.split("/"),
            Wy = bb[bb.length - 1];
          return bb.includes("__MACOSX") || Wy.startsWith("._") || ".DS_Store" === Wy
        }(yb.path)))),
        Wy = bb.filter((yb => "pack.json" === yb.path.toLowerCase()));
      if (0 === Wy.length) throw new sy("shaderPack:loadNoManifest");
      if (Wy.length > 1) throw new sy("shaderPack:loadDuplicateManifest");
      const Uy = Wy[0],
        hy = await Uy.read(rb);
      if (null === hy) throw new sy("shaderPack:loadManifestTooBig", {
        kilobytes: String(rb / 1024)
      });
      const fy = function(yb) {
          let bb;
          try {
            bb = JSON.parse(yb)
          } catch (cb) {
            throw new sy("shaderPack:loadManifestNotJson", {
              error: cb.message
            }, {
              cause: cb
            })
          }
          if ("object" !== typeof bb || null === bb || Array.isArray(bb)) throw new sy("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Wy,
            name: Uy,
            author: hy,
            description: fy,
            keepCircleShadows: Zy
          } = bb;
          if (void 0 === Wy) throw new sy("shaderPack:loadNoApiVersion", {
            version: String(qb.c)
          });
          if (!(0, qb.e)(Wy)) throw new sy("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Wy),
            version: String(qb.c)
          });
          if ("string" !== typeof Uy || "" === Uy.trim()) throw new sy("shaderPack:loadNoName");
          if (void 0 !== hy && null !== hy && "string" !== typeof hy) throw new sy("shaderPack:loadAuthorNotString");
          if (void 0 !== fy && null !== fy && "string" !== typeof fy) throw new sy("shaderPack:loadDescriptionNotString");
          if (void 0 !== Zy && "boolean" !== typeof Zy) throw new sy("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Wy,
            name: Uy,
            author: "string" === typeof hy ? hy : null,
            description: "string" === typeof fy && "" !== fy.trim() ? fy : null,
            keepCircleShadows: !0 === Zy
          }
        }(py(hy, Uy.path)),
        Zy = bb.filter((yb => yb.path.toLowerCase().endsWith(".wgsl"))).sort(((yb, bb) => (0, ey.l)(yb.path, bb.path)));
      if (0 === Zy.length) throw new sy("shaderPack:loadNoWgsl");
      if (Zy.length > ey.d) throw new sy("shaderPack:loadTooManyWgsl", {
        count: String(ey.d)
      });
      const cb = Zy.find(((yb, bb) => bb > 0 && yb.path === Zy[bb - 1].path));
      if (cb) throw new sy("shaderPack:loadDuplicatePath", {
        path: cb.path
      });
      const Py = [];
      let oy = ey.f;
      for (const By of Zy) {
        const yb = await By.read(oy);
        if (null === yb) throw new sy("shaderPack:loadSourceTooBig", {
          kilobytes: String(ey.f / 1024)
        });
        oy -= yb.byteLength, Py.push({
          path: By.path,
          source: py(yb, By.path)
        })
      }
      return {
        manifest: fy,
        files: Py
      }
    }

    function Fy(yb) {
      return (yb.webkitRelativePath || yb.path || yb.name).replace(/^\.?\//, "")
    }

    function py(yb, bb) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(yb)
      } catch (Wy) {
        throw new sy("shaderPack:loadNotUtf8", {
          path: bb
        }, {
          cause: Wy
        })
      }
    }
    var Ly = Wy(5850),
      Qy = Wy(952);

    function jb(yb) {
      let {
        busy: bb,
        disabled: Wy,
        onFiles: hy
      } = yb;
      const {
        t: ey
      } = (0, By.D)(), qb = (0, Uy.useRef)(null), sy = !(0, Ky.isMobile)(), {
        getRootProps: Sy,
        getInputProps: Ey,
        isDragActive: ly,
        open: mb
      } = (0, Zy.e)({
        onDrop: hy,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Wy
      });
      return (0, Qy.jsxs)("div", {
        ...Sy({
          className: fy()("ShaderPackDropZone", {
            ActiveDrag: ly,
            Disabled: Wy
          })
        }),
        children: [(0, Qy.jsx)("input", {
          ...Ey({
            webkitdirectory: "true"
          })
        }), (0, Qy.jsx)("input", {
          ref: qb,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(yb) {
            const bb = Array.from(yb.target.files);
            yb.target.value = "", hy(bb)
          }
        }), bb && (0, Qy.jsx)(cb.e, {}), !bb && (0, Qy.jsxs)(Qy.Fragment, {
          children: [(0, Qy.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Qy.jsx)(Py.e, {
              name: "up-from-bracket"
            })
          }), (0, Qy.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: ey(sy ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Qy.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [sy && (0, Qy.jsx)(oy.f, {
              disabled: Wy,
              onClick: mb,
              children: ey("shaderPack:chooseFolder")
            }), (0, Qy.jsx)(oy.f, {
              disabled: Wy,
              onClick: () => {
                qb.current.click()
              },
              children: ey("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Dy(yb) {
      const {
        t: bb
      } = (0, By.D)(), [Wy, hy] = (0, Uy.useState)(!1), [fy, Zy] = (0, Uy.useState)(null), cb = (0, Uy.useRef)(!1);
      return {
        loading: Wy,
        error: fy,
        setError: Zy,
        onFiles: async function(Wy) {
          if (!cb.current) {
            cb.current = !0, hy(!0), Zy(null);
            try {
              await yb(await Hy(Wy))
            } catch (Uy) {
              Uy instanceof sy ? Zy((0, Ly.f)(bb, Uy.translationKey, Uy.params)) : (console.error("Failed to load the shader pack", Uy), Zy(bb("shaderPack:unexpectedError")))
            } finally {
              cb.current = !1, hy(!1)
            }
          }
        }
      }
    }
  },
  5850: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      d: () => Zy,
      f: () => fy
    });
    var Uy = Wy(5852);
    const hy = [yb => yb.strict ? "strict" : "nonStrict", yb => yb.program];

    function fy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Uy = {};
      for (const hy in Wy) Uy[hy] = `\0${hy}\0`;
      return yb(bb, Uy).replace(/\0(\w+)\0/g, ((yb, bb) => Wy[bb]))
    }

    function Zy(yb) {
      return null === yb.file ? null : yb.line > 0 ? `${yb.file}:${yb.line}` : yb.file
    }

    function cb(yb) {
      const bb = new Map(yb.map((yb => [Py(yb).join("."), yb])));
      if (0 === bb.size) return [];
      const Wy = By([...bb.values()]);
      return 0 === Wy[0].length ? [] : Wy
    }

    function Py(yb) {
      return hy.map((bb => bb(yb)))
    }
    const oy = hy.map((yb => new Set(Uy.d.map(yb)).size));

    function By(yb) {
      const bb = hy.map((bb => new Set(yb.map(bb)))),
        Wy = bb.reduce(((yb, bb) => yb * bb.size), 1),
        Uy = bb.every(((yb, bb) => 1 === yb.size || yb.size === oy[bb]));
      if (Wy === yb.length && Uy) return [hy.filter(((yb, Wy) => 1 === bb[Wy].size)).map((bb => bb(yb[0])))];
      let fy = null;
      for (let Zy = 0; Zy < hy.length; Zy++) {
        if (1 === bb[Zy].size) continue;
        const Wy = Ky(yb, hy[Zy]).flatMap(By);
        (null === fy || Wy.length < fy.length) && (fy = Wy)
      }
      return fy
    }

    function Ky(yb, bb) {
      const Wy = new Map;
      for (const hy of yb) {
        var Uy;
        const yb = bb(hy);
        Wy.set(yb, [...null !== (Uy = Wy.get(yb)) && void 0 !== Uy ? Uy : [], hy])
      }
      return [...Wy.values()]
    }
  },
  5852: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy.h,
      d: () => hy,
      e: () => Uy.o
    });
    var Uy = Wy(5835);
    const hy = [!1, !0].flatMap((yb => ["terrain", "liquid", "model"].map((bb => ({
      strict: yb,
      program: bb
    })))))
  },
  5915: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      forgetShaderPackActiveHint: () => ib,
      isOtherApiVersion: () => Gy,
      isShaderPackActive: () => Ty,
      isShaderPackChangePending: () => gb,
      markShaderPackChangePending: () => Jy,
      pageShaderPackValidationVersion: () => Oy,
      reconcileStoredShaderPackHint: () => vb,
      removeShaderPack: () => Cy,
      replaceShaderPack: () => Ey,
      saveShaderPack: () => Sy,
      shaderPackNeedsCheck: () => Ry,
      storedPackOutcome: () => Vy,
      storedShaderPackFiles: () => ey,
      toStoredShaderPack: () => Ky
    });
    var Uy = Wy(5835),
      hy = Wy(5852),
      fy = Wy(33),
      Zy = Wy(2754),
      cb = Wy(5923),
      Py = Wy(5893);
    const oy = "shaderPackChangePending";
    let By = null;

    function Ky(yb, bb, Wy) {
      return {
        manifest: yb.manifest,
        files: (0, Uy.u)(yb.files),
        validation: bb,
        ...Wy && {
          listing: Wy
        }
      }
    }

    function ey(yb) {
      return Object.keys(yb.files).map((bb => ({
        path: bb,
        source: yb.files[bb]
      })))
    }
    let qb = Promise.resolve();

    function sy(yb) {
      const bb = qb.then(yb);
      return qb = bb.catch((() => {})), bb
    }

    function Sy(yb, bb) {
      return sy((() => ly(yb, bb)))
    }

    function Ey(yb, bb, Wy) {
      return sy((async () => JSON.stringify(await (0, cb.g)()) === JSON.stringify(yb) && (null === bb ? (await mb(), !0) : ly(bb, Wy))))
    }
    async function ly(yb, bb) {
      const Wy = await fy.d.setItem(cb.d, yb);
      return Wy && My(yb, bb), Wy
    }
    async function mb() {
      await fy.d.removeItem(cb.d), fy.e.removeItem(Zy.c)
    }

    function Cy() {
      return sy(mb)
    }

    function Ty(yb, bb) {
      return "active" === Vy(yb, bb).kind
    }

    function Vy(yb, bb) {
      var Wy;
      return null === yb ? {
        kind: "none",
        reason: "nothingStored"
      } : Gy(yb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) || yb.validation.fromRecheck ? null === bb ? {
        kind: "none",
        reason: "noCompiler"
      } : Ry(yb, bb) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : yb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Jy() {
      fy.g.setItem(oy, performance.timeOrigin)
    }

    function gb() {
      return fy.g.getItem(oy) === performance.timeOrigin
    }

    function Gy(yb) {
      return !(0, hy.e)(yb.manifest.apiVersion)
    }

    function Oy(yb) {
      return By ??= yb.jWy((0, Py.shaderPackTextures)()), By
    }

    function Ry(yb, bb) {
      var Wy;
      return (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.headerVersion) !== Oy(bb)
    }

    function vb(yb) {
      return sy((async () => {
        My(await (0, cb.g)(!0), yb)
      }))
    }

    function ib() {
      return sy((async () => {
        fy.e.removeItem(Zy.c)
      }))
    }

    function My(yb, bb) {
      Ty(yb, bb) ? fy.e.setItem(Zy.c, !0) : fy.e.removeItem(Zy.c)
    }
  },
  5893: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadShaderPackTextures: () => Zy,
      shaderPackTextures: () => cb
    });
    var Uy = Wy(5835);
    let hy = null,
      fy = null;

    function Zy() {
      return fy ??= Promise.all([Wy.e(63), Wy.e(181)]).then((() => Wy(38999))).then((yb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bb,
          textureNameToIndex: Wy,
          textureAnimationData: fy
        } = yb;
        return hy ??= (0, Uy.k)(Wy, fy, bb), hy
      })), fy
    }

    function cb() {
      if (null === hy) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return hy
    }
  },
  5911: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      e: () => cb
    });
    var Uy = Wy(5915),
      hy = Wy(5893),
      fy = Wy(107);
    const Zy = 100;
    async function cb(yb, bb) {
      var Wy;
      let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Wy = navigator.gpu) && void 0 !== Wy ? Wy : null;
      const Zy = yb.pZy(bb, (0, hy.shaderPackTextures)());
      if (Zy.errors.length > 0) return oy(yb, Zy.errors, Zy.offInStrict);
      const cb = await async function(yb) {
        if (!yb) return null;
        try {
          const bb = await (0, fy.r)(yb);
          return bb ? await bb.requestDevice() : null
        } catch (bb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bb), null
        }
      }(Uy);
      if (!cb) return null;
      let Py = !1;
      cb.lost.then((() => {
        Py = !0
      }));
      try {
        const bb = await Promise.all(Zy.validationModules.map((bb => async function(yb, bb, Wy) {
          bb.pushErrorScope("validation");
          const Uy = bb.createShaderModule({
              code: Wy.code
            }),
            hy = bb.popErrorScope(),
            {
              messages: fy
            } = await Uy.getCompilationInfo(),
            Zy = fy.filter((yb => "error" === yb.type)).map((bb => yb.mapValidationMessage(Wy, bb))),
            cb = await hy;
          cb && 0 === Zy.length && Zy.push({
            file: null,
            line: 0,
            message: cb.message,
            variants: [Wy.key]
          });
          return Zy
        }(yb, cb, bb))));
        return Py ? null : oy(yb, yb.aBy(bb.flat()), Zy.offInStrict)
      } catch (By) {
        return console.error("Couldn't validate the shader pack on WebGPU.", By), null
      } finally {
        cb.destroy()
      }
    }
    async function Py(yb, bb) {
      var Wy;
      if (!(0, Uy.shaderPackNeedsCheck)(yb, bb) || (0, Uy.isOtherApiVersion)(yb)) return yb;
      const hy = await cb(bb, (0, Uy.storedShaderPackFiles)(yb));
      if (!hy) return yb;
      const fy = !1 === (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) && !yb.validation.fromRecheck,
        Zy = {
          ...yb,
          validation: fy ? hy : {
            ...hy,
            fromRecheck: !0
          }
        };
      return await (0, Uy.replaceShaderPack)(yb, Zy, bb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Zy
    }

    function oy(yb, bb, Wy) {
      return {
        headerVersion: (0, Uy.pageShaderPackValidationVersion)(yb),
        ok: 0 === bb.length,
        errors: bb.slice(0, Zy),
        moreErrors: Math.max(0, bb.length - Zy),
        offInStrict: Wy
      }
    }
  },
  5835: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      f: () => fy,
      h: () => Uy,
      k: () => sy,
      l: () => By,
      o: () => hy,
      s: () => Py,
      u: () => oy,
      x: () => Ky
    });
    const Uy = 5;

    function hy(yb) {
      return yb === Uy
    }
    const fy = 262144,
      Zy = 256,
      cb = 256;

    function Py(yb) {
      if ("object" !== typeof yb || null === yb || Array.isArray(yb)) return "The pack has no files.";
      const bb = [];
      for (const [Wy, Uy] of Object.entries(yb)) {
        if ("string" !== typeof Uy) return `${Wy} isn't text.`;
        bb.push({
          path: Wy,
          source: Uy
        })
      }
      return bb.sort(((yb, bb) => By(yb.path, bb.path))),
        function(yb) {
          if (0 === yb.length) return "The pack has no .wgsl files.";
          if (yb.length > Zy) return `The pack has more than ${Zy} .wgsl files.`;
          const bb = new Set;
          for (const {
              path: Wy
            }
            of yb) {
            const yb = ey(Wy);
            if (null !== yb) return yb;
            if (bb.has(Wy)) return `The pack has two files at ${Wy}.`;
            bb.add(Wy)
          }
          return Ky(yb) > fy ? `The pack's .wgsl files are over ${fy/1024} KB in total.` : null
        }(bb) ?? bb
    }

    function oy(yb) {
      const bb = {};
      for (const Wy of yb) bb[Wy.path] = Wy.source;
      return bb
    }

    function By(yb, bb) {
      return yb < bb ? -1 : yb > bb ? 1 : 0
    }

    function Ky(yb) {
      const bb = new TextEncoder;
      let Wy = 0;
      for (const {
          source: Uy
        }
        of yb) Wy += bb.encode(Uy).byteLength;
      return Wy
    }

    function ey(yb) {
      if (!yb.toLowerCase().endsWith(".wgsl")) return `${yb} isn't a .wgsl file.`;
      if (yb.length > cb) return `A file path is over ${cb} characters.`;
      if (yb.includes("\\") || /[\u0000-\u001f]/.test(yb)) return `${yb} isn't a valid file path.`;
      return yb.split("/").some((yb => "" === yb || "." === yb || ".." === yb)) ? `${yb} isn't a valid file path.` : null
    }
    const qb = /^(.*)\[rot\[([1-4])$/;

    function sy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Uy = new Map;
      bb.forEach(((yb, bb) => {
        let {
          numAnimStates: Wy,
          animStartIdx: hy
        } = yb;
        for (let fy = 1; fy < Wy; fy++) Uy.set(hy + fy - 1, bb)
      }));
      const hy = Object.entries(yb),
        fy = new Map;
      for (const [Sy, Ey] of hy) {
        const yb = qb.exec(Sy);
        "1" === yb?.[2] && fy.set(yb[1], Ey + 1)
      }
      const Zy = yb => {
          const bb = qb.exec(yb);
          return bb && fy.has(bb[1]) ? {
            root: bb[1],
            rotation: Number(bb[2]) - 1
          } : null
        },
        cb = new Set(hy.map((yb => {
          let [bb] = yb;
          return Zy(bb)?.root ?? bb
        }))),
        Py = (yb, Wy) => {
          const Uy = yb.replace(/_?0$/, "");
          return (bb[Wy]?.numAnimStates ?? 0) > 1 && !cb.has(Uy) ? Uy : yb
        },
        oy = new Map;
      for (const [qb, Sy] of hy) oy.set(Sy, Py(Zy(qb)?.root ?? qb, Sy));
      const By = hy.reduce(((yb, bb) => {
          let [, Wy] = bb;
          return Math.max(yb, Wy + 1)
        }), 0),
        Ky = Array.from({
          length: By
        }, ((yb, bb) => ({
          id: bb + 1,
          rotation: 0
        }))),
        ey = new Map,
        sy = new Map;
      for (const [qb, Sy] of hy) {
        const yb = Zy(qb),
          bb = Uy.get(Sy);
        if (void 0 !== bb) {
          const Wy = oy.get(bb);
          sy.set(qb, {
            name: qb,
            texture: Wy,
            kind: "frame"
          }), yb && !sy.has(yb.root) && sy.set(yb.root, {
            name: yb.root,
            texture: Wy,
            kind: "frame"
          });
          continue
        }
        const Wy = oy.get(Sy),
          hy = yb?.root ?? qb;
        if (Wy !== hy && sy.set(hy, {
            name: hy,
            texture: Wy,
            kind: "frame"
          }), yb) {
          const bb = fy.get(yb.root);
          Ky[Sy] = {
            id: bb,
            rotation: yb.rotation
          }, ey.set(Wy, bb), sy.set(qb, {
            name: qb,
            texture: Wy,
            kind: "rotation"
          })
        } else ey.set(Wy, Sy + 1)
      }
      for (const qb of ey.keys()) sy.delete(qb);
      for (const [qb, Sy] of Wy) {
        const yb = ey.get(Sy);
        void 0 === yb || ey.has(qb) || (ey.set(qb, yb), sy.delete(qb))
      }
      return {
        named: [...ey].sort(((yb, bb) => {
          let [Wy] = yb, [Uy] = bb;
          return Wy < Uy ? -1 : Wy > Uy ? 1 : 0
        })).map((yb => {
          let [bb, Wy] = yb;
          return {
            name: bb,
            id: Wy
          }
        })),
        aliases: [...sy.values()],
        layers: Ky
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);