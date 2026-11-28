export const id = 308;
export const ids = [308];
export const modules = {
  54026: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => Kd,
      l: () => Xd,
      p: () => vd
    });
    var Wd = md(38736),
      Fd = md(40298),
      Rd = md(40293);

    function Xd(dd, Od, md, Wd) {
      const Fd = Rd.s;
      Od.fill(0), dd.gravity.toArray(Od, Fd.gravity), dd.colorDead.toArray(Od, Fd.colorDead), md[Fd.ramp] = dd.useRampGradients ? 1 : 0;
      const Xd = dd.getColorGradients(),
        Kd = od(dd, Xd, "colour", Wd);
      md[Fd.colorCount] = Kd;
      for (let Rd = 0; Rd < Kd; Rd++) {
        var hd;
        const dd = Xd[Nd(Xd, Rd)];
        Od[Fd.colorPositions + Rd] = dd.gradient, dd.color1.toArray(Od, Fd.color1 + 4 * Rd), (null !== (hd = dd.color2) && void 0 !== hd ? hd : dd.color1).toArray(Od, Fd.color2 + 4 * Rd)
      }
      const vd = dd.getVelocityGradients(),
        Qd = od(dd, vd, "Gy", Wd);
      md[Fd.velocityCount] = Qd;
      for (let Rd = 0; Rd < Qd; Rd++) Td(Od, Fd.Gy + 4 * Rd, vd[Nd(vd, Rd)]);
      const td = dd.useRampGradients ? dd.getColorRemapGradients() : null,
        qd = od(dd, td, "colour remap", Wd);
      md[Fd.remapCount] = qd;
      for (let Rd = 0; Rd < qd; Rd++) Td(Od, Fd.remap + 4 * Rd, td[Nd(td, Rd)])
    }

    function Kd() {
      return {
        key: [],
        texels: new Uint8Array(4 * Rd.k)
      }
    }
    const hd = [];

    function vd(dd, Od) {
      return Qd(dd, hd), !bd(hd, Od.key) && (Od.key.length = 0, Od.key.push(...hd), Od.key.length > 0 && function(dd, Od) {
        for (let md = 0; md < Rd.k; md++) Fd.m.GetCurrentGradient(md / Rd.k, dd, ((dd, Od, md) => {
          Wd.Color3.LerpToRef(dd.color, Od.color, md, td)
        })), Od[4 * md] = 255 * td.r, Od[4 * md + 1] = 255 * td.g, Od[4 * md + 2] = 255 * td.b, Od[4 * md + 3] = 255
      }(dd.getRampGradients(), Od.texels), !0)
    }

    function Qd(dd, Od) {
      Od.length = 0;
      const md = dd.useRampGradients ? dd.getRampGradients() : null;
      if (null !== md && void 0 !== md && md.length) {
        Od.push(md.length);
        for (const dd of md) Od.push(dd.gradient, dd.color.r, dd.color.g, dd.color.b)
      }
    }
    const td = new Wd.Color3;

    function od(dd, Od, md, Wd) {
      return Od ? Od.length > Rd.b ? (Wd(`particleStops:${md}`, `GPU particles use the first 2 and last ${Rd.b-2} of more than ${Rd.b} ${md} gradient stops (${dd.name})`), Rd.b) : Od.length : 0
    }

    function Nd(dd, Od) {
      return Od < 2 || dd.length <= Rd.b ? Od : dd.length - Rd.b + Od
    }
    const qd = new Float32Array(Rd.m),
      Hd = new Uint32Array(qd.buffer);

    function yd(dd, Od, md) {
      return Xd(dd, qd, Hd, md), Od && bd(Hd, Od) ? null : Hd.slice()
    }

    function bd(dd, Od) {
      if (dd.length !== Od.length) return !1;
      for (let md = 0; md < dd.length; md++)
        if (dd[md] !== Od[md]) return !1;
      return !0
    }

    function Td(dd, Od, md) {
      var Wd;
      dd[Od] = md.gradient, dd[Od + 1] = md.factor1, dd[Od + 2] = null !== (Wd = md.factor2) && void 0 !== Wd ? Wd : md.factor1
    }
  },
  43115: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      const Wd = Od * Od * 4,
        Fd = dd[0].layers,
        Rd = Fd * (dd.length - 1) + dd[dd.length - 1].layers,
        Xd = new Uint8Array(Rd * Wd);
      dd.forEach(((Od, md) => {
        const Rd = md + 1 < dd.length ? Math.min(Od.layers, Fd) : Od.layers;
        Xd.set(new Uint8Array(Od.pixels.buffer, Od.pixels.byteOffset, Rd * Wd), md * Fd * Wd)
      }));
      const Kd = Math.max(1, Math.min(Rd, md || Rd));
      if (Kd === Rd) return [{
        pixels: Xd,
        layers: Rd
      }];
      const hd = [];
      for (let vd = 0; vd < Rd; vd += Kd) {
        const dd = Math.min(Rd, vd + Kd);
        hd.push({
          pixels: Xd.slice(vd * Wd, dd * Wd),
          layers: dd - vd
        })
      }
      return hd
    }
    md.d(Od, {
      d: () => Wd,
      h: () => Rd
    });
    const Fd = new WeakMap;

    function Rd(dd, Od, md) {
      var Wd, Rd;
      const Xd = null !== (Wd = Fd.get(dd)) && void 0 !== Wd ? Wd : new Map;
      Fd.set(dd, Xd);
      const Kd = null !== (Rd = Xd.get(Od[0])) && void 0 !== Rd ? Rd : [];
      Xd.set(Od[0], Kd);
      const hd = Kd.find((dd => dd.urls.length === Od.length && dd.urls.every(((dd, md) => dd === Od[md]))));
      if (hd) return hd.built;
      const vd = {
        urls: [...Od],
        built: md()
      };
      return Kd.push(vd), vd.built.catch((() => {
        Kd.splice(Kd.indexOf(vd), 1)
      })), vd.built
    }
  },
  54022: (dd, Od, md) => {
    function Wd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Od = new Set;
      return (md, Wd) => {
        Od.has(md) || (Od.add(md), console.warn(dd + Wd))
      }
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  54060: (dd, Od, md) => {
    md.d(Od, {
      createLiteRendererAsync: () => Lh,
      liteBabylonBackend: () => zd,
      setPipelineFailureHook: () => vO
    });
    var Wd = md(38736),
      Fd = md(39065),
      Rd = md(39459),
      Xd = md(38788),
      Kd = md(39466);
    class hd extends Kd.d {
      constructor() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        super(...Od), this.color = new Wd.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Od[0].zV().getUniqueId(),
          shaderPath: "color",
          fillMode: 4,
          sideOrientation: null,
          alphaMode: 2,
          forceDepthWrite: !1,
          disableDepthWrite: !1,
          backFaceCulling: !0,
          cullBackFaces: !0,
          depthFunction: 0,
          zOffset: 0,
          zOffsetUnits: 0,
          disableColorWrite: !1,
          getClassName: () => "ShaderMaterial",
          needAlphaBlendingForMesh: dd => dd.visibility < 1 || dd.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const vd = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Qd = dd => 1 << vd.indexOf(dd),
      td = Qd("VERTEXCOLOR"),
      od = Qd("INSTANCES"),
      Nd = Qd("THIN_INSTANCES"),
      qd = Qd("INSTANCESCOLOR"),
      Hd = Qd("FOG"),
      yd = Qd("LITE_FRONT_LAYER");

    function bd(dd, Od, md, Wd) {
      let Fd = 0;
      return dd.isVerticesDataPresent("color") && (Fd |= td), "none" !== Od && (Fd |= od), "thin" === Od && (Fd |= Nd, dd.isVerticesDataPresent("instanceColor") && (Fd |= qd)), Wd.fogEnabled && dd.applyFog && 0 !== Wd.fogMode && (Fd |= Hd), md >= 1 && (Fd |= yd), Fd
    }

    function Td(dd, Od) {
      dd.updateColor4("color", Od.color, Od.alpha)
    }
    var pd = md(39391),
      Yd = md(38877),
      gd = md(38799),
      wd = md(38752),
      Ed = md(39371),
      Jd = md(39384),
      Ud = md(38779),
      xd = md(38782),
      Bd = md(38794);
    const Sd = wd.e.GLSL;
    class sd {
      constructor(dd, Od) {
        this.name = dd, this.MH = Od, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.cV = {
          addOnce: dd => {
            this.disposers.push(dd)
          }
        }, this.uniqueId = Od.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      zV() {
        return this.MH
      }
      getClassName() {
        return "LiteMaterial"
      }
      freeze() {
        this.checkReadyOnlyOnce = !0
      }
      unfreeze() {
        this.checkReadyOnlyOnce = !1
      }
      markDirty() {}
      get fillMode() {
        return this.model.fillMode
      }
      needAlphaBlendingForMesh(dd) {
        return (0, Ud.T)(this.model, dd.visibility, dd.hasVertexAlpha)
      }
      needAlphaTestingForMesh(dd) {
        return (0, Ud.W)(this.model, dd.visibility, dd.hasVertexAlpha)
      }
      dispose() {
        (0, Yd.j)(this);
        for (const dd of this.disposers.splice(0)) dd()
      }
      get model() {
        return (0, Ud.db)(this)
      }
    }
    const ud = new WeakSet;

    function Vd(dd) {
      return ud.has(dd)
    }

    function Ad(dd) {
      ud.add(dd)
    }
    const rd = {
      create: (dd, Od) => ((0, gd.p)(dd, new sd(dd.name, Od)), xd.e.defines()),
      write: () => {},
      addFeature: (dd, Od) => {
        const md = dd.mirror;
        Od.feature === Jd.j && Od.state.dirLightCount > 0 && (dd.disableLighting = !0, (0, Ud.ab)(dd)), "BLOXD_LIGHTING" in Od.defines && (0, Yd.i)(md), Od.feature === Ed.h && ((0, pd.k)(Od.state, Sd), function(dd, Od) {
          const md = dd.zV().Iq();
          setTimeout((() => {
            md.atlasArrays(Od.sources).then((md => {
              (0, pd.e)(dd, Od, md.map((dd => ({
                atlas: dd,
                layers: dd.layers
              }))), md[0].layerWidth, Sd)
            })).catch((dd => {
              console.error("Failed to build the atlas's texture arrays", dd)
            }))
          }))
        }(md, Od.state))
      },
      texture: (dd, Od, md) => {
        let {
          data: Wd,
          sets: Fd
        } = md;
        var Rd;
        (Ad(dd), Wd) && (dd.uvSet = null !== (Rd = null === Fd || void 0 === Fd ? void 0 : Fd.coordinatesIndex) && void 0 !== Rd ? Rd : 0, (0, gd.$)(dd.matrix, null !== Fd && void 0 !== Fd ? Fd : {}))
      },
      cube: Ad,
      canvas: (dd, Od, md) => {
        let {
          width: Wd,
          height: Fd,
          mipmaps: Rd,
          samplingMode: Xd = Bd.g.trilinear,
          hasAlpha: Kd = !1,
          wrap: hd = Bd.b.clamp
        } = md;
        const vd = dd.Iq().createCanvas(Wd, Fd),
          Qd = new Bd.h("2d", {
            kind: "canvas",
            width: Wd,
            height: Fd,
            canvas: vd
          }, {
            samplingMode: Xd,
            wrapU: hd,
            wrapV: hd,
            noMipmap: !Rd,
            invertY: !0
          });
        return Qd.hasAlpha = Kd, Ad(Qd), Qd
      }
    };
    var Gd = md(38898),
      nd = md(38660);
    class Ld {
      constructor(dd, Od, md) {
        this.engine = dd, this.clearColor = Od, this.ambientColor = md, this.onBeforeRenderObservable = new nd.c, this.onBeforeCameraRenderObservable = new nd.c, this.onAfterRenderObservable = new nd.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.kE = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Iq() {
        return this.engine
      }
      getUniqueId() {
        return ++this.lastId
      }
      getFrameId() {
        return this.frameId
      }
      getAnimationRatio() {
        return this.animationRatio
      }
      addPendingData(dd) {
        this.pending.push(dd)
      }
      removePendingData(dd) {
        const Od = this.pending.indexOf(dd); - 1 !== Od && this.pending.splice(Od, 1)
      }
      getWaitingItemsCount() {
        return this.pending.length
      }
      isReady() {
        return 0 === this.pending.length
      }
      getActiveMeshes() {
        return []
      }
      render() {
        this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
      }
    }

    function Pd() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const zd = {
      eWd: Pd,
      ARd: (dd, Od) => {
        const md = new Ld(dd.engine, Wd.b.FromArray(Od.clearColor), Wd.Color3.FromArray(Od.ambientColor));
        (0, Xd.d)(rd, md), dd.MH = md,
          function(dd, Od) {
            const md = Object.assign((0, Gd.h)(dd, "camera"), {
              layerMask: 268435455
            });
            dd.model.nodes.setWorldSource(md.row, dd.model.view.worldMatrix), dd.camera = Od.activeCamera = md
          }(dd, md), (0, Fd.e)(dd, ((dd, Od, md) => (0, Rd.h)(dd, Od, md, Kd.d)))
      },
      sRd: () => {},
      setBabylonFog: () => {},
      GRd: Pd,
      zRd: () => {},
      linesFromArrays: (dd, Od, md) => (0, Rd.h)(dd, Od, md, hd),
      Oy: () => {},
      PRd: Pd
    };
    var cd = md(54121),
      jd = md(54134),
      Dd = md(54144);
    class ed {
      constructor(dd) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const Od = new Promise((dd => {
          this.refused = dd
        }));
        this.deviceLost = Promise.race([dd, Od]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(dd) {
        (function(dd) {
          const {
            name: Od,
            message: md
          } = null !== dd && void 0 !== dd ? dd : {};
          return "InvalidStateError" === Od && "string" === typeof md && md.startsWith("GPUDevice.")
        })(dd) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: dd.message,
          framesRefused: !0
        }))
      }
    }
    var Id = md(43115),
      ld = md(40307);

    function Cd(dd) {
      return Math.max(4, 4 * Math.ceil(dd / 4))
    }

    function Zd(dd, Od, md, Wd) {
      const Fd = dd.createBuffer({
        label: Wd,
        size: Cd(Od.byteLength),
        usage: md,
        mappedAtCreation: !0
      });
      return new Uint8Array(Fd.getMappedRange(), 0, Od.byteLength).set(new Uint8Array(Od.buffer, Od.byteOffset, Od.byteLength)), Fd.unmap(), Fd
    }

    function kd(dd, Od) {
      return Math.floor(Math.log2(Math.max(dd, Od))) + 1
    }

    function fd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = dd.createTexture({
          label: Rd,
          size: {
            width: md,
            height: Wd,
            depthOrArrayLayers: Fd
          },
          format: "rgba8unorm",
          mipLevelCount: kd(md, Wd),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Kd = (Od, md, Wd, Rd) => {
          dd.queue.writeTexture({
            texture: Xd,
            mipLevel: md
          }, Od, {
            bytesPerRow: 4 * Wd,
            rowsPerImage: Rd
          }, {
            width: Wd,
            height: Rd,
            depthOrArrayLayers: Fd
          })
        };
      Kd(Od, 0, md, Wd);
      let hd = 1;
      for (const vd of function*(dd, Od, md, Wd) {
          let Fd = dd,
            Rd = Od,
            Xd = md;
          for (; Rd > 1 || Xd > 1;) {
            const dd = Math.max(1, Rd >> 1),
              Od = Math.max(1, Xd >> 1),
              md = new Uint8Array(dd * Od * Wd * 4),
              Kd = 4 * Rd;
            let hd = 0;
            for (let vd = 0; vd < Wd; vd++) {
              const Wd = vd * Kd * Xd;
              for (let vd = 0; vd < Od; vd++) {
                const Od = Wd + Math.min(2 * vd, Xd - 1) * Kd,
                  Qd = Wd + Math.min(2 * vd + 1, Xd - 1) * Kd;
                for (let Wd = 0; Wd < dd; Wd++) {
                  const dd = 4 * Math.min(2 * Wd, Rd - 1),
                    Xd = 4 * Math.min(2 * Wd + 1, Rd - 1);
                  for (let Wd = 0; Wd < 4; Wd++) md[hd++] = Fd[Od + dd + Wd] + Fd[Od + Xd + Wd] + Fd[Qd + dd + Wd] + Fd[Qd + Xd + Wd] + 2 >> 2
                }
              }
            }
            yield {
              data: md,
              width: dd,
              height: Od
            }, Fd = md, Rd = dd, Xd = Od
          }
        }(Od, md, Wd, Fd)) Kd(vd.data, hd++, vd.width, vd.height);
      return Xd
    }
    const Md = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function dO(dd) {
      if (dd.startsWith("data:")) {
        const Od = dd.search(/[;,]/);
        return `data:${Od>5?dd.slice(5,Od):""} URL of ${dd.length} characters`
      }
      return dd.length > 80 ? `${dd.slice(0,80)}...` : dd
    }
    async function OO(dd) {
      const Od = await fetch(dd);
      if (!Od.ok) throw new Error(`${dO(dd)}: ${Od.status} ${Od.statusText}`);
      return createImageBitmap(await Od.blob(), Md)
    }
    async function mO(dd) {
      const Od = await OO(dd),
        md = new OffscreenCanvas(Od.width, Od.height),
        Wd = md.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Wd) throw new Error("No 2D context to decode an image");
      Wd.drawImage(Od, 0, 0);
      const {
        data: Fd
      } = Wd.getImageData(0, 0, Od.width, Od.height);
      return Od.close(), {
        pixels: new Uint8Array(Fd.buffer, Fd.byteOffset, Fd.byteLength),
        width: md.width,
        height: md.height
      }
    }

    function WO(dd, Od) {
      return (0, Id.h)(dd, Od.urls, (async () => {
        const md = await Promise.all(Od.urls.map((async (dd, md) => {
            var Wd, Fd, Rd, Xd, Kd;
            return null !== (Xd = null !== (Fd = null === (Rd = Od.pixels) || void 0 === Rd ? void 0 : Rd[md]) && void 0 !== Fd ? Fd : null, Kd = Od.layerWidth, Wd = null !== Xd && void 0 !== Xd && Xd.byteLength && Kd && Xd.byteLength % (Kd * Kd * 4) === 0 ? {
              pixels: Xd,
              layerWidth: Kd,
              layers: Xd.byteLength / (Kd * Kd * 4)
            } : null) && void 0 !== Wd ? Wd : await async function(dd) {
              const {
                pixels: Od,
                width: md
              } = await mO(dd);
              return {
                pixels: Od,
                layerWidth: md,
                layers: Od.byteLength / (md * md * 4)
              }
            }(dd)
          }))),
          Wd = md[0].layerWidth;
        return (0, Id.d)(md, Wd, dd.limits.maxTextureArrayLayers).map(((md, Fd) => {
          let {
            pixels: Rd,
            layers: Xd
          } = md;
          return {
            texture: fd(dd, Rd, Wd, Wd, Xd, `atlas-${Fd}-${dO(Od.urls[0])}`),
            layerWidth: Wd,
            layers: Xd
          }
        }))
      }))
    }
    const FO = new Map([
        [0, "zero"],
        [1, "one"],
        [768, "src"],
        [769, "one-minus-src"],
        [770, "src-alpha"],
        [771, "one-minus-src-alpha"],
        [772, "dst-alpha"],
        [773, "one-minus-dst-alpha"],
        [774, "dst"],
        [775, "one-minus-dst"],
        [776, "src-alpha-saturated"]
      ]),
      RO = new Map([
        [1, [770, 1, "add"]],
        [2, [770, 771, "add"]],
        [3, [0, 769, "add"]],
        [4, [774, 0, "add"]],
        [5, [770, 769, "add"]],
        [6, [1, 1, "add"]],
        [7, [1, 771, "add"]],
        [8, [1, 771, "add"]],
        [10, [1, 769, "add"]],
        [11, [1, 1, "add"]],
        [14, [1, 771, "add"]],
        [15, [1, 1, "add"]],
        [17, [770, 771, "add"]],
        [18, [1, 1, "min"]],
        [19, [1, 1, "max"]]
      ]);

    function XO(dd) {
      for (const Od of (0, ld.i)(dd))
        if (!RO.has((0, ld.e)(Od))) return !1;
      return !0
    }

    function KO(dd) {
      const Od = RO.get(dd);
      if (!Od) return null;
      const [md, Wd, Fd] = Od;
      return {
        srcFactor: FO.get(md),
        dstFactor: FO.get(Wd),
        operation: Fd
      }
    }
    let hO = null;

    function vO(dd) {
      hO = dd
    }
    const QO = new WeakSet;

    function tO(dd) {
      return QO.has(dd)
    }

    function oO(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var Rd;
      tO(dd) || (null === (Rd = hO) || void 0 === Rd || Rd(Od, md, Wd, Fd))
    }
    class NO {
      constructor(dd) {
        this.resources = dd, this.matrixKey = {
          Mt: 0
        }, this.attributesKey = {
          Mt: 0
        }, this.inputs = Object.create(null);
        for (let Od = 0; Od < 4; Od++) this.inputs[`world${Od}`] = new yO(this.matrixKey, 16 * Od, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(dd, Od) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, dd, !0), Od && this.resources.vertexBufferCreated(this.attributesKey, Od, !0)
      }
    }
    class qO extends NO {
      constructor(dd, Od, md) {
        super(dd), this.mesh = Od, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Wd = this.inputs;
        let Fd = 0;
        for (const {
            size: Xd
          }
          of md) Fd += Xd;
        for (const {
            name: Xd,
            offset: Kd,
            size: hd,
            type: vd
          }
          of md) Wd[Xd] = new yO(this.attributesKey, 4 * Kd, 4 * Fd, hd, !0, vd);
        this.rowStride = Fd, dd.vdd.set(Od, this);
        const Rd = Od.isVerticesDataPresent;
        Od.isVerticesDataPresent = (dd, md) => dd in Wd || Rd.call(Od, dd, md)
      }
      attach(dd, Od) {
        this.matrices = dd, this.attributes = Od, this.bind(dd, Od), this.mirror(dd, dd.length, dd.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      ldd(dd) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, dd ? 64 * dd : void 0)
      }
      Cdd() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(dd, Od) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * dd, 16 * Od)
      }
      attributeRows(dd, Od) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, dd * this.rowStride, Od * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(dd, Od, md) {
        const Wd = this.mesh._thinInstanceDataStorage;
        Wd.matrixData = dd, Wd.matrixBufferSize = Od, Wd.worldMatrices = null, Wd.instancesCount = md
      }
    }
    class HO extends NO {
      constructor(dd, Od, md) {
        var Wd, Fd, Rd, Xd;
        super(dd), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Wd = null === md || void 0 === md ? void 0 : md.interleavedKinds) && void 0 !== Wd ? Wd : null, this.offsets = null !== (Fd = null === md || void 0 === md ? void 0 : md.interleavedOffsets) && void 0 !== Fd ? Fd : [], this.rowStride = null !== (Rd = null === md || void 0 === md ? void 0 : md.interleavedRowStride) && void 0 !== Rd ? Rd : 0, null === (Xd = this.layout) || void 0 === Xd || Xd.forEach(((dd, Od) => {
          this.inputs[dd] = new yO(this.attributesKey, 4 * this.offsets[Od], 4 * this.rowStride, md.strides[dd])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), dd.batchUploads.set(Od, this), Od.cV.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(dd) {
        const Od = this.packedBatch;
        return Od.renderSelf ? 0 === dd ? this.packedSource : Od.instances[dd - 1] : Od.instances[dd]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(dd, Od, md, Wd) {
        const Fd = (Od.renderSelf ? 1 : 0) + Od.rows.length;
        if (this.frame = Wd, this.count = Fd, this.packedSource = dd, this.packedBatch = Od, 0 === Fd) return;
        if (dd.getWorldMatrix(), 16 * Fd > this.matrices.length) {
          let dd = this.matrices.length / 16;
          for (; dd < Fd;) dd *= 2;
          this.matrices = new Float32Array(16 * dd), this.attributes &&= new Float32Array(dd * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Rd = 0;
        Od.renderSelf && this.packRow(Rd++, dd, Od.row, md);
        for (let Xd = 0; Xd < Od.rows.length; Xd++) this.packRow(Rd++, Od.instances[Xd], Od.rows[Xd], md);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Fd), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Fd * this.rowStride)
      }
      packRow(dd, Od, md, Wd) {
        const Fd = this.matrices;
        if (md < 0) Fd.set(Od.getWorldMatrix().m, 16 * dd);
        else
          for (let vd = 0; vd < 16; vd++) Fd[16 * dd + vd] = Wd[16 * md + vd];
        const Rd = this.attributes;
        if (!Rd) return;
        const Xd = Od.xG,
          Kd = this.layout;
        for (let vd = 0; vd < Kd.length; vd++) {
          var hd;
          const Od = null !== (hd = Xd[Kd[vd]]) && void 0 !== hd ? hd : 0,
            md = dd * this.rowStride + this.offsets[vd];
          Od.toArray ? Od.toArray(Rd, md) : Od.copyToArray ? Od.copyToArray(Rd, md) : Rd[md] = Od
        }
      }
    }
    class yO {
      constructor(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = dd, this.byteOffset = Od, this.byteStride = md, this.size = Wd, this.instanced = Fd, this.type = Rd, this.normalized = Xd
      }
      getBuffer() {
        return this.key
      }
      getSize() {
        return this.size
      }
      getIsInstanced() {
        return this.instanced
      }
    }
    const bO = "CANVAS_ALPHA_ONE",
      TO = `override ${bO}: bool = false;`,
      pO = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function YO(dd, Od, md) {
      var Wd;
      let Fd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Rd = null !== (Wd = Od._colorFormat) && void 0 !== Wd ? Wd : "bgra8unorm",
        Xd = Fd ? 15 : 0;
      return md ? {
        ...dd,
        targets: [{
          format: Rd,
          blend: {
            color: md,
            alpha: pO
          },
          writeMask: Xd
        }]
      } : {
        ...dd,
        constants: {
          ...dd.constants,
          [bO]: 1
        },
        targets: [{
          format: Rd,
          writeMask: Xd
        }]
      }
    }

    function gO(dd, Od) {
      dd._renderables.push(Od)
    }

    function wO(dd) {
      return dd._device
    }

    function aO(dd) {
      var Od, md;
      return null !== (Od = null === (md = dd._frameGraph) || void 0 === md ? void 0 : md._tasks) && void 0 !== Od ? Od : []
    }

    function EO(dd) {
      return dd._currentEncoder
    }

    function JO(dd) {
      return dd.createBindGroupLayout({
        label: "lite-scene-equivalent",
        entries: [{
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      })
    }
    const UO = "greater-equal",
      xO = 2e5,
      BO = 1e5,
      SO = new WeakMap;

    function sO(dd, Od) {
      let md = SO.get(dd);
      if (!md) {
        md = {
          module: dd.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, SO.set(dd, md)
      }
      const Wd = `${Od._colorFormat}|${Od._depthStencilFormat}|${Od._sampleCount}`;
      let Fd = md.pipelines.get(Wd);
      if (!Fd) {
        var Rd;
        const {
          module: Xd
        } = md;
        Fd = dd.createRenderPipeline({
          label: `placeholder ${Wd}`,
          layout: dd.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Xd,
            entryPoint: "v"
          },
          fragment: {
            module: Xd,
            entryPoint: "f",
            targets: [{
              format: null !== (Rd = Od._colorFormat) && void 0 !== Rd ? Rd : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Od._depthStencilFormat ? {
            format: Od._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Od._sampleCount
          }
        }), md.pipelines.set(Wd, Fd)
      }
      return Fd
    }

    function uO(dd, Od, md) {
      const Wd = Od.eye,
        Fd = Od.viewMatrix;
      dd[0] = Wd[0] + Fd[2] * md, dd[1] = Wd[1] + Fd[6] * md, dd[2] = Wd[2] + Fd[10] * md
    }
    var VO = md(39516),
      iO = md(54022),
      AO = md(38758);
    const rO = Math.PI,
      GO = rO / 1.95,
      nO = [5e-4 / 94, 125e-7, 5e-4 / 18],
      LO = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((dd => {
        let [Od, md] = dd;
        return .434 * rO * Math.pow(2 * rO / Od, 2) * md
      }));

    function PO(dd, Od, md) {
      const {
        up: Wd,
        mieDirectionalG: Fd
      } = dd, Rd = 1 - jO(1 - Math.exp(Od[1] / 45e4), 0, 1), Xd = dd.rayleigh - (1 - Rd), Kd = Math.hypot(Od[0], Od[1], Od[2]), hd = Kd > 0 ? 1 / Kd : 0, vd = md.sunDir;
      for (let Nd = 0; Nd < 3; Nd++) vd[Nd] = Od[Nd] * hd;
      const Qd = vd[0] * Wd[0] + vd[1] * Wd[1] + vd[2] * Wd[2],
        td = 1e3 * Math.max(0, 1 - Math.exp(-(GO - Math.acos(jO(Qd, -1, 1))) / 1.5));
      md.sunE = td;
      const od = .2 * dd.turbidity * 1e-17 * dd.mieCoefficient;
      for (let Nd = 0; Nd < 3; Nd++) {
        const dd = nO[Nd] * Xd,
          Od = LO[Nd] * od,
          Wd = td / (dd + Od);
        md.inScatterR[Nd] = dd * Wd, md.inScatterM[Nd] = Od * Wd, md.extinctionBeta[Nd] = 8400 * dd + 1250 * Od
      }
      return md.sunsetMix = jO(Math.pow(1 - Qd, 5), 0, 1), md.sunDiscE = 19e3 * td, md.mieScale = (1 - Fd * Fd) / (4 * rO), md.mieBase = 1 + Fd * Fd, md.mieSlope = 2 * Fd, md
    }
    const zO = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const cO = 1 / function(dd) {
      const {
        A: Od,
        B: md,
        C: Wd,
        D: Fd,
        E: Rd,
        F: Xd
      } = zO;
      return (dd * (Od * dd + Wd * md) + Fd * Rd) / (dd * (Od * dd + md) + Fd * Xd) - Rd / Xd
    }(1e3);

    function jO(dd, Od, md) {
      return Math.min(Math.max(dd, Od), md)
    }
    const DO = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function eO(dd, Od) {
      const md = new Map(Od),
        Wd = [],
        Fd = [],
        Rd = () => 0 === Fd.length || Fd[Fd.length - 1].active;
      let Xd = null;
      const Kd = () => {
        const dd = [...md].filter((dd => {
            let [, Od] = dd;
            return !0 !== Od
          })),
          Od = dd.map((dd => {
            let [Od] = dd;
            return Od
          })).join("|");
        Xd = dd.length ? new RegExp(`\\b(${Od})\\b`, "g") : null
      };
      Kd();
      for (const hd of dd.split("\n")) {
        const dd = DO.exec(hd);
        if (!dd) {
          Rd() && Wd.push(Xd ? IO(hd, Xd, md) : hd);
          continue
        }
        const Od = dd[1],
          vd = dd[2].trim();
        if ("ifdef" === Od || "ifndef" === Od || "if" === Od) {
          const dd = Rd(),
            Wd = "if" === Od ? lO(vd, md) : md.has(vd) === ("ifdef" === Od);
          Fd.push({
            active: dd && Wd,
            parentActive: dd,
            taken: Wd
          })
        } else if ("elif" === Od || "else" === Od) {
          const dd = Fd[Fd.length - 1];
          if (!dd) throw new Error(`#${Od} without #if`);
          const Wd = !dd.taken && ("else" === Od || lO(vd, md));
          dd.active = dd.parentActive && Wd, dd.taken = dd.taken || Wd
        } else if ("endif" === Od) {
          if (!Fd.pop()) throw new Error("#endif without #if")
        } else if (Rd()) {
          const [dd, ...Wd] = vd.split(/\s+/);
          "undef" === Od ? md.delete(dd) : md.set(dd, !Wd.length || Wd.join(" ")), Kd()
        }
      }
      if (Fd.length) throw new Error("Unterminated #if");
      return Wd.join("\n")
    }

    function IO(dd, Od, md) {
      return dd.replace(Od, (dd => {
        const Od = md.get(dd);
        return "string" === typeof Od ? Od : dd
      }))
    }

    function lO(dd, Od) {
      var md;
      const Wd = null !== (md = dd.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== md ? md : [];
      let Fd = 0;
      const Rd = () => Wd[Fd],
        Xd = () => Wd[Fd++],
        Kd = dd => {
          const md = /^\d/.test(dd) ? dd : Od.get(dd);
          return "string" === typeof md ? parseInt(md) : Number.NaN
        },
        hd = () => {
          const dd = Xd();
          if ("!" === dd) return !hd();
          if ("(" === dd) {
            const dd = Qd();
            return Xd(), dd
          }
          if ("defined" === dd) {
            const dd = "(" === Rd();
            dd && Xd();
            const md = Xd();
            return dd && Xd(), Od.has(md)
          }
          const md = Rd();
          if ("==" === md || "!=" === md || ">" === md || "<" === md || ">=" === md || "<=" === md) {
            Xd();
            const Od = Kd(dd),
              Wd = Kd(Xd());
            if (Number.isNaN(Od) || Number.isNaN(Wd)) return !1;
            switch (md) {
              case "==":
                return Od === Wd;
              case "!=":
                return Od !== Wd;
              case ">":
                return Od > Wd;
              case "<":
                return Od < Wd;
              case ">=":
                return Od >= Wd;
              default:
                return Od <= Wd
            }
          }
          return Od.has(dd)
        },
        vd = () => {
          let dd = hd();
          for (;
            "&&" === Rd();) {
            Xd();
            const Od = hd();
            dd = dd && Od
          }
          return dd
        },
        Qd = () => {
          let dd = vd();
          for (;
            "||" === Rd();) {
            Xd();
            const Od = vd();
            dd = dd || Od
          }
          return dd
        },
        td = Qd();
      if (Fd !== Wd.length) throw new Error(`Cannot evaluate #if ${dd}`);
      return td
    }
    var CO = md(38856),
      ZO = md(38964),
      kO = md(38973),
      fO = md(42770),
      MO = md(40335);
    const dm = 32,
      Om = [10, 3, 10],
      mm = [21, 7, 21],
      Wm = mm[0] * mm[1] * mm[2],
      Fm = 0,
      Rm = 1,
      Xm = 2,
      Km = 3,
      hm = 64,
      Qm = 512,
      tm = 4 * Wm,
      om = 1536,
      Nm = tm + Wm * om,
      qm = 1073741824,
      Hm = Nm + 1;

    function ym(dd, Od) {
      const md = dd % Od;
      return md < 0 ? md + Od : md
    }

    function bm(dd, Od, md) {
      return Wd = ym(dd, mm[0]), Fd = ym(Od, mm[1]), Rd = ym(md, mm[2]), Wd + mm[0] * (Fd + mm[1] * Rd);
      var Wd, Fd, Rd
    }

    function Tm(dd, Od, md) {
      return dd + 8 * (Od + 8 * md)
    }

    function pm(dd, Od, md) {
      return dd + 4 * (Od + 4 * md)
    }
    const Ym = 65535,
      gm = 0,
      wm = 1,
      am = 2,
      Em = 3;

    function Jm(dd) {
      return Math.ceil(dd * dd / 32)
    }
    const Um = 8192,
      xm = 1 << 18,
      Bm = 65536,
      Sm = 294912,
      sm = 128,
      um = 4096,
      Vm = 16,
      im = 16385,
      Am = 81921,
      rm = 147457,
      Gm = 4194304;
    const nm = [0, 0, 0],
      Lm = [0, 0, 0];

    function Pm(dd, Od, md, Wd) {
      ! function(dd, Od, md) {
        const [Wd, Fd, Rd] = [dd[0], dd[1], dd[2]];
        let Xd, Kd, hd;
        Math.abs(Fd) < .99 ? (Xd = Rd, Kd = 0, hd = -Wd) : (Xd = -Fd, Kd = Wd, hd = 0);
        const vd = Math.hypot(Xd, Kd, hd);
        Od[0] = Xd / vd, Od[1] = Kd / vd, Od[2] = hd / vd, md[0] = Fd * Od[2] - Rd * Od[1], md[1] = Rd * Od[0] - Wd * Od[2], md[2] = Wd * Od[1] - Fd * Od[0]
      }(Wd, nm, Lm);
      const Fd = 1 / 32;
      for (const [Rd, Xd] of [
          [0, nm],
          [4, Lm]
        ]) {
        for (let md = 0; md < 3; md++) dd[Od + Rd + md] = Xd[md] * Fd;
        dd[Od + Rd + 3] = -(Xd[0] * md[0] + Xd[1] * md[1] + Xd[2] * md[2]) * Fd
      }
    }
    class zm {
      constructor() {
        this.words = new Uint32Array(rm), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      ot(dd, Od) {
        this.parts = 0, this.refs = 0, this.view = dd, this.viewAt = Od;
        const md = dd[Od + 1] * dd[Od + 6] - dd[Od + 2] * dd[Od + 5],
          Wd = dd[Od + 2] * dd[Od + 4] - dd[Od] * dd[Od + 6],
          Fd = dd[Od] * dd[Od + 5] - dd[Od + 1] * dd[Od + 4],
          Rd = Math.hypot(md, Wd, Fd) || 1;
        this.light[0] = md / Rd, this.light[1] = Wd / Rd, this.light[2] = Fd / Rd
      }
      add(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= um || ! function(dd, Od, md) {
            const Wd = dd[Od],
              Fd = dd[Od + 1],
              Rd = dd[Od + 2],
              Xd = dd[Od + 3],
              Kd = dd[Od + 4],
              hd = dd[Od + 5],
              vd = dd[Od + 6],
              Qd = dd[Od + 7],
              td = dd[Od + 8],
              od = dd[Od + 9],
              Nd = dd[Od + 10],
              qd = dd[Od + 11],
              Hd = dd[Od + 12],
              yd = dd[Od + 13],
              bd = dd[Od + 14],
              Td = dd[Od + 15],
              pd = Wd * hd - Fd * Kd,
              Yd = Wd * vd - Rd * Kd,
              gd = Wd * Qd - Xd * Kd,
              wd = Fd * vd - Rd * hd,
              Ed = Fd * Qd - Xd * hd,
              Jd = Rd * Qd - Xd * vd,
              Ud = td * yd - od * Hd,
              xd = td * bd - Nd * Hd,
              Bd = td * Td - qd * Hd,
              Sd = od * bd - Nd * yd,
              sd = od * Td - qd * yd,
              ud = Nd * Td - qd * bd,
              Vd = pd * ud - Yd * sd + gd * Sd + wd * Bd - Ed * xd + Jd * Ud;
            if (!(Math.abs(Vd) > 1e-12)) return !1;
            const Ad = 1 / Vd;
            return md[0] = (hd * ud - vd * sd + Qd * Sd) * Ad, md[1] = (Rd * sd - Fd * ud - Xd * Sd) * Ad, md[2] = (yd * Jd - bd * Ed + Td * wd) * Ad, md[3] = (Nd * Ed - od * Jd - qd * wd) * Ad, md[4] = (vd * Bd - Kd * ud - Qd * xd) * Ad, md[5] = (Wd * ud - Rd * Bd + Xd * xd) * Ad, md[6] = (bd * gd - Hd * Jd - Td * Yd) * Ad, md[7] = (td * Jd - Nd * gd + qd * Yd) * Ad, md[8] = (Kd * sd - hd * Bd + Qd * Ud) * Ad, md[9] = (Fd * Bd - Wd * sd - Xd * Ud) * Ad, md[10] = (Hd * Ed - yd * gd + Td * pd) * Ad, md[11] = (od * gd - td * Ed - qd * pd) * Ad, md[12] = (hd * xd - Kd * Sd - vd * Ud) * Ad, md[13] = (Wd * Sd - Fd * xd + Rd * Ud) * Ad, md[14] = (yd * Yd - Hd * wd - bd * pd) * Ad, md[15] = (td * wd - od * Yd + Nd * pd) * Ad, !0
          }(Od, md, this.inverse)) return;
        const {
          view: Wd,
          viewAt: Fd
        } = this, Rd = md;
        let Xd = 1 / 0,
          Kd = 1 / 0,
          hd = -1 / 0,
          vd = -1 / 0,
          Qd = -1 / 0;
        const [td, od, Nd] = this.light;
        for (let gd = 0; gd < 8; gd++) {
          const md = 1 & gd ? dd.hi[0] : dd.lo[0],
            qd = 2 & gd ? dd.hi[1] : dd.lo[1],
            Hd = 4 & gd ? dd.hi[2] : dd.lo[2],
            yd = md * Od[Rd] + qd * Od[Rd + 4] + Hd * Od[Rd + 8] + Od[Rd + 12],
            bd = md * Od[Rd + 1] + qd * Od[Rd + 5] + Hd * Od[Rd + 9] + Od[Rd + 13],
            Td = md * Od[Rd + 2] + qd * Od[Rd + 6] + Hd * Od[Rd + 10] + Od[Rd + 14],
            pd = Wd[Fd] * yd + Wd[Fd + 1] * bd + Wd[Fd + 2] * Td + Wd[Fd + 3],
            Yd = Wd[Fd + 4] * yd + Wd[Fd + 5] * bd + Wd[Fd + 6] * Td + Wd[Fd + 7];
          Xd = Math.min(Xd, pd), Kd = Math.min(Kd, Yd), hd = Math.max(hd, pd), vd = Math.max(vd, Yd), Qd = Math.max(Qd, td * yd + od * bd + Nd * Td)
        }
        if (hd < -1 || vd < -1 || Xd >= 1 || Kd >= 1) return;
        const qd = this.parts++,
          Hd = this.rects;
        Hd[4 * qd] = cm(Xd), Hd[4 * qd + 1] = cm(Kd), Hd[4 * qd + 2] = cm(hd), Hd[4 * qd + 3] = cm(vd);
        const yd = this.inverse,
          {
            cell: bd,
            dims: Td,
            lo: pd
          } = dd,
          Yd = Am + qd * Vm;
        for (let gd = 0; gd < 3; gd++) this.floats[Yd + 4 * gd] = yd[gd] / bd, this.floats[Yd + 4 * gd + 1] = yd[4 + gd] / bd, this.floats[Yd + 4 * gd + 2] = yd[8 + gd] / bd, this.floats[Yd + 4 * gd + 3] = (yd[12 + gd] - pd[gd]) / bd;
        this.words[Yd + 12] = dd.at, this.floats[Yd + 13] = Qd + .001 * (1 + Math.abs(Qd)), this.words[Yd + 14] = Td[0] | Td[1] << 8 | Td[2] << 16
      }
      finish() {
        const dd = sm,
          {
            counts: Od,
            rects: md,
            words: Wd
          } = this;
        Od.fill(0);
        let Fd = 0,
          Rd = 0;
        for (; Rd < this.parts; Rd++) {
          const Wd = 4 * Rd,
            Xd = (md[Wd + 2] - md[Wd] + 1) * (md[Wd + 3] - md[Wd + 1] + 1);
          if (Fd + Xd > 65536) break;
          Fd += Xd;
          for (let Fd = md[Wd + 1]; Fd <= md[Wd + 3]; Fd++)
            for (let Rd = md[Wd]; Rd <= md[Wd + 2]; Rd++) Od[Fd * dd + Rd]++
        }
        let Xd = 0;
        for (let hd = 0; hd < 16384; hd++) Wd[hd] = Xd, Xd += Od[hd], Od[hd] = Wd[hd];
        Wd[16384] = Xd;
        for (let hd = 0; hd < Rd; hd++) {
          const Fd = 4 * hd;
          for (let Rd = md[Fd + 1]; Rd <= md[Fd + 3]; Rd++)
            for (let Xd = md[Fd]; Xd <= md[Fd + 2]; Xd++) Wd[im + Od[Rd * dd + Xd]++] = hd
        }
        const Kd = this.floats;
        for (let hd = 0; hd < 16384; hd++) {
          const dd = im + Wd[hd],
            Od = dd + Math.min(Wd[hd + 1] - Wd[hd], 64);
          for (let md = dd + 1; md < Od; md++) {
            const Od = Wd[md],
              Fd = Kd[81934 + Od * Vm];
            let Rd = md - 1;
            for (; Rd >= dd && Kd[81934 + Wd[Rd] * Vm] < Fd; Rd--) Wd[Rd + 1] = Wd[Rd];
            Wd[Rd + 1] = Od
          }
        }
        this.refs = Fd
      }
    }

    function cm(dd) {
      return Math.min(127, Math.max(0, Math.floor((.5 * dd + .5) * sm)))
    }

    function jm(dd, Od, md, Wd, Fd) {
      for (let Rd = 0; Rd < 4; Rd++)
        for (let Xd = 0; Xd < 4; Xd++) Fd[4 * Rd + Xd] = dd[Od + 4 * Rd] * md[Wd + Xd] + dd[Od + 4 * Rd + 1] * md[Wd + 4 + Xd] + dd[Od + 4 * Rd + 2] * md[Wd + 8 + Xd] + dd[Od + 4 * Rd + 3] * md[Wd + 12 + Xd]
    }

    function Dm(dd, Od, md, Wd, Fd) {
      const Rd = dd[0] - Od,
        Xd = dd[1] - md,
        Kd = dd[2] - Wd,
        hd = dd[3] - Od,
        vd = dd[4] - md,
        Qd = dd[5] - Wd,
        td = dd[6] - Od,
        od = dd[7] - md,
        Nd = dd[8] - Wd;
      if (Math.min(Rd, hd, td) > Fd || Math.max(Rd, hd, td) < -Fd) return !1;
      if (Math.min(Xd, vd, od) > Fd || Math.max(Xd, vd, od) < -Fd) return !1;
      if (Math.min(Kd, Qd, Nd) > Fd || Math.max(Kd, Qd, Nd) < -Fd) return !1;
      const qd = hd - Rd,
        Hd = vd - Xd,
        yd = Qd - Kd,
        bd = td - hd,
        Td = od - vd,
        pd = Nd - Qd,
        Yd = Hd * pd - yd * Td,
        gd = yd * bd - qd * pd,
        wd = qd * Td - Hd * bd;
      if (Math.abs(Yd * Rd + gd * Xd + wd * Kd) > Fd * (Math.abs(Yd) + Math.abs(gd) + Math.abs(wd))) return !1;
      const Ed = [qd, Hd, yd, bd, Td, pd, Rd - td, Xd - od, Kd - Nd];
      for (let Jd = 0; Jd < 3; Jd++) {
        const dd = Ed[3 * Jd],
          Od = Ed[3 * Jd + 1],
          md = Ed[3 * Jd + 2];
        for (let Wd = 0; Wd < 3; Wd++) {
          const qd = 0 === Wd ? 0 : 1 === Wd ? md : -Od,
            Hd = 0 === Wd ? -md : 1 === Wd ? 0 : dd,
            yd = 0 === Wd ? Od : 1 === Wd ? -dd : 0,
            bd = qd * Rd + Hd * Xd + yd * Kd,
            Td = qd * hd + Hd * vd + yd * Qd,
            pd = qd * td + Hd * od + yd * Nd,
            Yd = Fd * (Math.abs(qd) + Math.abs(Hd) + Math.abs(yd));
          if (Math.min(bd, Td, pd) > Yd || Math.max(bd, Td, pd) < -Yd) return !1
        }
      }
      return !0
    }
    const em = new Float32Array(1);
    new Uint32Array(em.buffer);
    var Im = md(40342);

    function lm(dd) {
      const [Od, md, Wd] = Im.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${dd.group}) @binding(${dd.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Od-1}, ${md-1}, ${Wd-1});\n}\n`
    }

    function Cm(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Fd, Rd, Xd] = mm, [Kd, hd, vd] = Om, Qd = Math.log2(dm), td = Wd ? "var<private> bloxdSpCrossed: bool;\n" : "", od = Wd ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${dd.group}) @binding(${dd.QN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${dd.group}) @binding(${dd.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${md?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${td}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${wm}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${am}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${md?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${Em}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Fd}, ${Rd}, ${Xd});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Fd} * (s.y + ${Rd} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Kd}, ${hd}, ${vd}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Qd}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Km}u) {\n\t\treturn named && state == ${Xm}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${tm}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Nm}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Od?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Od?`\t\tif (exits && step > 0 && step % ${fm} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Qd}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Fm}u || kind == ${Rm}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Xm}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${tm}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${od}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Zm = {
      group: 0,
      uniform: 0,
      QN: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function km() {
      const dd = Zm;
      return `${lm(dd)}${Cm(dd,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Im.c}>,\n}\n@group(${dd.group}) @binding(${dd.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${dd.group}) @binding(${dd.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Im.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Im.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Im.d}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const fm = 2;
    const Mm = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function dW(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Wd = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Od.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Fd = "trace" === md || "lit" === md,
        Rd = "maskEdge" === md ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Xd = Fd ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Od.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Od.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===md?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Rd};\n`;
      return `${Wd}${dd.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Fd?function(){const[dd,Od,md]=Im.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${dd}.0, ${Od}.0, ${md}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Xd}}\n`:""}${dd.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Od.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Od.renderOffset});\n}\n`:""}`
    }
    const OW = "bloxdSpOwnTexture";

    function mW(dd) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${dd.texture}) - 1u)))`
    }
    const WW = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${VO.d.map((dd=>{let[Od,md]=dd;return`\tbloxdSpOut.${Od} = (bloxdSpWord & ${md}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function FW(dd) {
      return `bloxdSpFlags(${dd})`
    }
    const RW = `${fO.k}.eyePosition`;

    function XW(dd, Od, md, Wd, Fd) {
      const Rd = dd.indexOf(Od);
      if (Rd < 0 || dd.indexOf(Od, Rd + 1) >= 0) throw new Error(`Lite's ${Fd} program changed at the shader pack ${Wd} hook: ${Rd<0?"no":"more than one"} anchor (lite/${Fd}ShaderPack.ts)`);
      return dd.slice(0, Rd) + md + dd.slice(Rd + Od.length)
    }

    function KW(dd) {
      return dd.sunShadow || dd.airShadow
    }

    function hW(dd, Od) {
      return Od && KW(dd)
    }
    const vW = {
      group: fO.e,
      ...fO.p
    };

    function QW(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!KW(dd)) return "";
      if (Od) {
        const Od = vW,
          Fd = "trace" === md || "lit" === md;
        let Rd = "";
        dd.sunShadow && (Rd = Fd ? `${Cm(Od,!0,"lit"===md)}${Wd=Od,`@group(${Wd.group}) @binding(${Wd.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Wd.group}) @binding(${Wd.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(dd, Od, md) {
          const Wd = `@group(${dd}) @binding(${Od}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return md ? `${Wd}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Mm}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((dd=>`\t{\n\t\tlet o = vec2i(${dd});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Wd
        }(Od.group, fO.r, "maskEdge" === md));
        const Xd = {
          shadowDirection: `${fO.k}.shadowDirection`,
          renderOffset: `${fO.k}.renderOffset`,
          eyePosition: `${fO.k}.eyePosition`
        };
        return `${lm(Od)}${Rd}${function(dd){const[Od,md,Wd]=Im.o;return`@group(${dd.group}) @binding(${dd.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${dd.group}) @binding(${dd.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Od}.0, ${md}.0, ${Wd}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Od)}${dW(dd,Xd,md)}`
      }
      var Wd;
      return `${dd.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${dd.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function tW(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Od) return "";
      const Rd = (Xd = "fragmentInputs.vPositionW", Kd = dd.sunShadow ? {
        normal: md,
        flags: Wd
      } : null, `\n\tbloxdSpShadowPosition = ${Xd};\n${Kd?`\tbloxdSpShadowNormal = normalize(${Kd.normal});\n\tbloxdSpShadowEmissive = (${Kd.flags} & ${VO.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Kd.flags} & ${VO.g}u) != 0u;\n`:""}`);
      var Xd, Kd;
      return dd.sunShadow && ("mask" === Fd || "maskEdge" === Fd) ? `${Rd}${hd="fragmentInputs.position",vd="maskEdge"===Fd,`\n\tbloxdSpShadowPixel = vec2i(${hd}.xy);\n${vd?`\tbloxdSpShadowZ = ${hd}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${hd}.z), dpdy(${hd}.z));\n`:""}`}` : Rd;
      var hd, vd
    }
    const oW = "bloxdSpTextureRotation",
      NW = "bloxdSpTextureLayers",
      qW = `@group(${fO.e}) @binding(${fO.s}) var<storage, read> ${NW}: array<u32>;\n`;

    function HW(dd) {
      return `\tvertexOutputs.vPackTexture = ${NW}[min(u32(${dd}), arrayLength(&${NW}) - 1u)];\n`
    }

    function yW(dd) {
      return void 0 !== dd.uv
    }

    function bW(dd) {
      if (!dd) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (yW(dd)) return function(dd) {
        const {
          texture: Od,
          cells: md,
          layers: Wd
        } = dd, Fd = `textureDimensions(${Od}, bloxdSpLevel)`, Rd = md ? `max(vec2u(vec2f(${Fd}) / ${md}), vec2u(1u))` : Fd, Xd = md ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Rd};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${md}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${md}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Od}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Fd} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Rd};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Od}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Kd;
        if (md)
          if (1 === Wd.length) Kd = `\treturn bloxdSpOwnTexel(${Wd[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const dd = Wd.length - 1;
            Kd = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Wd[dd]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Od = dd - 1; Od >= 0; Od--) Kd += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Wd[Od]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Kd += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Kd = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${dd.id?`var<private> ${OW}: u32;\n`:""}${Xd}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${mW(dd)};\n\treturn ${Rd};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${dd.id?OW:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${mW(dd)};\n${Kd}}\n`
      }(dd);
      const Od = dd,
        md = dd => {
          const md = dd > 0 ? `bloxdSpLayer - ${Od.layers*dd}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${dd}, ${Od.sampler}, bloxdSpTurned, ${md}, round(bloxdSpMipLevel));`
        };
      let Wd = "";
      for (let Rd = 0; Rd < Od.count - 1; Rd++) Wd += `\tif (bloxdSpLayer < ${Od.layers*(Rd+1)}u) {\n\t\t${md(Rd)}\n\t}\n`;
      const Fd = Od.frame ? `${Od.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${oW}: u32;\n${qW}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${oW} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${oW} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${oW} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Fd}${Wd}\t${md(Od.count-1)}\n}\n`
    }

    function TW(dd, Od, md) {
      return !!dd.surface && "bloxdDefaultSurface" !== dd.surface && function(dd, Od) {
        return "liquid" === Od || !dd
      }(Od, md)
    }

    function pW(dd, Od) {
      return dd.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Od.vertexLocalPosition}, ${FW(Od.vertexFlags)});\n\t\tlet bloxdSpVertex = ${dd.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function YW(dd, Od, md, Wd, Fd) {
      if (!dd.surface) return "";
      const Rd = (dd, Od) => `\n\tlet bloxdSpTexelUV = ${dd};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Od}) - 1u));`;
      let Xd = "",
        Kd = "0u, 0u, vec2f(0.0), 0.0";
      const hd = Wd && yW(Wd) ? Wd : null,
        vd = Wd && !yW(Wd) ? Wd : null;
      if (hd) {
        Xd = `${hd.id?`\n\tlet bloxdSpTexture = ${hd.id};\n\t${OW} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${hd.uv};${Rd(function(dd,Od){var md;return`${null!==(md=dd.levelUv)&&void 0!==md?md:dd.cells?`${Od} / ${dd.cells}`:Od} * vec2f(textureDimensions(${dd.texture}))`}(hd,"bloxdSpUv"),hd.texture)}`, Kd = (hd.id ? `${OW}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else vd && (Xd = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${oW} = bloxdSpTexture >> 16u;${Rd(`fragmentInputs.vMainUV1 * ${(0,CO.cb)(vd.width)}`,"textureAtlas0")}`, Kd = `bloxdSpTexture & 0xffffu, ${oW}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Qd = Fd.overlayColour,
        td = Qd ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        od = "bloxdDefaultSurface" !== dd.surface || Qd ? `\n\tbaseColor = vec4f(${td}, baseColor.a);` : "",
        Nd = TW(dd, Od, md) ? `\n\t${Fd.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Xd}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Fd.alpha}, ${Fd.enchantTier}, ${Fd.enchantColour}, ${Fd.enchantSpeed}, ${null!==Qd&&void 0!==Qd?Qd:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Fd.normal}, ${Fd.localPosition}, ${FW(Fd.flags)}, ${Kd});\n\tlet bloxdSpSurface = ${dd.surface}(bloxdSpSurfaceIn);${od}${Nd}\n`
    }
    const gW = "bloxdSpLightIn";

    function wW(dd, Od, md, Wd) {
      if (!dd.light) return "";
      const {
        lambert: Fd,
        diffuse: Rd,
        emissive: Xd,
        ambient: Kd,
        fogColour: hd,
        fogAlpha: vd,
        normal: Qd,
        glow: td
      } = Wd, od = [`${CO.k}.rgb`, `${CO.k}.w`, "uniforms.uAmbientLightColour", "uniforms.uSkyLightColour", CO.j], Nd = ["vec3f(0.0)", "1.0", "vec3f(1.0)", "vec3f(1.0)", "vec3f(0.0)"];

      function qd(dd, Od) {
        return null === td ? dd : `mix(${dd}, ${Od}, ${td})`
      }
      const Hd = (Od ? od.map(((dd, Od) => qd(dd, Nd[Od]))) : Nd).join(", "),
        yd = md ? qd(Fd, "0.0") : "0.0";
      return `\tvar ${gW} = BloxdLightIn(vec3f(0.0), ${yd}, ${Rd}, ${qd(Xd,"vec3f(1.0)")}, ${Kd}, ${Hd}, ${hd}, ${vd}, fragmentInputs.vPositionW, ${Qd}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${gW}.litColour = bloxdLitColour(bloxdSpSurface, ${gW});\n`
    }

    function aW(dd) {
      return dd.light ? `\n\t{\n\t\tlet bloxdSpLight = ${dd.light}(bloxdSpSurface, ${gW});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const EW = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      JW = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      UW = "\treturn color;\n}",
      xW = {
        vertexFlags: "vertexOutputs.vBlockFlags",
        vertexLocalPosition: "vec3f(0.0)",
        flags: "fragmentInputs.vBlockFlags",
        normal: "normalize(fragmentInputs.vNormalW)",
        alpha: "alpha",
        alphaOut: "alpha",
        lambert: "fragmentInputs.vTerrainLambert",
        diffuse: "material.vDiffuseColor.rgb",
        emissive: "material.emissiveAndLevel.xyz",
        ambient: "ambient",
        fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
        fogAlpha: "1.0 - fog",
        enchantTier: "0u",
        enchantColour: "vec4f(0.0)",
        enchantSpeed: "0.0",
        localPosition: "vec3f(0.0)",
        overlayColour: null,
        glow: null
      };
    const BW = Object.freeze({});

    function SW(dd) {
      var Od;
      return !(null === (Od = (0, MO.g)(dd)) || void 0 === Od || !Od.sceneDepth)
    }

    function sW(dd) {
      const Od = (0, MO.g)(dd);
      return !!Od && TW(Od.hooks, Od.strict, Od.program)
    }

    function uW(dd, Od, md, Wd) {
      return XW(dd, Od, md, Wd, "terrain")
    }

    function VW(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Rd = function(dd) {
          return (0, MO.c)(dd.packVariant, dd.liquid ? "liquid" : "terrain")
        }(dd),
        {
          hooks: Xd
        } = Rd,
        Kd = hW(Rd, Wd),
        hd = "edge" === Fd ? "maskEdge" : "plain" === Fd ? "mask" : "trace",
        vd = pW(Xd, xW);
      vd && (Od = uW(Od, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${vd}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Qd = "atlas" === dd.texture ? {
          count: dd.atlasCount,
          layers: dd.atlasLayers,
          width: dd.O4,
          sampler: "atlasSampler",
          frame: dd.animated ? md : null
        } : null,
        td = `${Rd.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${tW(Rd,Kd,xW.normal,xW.flags,hd)}${YW(Xd,Rd.strict,Rd.program,Qd,xW)}`;
      td && (Od = uW(Od, EW, `${EW.slice(0,-1)}${td}`, "surface"));
      const od = aW(Xd);
      return od && (Od = uW(Od, JW, `${wW(Xd,dd.lighting,dd.dirLightCount>0,xW)}${JW}`, "light input"), Od = uW(Od, UW, `${od.slice(1)}${UW}`, "light")), `${(0,fO.z)()}${Rd.sceneDepth?`@group(${fO.e}) @binding(${fO.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${RW};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${QW(Rd,Kd,hd)}${bW(Qd)}${WW}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Rd.code}${Od}`
    }
    const iW = wd.e.WGSL;

    function AW(dd) {
      return void 0 !== dd.packVariant
    }
    const rW = {
        DRd: 0,
        eRd: 4,
        IRd: 8,
        lRd: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      GW = rW.aoLevels + 4,
      nW = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      LW = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      PW = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      zW = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      cW = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      jW = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      DW = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      eW = 0,
      IW = 3,
      lW = 4,
      CW = 5,
      ZW = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${ZO.e}, ${ZO.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${ZO.e}, ${ZO.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      kW = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((dd=>kO.d>>dd&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const fW = {
      Et: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: dd => `animDataPerTex[${dd}]`
    };

    function MW(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fW;
      return `\n\tlet atlasIdxIn = ${dd};\n\tlet animTick = ${md.Et};\n\tlet animTickStride = ${md.stride};\n\tlet numAnimTextures = ${md.count};\n\t${(0,Ed.g)(wd.e.WGSL,md.perTexture)}\n\t${Od}animLayer;\n`
    }

    function dF(dd) {
      const Od = (Od, md) => {
        const Wd = Od > 0 ? `fragmentInputs.texAtlasIndex - ${dd.atlasLayers.toFixed(1)} * ${Od.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${md?"textureSampleLevel":"textureSample"}(textureAtlas${Od}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Wd}))${md?", atlasLod":""})`
      };
      if (1 === dd.atlasCount) return `baseColor = ${Od(0,!1)};`;
      let md = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,CO.cb)(dd.O4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Wd = 0; Wd < dd.atlasCount; Wd++) {
        const Fd = dd.atlasLayers * (Wd + 1) - .5;
        md += `${Wd>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,CO.cb)(Fd)}) {\n\t\tbaseColor = ${Od(Wd,!0)};\n\t}`
      }
      return md
    }

    function OF(dd) {
      return `terrain-${dd.texture}${"atlas"===dd.texture?dd.atlasCount:""}${dd.animated?"-anim":""}${dd.alphaTest?"-test":""}${dd.lighting?"-lit":""}-dir${dd.dirLightCount}${dd.packed?"-packed":""}${AW(dd)?`-sp${dd.packVariant}`:""}${dd.liquid?"-liquid":""}${dd.resting?"-rest":""}`
    }

    function mF(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Wd = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const md = "none" !== dd.texture,
          Wd = "atlas" === dd.texture,
          Fd = dd.dirLightCount > 0,
          Rd = AW(dd);
        if (dd.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${dd.dirLightCount}`);
        let Xd = 1,
          Kd = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Wd) {
          dd.animated && (Kd += `@group(2) @binding(${Xd++}) var<storage, read> animDataPerTex: array<f32>;\n`), Kd += `@group(2) @binding(${Xd++}) var atlasSampler: sampler;\n`;
          for (let Od = 0; Od < dd.atlasCount; Od++) Kd += `@group(2) @binding(${Xd++}) var textureAtlas${Od}: texture_2d_array<f32>;\n`
        } else "single" === dd.texture && (Kd += `@group(2) @binding(${Xd++}) var diffuseSamplerSampler: sampler;\n`, Kd += `@group(2) @binding(${Xd++}) var diffuseSampler: texture_2d<f32>;\n`);
        const hd = function(dd) {
            const Od = DW,
              md = "none" !== dd.texture,
              Wd = "atlas" === dd.texture,
              Fd = AW(dd);
            return dd.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${md?"uv: vec2f,":""}\n\t${Wd?"texAtlasIndices: f32,":""}\n\t${dd.lighting?"aPackedLightLevels: f32,":""}\n\t${Fd?"blockFlagWords: vec2u,":""}\n}\n${ZW}\n${kW}\n${"single"===dd.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${md?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===dd.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Wd?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${dd.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Fd?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Od.position}) position: vec3f,\n\t@location(${Od.normal}) normal: vec4f,\n\t@location(${Od.color}) color: vec4f,\n\t${md?`@location(${Od.uv}) uv: vec2f,`:""}\n\t${dd.lighting?`@location(${Od.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Fd?`@location(${Od.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(dd),
          vd = `\n${zW}\n${LW}\n${PW}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Kd}\n${TO}\n${hd.declarations}\nstruct Varyings {\n\t${"none"===Od?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${dd.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Fd?"@location(5) vTerrainLambert: f32,":""}\n\t${md?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Wd?"@location(7) texAtlasIndex: f32,":""}\n\t${dd.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Rd?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Rd&&Wd?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${dd.resting?"":(0,CO.r)(iW)}\n${jW}\n\n@vertex\nfn mainVertex(${hd.parameter}) -> Varyings {\n\t${hd.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Rd?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${VO.c.placed}u;`:""}\n\t${Rd&&Wd?HW("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${dd.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${md?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Wd?function(dd){return dd?MW("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(dd.animated):""}\n\t${"single"===dd.texture&&dd.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,CO.V)(iW)}\n\t${(0,CO.G)(iW,dd.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${dd.resting?"":cW}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Wd?dF(dd):""}\n\t${"single"===dd.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${md?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${dd.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Fd?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${bO}));\n\t${AW(dd)?(0,CO.$)(wd.e.WGSL):(0,CO.M)(iW)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Qd = new Set;
        dd.lighting && Qd.add("BLOXD_LIGHTING");
        Fd && Qd.add("BLOXD_TERRAIN_DIRECTIONAL");
        return eO(vd, new Map([...Qd].map((dd => [dd, !0]))))
      }(dd, md);
      if (!AW(dd)) return Wd;
      const Fd = VW(dd, Wd, MW, Od, md);
      return "none" === md ? Fd : `${Fd}${function(dd){const Od="none"!==dd.texture&&dd.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${dd.resting?"":cW}\n\t${dd.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Od&&"atlas"===dd.texture?dF(dd):""}\n\t${Od&&"single"===dd.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Od?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${VO.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(dd)}`
    }
    const WF = new Map([
      ["float", {
        wgsl: "f32",
        align: 1,
        floats: 1
      }],
      ["vec2", {
        wgsl: "vec2f",
        align: 2,
        floats: 2
      }],
      ["vec3", {
        wgsl: "vec3f",
        align: 4,
        floats: 3
      }],
      ["vec4", {
        wgsl: "vec4f",
        align: 4,
        floats: 4
      }],
      ["mat4", {
        wgsl: "mat4x4f",
        align: 4,
        floats: 16
      }]
    ]);

    function FF(dd, Od) {
      const md = new Map;
      let Wd = 0;
      const Fd = [],
        Rd = [],
        Xd = [];
      for (const vd of Od) {
        var Kd, hd;
        const Od = null !== (Kd = vd.type.trim().split(/\s+/).pop()) && void 0 !== Kd ? Kd : vd.type,
          Qd = WF.get(Od);
        if (!Qd) throw new Error(`Lite: no uniform layout for ${vd.name}: ${vd.type}`);
        const td = null !== (hd = vd.arraySize) && void 0 !== hd ? hd : 0,
          od = td ? 4 : Qd.align;
        Wd = Math.ceil(Wd / od) * od;
        const Nd = td ? 4 * Math.ceil(Qd.floats / 4) : Qd.floats;
        if (md.set(vd.name, {
            offset: Wd,
            floats: Qd.floats,
            arraySize: td,
            stride: Nd
          }), td && Qd.floats <= 2) {
          const Od = `${dd}_${Xd.length}_strided`;
          Rd.push(`struct ${Od} {\n\t@size(16) el: ${Qd.wgsl},\n}`), Xd.push(vd.name), Fd.push(`\t@align(16) ${vd.name}: array<${Od}, ${td}>,`)
        } else td ? Fd.push(`\t@align(16) ${vd.name}: array<${Qd.wgsl}, ${td}>,`) : Fd.push(`\t${vd.name}: ${Qd.wgsl},`);
        Wd += td ? Nd * td : Qd.floats
      }
      return {
        slots: md,
        floats: Math.max(4, 4 * Math.ceil(Wd / 4)),
        wgsl: `${Rd.join("\n")}\nstruct ${dd} {\n${Fd.join("\n")}\n}\n`,
        stridedArrays: Xd
      }
    }
    const RF = [{
        name: "vDiffuseColor",
        type: "vec4"
      }, {
        name: "vDiffuseInfos",
        type: "vec2"
      }, {
        name: "alphaCutOff",
        type: "float"
      }, {
        name: "vEmissiveColor",
        type: "vec3"
      }, {
        name: "vAmbientColor",
        type: "vec3"
      }, {
        name: "vSpecularColor",
        type: "vec4"
      }, {
        name: "diffuseMatrix",
        type: "mat4"
      }, {
        name: "vReflectionInfos",
        type: "vec2"
      }, {
        name: "reflectionMatrix",
        type: "mat4"
      }],
      XF = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      KF = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function hF(dd, Od) {
      return `#if defined(${dd}) && ${dd}DIRECTUV == 0\nvarying v${Od}UV: vec2f;\n#endif`
    }

    function vF(dd, Od, md) {
      return `#if defined(${dd}) && ${dd}DIRECTUV == 0\nif (uniforms.v${Od}Infos.x==0.)\n{vertexOutputs.v${Od}UV= (uniforms.${md}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Od}UV= (uniforms.${md}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function QF(dd, Od, md) {
      return `#ifdef ${dd}\n#if ${dd}DIRECTUV == 1\n#define v${Od}UV vMainUV1\n#elif ${dd}DIRECTUV == 2\n#define v${Od}UV vMainUV2\n#else\nvarying v${Od}UV: vec2f;\n#endif\nvar ${md}SamplerSampler: sampler;\nvar ${md}Sampler: texture_2d<f32>;\n#endif`
    }
    const tF = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      oF = 256,
      NF = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      qF = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      HF = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      yF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      bF = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      TF = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      pF = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      YF = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qF}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${hF("OPACITY","Opacity")}\n${hF("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${pF}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${HF}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${vF("OPACITY","Opacity","opacity")}\n${vF("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yF}\n#define CUSTOM_VERTEX_MAIN_END\n${bF}\n}\n`;
    const gF = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${QF("OPACITY","Opacity","opacity")}\n${QF("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${pF}\n${TF}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((dd,Od)=>function(dd){const Od=`
    frame.lights[LITE_LIGHT$ {
        dd
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      dd
    }\
    nvar diffuse$ {
      dd
    }: vec4f = $ {
      Od
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      dd
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Od
    }.vLightData, diffuse$ {
      dd
    }.rgb, $ {
      Od
    }.vLightSpecular.rgb, diffuse$ {
      dd
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Od))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, wF = /^([gimus]+)!/, aF = new Set;

    function EF(dd) {
      aF.has(dd) || (aF.add(dd), console.warn(`Lite: no place for plugin code at ${dd} in the standard shader: it is left out`))
    }

    function JF(dd, Od) {
      let md = dd;
      const Wd = new Map;
      for (const [Rd, Xd] of Od) {
        var Fd;
        Wd.set(Rd, `${null!==(Fd=Wd.get(Rd))&&void 0!==Fd?Fd:""}${Xd}\n`)
      }
      for (const [Rd, Xd] of Wd) {
        if (!Rd.startsWith("!")) {
          const dd = `#define ${Rd}`;
          if (!md.includes(dd)) {
            EF(Rd);
            continue
          }
          md = md.replace(dd, (() => `\n${Xd}\n${dd}`));
          continue
        }
        let dd = Rd.substring(1),
          Od = "g";
        if (dd.startsWith("!")) Od = "", dd = dd.substring(1);
        else {
          const md = wF.exec(dd);
          md && (Od = md[1], dd = dd.substring(Od.length + 1))
        }
        const Wd = new RegExp(dd, Od.includes("g") ? Od : `${Od}g`);
        let Fd = Wd.exec(md);
        for (Fd || EF(Rd); Fd;) {
          const dd = Fd,
            Od = Xd.replace(/\$(\d+)/g, ((Od, md) => Number(md) < dd.length ? dd[Number(md)] : ""));
          md = md.substring(0, dd.index) + Od + md.substring(dd.index + dd[0].length), Wd.lastIndex = dd.index + Od.length, Fd = Wd.exec(md)
        }
      }
      return md
    }
    const UF = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      xF = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      BF = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function SF(dd) {
      const Od = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let md = dd.replace(UF, ((dd, md, Wd, Fd, Rd, Xd) => ("attribute" === md ? Od.attributes.push({
        name: Rd,
        type: Xd
      }) : void 0 === md ? Od.varyings.push({
        name: Rd,
        type: Xd,
        interpolation: uF(Xd, Wd, Fd)
      }) : Od.uniforms.push({
        name: Rd,
        type: sF(Xd)
      }), "")));
      return md = md.replace(xF, ((dd, md) => (Od.samplers.add(md), ""))), md = md.replace(BF, ((dd, md, Wd) => (Od.textures.push({
        name: md,
        type: Wd
      }), ""))), Od.body = md, Od
    }

    function sF(dd) {
      const Od = dd.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        md = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Od);
      if (!md) throw new Error(`Lite: unsupported uniform type ${dd}`);
      return md
    }

    function uF(dd, Od, md) {
      return void 0 === Od && void 0 === md ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(dd.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Od ? "@interpolate(flat) " : `@interpolate(${null!==Od&&void 0!==Od?Od:"perspective"}, ${null!==md&&void 0!==md?md:"center"}) `
    }

    function VF(dd) {
      return GF({
        defines: dd.defines,
        vertex: JF(YF, dd.vertexCode),
        fragment: JF(gF, dd.fragmentCode),
        members: [...RF, ...dd.defines.has("OPACITY") ? XF : [], ...dd.defines.has("EMISSIVE") ? KF : [], ...dd.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function iF(dd) {
      const Od = dd.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Od === dd) throw new Error("Lite: fragment main has no return");
      return Od
    }
    const AF = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qF}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${HF}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${yF}\n${bF}\n}\n`,
      rF = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${TF}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function GF(dd) {
      const Od = dd.defines,
        md = SF(eO(dd.vertex, Od)),
        Wd = SF(eO(dd.fragment, Od)),
        Fd = new Map;
      for (const pd of [...md.varyings, ...Wd.varyings]) Fd.has(pd.name) || Fd.set(pd.name, pd);
      const Rd = [...Fd.values()].map(((dd, Od) => `\t@location(${Od}) ${dd.interpolation}${dd.name}: ${dd.type},`)),
        Xd = [...dd.members];
      for (const pd of [...md.uniforms, ...Wd.uniforms]) Xd.some((dd => dd.name === pd.name)) || Xd.push(pd);
      const Kd = FF(dd.structName, Xd),
        hd = [],
        vd = [];
      let Qd = 1;
      const td = new Set;
      for (const pd of [...md.textures, ...Wd.textures]) {
        if (td.has(pd.name)) continue;
        td.add(pd.name);
        const dd = `${pd.name}Sampler`,
          Od = Qd++,
          md = Qd++,
          Wd = pd.type.startsWith("texture_2d_array") ? "2d-array" : pd.type.startsWith("texture_cube") ? "cube" : "2d";
        hd.push({
          name: pd.name,
          binding: Od,
          samplerBinding: md,
          dimension: Wd
        }), vd.push(`@group(2) @binding(${Od}) var ${pd.name}: ${pd.type};`), vd.push(`@group(2) @binding(${md}) var ${dd}: sampler;`)
      }
      for (const pd of [...md.samplers, ...Wd.samplers])
        if (!td.has(pd.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${pd} has no texture`);
      const od = [zW, NF, Kd.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${dd.structName};`, ...vd].join("\n"),
        Nd = md.attributes,
        qd = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...md.attributes.map(((dd, Od) => `\t@location(${Od}) ${dd.name}: ${dd.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Hd = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Rd, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        yd = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Wd.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Rd, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", TO, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${bO}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        bd = dd => {
          for (const Od of Kd.stridedArrays) dd = dd.replace(new RegExp(`\\b${Od}\\s*\\[(.*?)\\]`, "g"), `${Od}[$1].el`);
          return dd
        };
      return {
        vertex: `${od}\n${qd}\n${Hd}\n${bd(md.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${od}\n${yd}\n${iF((Td=bd(Wd.body),Td.includes("fragmentInputs.position")?Td.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Td))}`,
        attributes: Nd,
        material: Kd,
        textures: hd
      };
      var Td
    }
    const nF = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      LF = dd => ({
        name: dd,
        type: "vec3"
      }),
      PF = dd => ({
        name: dd,
        type: "float"
      }),
      zF = FF("EarthSkyUniforms", [LF("viewFrom"), PF("exposureScale"), LF("zenithOffset"), PF("fogOn"), LF("up"), PF("ditherOn"), LF("sun"), PF("turbidity"), LF("tint"), PF("rayleigh"), LF("sunDir"), PF("mieStrength"), LF("inScatterR"), PF("mieFocus"), LF("inScatterM"), PF("sunE"), LF("extinctionBeta"), PF("sunsetMix"), PF("mieScale"), PF("mieBase"), PF("mieSlope"), PF("sunDiscE"), PF("exposure")]),
      cF = `${zW}\n${NF}\n${zF.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      jF = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${nF.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      DF = `\n${TO}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(zO).map((dd=>{let[Od,md]=dd;return`const TONE_${Od}: f32 = ${md};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${cO};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${bO}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var eF = md(38627);
    const IF = new eF.Cq,
      lF = new eF.Cq,
      CF = new eF.Quaternion,
      ZF = new Float64Array(3),
      kF = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      fF = new Float64Array(16);

    function MF(dd, Od, md) {
      const Wd = md.worldMatrix;
      var Fd;
      dd.updateFloat3("viewFrom", Wd[12], Wd[13], Wd[14]), dd.updateFloatsFrom("zenithOffset", Od.cameraOffset, 0, 3), dd.updateFloatsFrom("up", Od.up, 0, 3), Od.luminance > 0 && (dd.updateFloat("exposure", Od.luminance), dd.updateFloat("exposureScale", (Fd = Od.luminance, Math.log2(2 / Math.pow(Fd, 4))))), dd.updateFloat("turbidity", Od.turbidity), dd.updateFloat("rayleigh", Od.rayleigh), dd.updateFloat("mieStrength", Od.mieCoefficient), dd.updateFloat("mieFocus", Od.mieDirectionalG), dd.updateFloatsFrom("tint", Od.tint, 0, 3), dd.updateFloat("fogOn", Od.fog && md.fogEnabled && 0 !== md.fogMode ? 1 : 0), dd.updateFloat("ditherOn", Od.dithering ? 1 : 0);
      const Rd = Od.sunPosition;
      if (IF.set(Rd[0], Rd[1], Rd[2]), !Od.useSunPosition) {
        const dd = Math.PI * (Od.inclination - .5),
          md = 2 * Math.PI * (Od.azimuth - .5);
        IF.set(Od.distance * Math.cos(md) * Math.cos(dd), Od.distance * Math.sin(-dd), Od.distance * Math.sin(md) * Math.cos(dd)), eF.Quaternion.FromUnitVectorsToRef(eF.Cq.UpReadOnly, lF.set(Od.up[0], Od.up[1], Od.up[2]), CF), IF.rotateByQuaternionToRef(CF, IF)
      }
      dd.updateVector3("sun", IF), ZF[0] = IF.x, ZF[1] = IF.y, ZF[2] = IF.z;
      const Xd = PO(Od, ZF, kF);
      dd.updateFloatsFrom("sunDir", Xd.sunDir, 0, 3), dd.updateFloat("sunE", Xd.sunE), dd.updateFloatsFrom("inScatterR", Xd.inScatterR, 0, 3), dd.updateFloatsFrom("inScatterM", Xd.inScatterM, 0, 3), dd.updateFloatsFrom("extinctionBeta", Xd.extinctionBeta, 0, 3), dd.updateFloat("sunsetMix", Xd.sunsetMix), dd.updateFloat("sunDiscE", Xd.sunDiscE), dd.updateFloat("mieScale", Xd.mieScale), dd.updateFloat("mieBase", Xd.mieBase), dd.updateFloat("mieSlope", Xd.mieSlope)
    }

    function dR(dd, Od) {
      const md = fF;
      md[0] = Od.far, md[5] = Od.far, md[10] = Od.far, md[15] = 1;
      const Wd = dd.infiniteDistance;
      for (let Fd = 0; Fd < 3; Fd++) md[12 + Fd] = dd.position[Fd] + (Wd ? Od.worldMatrix[12 + Fd] : 0);
      return fF
    }
    class OR {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(dd, Od, md, Wd, Fd) {
        md !== this.pipeline && (dd.setPipeline(md), this.pipeline = md), dd.setBindGroup(1, Wd, [Fd]);
        const Rd = Od.material.bindGroup;
        Rd !== this.materialGroup && (dd.setBindGroup(2, Rd), this.materialGroup = Rd);
        const Xd = Od.program.packGroup;
        Xd && Xd !== this.packGroup && (dd.setBindGroup(fO.e, Xd), this.packGroup = Xd);
        const {
          vertexBuffers: Kd,
          vertexOffsets: hd
        } = this;
        for (let vd = 0; vd < Od.vertexBuffers.length; vd++) Kd[vd] === Od.vertexBuffers[vd] && hd[vd] === Od.vertexOffsets[vd] || (dd.setVertexBuffer(vd, Od.vertexBuffers[vd], Od.vertexOffsets[vd]), Kd[vd] = Od.vertexBuffers[vd], hd[vd] = Od.vertexOffsets[vd]);
        Od.indexBuffer && Od.indexBuffer !== this.indexBuffer && (dd.setIndexBuffer(Od.indexBuffer, Od.indexFormat), this.indexBuffer = Od.indexBuffer)
      }
    }
    class mR {
      constructor(dd, Od, md, Wd) {
        this.modelMeshes = dd, this.Sdd = Od, this.maker = md, this.warnOnce = Wd, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (dd, Od) => {
          (Od < -1 || Od > 1) && this.warnOnce(`group:${Od}`, `rendering group ${Od} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(dd) {
        this.collectGroup(dd, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(dd, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(dd, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Sdd.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(WR), this.transparentDraws.sort(FR)
      }
      collectGroup(dd, Od, md, Wd, Fd) {
        const Rd = this.modelMeshes.group(Od),
          Xd = this.Sdd.group(Od),
          Kd = 0 === Od ? null === Xd || void 0 === Xd ? void 0 : Xd.opaque : void 0;
        this.collectList(dd, null === Rd || void 0 === Rd ? void 0 : Rd.opaque, Kd || null === Xd || void 0 === Xd ? void 0 : Xd.opaque, Od, !1, md, Fd), Kd && (this.Sdd.drawn += this.maker.bundleDraws(dd, Kd, Od)), this.collectList(dd, null === Rd || void 0 === Rd ? void 0 : Rd.alphaTest, void 0, Od, !1, md, Fd), this.collectList(dd, null === Rd || void 0 === Rd ? void 0 : Rd.transparent, null === Xd || void 0 === Xd ? void 0 : Xd.transparent, Od, !0, Wd, Fd)
      }
      collectList(dd, Od, md, Wd, Fd, Rd, Xd) {
        var Kd;
        const hd = Rd.length;
        Od && this.maker.pushDraws(dd, Od.units, Od.units.length, Wd, Fd, Rd, Od.rows), md && (this.Sdd.drawn += this.maker.pushDraws(dd, md, md.length, Wd, Fd, Rd));
        const vd = Fd ? null === (Kd = this.modelMeshes.group(Wd)) || void 0 === Kd ? void 0 : Kd.text : void 0;
        vd && this.maker.pushDraws(dd, vd.units, vd.units.length, Wd, !0, Rd, vd.rows), Xd && RR(Rd, hd)
      }
    }

    function WR(dd, Od) {
      return dd.program.id - Od.program.id || dd.material.owner.uniqueId - Od.material.owner.uniqueId
    }

    function FR(dd, Od) {
      return dd.material.owner.uniqueId - Od.material.owner.uniqueId
    }

    function RR(dd, Od) {
      for (let md = Od + 1; md < dd.length; md++) {
        const Wd = dd[md];
        let Fd = md - 1;
        for (; Fd >= Od && FR(dd[Fd], Wd) > 0; Fd--) dd[Fd + 1] = dd[Fd];
        dd[Fd + 1] = Wd
      }
    }
    const XR = {};

    function KR(dd) {
      return dd.hasThinInstances ? "thin" : dd.CRd || dd._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function hR(dd, Od, md) {
      return dd ? (md._needUVs = !0, dd.optimizeUVAllocation && (0, Bd.C)(dd.matrix) ? (md[`${Od}DIRECTUV`] = dd.uvSet + 1, md[`MAINUV${dd.uvSet+1}`] = !0) : md[`${Od}DIRECTUV`] = 0, !0) : (md[`${Od}DIRECTUV`] = 0, !1)
    }

    function vR(dd) {
      const Od = new Map;
      for (const md in dd) {
        if (95 === md.charCodeAt(0)) continue;
        const Wd = dd[md],
          Fd = typeof Wd;
        "number" === Fd || "string" === Fd ? Od.set(md, String(Wd)) : Wd && "function" !== Fd && Od.set(md, !0)
      }
      return Od
    }

    function QR(dd) {
      const Od = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: md
        }
        of dd.features)
        for (const dd in md) Od[dd] = md[dd];
      return Od
    }

    function tR(dd) {
      const Od = dd.parts.geometry;
      return null !== Od && void 0 !== Od && Od.live ? Od : null
    }

    function oR(dd) {
      var Od;
      return null !== (Od = tR(dd)) && void 0 !== Od ? Od : XR
    }
    class NR {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = dd, this.warnOnce = Od, this.programWithModel = md, this.packFailed = Wd, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(dd, Od, md, Wd, Fd) {
        const Rd = Od.owner;
        let Xd = this.drawStates.get(Od);
        if (!Xd) {
          const dd = Od.parts.materials[Od.range];
          if (!dd) return this.warnOnce("model", `${md.name} on ${Rd.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Xd = {
            defines: QR(dd),
            model: dd,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Fd,
            groupId: Wd,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Od, Xd)
        }
        if (this.programCurrent(Xd, Od, Fd, Wd)) return Xd.program;
        const {
          model: Kd
        } = Xd, hd = oR(Od), vd = this.instanceLayout(Rd, Fd), Qd = this.definesBits(Rd);
        if (!this.prepareModelDefines(dd, Rd, Kd, Xd.defines, Wd, Fd)) return null;
        Xd.instancing = Fd, Xd.groupId = Wd, Xd.modelVersion = Kd.version, Xd.geometry = hd, Xd.instanceLayout = vd, Xd.definesBits = Qd;
        const td = function(dd) {
          let Od = "";
          for (const [md, Wd] of dd) Od += !0 === Wd ? `${md};` : `${md}=${Wd};`;
          return Od
        }(vR(Xd.defines));
        return td === Xd.definesKey && Xd.packVariant === this.modelPackVariant && Xd.program && !this.packFailed(Xd.program) || (Xd.definesKey = td, Xd.packVariant = this.modelPackVariant, Xd.program = this.programWithModel(Kd, Xd.defines, td)), Xd.program
      }
      programCurrent(dd, Od, md, Wd) {
        return null !== dd.program && !this.packFailed(dd.program) && dd.instancing === md && dd.groupId === Wd && this.definesHold(dd, Od, md)
      }
      definesHold(dd, Od, md) {
        return dd.modelVersion === dd.model.version && dd.geometry === oR(Od) && dd.instanceLayout === this.instanceLayout(Od.owner, md) && dd.definesBits === this.definesBits(Od.owner) && dd.packVariant === this.modelPackVariant
      }
      modelPackKind(dd) {
        var Od;
        return 0 === this.modelPackVariant ? null : null !== (Od = (0, Ud.B)(dd, Jd.j.name)) && void 0 !== Od && Od.active ? "placed" : dd.item ? "item" : dd.lifeform ? "lifeform" : dd.box ? "box" : null
      }
      instanceLayout(dd, Od) {
        var md, Wd, Fd;
        return "thin" === Od ? null !== (Fd = this.resources.vdd.get(dd)) && void 0 !== Fd ? Fd : null : "instanced" === Od && null !== (md = null === (Wd = dd._userInstancedBuffersStorage) || void 0 === Wd ? void 0 : Wd.interleavedKinds) && void 0 !== md ? md : null
      }
      definesBits(dd) {
        const Od = this.view;
        return (dd.visibility < 1 ? 1 : 0) | (dd.hasVertexAlpha ? 2 : 0) | (dd.applyFog ? 4 : 0) | (dd.useVertexColors ? 8 : 0) | (dd.nonUniformScaling ? 16 : 0) | (Od.fogEnabled && 0 !== Od.fogMode ? 32 : 0) | (Od.lightsEnabled ? 64 : 0) | Od.lightCount << 7
      }
      prepareLightDefines(dd, Od, md) {
        let Wd = 0;
        if (this.view.lightsEnabled && !Od) {
          const Od = Math.min(md, 4);
          for (; Wd < this.view.lightCount && (dd[`LIGHT${Wd}`] = !0, dd[`LITE_LIGHT${Wd}_SLOT`] = Wd, Wd++, dd._needNormals = !0, Wd !== Od););
        }
        for (let Fd = Wd; Fd < 4; Fd++) dd[`LIGHT${Fd}`] = !1, dd[`LITE_LIGHT${Fd}_SLOT`] = void 0
      }
      prepareModelDefines(dd, Od, md, Wd, Fd, Rd) {
        const {
          features: Xd
        } = md;
        Wd._needNormals = !1, Wd._needUVs = !1;
        const Kd = this.view;
        this.prepareLightDefines(Wd, md.disableLighting, md.maxSimultaneousLights), Wd.MAINUV1 = !1, Wd.MAINUV2 = !1;
        const hd = md.diffuseTexture;
        hd ? (Wd._needUVs = !0, Wd.DIFFUSE = !0, hd.optimizeUVAllocation && (0, Bd.C)(hd.matrix) ? (Wd.DIFFUSEDIRECTUV = hd.uvSet + 1, Wd[`MAINUV${hd.uvSet+1}`] = !0) : Wd.DIFFUSEDIRECTUV = 0, hd.uvSet > 1 && this.warnOnce(`uvset:${md.name}`, `${md.name} samples UV set ${hd.uvSet+1}, which is not supported`)) : (Wd.DIFFUSE = !1, Wd.DIFFUSEDIRECTUV = 0);
        const vd = md.opacityTexture,
          Qd = md.emissiveTexture;
        Wd.OPACITY = hR(vd, "OPACITY", Wd), Wd.OPACITYRGB = null !== vd && vd.getAlphaFromRGB, Wd.EMISSIVE = hR(Qd, "EMISSIVE", Wd), (vd && vd.uvSet > 1 || Qd && Qd.uvSet > 1) && this.warnOnce(`uvset:${md.name}`, `${md.name} samples a UV set past 2, which is not supported`);
        const td = md.reflectionTexture,
          od = null !== td;
        if (od) {
          if (!this.resources.boundTexture(td)) return !1;
          Wd._needNormals = !0
        }
        Wd.REFLECTION = od, Wd.REFLECTIONMAP_3D = od, Wd.REFLECTIONMAP_SKYBOX = od, Wd.REFLECTIONMAP_OPPOSITEZ = od && (dd.useRightHandedSystem ? !td.invertZ : td.invertZ), Wd.ROUGHNESS = od && md.roughness > 0, Wd.REFLECTIONOVERALPHA = od && md.useReflectionOverAlpha, Wd.LITE_REFLECTION_LUMINANCE = od && "cube" === td.source.kind && td.source.luminance, (Od.skeleton || Od.morphTargetManager) && this.warnOnce(`skin:${Od.name}`, `${Od.name} has bones or morph targets, which are not supported`), Wd.FOG = md.fogEnabled && Od.applyFog && Kd.fogEnabled && 0 !== Kd.fogMode, Wd.NONUNIFORMSCALING = Od.nonUniformScaling;
        const {
          visibility: Nd,
          hasVertexAlpha: qd
        } = Od;
        Wd.ALPHATEST = (0, Ud.W)(md, Nd, qd), Wd.ALPHAFROMDIFFUSE = (0, Ud.nb)(md), Wd.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== md.transparencyMode, Wd.ALPHABLEND = null === md.transparencyMode || (0, Ud.T)(md, Nd, qd), Wd.PREMULTIPLYALPHA = 7 === md.alphaMode || 8 === md.alphaMode, Wd.EMISSIVEASILLUMINATION = md.useEmissiveAsIllumination, Wd.LINKEMISSIVEWITHDIFFUSE = md.linkEmissiveWithDiffuse, Wd.TWOSIDEDLIGHTING = !md.backFaceCulling && md.twoSidedLighting, Wd.INSTANCES = "none" !== Rd, Wd.THIN_INSTANCES = "thin" === Rd, Wd.LITE_FRONT_LAYER = Fd >= 1;
        for (const {
            feature: Ed,
            state: Jd,
            active: Ud
          }
          of Xd) {
          var Hd, yd;
          if (Ud) null === (Hd = (yd = (0, AO.i)(Ed)).prepareDefinesBeforeAttributes) || void 0 === Hd || Hd.call(yd, Jd, Wd, dd, Od)
        }
        this.modelPackKind(md) && (Wd._needNormals = !0), Wd.NORMAL = Wd._needNormals && Od.isVerticesDataPresent("normal"), Wd.UV1 = Wd._needUVs && Od.isVerticesDataPresent("uv"), Wd.UV2 = Wd._needUVs && Od.isVerticesDataPresent("uv2");
        const bd = Od.useVertexColors && Od.isVerticesDataPresent("color");
        Wd.VERTEXCOLOR = bd, Wd.VERTEXALPHA = Od.hasVertexAlpha && bd, Wd.INSTANCESCOLOR = "none" !== Rd && Od.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Ed,
            state: Jd,
            active: Ud
          }
          of Xd) {
          var Td, pd;
          if (Ud) null === (Td = (pd = (0, AO.i)(Ed)).prepareDefines) || void 0 === Td || Td.call(pd, Jd, Wd, dd, Od, md)
        }
        const Yd = dd.Iq();
        for (const {
            feature: Ed,
            state: Jd,
            active: Ud
          }
          of Xd) {
          var gd, wd;
          if (Ud && !1 === (null === (gd = (wd = (0, AO.i)(Ed)).isReadyForSubMesh) || void 0 === gd ? void 0 : gd.call(wd, Jd, Wd, dd, Yd))) return !1
        }
        return !0
      }
    }

    function qR(dd, Od, md) {
      return dd.codeVersion !== Od.version && function(dd, Od) {
        const md = [],
          Wd = [];
        for (const {
            feature: od,
            state: Nd,
            active: qd
          }
          of Od.features) {
          var Fd, Rd, Xd, Kd;
          if (qd) HR(null === (Fd = (Rd = (0, AO.i)(od)).getCustomCode) || void 0 === Fd ? void 0 : Fd.call(Rd, Nd, "vertex", wd.e.WGSL), md), HR(null === (Xd = (Kd = (0, AO.i)(od)).getCustomCode) || void 0 === Xd ? void 0 : Xd.call(Kd, Nd, "fragment", wd.e.WGSL), Wd)
        }
        const hd = [];
        for (const {
            feature: od,
            state: Nd
          }
          of Od.features) {
          var vd, Qd;
          const dd = null === (vd = (Qd = (0, AO.i)(od)).getUniforms) || void 0 === vd ? void 0 : vd.call(Qd, Nd, wd.e.WGSL);
          for (const Od of null !== (td = null === dd || void 0 === dd ? void 0 : dd.ubo) && void 0 !== td ? td : []) {
            var td;
            Od.size && Od.type && hd.push({
              name: Od.name,
              type: Od.type,
              arraySize: Od.arraySize
            })
          }
        }
        dd.vertexCode = md, dd.fragmentCode = Wd, dd.pluginUniforms = hd, dd.codeKey = JSON.stringify([md, Wd, hd]), dd.codeVersion = Od.version
      }(dd, Od), `${md}#${dd.codeKey}`
    }

    function HR(dd, Od) {
      if (dd)
        for (const md in dd) dd[md] && Od.push([md, dd[md]])
    }
    const yR = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class bR {
      constructor(dd) {
        this.warnOnce = dd, this.states = new Map
      }
      renderState(dd, Od, md, Wd) {
        var Fd;
        let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Xd = null !== (Fd = dd.sideOrientation) && void 0 !== Fd ? Fd : Od.sideOrientation;
        Od._getWorldMatrixDeterminant() < 0 && (Xd = 0 === Xd ? 1 : 0);
        const Kd = "triangle-list" === Rd,
          hd = md ? dd.alphaMode : 0,
          vd = (!md || (0 === hd || dd.forceDepthWrite)) && !dd.disableDepthWrite,
          Qd = Kd && dd.backFaceCulling ? dd.cullBackFaces ? "back" : "front" : "none",
          td = Kd && 0 !== Xd ? "ccw" : "cw",
          od = dd.depthFunction,
          Nd = Kd ? dd.zOffset : 0,
          qd = Kd ? dd.zOffsetUnits : 0,
          Hd = !dd.disableColorWrite;
        return Wd && Wd.alphaMode === hd && Wd.depthWrite === vd && Wd.depthFunction === od && Wd.cullMode === Qd && Wd.frontFace === td && Wd.zOffset === Nd && Wd.zOffsetUnits === qd && Wd.colourWrite === Hd && Wd.topology === Rd ? Wd : this.stateFor(hd, vd, od, Qd, td, Nd, qd, Hd, Rd)
      }
      stateFor(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = `${dd}|${Od}|${md}|${Wd}|${Fd}|${Rd}|${Xd}|${Kd}|${hd}`;
        let Qd = this.states.get(vd);
        if (!Qd) {
          var td;
          const od = dd ? KO(dd) : null;
          dd && !od && this.warnOnce(`alpha:${dd}`, `alpha mode ${dd} is not supported`), Qd = {
            key: vd,
            alphaMode: dd,
            depthFunction: md,
            zOffset: Rd,
            zOffsetUnits: Xd,
            topology: hd,
            blend: od,
            depthWrite: Od,
            depthCompare: md && null !== (td = yR.get(md)) && void 0 !== td ? td : null,
            cullMode: Wd,
            frontFace: Fd,
            depthBias: -Xd,
            depthBiasSlopeScale: -Rd,
            colourWrite: Kd
          }, this.states.set(vd, Qd)
        }
        return Qd
      }
    }
    var TR = md(38891);

    function pR(dd) {
      if (!dd.frozen) return -1;
      let Od = dd.version;
      for (const {
          feature: md,
          state: Wd,
          active: Fd
        }
        of dd.features) {
        if (!Fd || !md.bind) continue;
        const dd = (0, AO.i)(md).uniformsVersion;
        if (!dd) return -1;
        Od += dd(Wd)
      }
      return Od
    }
    class YR {
      constructor(dd, Od, md) {
        this.slots = dd, this.data = Od, this.textures = md, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(dd, Od) {
        this.write4(dd, Od, 0, 0, 0, 1)
      }
      updateFloat2(dd, Od, md) {
        this.write4(dd, Od, md, 0, 0, 2)
      }
      updateFloat3(dd, Od, md, Wd) {
        this.write4(dd, Od, md, Wd, 0, 3)
      }
      updateFloat4(dd, Od, md, Wd, Fd) {
        this.write4(dd, Od, md, Wd, Fd, 4)
      }
      updateVector3(dd, Od) {
        this.write4(dd, Od.x, Od.y, Od.z, 0, 3)
      }
      updateVector4(dd, Od) {
        this.write4(dd, Od.x, Od.y, Od.z, Od.w, 4)
      }
      updateColor3(dd, Od) {
        this.write4(dd, Od.r, Od.g, Od.b, 0, 3)
      }
      updateColor4(dd, Od, md) {
        this.write4(dd, Od.r, Od.g, Od.b, md, 4)
      }
      updateFloatsFrom(dd, Od, md, Wd) {
        const Fd = this.slots.get(dd);
        if (!Fd) return;
        const Rd = this.data,
          Xd = Fd.offset;
        for (let Kd = 0; Kd < Wd; Kd++) Rd[Xd + Kd] = Od[md + Kd]
      }
      updateFloat3TimesFloats(dd, Od, md, Wd) {
        const Fd = this.slots.get(dd);
        if (!Fd) return;
        const Rd = this.data,
          Xd = Fd.offset;
        Rd[Xd] = Od[md] * Wd[0], Rd[Xd + 1] = Od[md + 1] * Wd[1], Rd[Xd + 2] = Od[md + 2] * Wd[2]
      }
      Idd(dd, Od) {
        const md = this.slots.get(dd);
        md && this.data.set(Od.m, md.offset)
      }
      updateMatrixFloats(dd, Od) {
        const md = this.slots.get(dd);
        md && this.data.set(Od, md.offset)
      }
      updateFloatArray(dd, Od) {
        const md = this.slots.get(dd);
        if (!md) return;
        if (!md.arraySize || md.stride === md.floats) return void this.data.set(Od, md.offset);
        const Wd = Math.min(Od.length, md.floats * md.arraySize);
        for (let Fd = 0; Fd < Wd; Fd++) this.data[md.offset + Math.floor(Fd / md.floats) * md.stride + Fd % md.floats] = Od[Fd]
      }
      updateArray(dd, Od) {
        this.updateFloatArray(dd, Od)
      }
      setTexture(dd, Od) {
        this.textures.set(dd, Od), this.expected.delete(dd)
      }
      expectTexture(dd) {
        this.textures.set(dd, null), this.expected.add(dd)
      }
      write4(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this.slots.get(dd);
        if (!Xd) return;
        const Kd = this.data,
          hd = Xd.offset;
        Kd[hd] = Od, Rd > 1 && (Kd[hd + 1] = md), Rd > 2 && (Kd[hd + 2] = Wd), Rd > 3 && (Kd[hd + 3] = Fd)
      }
    }

    function gR(dd, Od) {
      const md = tF,
        Wd = TR.j,
        Fd = dd.lights,
        Rd = Math.min(dd.lightCount, 8);
      for (let Xd = 0; Xd < Rd; Xd++) {
        const dd = md.lights + Xd * md.lightStride,
          Rd = Xd * TR.e;
        Od[dd] = Fd[Rd + Wd.vector], Od[dd + 1] = Fd[Rd + Wd.vector + 1], Od[dd + 2] = Fd[Rd + Wd.vector + 2], Od[dd + 3] = Fd[Rd + Wd.kind] === TR.h.directional ? 1 : 0, Od[dd + 4] = Fd[Rd + Wd.diffuse], Od[dd + 5] = Fd[Rd + Wd.diffuse + 1], Od[dd + 6] = Fd[Rd + Wd.diffuse + 2], Od[dd + 7] = Fd[Rd + Wd.range], Od[dd + 8] = Fd[Rd + Wd.specular], Od[dd + 9] = Fd[Rd + Wd.specular + 1], Od[dd + 10] = Fd[Rd + Wd.specular + 2], Od[dd + 11] = Fd[Rd + Wd.range]
      }
      Od[md.fogInfos] = dd.fogMode, Od[md.fogInfos + 1] = dd.fogStart, Od[md.fogInfos + 2] = dd.fogEnd, Od[md.fogInfos + 3] = dd.fogDensity, Od[md.fogColour] = dd.fogColour[0], Od[md.fogColour + 1] = dd.fogColour[1], Od[md.fogColour + 2] = dd.fogColour[2], Od[md.outputHeight] = dd.renderHeight, Od[md.animTick] = dd.animTick, Od[md.timeMs] = dd.timeMs
    }
    class wR {
      constructor(dd) {
        this.instancesOf = dd
      }
      refreshModelUniforms(dd, Od, md, Wd) {
        const Fd = pR(md);
        if (Fd >= 0 && Fd === Od.heldVersion && Od.textures.get("diffuseSampler") === md.diffuseTexture && Od.textures.get("reflectionCubeSampler") === md.reflectionTexture && Od.textures.get("opacitySampler") === md.opacityTexture && Od.textures.get("emissiveSampler") === md.emissiveTexture) return !0;
        if (Fd < 0)
          for (const Rd of this.instancesOf(md)) Rd.heldVersion = -1;
        return this.writeModelUniforms(dd, Od, md, Wd), Od.heldVersion = Fd, !1
      }
      writeModelUniforms(dd, Od, md, Wd) {
        const {
          ubo: Fd
        } = Od, Rd = md.diffuseTexture, Xd = md.diffuseColor;
        Fd.updateFloat4("vDiffuseColor", Xd[0], Xd[1], Xd[2], md.alpha), Rd && (Fd.updateFloat2("vDiffuseInfos", Rd.uvSet, Rd.level), Fd.updateMatrixFloats("diffuseMatrix", Rd.matrix)), Fd.updateFloat("alphaCutOff", md.alphaCutOff), Fd.updateFloatsFrom("vEmissiveColor", md.emissiveColor, 0, 3), Fd.updateFloat3TimesFloats("vAmbientColor", Wd.ambientColour, 0, md.ambientColor);
        const Kd = md.specularColor;
        Fd.updateFloat4("vSpecularColor", Kd[0], Kd[1], Kd[2], md.specularPower), Fd.setTexture("diffuseSampler", Rd);
        const hd = md.opacityTexture;
        hd && (Fd.updateFloat2("vOpacityInfos", hd.uvSet, hd.level), Fd.updateMatrixFloats("opacityMatrix", hd.matrix)), Fd.setTexture("opacitySampler", hd);
        const vd = md.emissiveTexture;
        vd && (Fd.updateFloat2("vEmissiveInfos", vd.uvSet, vd.level), Fd.updateMatrixFloats("emissiveMatrix", vd.matrix)), Fd.setTexture("emissiveSampler", vd);
        const Qd = md.reflectionTexture;
        Qd && Fd.updateMatrixFloats("reflectionMatrix", Qd.matrix), Fd.updateFloat2("vReflectionInfos", Qd ? Qd.level * dd.iblIntensity : 0, md.roughness), Fd.setTexture("reflectionCubeSampler", Qd);
        const td = dd.Iq();
        for (const {
            feature: qd,
            state: Hd,
            active: yd
          }
          of md.features) {
          var od, Nd;
          if (yd) null === (od = (Nd = (0, AO.i)(qd)).bind) || void 0 === od || od.call(Nd, Hd, Fd, dd, td)
        }
      }
    }

    function aR(dd) {
      const Od = dd.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Od) ? "u32" : /i32|^vec\di$/.test(Od) ? "i32" : "f32"
    }

    function ER(dd, Od) {
      const md = dd.getSize(),
        Wd = aR(Od),
        Fd = dd => 4 === md ? `${dd}x4` : 2 === md ? `${dd}x2` : null;
      if ("f32" === Wd) {
        if (5126 === dd.type) return 1 === md ? "float32" : md >= 2 && md <= 4 ? `float32x${md}` : null;
        if (!dd.normalized) return null;
        switch (dd.type) {
          case 5121:
            return Fd("unorm8");
          case 5120:
            return Fd("snorm8");
          case 5123:
            return Fd("unorm16");
          case 5122:
            return Fd("snorm16")
        }
        return null
      }
      const Rd = "u32" === Wd ? "uint" : "sint";
      switch (dd.type) {
        case 5125:
        case 5124:
          return 1 === md ? `${Rd}32` : md <= 4 ? `${Rd}32x${md}` : null;
        case 5121:
        case 5120:
          return Fd(`${Rd}8`);
        case 5123:
        case 5122:
          return Fd(`${Rd}16`)
      }
      return null
    }

    function JR(dd) {
      var Od;
      const md = /(8|16|32)(?:x(\d))?$/.exec(dd);
      return md ? Number(md[1]) / 8 * Number(null !== (Od = md[2]) && void 0 !== Od ? Od : 1) : 4
    }
    class UR {
      constructor(dd, Od, md) {
        this.resources = dd, this.limits = Od, this.warnOnce = md, this.layouts = new Map
      }
      resolveInputs(dd, Od, md, Wd) {
        const Fd = [],
          Rd = md.program.attributes,
          Xd = [];
        for (let Qd = 0; Qd < Rd.length; Qd++) {
          const md = Rd[Qd],
            Kd = md.optional ? null : this.resources.vertexInput(dd, md.name, Wd);
          if (!Kd) {
            const dd = aR(md.type),
              Od = "u32" === dd ? "uint32x4" : "i32" === dd ? "sint32x4" : "float32x4";
            Xd.push(null);
            const Wd = Fd.find((dd => null === dd.data));
            Wd ? Wd.attributes.push({
              shaderLocation: Qd,
              offset: 0,
              format: Od
            }) : Fd.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Qd,
                offset: 0,
                format: Od
              }]
            });
            continue
          }
          const hd = Kd.getBuffer();
          Xd.push(Kd);
          const vd = ER(Kd, md.type);
          if (!vd) return this.warnOnce(`format:${Od}:${md.name}`, `${Od}'s ${md.name} (type ${Kd.type}, size ${Kd.getSize()}) has no WebGPU vertex format`), null;
          const td = Kd.getIsInstanced() ? "instance" : "vertex",
            od = Kd.byteStride,
            Nd = JR(vd),
            qd = Fd.find((dd => dd.data === hd && dd.stride === od && dd.step === td && Kd.byteOffset >= dd.base && Kd.byteOffset - dd.base + Nd <= od));
          qd ? qd.attributes.push({
            shaderLocation: Qd,
            offset: Kd.byteOffset - qd.base,
            format: vd
          }) : Fd.push({
            data: hd,
            base: Kd.byteOffset,
            stride: od,
            step: td,
            attributes: [{
              shaderLocation: Qd,
              offset: 0,
              format: vd
            }]
          })
        }
        if (Fd.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Od}`, `${Od} needs ${Fd.length} vertex buffers`), null;
        let Kd = "";
        for (const Qd of Fd) {
          Kd += `${Qd.stride}${"instance"===Qd.step?"i":"v"}`;
          for (const dd of Qd.attributes) Kd += `,${dd.shaderLocation}:${dd.offset}:${dd.format}`;
          Kd += ";"
        }
        let hd = this.layouts.get(Kd);
        hd || (hd = {
          key: Kd,
          buffers: Fd.map((dd => ({
            arrayStride: dd.stride,
            stepMode: dd.step,
            attributes: dd.attributes
          }))),
          instanceEnds: Fd.map((dd => {
            let Od = -1;
            if ("instance" === dd.step)
              for (const md of dd.attributes) Od = Math.max(Od, md.offset + JR(md.format));
            return Od
          }))
        }, this.layouts.set(Kd, hd));
        const vd = Fd.map((dd => dd.base));
        return {
          program: md,
          sources: Xd,
          layout: hd,
          slotData: Fd.map((dd => dd.data)),
          idd: vd,
          buffers: [],
          offsets: vd,
          ends: [],
          state: null,
          pipelineKey: "",
          pipeline: null,
          pipelineTarget: "",
          geometry: null,
          instanceLayout: null,
          draw: null,
          retained: null,
          gpuVersion: -1,
          fitInstances: 0
        }
      }
    }

    function xR(dd, Od, md, Wd) {
      const Fd = Od.program.program.attributes;
      for (let Rd = 0; Rd < Fd.length; Rd++) {
        if ((Fd[Rd].optional ? null : md.vertexInput(dd, Fd[Rd].name, Wd)) !== Od.sources[Rd]) return !1
      }
      return !0
    }
    const BR = 64;
    class SR {
      constructor(dd, Od, md, Wd) {
        this.device = dd, this.layout = Od, this.frameBuffer = md, this.label = Wd, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(dd) {
        if (dd * BR <= this.data.length) return !1;
        let Od = 2 * this.data.length;
        for (; dd * BR > Od;) Od *= 2;
        const md = new Float32Array(Od);
        return md.set(this.data), this.data = md, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Fd = this.data,
          Rd = dd * BR;
        let Xd = Fd[Rd + 16] !== md;
        for (let Kd = 0; Kd < 16 && !Xd; Kd++) Xd = Fd[Rd + Kd] !== Od[Wd + Kd];
        if (Xd) {
          for (let dd = 0; dd < 16; dd++) Fd[Rd + dd] = Od[Wd + dd];
          Fd[Rd + 16] = md
        }
        return Xd
      }
      upload(dd, Od) {
        this.device.queue.writeBuffer(this.buffer, dd * oF, this.data, dd * BR, (Od - dd) * BR)
      }
      createBuffer() {
        return this.device.createBuffer({
          label: this.label,
          size: this.data.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createBindGroup() {
        return this.device.createBindGroup({
          label: this.label,
          layout: this.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.buffer,
              size: 80
            }
          }]
        })
      }
    }

    function sR(dd) {
      return dd.gpu[Bd.c.lite] ??= dd.materials.map(((Od, md) => ({
        parts: dd,
        range: md,
        owner: dd.owner
      })))
    }

    function uR(dd) {
      var Od, md, Wd;
      return null !== (Od = null !== (md = null === (Wd = dd.parts.materials[dd.range]) || void 0 === Wd ? void 0 : Wd.mirror) && void 0 !== md ? md : dd.owner.material) && void 0 !== Od ? Od : null
    }
    const VR = ["opaque", "alphaTest", "transparent", "text"];

    function iR(dd) {
      for (const Od of VR) dd[Od].units.length = 0, dd[Od].rows.length = 0
    }
    class AR {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, iO.b)("Lite: ")
      }
      attach(dd, Od) {
        this.model = dd, this.mirror = Od
      }
      get worlds() {
        return this.model.nodes.Bt
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(dd) {
        return this.groups.get(dd)
      }
      forEachGroup(dd) {
        this.groups.forEach(dd)
      }
      forEachSelected(dd) {
        for (const [Od, md] of this.groups)
          for (const Wd of VR)
            for (const Fd of md[Wd].units) dd(Fd.owner, "text" === Wd ? "transparent" : Wd, Od)
      }
      select(dd, Od) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(iR);
        const {
          model: md,
          mirror: Wd
        } = this;
        if (!md || !Wd || !dd) return;
        this.rows.length < md.nodes.Mt && (this.rows = new Int32Array(md.nodes.Mt));
        const Fd = this.rows,
          Rd = md.meshes;
        for (let Kd = 0; Kd < Rd.looseCount; Kd++) {
          const dd = Rd.loose[Kd],
            md = Wd.nodes[dd];
          md && !md.isBlocked && md.isEnabled() && !md.Tt.hasAZeroComponent && Rd.selects(dd, Od.frustum) && (this.activate(md, dd), this.selectedCount++)
        }
        const Xd = Rd.selectTextPlanes(Od.frustum, Fd);
        for (let Kd = 0; Kd < Xd; Kd++) {
          const Od = Fd[Kd],
            Rd = Wd.nodes[Od],
            Xd = md.meshes.parts[Od];
          if (!Rd.isVisible || !(Rd.visibility > 0) || 0 === (Rd.layerMask & dd.layerMask) || !Xd) continue;
          const hd = this.groupOf(md.meshes.layer[Od]).text;
          for (const dd of sR(Xd)) hd.units.push(dd), hd.rows.push(Od);
          this.selectedCount++
        }
      }
      instanceBatch(dd) {
        const Od = this.batchOf(dd);
        return Od.dispatched || (Od.dispatched = Od.renderSelf = !0, Od.row = this.rowOf(dd)), Od
      }
      rowOf(dd) {
        return dd.row
      }
      activate(dd, Od) {
        if (!dd.lV) {
          const md = dd;
          if (md.CRd) {
            const dd = this.batchOf(md);
            dd.dispatched = !0, dd.renderSelf = !0, dd.row = Od
          }
          return void this.dispatch(md, Od, Od)
        }
        const md = dd,
          Wd = md.ZRd;
        if (Wd._getWorldMatrixDeterminant() >= 0 !== md._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Wd.name}`, `A mirrored InstancedMesh of ${Wd.name} is not drawn yet`);
        const Fd = this.batchOf(Wd);
        Fd.instances.push(md), Fd.rows.push(Od), Fd.dispatched || (Fd.dispatched = !0, this.dispatch(Wd, Od, this.rowOf(Wd)))
      }
      batchOf(dd) {
        let Od = this.batches.get(dd);
        return Od || (Od = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(dd, Od)), Od.frame !== this.frame && (Od.frame = this.frame, Od.dispatched = !1, Od.renderSelf = !1, Od.instances.length = 0, Od.rows.length = 0), Od
      }
      dispatch(dd, Od, md) {
        const {
          layer: Wd,
          parts: Fd
        } = this.model.meshes;
        if (!Fd[Od]) return;
        const Rd = this.groupOf(Wd[Od]),
          Xd = dd;
        for (const Kd of sR(Fd[Od])) {
          const dd = uR(Kd);
          if (!dd) continue;
          const Od = dd.needAlphaBlendingForMesh(Xd) ? Rd.transparent : dd.needAlphaTestingForMesh(Xd) ? Rd.alphaTest : Rd.opaque;
          Od.units.push(Kd), Od.rows.push(md)
        }
      }
      groupOf(dd) {
        let Od = this.groups.get(dd);
        return Od || (Od = {
          opaque: {
            units: [],
            rows: []
          },
          alphaTest: {
            units: [],
            rows: []
          },
          transparent: {
            units: [],
            rows: []
          },
          text: {
            units: [],
            rows: []
          }
        }, this.groups.set(dd, Od)), Od
      }
    }

    function rR(dd) {
      dd.opaque.length = 0, dd.transparent.length = 0
    }
    class GR {
      constructor() {
        this.jK = new Map, this.enabled = [], this.groups = new Map, this.kQ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(dd) {
        if (this.jK.has(dd)) return;
        const Od = {
          mesh: dd,
          observer: dd.onEffectiveEnabledStateChangedObservable.add((dd => {
            this.rY(Od, dd)
          })),
          index: -1,
          steady: null
        };
        this.jK.set(dd, Od), this.rY(Od, dd.isEnabled())
      }
      remove(dd) {
        const Od = this.jK.get(dd);
        Od && (Od.observer.remove(!0), this.rY(Od, !1), this.jK.delete(dd))
      }
      dropSteady() {
        for (const dd of this.jK.values()) dd.steady = null
      }
      base(dd) {
        return this.jK.get(dd)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          jK: this.jK.size
        }
      }
      forEachSelected(dd) {
        for (const [Od, md] of this.groups) {
          for (const Wd of md.opaque) dd(Wd.owner, "opaque", Od);
          for (const Wd of md.transparent) dd(Wd.owner, "transparent", Od)
        }
        for (const Od of this.kQ) dd(Od.mesh, "opaque", 0)
      }
      group(dd) {
        return this.groups.get(dd)
      }
      forEachGroup(dd) {
        this.groups.forEach(dd)
      }
      select(dd, Od) {
        if (this.drawn = 0, this.selected = 0, this.kQ.length = 0, this.groups.forEach(rR), !dd) return;
        const md = this.enabled;
        for (let Wd = 0; Wd < md.length; Wd++) {
          const Fd = md[Wd];
          if (Fd.steady && Od(Fd, dd)) {
            this.selected++, this.kQ.push(Fd);
            continue
          }
          const Rd = Fd.mesh;
          if (Rd.isBlocked || Rd.Tt.hasAZeroComponent) continue;
          if (!Rd.isVisible || Rd.visibility <= 0 || 0 === (Rd.layerMask & dd.layerMask)) continue;
          if (Rd.CRd) {
            this.warned.has(Rd.name) || (this.warned.add(Rd.name), console.warn(`Lite: thin instance base ${Rd.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Xd
          } = Rd;
          if (!Xd) continue;
          Rd.computeWorldMatrix(), this.selected++;
          const Kd = this.listsFor(Rd.renderingGroupId);
          for (const dd of sR(Xd)) {
            const Od = uR(dd);
            Od && (Od.needAlphaBlendingForMesh(Rd) ? Kd.transparent.push(dd) : Kd.opaque.push(dd))
          }
        }
      }
      rY(dd, Od) {
        if (Od === dd.index >= 0) return;
        dd.steady = null;
        const md = this.enabled;
        if (Od) dd.index = md.length, md.push(dd);
        else {
          const Od = md.pop();
          Od !== dd && (md[dd.index] = Od, Od.index = dd.index), dd.index = -1
        }
      }
      listsFor(dd) {
        let Od = this.groups.get(dd);
        return Od || (Od = {
          opaque: [],
          transparent: []
        }, this.groups.set(dd, Od)), Od
      }
    }
    var nR = md(41288);
    class LR {
      constructor() {
        this.bundle = null, this.stale = !0, this.jK = new Set
      }
    }
    class PR {
      constructor(dd, Od, md) {
        this.device = dd, this.slots = Od, this.host = md, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new LR, this.bS = new LR, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new OR, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = dd => {
          dd.seen !== this.frame && (dd.draw && (dd.draw = null, this.args[5 * dd.slot + 1] = 0, this.argsDirty = !0, this.bS.stale ||= dd.bS), this.frame - dd.seen > 120 && (this.records.delete(dd.unit), this.freeSlots.push(dd.slot), dd.recorded && (this.bundleOf(dd).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(dd) {
          var Od, md;
          let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Od = null === (md = globalThis.navigator) || void 0 === md ? void 0 : md.userAgent) && void 0 !== Od ? Od : "";
          const Fd = dd.adapterInfo;
          return "intel" === (null === Fd || void 0 === Fd ? void 0 : Fd.vendor) && "gen-12lp" === Fd.architecture && Wd.includes("Windows")
        }(dd), (0, nR.G)(this.direct)
      }
      pE() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, nR.G)(this.directThisFrame)
      }
      add(dd, Od, md, Wd) {
        let Fd = this.records.get(dd);
        return Fd || (Fd = this.createRecord(dd), this.records.set(dd, Fd)), Fd.recorded && cR(Fd, Od) || (this.bundleOf(Fd).stale = !0), this.place(Fd, Od, md, Wd), Fd
      }
      bundleOf(dd) {
        return dd.bS ? this.bS : this.main
      }
      addAgain(dd, Od, md, Wd) {
        dd.recorded || (this.bundleOf(dd).stale = !0), this.place(dd, Od, md, Wd)
      }
      place(dd, Od, md, Wd) {
        dd.seen = this.frame, dd.bS && null === dd.draw && (this.bS.stale = !0), dd.draw = Od, this.drawn++, md && this.slots.write(dd.slot, md, Wd) && (this.slotsFrom = Math.min(this.slotsFrom, dd.slot), this.slotsTo = Math.max(this.slotsTo, dd.slot));
        const Fd = this.args,
          Rd = 5 * dd.slot;
        Fd[Rd] === Od.count && Fd[Rd + 1] === Od.instances && Fd[Rd + 2] === Od.first || (Fd[Rd] = Od.count, Fd[Rd + 1] = Od.instances, Fd[Rd + 2] = Od.first, this.argsDirty = !0, this.bS.stale ||= dd.bS)
      }
      bt() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(dd) {
        for (const Od of this.records.values()) Od.draw && Od.seen === this.frame && !Od.bS && dd(Od.draw, this.slots.data, Od.slot * oF / 4)
      }
      resourceDestroyed(dd) {
        this.main.stale ||= this.main.jK.has(dd), this.bS.stale ||= this.bS.jK.has(dd)
      }
      execute(dd, Od, md) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(dd, Od, md, "direct"), this.drawn;
        const Wd = this.host.sceneGroup(Od);
        if (!Wd) return this.main.bundle = null, this.bS.bundle = null, this.recordedSceneGroup = null, this.encode(dd, Od, md, "direct"), this.drawn;
        this.recordedTarget === md && this.recordedSceneGroup === Wd || (this.recordedTarget = md, this.recordedSceneGroup = Wd, this.main.stale = !0, this.bS.stale = !0);
        const Fd = this.main,
          Rd = this.bS;
        let Xd = !1;
        !Fd.stale && Fd.bundle || (Fd.bundle = this.record(Od, md, Wd, "indirect"), Xd = !0);
        const Kd = (0, nR.k)();
        return (Rd.stale || this.rangedEpoch !== Kd) && (this.rangedEpoch = Kd, Rd.bundle = this.drawsRanged() ? this.record(Od, md, Wd, "bS") : this.noRangedBundle(), Xd = !0), Xd && (this.bundles = Rd.bundle ? [Fd.bundle, Rd.bundle] : [Fd.bundle]), dd.executeBundles(this.bundles), dd.setBindGroup(0, Wd), this.drawn
      }
      record(dd, Od, md, Wd) {
        const Fd = this.device.createRenderBundleEncoder({
          label: "bS" === Wd ? "thin-bases-ranged" : "thin-bases",
          colorFormats: dd._colorFormat ? [dd._colorFormat] : [],
          depthStencilFormat: dd._depthStencilFormat,
          sampleCount: dd._sampleCount
        });
        return Fd.setBindGroup(0, md), this.encode(Fd, dd, Od, Wd), Fd.finish()
      }
      noRangedBundle() {
        for (const dd of this.records.values()) dd.bS && (dd.recorded = !1);
        return this.bS.jK.clear(), this.bS.stale = !1, null
      }
      drawsRanged() {
        for (const dd of this.records.values())
          if (dd.bS && dd.draw) return !0;
        return !1
      }
      encode(dd, Od, md, Wd) {
        const Fd = [];
        for (const hd of this.records.values()) "direct" !== Wd && hd.bS !== ("bS" === Wd) || (hd.recorded = !1, hd.draw && Fd.push(hd));
        Fd.sort(jR);
        const Rd = "direct" === Wd ? null : "bS" === Wd ? this.bS : this.main;
        null === Rd || void 0 === Rd || Rd.jK.clear(), this.binder.reset();
        let Xd = !1;
        for (const hd of Fd) {
          var Kd;
          const Fd = hd.draw,
            vd = this.host.pipelineFor(Fd, Od, md);
          if (!vd) {
            this.host.pipelineCompiling(Fd, md) ? Xd = !0 : Rd && this.keep(hd, Fd, Rd.jK);
            continue
          }
          let Qd;
          if (hd.bS && "indirect" !== Wd) {
            const dd = hd.unit.owner;
            Qd = "direct" === Wd && (0, nR.u)(dd) || (0, nR.n)(dd) || void 0
          }
          if (Rd && this.keep(hd, Fd, Rd.jK), 0 === (null === (Kd = Qd) || void 0 === Kd ? void 0 : Kd.count)) continue;
          this.binder.bind(dd, Fd, vd, this.slots.bindGroup, hd.slot * oF);
          const td = 5 * hd.slot;
          if ("indirect" === Wd) {
            Fd.indexBuffer ? dd.drawIndexedIndirect(this.argsBuffer, 4 * td) : dd.drawIndirect(this.argsBuffer, 4 * td);
            continue
          }
          const od = this.args;
          Qd ? zR(dd, null !== Fd.indexBuffer, od, td, Qd) : Fd.indexBuffer ? dd.drawIndexed(od[td], od[td + 1], od[td + 2], 0, 0) : dd.draw(od[td], od[td + 1], od[td + 2], 0)
        }
        Rd && (Rd.stale = Xd)
      }
      keep(dd, Od, md) {
        dd.recorded = !0, dd.pipelineKey = Od.pipelineKey, dd.materialGroup = Od.material.bindGroup, dd.vertexBuffers.length = 0, dd.vertexBuffers.push(...Od.vertexBuffers), dd.vertexOffsets = Od.vertexOffsets, dd.indexBuffer = Od.indexBuffer, dd.indexFormat = Od.indexFormat;
        for (const Wd of Od.vertexBuffers) md.add(Wd);
        Od.indexBuffer && md.add(Od.indexBuffer), md.add(Od.material.buffer);
        for (const Wd of Od.material.bound) Wd && md.add(Wd)
      }
      createRecord(dd) {
        let Od = this.freeSlots.pop();
        return void 0 === Od && (Od = this.slotCount++, this.grow()), {
          unit: dd,
          slot: Od,
          bS: void 0 !== (0, nR.n)(dd.owner),
          seen: -1,
          draw: null,
          recorded: !1,
          pipelineKey: "",
          materialGroup: null,
          vertexBuffers: [],
          vertexOffsets: [],
          indexBuffer: null,
          indexFormat: "uint16"
        }
      }
      grow() {
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.bS.stale = !0), 5 * this.slotCount > this.args.length) {
          const dd = new Uint32Array(2 * this.args.length);
          dd.set(this.args), this.args = dd, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
        }
      }
      createArgsBuffer() {
        return this.device.createBuffer({
          label: "thin-bases-args",
          size: this.args.byteLength,
          usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST
        })
      }
    }

    function zR(dd, Od, md, Wd, Fd) {
      const Rd = md[Wd + 1],
        Xd = Fd.data;
      for (let Kd = 0; Kd < Fd.count; Kd++) {
        const Fd = Math.min(Xd[2 * Kd], Rd),
          hd = Math.min(Xd[2 * Kd + 1], Rd - Fd);
        0 !== hd && (Od ? dd.drawIndexed(md[Wd], hd, md[Wd + 2], 0, Fd) : dd.draw(md[Wd], hd, md[Wd + 2], Fd))
      }
    }

    function cR(dd, Od) {
      if (dd.pipelineKey !== Od.pipelineKey || dd.materialGroup !== Od.material.bindGroup || dd.indexBuffer !== Od.indexBuffer || dd.indexFormat !== Od.indexFormat || dd.vertexOffsets !== Od.vertexOffsets || dd.vertexBuffers.length !== Od.vertexBuffers.length) return !1;
      for (let md = 0; md < dd.vertexBuffers.length; md++)
        if (dd.vertexBuffers[md] !== Od.vertexBuffers[md]) return !1;
      return !0
    }

    function jR(dd, Od) {
      return WR(dd.draw, Od.draw)
    }
    const DR = new WeakMap,
      eR = {
        depth: !1,
        sunShadow: !1
      };

    function IR(dd, Od) {
      let md = DR.get(dd);
      md || (md = new Map, DR.set(dd, md));
      const Wd = `${Od.depth?"-depth":""}${Od.sunShadow?"-shadow":""}${Od.shadowMask?"-mask":""}`;
      let Fd = md.get(Wd);
      if (!Fd) {
        const Rd = [{
          binding: fO.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: fO.i
          }
        }, {
          binding: fO.s,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Od.depth && Rd.push({
          binding: fO.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Od.sunShadow && Rd.push(... function() {
          const dd = GPUShaderStage.FRAGMENT,
            Od = fO.p;
          return [{
            binding: Od.uniform,
            visibility: dd,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Od.QN,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Od.special,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Od.volume,
            visibility: dd,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Od.sampler,
            visibility: dd,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Od.entities,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Od.entityGrids,
            visibility: dd,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Od.shadowMask && Rd.push({
          binding: fO.r,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Fd = dd.createBindGroupLayout({
          label: `${Od.depth?"terrain-":""}shader-pack-inputs${Wd}`,
          entries: Rd
        }), md.set(Wd, Fd)
      }
      return Fd
    }

    function lR(dd) {
      return IR(dd, eR)
    }

    function CR(dd, Od) {
      if (!Od) return !1;
      const md = (0, MO.g)(dd);
      return !!md && hW(md, Od)
    }

    function ZR(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!AW(Od)) return [];
      return [IR(dd, {
        depth: SW(Od.packVariant),
        sunShadow: CR(Od.packVariant, md),
        shadowMask: Wd
      })]
    }
    class kR {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = dd, this.sunShadow = md, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(fO.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = dd.createBuffer({
          label: "shader-pack-inputs",
          size: fO.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Wd = (0, fO.w)(Od);
        this.textures = dd.createBuffer({
          label: "shader-pack-textures",
          size: Wd.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), dd.queue.writeBuffer(this.textures, 0, Wd), this.bindGroup = dd.createBindGroup({
          label: "shader-pack-inputs",
          layout: lR(dd),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: fO.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: fO.s,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(dd, Od, md) {
        (0, fO.D)(this.data, {
          seconds: dd.seconds(),
          lit: md,
          renderOffset: dd.renderOffset(),
          TOd: dd.TOd(),
          eyePosition: Od,
          shadowDirection: dd.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Wd = Od ? this.sunShadow : null;
        if ((Od || md) && !Wd) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!dd && !Wd) return this.bindGroup;
        (dd && dd !== this.depthView || md && md !== this.maskView) && (this.depthView = null !== dd && void 0 !== dd ? dd : this.depthView, this.maskView = null !== md && void 0 !== md ? md : this.maskView, this.groups.clear());
        const Fd = (dd ? 1 : 0) | (Wd ? 2 : 0) | (md ? 4 : 0);
        let Rd = this.groups.get(Fd);
        if (!Rd) {
          const Od = this.entries();
          dd && Od.push({
            binding: fO.n,
            resource: dd
          }), Wd && Od.push(...Wd.entries()), md && Od.push({
            binding: fO.r,
            resource: md
          }), Rd = this.device.createBindGroup({
            label: `${dd||md?"terrain-":""}shader-pack-inputs${dd?"-depth":""}${Wd?"-shadow":""}${md?"-mask":""}`,
            layout: IR(this.device, {
              depth: !!dd,
              sunShadow: !!Wd,
              shadowMask: !!md
            }),
            entries: Od
          }), this.groups.set(Fd, Rd)
        }
        return Rd
      }
      bind(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        dd.setBindGroup(fO.e, this.bindGroupFor(Od, md, Wd))
      }
    }

    function fR(dd, Od, md) {
      if (dd.gpuVersion === Od.gpuBuffersVersion) return !0;
      let Wd;
      do {
        if (Wd = Od.gpuBuffersVersion, !MR(dd, Od, md)) return !1
      } while (Od.gpuBuffersVersion !== Wd);
      return dd.gpuVersion = Wd, dd.fitInstances = 0, !0
    }

    function MR(dd, Od, md) {
      let Wd = null;
      for (let Rd = 0; Rd < dd.slotData.length; Rd++) {
        var Fd;
        const Xd = dd.slotData[Rd],
          Kd = Xd ? Od.gpuBuffer(Xd) : md;
        if (!Kd) return !1;
        Xd && dd.layout.instanceEnds[Rd] < 0 && Od.cover(Xd, Number.POSITIVE_INFINITY), dd.buffers[Rd] = Kd;
        const hd = dd.idd[Rd] + (Xd ? Od.gpuOffset(Xd) : 0);
        hd !== (null !== (Fd = Wd) && void 0 !== Fd ? Fd : dd.offsets)[Rd] && (Wd ??= dd.offsets.slice(), Wd[Rd] = hd), dd.ends[Rd] = Xd ? Od.gpuEnd(Xd) : Kd.size
      }
      return Wd && (dd.offsets = Wd), !0
    }

    function dX(dd, Od, md, Wd) {
      if (Od <= dd.fitInstances) return null;
      const {
        layout: Fd,
        ends: Rd,
        offsets: Xd,
        slotData: Kd,
        idd: hd
      } = dd;
      let vd = !1;
      for (let Qd = 0; Qd < Fd.buffers.length; Qd++) {
        const dd = Fd.instanceEnds[Qd];
        if (dd < 0) continue;
        const Wd = (Od - 1) * Fd.buffers[Qd].arrayStride + dd;
        if (Rd[Qd] - Xd[Qd] < Wd) return {
          index: Qd,
          needed: Wd
        };
        const td = Kd[Qd];
        td && md.cover(td, hd[Qd] + Wd) && (vd = !0)
      }
      return vd && fR(dd, md, Wd), dd.fitInstances = Od, null
    }
    var OX = md(39368),
      mX = md(39395);
    const WX = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      FX = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      RX = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      XX = `((vertexInputs.aPackedLightLevels >> 16u) | ${VO.c.placed}u)`,
      KX = "u32(vertexInputs.aShaderPackItem.x)",
      hX = `${VO.c.lifeform}u`;

    function vX(dd) {
      return "item" === dd.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const QX = "bloxdSpEnchant",
      tX = "floor(finalWorld[3].xyz)";

    function oX(dd, Od, md) {
      return "placed" === Od.kind && dd.reads[md].includes("bloxdFragmentBlockPosition")
    }

    function NX(dd, Od) {
      let [md, Wd] = dd;
      return md === Od.point && Wd === Od.code
    }

    function qX(dd, Od) {
      var md;
      return null === (md = dd.find((dd => dd[Od]))) || void 0 === md ? void 0 : md[Od]
    }

    function HX(dd, Od) {
      const md = qX(dd, "texture"),
        Wd = qX(dd, "enchantTier"),
        Fd = qX(dd, "glow"),
        Rd = qX(dd, "overlay"),
        Xd = Rd ? Od.filter((dd => NX(dd, Rd))).length : 0;
      return Rd && 1 === Xd ? {
        texture: md,
        overlay: Rd,
        enchantTier: Wd,
        glow: Fd
      } : {
        texture: md,
        enchantTier: Wd,
        glow: Fd
      }
    }

    function yX(dd) {
      if ("item" === dd.kind) {
        return {
          vertexFlags: `(${KX} & 0xffffu)`,
          varying: "vPackItem",
          value: KX,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return dd.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: XX,
        varying: "vPackFlags",
        value: XX,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function bX(dd) {
      return "lifeform" === dd.kind ? hX : "0u"
    }

    function TX(dd) {
      return !!dd.BLOXD_PLUGIN_ENCHANTMENT
    }

    function pX(dd, Od) {
      const {
        enchantTier: md
      } = Od;
      return md && TX(Od.defines) && "lifeform" === Od.kind && JX(dd, "enchantTier") ? md : null
    }

    function YX(dd, Od) {
      return TX(Od.defines) && JX(dd, "enchantSpeed")
    }

    function gX(dd) {
      const {
        overlay: Od,
        defines: md
      } = dd;
      if (!Od || !md.DIFFUSE) return null;
      const Wd = md.VERTEXCOLOR || md.INSTANCESCOLOR && md.INSTANCES;
      return `vec4f(${Od.colour}.rgb * uniforms.vDiffuseInfos.y${Wd?" * fragmentInputs.vColor.rgb":""}, ${Od.colour}.a)`
    }
    const wX = "fragmentInputs.vPackTexture";

    function aX(dd) {
      const {
        atlas: Od,
        defines: md,
        texture: Wd
      } = dd;
      if (Od || !md.DIFFUSE) return null;
      if (Wd) return {
        texture: "diffuseSampler",
        ...Wd
      };
      const Fd = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===md.DIFFUSEDIRECTUV?"vMainUV1":2===md.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== dd.kind) return Fd;
      if (!md.BLOXD_PLUGIN_ANIMATED) return {
        ...Fd,
        id: wX
      };
      const Rd = wd.e.WGSL,
        Xd = (0, wd.ob)(Rd, "uAnimStatesNum"),
        Kd = (0, wd.Z)(Rd, (0, OX.g)(Rd), Xd),
        hd = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Xd})`,
        layers: [Kd],
        uv: `vec2f(${hd}.x, ${hd}.y * ${Xd} - ${Kd})`,
        levelUv: hd,
        id: wX
      }
    }

    function EX(dd, Od) {
      return "box" === Od.kind && !!dd.hooks.surface && null !== aX(Od)
    }

    function JX(dd, Od) {
      return dd.reads.fragment.includes(Od)
    }

    function UX(dd) {
      return !!dd.BLOXD_LIGHTING && !dd.BLOXD_UNLIT
    }

    function xX(dd, Od, md, Wd) {
      const Fd = dd.filter((dd => {
        let [md, Wd] = dd;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === md && Wd === Od
      }));
      if (1 !== Fd.length) throw new Error(`A model program for shader packs has ${0===Fd.length?"no":"more than one"} ${Wd} code before fog (lite/modelShaderPack.ts)`);
      return dd.map((dd => dd === Fd[0] ? [dd[0], md] : dd))
    }

    function BX(dd, Od, md, Wd) {
      const {
        hooks: Fd
      } = dd, {
        kind: Rd,
        defines: Xd
      } = Od, Kd = [...md];
      var hd;
      Od.atlas && Fd.surface && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", HW("atlasIdxIn")]), "item" === Rd && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", (0, wd.f)(wd.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), EX(dd, Od) && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", (0, wd.f)(wd.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (hd = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${NW}[min(u32(${hd}) - 1u, arrayLength(&${NW}) - 1u)], ${hd} > 0.5);\n`)]);
      const vd = yX(Od);
      vd && (Fd.surface || Fd.light) && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${vd.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${vd.varying} = ${vd.value};`]);
      let Qd = Wd;
      if (oX(dd, Od, "fragment") && (Kd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${tX});`]), Qd = [...Qd, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), JX(dd, "localPosition") && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${vX(Od)};`]), TX(Xd) && Fd.surface) {
        YX(dd, Od) && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const md = pX(dd, Od);
        md && Kd.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${md});`]);
        const Wd = (0, wd.eb)(wd.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Qd = [...xX(Qd, (0, mX.h)(wd.e.WGSL), Wd, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, mX.b)(QX)]]
      }
      const {
        overlay: td
      } = Od;
      td && gX(Od) && Fd.surface && (Qd = Qd.filter((dd => !NX(dd, td))));
      const od = Fd.light ? function(dd) {
        return "placed" === dd.kind ? {
          name: "terrain",
          engine: (0, CO.M)(wd.e.WGSL),
          pack: (0, CO.$)(wd.e.WGSL)
        } : dd.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, CO.I)(wd.e.WGSL),
          pack: (0, CO.Z)(wd.e.WGSL)
        } : null
      }(Od) : null;
      if (od && (Qd = xX(Qd, od.engine, od.pack, `${od.name} light`), "placed" !== Rd && UX(Xd))) {
        const dd = Xd.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, wd.ob)(wd.e.WGSL, "uEntityLightLevels") : (0, wd.wb)(wd.e.WGSL, "aLightLevels");
        Kd.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${CO.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, CO._)(wd.e.WGSL, dd)])
      }
      return {
        vertexCode: Kd,
        fragmentCode: Qd
      }
    }

    function SX(dd, Od, md, Wd) {
      return XW(dd, Od, md, Wd, "model")
    }
    const sX = "\t@builtin(position) position: vec4f,\n";

    function uX(dd, Od) {
      const md = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(dd)[0];
      return `${md}${Od}${dd.slice(md.length)}`
    }

    function VX(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Fd
      } = Od, Rd = hW(Od, Wd), {
        kind: Xd,
        defines: Kd
      } = md, hd = function(dd, Od) {
        var md, Wd, Fd, Rd;
        const {
          defines: Xd
        } = Od, Kd = yX(Od), hd = !!Xd.FOG, vd = TX(Xd), Qd = null !== (md = null === Kd || void 0 === Kd ? void 0 : Kd.enchantTier) && void 0 !== md ? md : pX(dd, Od) ? "fragmentInputs.vPackEnchantTier" : "0u", td = "lifeform" === Od.kind && !Xd.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Wd = null === Kd || void 0 === Kd ? void 0 : Kd.vertexFlags) && void 0 !== Wd ? Wd : bX(Od),
          vertexLocalPosition: vX(Od),
          flags: null !== (Fd = null === Kd || void 0 === Kd ? void 0 : Kd.flags) && void 0 !== Fd ? Fd : bX(Od),
          normal: "normalW",
          alpha: td ? "alpha * baseColor.a" : "alpha",
          alphaOut: td ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: hd ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: hd ? "1.0 - fog" : "0.0",
          enchantTier: Qd,
          enchantColour: vd ? `${QX}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: YX(dd, Od) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: JX(dd, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: gX(Od),
          glow: null !== (Rd = Od.glow) && void 0 !== Rd ? Rd : null
        }
      }(Od, md), vd = dd.textures.filter((dd => /^textureAtlas\d+$/.test(dd.name))).length, Qd = md.atlas && vd > 0 ? {
        count: vd,
        layers: md.atlas.layers,
        width: md.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: dd.material.slots.has("uAnimDataPerTex") ? (Od, md) => MW(Od, md, function(dd) {
          const Od = dd.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Et: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: dd => `uniforms.uAnimDataPerTex[${dd}]${Od}`
          }
        }(dd)) : null
      } : null, td = "placed" === Xd ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", od = null !== Qd && void 0 !== Qd ? Qd : aX(md), Nd = function(dd, md) {
        let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,fO.z)()}${QW(Od,md)}${Wd}${bW(dd)}${WW}${td}${Od.code}`
      };
      let {
        vertex: qd,
        fragment: Hd
      } = dd;
      const yd = pW(Fd, hd);
      if (yd) {
        const dd = oX(Od, md, "vertex") ? `\tbloxdSpCell = ${tX};\n` : "";
        qd = SX(qd, WX, `${dd}${yd.slice(1)}${WX}`, "vertex")
      }
      const bd = `${tW(Od,Rd,function(dd,Od){return Od.TWOSIDEDLIGHTING?dd:`select(-(${dd}), ${dd}, fragmentInputs.frontFacing)`}(hd.normal,Kd),hd.flags)}${YW(Fd,Od.strict,Od.program,od,hd)}`;
      bd && (Hd = SX(Hd, FX, `${bd.slice(1)}${FX}`, "surface")), Rd && Od.sunShadow && !Kd.TWOSIDEDLIGHTING && (Hd = SX(Hd, sX, `${sX}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Td = aW(Fd);
      if (Td) {
        const dd = wW(Fd, UX(Kd), !0, hd);
        Hd = SX(Hd, RX, `${dd}${Td.slice(1)}${RX}`, "light")
      }
      const pd = EX(Od, md) ? qW : "";
      return {
        ...dd,
        vertex: uX(qd, Nd(Qd, !1, pd)),
        fragment: uX(Hd, Nd(od, Rd))
      }
    }
    const iX = {
      name: "earthSky",
      uniqueId: -1
    };
    class AX {
      constructor(dd, Od) {
        this.resources = dd, this.epoch = Od, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const dd of this.instances.values()) dd.released = !0, this.resources.destroyBuffer(dd.buffer);
        this.instances.clear()
      }
    }

    function rX(dd) {
      return dd.failed && null !== dd.packGroup
    }
    class GX {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new GR,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AR;
        this.device = dd, this.resources = Od, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Sdd = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new OR, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new wR((dd => this.modelSlot(dd).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, iO.b)("Lite: "), this.renderStates = new bR(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (dd, Od) => this.keepSteady(dd, Od), this.lists = void 0, this.slotCount = 0, this.Sdd = Wd, this.modelMeshes = Fd, this.lists = new mR(Fd, Wd, this, this.warnOnce), this.drawDefines = new NR(Od, this.warnOnce, ((dd, Od, md) => this.programWithModel(dd, Od, md)), rX), this.vertexLayouts = new UR(Od, dd.limits, this.warnOnce), this.sceneLayout = JO(dd), this.frameLayout = dd.createBindGroupLayout({
          label: "meshes-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0,
              minBindingSize: 80
            }
          }]
        }), this.frameBuffer = dd.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new SR(dd, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = dd.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new PR(dd, new SR(dd, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (dd, Od, md) => this.pipelineFor(dd, Od, md),
          pipelineCompiling: (dd, Od) => !dd.program.failed && !1 !== this.pipelines.get(`${dd.pipelineKey}|${Od}`),
          sceneGroup: dd => {
            const Od = md(dd);
            return Od || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Od
          }
        }), Od.onDestroy = dd => {
          this.thinBundle.resourceDestroyed(dd)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Fd = {
          order: dd,
          isTransparent: Od,
          _direct: !Od,
          bind: (dd, Od) => this.createBinding(Fd, Od, md, Wd)
        };
        return Fd
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(dd, Od, md) {
        var Wd;
        let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Od, this.drawDefines.view = Od, this.thinBundle.pE(), this.writeFrameUniforms();
        const Rd = null !== (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.defineFor("model")) && void 0 !== Wd ? Wd : 0;
        this.drawDefines.modelPackVariant = Rd, Fd && 0 !== Rd && (this.packInputs ??= new kR(this.device, Fd.textureLayers(), this.sunShadow), this.packInputs.write(Fd, Od.eye, Fd.lH())), this.lists.clear(), this.slotCount = 0;
        const Xd = dd.activeCamera;
        this.Sdd.select(Xd, this.keepSteadyBase), this.modelMeshes.select(Xd, Od), md && this.pushEarthSky(md), this.lists.collect(dd), this.thinBundle.bt(), this.uploadMeshSlots()
      }
      pushDraws(dd, Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Kd = Rd.length;
        for (let hd = 0; hd < md; hd++) {
          const md = Od[hd];
          let Kd = this.retainedDraw(dd, md, Wd, Fd);
          if (void 0 === Kd && (Kd = this.drawFor(dd, md, Wd, Fd), this.retain(md, Kd)), Kd) {
            const dd = md.owner,
              Od = Xd ? Xd[hd] : -1;
            Kd.slotOffset = Od < 0 ? this.writeMeshSlot(dd.getWorldMatrix().m, dd.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Od], 16 * Od), Rd.push(Kd)
          }
        }
        return Rd.length - Kd
      }
      bundleDraws(dd, Od, md) {
        let Wd = 0;
        for (const Fd of Od) {
          let Od = this.retainedDraw(dd, Fd, md, !1);
          const Rd = void 0 !== Od;
          if (void 0 === Od && (Od = this.drawFor(dd, Fd, md, !1), this.retain(Fd, Od)), Od) {
            const dd = Fd.owner,
              md = this.thinBundle.add(Fd, Od, dd.getWorldMatrix().m, dd.visibility);
            Rd && this.steadyFrom(Fd, Od, md), Wd++
          }
        }
        return Wd
      }
      steadyFrom(dd, Od, md) {
        const Wd = dd.owner,
          Fd = this.Sdd.base(Wd),
          Rd = Wd.material,
          {
            drawState: Xd,
            instance: Kd
          } = Od.inputs.retained;
        if (!Fd || !Rd || 1 !== dd.parts.materials.length || uR(dd) !== Rd) return;
        const hd = Fd.steady ??= {
          unit: dd,
          material: Rd,
          visibility: 1,
          draw: Od,
          record: md,
          drawState: Xd,
          instance: Kd,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        hd.unit = dd, hd.material = Rd, hd.visibility = Wd.visibility, hd.draw = Od, hd.record = md, hd.drawState = Xd, hd.instance = Kd, hd.bindGroup = Kd.bindGroup, hd.gpuVersion = this.resources.gpuBuffersVersion, hd.fitInstances = Od.inputs.fitInstances, hd.worldFlag = Wd.getWorldMatrix().updateFlag, hd.handedFrame = this.frame
      }
      keepSteady(dd, Od) {
        const md = dd.steady;
        if (md.handedFrame !== this.frame - 1 || (this.frame + md.phase) % 8 === 0) return !1;
        const Wd = dd.mesh,
          {
            unit: Fd,
            draw: Rd,
            instance: Xd,
            drawState: Kd
          } = md,
          hd = Wd.forcedInstanceCount || Wd.ndd;
        if (!Wd.isVisible || Wd.CRd || Wd.visibility !== md.visibility || 0 === (Wd.layerMask & Od.layerMask) || Wd.material !== md.material || 0 !== Wd.renderingGroupId || Wd.hasVertexAlpha || !this.drawDefines.definesHold(Kd, Fd, Kd.instancing) || md.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Rd.inputs, Fd, Kd.instancing, Rd.program) || Rd.program.failed || Xd.released || hd <= 0 || hd > md.fitInstances) return !1;
        if (Xd.frame !== this.frame && this.bindMaterial(Xd, this.modelUniforms.refreshModelUniforms(Wd.zV(), Xd, Xd.model, this.view)), !Xd.bindable || Xd.bindGroup !== md.bindGroup) return !1;
        const vd = Wd.computeWorldMatrix(),
          Qd = vd.updateFlag !== md.worldFlag;
        return md.worldFlag = vd.updateFlag, Rd.instances = hd, this.thinBundle.addAgain(md.record, Rd, Qd ? vd.m : null, md.visibility), md.handedFrame = this.frame, this.Sdd.drawn++, !0
      }
      retainedDraw(dd, Od, md, Wd) {
        const Fd = this.inputs.get(Od),
          Rd = null === Fd || void 0 === Fd ? void 0 : Fd.retained;
        if (!Fd || !Rd) return;
        const {
          drawState: Xd,
          program: Kd,
          instance: hd,
          instancing: vd
        } = Rd, Qd = Od.owner;
        if (KR(Qd) !== vd) return;
        const td = this.instanceCount(Qd, vd);
        if (td <= 0) return null;
        if (hd.released || Kd.failed || Xd.program !== Kd || !this.drawDefines.programCurrent(Xd, Od, vd, md) || !this.inputsStamped(Fd, Od, vd, Kd) || Qd.isUnIndexed !== Rd.unIndexed || this.indexKey(Od) !== Rd.indexData) return;
        if (Rd.indexBuffer && Rd.gpuVersion !== this.resources.gpuBuffersVersion) {
          const dd = this.resources.gpuBuffer(Rd.indexData);
          if (!dd) return;
          Rd.indexBuffer = dd, Rd.gpuVersion = this.resources.gpuBuffersVersion
        }
        let od = !1;
        if (hd.frame !== this.frame && (od = this.modelUniforms.refreshModelUniforms(dd, hd, hd.model, this.view)), !this.bindMaterial(hd, od) || !this.withGpuBuffers(Fd) || !this.instanceBuffersFit(Qd.name, Fd, td)) return null;
        const Nd = this.makeDraw(Kd, Fd, this.renderStates.renderState(Xd.model, Qd, Wd, Fd.state), hd, td);
        return this.setRange(Nd, Od, Rd.indexBuffer, Rd.indexData), Nd
      }
      retain(dd, Od) {
        const md = this.drawDefines.drawStates.get(dd);
        if (!Od || !md || md.program !== Od.program) {
          const Od = this.inputs.get(dd);
          return void(Od && (Od.retained = null))
        }
        const Wd = dd.owner,
          Fd = md.instancing,
          Rd = this.indexKey(dd),
          Xd = Od.inputs.retained;
        Xd ? (Xd.drawState = md, Xd.instancing = Fd, Xd.program = Od.program, Xd.instance = Od.material, Xd.indexData = Rd, Xd.unIndexed = Wd.isUnIndexed, Xd.indexBuffer = Od.indexBuffer, Xd.gpuVersion = this.resources.gpuBuffersVersion) : Od.inputs.retained = {
          drawState: md,
          instancing: Fd,
          program: Od.program,
          instance: Od.material,
          indexData: Rd,
          unIndexed: Wd.isUnIndexed,
          indexBuffer: Od.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(dd, Od, md, Wd) {
        const Fd = Od.owner,
          Rd = uR(Od);
        if (!Rd) return null;
        const Xd = Rd.getClassName();
        let Kd = null;
        if (function(dd) {
            return "LinesMesh" === dd.getClassName()
          }(Fd)) {
          if (! function(dd) {
              return "ShaderMaterial" === dd.getClassName() && "color" === dd.shaderPath
            }(Rd)) return this.warnOnce(`lines:${Xd}`, `A LinesMesh with a ${Xd} is not drawn yet (${Rd.name})`), null;
          Kd = Fd
        } else if ("StandardMaterial" !== Xd && "LiteMaterial" !== Xd) return this.warnOnce(`class:${Xd}`, `${Xd} is not drawn yet (${Rd.name})`), null;
        const hd = KR(Fd),
          vd = this.instanceCount(Fd, hd);
        if (vd <= 0) return null;
        const Qd = Kd ? this.lineProgramFor(Fd, md, hd) : this.drawDefines.programFor(dd, Od, Rd, md, hd);
        if (!Qd || Qd.failed) return null;
        const td = Kd ? null : this.drawDefines.drawStates.get(Od).model,
          od = td ? this.modelInstance(td, Qd) : this.materialInstance(Fd, Qd);
        let Nd = !1;
        if (od.frame !== this.frame && (Kd ? Td(od.ubo, Kd) : Nd = this.modelUniforms.refreshModelUniforms(dd, od, od.model, this.view)), !this.bindMaterial(od, Nd)) return null;
        const qd = this.meshInputs(Od, Qd, hd);
        if (!qd || !this.instanceBuffersFit(Fd.name, qd, vd)) return null;
        const Hd = this.indexKey(Od);
        let yd = null;
        if (Hd && !Fd.isUnIndexed && (yd = this.resources.gpuBuffer(Hd), !yd)) return null;
        const bd = this.renderStates.renderState(null !== td && void 0 !== td ? td : Rd, Fd, Wd, qd.state, Kd ? "line-list" : "triangle-list"),
          pd = this.makeDraw(Qd, qd, bd, od, vd);
        return this.setRange(pd, Od, yd, Hd), pd
      }
      indexKey(dd) {
        const Od = tR(dd);
        return Od ? this.resources.modelIndex(Od) : null
      }
      setRange(dd, Od, md, Wd) {
        md && (dd.indexBuffer = md, dd.indexFormat = this.resources.indexFormat(Wd));
        const Fd = 4 * Od.range + (md ? 0 : 2);
        dd.unit = Od, dd.first = Od.parts.By[Fd], dd.count = Od.parts.By[Fd + 1]
      }
      makeDraw(dd, Od, md, Wd, Fd) {
        Od.state !== md && (Od.state = md, Od.pipelineKey = `${dd.id}|${Od.layout.key}|${md.key}`, Od.pipeline = null);
        const Rd = Od.draw ??= {
          program: dd,
          inputs: Od,
          pipelineKey: "",
          layout: Od.layout,
          state: md,
          material: Wd,
          slotOffset: 0,
          vertexBuffers: Od.buffers,
          vertexOffsets: Od.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Fd,
          unit: null
        };
        return Rd.program = dd, Rd.pipelineKey = Od.pipelineKey, Rd.state = md, Rd.material = Wd, Rd.vertexOffsets = Od.offsets, Rd.indexBuffer = null, Rd.instances = Fd, Rd
      }
      instanceCount(dd, Od) {
        switch (Od) {
          case "thin":
            return dd.forcedInstanceCount || dd.ndd;
          case "instanced":
            return this.prepareInstances(dd);
          case "none":
            return 1
        }
      }
      prepareInstances(dd) {
        const Od = function(dd, Od) {
          const md = Od._userInstancedBuffersStorage,
            Wd = dd.batchUploads.get(Od);
          if (Wd) {
            var Fd;
            if (Wd.layout === (null !== (Fd = null === md || void 0 === md ? void 0 : md.interleavedKinds) && void 0 !== Fd ? Fd : null)) return Wd;
            Wd.release()
          }
          return new HO(dd, Od, md)
        }(this.resources, dd);
        return Od.frame !== this.frame && Od.pack(dd, this.modelMeshes.instanceBatch(dd), this.modelMeshes.worlds, this.frame), Od.count
      }
      programWithModel(dd, Od, md) {
        const Wd = this.modelSlot(dd),
          Fd = qR(Wd, dd, md),
          Rd = this.drawDefines.modelPackKind(dd),
          Xd = Rd ? function(dd, Od, md, Wd) {
            const Fd = (0, Ud.B)(dd, Ed.h.name),
              Rd = [];
            for (const {
                feature: hd,
                state: vd,
                active: Qd
              }
              of dd.features) {
              var Xd, Kd;
              const dd = Qd ? null === (Xd = (Kd = (0, AO.i)(hd)).Jq) || void 0 === Xd ? void 0 : Xd.call(Kd, vd) : void 0;
              dd && Rd.push(dd)
            }
            return {
              kind: Od,
              atlas: null !== Fd && void 0 !== Fd && Fd.active ? (0, Ed.e)(Fd.state) : null,
              defines: md,
              ...HX(Rd, Wd)
            }
          }(dd, Rd, Od, Wd.fragmentCode) : null;
        if (Xd && function(dd) {
            const Od = dd.defines;
            return (null === dd.atlas || !!Od.DIFFUSE && 1 === Od.DIFFUSEDIRECTUV) && !!Od.NORMAL && !Od.REFLECTION && !Od.EMISSIVEASILLUMINATION && !Od.LINKEMISSIVEWITHDIFFUSE
          }(Xd)) {
          const md = this.modelPackProgram(dd, Od, `${Fd}#${Rd}#sp${this.drawDefines.modelPackVariant}`, Wd, Xd);
          if (md && !md.failed) return md
        }
        const Kd = this.programs.get(Fd);
        if (Kd || this.unbuildable.has(Fd)) return null !== Kd && void 0 !== Kd ? Kd : null;
        let hd;
        try {
          hd = VF({
            defines: vR(Od),
            vertexCode: Wd.vertexCode,
            fragmentCode: Wd.fragmentCode,
            pluginUniforms: Wd.pluginUniforms
          })
        } catch (vd) {
          return this.unbuildable.add(Fd), this.warnOnce(`build:${Fd}`, `could not build a program for ${dd.name}: ${String(vd)}`), null
        }
        return this.createProgram(Fd, hd, "standard")
      }
      modelPackProgram(dd, Od, md, Wd, Fd) {
        const Rd = this.programs.get(md);
        if (Rd || this.unbuildable.has(md)) return null !== Rd && void 0 !== Rd ? Rd : null;
        const Xd = this.drawDefines.modelPackVariant;
        let Kd;
        try {
          const dd = function(dd) {
              return (0, MO.c)(dd, "model")
            }(Xd),
            md = BX(dd, Fd, Wd.vertexCode, Wd.fragmentCode);
          Kd = VX(VF({
            defines: vR(Od),
            ...md,
            pluginUniforms: Wd.pluginUniforms
          }), dd, Fd, !!this.sunShadow)
        } catch (Qd) {
          return this.unbuildable.add(md), this.warnOnce(`build:${md}`, `could not build a shader pack program for ${dd.name}, which draws without the pack: ${String(Qd)}`), null
        }
        const hd = CR(Xd, !!this.sunShadow),
          vd = {
            group: this.packInputs.bindGroupFor(null, hd),
            layout: IR(this.device, {
              depth: !1,
              sunShadow: hd
            })
          };
        return this.createProgram(md, Kd, function(dd) {
          return `standard-sp${dd}`
        }(Xd), vd)
      }
      lineProgramFor(dd, Od, md) {
        const Wd = bd(dd, md, Od, this.view);
        let Fd = this.linePrograms.get(Wd);
        var Rd;
        return Fd || (Fd = this.createProgram(`lines#${Wd}`, (Rd = function(dd) {
          const Od = new Map;
          for (let md = 0; md < vd.length; md++) dd & 1 << md && Od.set(vd[md], !0);
          return Od
        }(Wd), GF({
          defines: Rd,
          vertex: AF,
          fragment: rF,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Wd, Fd)), Fd
      }
      createProgram(dd, Od, md) {
        var Wd;
        let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Rd = this.nextProgramId++,
          Xd = `${md}-${Rd}`,
          Kd = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          hd = [{
            binding: 0,
            visibility: Kd,
            buffer: {
              type: "uniform"
            }
          }];
        for (const td of Od.textures) hd.push({
          binding: td.binding,
          visibility: Kd,
          texture: {
            viewDimension: td.dimension
          }
        }), hd.push({
          binding: td.samplerBinding,
          visibility: Kd,
          sampler: {}
        });
        const vd = this.device.createBindGroupLayout({
            label: Xd,
            entries: hd
          }),
          Qd = {
            key: dd,
            id: Rd,
            kind: md,
            program: Od,
            vertex: this.device.createShaderModule({
              label: `${Xd}-vertex`,
              code: Od.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Xd}-fragment`,
              code: Od.fragment
            }),
            materialLayout: vd,
            pipelineLayout: this.device.createPipelineLayout({
              label: Xd,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, vd, ...Fd ? [Fd.layout] : []]
            }),
            packGroup: null !== (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.group) && void 0 !== Wd ? Wd : null,
            failed: !1
          };
        return this.programs.set(dd, Qd), Qd
      }
      writeFrameUniforms() {
        const dd = this.frameUniforms;
        gR(this.view, dd), this.device.queue.writeBuffer(this.frameBuffer, 0, dd)
      }
      materialInstance(dd, Od) {
        let md = this.materials.get(dd);
        if (!md) {
          const Od = new Map;
          this.materials.set(dd, Od);
          const {
            resources: Wd,
            materials: Fd
          } = this;
          dd.cV.addOnce((() => {
            for (const dd of Od.values()) dd.released = !0, Wd.destroyBuffer(dd.buffer);
            Fd.delete(dd)
          })), md = Od
        }
        let Wd = md.get(Od.key);
        return Wd || (Wd = this.newMaterialInstance(dd, null, Od), md.set(Od.key, Wd)), Wd
      }
      modelInstance(dd, Od) {
        const md = this.modelSlot(dd);
        let Wd = md.instances.get(Od.key);
        return Wd || (Wd = this.newMaterialInstance(dd, dd, Od), md.instances.set(Od.key, Wd)), Wd
      }
      modelSlot(dd) {
        var Od;
        let md = dd.gpu[Bd.c.lite];
        return (null === (Od = md) || void 0 === Od ? void 0 : Od.epoch) !== this.resources.epoch && (md = new AX(this.resources, this.resources.epoch), dd.gpu[Bd.c.lite] = md), md
      }
      newMaterialInstance(dd, Od, md) {
        const Wd = md.program.material.floats,
          Fd = new Float32Array(Wd),
          Rd = new Map;
        return {
          owner: dd,
          model: Od,
          program: md,
          data: Fd,
          uploaded: new Float32Array(Wd).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${dd.name}-uniforms`,
            size: Math.max(16, 4 * Wd),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Rd,
          ubo: new YR(md.program.material.slots, Fd, Rd),
          bindGroup: null,
          bound: new Array(2 * md.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(dd) {
        var Od;
        const md = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: cF + jF,
            fragment: cF + DF,
            attributes: [],
            material: zF,
            textures: []
          }, "earthSky"),
          Wd = this.earthSkyUniforms ??= this.newMaterialInstance(iX, null, md);
        this.earthSkyFrom !== dd && (this.earthSkyFrom = dd, Wd.data.fill(0)), MF(Wd.ubo, dd, this.view);
        const Fd = this.vertexInputs(md, iX, "earthSky", md, null);
        if (md.failed || !Fd || !this.bindMaterial(Wd, !1)) return;
        const Rd = null !== (Od = Fd.state) && void 0 !== Od ? Od : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Xd = this.makeDraw(md, Fd, Rd, Wd, 1);
        Xd.count = nF.length;
        const Kd = dR(dd, this.view);
        Xd.slotOffset = this.writeMeshSlot(Kd, 1), this.lists.skyDraws.push(Xd)
      }
      uploadIfChanged(dd) {
        const {
          data: Od,
          uploaded: md
        } = dd;
        for (let Wd = 0; Wd < Od.length; Wd++)
          if (Od[Wd] !== md[Wd]) return md.set(Od), void this.device.queue.writeBuffer(dd.buffer, 0, Od)
      }
      bindMaterial(dd, Od) {
        return dd.frame !== this.frame && (dd.frame = this.frame, Od || this.uploadIfChanged(dd), dd.bindable = this.bindTextures(dd)), dd.bindable
      }
      bindTextures(dd) {
        const {
          program: Od,
          bound: md
        } = dd, Wd = Od.program.textures;
        let Fd = !dd.bindGroup,
          Rd = !0;
        for (let Xd = 0; Xd < Wd.length; Xd++) {
          const Od = dd.textures.get(Wd[Xd].name),
            Kd = Od ? this.resources.boundTexture(Od) : null;
          Kd ? md[2 * Xd] === Kd.view && md[2 * Xd + 1] === Kd.sampler || (md[2 * Xd] = Kd.view, md[2 * Xd + 1] = Kd.sampler, Fd = !0) : (Od || dd.ubo.expected.has(Wd[Xd].name) || this.warnOnce(`texture:${dd.owner.name}:${Wd[Xd].name}`, `${dd.owner.name} has no ${Wd[Xd].name}`), Rd = !1)
        }
        if (!Rd) return Fd && (dd.bindGroup = null), !1;
        if (Fd) {
          const Fd = [{
            binding: 0,
            resource: {
              buffer: dd.buffer
            }
          }];
          for (let dd = 0; dd < Wd.length; dd++) Fd.push({
            binding: Wd[dd].binding,
            resource: md[2 * dd]
          }), Fd.push({
            binding: Wd[dd].samplerBinding,
            resource: md[2 * dd + 1]
          });
          dd.bindGroup = this.device.createBindGroup({
            label: `${dd.owner.name}-material`,
            layout: Od.materialLayout,
            entries: Fd
          })
        }
        return !0
      }
      writeMeshSlot(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, dd, Od, md), this.slotCount++ * oF
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(dd, Od, md, Wd, Fd) {
        let Rd = this.inputs.get(dd);
        if (!Rd || Rd.program !== Wd || !xR(Od, Rd, this.resources, Fd)) {
          var Xd;
          if (Rd = null !== (Xd = this.vertexLayouts.resolveInputs(Od, md, Wd, Fd)) && void 0 !== Xd ? Xd : void 0, !Rd) return null;
          this.inputs.set(dd, Rd)
        }
        return this.withGpuBuffers(Rd)
      }
      meshInputs(dd, Od, md) {
        const Wd = this.inputs.get(dd);
        if (Wd && this.inputsStamped(Wd, dd, md, Od)) return this.withGpuBuffers(Wd);
        const Fd = dd.owner,
          Rd = tR(dd),
          Xd = this.vertexInputs(dd, Fd, Fd.name, Od, Rd);
        return Xd && (Xd.geometry = oR(dd), Xd.instanceLayout = this.drawDefines.instanceLayout(Fd, md)), Xd
      }
      inputsStamped(dd, Od, md, Wd) {
        return function(dd, Od, md, Wd) {
          return dd.program === md && dd.geometry === oR(Od) && dd.instanceLayout === Wd
        }(dd, Od, Wd, this.drawDefines.instanceLayout(Od.owner, md))
      }
      withGpuBuffers(dd) {
        return fR(dd, this.resources, this.zeroBuffer) ? dd : null
      }
      instanceBuffersFit(dd, Od, md) {
        const Wd = dX(Od, md, this.resources, this.zeroBuffer);
        if (Wd) {
          const Fd = Od.ends[Wd.index] - Od.offsets[Wd.index] + Od.idd[Wd.index];
          return this.warnOnce(`overrun:${dd}`, `${dd} draws ${md} instances from a ${Fd}-byte buffer (${Wd.needed} needed)`), !1
        }
        return !0
      }
      createBinding(dd, Od, md, Wd) {
        const Fd = `${Od._colorFormat}|${Od._depthStencilFormat}|${Od._depthCompare}|${Od._sampleCount}`,
          Rd = sO(this.device, Od);
        if (dd === this.skyLastRenderable) {
          let md = null;
          return {
            renderable: dd,
            pipeline: Rd,
            draw: dd => md ? this.drawSky(dd, Od, Fd, md) : 0,
            update: dd => {
              md = dd
            }
          }
        }
        return {
          renderable: dd,
          pipeline: Rd,
          draw: dd => (Wd ? Wd.execute(dd, Od, Fd) : 0) + this.drawList(dd, Od, Fd, md)
        }
      }
      drawSky(dd, Od, md, Wd) {
        const Fd = this.lists.skyDraws,
          Rd = Fd.length > 0;
        if (Rd) {
          var Xd;
          const md = (null !== (Xd = Od._depthCompare) && void 0 !== Xd ? Xd : UO).startsWith("greater") ? 0 : 1;
          dd.setViewport(0, 0, Wd.targetWidth, Wd.targetHeight, md, md)
        }
        const Kd = this.drawList(dd, Od, md, Fd);
        return Rd && dd.setViewport(0, 0, Wd.targetWidth, Wd.targetHeight, 0, 1), Kd
      }
      drawList(dd, Od, md, Wd) {
        let Fd = 0;
        const Rd = this.binder;
        Rd.reset();
        for (const Xd of Wd) {
          const Wd = this.pipelineFor(Xd, Od, md);
          Wd && (Rd.bind(dd, Xd, Wd, this.meshSlots.bindGroup, Xd.slotOffset), Xd.indexBuffer ? dd.drawIndexed(Xd.count, Xd.instances, Xd.first, 0, 0) : dd.draw(Xd.count, Xd.instances, Xd.first, 0), Fd++)
        }
        return Fd
      }
      pipelineFor(dd, Od, md) {
        var Wd, Fd;
        if (dd.program.failed) return null;
        const Rd = dd.inputs;
        if (Rd.pipeline && Rd.pipelineTarget === md) return Rd.pipeline;
        const Xd = `${dd.pipelineKey}|${md}`,
          Kd = this.pipelines.get(Xd);
        if (void 0 !== Kd) return Kd && (Rd.pipeline = Kd, Rd.pipelineTarget = md), Kd || null;
        this.pipelines.set(Xd, null);
        const {
          program: hd,
          layout: vd,
          state: Qd
        } = dd, td = {
          label: `standard-${hd.id}`,
          layout: hd.pipelineLayout,
          vertex: {
            module: hd.vertex,
            entryPoint: "main",
            buffers: vd.buffers
          },
          fragment: YO({
            module: hd.fragment,
            entryPoint: "main"
          }, Od, Qd.blend, Qd.colourWrite),
          depthStencil: Od._depthStencilFormat ? {
            format: Od._depthStencilFormat,
            depthCompare: null !== (Wd = null !== (Fd = Qd.depthCompare) && void 0 !== Fd ? Fd : Od._depthCompare) && void 0 !== Wd ? Wd : UO,
            depthWriteEnabled: Qd.depthWrite,
            depthBias: Qd.depthBias,
            depthBiasSlopeScale: Qd.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Od._sampleCount
          },
          primitive: {
            topology: Qd.topology,
            frontFace: Qd.frontFace,
            cullMode: Qd.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(td).then((dd => {
          this.compiling--, this.pipelines.set(Xd, dd)
        }), (dd => {
          this.compiling--, this.reportFailure(hd, Xd, dd)
        })), null
      }
      forEachSunShadowCaster(dd) {
        const Od = this.caster,
          md = (md, Wd, Fd) => {
            const Rd = md.unit && function(dd) {
              const Od = dd.material.model;
              return null !== Od && (Od.lifeform || Od.item) && Od.castsSunShadow && "triangle-list" === dd.state.topology
            }(md) ? tR(md.unit) : null;
            if (!Rd) return;
            const Xd = md.unit.owner;
            switch (Od.geometry = Rd, Od.skip = Xd.noSunShadowVertices, Od.indexed = null !== md.indexBuffer, Od.first = md.first, Od.count = md.count, Od.Bt = Wd, Od.worldAt = Fd, Od.instances = null, Od.instanceCount = 1, Od.thin = !1, KR(Xd)) {
              case "thin": {
                const dd = Xd._thinInstanceDataStorage.matrixData;
                if (!dd) return;
                Od.instances = dd, Od.instanceCount = Math.min(md.instances, dd.length / 16), Od.thin = !0;
                break
              }
              case "instanced": {
                const dd = this.resources.batchUploads.get(Xd);
                if (!dd || dd.frame !== this.frame || !this.writeBatchCasters(dd)) return;
                break
              }
            }
            dd(Od)
          };
        for (const Wd of this.lists.opaqueDraws) md(Wd, this.meshSlots.data, Wd.slotOffset / 4);
        this.thinBundle.forEachDrawn(md)
      }
      writeBatchCasters(dd) {
        const {
          caster: Od
        } = this, md = dd.packedMatrices, Wd = dd.count;
        Od.instances = md, Od.instanceCount = Wd;
        let Fd = -1;
        for (let Rd = 0; Rd < Wd; Rd++) {
          const Od = nX(dd.packedRowMesh(Rd));
          Od && Fd < 0 ? (this.casterWorlds.length < 16 * Wd && (this.casterWorlds = new Float32Array(md.length)), this.casterWorlds.set(md.subarray(0, 16 * Rd)), Fd = Rd) : !Od && Fd >= 0 && (this.casterWorlds.set(md.subarray(16 * Rd, 16 * Rd + 16), 16 * Fd), Fd++)
        }
        return Fd >= 0 && (Od.instances = this.casterWorlds, Od.instanceCount = Fd), Od.instanceCount > 0
      }
      async reportFailure(dd, Od, md) {
        const Wd = [];
        let Fd = !0;
        for (const [Rd, Xd] of [
            ["vertex", dd.vertex],
            ["fragment", dd.fragment]
          ]) {
          const dd = await Xd.getCompilationInfo();
          for (const Od of dd.messages) Fd &&= "error" !== Od.type, Wd.push(`${Rd}:${Od.lineNum}:${Od.linePos} ${Od.type}: ${Od.message}`)
        }
        if (Fd && !dd.packGroup) return this.pipelines.set(Od, !1), console.error(`Lite: pipeline ${Od} failed`, md), void oO(this.device, "mesh", dd.kind, md);
        dd.failed || (dd.failed = !0, console.error(`Lite: program ${dd.id} failed`, md, Wd.join("\n"), {
          program: dd.program,
          key: dd.key
        }), oO(this.device, "mesh", dd.kind, md, Fd ? null : Wd[0]))
      }
    }

    function nX(dd) {
      var Od, md;
      const Wd = null === (Od = dd.xG) || void 0 === Od || null === (md = Od.aShaderPackItem) || void 0 === md ? void 0 : md.x;
      return void 0 !== Wd && 0 !== (Wd & VO.g)
    }
    var LX = md(54100),
      PX = md(54105),
      zX = md(54114),
      cX = md(54063);
    const jX = [0, 3, 1, 4, 2, 5];

    function DX(dd, Od, md, Wd, Fd) {
      const Rd = md[0].width;
      try {
        return Fd ? function(dd, Od, md) {
          const Wd = (0, cX.c)(dd, md, md, 6);
          for (let Fd = 0; Fd < 6; Fd++)(0, cX.e)(dd, Wd, Fd, Od[jX[Fd]], {
            invertY: !1
          });
          return Wd.texture
        }(dd, md, Rd) : function(dd, Od, md, Wd) {
          const Fd = dd.createTexture({
            label: "sink-cube",
            size: {
              width: md,
              height: md,
              depthOrArrayLayers: 6
            },
            format: Wd,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Rd = 0; Rd < 6; Rd++) dd.queue.copyExternalImageToTexture({
            source: Od[jX[Rd]]
          }, {
            texture: Fd,
            origin: {
              x: 0,
              y: 0,
              z: Rd
            }
          }, {
            width: md,
            height: md
          });
          return Fd
        }(Od, md, Rd, 1 === Wd ? "r8unorm" : "rgba8unorm")
      } finally {
        eX(md)
      }
    }

    function eX(dd) {
      for (const Od of null !== dd && void 0 !== dd ? dd : []) null === Od || void 0 === Od || Od.close()
    }
    async function IX(dd) {
      const Od = [],
        md = [];
      if (await Promise.all(dd.map(((dd, Wd) => (Od[Wd] = null, dd.then((dd => {
          Od[Wd] = dd
        }), (dd => {
          md.push(dd)
        })))))), md.length > 0) throw eX(Od), md[0];
      return Od
    }
    class lX {
      constructor(dd) {
        this.Mt = dd, this.starts = [], this.lengths = [], this.used = 0, dd > 0 && (this.starts.push(0), this.lengths.push(dd))
      }
      allocate(dd) {
        const {
          starts: Od,
          lengths: md
        } = this;
        for (let Wd = 0; Wd < Od.length; Wd++) {
          if (md[Wd] < dd) continue;
          const Fd = Od[Wd];
          return md[Wd] === dd ? (Od.splice(Wd, 1), md.splice(Wd, 1)) : (Od[Wd] += dd, md[Wd] -= dd), this.used += dd, Fd
        }
        return -1
      }
      free(dd, Od) {
        this.used -= Od;
        const md = Math.min(dd + Od, this.Mt);
        md > dd && this.release(dd, md - dd)
      }
      grow(dd) {
        const Od = this.Mt;
        this.Mt = dd, this.release(Od, dd - Od)
      }
      truncate(dd) {
        const {
          starts: Od,
          lengths: md
        } = this;
        for (let Wd = Od.length - 1; Wd >= 0 && Od[Wd] + md[Wd] > dd; Wd--) Od[Wd] >= dd ? (Od.splice(Wd, 1), md.splice(Wd, 1)) : md[Wd] = dd - Od[Wd];
        this.Mt = dd
      }
      release(dd, Od) {
        const {
          starts: md,
          lengths: Wd
        } = this;
        let Fd = 0,
          Rd = md.length;
        for (; Fd < Rd;) {
          const Od = Fd + Rd >> 1;
          md[Od] < dd ? Fd = Od + 1 : Rd = Od
        }
        const Xd = Fd,
          Kd = Xd > 0 && md[Xd - 1] + Wd[Xd - 1] === dd,
          hd = Xd < md.length && dd + Od === md[Xd];
        Kd && hd ? (Wd[Xd - 1] += Od + Wd[Xd], md.splice(Xd, 1), Wd.splice(Xd, 1)) : Kd ? Wd[Xd - 1] += Od : hd ? (md[Xd] = dd, Wd[Xd] += Od) : (md.splice(Xd, 0, dd), Wd.splice(Xd, 0, Od))
      }
    }
    const CX = 256;
    class ZX {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = dd, this.onReplaced = Od, this.mergeGap = md, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.By = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Fd = Math.max(CX, Math.ceil(Wd / CX) * CX);
        this.bytes = new Uint8Array(Fd), this.words = new Uint32Array(this.bytes.buffer), this.By = new lX(Fd / CX)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(dd) {
        return Math.max(1, Math.ceil(dd / CX)) * CX
      }
      allocate(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd;
        const Wd = ZX.slotBytes(dd),
          Fd = Wd / CX;
        let Rd = this.By.allocate(Fd);
        Rd < 0 && (this.grow(this.By.Mt + Fd), Rd = this.By.allocate(Fd));
        const Xd = Rd * CX;
        return this.growTo(Xd + Math.max(md, Wd)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Xd, Xd + Wd), Od && this.bytes.set(new Uint8Array(Od.buffer, Od.byteOffset, Math.min(Od.byteLength, Wd)), Xd), this.markDirty(Xd, Xd + Wd), Xd
      }
      growTo(dd) {
        const Od = Math.ceil(dd / CX);
        Od > this.By.Mt && this.grow(Od)
      }
      free(dd, Od) {
        this.freed.push(dd, Od)
      }
      write(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Wd <= 0) return;
        Wd <= 1024 && 0 === (3 & (dd | md | Wd)) ? this.copyWords(dd >> 2, Od.buffer, md >> 2, Wd >> 2) : this.bytes.set(new Uint8Array(Od.buffer, md, Wd), dd);
        let Rd = dd + Wd;
        if (Fd) {
          const Od = dd + 4 * Math.ceil(Wd / 4);
          this.bytes.fill(0, Rd, Od), Rd = Od
        }
        this.markDirty(dd, Rd)
      }
      copyWords(dd, Od, md, Wd) {
        let Fd = this.sourceWords.get(Od);
        Fd || (Fd = new Uint32Array(Od, 0, Od.byteLength >> 2), this.sourceWords.set(Od, Fd));
        const Rd = this.words;
        for (let Xd = 0; Xd < Wd; Xd++) Rd[dd + Xd] = Fd[md + Xd]
      }
      move(dd, Od, md) {
        this.bytes.copyWithin(Od, dd, dd + md), this.markDirty(Od, Od + md)
      }
      flush() {
        for (const Od of this.retired) this.onReplaced(Od), Od.destroy();
        this.retired.length = 0;
        const dd = this.dirtyStarts.length;
        if (dd > 0) {
          const {
            dirtyStarts: Od,
            dirtyEnds: md,
            order: Wd
          } = this;
          Wd.length = dd;
          for (let Kd = 0; Kd < dd; Kd++) Wd[Kd] = Kd;
          dd > 1 && Wd.sort(((dd, md) => Od[dd] - Od[md]));
          const Fd = this.mergeGap;
          let Rd = Od[Wd[0]],
            Xd = md[Wd[0]];
          for (let Kd = 1; Kd < dd; Kd++) {
            const dd = Wd[Kd];
            Od[dd] - Xd <= Fd ? Xd = Math.max(Xd, md[dd]) : (this.send(Rd, Xd), Rd = Od[dd], Xd = md[dd])
          }
          this.send(Rd, Xd), Od.length = 0, md.length = 0
        }
        this.holding = !1
      }
      bt() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const dd = this.freed;
        for (let Od = 0; Od < dd.length; Od += 2) this.By.free(dd[Od] / CX, dd[Od + 1] / CX);
        dd.length = 0
      }
      send(dd, Od) {
        this.device.queue.writeBuffer(this.gpu, dd, this.bytes.buffer, dd, Od - dd);
        for (const md of this.replaced) {
          const Wd = Math.min(Od, md.size);
          Wd > dd && this.device.queue.writeBuffer(md, dd, this.bytes.buffer, dd, Wd - dd)
        }
      }
      markDirty(dd, Od) {
        dd &= -4, Od = Od + 3 & -4, this.holding ? (this.dirtyStarts.push(dd), this.dirtyEnds.push(Od)) : this.send(dd, Od)
      }
      grow(dd) {
        const Od = this.By.Mt,
          md = Math.max(2 * Od, dd),
          Wd = new Uint8Array(md * CX);
        Wd.set(this.bytes);
        const Fd = this.gpu;
        this.gpu = this.createGpu(Wd.byteLength), this.bytes = Wd, this.words = new Uint32Array(Wd.buffer), this.By.grow(md), Fd && (this.replaced.push(Fd), this.onReplaced(Fd)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Od * CX)
      }
      createGpu(dd) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: dd,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function kX(dd) {
      return Array.isArray(dd) ? new Float32Array(dd) : dd
    }

    function fX(dd, Od, md, Wd, Fd) {
      const Rd = Cd(Fd),
        Xd = Math.min(Fd, Wd.byteLength);
      if (Rd === Xd && Wd.byteOffset % 4 === 0) return void dd.queue.writeBuffer(Od, md, Wd.buffer, Wd.byteOffset, Rd);
      const Kd = new Uint8Array(Rd);
      Kd.set(new Uint8Array(Wd.buffer, Wd.byteOffset, Xd)), dd.queue.writeBuffer(Od, md, Kd)
    }

    function MX(dd, Od, md) {
      const Wd = "linear",
        Fd = "nearest";
      let Rd = Fd,
        Xd = Fd,
        Kd = "nearest",
        hd = !Od;
      switch (dd) {
        case 11:
          Rd = Wd, Xd = Wd;
          break;
        case 3:
          Rd = Wd, Xd = Wd, Kd = Od ? "linear" : "nearest";
          break;
        case 8:
          Kd = Od ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Xd = Wd;
          break;
        case 6:
          Xd = Wd, Kd = Od ? "linear" : "nearest";
          break;
        case 7:
          Xd = Wd, hd = !0;
          break;
        case 9:
          Rd = Wd;
          break;
        case 10:
          Rd = Wd, Kd = Od ? "linear" : "nearest";
          break;
        case 2:
          Rd = Wd, Xd = Wd, md > 1 ? (Kd = "linear", hd = !1) : hd = !0;
          break;
        case 12:
          Rd = Wd, hd = !0;
          break;
        default:
          hd = !0
      }
      return md > 1 && !hd ? {
        magFilter: Wd,
        minFilter: Wd,
        mipmapFilter: "linear",
        maxAnisotropy: md
      } : {
        magFilter: Rd,
        minFilter: Xd,
        mipmapFilter: Kd,
        ...hd ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function dK(dd) {
      return 0 === dd ? "clamp-to-edge" : 2 === dd ? "mirror-repeat" : "repeat"
    }
    class OK {
      constructor(dd, Od) {
        let {
          vertexArena: md = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = dd, this.device = Od, this.buffers = new WeakMap, this.vdd = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = md ? this.createArena() : null
      }
      createArena() {
        return new ZX(this.device, (dd => {
          var Od;
          null === (Od = this.onDestroy) || void 0 === Od || Od.call(this, dd), this.gpuBuffersVersion++
        }))
      }
      rebind(dd, Od) {
        this.engine = dd, this.device = Od, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const md of this.liveUploads) md.rebind();
        for (const md of this.rebindWaiters.splice(0)) md()
      }
      flushUploads() {
        var dd;
        null === (dd = this.arena) || void 0 === dd || dd.flush()
      }
      endUploadFrame() {
        var dd;
        null === (dd = this.arena) || void 0 === dd || dd.bt()
      }
      vertexBufferCreated(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : md ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(dd);
        const Fd = kX(Od);
        dd.Mt = Fd.byteLength, this.buffers.set(dd, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: md && null !== this.arena,
          pending: Fd,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Wd
        })
      }
      vertexBufferUpdated(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        const Fd = this.buffers.get(dd);
        if (!Fd) return;
        const Rd = kX(Od),
          Xd = void 0 === Wd ? Rd.byteLength : Math.min(Wd, Rd.byteLength);
        this.update(Fd, Rd, md, Xd)
      }
      vertexBufferFloatsUpdated(dd, Od, md, Wd) {
        const Fd = this.buffers.get(dd);
        if (!Fd) return;
        const Rd = md * Float32Array.BYTES_PER_ELEMENT,
          Xd = (Wd - md) * Float32Array.BYTES_PER_ELEMENT;
        Fd.slot >= 0 && Xd > 0 && Rd + Xd <= Fd.size ? this.writeSlot(Fd, Rd, Od, Od.byteOffset + Rd, Xd, !1) : Fd.gpu && Xd > 0 && Rd + Xd <= Fd.gpu.size ? this.device.queue.writeBuffer(Fd.gpu, Rd, Od.buffer, Od.byteOffset + Rd, Xd) : this.update(Fd, Od.subarray(md, Wd), Rd, Xd)
      }
      indexBufferCreated(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(dd);
        const Wd = function(dd) {
          if (dd instanceof Uint16Array || dd instanceof Uint32Array) return dd;
          for (let Od = 0; Od < dd.length; Od++)
            if (dd[Od] >= 65535) return new Uint32Array(dd);
          return new Uint16Array(dd)
        }(Od);
        dd.is32Bits = 4 === Wd.BYTES_PER_ELEMENT, dd.Mt = Wd.byteLength, this.buffers.set(dd, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Wd,
          ownsPending: Wd !== Od,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: md
        })
      }
      bufferDeleted(dd) {
        const Od = this.buffers.get(dd);
        null !== Od && void 0 !== Od && Od.gpu ? (this.destroyBuffer(Od.gpu), this.gpuBuffersVersion++) : Od && Od.slot >= 0 && (this.arena.free(Od.slot, Od.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(dd)
      }
      update(dd, Od, md, Wd) {
        if (dd.slot >= 0) this.updateSlot(dd, Od, md, Wd);
        else if (dd.gpu) {
          if (md + Cd(Wd) > dd.gpu.size) {
            const Od = this.device.createBuffer({
                label: dd.label,
                size: Cd(Math.max(2 * dd.gpu.size, md + Wd)),
                usage: dd.usage | GPUBufferUsage.COPY_SRC
              }),
              Fd = this.device.createCommandEncoder();
            Fd.copyBufferToBuffer(dd.gpu, 0, Od, 0, dd.gpu.size), this.device.queue.submit([Fd.finish()]), this.destroyBuffer(dd.gpu), this.gpuBuffersVersion++, dd.gpu = Od
          }
          fX(this.device, dd.gpu, md, Od, Wd)
        } else {
          const Rd = new Uint8Array(Od.buffer, Od.byteOffset, Wd),
            Xd = dd.pending;
          if (Xd && dd.ownsPending && md + Wd <= Xd.byteLength) new Uint8Array(Xd.buffer, Xd.byteOffset, Xd.byteLength).set(Rd, md);
          else if (Xd && 0 === md && Wd === Xd.byteLength && Od.byteLength === Wd) dd.pending = Od, dd.ownsPending = !1;
          else {
            var Fd;
            const Od = new Uint8Array(Math.max(null !== (Fd = null === Xd || void 0 === Xd ? void 0 : Xd.byteLength) && void 0 !== Fd ? Fd : 0, md + Wd));
            Xd && Od.set(new Uint8Array(Xd.buffer, Xd.byteOffset, Xd.byteLength)), Od.set(Rd, md), dd.pending = Od, dd.ownsPending = !0
          }
        }
      }
      updateSlot(dd, Od, md, Wd) {
        const Fd = this.arena;
        md + Cd(Wd) > dd.size && (dd.size = Cd(Math.max(2 * dd.size, md + Wd)), Fd.growTo(dd.slot + dd.size), this.gpuBuffersVersion++), 0 === Wd ? this.writeSlot(dd, md, WK, 0, 4, !1) : this.writeSlot(dd, md, Od, Od.byteOffset, Wd, !0)
      }
      writeSlot(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Od + (Rd ? Cd(Fd) : Fd);
        Xd > dd.slotBytes && this.moveSlot(dd, Xd), this.arena.write(dd.slot + Od, md, Wd, Fd, Rd)
      }
      moveSlot(dd, Od) {
        const md = this.arena,
          Wd = ZX.slotBytes(Math.max(Od, Math.min(2 * dd.slotBytes, dd.size))),
          Fd = md.allocate(Wd, null, dd.size);
        md.move(dd.slot, Fd, dd.slotBytes), md.free(dd.slot, dd.slotBytes), dd.slot = Fd, dd.slotBytes = Wd, this.gpuBuffersVersion++
      }
      cover(dd, Od) {
        const md = this.buffers.get(dd);
        if (!md || md.slot < 0) return !1;
        const Wd = Math.min(Od, md.size);
        return !(Wd <= md.slotBytes) && (this.moveSlot(md, Wd), !0)
      }
      destroyBuffer(dd) {
        var Od;
        null === (Od = this.onDestroy) || void 0 === Od || Od.call(this, dd), dd.destroy()
      }
      gpuBuffer(dd) {
        const Od = this.buffers.get(dd);
        if (!Od) return null;
        if (Od.slot >= 0) return this.arena.buffer;
        if (Od.arena && Od.pending) {
          const dd = Od.pending,
            md = this.arena;
          return Od.size = Cd(dd.byteLength), Od.slotBytes = ZX.slotBytes(function(dd) {
            const Od = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength);
            let md = Od.length;
            if (dd.byteOffset % 4 === 0) {
              for (; md % 4 !== 0 && 0 === Od[md - 1];) md--;
              if (md % 4 === 0) {
                const Od = new Uint32Array(dd.buffer, dd.byteOffset, md / 4);
                let Wd = Od.length;
                for (; Wd > 0 && 0 === Od[Wd - 1];) Wd--;
                md = 4 * Wd
              }
            }
            for (; md > 0 && 0 === Od[md - 1];) md--;
            return md
          }(dd)), Od.slot = md.allocate(Od.slotBytes, dd, Od.size), Od.pending = null, md.buffer
        }
        if (!Od.gpu && Od.pending) {
          const dd = Od.pending;
          Od.gpu = this.device.createBuffer({
            label: Od.label,
            size: Cd(dd.byteLength),
            usage: Od.usage
          }), fX(this.device, Od.gpu, 0, dd, dd.byteLength), Od.pending = null
        }
        return Od.gpu
      }
      gpuOffset(dd) {
        var Od, md;
        const Wd = null !== (Od = null === (md = this.buffers.get(dd)) || void 0 === md ? void 0 : md.slot) && void 0 !== Od ? Od : -1;
        return Wd < 0 ? 0 : Wd
      }
      gpuEnd(dd) {
        var Od, md;
        const Wd = this.buffers.get(dd);
        return Wd ? Wd.slot >= 0 ? Wd.slot + Wd.size : null !== (Od = null === (md = Wd.gpu) || void 0 === md ? void 0 : md.size) && void 0 !== Od ? Od : 0 : 0
      }
      vertexInput(dd, Od, md) {
        var Wd, Fd, Rd, Xd;
        return null !== (Wd = null !== (Fd = md && this.modelInput(md, Od)) && void 0 !== Fd ? Fd : null === (Rd = null !== (Xd = this.vdd.get(dd)) && void 0 !== Xd ? Xd : this.batchUploads.get(dd)) || void 0 === Rd ? void 0 : Rd.inputs[Od]) && void 0 !== Wd ? Wd : null
      }
      modelInput(dd, Od) {
        const md = this.geometrySlot(dd);
        let Wd = md.inputs.get(Od);
        if (void 0 === Wd) {
          const Fd = dd.vertexAttributes.find((dd => dd.kind === Od));
          Wd = Fd ? new yO(this.modelKey(md, Fd.data, !1), Fd.offset, Fd.stride, Fd.components, !1, Fd.glType, Fd.isNormalized) : null, md.inputs.set(Od, Wd)
        }
        return Wd
      }
      modelIndex(dd) {
        return dd.indexData && this.modelKey(this.geometrySlot(dd), dd.indexData, !0)
      }
      geometrySlot(dd) {
        var Od;
        let md = dd.gpu[Bd.c.lite];
        if ((null === (Od = md) || void 0 === Od ? void 0 : Od.epoch) !== this.epoch) {
          const Od = new Map,
            Wd = () => {
              for (const dd of Od.values()) this.bufferDeleted(dd)
            },
            Fd = dd => {
              const md = Od.get(dd);
              md && this.vertexBufferUpdated(md, dd)
            };
          md = {
            keys: Od,
            inputs: new Map,
            release: Wd,
            updated: Fd,
            epoch: this.epoch
          }, dd.gpu[Bd.c.lite] = md
        }
        return md
      }
      modelKey(dd, Od, md) {
        let Wd = dd.keys.get(Od);
        if (!Wd) {
          if (md) {
            const dd = {
              Mt: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(dd, Od, "model-indices"), Wd = dd
          } else Wd = {
            Mt: 0
          }, this.vertexBufferCreated(Wd, Od, !1, "model-vertices");
          dd.keys.set(Od, Wd)
        }
        return Wd
      }
      indexFormat(dd) {
        return dd.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(dd, Od) {
        --dd.refs > 0 || (this.releaseTexture(dd), eX(dd.images), null !== Od && this.textures.delete(Od))
      }
      load(dd, Od) {
        const {
          epoch: md
        } = this, Wd = Od.decoded = async function(dd) {
          if ("cube" === dd.kind) return async function(dd) {
            if (6 !== dd.length) throw new Error(`${dd.length} files where six faces were expected`);
            const Od = await IX(dd.map((dd => OO(dd)))),
              md = Od[0].width;
            return IX(Od.map((async dd => {
              if (dd.width === md && dd.height === md) return dd;
              try {
                return await createImageBitmap(dd, {
                  ...Md,
                  resizeWidth: md,
                  resizeHeight: md
                })
              } finally {
                dd.close()
              }
            })))
          }(dd.files);
          if ("data" === dd.kind && dd.data) return [await createImageBitmap(new Blob([dd.data]), Md)];
          return [await OO(mK(dd))]
        }(dd.source).then((dd => {
          0 === Od.refs || md !== this.epoch ? eX(dd) : Od.images = dd
        }));
        this.track(Od, mK(dd.source), Wd, (() => {
          Od.wanted && !Od.failed && Od.refs > 0 && this.upload(dd, Od)
        }))
      }
      canvasUpdated(dd, Od, md) {
        const {
          state: Wd
        } = this.textureSlot(dd);
        Wd.dynamicSource = {
          invertY: Od,
          premultiplied: md
        }, Wd.dynamic && this.pushDynamic(dd.source, Wd)
      }
      async atlasArrays(dd) {
        const {
          device: Od,
          epoch: md
        } = this;
        let Wd;
        try {
          Wd = await WO(Od, dd)
        } catch (Rd) {
          if (md === this.epoch) {
            if (!tO(Od)) throw Rd;
            await new Promise((dd => {
              this.rebindWaiters.push(dd)
            }))
          }
          return this.atlasArrays(dd)
        }
        if (Wd.forEach(((Od, md) => {
            this.atlasSources.has(Od) || this.atlasSources.set(Od, {
              sources: dd,
              index: md,
              stride: Wd[0].layers
            })
          })), md !== this.epoch) return Wd;
        const Fd = (0, LX.e)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const Xd of Wd) this.atlasBindings.has(Xd) || this.atlasBindings.set(Xd, {
          view: Xd.texture.createView({
            dimension: "2d-array"
          }),
          sampler: Fd
        });
        return Wd
      }
      boundTexture(dd) {
        const Od = this.atlasBindings.get(dd);
        if (Od) return Od;
        const md = this.atlasSources.get(dd);
        if (md) return this.rebuildAtlas(dd, md), null;
        const Wd = dd;
        if (Wd.released) return null;
        const Fd = this.textureSlot(Wd, !0),
          {
            state: Rd
          } = Fd;
        if (!Rd.view && (Rd.wanted = !0, Rd.loading || Rd.failed || this.upload(Wd, Rd), !Rd.view)) return null;
        const Xd = this.chosenSampler(Wd, Fd),
          Kd = Fd.bound;
        return Kd && Kd.view === Rd.view && Kd.sampler === Xd ? Kd : (Fd.bound = {
          view: Rd.view,
          sampler: Xd
        }, Fd.bound)
      }
      rebuildAtlas(dd, Od) {
        let {
          sources: md,
          index: Wd,
          stride: Fd
        } = Od;
        if (this.atlasRebuilds.has(dd)) return;
        this.atlasRebuilds.add(dd);
        const {
          epoch: Rd
        } = this;
        this.atlasArrays(md).then((Od => {
          Od[0].layers === Fd && Od[Wd] ? Rd === this.epoch && this.atlasBindings.set(dd, this.atlasBindings.get(Od[Wd])) : console.error(`Lite: the new device splits the atlas ${dO(md.urls[0])} into other arrays than its materials read`)
        }), (dd => {
          console.error(`Lite: could not build the atlas ${dO(md.urls[0])} again on a new device`, dd)
        }))
      }
      textureLoaded(dd) {
        var Od, md;
        return null !== (Od = null === (md = this.heldSlot(dd)) || void 0 === md ? void 0 : md.state.decoded) && void 0 !== Od ? Od : null
      }
      textureFailed(dd) {
        var Od;
        return !0 === (null === (Od = this.heldSlot(dd)) || void 0 === Od ? void 0 : Od.state.failed)
      }
      heldSlot(dd) {
        const Od = dd.gpu[Bd.c.lite];
        return (null === Od || void 0 === Od ? void 0 : Od.epoch) === this.epoch ? Od : void 0
      }
      chosenSampler(dd, Od) {
        const {
          samplingMode: md,
          wrapU: Wd,
          wrapV: Fd
        } = dd.sampler, Rd = Od.state.hasMips, Xd = function(dd, Od) {
          const {
            bilinear: md,
            trilinear: Wd
          } = Bd.g;
          return !Od && dd !== md || 11 !== dd && dd !== Wd && dd !== md ? 1 : 4
        }(md, Rd), Kd = Od.sampler;
        if (Kd && Kd.samplingMode === md && Kd.hasMips === Rd && Kd.anisotropy === Xd && Kd.wrapU === Wd && Kd.wrapV === Fd) return Kd.sampler;
        const hd = this.samplerFor(md, Rd, Xd, Wd, Fd);
        return Od.sampler = {
          samplingMode: md,
          hasMips: Rd,
          anisotropy: Xd,
          wrapU: Wd,
          wrapV: Fd,
          sampler: hd
        }, hd
      }
      releaseTexture(dd) {
        var Od, md;
        dd.view && (null === (md = this.onDestroy) || void 0 === md || md.call(this, dd.view));
        null === (Od = dd.destroy) || void 0 === Od || Od.call(dd)
      }
      textureSlot(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = dd.gpu[Bd.c.lite];
        if ((null === md || void 0 === md ? void 0 : md.epoch) === this.epoch) return md;
        const Wd = function(dd) {
          let {
            source: Od,
            sampler: md
          } = dd;
          return "canvas" === Od.kind ? null : `${Od.kind}|${mK(Od)}|${md.noMipmap}|${md.samplingMode}|${md.invertY}`
        }(dd);
        let Fd = null === Wd ? void 0 : this.textures.get(Wd);
        var Rd;
        Fd || (Fd = {
          refs: 0,
          view: null,
          destroy: null,
          loading: !1,
          decoded: null,
          failed: !1,
          wanted: !1,
          hasMips: !1,
          images: null,
          dynamic: null,
          dynamicSource: null !== (Rd = null === md || void 0 === md ? void 0 : md.state.dynamicSource) && void 0 !== Rd ? Rd : null
        }, null !== Wd && (this.textures.set(Wd, Fd), this.load(dd, Fd), Od && !md && this.firstBindDecodes++));
        Fd.refs++;
        const Xd = Fd,
          {
            epoch: Kd
          } = this,
          hd = {
            state: Fd,
            bound: null,
            sampler: null,
            release: () => {
              Kd === this.epoch && this.releaseSlot(Xd, Wd)
            },
            epoch: Kd
          };
        return dd.gpu[Bd.c.lite] = hd, hd
      }
      samplerFor(dd, Od, md, Wd, Fd) {
        const Rd = `${dd}|${Od}|${md}|${Wd}|${Fd}`;
        let Xd = this.samplers.get(Rd);
        if (!Xd) {
          const Kd = {
            ...MX(dd, Od, md),
            addressModeU: dK(Wd),
            addressModeV: dK(Fd)
          };
          Xd = (0, LX.e)(this.engine, Kd), this.samplers.set(Rd, Xd)
        }
        return Xd
      }
      upload(dd, Od) {
        const {
          source: md,
          sampler: Wd
        } = dd;
        Od.hasMips = !Wd.noMipmap, "canvas" === md.kind ? this.createDynamic(md, Od) : "cube" === md.kind ? this.uploadCube(Od, md.luminance) : this.uploadImage(Od, !0 === Wd.invertY, md.url)
      }
      uploadImage(dd, Od, md) {
        const [Wd] = dd.images;
        dd.images = null;
        const {
          epoch: Fd
        } = this, Rd = (0, PX.b)(this.engine, Wd, {
          mipMaps: dd.hasMips,
          invertY: Od,
          srgb: !1
        }).then((Od => {
          Wd.close(), 0 !== dd.refs && Fd === this.epoch ? (dd.view = Od.view, dd.destroy = Od.texture.destroy.bind(Od.texture)) : Od.texture.destroy()
        }));
        this.track(dd, md, Rd)
      }
      track(dd, Od, md, Wd) {
        const {
          epoch: Fd
        } = this;
        dd.loading = !0, this.pending++, md.catch((md => {
          Fd === this.epoch && (dd.failed = !0, console.warn(`Lite: could not load texture ${dO(Od)}`, md))
        })).finally((() => {
          Fd === this.epoch && (dd.loading = !1, this.pending--, null === Wd || void 0 === Wd || Wd())
        }))
      }
      uploadCube(dd, Od) {
        const md = dd.images;
        dd.images = null;
        const Wd = DX(this.engine, this.device, md, (0, Bd.r)(Od), dd.hasMips);
        dd.view = Wd.createView({
          dimension: "cube"
        }), dd.destroy = () => {
          Wd.destroy()
        }
      }
      createDynamic(dd, Od) {
        const {
          canvas: md
        } = dd, Wd = (0, zX.b)(this.engine, Math.max(1, md.width), Math.max(1, md.height), {
          mipMaps: Od.hasMips,
          srgb: !1
        });
        Od.dynamic = Wd, Od.view = Wd.view, Od.destroy = () => {
          Wd.texture.destroy()
        }, this.pushDynamic(dd, Od)
      }
      pushDynamic(dd, Od) {
        const md = Od.dynamicSource,
          Wd = Od.dynamic,
          {
            canvas: Fd
          } = dd;
        if (md && Wd && 0 !== Fd.width && 0 !== Fd.height) return Fd.width !== Wd.width || Fd.height !== Wd.height ? (this.releaseTexture(Od), Od.dynamic = null, Od.view = null, void this.createDynamic(dd, Od)) : void(0, zX.e)(this.engine, Wd, Fd, {
          invertY: md.invertY,
          premultiplyAlpha: md.premultiplied
        })
      }
    }

    function mK(dd) {
      return "cube" === dd.kind ? dd.rootUrl : "canvas" === dd.kind ? "canvas" : dd.url
    }
    const WK = new Uint8Array(4);
    var FK = md(40327);

    function RK(dd) {
      const Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      dd._colorAttachment.storeOp = dd._targetSignature._sampleCount > 1 ? Od : "store";
      const md = dd._renderPassDescriptor.depthStencilAttachment;
      md && (md.depthStoreOp = Od, md.stencilStoreOp && (md.stencilStoreOp = Od))
    }
    var XK = md(39306),
      KK = md(38837),
      hK = md(38922),
      vK = md(41292);
    const QK = new Float64Array([1, 1, 1]),
      tK = new Float64Array([0, 1, 0]),
      oK = new Float64Array(4),
      NK = new Float32Array(16),
      qK = new Float64Array(3),
      HK = new Float64Array(4);

    function yK(dd, Od, md) {
      dd.fov = Od.fov, dd.near = Od.near, dd.far = Od.far, dd.renderWidth = md.renderWidth, dd.renderHeight = md.renderHeight, (0, hK.u)(Od.holderRotation, 0, oK, 0), (0, hK.e)(QK, 0, oK, 0, Od.holderPosition, 0, NK);
      const Wd = Od.k_;
      qK[0] = Wd[0], qK[1] = Wd[1], qK[2] = Wd[2] + 1;
      const Fd = dd.viewMatrix;
      (0, hK.m)(Wd, qK, tK, Fd), (0, hK.i)(Fd, 0, Fd), (0, hK.q)(Fd, NK, 0, Fd), (0, hK.i)(Fd, 0, Fd);
      const Rd = dd.worldMatrix;
      (0, hK.i)(Fd, 0, Rd), dd.eye[0] = Rd[12], dd.eye[1] = Rd[13], dd.eye[2] = Rd[14], HK[0] = dd.fov, HK[1] = dd.renderWidth / dd.renderHeight, HK[2] = dd.near, HK[3] = dd.far, (0, hK.s)(HK, dd.projectionMatrix), (0, hK.q)(Fd, dd.projectionMatrix, 0, dd.viewProjectionMatrix), (0, vK.f)(dd.viewProjectionMatrix, dd.frustum)
    }

    function bK(dd, Od) {
      let md = dd.frustumPlanes;
      md || (md = dd.frustumPlanes = Array.from({
        length: 6
      }, (() => new XK.d(0, 0, 0, 0))));
      for (let Wd = 0; Wd < 6; Wd++) {
        const dd = md[Wd].normal;
        dd._x = Od[4 * Wd], dd._y = Od[4 * Wd + 1], dd._z = Od[4 * Wd + 2], dd._isDirty = !0, md[Wd].d = Od[4 * Wd + 3]
      }
    }

    function TK(dd, Od) {
      const md = Od.clearColor;
      dd.clearColour[0] = md.r, dd.clearColour[1] = md.g, dd.clearColour[2] = md.b, dd.clearColour[3] = md.a;
      const Wd = Od.ambientColor;
      dd.ambientColour[0] = Wd.r, dd.ambientColour[1] = Wd.g, dd.ambientColour[2] = Wd.b, dd.animationRatio = Od.animationRatio, dd.frameId = Od.frameId, dd.version++
    }

    function pK(dd) {
      const Od = dd.model.view;
      return Od.animTick = (0, KK.g)(), Od.timeMs = performance.now(), TK(Od, dd.MH), dd.model.update(Od.frameId), Od
    }

    function YK(dd) {
      const Od = dd.MH,
        {
          view: md,
          l_: Wd
        } = dd.model;
      return yK(md, Wd, Od.Iq()), Od.onBeforeRenderObservable.notifyObservers(Od), bK(Od, md.frustum), Od.onBeforeCameraRenderObservable.notifyObservers(Od.activeCamera), pK(dd)
    }
    var gK = md(38884),
      wK = md(38985),
      aK = md(39363);

    function EK(dd) {
      var Od, md;
      const Wd = (0, Ud.db)(dd);
      if (!Wd || Wd.diffuseTexture && (0, aK.j)(dd)) return null;
      const Fd = null === (Od = (0, Ud.B)(Wd, Ed.h.name)) || void 0 === Od ? void 0 : Od.state,
        Rd = null === (md = (0, Ud.B)(Wd, OX.e.name)) || void 0 === md ? void 0 : md.state,
        Xd = new Float32Array(16);
      return function(dd, Od, md, Wd) {
        var Fd, Rd;
        const Xd = nW;
        Wd.set(dd.diffuseColor, Xd.diffuse), Wd[Xd.diffuse + 3] = dd.alpha, Wd.set(dd.ambientColor, Xd.ambientAndCutoff), Wd[Xd.ambientAndCutoff + 3] = dd.alphaCutOff, Wd.set(dd.emissiveColor, Xd.emissiveAndLevel), Wd[Xd.emissiveAndLevel + 3] = null !== (Fd = null === (Rd = dd.diffuseTexture) || void 0 === Rd ? void 0 : Rd.level) && void 0 !== Fd ? Fd : 1, null !== Od && void 0 !== Od && Od.animDataPerTex ? (Wd[Xd.anim + 1] = KK.d, Wd[Xd.anim + 2] = Od.animDataPerTex.length / 3 - 1) : md && (Wd[Xd.anim + 1] = md.numAnimStates, Wd[Xd.anim + 2] = md.ticksPerAnimState)
      }(Wd, Fd, Rd, Xd), {
        model: Wd,
        atlas: Fd,
        texture: Fd ? "atlas" : Wd.diffuseTexture ? "single" : "none",
        animated: Fd ? !!Fd.animDataPerTex : !!Rd,
        liquid: (0, aK.l)(dd),
        customRenderMat: (0, aK.j)(dd),
        uniformData: Xd
      }
    }
    var JK = md(3953);
    class UK {
      constructor(dd) {
        this.units = dd, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var dd;
        this.buffer.destroy(), null === (dd = this.twin) || void 0 === dd || dd.destroy()
      }
    }
    class xK {
      constructor(dd, Od) {
        this.arena = dd, this.By = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.By = new lX(Od);
        const md = new UK(Od);
        md.buffer = this.createBuffer(md, !1), this.backings.push(md), this.refresh()
      }
      get Mt() {
        return this.By.Mt
      }
      get canGrow() {
        return this.growable && !this.dropped
      }
      get live() {
        return !this.dropped
      }
      get hasTwin() {
        return null !== this.backings[this.backings.length - 1].twin
      }
      get allocatedBytes() {
        let dd = 0;
        for (const Od of this.backings) dd += Od.units * (this.arena.unitBytes + (Od.twin ? this.arena.twinUnitBytes : 0));
        return dd
      }
      holds(dd) {
        return dd.start + dd.length <= this.usable
      }
      lost(dd) {
        return this.dropped || dd.start + dd.length > this.Mt
      }
      write(dd, Od) {
        const {
          device: md,
          unitBytes: Wd
        } = this.arena;
        for (const Fd of this.backings) {
          const Rd = (Fd.units - dd.start) * Wd;
          Rd > 0 && md.queue.writeBuffer(Fd.buffer, dd.start * Wd, Od, 0, Math.min(Od.byteLength, Rd))
        }
      }
      writeLight(dd, Od) {
        const {
          device: md,
          twinUnitBytes: Wd,
          verticesPerUnit: Fd
        } = this.arena, {
          light: Rd,
          count: Xd
        } = this.arena.twinLight(Od, Math.min(Od.length, dd.length * Fd));
        for (const Kd of this.backings) {
          Kd.twin || (Kd.twin = this.createBuffer(Kd, !0));
          const Od = (Kd.units - dd.start) * Fd;
          Od > 0 && md.queue.writeBuffer(Kd.twin, dd.start * Wd, Rd, 0, Math.min(Xd, Od))
        }
      }
      grow(dd) {
        this.arena.assertNotDrawing();
        const {
          device: Od,
          unitBytes: md,
          label: Wd
        } = this.arena, Fd = this.backings[this.backings.length - 1], Rd = new UK(dd), Xd = Od.createCommandEncoder({
          label: `${Wd}-grow`
        });
        Rd.buffer = this.createBuffer(Rd, !1), Xd.copyBufferToBuffer(Fd.buffer, 0, Rd.buffer, 0, Fd.units * md), Fd.twin && (Rd.twin = this.createBuffer(Rd, !0), Xd.copyBufferToBuffer(Fd.twin, 0, Rd.twin, 0, Fd.units * this.arena.twinUnitBytes)), Od.queue.submit([Xd.finish()]), this.backings.push(Rd), this.By.grow(dd)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const dd of this.backings) dd.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(dd, Od) {
        const {
          device: md,
          unitBytes: Wd,
          twinUnitBytes: Fd,
          usage: Rd,
          label: Xd
        } = this.arena;
        md.pushErrorScope("out-of-memory");
        const Kd = md.createBuffer({
          label: Od ? `${Xd}-light` : Xd,
          size: dd.units * (Od ? Fd : Wd),
          usage: (Od ? this.arena.twinUsage : Rd) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, md.popErrorScope().then((md => {
          this.arena.awaitingVerdict--, this.settle(dd, Od, !md, !0)
        }), (md => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Xd} buffer, taken as failed: ${String(md)}`), this.settle(dd, Od, !1, !1)
        })), Kd
      }
      settle(dd, Od, md, Wd) {
        const Fd = this.backings.indexOf(dd);
        if (!(this.dropped || Fd < 0)) {
          if (!md) {
            if (Wd && this.arena.ranOutOfMemory(dd.units, dd.units * (Od ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Fd) return void this.drop();
            for (const dd of this.backings.splice(Fd)) dd.destroy();
            return this.By.truncate(this.backings[Fd - 1].units), this.growable = !1, void this.promote()
          }
          Od ? dd.twinReady = !0 : (dd.bufferReady = !0, this.arena.allocatedBuffer(dd.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: dd
        } = this;
        let Od = 0;
        for (; Od + 1 < dd.length && dd[Od].ready && dd[Od + 1].ready;) Od++;
        for (const md of dd.splice(0, Od)) md.destroy();
        this.refresh()
      }
      refresh() {
        const dd = this.backings[0];
        this.buffer = dd.buffer, this.twin = dd.twinReady ? dd.twin : null, this.usable = !this.dropped && dd.bufferReady ? dd.units : 0
      }
    }
    class BK {
      constructor(dd, Od, md, Wd) {
        let {
          verticesPerUnit: Fd = 1,
          twinUsage: Rd = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = dd, this.unitBytes = Od, this.usage = md, this.label = Wd, this.pages = [], this.yt = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, iO.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Od % 4 !== 0) throw new Error(`${Wd}: ${Od}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Fd, this.twinUsage = Rd, this.twinValueBytes = Fd > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Fd
      }
      twinLight(dd, Od) {
        if (4 === this.twinValueBytes) return this.widened.length < Od && (this.widened = new Float32Array(Math.max(Od, 2 * this.widened.length))), this.widened.set(dd.subarray(0, Od)), {
          light: this.widened,
          count: Od
        };
        const md = Od % this.verticesPerUnit;
        if (0 === md) return {
          light: dd,
          count: Od
        };
        const Wd = Od - md + this.verticesPerUnit;
        return this.padded.length < Wd && (this.padded = new Uint16Array(Math.max(Wd, 2 * this.padded.length))), this.padded.set(dd.subarray(0, Od)), this.padded.fill(0, Od, Wd), {
          light: this.padded,
          count: Wd
        }
      }
      allocate(dd) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), dd > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Fd of this.pages) {
          const Od = Fd.By.allocate(dd);
          if (Od >= 0) return {
            page: Fd,
            start: Od,
            length: dd
          }
        }
        const Od = this.pages[this.pages.length - 1];
        if (null !== Od && void 0 !== Od && Od.canGrow) {
          const md = Math.min(this.ceiling, Math.max(2 * Od.Mt, Od.Mt + dd));
          if (md - Od.Mt >= dd) return Od.grow(md), {
            page: Od,
            start: Od.By.allocate(dd),
            length: dd
          }
        }
        Od && Od !== this.pages[0] && 0 === Od.By.used && Od.drop();
        const md = Math.floor(1048576 / this.unitBytes),
          Wd = new xK(this, Math.max(dd, Math.min(this.ceiling, md)));
        return this.pages.push(Wd), {
          page: Wd,
          start: Wd.By.allocate(dd),
          length: dd
        }
      }
      free(dd) {
        this.assertNotDrawing();
        const {
          page: Od
        } = dd;
        Od.By.free(dd.start, dd.length), 0 === Od.By.used && Od !== this.pages[0] && Od !== this.pages[this.pages.length - 1] && Od.drop()
      }
      retire() {
        for (const dd of this.pages) dd.retire()
      }
      remove(dd) {
        const Od = this.pages.indexOf(dd);
        Od >= 0 && this.pages.splice(Od, 1)
      }
      ranOutOfMemory(dd, Od) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Od}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, dd), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, dd) / 2));
        const md = performance.now();
        md >= this.shortageUntil && (this.forgetFailedAt = md + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = md + 1e3)
      }
      allocatedBuffer(dd) {
        dd >= this.failed && (this.failed = 1 / 0);
        const Od = Math.min(2 * dd, Math.floor((dd + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Od))
      }
      stats() {
        let dd = 0,
          Od = 0,
          md = 0,
          Wd = 0;
        for (const Fd of this.pages) dd += Fd.Mt, Od += Fd.By.used, md += Fd.hasTwin ? Fd.Mt * this.twinUnitBytes : 0, Wd += Fd.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: dd * this.unitBytes,
          usedBytes: Od * this.unitBytes,
          twinBytes: md,
          allocatedBytes: Wd
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: dd,
          maxStorageBufferBindingSize: Od
        } = this.device.limits;
        let md = Math.floor(Math.min(67108864, dd) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (md = Math.min(md, Math.floor(Od / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (md = Math.min(md, Math.floor(Od / this.twinUnitBytes))), md
      }
    }
    const SK = 16383;

    function sK(dd, Od, md, Wd, Fd) {
      let Rd = 0;
      for (let Xd = md; Xd < Wd; Xd += SK) dd.drawIndexed(6 * Math.min(SK, Wd - Xd), 1, 0, Od + 4 * Xd, Fd), Rd++;
      return Rd
    }
    class uK {
      constructor(dd, Od) {
        this.recordsGroup = Od, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const md = ZO.h.strideWithoutAtlas;
        this.vertexArena = new BK(dd, md, GPUBufferUsage.VERTEX, `terrain-vertices-${md}`), this.quadArena = new BK(dd, wK.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Wd = (0, kO.h)(new Uint16Array(98298), SK);
        this.quadPattern = dd.createBuffer({
          label: "terrain-quad-pattern",
          size: Wd.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), dd.queue.writeBuffer(this.quadPattern, 0, Wd)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(dd, Od) {
        const md = Od.packedVertices,
          Wd = md ? this.quadArena.allocate(dd.faceCount) : this.vertexArena.allocate(dd.vertexCount);
        if (!Wd) return !1;
        dd.vertices = Wd;
        const Fd = md ? new Uint8Array(md.buffer, md.byteOffset, md.byteLength) : new Uint8Array(Od.vertices);
        return Wd.page.write(Wd, Fd), !0
      }
      setLight(dd, Od) {
        const {
          vertices: md
        } = dd;
        md && 0 !== Od.length && md.page.live && (Od.length < dd.vertexCount ? md.page.arena.warnOnce("shortLight", `a part's ${Od.length} light values are fewer than its ${dd.vertexCount} vertices, so its light is left as it was`) : (md.page.writeLight(md, Od), dd.lit = !0))
      }
      lightFullSky(dd, Od) {
        this.fullSky.length < Od && (this.fullSky = new Uint16Array(Math.max(Od, 4096)).fill(JK.e));
        for (const md of dd) {
          const dd = md.vertices;
          dd.page.live && (dd.page.writeLight(dd, this.fullSky), md.lit = !0)
        }
      }
      backed(dd) {
        const {
          vertices: Od
        } = dd;
        return !!Od && Od.page.holds(Od)
      }
      lost(dd) {
        const {
          vertices: Od
        } = dd;
        return !!Od && Od.page.lost(Od)
      }
      release(dd) {
        dd.vertices && dd.vertices.page.arena.free(dd.vertices), dd.vertices = null, dd.lit = !1
      }
      setDrawing(dd) {
        this.forgetBound()
      }
      draw(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Od.faceCount;
        const Rd = Od.vertices,
          Xd = Rd.page,
          Kd = md ? Xd.twin : null;
        if (!Xd.holds(Rd) || md && !Kd) return 0;
        const {
          verticesPerUnit: hd
        } = Xd.arena;
        let vd = Rd.start * hd;
        this.boundPattern || (dd.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Qd = Wd + Fd;
        if (hd > 1) return Xd.buffer === this.boundRecords && Kd === this.boundRecordsLight || (dd.setBindGroup(1, this.recordsGroup(Xd.buffer, Kd)), this.boundRecords = Xd.buffer, this.boundRecordsLight = Kd), sK(dd, vd, Wd, Qd, Od.slot);
        Xd.buffer !== this.boundVertices && (dd.setVertexBuffer(0, Xd.buffer), this.boundVertices = Xd.buffer), Kd && Kd !== this.boundLight && (dd.setVertexBuffer(1, Kd), this.boundLight = Kd);
        const td = Od.faceCount;
        return Qd <= td ? sK(dd, vd, Wd, Qd, Od.slot) : sK(dd, vd, Wd, td, Od.slot) + sK(dd, vd, Math.max(Wd, td) - td, Qd - td, Od.slot)
      }
      get buffersAwaitingVerdict() {
        let dd = 0;
        for (const Od of this.arenas()) dd += Od.awaitingVerdict;
        return dd
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class VK {
      constructor(dd, Od, md, Wd) {
        this.device = dd, this.splitBefore = Od, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = dd.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Fd = dd.createShaderModule({
          label: "scene-depth-copy",
          code: (Rd = md._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Rd?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Rd;
        dd.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Fd,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Fd,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((dd => {
          this.pipeline = dd, this.building = !1
        }), (dd => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", dd)
        })), md._executeWithTransmission = () => this.execute(md, Wd)
      }
      get compiling() {
        return this.building
      }
      setWanted(dd) {
        this.wanted = dd
      }
      setPlanes(dd, Od) {
        dd === this.near && Od === this.far || (this.near = dd, this.far = Od, this.unproject[0] = dd / (Od - dd), this.unproject[1] = Od * dd / (Od - dd), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var dd, Od;
        return null !== (dd = null === (Od = this.copy) || void 0 === Od ? void 0 : Od.view) && void 0 !== dd ? dd : null
      }
      execute(dd, Od) {
        var md;
        null === (md = this.retired) || void 0 === md || md.destroy(), this.retired = null;
        const Wd = EO(Od),
          Fd = dd._transparentBindings,
          Rd = this.wanted && this.pipeline ? this.splitIndex(Fd) : -1,
          Xd = dd._colorAttachment,
          Kd = Xd.resolveTarget;
        Rd >= 0 && (Xd.resolveTarget = void 0, RK(dd, !0));
        let hd = Wd.beginRenderPass(dd._renderPassDescriptor);
        hd.setBindGroup(0, dd._sceneBG);
        let vd = this.drawList(hd, Od, dd._opaqueBindings, 0, dd._opaqueBindings.length);
        if (vd += this.drawList(hd, Od, dd._directBindings, 0, dd._directBindings.length), vd += this.drawList(hd, Od, Fd, 0, Rd >= 0 ? Rd : Fd.length), hd.end(), Rd < 0) return vd;
        RK(dd);
        const Qd = dd._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: td,
            stencilLoadOp: od
          } = Qd,
          Nd = Xd.loadOp;
        Xd.resolveTarget = Kd;
        try {
          this.copyDepth(Wd, dd), Xd.loadOp = "load", Qd.depthLoadOp = "load", od && (Qd.stencilLoadOp = "load"), hd = Wd.beginRenderPass(dd._renderPassDescriptor), hd.setBindGroup(0, dd._sceneBG), vd += this.drawList(hd, Od, Fd, Rd, Fd.length), hd.end()
        } finally {
          Xd.loadOp = Nd, Qd.depthLoadOp = td, Qd.stencilLoadOp = od
        }
        return vd
      }
      splitIndex(dd) {
        for (let Od = 0; Od < dd.length; Od++)
          if (dd[Od].renderable === this.splitBefore) return Od;
        return -1
      }
      drawList(dd, Od, md, Wd, Fd) {
        let Rd = null,
          Xd = 0;
        for (let Kd = Wd; Kd < Fd; Kd++) {
          const Wd = md[Kd],
            Fd = Wd.renderable.mesh;
          Fd && !1 === Fd.visible || (Wd.pipeline !== Rd && (dd.setPipeline(Wd.pipeline), Rd = Wd.pipeline), Xd += Wd.draw(dd, Od))
        }
        return Xd
      }
      copyDepth(dd, Od) {
        var md, Wd;
        const Fd = (null !== (md = Od._config.depth) && void 0 !== md ? md : Od._config.rt)._depthTexture,
          Rd = (null === (Wd = this.copy) || void 0 === Wd ? void 0 : Wd.source) === Fd ? this.copy : this.remakeCopy(Fd),
          Xd = dd.beginRenderPass(Rd.pass);
        Xd.setPipeline(this.pipeline), Xd.setBindGroup(0, Rd.bindGroup), Xd.draw(3), Xd.end()
      }
      remakeCopy(dd) {
        var Od, md;
        this.retired = null !== (Od = null === (md = this.copy) || void 0 === md ? void 0 : md.texture) && void 0 !== Od ? Od : null;
        const Wd = this.device.createTexture({
            label: "scene-depth",
            size: [dd.width, dd.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Fd = Wd.createView(),
          Rd = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: dd.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Xd = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Fd,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: dd,
          texture: Wd,
          view: Fd,
          bindGroup: Rd,
          pass: Xd
        }, this.copy
      }
    }
    const iK = "rgba8unorm";

    function AK(dd) {
      return dd ? 15 : 1
    }
    class rK {
      constructor(dd, Od, md, Wd) {
        this.device = dd, this.terrain = Wd, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Od._targetSignature._sampleCount > 1, this.cameraBuffer = dd.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = dd.createBindGroupLayout({
          label: "sun-shadow-mask",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "unfilterable-float"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        const Fd = dd.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = dd.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Fd,
          entries: []
        });
        const Rd = dd.createShaderModule({
          label: "sun-shadow-mask",
          code: (Xd = this.edge, `${(0,fO.z)()}${QW({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Xd?Mm:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${AK(Xd)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Xd?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Xd;
        dd.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: dd.createPipelineLayout({
            bindGroupLayouts: [this.layout, Fd, Fd, IR(dd, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Rd,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Rd,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((dd => {
          this.pipeline = dd, this.building = !1
        }), (dd => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", dd)
        }));
        const Kd = Od._executeWithTransmission;
        Od._executeWithTransmission = dd => this.execute(Od, md, (() => Kd ? Kd(dd) : function(dd, Od) {
          const md = EO(Od).beginRenderPass(dd._renderPassDescriptor);
          md.setBindGroup(0, dd._sceneBG);
          let Wd = GK(md, Od, dd._opaqueBindings);
          return Wd += GK(md, Od, dd._directBindings), Wd += GK(md, Od, dd._transparentBindings), md.end(), Wd
        }(Od, md)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var dd, Od;
        return null !== (dd = null === (Od = this.targets) || void 0 === Od ? void 0 : Od.maskView) && void 0 !== dd ? dd : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(dd) {
        ! function(dd, Od) {
          const md = dd.worldMatrix,
            Wd = dd.projectionMatrix,
            Fd = 1 / Wd[0],
            Rd = 1 / Wd[5],
            Xd = dd.far * dd.near / (dd.far - dd.near);
          Od[0] = dd.eye[0], Od[1] = dd.eye[1], Od[2] = dd.eye[2], Od[3] = 2 ** -23 / Xd, Od[4] = md[0] * Fd, Od[5] = md[1] * Fd, Od[6] = md[2] * Fd, Od[7] = Xd, Od[8] = md[4] * Rd, Od[9] = md[5] * Rd, Od[10] = md[6] * Rd, Od[11] = dd.near / (dd.far - dd.near), Od[12] = md[8], Od[13] = md[9], Od[14] = md[10], Od[15] = 0
        }(dd, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(dd, Od, md) {
        if (this.retire(), !this.terrain.readsMask) return md();
        const Wd = this.targetsFor(dd),
          Fd = EO(Od),
          Rd = dd._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Wd.prepass.depthStencilAttachment.view = Rd.view);
        const Xd = this.terrain.drawPrepass(Fd, Wd.prepass, dd._sceneBG);
        if (0 === Xd) return md();
        if (this.trace(Fd, Wd), this.edge) return Xd + 1 + md();
        const {
          depthLoadOp: Kd,
          stencilLoadOp: hd
        } = Rd;
        Rd.depthLoadOp = "load", hd && (Rd.stencilLoadOp = "load");
        try {
          return Xd + 1 + md()
        } finally {
          Rd.depthLoadOp = Kd, Rd.stencilLoadOp = hd
        }
      }
      trace(dd, Od) {
        const md = this.terrain.sunShadowGroup(),
          Wd = dd.beginRenderPass(Od.trace);
        this.pipeline && md && (Wd.setPipeline(this.pipeline), Wd.setBindGroup(0, Od.bindGroup), Wd.setBindGroup(1, this.empty), Wd.setBindGroup(2, this.empty), Wd.setBindGroup(3, md), Wd.draw(3)), Wd.end()
      }
      retire() {
        const dd = this.retired;
        var Od;
        dd && (dd.mask.destroy(), dd.normals.destroy(), null === (Od = dd.depth) || void 0 === Od || Od.destroy(), this.retired = null)
      }
      targetsFor(dd) {
        var Od, md;
        const Wd = (null !== (Od = dd._config.depth) && void 0 !== Od ? Od : dd._config.rt)._depthTexture;
        return (null === (md = this.targets) || void 0 === md ? void 0 : md.source) === Wd ? this.targets : this.remake(dd, Wd)
      }
      remake(dd, Od) {
        var md;
        this.retired = this.targets;
        const Wd = [Od.width, Od.height],
          Fd = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Wd,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Rd = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Wd,
            format: iK,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Xd = null !== (md = dd._targetSignature._depthStencilFormat) && void 0 !== md ? md : Od.format,
          Kd = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Wd,
            format: Xd,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          hd = dd._renderPassDescriptor.depthStencilAttachment,
          vd = Xd.includes("stencil"),
          Qd = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Rd.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Kd ? Kd.createView() : hd.view,
              depthClearValue: hd.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...vd ? {
                stencilClearValue: hd.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          td = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Kd && void 0 !== Kd ? Kd : Od).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Rd.createView()
            }]
          }),
          od = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Fd.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [AK(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Od,
          mask: Fd,
          maskView: Fd.createView(),
          normals: Rd,
          depth: Kd,
          bindGroup: td,
          prepass: Qd,
          trace: od
        }, this.targets
      }
    }

    function GK(dd, Od, md) {
      let Wd = null,
        Fd = 0;
      for (const Rd of md) {
        const md = Rd.renderable.mesh;
        md && !1 === md.visible || (Rd.pipeline !== Wd && (dd.setPipeline(Rd.pipeline), Wd = Rd.pipeline), Fd += Rd.draw(dd, Od))
      }
      return Fd
    }
    const nK = 6e4,
      LK = {
        status: "ok"
      },
      PK = {
        status: "skipped"
      };
    async function zK(dd, Od) {
      const {
        isCancelled: md
      } = dd;
      if (md()) return {
        status: "Ad"
      };
      const {
        target: Wd
      } = Od;
      if (!Wd) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Fd = [],
        Rd = Promise.all(Array.from(new Set(dd.materials), (async md => {
          Fd.push(await async function(dd, Od, md, Wd) {
            const Fd = {
              lighting: dd.lighting,
              dirLightCount: Math.min(dd.dirLightCount, 4),
              Jq: dd.runtime
            };
            try {
              const Rd = Od.material(Wd);
              return Rd && AW(Od.programKey(Rd, !1, Fd)) ? (await Rd.ready, dd.isCancelled() ? LK : Rd.bindGroupLayout ? await async function(dd, Od, md, Wd) {
                const {
                  device: Fd
                } = dd;
                let Rd, Xd;
                Fd.pushErrorScope("validation");
                try {
                  Rd = dd.pipelineBuild(Od, md, Wd)
                } finally {
                  Xd = Fd.popErrorScope().catch((() => null))
                }
                const [Kd, hd] = await Promise.all([Xd, Rd.built.then((() => null), (dd => null !== dd && void 0 !== dd ? dd : new Error("pipeline failed")))]);
                if (!Kd && !hd) return LK;
                const vd = await cK(Rd.module),
                  Qd = vd.length > 0 ? vd.map((dd => `${Rd.name} ${dd.lineNum}:${dd.linePos}: ${dd.message}`)).join("\n") : `${Rd.name}: ${jK(null!==hd&&void 0!==hd?hd:Kd)}`;
                return {
                  status: "failed",
                  material: Od.model.name,
                  message: Qd
                }
              }(Od, Rd, Od.programKey(Rd, "none" !== Rd.texture, Fd), md): (console.warn(`Shader pack: skipped the compile check for "${Wd.name}", whose textures failed to load`), PK)) : LK
            } catch (Rd) {
              return {
                status: "failed",
                material: Wd.name,
                message: jK(Rd)
              }
            }
          }(dd, Od, Wd, md))
        }))),
        Xd = function(dd, Od) {
          let md, Wd, Fd = !1;
          const Rd = new Promise((Rd => {
            var Xd;
            md = setTimeout((() => {
              Rd("timeout")
            }), null !== (Xd = Od.timeoutMs) && void 0 !== Xd ? Xd : nK), Wd = setInterval((() => {
              Od.isCancelled() && Rd("Ad")
            }), 50), dd.lost.then((() => {
              Fd = !0, Rd("lost")
            }))
          }));
          return {
            signal: Rd,
            lost: () => Fd,
            dispose: () => {
              clearTimeout(md), clearInterval(Wd)
            }
          }
        }(Od.device, dd);
      let Kd;
      try {
        Kd = await Promise.race([Rd.then((() => "done")), Xd.signal])
      } finally {
        Xd.dispose()
      }
      if ("Ad" === Kd || md()) return {
        status: "Ad"
      };
      const hd = Fd.find((dd => "failed" === dd.status));
      return hd && "lost" !== Kd && !Xd.lost() && await new Promise((dd => {
        setTimeout(dd, 0)
      })), "lost" === Kd || Xd.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : hd ? {
        status: "failed",
        failure: {
          material: hd.material,
          message: hd.message
        }
      } : "timeout" === Kd ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(vd=dd.timeoutMs)&&void 0!==vd?vd:nK)/1e3} s`), {
        status: "skipped"
      }) : Fd.some((dd => "skipped" === dd.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var vd
    }
    async function cK(dd) {
      if (!dd) return [];
      try {
        return (await dd.getCompilationInfo()).messages.filter((dd => "error" === dd.type))
      } catch {
        return []
      }
    }

    function jK(dd) {
      var Od;
      return null !== (Od = null === dd || void 0 === dd ? void 0 : dd.message) && void 0 !== Od ? Od : String(dd)
    }

    function DK(dd, Od, md, Wd, Fd) {
      AW(Od) ? cK(Wd).then((Od => {
        const [Wd] = Od;
        oO(dd, "terrain", md, Fd, Wd ? `${Wd.lineNum}:${Wd.linePos} error: ${Wd.message}` : null)
      })) : oO(dd, "terrain", md, Fd)
    }
    var eK = md(38987),
      IK = md(39002),
      lK = md(39013),
      CK = md(3942);

    function ZK(dd, Od, md, Wd, Fd) {
      const Rd = Math.hypot(md[0], md[1], md[2]);
      if (!(Rd > 0)) return;
      const Xd = [md[0] / Rd, md[1] / Rd, md[2] / Rd],
        Kd = [Math.floor(Od[0]), Math.floor(Od[1]), Math.floor(Od[2])],
        hd = [0, 0, 0],
        vd = [1 / 0, 1 / 0, 1 / 0],
        Qd = [1 / 0, 1 / 0, 1 / 0];
      for (let Nd = 0; Nd < 3; Nd++) Xd[Nd] > 0 ? (hd[Nd] = 1, vd[Nd] = (Kd[Nd] + 1 - Od[Nd]) / Xd[Nd], Qd[Nd] = 1 / Xd[Nd]) : Xd[Nd] < 0 && (hd[Nd] = -1, vd[Nd] = (Kd[Nd] - Od[Nd]) / Xd[Nd], Qd[Nd] = -1 / Xd[Nd]);
      const {
        Qt: td
      } = dd;
      let od = dd.eZ(Kd[0], Kd[1], Kd[2]);
      for (;;) {
        const Od = vd[0] < vd[1] ? vd[0] < vd[2] ? 0 : 2 : vd[1] < vd[2] ? 1 : 2;
        if (vd[Od] > Wd) return;
        const md = hd[Od] > 0 ? Kd[Od] + 1 : Kd[Od];
        Kd[Od] += hd[Od], vd[Od] += Qd[Od];
        const Rd = dd.eZ(Kd[0], Kd[1], Kd[2]),
          Xd = Rd !== od && !(dd.opaque[od] && dd.opaque[Rd]);
        if (Xd) {
          const Wd = [Kd[0], Kd[1], Kd[2]];
          Wd[Od] = md;
          const Rd = Math.floor(Wd[0] / td),
            Xd = Math.floor(Wd[1] / td),
            hd = Math.floor(Wd[2] / td);
          !dd.isDrawn(Rd, Xd, hd) && dd.hasParts(Rd, Xd, hd) && Fd.add(`${Rd},${Xd},${hd}`)
        }
        if (Xd && dd.occluders[Rd]) return;
        od = Rd
      }
    }

    function kK(dd, Od) {
      return dd.group - Od.group || dd.nearest - Od.nearest
    }
    class fK {
      constructor(dd, Od) {
        this.device = dd, this.Ip = Od, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var dd;
        const Od = null !== (dd = this.free.pop()) && void 0 !== dd ? dd : this.next++;
        if (8 * Od >= this.data.length) {
          const dd = new Float32Array(2 * this.data.length);
          dd.set(this.data), this.data = dd, this.words = new Uint32Array(dd.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Ip()
        }
        return Od
      }
      release(dd) {
        this.free.push(dd)
      }
      set(dd, Od, md, Wd, Fd) {
        const Rd = 8 * dd + eW;
        this.data[Rd] = Od, this.data[Rd + 1] = md, this.data[Rd + 2] = Wd, this.setVisibility(dd, Fd)
      }
      setVisibility(dd, Od) {
        this.data[8 * dd + IW] = Od, this.markDirty(dd, dd)
      }
      setFaces(dd, Od, md) {
        const Wd = 8 * dd;
        this.words[Wd + lW] = Od, this.words[Wd + CW] = md, this.markDirty(dd, dd)
      }
      markDirty(dd, Od) {
        this.dirtyMin = Math.min(this.dirtyMin, dd), this.dirtyMax = Math.max(this.dirtyMax, Od)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const MK = DW,
      dh = !0;
    const Oh = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: MK.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      mh = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Wh {
      constructor(dd) {
        this.device = dd, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(GW), this.dirLightUniforms = this.frameUniforms.subarray(rW.dirLights, rW.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, iO.b)(), this.faceGroups = !0, this.visibilityGraph = dh, this.visCull = dh, this.visCheck = !1, this.visCullMinDistance = lK.d, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Kh, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Jq = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new uK(dd, ((dd, Od) => this.recordsGroup(dd, Od))), this.slots = new fK(dd, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = JO(dd), this.frameLayout = dd.createBindGroupLayout({
          label: "terrain-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }), this.frameBuffer = dd.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = dd.createSampler({
          label: "terrain",
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        }), this.opaqueRenderable = {
          order: 100,
          isTransparent: !1,
          _direct: !0,
          bind: (dd, Od) => this.createBinding(this.opaqueRenderable, Od, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (dd, Od) => this.createBinding(this.transparentRenderable, Od, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(dd, Od) {
        this.sceneDepth = new VK(this.device, this.transparentRenderable, dd, Od)
      }
      createFrameBindGroup() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.device.createBindGroup({
          label: "terrain-frame",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.slots.buffer
            }
          }, {
            binding: 2,
            resource: {
              buffer: null !== dd && void 0 !== dd ? dd : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Od && void 0 !== Od ? Od : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(dd, Od) {
        const md = null !== Od && void 0 !== Od ? Od : dd;
        let Wd = this.recordsGroups.get(md);
        return Wd || (Wd = this.createFrameBindGroup(dd, Od), this.recordsGroups.set(md, Wd)), Wd
      }
      setChunkMesh(dd, Od, md) {
        var Wd;
        let Fd = this.chunks.get(dd);
        Fd ? this.geometry.release(Fd) : (Fd = {
          mesh: dd,
          slot: this.slots.allocate(),
          origin: [md[0], md[1], md[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: dd.visibility,
          distance: 0,
          faceGroups: null,
          planePX: 0,
          planeNX: 0,
          planePY: 0,
          planeNY: 0,
          planePZ: 0,
          planeNZ: 0,
          faceMask: -1,
          faceEpoch: -1,
          rangeCount: 1,
          first0: 0,
          count0: 0,
          first1: 0,
          count1: 0,
          ci: NaN,
          cj: NaN,
          ck: NaN,
          key: NaN
        }, this.chunks.set(dd, Fd), this.writeSlot(Fd)), Fd.material = dd.material ? this.materialFor(dd.material) : null, Fd.packed = !!Od.packedVertices, Fd.vertexCount = (0, wK.h)(Od), Fd.faceCount = Fd.vertexCount / 4;
        const Rd = null !== (Wd = Od.faceGroups) && void 0 !== Wd ? Wd : null;
        if (Fd.faceGroups = Rd, Rd) {
          const dd = eK.n;
          Fd.planePX = Rd[dd], Fd.planeNX = Rd[dd + 1], Fd.planePY = Rd[dd + 2], Fd.planeNY = Rd[dd + 3], Fd.planePZ = Rd[dd + 4], Fd.planeNZ = Rd[dd + 5]
        }
        this.drawWhole(Fd), 0 !== Fd.faceCount && (this.geometry.set(Fd, Od) ? (Fd.packed && this.slots.setFaces(Fd.slot, Fd.vertices.start + Fd.faceCount, Fd.faceCount), Od.Bq && this.setChunkMeshLight(dd, Od.Bq)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Fd.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(dd, Od) {
        const md = this.chunks.get(dd);
        md && this.geometry.setLight(md, Od)
      }
      drawStats() {
        let dd = this.transparent.length;
        for (const Od of this.opaqueBatches) dd += Od.meshes.length;
        return {
          drawn: dd,
          loaded: this.chunks.size,
          triangles: this.submittedTriangles,
          visCulled: this.visCulledParts,
          visCulledTriangles: this.visCulledTriangles,
          visViolations: this.visViolations,
          visSweeps: this.visSweeps,
          visPassable: this.visPassable.size
        }
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      get buffersAwaitingVerdict() {
        return this.geometry.buffersAwaitingVerdict
      }
      removeChunkMesh(dd) {
        const Od = this.chunks.get(dd);
        Od && (this.geometry.release(Od), this.slots.release(Od.slot), this.chunks.delete(dd))
      }
      remeshLost(dd, Od) {
        this.geometry.release(Od), Od.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Od.lostRemeshes++);
        const md = dd.Bt,
          [Wd, Fd, Rd] = md.bFd(Od.origin[0], Od.origin[1], Od.origin[2]),
          Xd = md.sH.uH(Wd, Fd, Rd);
        Xd && (Xd.BH = !0, Xd.iH = !0, md.SH(Xd, !1))
      }
      chooseFaceRanges(dd, Od, md) {
        const Wd = this.faceRanges;
        dd.faceMask = md, dd.rangeCount = (0, IK.n)(Od, md, Wd), dd.first0 = Wd[0], dd.count0 = Wd[1], dd.first1 = Wd[2], dd.count1 = Wd[3]
      }
      drawWhole(dd) {
        dd.faceMask = -1, dd.faceEpoch = -1, dd.rangeCount = 1, dd.first0 = 0, dd.count0 = dd.faceCount
      }
      writeSlot(dd) {
        const [Od, md, Wd] = this.originOffset;
        this.slots.set(dd.slot, dd.origin[0] - Od, dd.origin[1] - md, dd.origin[2] - Wd, dd.visibility)
      }
      materialFor(dd) {
        const Od = this.materials.get(dd);
        if (Od) return Od;
        const md = EK(dd);
        if (!md) return this.warnOnce(`material:${dd.name}`, `Lite terrain cannot draw material "${dd.name}"; its chunks are skipped.`), null;
        const {
          model: Wd,
          atlas: Fd,
          texture: Rd,
          animated: Xd,
          uniformData: Kd
        } = md, hd = {
          id: this.materials.size,
          model: Wd,
          texture: Rd,
          animated: Xd,
          uniformData: Kd,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${dd.name}`,
            size: Kd.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: md.liquid,
          customRenderMat: md.customRenderMat,
          atlasCount: 0,
          O4: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(dd, hd), this.device.queue.writeBuffer(hd.uniformBuffer, 0, Kd), hd.ready = this.createMaterialBindGroup(hd, Fd).catch((Od => {
          console.error(`Lite terrain failed to load the textures of material "${dd.name}"`, Od)
        })), hd
      }
      materialLayout(dd) {
        const Od = function(dd) {
            const Od = ["uniforms"];
            if ("atlas" === dd.texture) {
              dd.animated && Od.push("animData"), Od.push("sampler");
              for (let md = 0; md < dd.atlasCount; md++) Od.push("textureArray")
            } else "single" === dd.texture && Od.push("sampler", "texture");
            return Od
          }(dd),
          md = Od.join(",");
        let Wd = this.materialLayouts.get(md);
        if (!Wd) {
          const dd = GPUShaderStage.FRAGMENT;
          Wd = this.device.createBindGroupLayout({
            label: `terrain-material-${md}`,
            entries: Od.map(((Od, md) => {
              switch (Od) {
                case "uniforms":
                  return {
                    binding: md, visibility: GPUShaderStage.VERTEX | dd, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: md, visibility: GPUShaderStage.VERTEX | dd, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: md, visibility: dd, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: md, visibility: dd, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: md, visibility: dd, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(md, Wd)
        }
        return Wd
      }
      async createMaterialBindGroup(dd, Od) {
        const md = [{
          buffer: dd.uniformBuffer
        }];
        if (Od) {
          const Wd = await WO(this.device, Od.sources);
          dd.atlasCount = Wd.length, dd.O4 = Wd[0].layerWidth, dd.atlasLayers = Wd[0].layers, Od.animDataPerTex && md.push({
            buffer: Zd(this.device, Float32Array.from(Od.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), md.push(this.sampler);
          for (const dd of Wd) md.push(dd.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === dd.texture) {
          const {
            url: Od
          } = dd.model.diffuseTexture.source, {
            pixels: Wd,
            width: Fd,
            height: Rd
          } = await mO(Od);
          md.push(this.sampler), md.push(fd(this.device, Wd, Fd, Rd, 1, `terrain-${Od}`).createView({
            dimension: "2d"
          }))
        }
        const Wd = this.materialLayout(this.programKey(dd, !1));
        dd.bindGroupLayout = Wd, dd.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${dd.model.name}`,
          layout: Wd,
          entries: md.map(((dd, Od) => ({
            binding: Od,
            resource: dd
          })))
        })
      }
      programKey(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Wd = md ? md.lighting : this.lighting,
          Fd = md ? md.Jq : this.Jq,
          Rd = {
            texture: dd.texture,
            atlasCount: dd.atlasCount,
            O4: dd.O4,
            atlasLayers: dd.atlasLayers,
            animated: dd.animated,
            alphaTest: dd.model.transparencyMode === Ud.r.alphaTest,
            lighting: Wd,
            dirLightCount: md ? md.dirLightCount : this.dirLightCount,
            packed: Od
          };
        if (!Fd) return Rd;
        const Xd = this.shaderPackFields(dd, Fd),
          Kd = "atlas" === dd.texture && dd.model.transparencyMode === Ud.r.opaque && sW(Xd.packVariant);
        return {
          ...Rd,
          ...Xd,
          alphaTest: Rd.alphaTest || Kd
        }
      }
      shaderPackFields(dd, Od) {
        const md = this.packVariant(dd, Od);
        return void 0 === md ? BW : {
          packVariant: md,
          liquid: dd.liquid
        }
      }
      packVariant(dd, Od) {
        return dd.customRenderMat ? void 0 : function(dd, Od) {
          const md = dd ? dd.defineFor(Od ? "liquid" : "terrain") : 0;
          return 0 === md ? void 0 : md
        }(Od, dd.liquid)
      }
      isBlended(dd) {
        return dd.model.transparencyMode === Ud.r.alphaBlend
      }
      shaderModule(dd, Od) {
        let md = this.modules.get(dd);
        return md || (md = this.device.createShaderModule({
          label: Od,
          code: dd
        }), this.modules.set(dd, md)), md
      }
      pipelineFor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!dd.bindGroupLayout) return null;
        if (!Wd) return this.pipelineOf(dd, Od, md);
        const Fd = this.pipelineIdNow(dd, Od, !0, md),
          Rd = this.pipelines.get(Fd);
        if (Rd) return Rd;
        const Xd = this.pipelineOf(dd, Od, md);
        return Xd && void 0 === Rd && this.startPipeline(Fd, dd, {
          ...this.programKey(dd, Od),
          resting: Wd
        }, md), Xd
      }
      pipelineOf(dd, Od, md) {
        const Wd = this.pipelineIdNow(dd, Od, !1, md),
          Fd = this.pipelines.get(Wd);
        return void 0 !== Fd ? Fd : (this.startPipeline(Wd, dd, this.programKey(dd, Od), md), null)
      }
      pipelineIdNow(dd, Od, md, Wd) {
        const {
          lighting: Fd,
          dirLightCount: Rd
        } = this, {
          transparencyMode: Xd,
          backFaceCulling: Kd
        } = dd.model, hd = this.packVariant(dd, this.Jq), vd = (Od ? 2 : 0) + (md ? 1 : 0), Qd = dd.pipelineIds[vd];
        if (null !== Qd && Qd.lighting === Fd && Qd.dirLightCount === Rd && Qd.packVariant === hd && Qd.transparencyMode === Xd && Qd.cull === Kd && Qd.atlasCount === dd.atlasCount && Qd.O4 === dd.O4 && Qd.atlasLayers === dd.atlasLayers && Qd.colorFormat === Wd._colorFormat && Qd.depthStencilFormat === Wd._depthStencilFormat && Qd.sampleCount === Wd._sampleCount) return Qd.id;
        const td = this.programKey(dd, Od),
          od = this.pipelineId(dd, md ? {
            ...td,
            resting: md
          } : td, Wd);
        return dd.pipelineIds[vd] = {
          id: od,
          lighting: Fd,
          dirLightCount: Rd,
          packVariant: hd,
          transparencyMode: Xd,
          cull: Kd,
          atlasCount: dd.atlasCount,
          O4: dd.O4,
          atlasLayers: dd.atlasLayers,
          colorFormat: Wd._colorFormat,
          depthStencilFormat: Wd._depthStencilFormat,
          sampleCount: Wd._sampleCount
        }, od
      }
      pipelineId(dd, Od, md) {
        return Fh(Od, this.isBlended(dd), dd.model.backFaceCulling, md)
      }
      pipelineBuild(dd, Od, md) {
        var Wd;
        const Fd = this.pipelineId(dd, Od, md);
        return null !== (Wd = this.builds.get(Fd)) && void 0 !== Wd ? Wd : this.startPipeline(Fd, dd, Od, md)
      }
      startPipeline(dd, Od, md, Wd) {
        var Fd;
        this.pipelines.set(dd, null);
        const Rd = OF(md),
          Xd = this.isBlended(Od),
          Kd = this.shadowMask && Wd._depthStencilFormat ? function(dd, Od, md, Wd) {
            if (void 0 === dd.packVariant || dd.liquid || Od) return "none";
            const Fd = (0, MO.g)(dd.packVariant);
            return null === Fd || void 0 === Fd || !Fd.sunShadow || !hW(Fd, md) || Fd.discards || dd.alphaTest && sW(dd.packVariant) ? "none" : Wd ? "edge" : "plain"
          }(md, Xd, !!this.sunShadow, Wd._sampleCount > 1) : "none";
        let hd;
        try {
          hd = mF(md, !!this.sunShadow, Kd)
        } catch (yd) {
          if (!AW(md)) throw yd;
          return this.failedPackBuild(dd, md, Rd, yd)
        }
        const vd = this.shaderModule(hd, Rd),
          Qd = [];
        md.packed || (Qd.push(function(dd, Od) {
          const md = [{
            shaderLocation: MK.position,
            offset: ZO.h.RF,
            format: "float32x3"
          }, {
            shaderLocation: MK.normal,
            offset: ZO.h.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: MK.color,
            offset: ZO.h.colorOffset,
            format: "unorm8x4"
          }];
          return dd && md.push({
            shaderLocation: MK.uv,
            offset: ZO.h.uvOffset,
            format: "float32x2"
          }), Od && md.push({
            shaderLocation: MK.blockFlagWords,
            offset: ZO.h.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: ZO.h.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: md
          }
        }("none" !== md.texture, AW(md))), md.lighting && Qd.push(Oh));
        const td = Od.model.backFaceCulling,
          od = {
            label: Rd,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Od.bindGroupLayout, ...ZR(this.device, md, !!this.sunShadow, "none" !== Kd)]
            }),
            vertex: {
              module: vd,
              entryPoint: "mainVertex",
              buffers: Qd
            },
            fragment: YO({
              module: vd,
              entryPoint: "mainFragment"
            }, Wd, Xd ? mh : null),
            depthStencil: Wd._depthStencilFormat ? {
              format: Wd._depthStencilFormat,
              depthCompare: null !== (Fd = Wd._depthCompare) && void 0 !== Fd ? Fd : UO,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Wd._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: td ? "back" : "none"
            }
          },
          Nd = md.resting ? 0 : 1;
        this.compiling += Nd;
        const qd = "none" === Kd ? this.device.createRenderPipelineAsync(od) : this.startMaskPipelines(vd, od, "edge" === Kd);
        qd.then((Od => {
          this.compiling -= Nd, this.pipelines.set(dd, Od)
        }), (dd => {
          this.compiling -= Nd, console.error(`Lite terrain pipeline ${Rd} failed`, dd), DK(this.device, md, Rd, vd, dd)
        }));
        const Hd = {
          name: Rd,
          module: vd,
          built: qd
        };
        return this.builds.set(dd, Hd), Hd
      }
      startMaskPipelines(dd, Od, md) {
        const Wd = Od.depthStencil,
          Fd = this.device.createRenderPipelineAsync(md ? Od : {
            ...Od,
            depthStencil: {
              ...Wd,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Rd = this.device.createRenderPipelineAsync({
            ...Od,
            label: `${Od.label}-prepass`,
            fragment: {
              module: dd,
              entryPoint: "prepassFragment",
              targets: [{
                format: iK
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Fd, Rd]).then((dd => {
          let [Od, md] = dd;
          return this.prepassOf.set(Od, md), this.maskPipelines++, Od
        }))
      }
      failedPackBuild(dd, Od, md, Wd) {
        console.error(`Lite terrain pipeline ${md} failed`, Wd), DK(this.device, Od, md, null, Wd);
        const Fd = Promise.reject(Wd);
        Fd.catch((() => {}));
        const Rd = {
          name: md,
          module: null,
          built: Fd
        };
        return this.builds.set(dd, Rd), Rd
      }
      checkShaderPack(dd) {
        return zK(dd, {
          device: this.device,
          target: this.target,
          material: dd => this.materialFor(dd),
          programKey: (dd, Od, md) => this.programKey(dd, Od, md),
          pipelineBuild: (dd, Od, md) => this.pipelineBuild(dd, Od, md)
        })
      }
      createBinding(dd, Od, md) {
        return this.target = Od, {
          renderable: dd,
          pipeline: sO(this.device, Od),
          draw: dd => {
            this.geometry.setDrawing(!0);
            try {
              return md ? this.drawTransparent(dd, Od) : this.drawOpaque(dd, Od)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(dd, Od) {
        var md, Wd, Fd, Rd;
        const {
          zo: Xd
        } = dd;
        this.lighting = dd.lH;
        const Kd = (0, gK.z)(Od);
        this.dirLightCount = Math.min(Kd, 4), this.Jq = null !== (md = Xd.Jq) && void 0 !== md ? md : null, Kd > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(dd, Od), this.animateMaterials(Od.animTick);
        const hd = Xd.XN,
          vd = hd[0] !== this.originOffset[0] || hd[1] !== this.originOffset[1] || hd[2] !== this.originOffset[2];
        vd && (this.originOffset[0] = hd[0], this.originOffset[1] = hd[1], this.originOffset[2] = hd[2]);
        const Qd = Od.eye;
        this.eye[0] = Qd[0], this.eye[1] = Qd[1], this.eye[2] = Qd[2], this.writeShaderPackInputs();
        const td = Od.projectionMatrix,
          od = 0 === td[15];
        let Nd = 0;
        (vd || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: qd
        } = this;
        uO(this.transparentRenderable._worldCenter, Od, BO), this.resetBatches(od), this.transparent.length = 0, this.unlit.length = 0;
        const Hd = Xd.Bt.tt,
          yd = Hd / 2 * Math.sqrt(3);
        let bd = 0;
        const Td = !!this.Jq && SW(this.Jq.defineFor("liquid"));
        let pd = !1;
        const Yd = null !== (Wd = null === (Fd = Xd.aE) || void 0 === Fd ? void 0 : Fd.visibility) && void 0 !== Wd ? Wd : null,
          gd = this.visCull && od && 0 === this.compiling && null !== Yd && Xd.Bt.vRd[0] >= this.visCullMinDistance ? this.target : null,
          wd = this.visPassable,
          Ed = this.visCandidates,
          Jd = this.visCandidateBatches;
        wd.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Ud = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let xd = 0;
        const Bd = (dd, md) => {
          if (!md) return this.transparent.push(dd), void(xd += 2 * dd.faceCount);
          if (null !== dd.faceGroups && md.faceCull) {
            if (0 === Nd && (Nd = (0, IK.e)(td, Od.renderWidth, Od.renderHeight), Nd !== this.faceFocalPx && (this.faceFocalPx = Nd, qd = ++this.faceEpoch)), dd.faceEpoch !== qd) {
              dd.faceEpoch = qd;
              const Od = Math.sqrt(dd.distance) + yd,
                md = (0, IK.k)(dd.planePX, dd.planeNX, dd.planePY, dd.planeNY, dd.planePZ, dd.planeNZ, this.eye[0] - (dd.origin[0] - this.originOffset[0]), this.eye[1] - (dd.origin[1] - this.originOffset[1]), this.eye[2] - (dd.origin[2] - this.originOffset[2]), (0, IK.h)(Od, Nd));
              md !== dd.faceMask && this.chooseFaceRanges(dd, dd.faceGroups, md)
            }
            if (0 === dd.rangeCount) return
          } else - 1 !== dd.faceMask && this.drawWhole(dd);
          md.meshes.push(dd), xd += 2 * ((dd.rangeCount > 0 ? dd.count0 : 0) + (dd.rangeCount > 1 ? dd.count1 : 0))
        };
        for (const sd of this.chunks.values()) {
          vd && this.writeSlot(sd);
          const dd = sd.mesh.visibility;
          dd !== sd.visibility && (sd.visibility = dd, this.slots.setVisibility(sd.slot, dd));
          const {
            material: md
          } = sd;
          this.geometry.lost(sd) && performance.now() >= sd.lostRetryAt && this.remeshLost(Xd, sd);
          const Wd = !(null === md || void 0 === md || !md.bindGroup) && this.geometry.backed(sd),
            Fd = Wd && this.lighting && !sd.vertices.page.twin;
          if (gd && (Number.isNaN(sd.key) && (sd.ci = Math.floor(sd.origin[0] / Hd), sd.cj = Math.floor(sd.origin[1] / Hd), sd.ck = Math.floor(sd.origin[2] / Hd), sd.key = (0, CK.g)(sd.ci, sd.cj, sd.ck)), (!Wd || dd < 1 || Fd || !this.batchDraws(md, sd.packed, gd)) && this.visSeeThrough(sd, gd) && wd.add(sd.key)), !Wd) continue;
          Fd || (sd.lostRemeshes = 0);
          const Rd = sd.origin[0] - this.originOffset[0],
            Kd = sd.origin[1] - this.originOffset[1],
            hd = sd.origin[2] - this.originOffset[2];
          if (!(0, vK.d)(Od.frustum, Rd, Kd, hd, Hd)) continue;
          const Qd = Rd + Hd / 2 - this.eye[0],
            td = Kd + Hd / 2 - this.eye[1],
            Nd = hd + Hd / 2 - this.eye[2];
          if (sd.distance = Qd * Qd + td * td + Nd * Nd, this.lighting && !sd.lit && (bd = Math.max(bd, sd.vertexCount), this.unlit.push(sd)), Fd) continue;
          const qd = this.isBlended(md) ? null : this.batchFor(md, sd.packed, sd.vertices.page, 1 === dd, od);
          gd ? (Ed[Ud] = sd, Jd[Ud++] = qd) : Bd(sd, qd)
        }
        const Sd = gd ? this.sweepVisibility(dd, Od, Yd) : null;
        null === (Rd = (0, nR.v)(Xd)) || void 0 === Rd || Rd.update(Od.frustum, this.originOffset, Hd, Sd);
        for (let sd = 0; sd < Ud; sd++) {
          const dd = Ed[sd];
          !Sd || Sd.isDrawn(dd.ci, dd.cj, dd.ck) ? Bd(dd, Jd[sd]) : (this.visCulledParts++, this.visCulledTriangles += 2 * dd.faceCount)
        }
        for (const sd of this.transparent) pd ||= Td && sd.material.liquid && !sd.material.customRenderMat;
        this.submittedTriangles = xd, Sd && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(dd, Od, Sd)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(pd) : pd && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && bd > 0 && this.geometry.lightFullSky(this.unlit, bd);
        for (const sd of this.opaqueBatches) this.chunkSorter.sort(sd.meshes, 1) || sd.meshes.sort(Rh);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Xh)
      }
      sweepVisibility(dd, Od, md) {
        const {
          Bt: Wd
        } = dd.zo, Fd = Wd.tt, Rd = this.visPassable, Xd = this.eye[0] + this.originOffset[0], Kd = this.eye[1] + this.originOffset[1], hd = this.eye[2] + this.originOffset[2];
        if (!md.eyeClear(Xd, Kd, hd, Od.near, Od.projectionMatrix, Wd)) return null;
        const [vd, Qd] = Wd.vRd, td = md.update(Xd, Kd, hd, Fd, vd, Qd, Rd);
        return this.visSweeps = md.sweeps, td ? md : null
      }
      visSeeThrough(dd, Od) {
        const {
          material: md
        } = dd;
        return (!md || !this.isBlended(md)) && (dd.mesh.visibility < 1 || !(null !== md && void 0 !== md && md.bindGroup) || dd.faceCount > 0 && (!this.geometry.backed(dd) || this.lighting && !dd.vertices.page.twin) || !this.batchDraws(md, dd.packed, Od))
      }
      batchDraws(dd, Od, md) {
        var Wd;
        const Fd = Od ? 2 : 0;
        if (dd === this.visDrawsMaterial && function(dd, Od) {
            return 0 !== (dd & 1 << Od)
          }(this.visDrawsBits, Fd)) return 0 !== (this.visDrawsBits & 2 << Fd);
        let Rd = null !== (Wd = this.visBatchDraws.get(dd)) && void 0 !== Wd ? Wd : 0;
        if (!(Rd & 1 << Fd)) {
          Rd |= 1 << Fd | (!!dd.bindGroupLayout && this.canDraw(dd, Od) && !!this.pipelines.get(this.pipelineIdNow(dd, Od, !1, md)) ? 2 << Fd : 0), this.visBatchDraws.set(dd, Rd)
        }
        return this.visDrawsMaterial = dd, this.visDrawsBits = Rd, 0 !== (Rd & 2 << Fd)
      }
      runVisCheck(dd, Od, md) {
        const {
          zo: Wd
        } = dd, {
          Bt: Fd
        } = Wd, Rd = Fd.tt, Xd = new Set;
        for (const Nd of this.chunks.values()) Xd.add(Nd.key);
        const Kd = eF.Matrix.FromArray(Od.viewProjectionMatrix).invert(),
          [hd, vd, Qd] = this.originOffset,
          td = new eF.Cq,
          od = function(dd, Od, md, Wd) {
            const Fd = new Set;
            for (let Rd = 0; Rd < 27; Rd++)
              for (let Xd = 0; Xd < 48; Xd++) {
                const Kd = md((Xd + .5) / 48 * 2 - 1, (Rd + .5) / 27 * 2 - 1);
                ZK(dd, Od, [Kd[0] - Od[0], Kd[1] - Od[1], Kd[2] - Od[2]], Wd, Fd)
              }
            return Fd
          }({
            eZ: (dd, Od, md) => Fd.eZ(dd, Od, md),
            occluders: md.occluders,
            opaque: md.opaque,
            Qt: Rd,
            isDrawn: (dd, Od, Wd) => md.isDrawn(dd, Od, Wd),
            hasParts: (dd, Od, md) => Xd.has((0, CK.g)(dd, Od, md))
          }, [this.eye[0] + hd, this.eye[1] + vd, this.eye[2] + Qd], ((dd, Od) => (eF.Cq.TransformCoordinatesFromFloatsToRef(dd, Od, .5, Kd, td), [td.x + hd, td.y + vd, td.z + Qd])), (Fd.vRd[0] + 1) * Rd);
        this.visViolations = od.size;
        for (const Nd of od) this.warnOnce(`vis:${Nd}`, `Lite terrain cave culling skipped chunk ${Nd}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var dd;
        null !== (dd = this.Jq) && void 0 !== dd && dd.isRunning() && (this.shaderPackInputs ??= new kR(this.device, this.Jq.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Jq, this.eye, this.lighting))
      }
      bindShaderPackInputs(dd, Od, md) {
        var Wd, Fd, Rd, Xd;
        let Kd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hd = this.packVariant(Od, md);
        if (void 0 === hd) return;
        this.shaderPackInputs || (this.shaderPackInputs = new kR(this.device, md.textureLayers(), this.sunShadow), this.shaderPackInputs.write(md, this.eye, this.lighting));
        const vd = SW(hd) ? null !== (Wd = null === (Fd = this.sceneDepth) || void 0 === Fd ? void 0 : Fd.view) && void 0 !== Wd ? Wd : this.standIn() : null,
          Qd = Kd ? null !== (Rd = null === (Xd = this.shadowMask) || void 0 === Xd ? void 0 : Xd.view) && void 0 !== Rd ? Rd : this.standIn() : null;
        this.shaderPackInputs.bind(dd, vd, CR(hd, !!this.sunShadow), Qd)
      }
      standIn() {
        return this.depthStandIn ??= this.device.createTexture({
          label: "scene-depth-stand-in",
          size: [1, 1],
          format: "r32float",
          usage: GPUTextureUsage.TEXTURE_BINDING
        }).createView()
      }
      sunShadowGroup() {
        var dd, Od;
        return null !== (dd = null === (Od = this.shaderPackInputs) || void 0 === Od ? void 0 : Od.bindGroupFor(null, !0)) && void 0 !== dd ? dd : null
      }
      resetBatches(dd) {
        const Od = this.opaqueBatches;
        let md = 0;
        for (const Wd of Od) Wd.meshes.length > 0 && (Wd.meshes.length = 0, Wd.faceCull = this.batchFaceCull(Wd.material, dd), Od[md++] = Wd);
        Od.length = md
      }
      orderBatches() {
        const dd = this.opaqueBatches;
        for (let Od = 0; Od < dd.length; Od++) {
          const md = dd[Od];
          md.group = Od;
          for (let Wd = 0; Wd < Od; Wd++) {
            const Od = dd[Wd];
            if (Od.material === md.material && Od.packed === md.packed) {
              md.group = Od.group;
              break
            }
          }
          md.nearest = md.meshes.length > 0 ? md.meshes[0].distance : 1 / 0
        }
        dd.sort(kK)
      }
      batchFor(dd, Od, md, Wd, Fd) {
        for (const Xd of this.opaqueBatches)
          if (Xd.material === dd && Xd.packed === Od && Xd.page === md && Xd.resting === Wd) return Xd;
        const Rd = {
          material: dd,
          packed: Od,
          page: md,
          resting: Wd,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(dd, Fd)
        };
        return this.opaqueBatches.push(Rd), Rd
      }
      batchFaceCull(dd, Od) {
        return !(!Od || !(0, eK.r)(dd.model)) && (!this.Jq || ! function(dd) {
          var Od;
          return !(null === (Od = (0, MO.g)(dd)) || void 0 === Od || !Od.movesVertices)
        }(this.packVariant(dd, this.Jq)))
      }
      writeFrameUniforms(dd, Od) {
        const md = this.frameUniforms,
          Wd = rW;
        if ((0, gK.D)(dd, md), md[Wd.fogInfos] = Od.fogEnabled ? Od.fogMode : 0, md[Wd.fogInfos + 1] = Od.fogStart, md[Wd.fogInfos + 2] = Od.fogEnd, md[Wd.fogInfos + 3] = Od.fogDensity, md.set(Od.fogColour, Wd.fogColour), md[Wd.outputHeight] = Od.renderHeight, md.set(Od.ambientColour, Wd.sceneAmbient), (0, gK.v)(Od, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Od = (0, wK.i)(dd.qH, dd.cq, dd.jq);
          for (let dd = 0; dd < 4; dd++) md[Wd.aoLevels + dd] = Od[dd] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, md)
      }
      animateMaterials(dd) {
        const Od = nW.anim;
        for (const md of this.materials.values()) md.animated && (md.uniformData[Od] = dd, this.device.queue.writeBuffer(md.uniformBuffer, 4 * Od, md.uniformData, Od, 1))
      }
      canDraw(dd, Od) {
        return !("atlas" === dd.texture && !Od) || (this.warnOnce(`stride:${dd.id}`, `Lite terrain: material "${dd.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(dd, Od) {
        let md = 0;
        dd.setBindGroup(1, this.frameBindGroup);
        for (const Wd of this.opaqueBatches) {
          if (!Wd.meshes.length || !this.canDraw(Wd.material, Wd.packed)) continue;
          const Fd = this.pipelineFor(Wd.material, Wd.packed, Od, Wd.resting);
          Fd && (dd.setPipeline(Fd), dd.setBindGroup(2, Wd.material.bindGroup), this.Jq && this.bindShaderPackInputs(dd, Wd.material, this.Jq, this.prepassOf.has(Fd)), md += this.drawBatch(dd, Wd))
        }
        return md
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(dd, Od, md) {
        const Wd = this.target,
          Fd = this.Jq;
        if (!Wd || !Fd || 0 === this.maskPipelines) return 0;
        let Rd = 0,
          Xd = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Kd of this.opaqueBatches) {
            if (!Kd.meshes.length || !this.canDraw(Kd.material, Kd.packed)) continue;
            const hd = this.pipelineFor(Kd.material, Kd.packed, Wd, Kd.resting),
              vd = hd && this.prepassOf.get(hd);
            vd && (Xd || (Xd = dd.beginRenderPass(Od), Xd.setBindGroup(0, md), Xd.setBindGroup(1, this.frameBindGroup)), Xd.setPipeline(vd), Xd.setBindGroup(2, Kd.material.bindGroup), this.bindShaderPackInputs(Xd, Kd.material, Fd, !0), Rd += this.drawBatch(Xd, Kd))
          }
        } finally {
          var Kd;
          null === (Kd = Xd) || void 0 === Kd || Kd.end(), this.geometry.setDrawing(!1)
        }
        return Rd
      }
      drawBatch(dd, Od) {
        let md = 0;
        for (const Wd of Od.meshes) {
          const {
            rangeCount: Od
          } = Wd;
          Od > 0 && (md += this.geometry.draw(dd, Wd, this.lighting, Wd.first0, Wd.count0), Od > 1 && (md += this.geometry.draw(dd, Wd, this.lighting, Wd.first1, Wd.count1)))
        }
        return md
      }
      drawTransparent(dd, Od) {
        let md = 0,
          Wd = null,
          Fd = null;
        dd.setBindGroup(1, this.frameBindGroup);
        for (const Rd of this.transparent) {
          const Xd = Rd.material;
          if (!this.canDraw(Xd, Rd.packed)) continue;
          const Kd = this.pipelineFor(Xd, Rd.packed, Od);
          Kd && (Kd !== Wd && (dd.setPipeline(Kd), Wd = Kd, this.Jq && this.bindShaderPackInputs(dd, Xd, this.Jq)), Xd !== Fd && (dd.setBindGroup(2, Xd.bindGroup), Fd = Xd), md += this.geometry.draw(dd, Rd, this.lighting))
        }
        return md
      }
    }

    function Fh(dd, Od, md, Wd) {
      return `${OF(dd)}|${dd.atlasLayers}|${dd.O4}|${Od}|${md}|${Wd._colorFormat}|${Wd._depthStencilFormat}|${Wd._sampleCount}`
    }

    function Rh(dd, Od) {
      return dd.distance - Od.distance
    }

    function Xh(dd, Od) {
      return Od.distance - dd.distance
    }
    class Kh {
      constructor() {
        this.left = []
      }
      sort(dd, Od) {
        for (let md = 0; md < dd.length; md++) {
          const Od = dd[md].distance;
          if (Od - Od !== 0) return !1
        }
        return this.sortRange(dd, 0, dd.length, Od), !0
      }
      sortRange(dd, Od, md, Wd) {
        if (md - Od <= 16) {
          for (let Fd = Od + 1; Fd < md; Fd++) {
            const md = dd[Fd],
              Rd = Wd * md.distance;
            let Xd = Fd - 1;
            for (; Xd >= Od && Wd * dd[Xd].distance > Rd; Xd--) dd[Xd + 1] = dd[Xd];
            dd[Xd + 1] = md
          }
          return
        }
        const Fd = Od + md >>> 1;
        if (this.sortRange(dd, Od, Fd, Wd), this.sortRange(dd, Fd, md, Wd), Wd * dd[Fd - 1].distance <= Wd * dd[Fd].distance) return;
        const {
          left: Rd
        } = this, Xd = Fd - Od;
        for (let Qd = 0; Qd < Xd; Qd++) Rd[Qd] = dd[Od + Qd];
        let Kd = 0,
          hd = Fd,
          vd = Od;
        for (; Kd < Xd && hd < md;) dd[vd++] = Wd * dd[hd].distance < Wd * Rd[Kd].distance ? dd[hd++] : Rd[Kd++];
        for (; Kd < Xd;) dd[vd++] = Rd[Kd++]
      }
    }
    const hh = Math.ceil(102);

    function vh(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Od;
      const Rd = Math.min(Od, md),
        Xd = new Uint32Array(Jm(Wd));
      for (let Kd = 0; Kd < Wd; Kd++) {
        const Od = Math.floor(Kd * Rd / Wd),
          md = Math.max(Od + 1, Math.floor((Kd + 1) * Rd / Wd));
        for (let hd = 0; hd < Wd; hd++) {
          const vd = Math.floor(hd * Rd / Wd),
            Qd = Math.max(vd + 1, Math.floor((hd + 1) * Rd / Wd));
          let td = 0;
          for (let Wd = Od; Wd < md; Wd++)
            for (let Od = vd; Od < Qd; Od++) dd[Wd * Fd + Od] >= hh && td++;
          if (2 * td >= (md - Od) * (Qd - vd)) {
            const dd = hd + Wd * Kd;
            Xd[dd >>> 5] |= 1 << (31 & dd)
          }
        }
      }
      return Xd
    }

    function Qh(dd) {
      return Math.max(1, Math.min(16, dd))
    }
    class th {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = dd, this.loadTexture = Od, this.warn = md, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(dd, Od) {
        return (dd.JI !== this.builtVersion || this.blockCaster.length !== Od) && (this.build(dd, Od), !0)
      }
      build(dd, Od) {
        this.builtVersion = dd.JI;
        const md = new Uint16Array(Od),
          Wd = new Map;
        for (let Fd = 1; Fd < Od; Fd++) {
          const Od = this.classify(dd, Fd, Wd);
          if (null === Od || Od === Ym) {
            md[Fd] = null === Od ? 0 : Ym;
            continue
          }
          let Rd = this.byKey.get(Od.key);
          void 0 === Rd && (Rd = this.allocate(Od), this.byKey.set(Od.key, Rd)), md[Fd] = Rd
        }
        this.blockCaster = md, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(dd, Od) {
        const md = dd.Z8[Od];
        if ("function" !== typeof md) return md;
        try {
          return md()
        } catch (Wd) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Od}: ${Wd instanceof Error?Wd.message:String(Wd)}`), null
        }
      }
      classify(dd, Od, md) {
        const Wd = this.option(dd, Od);
        if ("none" === Wd) return null;
        if (Wd && Wd.planes.length > 0) {
          const dd = Wd.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(dd)}`,
            planes: dd
          }
        }
        if (dd.nN[Od]) return null;
        const Fd = dd.PN[Od] ? dd.mC(Od) : null;
        if (Fd && Fd.length >= 6) {
          const dd = function(dd) {
            const Od = new Uint32Array(16);
            for (let md = 0; md + 6 <= dd.length; md += 6) {
              const Wd = [0, 1, 2].map((Od => Math.max(0, Math.ceil(8 * dd[md + Od] - .5)))),
                Fd = [0, 1, 2].map((Od => Math.min(7, Math.floor(8 * dd[md + Od + 3] - .5))));
              for (let dd = Wd[2]; dd <= Fd[2]; dd++)
                for (let md = Wd[1]; md <= Fd[1]; md++)
                  for (let Rd = Wd[0]; Rd <= Fd[0]; Rd++) {
                    const Wd = Rd + 8 * (md + 8 * dd);
                    Od[Wd >>> 5] |= 1 << (31 & Wd)
                  }
            }
            return Od
          }(Fd);
          return function(dd) {
            return dd.every((dd => 4294967295 === dd))
          }(dd) ? Ym : dd.every((dd => 0 === dd)) ? null : {
            kind: "shape",
            key: `shape:${dd.join(",")}`,
            mask: dd
          }
        }
        if (dd.PJ[Od] || !dd.HH[Od]) return null;
        const Rd = [0, 1, 2, 3, 4, 5].map((Wd => {
          const Fd = dd.yH[6 * Od + Wd];
          let Rd = md.get(Fd);
          return void 0 === Rd && (Rd = function(dd) {
            if (!dd || dd.UH) return null;
            const {
              Z2: Od,
              O4: md,
              I9: Wd
            } = dd;
            if (!Od || !md || !(md > 0) || void 0 === Wd || !(Wd >= 0)) return null;
            const Fd = Od[0],
              Rd = md * md * 4;
            if (!Fd || Fd.byteLength < Rd) return null;
            const Xd = Math.floor(Fd.byteLength / Rd),
              Kd = Od[Math.floor(Wd / Xd)];
            if (!Kd) return null;
            const hd = new Uint8Array(Kd.buffer, Kd.byteOffset, Kd.byteLength),
              vd = Wd % Xd * Rd;
            if (vd + Rd > hd.length) return null;
            const Qd = new Uint8Array(md * md);
            let td = !1;
            for (let od = 0; od < Qd.length; od++) Qd[od] = hd[vd + 4 * od + 3], td ||= Qd[od] < hh;
            return td ? {
              alpha: Qd,
              width: md
            } : null
          }(dd.JH(Fd)), md.set(Fd, Rd)), Rd
        }));
        if (Rd.every((dd => null === dd))) return Ym;
        const Xd = Qh(Math.max(...Rd.map((dd => {
            var Od;
            return null !== (Od = null === dd || void 0 === dd ? void 0 : dd.width) && void 0 !== Od ? Od : 1
          })))),
          Kd = new Uint32Array(Jm(Xd)).fill(4294967295),
          hd = Rd.map((dd => null === dd ? Kd : vh(dd.alpha, dd.width, dd.width, Xd)));
        return {
          kind: "cutout",
          key: `cutout:${Xd}:${hd.map((dd=>dd.join(","))).join("|")}`,
          size: Xd,
          faces: hd
        }
      }
      allocate(dd) {
        if (this.nextCaster >= Um) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Od = this.nextCaster++;
        if (this.writeCaster(Od, gm, 0, 0, 0), "shape" === dd.kind) {
          const md = this.allocateMask(dd.mask.length);
          md >= 0 && (this.sink(md, dd.mask), this.writeCaster(Od, wm, md, 0, 8))
        } else if ("cutout" === dd.kind) {
          const md = Jm(dd.size),
            Wd = this.allocateMask(6 * md);
          if (Wd >= 0) {
            const Fd = new Uint32Array(6 * md);
            dd.faces.forEach(((dd, Od) => {
              Fd.set(dd, Od * md)
            })), this.sink(Wd, Fd), this.writeCaster(Od, Em, Wd, 0, dd.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Od, dd.planes).finally((() => {
          this.planesLoading--
        })));
        return Od
      }
      async loadPlanes(dd, Od) {
        const md = await Promise.all(Od.map((dd => this.texture(dd.texture))));
        if (md.some((dd => null === dd))) return;
        const Wd = md,
          Fd = Qh(Math.max(...Wd.map((dd => Math.min(dd.width, dd.height))))),
          Rd = Jm(Fd),
          Xd = this.allocateMask(Od.length * (4 + Rd));
        if (Xd < 0) return;
        const Kd = new Uint32Array(Od.length * (4 + Rd)),
          hd = 4 * Od.length;
        Od.forEach(((dd, Od) => {
          const md = Xd + hd + Od * Rd;
          Kd.set(function(dd, Od) {
            const [md, Wd] = dd.tangent, Fd = Math.hypot(md, Wd) || 1, Rd = md / Fd, Xd = Wd / Fd, Kd = dd.centre[0] * Xd - dd.centre[1] * Rd, hd = new Uint32Array(4);
            return new Float32Array(hd.buffer, 0, 3).set([Rd, Xd, Kd]), hd[3] = Od, hd
          }(dd, md), 4 * Od), Kd.set(vh(Wd[Od].alpha, Wd[Od].width, Wd[Od].height, Fd), hd + Od * Rd)
        })), this.sink(Xd, Kd), this.writeCaster(dd, am, Xd, Od.length, Fd)
      }
      texture(dd) {
        let Od = this.textures.get(dd);
        return Od || (Od = this.loadTexture(dd).catch((Od => (this.warn(`Sun shadows: no mask for ${dd}: ${Od instanceof Error?Od.message:String(Od)}`), null))), this.textures.set(dd, Od)), Od
      }
      allocateMask(dd) {
        if (this.nextMaskWord + dd > xm) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Od = 32768 + this.nextMaskWord;
        return this.nextMaskWord += dd, Od
      }
      writeCaster(dd, Od, md, Wd, Fd) {
        this.sink(0 + 4 * dd, Uint32Array.of(Od, md, Wd, Fd))
      }
      warnOnce(dd) {
        this.warned.has(dd) || (this.warned.add(dd), this.warn(dd))
      }
    }
    var oh = md(3922);

    function Nh(dd) {
      return !dd.BH && !dd.bJ && !dd.XH
    }

    function qh() {
      return {
        bricks: new Uint32Array(om),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Qm)
      }
    }
    class Hh {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = dd, this.writeVoxels = Od, this.writePool = md, this.warn = Wd, this.eyeChunk = null, this.slotChunk = new Array(Wm).fill(null), this.slotVersion = new Float64Array(Wm).fill(-1), this.slotPool = new Array(Wm).fill(null), this.starved = new Uint8Array(Wm), this.queue = [], this.queued = new Uint8Array(Wm), this.queueSorted = !0, this.freePool = new Uint32Array(Bm), this.freeCount = Bm, this.casterTable = null, this.warnedPool = !1, this.scratch = qh(), this.victimScratch = qh(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Wm), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Fd = 0; Fd < Bm; Fd++) this.freePool[Fd] = 65535 - Fd
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Bm - this.freeCount
      }
      chunkAdded(dd) {
        if (null === this.eyeChunk || !this.inRadius(dd.i, dd.j, dd.k)) return;
        const Od = bm(dd.i, dd.j, dd.k);
        this.slotChunk[Od] = dd, this.slotVersion[Od] = -1, this.enqueue(Od)
      }
      update(dd, Od, md) {
        const Wd = this.casters.blockCaster;
        if (Wd !== this.casterTable) {
          this.casterTable = Wd;
          for (let dd = 0; dd < Wm; dd++) this.slotVersion[dd] = -1, this.slotChunk[dd] && this.enqueue(dd)
        }
        const Fd = Math.floor(dd[0] / 32),
          Rd = Math.floor(dd[1] / 32),
          Xd = Math.floor(dd[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Fd || this.eyeChunk[1] !== Rd || this.eyeChunk[2] !== Xd) && (this.eyeChunk = [Fd, Rd, Xd], this.follow(Od), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Kd = 0; Kd < Wm; Kd++) {
          const dd = this.slotChunk[Kd];
          dd && (dd.yJ || dd.vH !== this.slotVersion[Kd]) && this.enqueue(Kd)
        }
        this.drain(md), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(dd, Od) {
        this.records.set(Od, 4 * dd), this.windowTopStale = !0, this.writeVoxels(4 * dd, Od)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const dd = this.records;
        let Od = -1 / 0;
        for (let Wd = 0; Wd < dd.length; Wd += 4) {
          const md = 255 & dd[Wd + 3];
          md !== Xm && md !== Km || !this.inRadius(dd[Wd], dd[Wd + 1], dd[Wd + 2]) || (Od = Math.max(Od, dd[Wd + 1] * dm + (dd[Wd + 3] >>> 8)))
        }
        const md = Od === -1 / 0 ? 1 : Od + qm;
        md !== this.windowTop[0] && (this.windowTop[0] = md, this.writeVoxels(Nm, this.windowTop))
      }
      follow(dd) {
        const Od = this.eyeChunk,
          [md, Wd, Fd] = Om;
        for (let Xd = -Fd; Xd <= Fd; Xd++)
          for (let Fd = -Wd; Fd <= Wd; Fd++)
            for (let Wd = -md; Wd <= md; Wd++) {
              var Rd;
              const md = Od[0] + Wd,
                Kd = Od[1] + Fd,
                hd = Od[2] + Xd,
                vd = bm(md, Kd, hd),
                Qd = this.slotChunk[vd];
              if (Qd && !Qd.yJ && Qd.i === md && Qd.j === Kd && Qd.k === hd) continue;
              const td = null !== (Rd = dd(md, Kd, hd)) && void 0 !== Rd ? Rd : null;
              Qd && (Qd.i !== md || Qd.j !== Kd || Qd.k !== hd) && this.slotPool[vd] && (this.release(vd), this.record.fill(0), this.writeRecord(vd, this.record)), this.slotChunk[vd] = td, this.slotVersion[vd] = -1, (td || Qd) && this.enqueue(vd)
            }
      }
      requeueStarved() {
        for (let dd = 0; dd < Wm; dd++) this.starved[dd] && this.slotChunk[dd] && this.enqueue(dd)
      }
      enqueue(dd) {
        this.queued[dd] || (this.queued[dd] = 1, this.queue.push(dd), this.queueSorted = !1)
      }
      drain(dd) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const dd = new Map;
          for (const Od of this.queue) dd.set(Od, this.slotDistance(Od));
          this.queue.sort(((Od, md) => dd.get(md) - dd.get(Od))), this.queueSorted = !0
        }
        const Od = performance.now();
        let md = 0;
        const Wd = [];
        for (; this.queue.length > 0 && (0 === md || performance.now() - Od < dd);) {
          const dd = this.queue.pop(),
            Od = this.slotChunk[dd];
          !Od || Od.yJ || Nh(Od) ? (this.queued[dd] = 0, this.encodeSlot(dd), md++) : Wd.push(dd)
        }
        for (let Fd = Wd.length - 1; Fd >= 0; Fd--) this.queue.push(Wd[Fd])
      }
      slotDistance(dd) {
        const Od = this.slotChunk[dd],
          md = this.eyeChunk;
        return Od ? Math.max(Math.abs(Od.i - md[0]), Math.abs(Od.j - md[1]), Math.abs(Od.k - md[2])) : 0
      }
      inRadius(dd, Od, md) {
        const Wd = this.eyeChunk,
          [Fd, Rd, Xd] = Om;
        return Math.abs(dd - Wd[0]) <= Fd && Math.abs(Od - Wd[1]) <= Rd && Math.abs(md - Wd[2]) <= Xd
      }
      release(dd) {
        const Od = this.slotPool[dd];
        if (Od) {
          for (let dd = Od.length - 1; dd >= 0; dd--) this.freePool[this.freeCount++] = Od[dd];
          this.slotPool[dd] = null
        }
      }
      encodeSlot(dd) {
        var Od, md, Wd, Fd, Rd;
        let Xd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const hd = null !== (Od = null === (md = this.slotPool[dd]) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : 0;
        this.release(dd), this.starved[dd] = 0;
        const vd = this.slotChunk[dd],
          Qd = this.record;
        if (!vd || vd.yJ || !vd.QN) return this.slotChunk[dd] = null, this.slotVersion[dd] = -1, Qd.fill(0), this.writeRecord(dd, Qd), void(hd > 0 && this.requeueStarved());
        this.slotVersion[dd] = vd.vH;
        const td = this.encodeBricks(vd, dd, Xd, Kd);
        Qd[0] = vd.i, Qd[1] = vd.j, Qd[2] = vd.k, Qd[3] = td, this.writeRecord(dd, Qd), null === (Wd = this.encoded) || void 0 === Wd || Wd.call(this, vd), Kd && (null !== (Fd = null === (Rd = this.slotPool[dd]) || void 0 === Rd ? void 0 : Rd.length) && void 0 !== Fd ? Fd : 0) < hd && this.requeueStarved()
      }
      encodeBricks(dd, Od, md, Wd) {
        if (dd.uq) return Rm;
        const Fd = this.casters.blockCaster,
          {
            data: Rd,
            stride: Xd,
            offset: Kd
          } = dd.QN,
          [hd, vd, Qd] = Xd,
          td = dm,
          {
            bricks: od,
            cells: Nd,
            special: qd
          } = md;
        od.fill(0), qd.fill(0);
        let Hd = 0,
          yd = 0,
          bd = 0;
        for (let Td = 0; Td < td; Td++) {
          const Od = Td >> 2,
            md = 3 & Td,
            Wd = dd.Wq[Td],
            Xd = Wd === oh.d ? -1 : Wd < Fd.length ? Fd[Wd] : 0;
          if (0 !== Xd)
            for (let dd = 0; dd < td; dd++) {
              const Wd = dd >> 2,
                pd = 3 & dd;
              let Yd = Kd + dd * hd + Td * vd;
              for (let dd = 0; dd < td; dd++, Yd += Qd) {
                let Kd = Xd;
                if (Kd < 0) {
                  const dd = Rd[Yd];
                  if (Kd = dd < Fd.length ? Fd[dd] : 0, 0 === Kd) continue
                }
                const hd = Tm(Wd, Od, dd >> 2),
                  vd = pm(pd, md, 3 & dd);
                od[3 * hd + (vd >>> 5)] |= 1 << (31 & vd), Nd[hd * hm + vd] = Kd, Hd++, bd = Td, Kd === Ym ? yd++ : qd[hd] = 1
              }
            }
        }
        return 0 === Hd ? Rm : 32768 === yd ? Xm | bd << 8 : (this.writePoolEntries(Od, md, Wd), this.writeVoxels(tm + Od * om, od), Km | bd << 8)
      }
      writePoolEntries(dd, Od, md) {
        const {
          bricks: Wd,
          cells: Fd,
          special: Rd
        } = Od, Xd = this.entry;
        let Kd = 0;
        for (let Qd = 0; Qd < Qm; Qd++) Kd += Rd[Qd];
        if (0 === Kd) return;
        md && this.freeCount < Kd && this.evictBeyond(dd, Kd);
        const hd = new Uint32Array(md ? Math.min(Kd, this.freeCount) : 0);
        let vd = 0;
        for (let Qd = 0; Qd < Qm; Qd++) {
          if (!Rd[Qd]) continue;
          const md = 3 * Qd;
          if (vd === hd.length) {
            this.dropSpecials(Od, Qd), this.starved[dd] = 1;
            continue
          }
          const Kd = this.freePool[--this.freeCount];
          hd[vd++] = Kd;
          for (let dd = 0; dd < hm; dd++) {
            const Od = Wd[md + (dd >>> 5)] >>> (31 & dd) & 1 ? Fd[Qd * hm + dd] : 0;
            1 & dd ? Xd[dd >> 1] |= Od << 16 : Xd[dd >> 1] = Od
          }
          Wd[md + 2] = Kd + 1, this.writePool(Sm + 32 * Kd, Xd)
        }
        hd.length > 0 && (this.slotPool[dd] = hd)
      }
      evictBeyond(dd, Od) {
        const md = this.slotDistance(dd),
          Wd = [];
        for (let Fd = 0; Fd < Wm; Fd++) Fd !== dd && this.slotPool[Fd] && this.slotDistance(Fd) > md && Wd.push(Fd);
        Wd.sort(((dd, Od) => this.slotDistance(Od) - this.slotDistance(dd)));
        for (const Fd of Wd) {
          if (this.freeCount >= Od) return;
          const dd = this.slotChunk[Fd];
          dd && !dd.yJ && dd.QN && (dd.vH === this.slotVersion[Fd] || Nh(dd)) && this.encodeSlot(Fd, this.victimScratch, !1)
        }
      }
      dropSpecials(dd, Od) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const md = 3 * Od;
        for (let Wd = 0; Wd < hm; Wd++) dd.cells[Od * hm + Wd] !== Ym && (dd.bricks[md + (Wd >>> 5)] &= ~(1 << (31 & Wd)))
      }
    }
    var yh = md(38929);
    class bh {
      constructor(dd) {
        this.device = dd, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new zm, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Bt = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = dd.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = dd.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(dd, Od, md) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Wd
        } = this;
        Wd.ot(dd, Od), md.forEachSunShadowCaster((dd => {
          this.add(dd)
        })), Wd.finish();
        const Fd = 0 === Wd.parts;
        if (Fd && this.uploadedEmpty) return;
        this.uploadedEmpty = Fd;
        const {
          queue: Rd
        } = this.device, {
          words: Xd
        } = Wd;
        Rd.writeBuffer(this.frameBuffer, 0, Xd, 0, 16385), Wd.refs > 0 && Rd.writeBuffer(this.frameBuffer, 65540, Xd, im, Wd.refs), Fd || Rd.writeBuffer(this.frameBuffer, 327684, Xd, Am, Wd.parts * Vm)
      }
      add(dd) {
        const Od = this.gridFor(dd);
        if (!Od) return;
        const {
          frame: md
        } = this, {
          Bt: Wd,
          worldAt: Fd,
          instances: Rd,
          instanceCount: Xd,
          thin: Kd
        } = dd;
        if (Rd)
          for (let hd = 0; hd < Xd; hd++) Kd ? (jm(Rd, 16 * hd, Wd, Fd, this.Bt), md.add(Od, this.Bt)) : md.add(Od, Rd, 16 * hd);
        else md.add(Od, Wd, Fd)
      }
      gridFor(dd) {
        let {
          geometry: Od,
          indexed: md,
          first: Wd,
          count: Fd,
          skip: Rd
        } = dd, Xd = this.grids.get(Od);
        Xd || (Xd = new Map, this.grids.set(Od, Xd));
        const Kd = `${md?Wd:-1-Wd}:${Fd}:${null!==Rd&&void 0!==Rd?Rd:""}`;
        let hd = Xd.get(Kd);
        if (void 0 !== hd || this.gridsFull) return hd;
        const vd = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = vd + 2;
        else if (vd > this.bakeDeadline) return;
        return hd = this.bake(Od, md, Wd, Fd, Rd), void 0 !== hd && Xd.set(Kd, hd), hd
      }
      bake(dd, Od, md, Wd, Fd) {
        const Rd = dd.vertexAttributes.find((dd => "position" === dd.kind)),
          Xd = Rd ? function(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Rd = dd => Od ? Od[md + dd] : md + dd,
              Xd = dd => null !== Fd && [0, 1, 2].some((Od => {
                const md = Rd(dd + Od);
                return md >= Fd[0] && md < Fd[1]
              })),
              Kd = [1 / 0, 1 / 0, 1 / 0],
              hd = [-1 / 0, -1 / 0, -1 / 0];
            for (let Td = 0; Td + 2 < Wd; Td += 3)
              if (!Xd(Td))
                for (let Od = 0; Od < 3; Od++) {
                  const md = Rd(Td + Od);
                  for (let Od = 0; Od < 3; Od++) Kd[Od] = Math.min(Kd[Od], dd[3 * md + Od]), hd[Od] = Math.max(hd[Od], dd[3 * md + Od])
                }
            const vd = Math.max(hd[0] - Kd[0], hd[1] - Kd[1], hd[2] - Kd[2]);
            if (!(vd > 0)) return null;
            const Qd = vd / 64,
              td = [0, 0, 0],
              od = [0, 0, 0],
              Nd = [0, 0, 0];
            for (let Td = 0; Td < 3; Td++) td[Td] = Math.min(65, Math.ceil((hd[Td] - Kd[Td]) / Qd) + 1), od[Td] = Kd[Td] - Qd / 2, Nd[Td] = od[Td] + td[Td] * Qd;
            const qd = new Uint32Array(Math.ceil(td[0] * td[1] * td[2] / 32)),
              Hd = new Float64Array(9),
              yd = [0, 0, 0],
              bd = [0, 0, 0];
            for (let Td = 0; Td + 2 < Wd; Td += 3)
              if (!Xd(Td)) {
                for (let Od = 0; Od < 3; Od++) {
                  const md = Rd(Td + Od);
                  for (let Wd = 0; Wd < 3; Wd++) Hd[3 * Od + Wd] = dd[3 * md + Wd]
                }
                for (let dd = 0; dd < 3; dd++) {
                  const Od = Math.min(Hd[dd], Hd[3 + dd], Hd[6 + dd]),
                    md = Math.max(Hd[dd], Hd[3 + dd], Hd[6 + dd]);
                  yd[dd] = Math.max(0, Math.floor((Od - od[dd]) / Qd - 1e-6)), bd[dd] = Math.min(td[dd] - 1, Math.floor((md - od[dd]) / Qd + 1e-6))
                }
                for (let dd = yd[2]; dd <= bd[2]; dd++)
                  for (let Od = yd[1]; Od <= bd[1]; Od++)
                    for (let md = yd[0]; md <= bd[0]; md++)
                      if (Dm(Hd, od[0] + (md + .5) * Qd, od[1] + (Od + .5) * Qd, od[2] + (dd + .5) * Qd, Qd / 2)) {
                        const Wd = md + td[0] * (Od + td[1] * dd);
                        qd[Wd >>> 5] |= 1 << (31 & Wd)
                      }
              } return {
              words: qd,
              lo: od,
              hi: Nd,
              cell: Qd,
              dims: td
            }
          }((0, yh.j)(Rd, dd.vertexCount), Od ? dd.indexData : null, md, Wd, Fd) : null;
        if (!Xd) return null;
        const {
          words: Kd,
          ...hd
        } = Xd;
        if (this.gridTop + Kd.length > Gm) return void(this.gridsFull = !0);
        const vd = this.gridTop;
        return this.gridTop += Kd.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * vd, Kd), {
          ...hd,
          at: vd
        }
      }
    }
    const Th = Math.cos(1 * Math.PI / 180);

    function ph(dd, Od) {
      return dd[0] * Od[0] + dd[1] * Od[1] + dd[2] * Od[2] < Th
    }
    async function Yh(dd) {
      const {
        pixels: Od,
        width: md,
        height: Wd
      } = await mO(dd), Fd = new Uint8Array(md * Wd);
      for (let Rd = 0; Rd < Fd.length; Rd++) Fd[Rd] = Od[4 * Rd + 3];
      return {
        width: md,
        height: Wd,
        alpha: Fd
      }
    }
    class gh {
      constructor(dd, Od) {
        this.device = dd, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Im.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = dd.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = dd.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Hm,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = dd.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [md, Wd, Fd] = Im.o;
        this.volume = dd.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: md,
            height: Wd,
            depthOrArrayLayers: Fd
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = dd.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = dd.createBuffer({
          label: "sun-shadow-volume-work",
          size: Im.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Od ? new bh(dd) : null, this.entityStandIn = Od ? null : dd.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var dd;
        null === (dd = this.stopWindow) || void 0 === dd || dd.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var dd, Od;
        const md = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || md.push("Lite sun shadow volume pipeline compiling");
        const Wd = null !== (dd = null === (Od = this.casters) || void 0 === Od ? void 0 : Od.planesLoading) && void 0 !== dd ? dd : 0;
        return Wd > 0 && md.push(`${Wd} Lite sun shadow plane casters loading their textures`), md
      }
      entries() {
        var dd, Od, md, Wd;
        const Fd = fO.p;
        return [{
          binding: Fd.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Fd.QN,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Fd.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Fd.volume,
          resource: this.volumeView
        }, {
          binding: Fd.sampler,
          resource: this.volumeSampler
        }, {
          binding: Fd.entities,
          resource: {
            buffer: null !== (dd = null === (Od = this.entities) || void 0 === Od ? void 0 : Od.frameBuffer) && void 0 !== dd ? dd : this.entityStandIn
          }
        }, {
          binding: Fd.entityGrids,
          resource: {
            buffer: null !== (md = null === (Wd = this.entities) || void 0 === Wd ? void 0 : Wd.gridBuffer) && void 0 !== md ? md : this.entityStandIn
          }
        }]
      }
      prepare(dd, Od, md) {
        var Wd;
        this.entitiesThisFrame = !1;
        const Fd = null !== (Wd = null === md || void 0 === md ? void 0 : md.sunShadowReach()) && void 0 !== Wd ? Wd : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!md || !Fd.sunShadow && !Fd.airShadow) return void(this.volumeHolds = null);
        if (dd.Bt.tt !== dm) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${dd.Bt.tt}; everything is lit.`)));
        const Rd = this.start(dd);
        this.casters.update(dd.Rt, dd.Rt.PN.length);
        const Xd = dd.XN;
        for (let od = 0; od < 3; od++) this.eye[od] = Od[od] + Xd[od];
        const Kd = (0, Im.t)(this.eye);
        this.staleNear = Kd;
        const hd = dd.Bt.sH;
        Rd.update(this.eye, ((dd, Od, md) => hd.uH(dd, Od, md)), 1);
        const vd = (0, Im.p)(md.TOd()),
          Qd = Rd.eyeChunk,
          td = this.uniformInts;
        for (let od = 0; od < 3; od++) td[od] = Qd[od], td[4 + od] = Kd[od];
        this.entitiesThisFrame = null !== this.entities && Fd.sunShadow, this.entitiesThisFrame && Pm(this.uniformFloats, 8, Od, vd), null !== this.volumeHolds && (this.castersWritten || ph(vd, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Kd, vd, Qd)
      }
      markStale(dd) {
        const Od = this.staleNear,
          md = dm,
          Wd = [dd.i * md, dd.j * md, dd.k * md];
        for (let Rd = 0; Rd < 3; Rd++)
          if (Wd[Rd] + md <= Od[Rd] - md || Wd[Rd] >= Od[Rd] + Im.o[Rd] + md) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Fd = this.stale;
        for (let Rd = 0; Rd < Fd.length; Rd += 4)
          if (Fd[Rd] === dd.i && Fd[Rd + 1] === dd.j && Fd[Rd + 2] === dd.k) return void(Fd[Rd + 3] = this.swept);
        if (16 === Fd.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Fd.push(dd.i, dd.j, dd.k, this.swept)
      }
      writeStale() {
        const dd = this.swept,
          Od = this.stale;
        this.staleAll && dd - this.staleAllSwept >= Im.e && (this.staleAll = !1, Od.length = 0);
        let md = 0;
        for (let Fd = 0; Fd < Od.length; Fd += 4)
          if (dd - Od[Fd + 3] < Im.e) {
            for (let dd = 0; dd < 4; dd++) Od[md + dd] = Od[Fd + dd];
            md += 4
          } Od.length = md;
        const Wd = this.uniformInts;
        Wd[3] = this.staleAll ? 5 : md / 4;
        for (let Fd = 0; Fd < 4; Fd++)
          for (let dd = 0; dd < 3; dd++) Wd[16 + 4 * Fd + dd] = 4 * Fd < md ? Od[4 * Fd + dd] * dm : 0
      }
      writeUniform() {
        const dd = this.uniformInts;
        let Od = this.uniformWritten;
        if (Od) {
          let md = !0;
          for (let Wd = 0; Wd < dd.length && md; Wd++) md = dd[Wd] === Od[Wd];
          if (md) return
        }
        Od ??= this.uniformWritten = new Int32Array(dd.length), Od.set(dd), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(dd) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, dd)
      }
      computeVolume(dd, Od, md) {
        const Wd = this.buildVolumePass();
        if (!Wd) return void(this.volumeHolds = null);
        const Fd = (0, Im.q)(this.volumeHolds, dd);
        this.volumeHolds = dd;
        const Rd = 1 === Fd.length && Fd[0].size.every(((dd, Od) => dd === Im.o[Od])),
          Xd = this.sweptChunk,
          Kd = this.sweptLight,
          hd = Od[0] !== Kd[0] || Od[1] !== Kd[1] || Od[2] !== Kd[2],
          vd = md[0] !== Xd[0] || md[1] !== Xd[1] || md[2] !== Xd[2],
          Qd = hd && ph(Od, Kd);
        if ((Rd || this.written || vd || Qd) && (this.fastLeft = Im.e), Rd || this.written || hd || vd) {
          this.written = !1;
          for (let dd = 0; dd < 3; dd++) Xd[dd] = md[dd], Kd[dd] = Od[dd];
          this.sweepLeft = Rd ? 0 : Im.e
        }
        if (Rd ? this.swept += Im.e : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Fd.push(...(0, Im.v)(dd, this.slice)), this.slice = (this.slice + 1) % Im.e, this.swept++), 0 === Fd.length) return;
        const td = (0, Im.y)(this.workData, Od, Fd);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const od = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Nd = od.beginComputePass({
            label: "sun-shadow-volume"
          });
        Nd.setPipeline(Wd.pipeline), Nd.setBindGroup(Zm.group, Wd.bindGroup), Nd.dispatchWorkgroups(Math.ceil(td / Im.i)), Nd.end(), this.device.queue.submit([od.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const dd = Zm,
          Od = GPUShaderStage.COMPUTE,
          md = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: dd.uniform,
              visibility: Od,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: dd.QN,
              visibility: Od,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: dd.special,
              visibility: Od,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: dd.work,
              visibility: Od,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: dd.volume,
              visibility: Od,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Wd = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: md,
            entries: [{
              binding: dd.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: dd.QN,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: dd.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: dd.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: dd.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [md]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: km()
            }),
            entryPoint: "main"
          }
        }).then((dd => {
          this.volumePass = {
            pipeline: dd,
            bindGroup: Wd
          }
        }), (dd => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(dd)}`)
        })), null
      }
      start(dd) {
        if (this.window) return this.window;
        const Od = (dd, Od) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * dd, Od)
        };
        this.casters = new th(((dd, md) => {
          this.castersWritten = !0, Od(dd, md)
        }), Yh);
        const md = new Hh(this.casters, ((dd, Od) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * dd, Od)
        }), Od);
        md.encoded = dd => {
          this.markStale(dd)
        };
        const Wd = dd => {
          md.chunkAdded(dd)
        };
        return dd.Bt.on("chunkAdded", Wd), this.stopWindow = () => {
          dd.Bt.removeListener("chunkAdded", Wd)
        }, this.window = md, md
      }
    }
    var wh = md(40289),
      ah = md(40293);
    const Eh = 0,
      Jh = 3,
      Uh = 4,
      xh = 5;

    function Bh(dd, Od, md, Wd) {
      dd.drawOffset(Od, Wd + Eh), Od[Wd + Jh] = dd.drawTime(), md[Wd + Uh] = dd.ring.drawStart(), md[Wd + xh] = dd.ring.drawCount()
    }
    const Sh = `\n${zW}\n\nconst MAX_STOPS = ${ah.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${ah.b/4}>,\n\tcolor1: array<vec4f, ${ah.b}>,\n\tcolor2: array<vec4f, ${ah.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${ah.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${ah.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var sh = md(54026);
    class uh {
      constructor(dd, Od, md, Wd) {
        this.device = dd, this.system = Od, this.frameIndex = md, this.bindings = Wd, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, sh.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (dd, Od) => {
          this.device.queue.writeBuffer(this.ring, dd * ah.e * 4, this.system.ring.records, dd * ah.e, (Od - dd) * ah.e)
        };
        const {
          name: Fd
        } = Od;
        this.ring = dd.createBuffer({
          label: `particles-${Fd}`,
          size: Od.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = dd.createBuffer({
          label: `particles-uniforms-${Fd}`,
          size: 4 * ah.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(dd) {
        const Od = (0, sh.e)(this.system, this.uniformBits, dd);
        Od && (this.uniformBits = Od, this.device.queue.writeBuffer(this.uniforms, 0, Od))
      }
      bind() {
        const {
          system: dd
        } = this, Od = this.texture;
        (0, sh.p)(dd, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${dd.name}`,
          size: [ah.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * ah.k
        }, [ah.k, 1]));
        const md = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Od.view && this.boundSampler === Od.sampler && this.boundRamp === md || (this.boundView = Od.view, this.boundSampler = Od.sampler, this.boundRamp = md, this.bindGroup = this.device.createBindGroup({
          label: `particles-${dd.name}`,
          layout: this.bindings.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.uniforms
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.ring
            }
          }, {
            binding: 2,
            resource: Od.sampler
          }, {
            binding: 3,
            resource: Od.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: md
          }]
        }))
      }
      destroy() {
        var dd;
        this.ring.destroy(), this.uniforms.destroy(), null === (dd = this.ramp) || void 0 === dd || dd.destroy()
      }
    }
    class Vh {
      constructor(dd, Od) {
        this.device = dd, this.resources = Od, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, iO.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (dd, Od) => (this.bindTarget(Od), {
            renderable: this.renderable,
            pipeline: sO(this.device, Od),
            draw: dd => Od === this.preparedTarget ? this.draw(dd) : 0
          })
        }
      }
      rebind(dd) {
        this.device = dd, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [Od, md] of this.systems) {
          const Wd = new uh(dd, Od, md.frameIndex, this.bindings),
            Fd = Od.ring.drawCount();
          Fd > 0 && Wd.upload(0, Fd), this.systems.set(Od, Wd)
        }
      }
      build() {
        const {
          device: dd
        } = this, Od = dd.createBindGroupLayout({
          label: "particles-system",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }, {
            binding: 4,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 5,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        this.frameLayout = dd.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = dd.createPipelineLayout({
          bindGroupLayouts: [JO(dd), Od, this.frameLayout]
        }), this.module = dd.createShaderModule({
          label: "particles",
          code: Sh
        });
        const md = dd.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        dd.queue.writeTexture({
          texture: md
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Od,
          rampSampler: dd.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: md.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get fRd() {
        return this.systems.size
      }
      reset() {
        for (const dd of this.systems.keys()) dd.reset()
      }
      describePendingWork() {
        return (0, wh.f)(this.systems.keys(), "Lite")
      }
      wG(dd, Od) {
        const md = new wh.b(dd, Od, this);
        return this.systems.set(md, new uh(this.device, md, this.allocateFrameIndex(), this.bindings)), md
      }
      XOd(dd, Od) {
        for (const md of this.systems.keys()) md.XOd(dd, Od)
      }
      canDraw(dd) {
        const Od = this.systems.get(dd),
          md = dd.texture ? this.resources.boundTexture(dd.texture) : null;
        if (!Od || !md || !this.targetPipelines) return !1;
        if (Od.texture = md, Od.pipelines.length = 0, !XO(dd.blendMode)) return this.warnOnce(`blend:${dd.blendMode}`, `particle blend mode ${dd.blendMode} is not drawn (${dd.name})`), !0;
        const Wd = (0, ld.i)(dd.blendMode);
        for (const Fd of Wd) {
          const dd = this.pipelineFor(Fd);
          if (!1 === dd) return Od.pipelines.length = 0, !0;
          dd && Od.pipelines.push(dd)
        }
        return Od.pipelines.length === Wd.length
      }
      disposeStopped(dd) {
        dd.dispose()
      }
      remove(dd) {
        const Od = this.systems.get(dd);
        Od && (this.systems.delete(dd), Od.destroy(), this.freeFrameIndices.push(Od.frameIndex))
      }
      prepare(dd) {
        const Od = dd.animationRatio || 1;
        uO(this.renderable._worldCenter, dd, xO), this.preparedTarget = this.target, this.draws.length = 0;
        let md = 0;
        for (const Wd of this.systems.values()) {
          const dd = Wd.system;
          if (!dd.animateIfActive(Od)) continue;
          if (dd.ring.takeUploads(Wd.upload), !dd.hasLiveParticles() || 0 === Wd.pipelines.length) continue;
          Wd.writeUniforms(this.warnOnce), Wd.bind();
          const Fd = 64 * Wd.frameIndex;
          Wd.count = dd.ring.drawCount(), Bh(dd, this.frameData, this.frameBits, Fd), md = Math.max(md, Fd + 64), this.draws.push(Wd)
        }
        md > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, md)
      }
      draw(dd) {
        let Od = 0,
          md = null;
        for (const Wd of this.draws) {
          dd.setBindGroup(1, Wd.bindGroup), dd.setBindGroup(2, this.frameBindGroup, [256 * Wd.frameIndex]);
          for (const Fd of Wd.pipelines) Fd !== md && (dd.setPipeline(Fd), md = Fd), dd.draw(4, Wd.count), Od++
        }
        return Od
      }
      bindTarget(dd) {
        this.target = dd;
        const Od = `${dd._colorFormat}|${dd._depthStencilFormat}|${dd._depthCompare}|${dd._sampleCount}`;
        let md = this.pipelines.get(Od);
        md || (md = new Map, this.pipelines.set(Od, md)), this.targetPipelines = md
      }
      pipelineFor(dd) {
        var Od;
        const md = this.targetPipelines,
          Wd = md.get(dd);
        if (void 0 !== Wd) return Wd;
        md.set(dd, null);
        const Fd = this.target,
          Rd = dd === ld.b,
          Xd = null !== (Od = Fd._depthCompare) && void 0 !== Od ? Od : UO,
          {
            device: Kd
          } = this;
        return Kd.createRenderPipelineAsync({
          label: `particles-${dd}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: YO({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Rd ? 1 : 0
            }
          }, Fd, KO((0, ld.e)(dd))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Fd._depthStencilFormat ? {
            format: Fd._depthStencilFormat,
            depthCompare: Xd,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Fd._sampleCount
          }
        }).then((Od => {
          md.set(dd, Od)
        }), (Od => {
          md.set(dd, !1), console.error("Lite particle pipeline failed", Od), oO(Kd, "particles", `blend-${dd}`, Od)
        })), null
      }
      allocateFrameIndex() {
        const dd = this.freeFrameIndices.pop();
        if (void 0 !== dd) return dd;
        const Od = this.nextFrameIndex++;
        if (64 * (Od + 1) > this.frameData.length) {
          const dd = new Float32Array(2 * this.frameData.length);
          dd.set(this.frameData), this.frameData = dd, this.frameBits = new Uint32Array(dd.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Od
      }
      createFrameBuffer() {
        return this.device.createBuffer({
          label: "particles-frames",
          size: this.frameData.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createFrameBindGroup() {
        return this.device.createBindGroup({
          label: "particles-frames",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer,
              size: 32
            }
          }]
        })
      }
    }
    class ih {
      constructor(dd, Od, md, Wd, Fd) {
        this.lite = dd, this.canvas = Od, this.info = md, this.resources = Fd, this.JFd = !1, this.needPOTTextures = !1, this.Rdd = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Od.width, this.renderHeight = Od.height, this.caps = {
          maxTextureSize: Wd.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Wd.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(dd) {
        this.lite = dd, (0, cd.l)(dd, this.renderWidth, this.renderHeight)
      }
      getRenderWidth() {
        return this.renderWidth
      }
      getRenderHeight() {
        return this.renderHeight
      }
      getHardwareScalingLevel() {
        return 1
      }
      setSize(dd, Od) {
        if (this.renderWidth === dd && this.renderHeight === Od) return !1;
        const md = this.renderWidth,
          Wd = this.renderHeight;
        this.renderWidth = dd, this.renderHeight = Od;
        const Fd = this.lite;
        if (null === Fd) return !0;
        try {
          (0, cd.l)(Fd, dd, Od)
        } catch (Rd) {
          if (Rd instanceof DOMException && "InvalidStateError" === Rd.name) {
            this.renderWidth = md, this.renderHeight = Wd;
            try {
              (0, cd.l)(Fd, md, Wd)
            } catch {
              this.canvas.width = md, this.canvas.height = Wd
            }
            return console.warn("WebGPU could not allocate render targets for resize", dd, Od, Rd.message), !1
          }
          throw Rd
        }
        return !0
      }
      resize() {}
      getRenderingCanvas() {
        return this.canvas
      }
      getInfo() {
        return this.info
      }
      pE() {
        const dd = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : dd - this.lastFrameTime, this.lastFrameTime = dd
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(dd, Od) {
        const md = document.createElement("canvas");
        return md.width = dd, md.height = Od, md
      }
      vdd(dd, Od) {
        var md;
        return null !== (md = this.resources.vdd.get(dd)) && void 0 !== md ? md : new qO(this.resources, dd, Od)
      }
      atlasArrays(dd) {
        return this.resources.atlasArrays(dd)
      }
    }
    class Ah {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(dd) {
        this.fov = dd.fov, this.nearPlane = dd.near, this.farPlane = dd.far;
        const Od = dd.worldMatrix;
        for (let md = 0; md < 16; md++)
          if (this.worldMatrix[md] !== Od[md]) return this.worldMatrix.set(Od), void this.worldMatrixVersion++
      }
    }
    class rh {
      constructor(dd, Od, md, Wd) {
        this.canvas = Od, this.options = md, this.vWd = void 0, this.backendName = "WebGPU (Lite)", this.Sdd = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Ah, this.lastFrameTime = 0, this.engine = void 0, this.MH = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.gt = null, this.firstTerrain = null, this.trialFrames = 0, this.install(dd);
        const {
          resources: Fd,
          meshes: Rd
        } = dd;
        this.resources = Fd, this.particles = dd.particles, this.vWd = new ih(dd.engine, Od, Wd, dd.device.limits, Fd), (0, Bd.B)({
          jK: dd => {
            Vd(dd) && Fd.textureSlot(dd)
          },
          loaded: dd => Vd(dd) ? Fd.textureLoaded(dd) : null,
          canvasUpdated: (dd, Od, md) => {
            Vd(dd) && Fd.canvasUpdated(dd, Od, md)
          }
        }), this.Sdd = Rd.Sdd, this.modelMeshes = Rd.modelMeshes
      }
      get gpuDevice() {
        return this.device
      }
      get deviceLost() {
        return this.refusals.deviceLost
      }
      get terrain() {
        return this.liteTerrain
      }
      install(dd) {
        this.engine = dd.engine, this.MH = dd.MH, this.sceneTask = dd.sceneTask, this.device = dd.device, this.liteTerrain = dd.terrain, this.meshes = dd.meshes, this.sunShadow = dd.sunShadow;
        const Od = new ed(dd.device.lost);
        this.refusals = Od, Od.deviceLost.then((() => {
          var Od;
          Od = dd.device, QO.add(Od)
        })), dd.MH.camera = this.camera
      }
      async rebuild() {
        var dd, Od, md, Wd, Fd;
        const Rd = await Ph();
        this.halted = !0, this.liteTerrain.retire(), null === (dd = this.sunShadow) || void 0 === dd || dd.dispose(), this.vWd.detach();
        try {
          (0, jd.d)(this.engine)
        } catch (Qd) {
          console.warn("Lite: disposing the lost device's engine threw", Qd)
        }
        const Xd = {
            width: this.vWd.renderWidth,
            height: this.vWd.renderHeight
          },
          Kd = await zh(this.canvas, this.options, Xd, Rd),
          hd = wO(Kd),
          vd = ch(hd);
        try {
          this.resources.rebind(Kd, hd), this.particles.rebind(hd), this.Sdd.dropSteady();
          const dd = {
              resources: this.resources,
              particles: this.particles,
              Sdd: this.Sdd,
              modelMeshes: this.modelMeshes
            },
            Od = await jh(Kd, hd, this.options, dd),
            md = vd();
          if (null !== md) throw new Error(`WebGPU device lost while Lite was rebuilding (${md.reason}): ${md.message}`);
          const {
            r: Wd,
            g: Fd,
            b: Rd
          } = this.MH.clearColor;
          this.install(Od), this.setClearColour(Wd, Fd, Rd), this.vWd.rebind(Kd)
        } catch (Qd) {
          throw hd.destroy(), Qd
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (Od = this.gt) || void 0 === Od || Od.resize(), null === (md = this.gt) || void 0 === md || null === (Wd = md.zo) || void 0 === Wd || null === (Fd = Wd.aE) || void 0 === Fd || Fd.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((dd, Od) => {
          this.firstTerrain = {
            drawn: dd,
            failed: Od
          }
        }))
      }
      get castsEntitySunShadows() {
        var dd, Od;
        return null !== (dd = null === (Od = this.sunShadow) || void 0 === Od ? void 0 : Od.tracesEntities) && void 0 !== dd && dd
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(dd) {
        this.gt = dd, this.modelMeshes.attach(dd.model, dd.sceneMirror);
        const Od = dd.MH;
        this.setClearColour(Od.clearColor.r, Od.clearColor.g, Od.clearColor.b), Od.draw = () => {
          this.drawFrame(dd, Od)
        }
      }
      get yt() {
        return !this.refusals.lost && !this.halted
      }
      render(dd) {
        if (this.yt) {
          try {
            this.vWd.pE(), dd.MH.render()
          } catch (Od) {
            throw this.refusals.frameFailed(Od), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(Od), this.firstTerrain = null), Od
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var dd, Od, md, Wd;
        const Fd = [...this.particles.describePendingWork(), ...null !== (dd = null === (Od = this.sunShadow) || void 0 === Od ? void 0 : Od.describePendingWork()) && void 0 !== dd ? dd : []],
          Rd = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (md = this.terrain.sceneDepth) && void 0 !== md && md.compiling ? 1 : 0) + (null !== (Wd = this.terrain.shadowMask) && void 0 !== Wd && Wd.compiling ? 1 : 0);
        Rd > 0 && Fd.push(`${Rd} Lite pipelines compiling`);
        const Xd = this.terrain.buffersAwaitingVerdict;
        Xd > 0 && Fd.push(`${Xd} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Kd = this.resources.texturesLoading;
        return Kd > 0 && Fd.push(`${Kd} Lite textures loading`), Fd
      }
      prepareTexture(dd) {
        return null !== this.resources.boundTexture(dd) || this.resources.textureFailed(dd)
      }
      drawFrame(dd, Od) {
        var md, Wd, Fd, Rd, Xd, Kd;
        const hd = YK(dd);
        this.camera.copyFromView(hd), this.setClearColour(hd.clearColour[0], hd.clearColour[1], hd.clearColour[2]), null === (md = this.sunShadow) || void 0 === md || md.prepare(dd.zo, hd.eye, null !== (Wd = dd.zo.Jq) && void 0 !== Wd ? Wd : null), this.terrain.prepare(dd, hd), null === (Fd = this.terrain.sceneDepth) || void 0 === Fd || Fd.setPlanes(hd.near, hd.far), null === (Rd = this.terrain.shadowMask) || void 0 === Rd || Rd.prepare(hd), RK(this.sceneTask), this.meshes.prepare(Od, hd, dd.model.earthSky, null !== (Xd = dd.zo.Jq) && void 0 !== Xd ? Xd : null), this.particles.prepare(hd);
        const vd = performance.now();
        this.resources.flushUploads(), null === (Kd = this.sunShadow) || void 0 === Kd || Kd.traceEntities(this.meshes);
        try {
          (0, cd.j)(this.engine, this.lastFrameTime > 0 ? vd - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = vd, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(vd), this.firstTerrain = null)
      }
      setClearColour(dd, Od, md) {
        const Wd = this.MH.clearColor;
        Wd.r = dd, Wd.g = Od, Wd.b = md, Wd.a = 1
      }
    }

    function Gh(dd) {
      const Od = {};
      for (const md in dd.limits) {
        const Wd = dd.limits[md];
        "number" === typeof Wd && (Od[md] = Wd)
      }
      return Od
    }
    const nh = "WebGPU device lost while Lite was starting";
    async function Lh(dd, Od) {
      const md = await Ph(),
        Wd = md.info,
        Fd = {
          vendor: (null === Wd || void 0 === Wd ? void 0 : Wd.vendor) || "unknown vendor",
          renderer: (null === Wd || void 0 === Wd ? void 0 : Wd.architecture) || "unknown renderer",
          version: (null === Wd || void 0 === Wd ? void 0 : Wd.description) || "unknown version"
        };
      dd.style.background = "black";
      const Rd = await zh(dd, Od, Od.bufferSize, md),
        Xd = wO(Rd),
        Kd = ch(Xd);
      try {
        const md = new rh(await jh(Rd, Xd, Od, null), dd, Od, Fd),
          Wd = Kd();
        if (null !== Wd) {
          const {
            reason: dd,
            message: Od
          } = Wd;
          throw Object.assign(new Error(`${nh} (${dd}): ${Od}`), {
            fallbackReason: nh
          })
        }
        return md
      } catch (hd) {
        throw Xd.destroy(), null === Kd() ? hd : (0, FK.c)(hd, "device")
      }
    }
    async function Ph() {
      const dd = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!dd) throw (0, FK.c)(new Error("No WebGPU adapter"), "no_adapter");
      return dd
    }
    async function zh(dd, Od, md, Wd) {
      let Fd;
      try {
        Fd = await (0, cd.e)(dd, {
          msaaSamples: Od.zWd ? 4 : 1,
          requiredLimits: Gh(Wd),
          alphaMode: "premultiplied"
        })
      } catch (Xd) {
        throw (0, FK.c)(Xd, "#47" === (null === (Rd = Xd) || void 0 === Rd ? void 0 : Rd.message) ? "no_adapter" : "device")
      }
      var Rd;
      return null !== md && (0, cd.l)(Fd, md.width, md.height), Fd
    }

    function ch(dd) {
      let Od = null;
      return dd.lost.then((dd => {
        Od = dd, console.error(`WebGPU device lost (${dd.reason}): ${dd.message}`)
      })), () => Od
    }
    async function jh(dd, Od, md, Wd) {
      var Fd, Rd;
      let {
        sceneDepth: Xd,
        sunShadow: Kd
      } = md;
      const hd = (0, Dd.d)(dd),
        vd = null !== (Fd = null === Wd || void 0 === Wd ? void 0 : Wd.resources) && void 0 !== Fd ? Fd : new OK(dd, Od),
        Qd = new Wh(Od),
        td = new GX(Od, vd, (dd => function(dd, Od) {
          for (const Wd of aO(dd)) {
            var md;
            if (Wd._targetSignature === Od) return null !== (md = Wd._sceneBG) && void 0 !== md ? md : null
          }
          return null
        }(hd, dd)), null === Wd || void 0 === Wd ? void 0 : Wd.Sdd, null === Wd || void 0 === Wd ? void 0 : Wd.modelMeshes),
        od = null !== (Rd = null === Wd || void 0 === Wd ? void 0 : Wd.particles) && void 0 !== Rd ? Rd : new Vh(Od, vd);
      for (const Hd of function(dd, Od, md) {
          return [Od.opaqueRenderable, dd.opaqueRenderable, dd.skyLastRenderable, md.renderable, Od.transparentRenderable, dd.transparentRenderable, dd.frontRenderable]
        }(td, Qd, od)) gO(hd, Hd);
      const Nd = function(dd) {
        for (const Od of aO(dd))
          if ("MH" === Od.name) return Od;
        throw new Error("Lite: the scene has no render task named scene")
      }(hd);
      Xd && Qd.installSceneDepth(Nd, dd);
      const qd = Kd ? new gh(Od, Kd.entities) : null;
      return Qd.sunShadow = qd, qd && null !== Kd && void 0 !== Kd && Kd.entities && (Qd.shadowMask = new rK(Od, Nd, dd, Qd)), td.sunShadow = qd, await (0, Dd.e)(hd), {
        engine: dd,
        MH: hd,
        sceneTask: Nd,
        device: Od,
        terrain: Qd,
        meshes: td,
        sunShadow: qd,
        resources: vd,
        particles: od
      }
    }
  },
  42770: (dd, Od, md) => {
    md.d(Od, {
      D: () => qd,
      c: () => Fd,
      e: () => Wd,
      i: () => od,
      k: () => Qd,
      l: () => yd,
      n: () => Rd,
      p: () => Kd,
      r: () => hd,
      s: () => Xd,
      w: () => Hd,
      z: () => Nd
    });
    const Wd = 3,
      Fd = 0,
      Rd = 1,
      Xd = 2,
      Kd = {
        uniform: 3,
        QN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      hd = 10,
      vd = "BloxdPackInputs",
      Qd = "bloxdPackInputs",
      td = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      od = 80;

    function Nd() {
      const dd = td.map((dd => {
        let {
          name: Od,
          type: md
        } = dd;
        return `    ${Od}: ${md},\n`
      })).join("");
      return `struct ${vd} {\n${dd}}\n@group(${Wd}) @binding(${Fd}) var<uniform> ${Qd}: ${vd};\n`
    }

    function qd(dd, Od) {
      const md = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, od),
        [Wd, Fd, Rd, Xd, Kd, hd] = td;
      md.setFloat32(Wd.offset, Od.seconds, !0), md.setUint32(Fd.offset, Od.lit ? 1 : 0, !0);
      for (let vd = 0; vd < 3; vd++) md.setInt32(Rd.offset + 4 * vd, Od.renderOffset[vd], !0), md.setFloat32(Xd.offset + 4 * vd, Od.TOd[vd], !0), md.setFloat32(Kd.offset + 4 * vd, Od.eyePosition[vd], !0), md.setFloat32(hd.offset + 4 * vd, Od.shadowDirection[vd], !0)
    }

    function Hd(dd) {
      const Od = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, md) => {
        let {
          id: Wd,
          rotation: Fd
        } = dd;
        Od[md] = 65535 & Wd | (3 & Fd) << 16
      })), Od
    }
    const yd = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);