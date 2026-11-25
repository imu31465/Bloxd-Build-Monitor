export const id = 274;
export const ids = [274];
export const modules = {
  41851: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt,
      i: () => dt,
      m: () => mt,
      o: () => Ht
    });
    var Ot = Vt(37510),
      qt = Vt(38927),
      Dt = Vt(38924);

    function mt(tt, et, Vt, Ot) {
      const qt = Dt.w;
      et.fill(0), tt.gravity.toArray(et, qt.gravity), tt.colorDead.toArray(et, qt.colorDead), Vt[qt.ramp] = tt.useRampGradients ? 1 : 0;
      const mt = tt.getColorGradients(),
        dt = lt(tt, mt, "colour", Ot);
      Vt[qt.colorCount] = dt;
      for (let Dt = 0; Dt < dt; Dt++) {
        var jt;
        const tt = mt[Et(mt, Dt)];
        et[qt.colorPositions + Dt] = tt.gradient, tt.color1.toArray(et, qt.color1 + 4 * Dt), (null !== (jt = tt.color2) && void 0 !== jt ? jt : tt.color1).toArray(et, qt.color2 + 4 * Dt)
      }
      const Ht = tt.getVelocityGradients(),
        Xt = lt(tt, Ht, "Dy", Ot);
      Vt[qt.velocityCount] = Xt;
      for (let Dt = 0; Dt < Xt; Dt++) Mt(et, qt.Dy + 4 * Dt, Ht[Et(Ht, Dt)]);
      const Qt = tt.useRampGradients ? tt.getColorRemapGradients() : null,
        ft = lt(tt, Qt, "colour remap", Ot);
      Vt[qt.remapCount] = ft;
      for (let Dt = 0; Dt < ft; Dt++) Mt(et, qt.remap + 4 * Dt, Qt[Et(Qt, Dt)])
    }

    function dt() {
      return {
        key: [],
        texels: new Uint8Array(4 * Dt.l)
      }
    }
    const jt = [];

    function Ht(tt, et) {
      return Xt(tt, jt), !Nt(jt, et.key) && (et.key.length = 0, et.key.push(...jt), et.key.length > 0 && function(tt, et) {
        for (let Vt = 0; Vt < Dt.l; Vt++) qt.i.GetCurrentGradient(Vt / Dt.l, tt, ((tt, et, Vt) => {
          Ot.Color3.LerpToRef(tt.color, et.color, Vt, Qt)
        })), et[4 * Vt] = 255 * Qt.r, et[4 * Vt + 1] = 255 * Qt.g, et[4 * Vt + 2] = 255 * Qt.b, et[4 * Vt + 3] = 255
      }(tt.getRampGradients(), et.texels), !0)
    }

    function Xt(tt, et) {
      et.length = 0;
      const Vt = tt.useRampGradients ? tt.getRampGradients() : null;
      if (null !== Vt && void 0 !== Vt && Vt.length) {
        et.push(Vt.length);
        for (const tt of Vt) et.push(tt.gradient, tt.color.r, tt.color.g, tt.color.b)
      }
    }
    const Qt = new Ot.Color3;

    function lt(tt, et, Vt, Ot) {
      return et ? et.length > Dt.e ? (Ot(`particleStops:${Vt}`, `GPU particles use the first 2 and last ${Dt.e-2} of more than ${Dt.e} ${Vt} gradient stops (${tt.name})`), Dt.e) : et.length : 0
    }

    function Et(tt, et) {
      return et < 2 || tt.length <= Dt.e ? et : tt.length - Dt.e + et
    }
    const ft = new Float32Array(Dt.r),
      wt = new Uint32Array(ft.buffer);

    function yt(tt, et, Vt) {
      return mt(tt, ft, wt, Vt), et && Nt(wt, et) ? null : wt.slice()
    }

    function Nt(tt, et) {
      if (tt.length !== et.length) return !1;
      for (let Vt = 0; Vt < tt.length; Vt++)
        if (tt[Vt] !== et[Vt]) return !1;
      return !0
    }

    function Mt(tt, et, Vt) {
      var Ot;
      tt[et] = Vt.gradient, tt[et + 1] = Vt.factor1, tt[et + 2] = null !== (Ot = Vt.factor2) && void 0 !== Ot ? Ot : Vt.factor1
    }
  },
  41370: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      const Ot = et * et * 4,
        qt = tt[0].layers,
        Dt = qt * (tt.length - 1) + tt[tt.length - 1].layers,
        mt = new Uint8Array(Dt * Ot);
      tt.forEach(((et, Vt) => {
        const Dt = Vt + 1 < tt.length ? Math.min(et.layers, qt) : et.layers;
        mt.set(new Uint8Array(et.pixels.buffer, et.pixels.byteOffset, Dt * Ot), Vt * qt * Ot)
      }));
      const dt = Math.max(1, Math.min(Dt, Vt || Dt));
      if (dt === Dt) return [{
        pixels: mt,
        layers: Dt
      }];
      const jt = [];
      for (let Ht = 0; Ht < Dt; Ht += dt) {
        const tt = Math.min(Dt, Ht + dt);
        jt.push({
          pixels: mt.slice(Ht * Ot, tt * Ot),
          layers: tt - Ht
        })
      }
      return jt
    }
    Vt.d(et, {
      d: () => Ot,
      e: () => Dt
    });
    const qt = new WeakMap;

    function Dt(tt, et, Vt) {
      var Ot, Dt;
      const mt = null !== (Ot = qt.get(tt)) && void 0 !== Ot ? Ot : new Map;
      qt.set(tt, mt);
      const dt = null !== (Dt = mt.get(et[0])) && void 0 !== Dt ? Dt : [];
      mt.set(et[0], dt);
      const jt = dt.find((tt => tt.urls.length === et.length && tt.urls.every(((tt, Vt) => tt === et[Vt]))));
      if (jt) return jt.built;
      const Ht = {
        urls: [...et],
        built: Vt()
      };
      return dt.push(Ht), Ht.built.catch((() => {
        dt.splice(dt.indexOf(Ht), 1)
      })), Ht.built
    }
  },
  41848: (tt, et, Vt) => {
    function Ot() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const et = new Set;
      return (Vt, Ot) => {
        et.has(Vt) || (et.add(Vt), console.warn(tt + Ot))
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  41888: (tt, et, Vt) => {
    Vt.d(et, {
      createLiteRendererAsync: () => zj,
      liteBabylonBackend: () => ot,
      setPipelineFailureHook: () => je
    });
    var Ot = Vt(37510),
      qt = Vt(37867),
      Dt = Vt(38157),
      mt = Vt(37461),
      dt = Vt(38167);
    class jt extends dt.c {
      constructor() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        super(...et), this.color = new Ot.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: et[0].vI().getUniqueId(),
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
          needAlphaBlendingForMesh: tt => tt.visibility < 1 || tt.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Ht = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Xt = tt => 1 << Ht.indexOf(tt),
      Qt = Xt("VERTEXCOLOR"),
      lt = Xt("INSTANCES"),
      Et = Xt("THIN_INSTANCES"),
      ft = Xt("INSTANCESCOLOR"),
      wt = Xt("FOG"),
      yt = Xt("LITE_FRONT_LAYER");

    function Nt(tt, et, Vt, Ot) {
      let qt = 0;
      return tt.isVerticesDataPresent("color") && (qt |= Qt), "none" !== et && (qt |= lt), "thin" === et && (qt |= Et, tt.isVerticesDataPresent("instanceColor") && (qt |= ft)), Ot.fogEnabled && tt.applyFog && 0 !== Ot.fogMode && (qt |= wt), Vt >= 1 && (qt |= yt), qt
    }

    function Mt(tt, et) {
      tt.updateColor4("color", et.color, et.alpha)
    }
    var bt = Vt(38100),
      Jt = Vt(37670),
      Ct = Vt(37545),
      ut = Vt(37435),
      Kt = Vt(38080),
      ht = Vt(38091),
      vt = Vt(37454),
      Wt = Vt(37457),
      St = Vt(37467);
    const ct = ut.c.GLSL;
    class Rt {
      constructor(tt, et) {
        this.name = tt, this.Fw = et, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.ZI = {
          addOnce: tt => {
            this.disposers.push(tt)
          }
        }, this.uniqueId = et.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      vI() {
        return this.Fw
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
      needAlphaBlendingForMesh(tt) {
        return (0, vt.O)(this.model, tt.visibility, tt.hasVertexAlpha)
      }
      needAlphaTestingForMesh(tt) {
        return (0, vt.P)(this.model, tt.visibility, tt.hasVertexAlpha)
      }
      dispose() {
        (0, Jt.m)(this);
        for (const tt of this.disposers.splice(0)) tt()
      }
      get model() {
        return (0, vt.X)(this)
      }
    }
    const It = new WeakSet;

    function Pt(tt) {
      return It.has(tt)
    }

    function Zt(tt) {
      It.add(tt)
    }
    const Lt = {
      create: (tt, et) => ((0, Ct.q)(tt, new Rt(tt.name, et)), Wt.d.defines()),
      write: () => {},
      addFeature: (tt, et) => {
        const Vt = tt.mirror;
        et.feature === ht.i && et.state.dirLightCount > 0 && (tt.disableLighting = !0, (0, vt.U)(tt)), "BLOXD_LIGHTING" in et.defines && (0, Jt.j)(Vt), et.feature === Kt.j && ((0, bt.m)(et.state, ct), function(tt, et) {
          const Vt = tt.vI().Jf();
          setTimeout((() => {
            Vt.atlasArrays(et.sources).then((Vt => {
              (0, bt.e)(tt, et, Vt.map((tt => ({
                atlas: tt,
                layers: tt.layers
              }))), Vt[0].layerWidth, ct)
            })).catch((tt => {
              console.error("Failed to build the atlas's texture arrays", tt)
            }))
          }))
        }(Vt, et.state))
      },
      texture: (tt, et, Vt) => {
        let {
          data: Ot,
          sets: qt
        } = Vt;
        var Dt;
        (Zt(tt), Ot) && (tt.uvSet = null !== (Dt = null === qt || void 0 === qt ? void 0 : qt.coordinatesIndex) && void 0 !== Dt ? Dt : 0, (0, Ct.db)(tt.matrix, null !== qt && void 0 !== qt ? qt : {}))
      },
      cube: Zt,
      canvas: (tt, et, Vt) => {
        let {
          width: Ot,
          height: qt,
          mipmaps: Dt,
          samplingMode: mt = St.k.trilinear,
          hasAlpha: dt = !1,
          wrap: jt = St.e.clamp
        } = Vt;
        const Ht = tt.Jf().createCanvas(Ot, qt),
          Xt = new St.l("2d", {
            kind: "canvas",
            width: Ot,
            height: qt,
            canvas: Ht
          }, {
            samplingMode: mt,
            wrapU: jt,
            wrapV: jt,
            noMipmap: !Dt,
            invertY: !0
          });
        return Xt.hasAlpha = dt, Zt(Xt), Xt
      }
    };
    var Ft = Vt(37694),
      kt = Vt(37367);
    class Gt {
      constructor(tt, et, Vt) {
        this.engine = tt, this.clearColor = et, this.ambientColor = Vt, this.onBeforeRenderObservable = new kt.c, this.onBeforeCameraRenderObservable = new kt.c, this.onAfterRenderObservable = new kt.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.PJ = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Jf() {
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
      addPendingData(tt) {
        this.pending.push(tt)
      }
      removePendingData(tt) {
        const et = this.pending.indexOf(tt); - 1 !== et && this.pending.splice(et, 1)
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

    function zt() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const ot = {
      nVt: zt,
      aqt: (tt, et) => {
        const Vt = new Gt(tt.engine, Ot.e.FromArray(et.clearColor), Ot.Color3.FromArray(et.ambientColor));
        (0, mt.e)(Lt, Vt), tt.Fw = Vt,
          function(tt, et) {
            const Vt = Object.assign((0, Ft.g)(tt, "camera"), {
              layerMask: 268435455
            });
            tt.model.nodes.setWorldSource(Vt.row, tt.model.view.worldMatrix), tt.camera = et.activeCamera = Vt
          }(tt, Vt), (0, qt.i)(tt, ((tt, et, Vt) => (0, Dt.g)(tt, et, Vt, dt.c)))
      },
      fqt: () => {},
      setBabylonFog: () => {},
      bqt: zt,
      Kqt: () => {},
      linesFromArrays: (tt, et, Vt) => (0, Dt.g)(tt, et, Vt, jt),
      kw: () => {},
      uqt: zt
    };
    var rt = Vt(41951),
      Ut = Vt(41960),
      At = Vt(41974);
    class it {
      constructor(tt) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const et = new Promise((tt => {
          this.refused = tt
        }));
        this.deviceLost = Promise.race([tt, et]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(tt) {
        (function(tt) {
          const {
            name: et,
            message: Vt
          } = null !== tt && void 0 !== tt ? tt : {};
          return "InvalidStateError" === et && "string" === typeof Vt && Vt.startsWith("GPUDevice.")
        })(tt) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: tt.message,
          framesRefused: !0
        }))
      }
    }
    var Yt = Vt(41370),
      Bt = Vt(38937);

    function pt(tt) {
      return Math.max(4, 4 * Math.ceil(tt / 4))
    }

    function xt(tt, et, Vt, Ot) {
      const qt = tt.createBuffer({
        label: Ot,
        size: pt(et.byteLength),
        usage: Vt,
        mappedAtCreation: !0
      });
      return new Uint8Array(qt.getMappedRange(), 0, et.byteLength).set(new Uint8Array(et.buffer, et.byteOffset, et.byteLength)), qt.unmap(), qt
    }

    function Tt(tt, et) {
      return Math.floor(Math.log2(Math.max(tt, et))) + 1
    }

    function gt(tt, et, Vt, Ot, qt, Dt) {
      const mt = tt.createTexture({
          label: Dt,
          size: {
            width: Vt,
            height: Ot,
            depthOrArrayLayers: qt
          },
          format: "rgba8unorm",
          mipLevelCount: Tt(Vt, Ot),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        dt = (et, Vt, Ot, Dt) => {
          tt.queue.writeTexture({
            texture: mt,
            mipLevel: Vt
          }, et, {
            bytesPerRow: 4 * Ot,
            rowsPerImage: Dt
          }, {
            width: Ot,
            height: Dt,
            depthOrArrayLayers: qt
          })
        };
      dt(et, 0, Vt, Ot);
      let jt = 1;
      for (const Ht of function*(tt, et, Vt, Ot) {
          let qt = tt,
            Dt = et,
            mt = Vt;
          for (; Dt > 1 || mt > 1;) {
            const tt = Math.max(1, Dt >> 1),
              et = Math.max(1, mt >> 1),
              Vt = new Uint8Array(tt * et * Ot * 4),
              dt = 4 * Dt;
            let jt = 0;
            for (let Ht = 0; Ht < Ot; Ht++) {
              const Ot = Ht * dt * mt;
              for (let Ht = 0; Ht < et; Ht++) {
                const et = Ot + Math.min(2 * Ht, mt - 1) * dt,
                  Xt = Ot + Math.min(2 * Ht + 1, mt - 1) * dt;
                for (let Ot = 0; Ot < tt; Ot++) {
                  const tt = 4 * Math.min(2 * Ot, Dt - 1),
                    mt = 4 * Math.min(2 * Ot + 1, Dt - 1);
                  for (let Ot = 0; Ot < 4; Ot++) Vt[jt++] = qt[et + tt + Ot] + qt[et + mt + Ot] + qt[Xt + tt + Ot] + qt[Xt + mt + Ot] + 2 >> 2
                }
              }
            }
            yield {
              data: Vt,
              width: tt,
              height: et
            }, qt = Vt, Dt = tt, mt = et
          }
        }(et, Vt, Ot, qt)) dt(Ht.data, jt++, Ht.width, Ht.height);
      return mt
    }
    const st = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function nt(tt) {
      if (tt.startsWith("data:")) {
        const et = tt.search(/[;,]/);
        return `data:${et>5?tt.slice(5,et):""} URL of ${tt.length} characters`
      }
      return tt.length > 80 ? `${tt.slice(0,80)}...` : tt
    }
    async function te(tt) {
      const et = await fetch(tt);
      if (!et.ok) throw new Error(`${nt(tt)}: ${et.status} ${et.statusText}`);
      return createImageBitmap(await et.blob(), st)
    }
    async function ee(tt) {
      const et = await te(tt),
        Vt = new OffscreenCanvas(et.width, et.height),
        Ot = Vt.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Ot) throw new Error("No 2D context to decode an image");
      Ot.drawImage(et, 0, 0);
      const {
        data: qt
      } = Ot.getImageData(0, 0, et.width, et.height);
      return et.close(), {
        pixels: new Uint8Array(qt.buffer, qt.byteOffset, qt.byteLength),
        width: Vt.width,
        height: Vt.height
      }
    }

    function Ve(tt, et) {
      return (0, Yt.e)(tt, et.urls, (async () => {
        const Vt = await Promise.all(et.urls.map((async (tt, Vt) => {
            var Ot, qt, Dt, mt, dt;
            return null !== (mt = null !== (qt = null === (Dt = et.pixels) || void 0 === Dt ? void 0 : Dt[Vt]) && void 0 !== qt ? qt : null, dt = et.layerWidth, Ot = null !== mt && void 0 !== mt && mt.byteLength && dt && mt.byteLength % (dt * dt * 4) === 0 ? {
              pixels: mt,
              layerWidth: dt,
              layers: mt.byteLength / (dt * dt * 4)
            } : null) && void 0 !== Ot ? Ot : await async function(tt) {
              const {
                pixels: et,
                width: Vt
              } = await ee(tt);
              return {
                pixels: et,
                layerWidth: Vt,
                layers: et.byteLength / (Vt * Vt * 4)
              }
            }(tt)
          }))),
          Ot = Vt[0].layerWidth;
        return (0, Yt.d)(Vt, Ot, tt.limits.maxTextureArrayLayers).map(((Vt, qt) => {
          let {
            pixels: Dt,
            layers: mt
          } = Vt;
          return {
            texture: gt(tt, Dt, Ot, Ot, mt, `atlas-${qt}-${nt(et.urls[0])}`),
            layerWidth: Ot,
            layers: mt
          }
        }))
      }))
    }
    const Oe = new Map([
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
      qe = new Map([
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

    function De(tt) {
      for (const et of (0, Bt.g)(tt))
        if (!qe.has((0, Bt.e)(et))) return !1;
      return !0
    }

    function me(tt) {
      const et = qe.get(tt);
      if (!et) return null;
      const [Vt, Ot, qt] = et;
      return {
        srcFactor: Oe.get(Vt),
        dstFactor: Oe.get(Ot),
        operation: qt
      }
    }
    let de = null;

    function je(tt) {
      de = tt
    }
    const He = new WeakSet;

    function Xe(tt) {
      return He.has(tt)
    }

    function Qe(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var Dt;
      Xe(tt) || (null === (Dt = de) || void 0 === Dt || Dt(et, Vt, Ot, qt))
    }
    class le {
      constructor(tt) {
        this.resources = tt, this.matrixKey = {
          uQ: 0
        }, this.attributesKey = {
          uQ: 0
        }, this.inputs = Object.create(null);
        for (let et = 0; et < 4; et++) this.inputs[`world${et}`] = new we(this.matrixKey, 16 * et, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(tt, et) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, tt, !0), et && this.resources.vertexBufferCreated(this.attributesKey, et, !0)
      }
    }
    class Ee extends le {
      constructor(tt, et, Vt) {
        super(tt), this.mesh = et, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Ot = this.inputs;
        let qt = 0;
        for (const {
            size: mt
          }
          of Vt) qt += mt;
        for (const {
            name: mt,
            offset: dt,
            size: jt,
            type: Ht
          }
          of Vt) Ot[mt] = new we(this.attributesKey, 4 * dt, 4 * qt, jt, !0, Ht);
        this.rowStride = qt, tt.T6.set(et, this);
        const Dt = et.isVerticesDataPresent;
        et.isVerticesDataPresent = (tt, Vt) => tt in Ot || Dt.call(et, tt, Vt)
      }
      attach(tt, et) {
        this.matrices = tt, this.attributes = et, this.bind(tt, et), this.mirror(tt, tt.length, tt.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      T_(tt) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, tt ? 64 * tt : void 0)
      }
      n_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(tt, et) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * tt, 16 * et)
      }
      attributeRows(tt, et) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, tt * this.rowStride, et * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(tt, et, Vt) {
        const Ot = this.mesh._thinInstanceDataStorage;
        Ot.matrixData = tt, Ot.matrixBufferSize = et, Ot.worldMatrices = null, Ot.instancesCount = Vt
      }
    }
    class fe extends le {
      constructor(tt, et, Vt) {
        var Ot, qt, Dt, mt;
        super(tt), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.interleavedKinds) && void 0 !== Ot ? Ot : null, this.offsets = null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.interleavedOffsets) && void 0 !== qt ? qt : [], this.rowStride = null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.interleavedRowStride) && void 0 !== Dt ? Dt : 0, null === (mt = this.layout) || void 0 === mt || mt.forEach(((tt, et) => {
          this.inputs[tt] = new we(this.attributesKey, 4 * this.offsets[et], 4 * this.rowStride, Vt.strides[tt])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), tt.batchUploads.set(et, this), et.ZI.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(tt) {
        const et = this.packedBatch;
        return et.renderSelf ? 0 === tt ? this.packedSource : et.instances[tt - 1] : et.instances[tt]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(tt, et, Vt, Ot) {
        const qt = (et.renderSelf ? 1 : 0) + et.rows.length;
        if (this.frame = Ot, this.count = qt, this.packedSource = tt, this.packedBatch = et, 0 === qt) return;
        if (tt.getWorldMatrix(), 16 * qt > this.matrices.length) {
          let tt = this.matrices.length / 16;
          for (; tt < qt;) tt *= 2;
          this.matrices = new Float32Array(16 * tt), this.attributes &&= new Float32Array(tt * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Dt = 0;
        et.renderSelf && this.packRow(Dt++, tt, et.row, Vt);
        for (let mt = 0; mt < et.rows.length; mt++) this.packRow(Dt++, et.instances[mt], et.rows[mt], Vt);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * qt), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, qt * this.rowStride)
      }
      packRow(tt, et, Vt, Ot) {
        const qt = this.matrices;
        if (Vt < 0) qt.set(et.getWorldMatrix().m, 16 * tt);
        else
          for (let Ht = 0; Ht < 16; Ht++) qt[16 * tt + Ht] = Ot[16 * Vt + Ht];
        const Dt = this.attributes;
        if (!Dt) return;
        const mt = et.qL,
          dt = this.layout;
        for (let Ht = 0; Ht < dt.length; Ht++) {
          var jt;
          const et = null !== (jt = mt[dt[Ht]]) && void 0 !== jt ? jt : 0,
            Vt = tt * this.rowStride + this.offsets[Ht];
          et.toArray ? et.toArray(Dt, Vt) : et.copyToArray ? et.copyToArray(Dt, Vt) : Dt[Vt] = et
        }
      }
    }
    class we {
      constructor(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = tt, this.byteOffset = et, this.byteStride = Vt, this.size = Ot, this.instanced = qt, this.type = Dt, this.normalized = mt
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
    const ye = "CANVAS_ALPHA_ONE",
      Ne = `override ${ye}: bool = false;`,
      ae = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Me(tt, et, Vt) {
      var Ot;
      let qt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Dt = null !== (Ot = et._colorFormat) && void 0 !== Ot ? Ot : "bgra8unorm",
        mt = qt ? 15 : 0;
      return Vt ? {
        ...tt,
        targets: [{
          format: Dt,
          blend: {
            color: Vt,
            alpha: ae
          },
          writeMask: mt
        }]
      } : {
        ...tt,
        constants: {
          ...tt.constants,
          [ye]: 1
        },
        targets: [{
          format: Dt,
          writeMask: mt
        }]
      }
    }

    function be(tt, et) {
      tt._renderables.push(et)
    }

    function Je(tt) {
      return tt._device
    }

    function Ce(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = tt._frameGraph) || void 0 === Vt ? void 0 : Vt._tasks) && void 0 !== et ? et : []
    }

    function ue(tt) {
      return tt._currentEncoder
    }

    function Ke(tt) {
      return tt.createBindGroupLayout({
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
    const he = "greater-equal",
      ve = 2e5,
      We = 1e5,
      Se = new WeakMap;

    function ce(tt, et) {
      let Vt = Se.get(tt);
      if (!Vt) {
        Vt = {
          module: tt.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Se.set(tt, Vt)
      }
      const Ot = `${et._colorFormat}|${et._depthStencilFormat}|${et._sampleCount}`;
      let qt = Vt.pipelines.get(Ot);
      if (!qt) {
        var Dt;
        const {
          module: mt
        } = Vt;
        qt = tt.createRenderPipeline({
          label: `placeholder ${Ot}`,
          layout: tt.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: mt,
            entryPoint: "v"
          },
          fragment: {
            module: mt,
            entryPoint: "f",
            targets: [{
              format: null !== (Dt = et._colorFormat) && void 0 !== Dt ? Dt : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: et._depthStencilFormat ? {
            format: et._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: et._sampleCount
          }
        }), Vt.pipelines.set(Ot, qt)
      }
      return qt
    }

    function Re(tt, et, Vt) {
      const Ot = et.eye,
        qt = et.viewMatrix;
      tt[0] = Ot[0] + qt[2] * Vt, tt[1] = Ot[1] + qt[6] * Vt, tt[2] = Ot[2] + qt[10] * Vt
    }
    var Ie = Vt(38215),
      Pe = Vt(41848),
      Ze = Vt(37448);
    const Le = Math.PI,
      Fe = Le / 1.95,
      ke = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Ge = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((tt => {
        let [et, Vt] = tt;
        return .434 * Le * Math.pow(2 * Le / et, 2) * Vt
      }));

    function ze(tt, et, Vt) {
      const {
        up: Ot,
        mieDirectionalG: qt
      } = tt, Dt = 1 - Ue(1 - Math.exp(et[1] / 45e4), 0, 1), mt = tt.rayleigh - (1 - Dt), dt = Math.hypot(et[0], et[1], et[2]), jt = dt > 0 ? 1 / dt : 0, Ht = Vt.sunDir;
      for (let Et = 0; Et < 3; Et++) Ht[Et] = et[Et] * jt;
      const Xt = Ht[0] * Ot[0] + Ht[1] * Ot[1] + Ht[2] * Ot[2],
        Qt = 1e3 * Math.max(0, 1 - Math.exp(-(Fe - Math.acos(Ue(Xt, -1, 1))) / 1.5));
      Vt.sunE = Qt;
      const lt = .2 * tt.turbidity * 1e-17 * tt.mieCoefficient;
      for (let Et = 0; Et < 3; Et++) {
        const tt = ke[Et] * mt,
          et = Ge[Et] * lt,
          Ot = Qt / (tt + et);
        Vt.inScatterR[Et] = tt * Ot, Vt.inScatterM[Et] = et * Ot, Vt.extinctionBeta[Et] = 8400 * tt + 1250 * et
      }
      return Vt.sunsetMix = Ue(Math.pow(1 - Xt, 5), 0, 1), Vt.sunDiscE = 19e3 * Qt, Vt.mieScale = (1 - qt * qt) / (4 * Le), Vt.mieBase = 1 + qt * qt, Vt.mieSlope = 2 * qt, Vt
    }
    const oe = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const re = 1 / function(tt) {
      const {
        A: et,
        B: Vt,
        C: Ot,
        D: qt,
        E: Dt,
        F: mt
      } = oe;
      return (tt * (et * tt + Ot * Vt) + qt * Dt) / (tt * (et * tt + Vt) + qt * mt) - Dt / mt
    }(1e3);

    function Ue(tt, et, Vt) {
      return Math.min(Math.max(tt, et), Vt)
    }
    const Ae = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function ie(tt, et) {
      const Vt = new Map(et),
        Ot = [],
        qt = [],
        Dt = () => 0 === qt.length || qt[qt.length - 1].active;
      let mt = null;
      const dt = () => {
        const tt = [...Vt].filter((tt => {
            let [, et] = tt;
            return !0 !== et
          })),
          et = tt.map((tt => {
            let [et] = tt;
            return et
          })).join("|");
        mt = tt.length ? new RegExp(`\\b(${et})\\b`, "g") : null
      };
      dt();
      for (const jt of tt.split("\n")) {
        const tt = Ae.exec(jt);
        if (!tt) {
          Dt() && Ot.push(mt ? Ye(jt, mt, Vt) : jt);
          continue
        }
        const et = tt[1],
          Ht = tt[2].trim();
        if ("ifdef" === et || "ifndef" === et || "if" === et) {
          const tt = Dt(),
            Ot = "if" === et ? Be(Ht, Vt) : Vt.has(Ht) === ("ifdef" === et);
          qt.push({
            active: tt && Ot,
            parentActive: tt,
            taken: Ot
          })
        } else if ("elif" === et || "else" === et) {
          const tt = qt[qt.length - 1];
          if (!tt) throw new Error(`#${et} without #if`);
          const Ot = !tt.taken && ("else" === et || Be(Ht, Vt));
          tt.active = tt.parentActive && Ot, tt.taken = tt.taken || Ot
        } else if ("endif" === et) {
          if (!qt.pop()) throw new Error("#endif without #if")
        } else if (Dt()) {
          const [tt, ...Ot] = Ht.split(/\s+/);
          "undef" === et ? Vt.delete(tt) : Vt.set(tt, !Ot.length || Ot.join(" ")), dt()
        }
      }
      if (qt.length) throw new Error("Unterminated #if");
      return Ot.join("\n")
    }

    function Ye(tt, et, Vt) {
      return tt.replace(et, (tt => {
        const et = Vt.get(tt);
        return "string" === typeof et ? et : tt
      }))
    }

    function Be(tt, et) {
      var Vt;
      const Ot = null !== (Vt = tt.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Vt ? Vt : [];
      let qt = 0;
      const Dt = () => Ot[qt],
        mt = () => Ot[qt++],
        dt = tt => {
          const Vt = /^\d/.test(tt) ? tt : et.get(tt);
          return "string" === typeof Vt ? parseInt(Vt) : Number.NaN
        },
        jt = () => {
          const tt = mt();
          if ("!" === tt) return !jt();
          if ("(" === tt) {
            const tt = Xt();
            return mt(), tt
          }
          if ("defined" === tt) {
            const tt = "(" === Dt();
            tt && mt();
            const Vt = mt();
            return tt && mt(), et.has(Vt)
          }
          const Vt = Dt();
          if ("==" === Vt || "!=" === Vt || ">" === Vt || "<" === Vt || ">=" === Vt || "<=" === Vt) {
            mt();
            const et = dt(tt),
              Ot = dt(mt());
            if (Number.isNaN(et) || Number.isNaN(Ot)) return !1;
            switch (Vt) {
              case "==":
                return et === Ot;
              case "!=":
                return et !== Ot;
              case ">":
                return et > Ot;
              case "<":
                return et < Ot;
              case ">=":
                return et >= Ot;
              default:
                return et <= Ot
            }
          }
          return et.has(tt)
        },
        Ht = () => {
          let tt = jt();
          for (;
            "&&" === Dt();) {
            mt();
            const et = jt();
            tt = tt && et
          }
          return tt
        },
        Xt = () => {
          let tt = Ht();
          for (;
            "||" === Dt();) {
            mt();
            const et = Ht();
            tt = tt || et
          }
          return tt
        },
        Qt = Xt();
      if (qt !== Ot.length) throw new Error(`Cannot evaluate #if ${tt}`);
      return Qt
    }
    var pe = Vt(37440),
      xe = Vt(37773),
      Te = Vt(37777),
      ge = Vt(40892),
      se = Vt(38975);
    const ne = 32,
      tV = [10, 3, 10],
      eV = [21, 7, 21],
      VV = eV[0] * eV[1] * eV[2],
      OV = 0,
      qV = 1,
      DV = 2,
      mV = 3,
      dV = 64,
      jV = 512,
      HV = 4 * VV,
      XV = 1536,
      QV = HV + VV * XV,
      lV = 1073741824,
      EV = QV + 1;

    function fV(tt, et) {
      const Vt = tt % et;
      return Vt < 0 ? Vt + et : Vt
    }

    function wV(tt, et, Vt) {
      return Ot = fV(tt, eV[0]), qt = fV(et, eV[1]), Dt = fV(Vt, eV[2]), Ot + eV[0] * (qt + eV[1] * Dt);
      var Ot, qt, Dt
    }

    function yV(tt, et, Vt) {
      return tt + 8 * (et + 8 * Vt)
    }

    function NV(tt, et, Vt) {
      return tt + 4 * (et + 4 * Vt)
    }
    const aV = 65535,
      MV = 0,
      bV = 1,
      JV = 2,
      CV = 3;

    function uV(tt) {
      return Math.ceil(tt * tt / 32)
    }
    const KV = 8192,
      hV = 1 << 18,
      vV = 65536,
      WV = 294912,
      SV = 128,
      cV = 4096,
      RV = 16,
      IV = 16385,
      PV = 81921,
      ZV = 147457,
      LV = 4194304;
    const FV = [0, 0, 0],
      kV = [0, 0, 0];

    function GV(tt, et, Vt, Ot) {
      ! function(tt, et, Vt) {
        const [Ot, qt, Dt] = [tt[0], tt[1], tt[2]];
        let mt, dt, jt;
        Math.abs(qt) < .99 ? (mt = Dt, dt = 0, jt = -Ot) : (mt = -qt, dt = Ot, jt = 0);
        const Ht = Math.hypot(mt, dt, jt);
        et[0] = mt / Ht, et[1] = dt / Ht, et[2] = jt / Ht, Vt[0] = qt * et[2] - Dt * et[1], Vt[1] = Dt * et[0] - Ot * et[2], Vt[2] = Ot * et[1] - qt * et[0]
      }(Ot, FV, kV);
      const qt = 1 / 32;
      for (const [Dt, mt] of [
          [0, FV],
          [4, kV]
        ]) {
        for (let Vt = 0; Vt < 3; Vt++) tt[et + Dt + Vt] = mt[Vt] * qt;
        tt[et + Dt + 3] = -(mt[0] * Vt[0] + mt[1] * Vt[1] + mt[2] * Vt[2]) * qt
      }
    }
    class zV {
      constructor() {
        this.words = new Uint32Array(ZV), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      XE(tt, et) {
        this.parts = 0, this.refs = 0, this.view = tt, this.viewAt = et;
        const Vt = tt[et + 1] * tt[et + 6] - tt[et + 2] * tt[et + 5],
          Ot = tt[et + 2] * tt[et + 4] - tt[et] * tt[et + 6],
          qt = tt[et] * tt[et + 5] - tt[et + 1] * tt[et + 4],
          Dt = Math.hypot(Vt, Ot, qt) || 1;
        this.light[0] = Vt / Dt, this.light[1] = Ot / Dt, this.light[2] = qt / Dt
      }
      add(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= cV || ! function(tt, et, Vt) {
            const Ot = tt[et],
              qt = tt[et + 1],
              Dt = tt[et + 2],
              mt = tt[et + 3],
              dt = tt[et + 4],
              jt = tt[et + 5],
              Ht = tt[et + 6],
              Xt = tt[et + 7],
              Qt = tt[et + 8],
              lt = tt[et + 9],
              Et = tt[et + 10],
              ft = tt[et + 11],
              wt = tt[et + 12],
              yt = tt[et + 13],
              Nt = tt[et + 14],
              Mt = tt[et + 15],
              bt = Ot * jt - qt * dt,
              Jt = Ot * Ht - Dt * dt,
              Ct = Ot * Xt - mt * dt,
              ut = qt * Ht - Dt * jt,
              Kt = qt * Xt - mt * jt,
              ht = Dt * Xt - mt * Ht,
              vt = Qt * yt - lt * wt,
              Wt = Qt * Nt - Et * wt,
              St = Qt * Mt - ft * wt,
              ct = lt * Nt - Et * yt,
              Rt = lt * Mt - ft * yt,
              It = Et * Mt - ft * Nt,
              Pt = bt * It - Jt * Rt + Ct * ct + ut * St - Kt * Wt + ht * vt;
            if (!(Math.abs(Pt) > 1e-12)) return !1;
            const Zt = 1 / Pt;
            return Vt[0] = (jt * It - Ht * Rt + Xt * ct) * Zt, Vt[1] = (Dt * Rt - qt * It - mt * ct) * Zt, Vt[2] = (yt * ht - Nt * Kt + Mt * ut) * Zt, Vt[3] = (Et * Kt - lt * ht - ft * ut) * Zt, Vt[4] = (Ht * St - dt * It - Xt * Wt) * Zt, Vt[5] = (Ot * It - Dt * St + mt * Wt) * Zt, Vt[6] = (Nt * Ct - wt * ht - Mt * Jt) * Zt, Vt[7] = (Qt * ht - Et * Ct + ft * Jt) * Zt, Vt[8] = (dt * Rt - jt * St + Xt * vt) * Zt, Vt[9] = (qt * St - Ot * Rt - mt * vt) * Zt, Vt[10] = (wt * Kt - yt * Ct + Mt * bt) * Zt, Vt[11] = (lt * Ct - Qt * Kt - ft * bt) * Zt, Vt[12] = (jt * Wt - dt * ct - Ht * vt) * Zt, Vt[13] = (Ot * ct - qt * Wt + Dt * vt) * Zt, Vt[14] = (yt * Jt - wt * ut - Nt * bt) * Zt, Vt[15] = (Qt * ut - lt * Jt + Et * bt) * Zt, !0
          }(et, Vt, this.inverse)) return;
        const {
          view: Ot,
          viewAt: qt
        } = this, Dt = Vt;
        let mt = 1 / 0,
          dt = 1 / 0,
          jt = -1 / 0,
          Ht = -1 / 0,
          Xt = -1 / 0;
        const [Qt, lt, Et] = this.light;
        for (let Ct = 0; Ct < 8; Ct++) {
          const Vt = 1 & Ct ? tt.hi[0] : tt.lo[0],
            ft = 2 & Ct ? tt.hi[1] : tt.lo[1],
            wt = 4 & Ct ? tt.hi[2] : tt.lo[2],
            yt = Vt * et[Dt] + ft * et[Dt + 4] + wt * et[Dt + 8] + et[Dt + 12],
            Nt = Vt * et[Dt + 1] + ft * et[Dt + 5] + wt * et[Dt + 9] + et[Dt + 13],
            Mt = Vt * et[Dt + 2] + ft * et[Dt + 6] + wt * et[Dt + 10] + et[Dt + 14],
            bt = Ot[qt] * yt + Ot[qt + 1] * Nt + Ot[qt + 2] * Mt + Ot[qt + 3],
            Jt = Ot[qt + 4] * yt + Ot[qt + 5] * Nt + Ot[qt + 6] * Mt + Ot[qt + 7];
          mt = Math.min(mt, bt), dt = Math.min(dt, Jt), jt = Math.max(jt, bt), Ht = Math.max(Ht, Jt), Xt = Math.max(Xt, Qt * yt + lt * Nt + Et * Mt)
        }
        if (jt < -1 || Ht < -1 || mt >= 1 || dt >= 1) return;
        const ft = this.parts++,
          wt = this.rects;
        wt[4 * ft] = oV(mt), wt[4 * ft + 1] = oV(dt), wt[4 * ft + 2] = oV(jt), wt[4 * ft + 3] = oV(Ht);
        const yt = this.inverse,
          {
            cell: Nt,
            dims: Mt,
            lo: bt
          } = tt,
          Jt = PV + ft * RV;
        for (let Ct = 0; Ct < 3; Ct++) this.floats[Jt + 4 * Ct] = yt[Ct] / Nt, this.floats[Jt + 4 * Ct + 1] = yt[4 + Ct] / Nt, this.floats[Jt + 4 * Ct + 2] = yt[8 + Ct] / Nt, this.floats[Jt + 4 * Ct + 3] = (yt[12 + Ct] - bt[Ct]) / Nt;
        this.words[Jt + 12] = tt.at, this.floats[Jt + 13] = Xt + .001 * (1 + Math.abs(Xt)), this.words[Jt + 14] = Mt[0] | Mt[1] << 8 | Mt[2] << 16
      }
      finish() {
        const tt = SV,
          {
            counts: et,
            rects: Vt,
            words: Ot
          } = this;
        et.fill(0);
        let qt = 0,
          Dt = 0;
        for (; Dt < this.parts; Dt++) {
          const Ot = 4 * Dt,
            mt = (Vt[Ot + 2] - Vt[Ot] + 1) * (Vt[Ot + 3] - Vt[Ot + 1] + 1);
          if (qt + mt > 65536) break;
          qt += mt;
          for (let qt = Vt[Ot + 1]; qt <= Vt[Ot + 3]; qt++)
            for (let Dt = Vt[Ot]; Dt <= Vt[Ot + 2]; Dt++) et[qt * tt + Dt]++
        }
        let mt = 0;
        for (let jt = 0; jt < 16384; jt++) Ot[jt] = mt, mt += et[jt], et[jt] = Ot[jt];
        Ot[16384] = mt;
        for (let jt = 0; jt < Dt; jt++) {
          const qt = 4 * jt;
          for (let Dt = Vt[qt + 1]; Dt <= Vt[qt + 3]; Dt++)
            for (let mt = Vt[qt]; mt <= Vt[qt + 2]; mt++) Ot[IV + et[Dt * tt + mt]++] = jt
        }
        const dt = this.floats;
        for (let jt = 0; jt < 16384; jt++) {
          const tt = IV + Ot[jt],
            et = tt + Math.min(Ot[jt + 1] - Ot[jt], 64);
          for (let Vt = tt + 1; Vt < et; Vt++) {
            const et = Ot[Vt],
              qt = dt[81934 + et * RV];
            let Dt = Vt - 1;
            for (; Dt >= tt && dt[81934 + Ot[Dt] * RV] < qt; Dt--) Ot[Dt + 1] = Ot[Dt];
            Ot[Dt + 1] = et
          }
        }
        this.refs = qt
      }
    }

    function oV(tt) {
      return Math.min(127, Math.max(0, Math.floor((.5 * tt + .5) * SV)))
    }

    function rV(tt, et, Vt, Ot, qt) {
      for (let Dt = 0; Dt < 4; Dt++)
        for (let mt = 0; mt < 4; mt++) qt[4 * Dt + mt] = tt[et + 4 * Dt] * Vt[Ot + mt] + tt[et + 4 * Dt + 1] * Vt[Ot + 4 + mt] + tt[et + 4 * Dt + 2] * Vt[Ot + 8 + mt] + tt[et + 4 * Dt + 3] * Vt[Ot + 12 + mt]
    }

    function UV(tt, et, Vt, Ot, qt) {
      const Dt = tt[0] - et,
        mt = tt[1] - Vt,
        dt = tt[2] - Ot,
        jt = tt[3] - et,
        Ht = tt[4] - Vt,
        Xt = tt[5] - Ot,
        Qt = tt[6] - et,
        lt = tt[7] - Vt,
        Et = tt[8] - Ot;
      if (Math.min(Dt, jt, Qt) > qt || Math.max(Dt, jt, Qt) < -qt) return !1;
      if (Math.min(mt, Ht, lt) > qt || Math.max(mt, Ht, lt) < -qt) return !1;
      if (Math.min(dt, Xt, Et) > qt || Math.max(dt, Xt, Et) < -qt) return !1;
      const ft = jt - Dt,
        wt = Ht - mt,
        yt = Xt - dt,
        Nt = Qt - jt,
        Mt = lt - Ht,
        bt = Et - Xt,
        Jt = wt * bt - yt * Mt,
        Ct = yt * Nt - ft * bt,
        ut = ft * Mt - wt * Nt;
      if (Math.abs(Jt * Dt + Ct * mt + ut * dt) > qt * (Math.abs(Jt) + Math.abs(Ct) + Math.abs(ut))) return !1;
      const Kt = [ft, wt, yt, Nt, Mt, bt, Dt - Qt, mt - lt, dt - Et];
      for (let ht = 0; ht < 3; ht++) {
        const tt = Kt[3 * ht],
          et = Kt[3 * ht + 1],
          Vt = Kt[3 * ht + 2];
        for (let Ot = 0; Ot < 3; Ot++) {
          const ft = 0 === Ot ? 0 : 1 === Ot ? Vt : -et,
            wt = 0 === Ot ? -Vt : 1 === Ot ? 0 : tt,
            yt = 0 === Ot ? et : 1 === Ot ? -tt : 0,
            Nt = ft * Dt + wt * mt + yt * dt,
            Mt = ft * jt + wt * Ht + yt * Xt,
            bt = ft * Qt + wt * lt + yt * Et,
            Jt = qt * (Math.abs(ft) + Math.abs(wt) + Math.abs(yt));
          if (Math.min(Nt, Mt, bt) > Jt || Math.max(Nt, Mt, bt) < -Jt) return !1
        }
      }
      return !0
    }
    const AV = new Float32Array(1);
    new Uint32Array(AV.buffer);
    var iV = Vt(38977);

    function YV(tt) {
      const [et, Vt, Ot] = iV.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${tt.group}) @binding(${tt.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${et-1}, ${Vt-1}, ${Ot-1});\n}\n`
    }

    function BV(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [qt, Dt, mt] = eV, [dt, jt, Ht] = tV, Xt = Math.log2(ne), Qt = Ot ? "var<private> bloxdSpCrossed: bool;\n" : "", lt = Ot ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${tt.group}) @binding(${tt.hl}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${tt.group}) @binding(${tt.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Vt?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Qt}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${bV}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${JV}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Vt?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${CV}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${qt}, ${Dt}, ${mt});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${qt} * (s.y + ${Dt} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${dt}, ${jt}, ${Ht}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Xt}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${mV}u) {\n\t\treturn named && state == ${DV}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${HV}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${QV}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${et?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${et?`\t\tif (exits && step > 0 && step % ${TV} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Xt}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${OV}u || kind == ${qV}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${DV}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${HV}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${lt}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const pV = {
      group: 0,
      uniform: 0,
      hl: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function xV() {
      const tt = pV;
      return `${YV(tt)}${BV(tt,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${iV.e}>,\n}\n@group(${tt.group}) @binding(${tt.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${tt.group}) @binding(${tt.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${iV.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${iV.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${iV.i}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const TV = 2;
    const gV = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function sV(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Ot = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${et.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        qt = "trace" === Vt || "lit" === Vt,
        Dt = "maskEdge" === Vt ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        mt = qt ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${et.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${et.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Vt?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Dt};\n`;
      return `${Ot}${tt.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${qt?function(){const[tt,et,Vt]=iV.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${tt}.0, ${et}.0, ${Vt}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${mt}}\n`:""}${tt.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${et.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${et.renderOffset});\n}\n`:""}`
    }
    const nV = "bloxdSpOwnTexture";

    function tO(tt) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${tt.texture}) - 1u)))`
    }
    const eO = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Ie.e.map((tt=>{let[et,Vt]=tt;return`\tbloxdSpOut.${et} = (bloxdSpWord & ${Vt}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function VO(tt) {
      return `bloxdSpFlags(${tt})`
    }
    const OO = `${ge.k}.eyePosition`;

    function qO(tt, et, Vt, Ot, qt) {
      const Dt = tt.indexOf(et);
      if (Dt < 0 || tt.indexOf(et, Dt + 1) >= 0) throw new Error(`Lite's ${qt} program changed at the shader pack ${Ot} hook: ${Dt<0?"no":"more than one"} anchor (lite/${qt}ShaderPack.ts)`);
      return tt.slice(0, Dt) + Vt + tt.slice(Dt + et.length)
    }

    function DO(tt) {
      return tt.sunShadow || tt.airShadow
    }

    function mO(tt, et) {
      return et && DO(tt)
    }
    const dO = {
      group: ge.f,
      ...ge.s
    };

    function jO(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!DO(tt)) return "";
      if (et) {
        const et = dO,
          qt = "trace" === Vt || "lit" === Vt;
        let Dt = "";
        tt.sunShadow && (Dt = qt ? `${BV(et,!0,"lit"===Vt)}${Ot=et,`@group(${Ot.group}) @binding(${Ot.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Ot.group}) @binding(${Ot.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(tt, et, Vt) {
          const Ot = `@group(${tt}) @binding(${et}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Vt ? `${Ot}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${gV}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((tt=>`\t{\n\t\tlet o = vec2i(${tt});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Ot
        }(et.group, ge.t, "maskEdge" === Vt));
        const mt = {
          shadowDirection: `${ge.k}.shadowDirection`,
          renderOffset: `${ge.k}.renderOffset`,
          eyePosition: `${ge.k}.eyePosition`
        };
        return `${YV(et)}${Dt}${function(tt){const[et,Vt,Ot]=iV.o;return`@group(${tt.group}) @binding(${tt.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${tt.group}) @binding(${tt.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${et}.0, ${Vt}.0, ${Ot}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(et)}${sV(tt,mt,Vt)}`
      }
      var Ot;
      return `${tt.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${tt.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function HO(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!et) return "";
      const Dt = (mt = "fragmentInputs.vPositionW", dt = tt.sunShadow ? {
        normal: Vt,
        flags: Ot
      } : null, `\n\tbloxdSpShadowPosition = ${mt};\n${dt?`\tbloxdSpShadowNormal = normalize(${dt.normal});\n\tbloxdSpShadowEmissive = (${dt.flags} & ${Ie.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${dt.flags} & ${Ie.i}u) != 0u;\n`:""}`);
      var mt, dt;
      return tt.sunShadow && ("mask" === qt || "maskEdge" === qt) ? `${Dt}${jt="fragmentInputs.position",Ht="maskEdge"===qt,`\n\tbloxdSpShadowPixel = vec2i(${jt}.xy);\n${Ht?`\tbloxdSpShadowZ = ${jt}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${jt}.z), dpdy(${jt}.z));\n`:""}`}` : Dt;
      var jt, Ht
    }
    const XO = "bloxdSpTextureRotation",
      QO = "bloxdSpTextureLayers",
      lO = `@group(${ge.f}) @binding(${ge.v}) var<storage, read> ${QO}: array<u32>;\n`;

    function EO(tt) {
      return `\tvertexOutputs.vPackTexture = ${QO}[min(u32(${tt}), arrayLength(&${QO}) - 1u)];\n`
    }

    function fO(tt) {
      return void 0 !== tt.uv
    }

    function wO(tt) {
      if (!tt) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (fO(tt)) return function(tt) {
        const {
          texture: et,
          cells: Vt,
          layers: Ot
        } = tt, qt = `textureDimensions(${et}, bloxdSpLevel)`, Dt = Vt ? `max(vec2u(vec2f(${qt}) / ${Vt}), vec2u(1u))` : qt, mt = Vt ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Dt};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Vt}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Vt}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${et}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${qt} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Dt};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${et}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let dt;
        if (Vt)
          if (1 === Ot.length) dt = `\treturn bloxdSpOwnTexel(${Ot[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const tt = Ot.length - 1;
            dt = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Ot[tt]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let et = tt - 1; et >= 0; et--) dt += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Ot[et]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            dt += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else dt = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${tt.id?`var<private> ${nV}: u32;\n`:""}${mt}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${tO(tt)};\n\treturn ${Dt};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${tt.id?nV:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${tO(tt)};\n${dt}}\n`
      }(tt);
      const et = tt,
        Vt = tt => {
          const Vt = tt > 0 ? `bloxdSpLayer - ${et.layers*tt}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${tt}, ${et.sampler}, bloxdSpTurned, ${Vt}, round(bloxdSpMipLevel));`
        };
      let Ot = "";
      for (let Dt = 0; Dt < et.count - 1; Dt++) Ot += `\tif (bloxdSpLayer < ${et.layers*(Dt+1)}u) {\n\t\t${Vt(Dt)}\n\t}\n`;
      const qt = et.frame ? `${et.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${XO}: u32;\n${lO}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${XO} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${XO} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${XO} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${qt}${Ot}\t${Vt(et.count-1)}\n}\n`
    }

    function yO(tt, et, Vt) {
      return !!tt.surface && "bloxdDefaultSurface" !== tt.surface && function(tt, et) {
        return "liquid" === et || !tt
      }(et, Vt)
    }

    function NO(tt, et) {
      return tt.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${et.vertexLocalPosition}, ${VO(et.vertexFlags)});\n\t\tlet bloxdSpVertex = ${tt.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function aO(tt, et, Vt, Ot, qt) {
      if (!tt.surface) return "";
      const Dt = (tt, et) => `\n\tlet bloxdSpTexelUV = ${tt};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${et}) - 1u));`;
      let mt = "",
        dt = "0u, 0u, vec2f(0.0), 0.0";
      const jt = Ot && fO(Ot) ? Ot : null,
        Ht = Ot && !fO(Ot) ? Ot : null;
      if (jt) {
        mt = `${jt.id?`\n\tlet bloxdSpTexture = ${jt.id};\n\t${nV} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${jt.uv};${Dt(function(tt,et){var Vt;return`${null!==(Vt=tt.levelUv)&&void 0!==Vt?Vt:tt.cells?`${et} / ${tt.cells}`:et} * vec2f(textureDimensions(${tt.texture}))`}(jt,"bloxdSpUv"),jt.texture)}`, dt = (jt.id ? `${nV}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Ht && (mt = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${XO} = bloxdSpTexture >> 16u;${Dt(`fragmentInputs.vMainUV1 * ${(0,pe.gb)(Ht.width)}`,"textureAtlas0")}`, dt = `bloxdSpTexture & 0xffffu, ${XO}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Xt = qt.overlayColour,
        Qt = Xt ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        lt = "bloxdDefaultSurface" !== tt.surface || Xt ? `\n\tbaseColor = vec4f(${Qt}, baseColor.a);` : "",
        Et = yO(tt, et, Vt) ? `\n\t${qt.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${mt}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${qt.alpha}, ${qt.enchantTier}, ${qt.enchantColour}, ${qt.enchantSpeed}, ${null!==Xt&&void 0!==Xt?Xt:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${qt.normal}, ${qt.localPosition}, ${VO(qt.flags)}, ${dt});\n\tlet bloxdSpSurface = ${tt.surface}(bloxdSpSurfaceIn);${lt}${Et}\n`
    }
    const MO = "bloxdSpLightIn";

    function bO(tt, et, Vt, Ot) {
      if (!tt.light) return "";
      const qt = et ? `${pe.g}.rgb, ${pe.g}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${pe.f}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Dt,
          diffuse: mt,
          emissive: dt,
          ambient: jt,
          fogColour: Ht,
          fogAlpha: Xt,
          normal: Qt
        } = Ot;
      return `\tvar ${MO} = BloxdLightIn(vec3f(0.0), ${Vt?Dt:"0.0"}, ${mt}, ${dt}, ${jt}, ${qt}, ${Ht}, ${Xt}, fragmentInputs.vPositionW, ${Qt}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${MO}.litColour = bloxdLitColour(bloxdSpSurface, ${MO});\n`
    }

    function JO(tt) {
      return tt.light ? `\n\t{\n\t\tlet bloxdSpLight = ${tt.light}(bloxdSpSurface, ${MO});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const CO = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      uO = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      KO = "\treturn color;\n}",
      hO = {
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
        overlayColour: null
      };
    const vO = Object.freeze({});

    function WO(tt) {
      var et;
      return !(null === (et = (0, se.g)(tt)) || void 0 === et || !et.sceneDepth)
    }

    function SO(tt) {
      const et = (0, se.g)(tt);
      return !!et && yO(et.hooks, et.strict, et.program)
    }

    function cO(tt, et, Vt, Ot) {
      return qO(tt, et, Vt, Ot, "terrain")
    }

    function RO(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Dt = function(tt) {
          return (0, se.e)(tt.packVariant, tt.liquid ? "liquid" : "terrain")
        }(tt),
        {
          hooks: mt
        } = Dt,
        dt = mO(Dt, Ot),
        jt = "edge" === qt ? "maskEdge" : "plain" === qt ? "mask" : "trace",
        Ht = NO(mt, hO);
      Ht && (et = cO(et, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Ht}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Xt = "atlas" === tt.texture ? {
          count: tt.atlasCount,
          layers: tt.atlasLayers,
          width: tt.E1,
          sampler: "atlasSampler",
          frame: tt.animated ? Vt : null
        } : null,
        Qt = `${Dt.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${HO(Dt,dt,hO.normal,hO.flags,jt)}${aO(mt,Dt.strict,Dt.program,Xt,hO)}`;
      Qt && (et = cO(et, CO, `${CO.slice(0,-1)}${Qt}`, "surface"));
      const lt = JO(mt);
      return lt && (et = cO(et, uO, `${bO(mt,tt.lighting,tt.dirLightCount>0,hO)}${uO}`, "light input"), et = cO(et, KO, `${lt.slice(1)}${KO}`, "light")), `${(0,ge.A)()}${Dt.sceneDepth?`@group(${ge.f}) @binding(${ge.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${OO};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${jO(Dt,dt,jt)}${wO(Xt)}${eO}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Dt.code}${et}`
    }
    const IO = ut.c.WGSL;

    function PO(tt) {
      return void 0 !== tt.packVariant
    }
    const ZO = {
        hqt: 0,
        vqt: 4,
        Wqt: 8,
        Sqt: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      LO = ZO.aoLevels + 4,
      FO = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      kO = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      GO = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      zO = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      oO = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      rO = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      UO = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      AO = 0,
      iO = 3,
      YO = 4,
      BO = 5,
      pO = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${xe.c}, ${xe.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${xe.c}, ${xe.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      xO = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((tt=>Te.c>>tt&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const TO = {
      BQ: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: tt => `animDataPerTex[${tt}]`
    };

    function gO(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TO;
      return `\n\tlet atlasIdxIn = ${tt};\n\tlet animTick = ${Vt.BQ};\n\tlet animTickStride = ${Vt.stride};\n\tlet numAnimTextures = ${Vt.count};\n\t${(0,Kt.f)(ut.c.WGSL,Vt.perTexture)}\n\t${et}animLayer;\n`
    }

    function sO(tt) {
      const et = (et, Vt) => {
        const Ot = et > 0 ? `fragmentInputs.texAtlasIndex - ${tt.atlasLayers.toFixed(1)} * ${et.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Vt?"textureSampleLevel":"textureSample"}(textureAtlas${et}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Ot}))${Vt?", atlasLod":""})`
      };
      if (1 === tt.atlasCount) return `baseColor = ${et(0,!1)};`;
      let Vt = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,pe.gb)(tt.E1)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Ot = 0; Ot < tt.atlasCount; Ot++) {
        const qt = tt.atlasLayers * (Ot + 1) - .5;
        Vt += `${Ot>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,pe.gb)(qt)}) {\n\t\tbaseColor = ${et(Ot,!0)};\n\t}`
      }
      return Vt
    }

    function nO(tt) {
      return `terrain-${tt.texture}${"atlas"===tt.texture?tt.atlasCount:""}${tt.animated?"-anim":""}${tt.alphaTest?"-test":""}${tt.lighting?"-lit":""}-dir${tt.dirLightCount}${tt.packed?"-packed":""}${PO(tt)?`-sp${tt.packVariant}`:""}${tt.liquid?"-liquid":""}${tt.resting?"-rest":""}`
    }

    function tq(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Ot = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Vt = "none" !== tt.texture,
          Ot = "atlas" === tt.texture,
          qt = tt.dirLightCount > 0,
          Dt = PO(tt);
        if (tt.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${tt.dirLightCount}`);
        let mt = 1,
          dt = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Ot) {
          tt.animated && (dt += `@group(2) @binding(${mt++}) var<storage, read> animDataPerTex: array<f32>;\n`), dt += `@group(2) @binding(${mt++}) var atlasSampler: sampler;\n`;
          for (let et = 0; et < tt.atlasCount; et++) dt += `@group(2) @binding(${mt++}) var textureAtlas${et}: texture_2d_array<f32>;\n`
        } else "single" === tt.texture && (dt += `@group(2) @binding(${mt++}) var diffuseSamplerSampler: sampler;\n`, dt += `@group(2) @binding(${mt++}) var diffuseSampler: texture_2d<f32>;\n`);
        const jt = function(tt) {
            const et = UO,
              Vt = "none" !== tt.texture,
              Ot = "atlas" === tt.texture,
              qt = PO(tt);
            return tt.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Vt?"uv: vec2f,":""}\n\t${Ot?"texAtlasIndices: f32,":""}\n\t${tt.lighting?"aPackedLightLevels: f32,":""}\n\t${qt?"blockFlagWords: vec2u,":""}\n}\n${pO}\n${xO}\n${"single"===tt.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Vt?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===tt.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Ot?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${tt.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${qt?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${et.position}) position: vec3f,\n\t@location(${et.normal}) normal: vec4f,\n\t@location(${et.color}) color: vec4f,\n\t${Vt?`@location(${et.uv}) uv: vec2f,`:""}\n\t${tt.lighting?`@location(${et.packedLight}) aPackedLightLevels: f32,`:""}\n\t${qt?`@location(${et.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(tt),
          Ht = `\n${zO}\n${kO}\n${GO}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${dt}\n${Ne}\n${jt.declarations}\nstruct Varyings {\n\t${"none"===et?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${tt.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${qt?"@location(5) vTerrainLambert: f32,":""}\n\t${Vt?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Ot?"@location(7) texAtlasIndex: f32,":""}\n\t${tt.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Dt?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Dt&&Ot?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${tt.resting?"":(0,pe.n)(IO)}\n${rO}\n\n@vertex\nfn mainVertex(${jt.parameter}) -> Varyings {\n\t${jt.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Dt?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Ie.b.placed}u;`:""}\n\t${Dt&&Ot?EO("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${tt.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Vt?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Ot?function(tt){return tt?gO("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(tt.animated):""}\n\t${"single"===tt.texture&&tt.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,pe.S)(IO)}\n\t${(0,pe.C)(IO,tt.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${tt.resting?"":oO}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Ot?sO(tt):""}\n\t${"single"===tt.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Vt?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${tt.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${qt?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${ye}));\n\t${PO(tt)?(0,pe.cb)(ut.c.WGSL):(0,pe.J)(IO)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Xt = new Set;
        tt.lighting && Xt.add("BLOXD_LIGHTING");
        qt && Xt.add("BLOXD_TERRAIN_DIRECTIONAL");
        return ie(Ht, new Map([...Xt].map((tt => [tt, !0]))))
      }(tt, Vt);
      if (!PO(tt)) return Ot;
      const qt = RO(tt, Ot, gO, et, Vt);
      return "none" === Vt ? qt : `${qt}${function(tt){const et="none"!==tt.texture&&tt.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${tt.resting?"":oO}\n\t${tt.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${et&&"atlas"===tt.texture?sO(tt):""}\n\t${et&&"single"===tt.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${et?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Ie.b.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(tt)}`
    }
    const eq = new Map([
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

    function Vq(tt, et) {
      const Vt = new Map;
      let Ot = 0;
      const qt = [],
        Dt = [],
        mt = [];
      for (const Ht of et) {
        var dt, jt;
        const et = null !== (dt = Ht.type.trim().split(/\s+/).pop()) && void 0 !== dt ? dt : Ht.type,
          Xt = eq.get(et);
        if (!Xt) throw new Error(`Lite: no uniform layout for ${Ht.name}: ${Ht.type}`);
        const Qt = null !== (jt = Ht.arraySize) && void 0 !== jt ? jt : 0,
          lt = Qt ? 4 : Xt.align;
        Ot = Math.ceil(Ot / lt) * lt;
        const Et = Qt ? 4 * Math.ceil(Xt.floats / 4) : Xt.floats;
        if (Vt.set(Ht.name, {
            offset: Ot,
            floats: Xt.floats,
            arraySize: Qt,
            stride: Et
          }), Qt && Xt.floats <= 2) {
          const et = `${tt}_${mt.length}_strided`;
          Dt.push(`struct ${et} {\n\t@size(16) el: ${Xt.wgsl},\n}`), mt.push(Ht.name), qt.push(`\t@align(16) ${Ht.name}: array<${et}, ${Qt}>,`)
        } else Qt ? qt.push(`\t@align(16) ${Ht.name}: array<${Xt.wgsl}, ${Qt}>,`) : qt.push(`\t${Ht.name}: ${Xt.wgsl},`);
        Ot += Qt ? Et * Qt : Xt.floats
      }
      return {
        slots: Vt,
        floats: Math.max(4, 4 * Math.ceil(Ot / 4)),
        wgsl: `${Dt.join("\n")}\nstruct ${tt} {\n${qt.join("\n")}\n}\n`,
        stridedArrays: mt
      }
    }
    const Oq = [{
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
      qq = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Dq = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function mq(tt, et) {
      return `#if defined(${tt}) && ${tt}DIRECTUV == 0\nvarying v${et}UV: vec2f;\n#endif`
    }

    function dq(tt, et, Vt) {
      return `#if defined(${tt}) && ${tt}DIRECTUV == 0\nif (uniforms.v${et}Infos.x==0.)\n{vertexOutputs.v${et}UV= (uniforms.${Vt}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${et}UV= (uniforms.${Vt}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function jq(tt, et, Vt) {
      return `#ifdef ${tt}\n#if ${tt}DIRECTUV == 1\n#define v${et}UV vMainUV1\n#elif ${tt}DIRECTUV == 2\n#define v${et}UV vMainUV2\n#else\nvarying v${et}UV: vec2f;\n#endif\nvar ${Vt}SamplerSampler: sampler;\nvar ${Vt}Sampler: texture_2d<f32>;\n#endif`
    }
    const Hq = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Xq = 256,
      Qq = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      lq = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Eq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      fq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      wq = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      yq = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Nq = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      aq = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${lq}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${mq("OPACITY","Opacity")}\n${mq("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Nq}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Eq}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${dq("OPACITY","Opacity","opacity")}\n${dq("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${fq}\n#define CUSTOM_VERTEX_MAIN_END\n${wq}\n}\n`;
    const Mq = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${jq("OPACITY","Opacity","opacity")}\n${jq("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Nq}\n${yq}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((tt,et)=>function(tt){const et=`
    frame.lights[LITE_LIGHT$ {
        tt
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      tt
    }\
    nvar diffuse$ {
      tt
    }: vec4f = $ {
      et
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      tt
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      et
    }.vLightData, diffuse$ {
      tt
    }.rgb, $ {
      et
    }.vLightSpecular.rgb, diffuse$ {
      tt
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(et))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, bq = /^([gimus]+)!/, Jq = new Set;

    function Cq(tt) {
      Jq.has(tt) || (Jq.add(tt), console.warn(`Lite: no place for plugin code at ${tt} in the standard shader: it is left out`))
    }

    function uq(tt, et) {
      let Vt = tt;
      const Ot = new Map;
      for (const [Dt, mt] of et) {
        var qt;
        Ot.set(Dt, `${null!==(qt=Ot.get(Dt))&&void 0!==qt?qt:""}${mt}\n`)
      }
      for (const [Dt, mt] of Ot) {
        if (!Dt.startsWith("!")) {
          const tt = `#define ${Dt}`;
          if (!Vt.includes(tt)) {
            Cq(Dt);
            continue
          }
          Vt = Vt.replace(tt, (() => `\n${mt}\n${tt}`));
          continue
        }
        let tt = Dt.substring(1),
          et = "g";
        if (tt.startsWith("!")) et = "", tt = tt.substring(1);
        else {
          const Vt = bq.exec(tt);
          Vt && (et = Vt[1], tt = tt.substring(et.length + 1))
        }
        const Ot = new RegExp(tt, et.includes("g") ? et : `${et}g`);
        let qt = Ot.exec(Vt);
        for (qt || Cq(Dt); qt;) {
          const tt = qt,
            et = mt.replace(/\$(\d+)/g, ((et, Vt) => Number(Vt) < tt.length ? tt[Number(Vt)] : ""));
          Vt = Vt.substring(0, tt.index) + et + Vt.substring(tt.index + tt[0].length), Ot.lastIndex = tt.index + et.length, qt = Ot.exec(Vt)
        }
      }
      return Vt
    }
    const Kq = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      hq = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      vq = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Wq(tt) {
      const et = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Vt = tt.replace(Kq, ((tt, Vt, Ot, qt, Dt, mt) => ("attribute" === Vt ? et.attributes.push({
        name: Dt,
        type: mt
      }) : void 0 === Vt ? et.varyings.push({
        name: Dt,
        type: mt,
        interpolation: cq(mt, Ot, qt)
      }) : et.uniforms.push({
        name: Dt,
        type: Sq(mt)
      }), "")));
      return Vt = Vt.replace(hq, ((tt, Vt) => (et.samplers.add(Vt), ""))), Vt = Vt.replace(vq, ((tt, Vt, Ot) => (et.textures.push({
        name: Vt,
        type: Ot
      }), ""))), et.body = Vt, et
    }

    function Sq(tt) {
      const et = tt.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Vt = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(et);
      if (!Vt) throw new Error(`Lite: unsupported uniform type ${tt}`);
      return Vt
    }

    function cq(tt, et, Vt) {
      return void 0 === et && void 0 === Vt ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(tt.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === et ? "@interpolate(flat) " : `@interpolate(${null!==et&&void 0!==et?et:"perspective"}, ${null!==Vt&&void 0!==Vt?Vt:"center"}) `
    }

    function Rq(tt) {
      return Lq({
        defines: tt.defines,
        vertex: uq(aq, tt.vertexCode),
        fragment: uq(Mq, tt.fragmentCode),
        members: [...Oq, ...tt.defines.has("OPACITY") ? qq : [], ...tt.defines.has("EMISSIVE") ? Dq : [], ...tt.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Iq(tt) {
      const et = tt.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (et === tt) throw new Error("Lite: fragment main has no return");
      return et
    }
    const Pq = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${lq}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Eq}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${fq}\n${wq}\n}\n`,
      Zq = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${yq}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Lq(tt) {
      const et = tt.defines,
        Vt = Wq(ie(tt.vertex, et)),
        Ot = Wq(ie(tt.fragment, et)),
        qt = new Map;
      for (const bt of [...Vt.varyings, ...Ot.varyings]) qt.has(bt.name) || qt.set(bt.name, bt);
      const Dt = [...qt.values()].map(((tt, et) => `\t@location(${et}) ${tt.interpolation}${tt.name}: ${tt.type},`)),
        mt = [...tt.members];
      for (const bt of [...Vt.uniforms, ...Ot.uniforms]) mt.some((tt => tt.name === bt.name)) || mt.push(bt);
      const dt = Vq(tt.structName, mt),
        jt = [],
        Ht = [];
      let Xt = 1;
      const Qt = new Set;
      for (const bt of [...Vt.textures, ...Ot.textures]) {
        if (Qt.has(bt.name)) continue;
        Qt.add(bt.name);
        const tt = `${bt.name}Sampler`,
          et = Xt++,
          Vt = Xt++,
          Ot = bt.type.startsWith("texture_2d_array") ? "2d-array" : bt.type.startsWith("texture_cube") ? "cube" : "2d";
        jt.push({
          name: bt.name,
          binding: et,
          samplerBinding: Vt,
          dimension: Ot
        }), Ht.push(`@group(2) @binding(${et}) var ${bt.name}: ${bt.type};`), Ht.push(`@group(2) @binding(${Vt}) var ${tt}: sampler;`)
      }
      for (const bt of [...Vt.samplers, ...Ot.samplers])
        if (!Qt.has(bt.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${bt} has no texture`);
      const lt = [zO, Qq, dt.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${tt.structName};`, ...Ht].join("\n"),
        Et = Vt.attributes,
        ft = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Vt.attributes.map(((tt, et) => `\t@location(${et}) ${tt.name}: ${tt.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        wt = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Dt, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        yt = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Ot.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Dt, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Ne, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${ye}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Nt = tt => {
          for (const et of dt.stridedArrays) tt = tt.replace(new RegExp(`\\b${et}\\s*\\[(.*?)\\]`, "g"), `${et}[$1].el`);
          return tt
        };
      return {
        vertex: `${lt}\n${ft}\n${wt}\n${Nt(Vt.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${lt}\n${yt}\n${Iq((Mt=Nt(Ot.body),Mt.includes("fragmentInputs.position")?Mt.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Mt))}`,
        attributes: Et,
        material: dt,
        textures: jt
      };
      var Mt
    }
    const Fq = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      kq = tt => ({
        name: tt,
        type: "vec3"
      }),
      Gq = tt => ({
        name: tt,
        type: "float"
      }),
      zq = Vq("EarthSkyUniforms", [kq("viewFrom"), Gq("exposureScale"), kq("zenithOffset"), Gq("fogOn"), kq("up"), Gq("ditherOn"), kq("sun"), Gq("turbidity"), kq("tint"), Gq("rayleigh"), kq("sunDir"), Gq("mieStrength"), kq("inScatterR"), Gq("mieFocus"), kq("inScatterM"), Gq("sunE"), kq("extinctionBeta"), Gq("sunsetMix"), Gq("mieScale"), Gq("mieBase"), Gq("mieSlope"), Gq("sunDiscE"), Gq("exposure")]),
      oq = `${zO}\n${Qq}\n${zq.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      rq = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Fq.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Uq = `\n${Ne}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(oe).map((tt=>{let[et,Vt]=tt;return`const TONE_${et}: f32 = ${Vt};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${re};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${ye}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Aq = Vt(37331);
    const iq = new Aq.uf,
      Yq = new Aq.uf,
      Bq = new Aq.Quaternion,
      pq = new Float64Array(3),
      xq = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Tq = new Float64Array(16);

    function gq(tt, et, Vt) {
      const Ot = Vt.worldMatrix;
      var qt;
      tt.updateFloat3("viewFrom", Ot[12], Ot[13], Ot[14]), tt.updateFloatsFrom("zenithOffset", et.cameraOffset, 0, 3), tt.updateFloatsFrom("up", et.up, 0, 3), et.luminance > 0 && (tt.updateFloat("exposure", et.luminance), tt.updateFloat("exposureScale", (qt = et.luminance, Math.log2(2 / Math.pow(qt, 4))))), tt.updateFloat("turbidity", et.turbidity), tt.updateFloat("rayleigh", et.rayleigh), tt.updateFloat("mieStrength", et.mieCoefficient), tt.updateFloat("mieFocus", et.mieDirectionalG), tt.updateFloatsFrom("tint", et.tint, 0, 3), tt.updateFloat("fogOn", et.fog && Vt.fogEnabled && 0 !== Vt.fogMode ? 1 : 0), tt.updateFloat("ditherOn", et.dithering ? 1 : 0);
      const Dt = et.sunPosition;
      if (iq.set(Dt[0], Dt[1], Dt[2]), !et.useSunPosition) {
        const tt = Math.PI * (et.inclination - .5),
          Vt = 2 * Math.PI * (et.azimuth - .5);
        iq.set(et.distance * Math.cos(Vt) * Math.cos(tt), et.distance * Math.sin(-tt), et.distance * Math.sin(Vt) * Math.cos(tt)), Aq.Quaternion.FromUnitVectorsToRef(Aq.uf.UpReadOnly, Yq.set(et.up[0], et.up[1], et.up[2]), Bq), iq.rotateByQuaternionToRef(Bq, iq)
      }
      tt.updateVector3("sun", iq), pq[0] = iq.x, pq[1] = iq.y, pq[2] = iq.z;
      const mt = ze(et, pq, xq);
      tt.updateFloatsFrom("sunDir", mt.sunDir, 0, 3), tt.updateFloat("sunE", mt.sunE), tt.updateFloatsFrom("inScatterR", mt.inScatterR, 0, 3), tt.updateFloatsFrom("inScatterM", mt.inScatterM, 0, 3), tt.updateFloatsFrom("extinctionBeta", mt.extinctionBeta, 0, 3), tt.updateFloat("sunsetMix", mt.sunsetMix), tt.updateFloat("sunDiscE", mt.sunDiscE), tt.updateFloat("mieScale", mt.mieScale), tt.updateFloat("mieBase", mt.mieBase), tt.updateFloat("mieSlope", mt.mieSlope)
    }

    function sq(tt, et) {
      const Vt = Tq;
      Vt[0] = et.far, Vt[5] = et.far, Vt[10] = et.far, Vt[15] = 1;
      const Ot = tt.infiniteDistance;
      for (let qt = 0; qt < 3; qt++) Vt[12 + qt] = tt.position[qt] + (Ot ? et.worldMatrix[12 + qt] : 0);
      return Tq
    }
    class nq {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(tt, et, Vt, Ot, qt) {
        Vt !== this.pipeline && (tt.setPipeline(Vt), this.pipeline = Vt), tt.setBindGroup(1, Ot, [qt]);
        const Dt = et.material.bindGroup;
        Dt !== this.materialGroup && (tt.setBindGroup(2, Dt), this.materialGroup = Dt);
        const mt = et.program.packGroup;
        mt && mt !== this.packGroup && (tt.setBindGroup(ge.f, mt), this.packGroup = mt);
        const {
          vertexBuffers: dt,
          vertexOffsets: jt
        } = this;
        for (let Ht = 0; Ht < et.vertexBuffers.length; Ht++) dt[Ht] === et.vertexBuffers[Ht] && jt[Ht] === et.vertexOffsets[Ht] || (tt.setVertexBuffer(Ht, et.vertexBuffers[Ht], et.vertexOffsets[Ht]), dt[Ht] = et.vertexBuffers[Ht], jt[Ht] = et.vertexOffsets[Ht]);
        et.indexBuffer && et.indexBuffer !== this.indexBuffer && (tt.setIndexBuffer(et.indexBuffer, et.indexFormat), this.indexBuffer = et.indexBuffer)
      }
    }
    class tD {
      constructor(tt, et, Vt, Ot) {
        this.modelMeshes = tt, this.R_ = et, this.maker = Vt, this.warnOnce = Ot, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (tt, et) => {
          (et < -1 || et > 1) && this.warnOnce(`group:${et}`, `rendering group ${et} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(tt) {
        this.collectGroup(tt, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(tt, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(tt, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.R_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(eD), this.transparentDraws.sort(VD)
      }
      collectGroup(tt, et, Vt, Ot, qt) {
        const Dt = this.modelMeshes.group(et),
          mt = this.R_.group(et),
          dt = 0 === et ? null === mt || void 0 === mt ? void 0 : mt.opaque : void 0;
        this.collectList(tt, null === Dt || void 0 === Dt ? void 0 : Dt.opaque, dt || null === mt || void 0 === mt ? void 0 : mt.opaque, et, !1, Vt, qt), dt && (this.R_.drawn += this.maker.bundleDraws(tt, dt, et)), this.collectList(tt, null === Dt || void 0 === Dt ? void 0 : Dt.alphaTest, void 0, et, !1, Vt, qt), this.collectList(tt, null === Dt || void 0 === Dt ? void 0 : Dt.transparent, null === mt || void 0 === mt ? void 0 : mt.transparent, et, !0, Ot, qt)
      }
      collectList(tt, et, Vt, Ot, qt, Dt, mt) {
        var dt;
        const jt = Dt.length;
        et && this.maker.pushDraws(tt, et.units, et.units.length, Ot, qt, Dt, et.rows), Vt && (this.R_.drawn += this.maker.pushDraws(tt, Vt, Vt.length, Ot, qt, Dt));
        const Ht = qt ? null === (dt = this.modelMeshes.group(Ot)) || void 0 === dt ? void 0 : dt.text : void 0;
        Ht && this.maker.pushDraws(tt, Ht.units, Ht.units.length, Ot, !0, Dt, Ht.rows), mt && OD(Dt, jt)
      }
    }

    function eD(tt, et) {
      return tt.program.id - et.program.id || tt.material.owner.uniqueId - et.material.owner.uniqueId
    }

    function VD(tt, et) {
      return tt.material.owner.uniqueId - et.material.owner.uniqueId
    }

    function OD(tt, et) {
      for (let Vt = et + 1; Vt < tt.length; Vt++) {
        const Ot = tt[Vt];
        let qt = Vt - 1;
        for (; qt >= et && VD(tt[qt], Ot) > 0; qt--) tt[qt + 1] = tt[qt];
        tt[qt + 1] = Ot
      }
    }
    const qD = {};

    function DD(tt) {
      return tt.hasThinInstances ? "thin" : tt.cqt || tt._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function mD(tt, et, Vt) {
      return tt ? (Vt._needUVs = !0, tt.optimizeUVAllocation && (0, St.M)(tt.matrix) ? (Vt[`${et}DIRECTUV`] = tt.uvSet + 1, Vt[`MAINUV${tt.uvSet+1}`] = !0) : Vt[`${et}DIRECTUV`] = 0, !0) : (Vt[`${et}DIRECTUV`] = 0, !1)
    }

    function dD(tt) {
      const et = new Map;
      for (const Vt in tt) {
        if (95 === Vt.charCodeAt(0)) continue;
        const Ot = tt[Vt],
          qt = typeof Ot;
        "number" === qt || "string" === qt ? et.set(Vt, String(Ot)) : Ot && "function" !== qt && et.set(Vt, !0)
      }
      return et
    }

    function jD(tt) {
      const et = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Vt
        }
        of tt.features)
        for (const tt in Vt) et[tt] = Vt[tt];
      return et
    }

    function HD(tt) {
      const et = tt.parts.geometry;
      return null !== et && void 0 !== et && et.live ? et : null
    }

    function XD(tt) {
      var et;
      return null !== (et = HD(tt)) && void 0 !== et ? et : qD
    }
    class QD {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = tt, this.warnOnce = et, this.programWithModel = Vt, this.packFailed = Ot, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(tt, et, Vt, Ot, qt) {
        const Dt = et.owner;
        let mt = this.drawStates.get(et);
        if (!mt) {
          const tt = et.parts.materials[et.range];
          if (!tt) return this.warnOnce("model", `${Vt.name} on ${Dt.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          mt = {
            defines: jD(tt),
            model: tt,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: qt,
            groupId: Ot,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(et, mt)
        }
        if (this.programCurrent(mt, et, qt, Ot)) return mt.program;
        const {
          model: dt
        } = mt, jt = XD(et), Ht = this.instanceLayout(Dt, qt), Xt = this.definesBits(Dt);
        if (!this.prepareModelDefines(tt, Dt, dt, mt.defines, Ot, qt)) return null;
        mt.instancing = qt, mt.groupId = Ot, mt.modelVersion = dt.version, mt.geometry = jt, mt.instanceLayout = Ht, mt.definesBits = Xt;
        const Qt = function(tt) {
          let et = "";
          for (const [Vt, Ot] of tt) et += !0 === Ot ? `${Vt};` : `${Vt}=${Ot};`;
          return et
        }(dD(mt.defines));
        return Qt === mt.definesKey && mt.packVariant === this.modelPackVariant && mt.program && !this.packFailed(mt.program) || (mt.definesKey = Qt, mt.packVariant = this.modelPackVariant, mt.program = this.programWithModel(dt, mt.defines, Qt)), mt.program
      }
      programCurrent(tt, et, Vt, Ot) {
        return null !== tt.program && !this.packFailed(tt.program) && tt.instancing === Vt && tt.groupId === Ot && this.definesHold(tt, et, Vt)
      }
      definesHold(tt, et, Vt) {
        return tt.modelVersion === tt.model.version && tt.geometry === XD(et) && tt.instanceLayout === this.instanceLayout(et.owner, Vt) && tt.definesBits === this.definesBits(et.owner) && tt.packVariant === this.modelPackVariant
      }
      modelPackKind(tt) {
        var et;
        return 0 === this.modelPackVariant ? null : null !== (et = (0, vt.s)(tt, ht.i.name)) && void 0 !== et && et.active ? "placed" : tt.item ? "item" : tt.lifeform ? "lifeform" : tt.box ? "box" : null
      }
      instanceLayout(tt, et) {
        var Vt, Ot, qt;
        return "thin" === et ? null !== (qt = this.resources.T6.get(tt)) && void 0 !== qt ? qt : null : "instanced" === et && null !== (Vt = null === (Ot = tt._userInstancedBuffersStorage) || void 0 === Ot ? void 0 : Ot.interleavedKinds) && void 0 !== Vt ? Vt : null
      }
      definesBits(tt) {
        const et = this.view;
        return (tt.visibility < 1 ? 1 : 0) | (tt.hasVertexAlpha ? 2 : 0) | (tt.applyFog ? 4 : 0) | (tt.useVertexColors ? 8 : 0) | (tt.nonUniformScaling ? 16 : 0) | (et.fogEnabled && 0 !== et.fogMode ? 32 : 0) | (et.lightsEnabled ? 64 : 0) | et.lightCount << 7
      }
      prepareLightDefines(tt, et, Vt) {
        let Ot = 0;
        if (this.view.lightsEnabled && !et) {
          const et = Math.min(Vt, 4);
          for (; Ot < this.view.lightCount && (tt[`LIGHT${Ot}`] = !0, tt[`LITE_LIGHT${Ot}_SLOT`] = Ot, Ot++, tt._needNormals = !0, Ot !== et););
        }
        for (let qt = Ot; qt < 4; qt++) tt[`LIGHT${qt}`] = !1, tt[`LITE_LIGHT${qt}_SLOT`] = void 0
      }
      prepareModelDefines(tt, et, Vt, Ot, qt, Dt) {
        const {
          features: mt
        } = Vt;
        Ot._needNormals = !1, Ot._needUVs = !1;
        const dt = this.view;
        this.prepareLightDefines(Ot, Vt.disableLighting, Vt.maxSimultaneousLights), Ot.MAINUV1 = !1, Ot.MAINUV2 = !1;
        const jt = Vt.diffuseTexture;
        jt ? (Ot._needUVs = !0, Ot.DIFFUSE = !0, jt.optimizeUVAllocation && (0, St.M)(jt.matrix) ? (Ot.DIFFUSEDIRECTUV = jt.uvSet + 1, Ot[`MAINUV${jt.uvSet+1}`] = !0) : Ot.DIFFUSEDIRECTUV = 0, jt.uvSet > 1 && this.warnOnce(`uvset:${Vt.name}`, `${Vt.name} samples UV set ${jt.uvSet+1}, which is not supported`)) : (Ot.DIFFUSE = !1, Ot.DIFFUSEDIRECTUV = 0);
        const Ht = Vt.opacityTexture,
          Xt = Vt.emissiveTexture;
        Ot.OPACITY = mD(Ht, "OPACITY", Ot), Ot.OPACITYRGB = null !== Ht && Ht.getAlphaFromRGB, Ot.EMISSIVE = mD(Xt, "EMISSIVE", Ot), (Ht && Ht.uvSet > 1 || Xt && Xt.uvSet > 1) && this.warnOnce(`uvset:${Vt.name}`, `${Vt.name} samples a UV set past 2, which is not supported`);
        const Qt = Vt.reflectionTexture,
          lt = null !== Qt;
        if (lt) {
          if (!this.resources.boundTexture(Qt)) return !1;
          Ot._needNormals = !0
        }
        Ot.REFLECTION = lt, Ot.REFLECTIONMAP_3D = lt, Ot.REFLECTIONMAP_SKYBOX = lt, Ot.REFLECTIONMAP_OPPOSITEZ = lt && (tt.useRightHandedSystem ? !Qt.invertZ : Qt.invertZ), Ot.ROUGHNESS = lt && Vt.roughness > 0, Ot.REFLECTIONOVERALPHA = lt && Vt.useReflectionOverAlpha, Ot.LITE_REFLECTION_LUMINANCE = lt && "cube" === Qt.source.kind && Qt.source.luminance, (et.skeleton || et.morphTargetManager) && this.warnOnce(`skin:${et.name}`, `${et.name} has bones or morph targets, which are not supported`), Ot.FOG = Vt.fogEnabled && et.applyFog && dt.fogEnabled && 0 !== dt.fogMode, Ot.NONUNIFORMSCALING = et.nonUniformScaling;
        const {
          visibility: Et,
          hasVertexAlpha: ft
        } = et;
        Ot.ALPHATEST = (0, vt.P)(Vt, Et, ft), Ot.ALPHAFROMDIFFUSE = (0, vt.bb)(Vt), Ot.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Vt.transparencyMode, Ot.ALPHABLEND = null === Vt.transparencyMode || (0, vt.O)(Vt, Et, ft), Ot.PREMULTIPLYALPHA = 7 === Vt.alphaMode || 8 === Vt.alphaMode, Ot.EMISSIVEASILLUMINATION = Vt.useEmissiveAsIllumination, Ot.LINKEMISSIVEWITHDIFFUSE = Vt.linkEmissiveWithDiffuse, Ot.TWOSIDEDLIGHTING = !Vt.backFaceCulling && Vt.twoSidedLighting, Ot.INSTANCES = "none" !== Dt, Ot.THIN_INSTANCES = "thin" === Dt, Ot.LITE_FRONT_LAYER = qt >= 1;
        for (const {
            feature: Kt,
            state: ht,
            active: vt
          }
          of mt) {
          var wt, yt;
          if (vt) null === (wt = (yt = (0, Ze.g)(Kt)).prepareDefinesBeforeAttributes) || void 0 === wt || wt.call(yt, ht, Ot, tt, et)
        }
        this.modelPackKind(Vt) && (Ot._needNormals = !0), Ot.NORMAL = Ot._needNormals && et.isVerticesDataPresent("normal"), Ot.UV1 = Ot._needUVs && et.isVerticesDataPresent("uv"), Ot.UV2 = Ot._needUVs && et.isVerticesDataPresent("uv2");
        const Nt = et.useVertexColors && et.isVerticesDataPresent("color");
        Ot.VERTEXCOLOR = Nt, Ot.VERTEXALPHA = et.hasVertexAlpha && Nt, Ot.INSTANCESCOLOR = "none" !== Dt && et.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Kt,
            state: ht,
            active: vt
          }
          of mt) {
          var Mt, bt;
          if (vt) null === (Mt = (bt = (0, Ze.g)(Kt)).prepareDefines) || void 0 === Mt || Mt.call(bt, ht, Ot, tt, et, Vt)
        }
        const Jt = tt.Jf();
        for (const {
            feature: Kt,
            state: ht,
            active: vt
          }
          of mt) {
          var Ct, ut;
          if (vt && !1 === (null === (Ct = (ut = (0, Ze.g)(Kt)).isReadyForSubMesh) || void 0 === Ct ? void 0 : Ct.call(ut, ht, Ot, tt, Jt))) return !1
        }
        return !0
      }
    }

    function lD(tt, et, Vt) {
      return tt.codeVersion !== et.version && function(tt, et) {
        const Vt = [],
          Ot = [];
        for (const {
            feature: lt,
            state: Et,
            active: ft
          }
          of et.features) {
          var qt, Dt, mt, dt;
          if (ft) ED(null === (qt = (Dt = (0, Ze.g)(lt)).getCustomCode) || void 0 === qt ? void 0 : qt.call(Dt, Et, "vertex", ut.c.WGSL), Vt), ED(null === (mt = (dt = (0, Ze.g)(lt)).getCustomCode) || void 0 === mt ? void 0 : mt.call(dt, Et, "fragment", ut.c.WGSL), Ot)
        }
        const jt = [];
        for (const {
            feature: lt,
            state: Et
          }
          of et.features) {
          var Ht, Xt;
          const tt = null === (Ht = (Xt = (0, Ze.g)(lt)).getUniforms) || void 0 === Ht ? void 0 : Ht.call(Xt, Et, ut.c.WGSL);
          for (const et of null !== (Qt = null === tt || void 0 === tt ? void 0 : tt.ubo) && void 0 !== Qt ? Qt : []) {
            var Qt;
            et.size && et.type && jt.push({
              name: et.name,
              type: et.type,
              arraySize: et.arraySize
            })
          }
        }
        tt.vertexCode = Vt, tt.fragmentCode = Ot, tt.pluginUniforms = jt, tt.codeKey = JSON.stringify([Vt, Ot, jt]), tt.codeVersion = et.version
      }(tt, et), `${Vt}#${tt.codeKey}`
    }

    function ED(tt, et) {
      if (tt)
        for (const Vt in tt) tt[Vt] && et.push([Vt, tt[Vt]])
    }
    const fD = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class wD {
      constructor(tt) {
        this.warnOnce = tt, this.states = new Map
      }
      renderState(tt, et, Vt, Ot) {
        var qt;
        let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          mt = null !== (qt = tt.sideOrientation) && void 0 !== qt ? qt : et.sideOrientation;
        et._getWorldMatrixDeterminant() < 0 && (mt = 0 === mt ? 1 : 0);
        const dt = "triangle-list" === Dt,
          jt = Vt ? tt.alphaMode : 0,
          Ht = (!Vt || (0 === jt || tt.forceDepthWrite)) && !tt.disableDepthWrite,
          Xt = dt && tt.backFaceCulling ? tt.cullBackFaces ? "back" : "front" : "none",
          Qt = dt && 0 !== mt ? "ccw" : "cw",
          lt = tt.depthFunction,
          Et = dt ? tt.zOffset : 0,
          ft = dt ? tt.zOffsetUnits : 0,
          wt = !tt.disableColorWrite;
        return Ot && Ot.alphaMode === jt && Ot.depthWrite === Ht && Ot.depthFunction === lt && Ot.cullMode === Xt && Ot.frontFace === Qt && Ot.zOffset === Et && Ot.zOffsetUnits === ft && Ot.colourWrite === wt && Ot.topology === Dt ? Ot : this.stateFor(jt, Ht, lt, Xt, Qt, Et, ft, wt, Dt)
      }
      stateFor(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        const Ht = `${tt}|${et}|${Vt}|${Ot}|${qt}|${Dt}|${mt}|${dt}|${jt}`;
        let Xt = this.states.get(Ht);
        if (!Xt) {
          var Qt;
          const lt = tt ? me(tt) : null;
          tt && !lt && this.warnOnce(`alpha:${tt}`, `alpha mode ${tt} is not supported`), Xt = {
            key: Ht,
            alphaMode: tt,
            depthFunction: Vt,
            zOffset: Dt,
            zOffsetUnits: mt,
            topology: jt,
            blend: lt,
            depthWrite: et,
            depthCompare: Vt && null !== (Qt = fD.get(Vt)) && void 0 !== Qt ? Qt : null,
            cullMode: Ot,
            frontFace: qt,
            depthBias: -mt,
            depthBiasSlopeScale: -Dt,
            colourWrite: dt
          }, this.states.set(Ht, Xt)
        }
        return Xt
      }
    }
    var yD = Vt(37685);

    function ND(tt) {
      if (!tt.frozen) return -1;
      let et = tt.version;
      for (const {
          feature: Vt,
          state: Ot,
          active: qt
        }
        of tt.features) {
        if (!qt || !Vt.bind) continue;
        const tt = (0, Ze.g)(Vt).uniformsVersion;
        if (!tt) return -1;
        et += tt(Ot)
      }
      return et
    }
    class aD {
      constructor(tt, et, Vt) {
        this.slots = tt, this.data = et, this.textures = Vt, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(tt, et) {
        this.write4(tt, et, 0, 0, 0, 1)
      }
      updateFloat2(tt, et, Vt) {
        this.write4(tt, et, Vt, 0, 0, 2)
      }
      updateFloat3(tt, et, Vt, Ot) {
        this.write4(tt, et, Vt, Ot, 0, 3)
      }
      updateFloat4(tt, et, Vt, Ot, qt) {
        this.write4(tt, et, Vt, Ot, qt, 4)
      }
      updateVector3(tt, et) {
        this.write4(tt, et.x, et.y, et.z, 0, 3)
      }
      updateVector4(tt, et) {
        this.write4(tt, et.x, et.y, et.z, et.w, 4)
      }
      updateColor3(tt, et) {
        this.write4(tt, et.r, et.g, et.b, 0, 3)
      }
      updateColor4(tt, et, Vt) {
        this.write4(tt, et.r, et.g, et.b, Vt, 4)
      }
      updateFloatsFrom(tt, et, Vt, Ot) {
        const qt = this.slots.get(tt);
        if (!qt) return;
        const Dt = this.data,
          mt = qt.offset;
        for (let dt = 0; dt < Ot; dt++) Dt[mt + dt] = et[Vt + dt]
      }
      updateFloat3TimesFloats(tt, et, Vt, Ot) {
        const qt = this.slots.get(tt);
        if (!qt) return;
        const Dt = this.data,
          mt = qt.offset;
        Dt[mt] = et[Vt] * Ot[0], Dt[mt + 1] = et[Vt + 1] * Ot[1], Dt[mt + 2] = et[Vt + 2] * Ot[2]
      }
      x_(tt, et) {
        const Vt = this.slots.get(tt);
        Vt && this.data.set(et.m, Vt.offset)
      }
      updateMatrixFloats(tt, et) {
        const Vt = this.slots.get(tt);
        Vt && this.data.set(et, Vt.offset)
      }
      updateFloatArray(tt, et) {
        const Vt = this.slots.get(tt);
        if (!Vt) return;
        if (!Vt.arraySize || Vt.stride === Vt.floats) return void this.data.set(et, Vt.offset);
        const Ot = Math.min(et.length, Vt.floats * Vt.arraySize);
        for (let qt = 0; qt < Ot; qt++) this.data[Vt.offset + Math.floor(qt / Vt.floats) * Vt.stride + qt % Vt.floats] = et[qt]
      }
      updateArray(tt, et) {
        this.updateFloatArray(tt, et)
      }
      setTexture(tt, et) {
        this.textures.set(tt, et), this.expected.delete(tt)
      }
      expectTexture(tt) {
        this.textures.set(tt, null), this.expected.add(tt)
      }
      write4(tt, et, Vt, Ot, qt, Dt) {
        const mt = this.slots.get(tt);
        if (!mt) return;
        const dt = this.data,
          jt = mt.offset;
        dt[jt] = et, Dt > 1 && (dt[jt + 1] = Vt), Dt > 2 && (dt[jt + 2] = Ot), Dt > 3 && (dt[jt + 3] = qt)
      }
    }

    function MD(tt, et) {
      const Vt = Hq,
        Ot = yD.f,
        qt = tt.lights,
        Dt = Math.min(tt.lightCount, 8);
      for (let mt = 0; mt < Dt; mt++) {
        const tt = Vt.lights + mt * Vt.lightStride,
          Dt = mt * yD.d;
        et[tt] = qt[Dt + Ot.vector], et[tt + 1] = qt[Dt + Ot.vector + 1], et[tt + 2] = qt[Dt + Ot.vector + 2], et[tt + 3] = qt[Dt + Ot.kind] === yD.e.directional ? 1 : 0, et[tt + 4] = qt[Dt + Ot.diffuse], et[tt + 5] = qt[Dt + Ot.diffuse + 1], et[tt + 6] = qt[Dt + Ot.diffuse + 2], et[tt + 7] = qt[Dt + Ot.range], et[tt + 8] = qt[Dt + Ot.specular], et[tt + 9] = qt[Dt + Ot.specular + 1], et[tt + 10] = qt[Dt + Ot.specular + 2], et[tt + 11] = qt[Dt + Ot.range]
      }
      et[Vt.fogInfos] = tt.fogMode, et[Vt.fogInfos + 1] = tt.fogStart, et[Vt.fogInfos + 2] = tt.fogEnd, et[Vt.fogInfos + 3] = tt.fogDensity, et[Vt.fogColour] = tt.fogColour[0], et[Vt.fogColour + 1] = tt.fogColour[1], et[Vt.fogColour + 2] = tt.fogColour[2], et[Vt.outputHeight] = tt.renderHeight, et[Vt.animTick] = tt.animTick, et[Vt.timeMs] = tt.timeMs
    }
    class bD {
      constructor(tt) {
        this.instancesOf = tt
      }
      refreshModelUniforms(tt, et, Vt, Ot) {
        const qt = ND(Vt);
        if (qt >= 0 && qt === et.heldVersion && et.textures.get("diffuseSampler") === Vt.diffuseTexture && et.textures.get("reflectionCubeSampler") === Vt.reflectionTexture && et.textures.get("opacitySampler") === Vt.opacityTexture && et.textures.get("emissiveSampler") === Vt.emissiveTexture) return !0;
        if (qt < 0)
          for (const Dt of this.instancesOf(Vt)) Dt.heldVersion = -1;
        return this.writeModelUniforms(tt, et, Vt, Ot), et.heldVersion = qt, !1
      }
      writeModelUniforms(tt, et, Vt, Ot) {
        const {
          ubo: qt
        } = et, Dt = Vt.diffuseTexture, mt = Vt.diffuseColor;
        qt.updateFloat4("vDiffuseColor", mt[0], mt[1], mt[2], Vt.alpha), Dt && (qt.updateFloat2("vDiffuseInfos", Dt.uvSet, Dt.level), qt.updateMatrixFloats("diffuseMatrix", Dt.matrix)), qt.updateFloat("alphaCutOff", Vt.alphaCutOff), qt.updateFloatsFrom("vEmissiveColor", Vt.emissiveColor, 0, 3), qt.updateFloat3TimesFloats("vAmbientColor", Ot.ambientColour, 0, Vt.ambientColor);
        const dt = Vt.specularColor;
        qt.updateFloat4("vSpecularColor", dt[0], dt[1], dt[2], Vt.specularPower), qt.setTexture("diffuseSampler", Dt);
        const jt = Vt.opacityTexture;
        jt && (qt.updateFloat2("vOpacityInfos", jt.uvSet, jt.level), qt.updateMatrixFloats("opacityMatrix", jt.matrix)), qt.setTexture("opacitySampler", jt);
        const Ht = Vt.emissiveTexture;
        Ht && (qt.updateFloat2("vEmissiveInfos", Ht.uvSet, Ht.level), qt.updateMatrixFloats("emissiveMatrix", Ht.matrix)), qt.setTexture("emissiveSampler", Ht);
        const Xt = Vt.reflectionTexture;
        Xt && qt.updateMatrixFloats("reflectionMatrix", Xt.matrix), qt.updateFloat2("vReflectionInfos", Xt ? Xt.level * tt.iblIntensity : 0, Vt.roughness), qt.setTexture("reflectionCubeSampler", Xt);
        const Qt = tt.Jf();
        for (const {
            feature: ft,
            state: wt,
            active: yt
          }
          of Vt.features) {
          var lt, Et;
          if (yt) null === (lt = (Et = (0, Ze.g)(ft)).bind) || void 0 === lt || lt.call(Et, wt, qt, tt, Qt)
        }
      }
    }

    function JD(tt) {
      const et = tt.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(et) ? "u32" : /i32|^vec\di$/.test(et) ? "i32" : "f32"
    }

    function CD(tt, et) {
      const Vt = tt.getSize(),
        Ot = JD(et),
        qt = tt => 4 === Vt ? `${tt}x4` : 2 === Vt ? `${tt}x2` : null;
      if ("f32" === Ot) {
        if (5126 === tt.type) return 1 === Vt ? "float32" : Vt >= 2 && Vt <= 4 ? `float32x${Vt}` : null;
        if (!tt.normalized) return null;
        switch (tt.type) {
          case 5121:
            return qt("unorm8");
          case 5120:
            return qt("snorm8");
          case 5123:
            return qt("unorm16");
          case 5122:
            return qt("snorm16")
        }
        return null
      }
      const Dt = "u32" === Ot ? "uint" : "sint";
      switch (tt.type) {
        case 5125:
        case 5124:
          return 1 === Vt ? `${Dt}32` : Vt <= 4 ? `${Dt}32x${Vt}` : null;
        case 5121:
        case 5120:
          return qt(`${Dt}8`);
        case 5123:
        case 5122:
          return qt(`${Dt}16`)
      }
      return null
    }

    function uD(tt) {
      var et;
      const Vt = /(8|16|32)(?:x(\d))?$/.exec(tt);
      return Vt ? Number(Vt[1]) / 8 * Number(null !== (et = Vt[2]) && void 0 !== et ? et : 1) : 4
    }
    class KD {
      constructor(tt, et, Vt) {
        this.resources = tt, this.limits = et, this.warnOnce = Vt, this.layouts = new Map
      }
      resolveInputs(tt, et, Vt, Ot) {
        const qt = [],
          Dt = Vt.program.attributes,
          mt = [];
        for (let Xt = 0; Xt < Dt.length; Xt++) {
          const Vt = Dt[Xt],
            dt = Vt.optional ? null : this.resources.vertexInput(tt, Vt.name, Ot);
          if (!dt) {
            const tt = JD(Vt.type),
              et = "u32" === tt ? "uint32x4" : "i32" === tt ? "sint32x4" : "float32x4";
            mt.push(null);
            const Ot = qt.find((tt => null === tt.data));
            Ot ? Ot.attributes.push({
              shaderLocation: Xt,
              offset: 0,
              format: et
            }) : qt.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Xt,
                offset: 0,
                format: et
              }]
            });
            continue
          }
          const jt = dt.getBuffer();
          mt.push(dt);
          const Ht = CD(dt, Vt.type);
          if (!Ht) return this.warnOnce(`format:${et}:${Vt.name}`, `${et}'s ${Vt.name} (type ${dt.type}, size ${dt.getSize()}) has no WebGPU vertex format`), null;
          const Qt = dt.getIsInstanced() ? "instance" : "vertex",
            lt = dt.byteStride,
            Et = uD(Ht),
            ft = qt.find((tt => tt.data === jt && tt.stride === lt && tt.step === Qt && dt.byteOffset >= tt.base && dt.byteOffset - tt.base + Et <= lt));
          ft ? ft.attributes.push({
            shaderLocation: Xt,
            offset: dt.byteOffset - ft.base,
            format: Ht
          }) : qt.push({
            data: jt,
            base: dt.byteOffset,
            stride: lt,
            step: Qt,
            attributes: [{
              shaderLocation: Xt,
              offset: 0,
              format: Ht
            }]
          })
        }
        if (qt.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${et}`, `${et} needs ${qt.length} vertex buffers`), null;
        let dt = "";
        for (const Xt of qt) {
          dt += `${Xt.stride}${"instance"===Xt.step?"i":"v"}`;
          for (const tt of Xt.attributes) dt += `,${tt.shaderLocation}:${tt.offset}:${tt.format}`;
          dt += ";"
        }
        let jt = this.layouts.get(dt);
        jt || (jt = {
          key: dt,
          buffers: qt.map((tt => ({
            arrayStride: tt.stride,
            stepMode: tt.step,
            attributes: tt.attributes
          }))),
          instanceEnds: qt.map((tt => {
            let et = -1;
            if ("instance" === tt.step)
              for (const Vt of tt.attributes) et = Math.max(et, Vt.offset + uD(Vt.format));
            return et
          }))
        }, this.layouts.set(dt, jt));
        const Ht = qt.map((tt => tt.base));
        return {
          program: Vt,
          sources: mt,
          layout: jt,
          slotData: qt.map((tt => tt.data)),
          F_: Ht,
          buffers: [],
          offsets: Ht,
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

    function hD(tt, et, Vt, Ot) {
      const qt = et.program.program.attributes;
      for (let Dt = 0; Dt < qt.length; Dt++) {
        if ((qt[Dt].optional ? null : Vt.vertexInput(tt, qt[Dt].name, Ot)) !== et.sources[Dt]) return !1
      }
      return !0
    }
    const vD = 64;
    class WD {
      constructor(tt, et, Vt, Ot) {
        this.device = tt, this.layout = et, this.frameBuffer = Vt, this.label = Ot, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(tt) {
        if (tt * vD <= this.data.length) return !1;
        let et = 2 * this.data.length;
        for (; tt * vD > et;) et *= 2;
        const Vt = new Float32Array(et);
        return Vt.set(this.data), this.data = Vt, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qt = this.data,
          Dt = tt * vD;
        let mt = qt[Dt + 16] !== Vt;
        for (let dt = 0; dt < 16 && !mt; dt++) mt = qt[Dt + dt] !== et[Ot + dt];
        if (mt) {
          for (let tt = 0; tt < 16; tt++) qt[Dt + tt] = et[Ot + tt];
          qt[Dt + 16] = Vt
        }
        return mt
      }
      upload(tt, et) {
        this.device.queue.writeBuffer(this.buffer, tt * Xq, this.data, tt * vD, (et - tt) * vD)
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

    function SD(tt) {
      return tt.gpu[St.i.lite] ??= tt.materials.map(((et, Vt) => ({
        parts: tt,
        range: Vt,
        owner: tt.owner
      })))
    }

    function cD(tt) {
      var et, Vt, Ot;
      return null !== (et = null !== (Vt = null === (Ot = tt.parts.materials[tt.range]) || void 0 === Ot ? void 0 : Ot.mirror) && void 0 !== Vt ? Vt : tt.owner.material) && void 0 !== et ? et : null
    }
    const RD = ["opaque", "alphaTest", "transparent", "text"];

    function ID(tt) {
      for (const et of RD) tt[et].units.length = 0, tt[et].rows.length = 0
    }
    class PD {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Pe.b)("Lite: ")
      }
      attach(tt, et) {
        this.model = tt, this.mirror = et
      }
      get worlds() {
        return this.model.nodes.sQ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(tt) {
        return this.groups.get(tt)
      }
      forEachGroup(tt) {
        this.groups.forEach(tt)
      }
      forEachSelected(tt) {
        for (const [et, Vt] of this.groups)
          for (const Ot of RD)
            for (const qt of Vt[Ot].units) tt(qt.owner, "text" === Ot ? "transparent" : Ot, et)
      }
      select(tt, et) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(ID);
        const {
          model: Vt,
          mirror: Ot
        } = this;
        if (!Vt || !Ot || !tt) return;
        this.rows.length < Vt.nodes.uQ && (this.rows = new Int32Array(Vt.nodes.uQ));
        const qt = this.rows,
          Dt = Vt.meshes;
        for (let dt = 0; dt < Dt.looseCount; dt++) {
          const tt = Dt.loose[dt],
            Vt = Ot.nodes[tt];
          Vt && !Vt.isBlocked && Vt.isEnabled() && !Vt.cj.hasAZeroComponent && Dt.selects(tt, et.frustum) && (this.activate(Vt, tt), this.selectedCount++)
        }
        const mt = Dt.selectTextPlanes(et.frustum, qt);
        for (let dt = 0; dt < mt; dt++) {
          const et = qt[dt],
            Dt = Ot.nodes[et],
            mt = Vt.meshes.parts[et];
          if (!Dt.isVisible || !(Dt.visibility > 0) || 0 === (Dt.layerMask & tt.layerMask) || !mt) continue;
          const jt = this.groupOf(Vt.meshes.layer[et]).text;
          for (const tt of SD(mt)) jt.units.push(tt), jt.rows.push(et);
          this.selectedCount++
        }
      }
      instanceBatch(tt) {
        const et = this.batchOf(tt);
        return et.dispatched || (et.dispatched = et.renderSelf = !0, et.row = this.rowOf(tt)), et
      }
      rowOf(tt) {
        return tt.row
      }
      activate(tt, et) {
        if (!tt.pI) {
          const Vt = tt;
          if (Vt.cqt) {
            const tt = this.batchOf(Vt);
            tt.dispatched = !0, tt.renderSelf = !0, tt.row = et
          }
          return void this.dispatch(Vt, et, et)
        }
        const Vt = tt,
          Ot = Vt.Rqt;
        if (Ot._getWorldMatrixDeterminant() >= 0 !== Vt._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Ot.name}`, `A mirrored InstancedMesh of ${Ot.name} is not drawn yet`);
        const qt = this.batchOf(Ot);
        qt.instances.push(Vt), qt.rows.push(et), qt.dispatched || (qt.dispatched = !0, this.dispatch(Ot, et, this.rowOf(Ot)))
      }
      batchOf(tt) {
        let et = this.batches.get(tt);
        return et || (et = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(tt, et)), et.frame !== this.frame && (et.frame = this.frame, et.dispatched = !1, et.renderSelf = !1, et.instances.length = 0, et.rows.length = 0), et
      }
      dispatch(tt, et, Vt) {
        const {
          layer: Ot,
          parts: qt
        } = this.model.meshes;
        if (!qt[et]) return;
        const Dt = this.groupOf(Ot[et]),
          mt = tt;
        for (const dt of SD(qt[et])) {
          const tt = cD(dt);
          if (!tt) continue;
          const et = tt.needAlphaBlendingForMesh(mt) ? Dt.transparent : tt.needAlphaTestingForMesh(mt) ? Dt.alphaTest : Dt.opaque;
          et.units.push(dt), et.rows.push(Vt)
        }
      }
      groupOf(tt) {
        let et = this.groups.get(tt);
        return et || (et = {
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
        }, this.groups.set(tt, et)), et
      }
    }

    function ZD(tt) {
      tt.opaque.length = 0, tt.transparent.length = 0
    }
    class LD {
      constructor() {
        this.Pd = new Map, this.enabled = [], this.groups = new Map, this.hE = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(tt) {
        if (this.Pd.has(tt)) return;
        const et = {
          mesh: tt,
          observer: tt.onEffectiveEnabledStateChangedObservable.add((tt => {
            this.Av(et, tt)
          })),
          index: -1,
          steady: null
        };
        this.Pd.set(tt, et), this.Av(et, tt.isEnabled())
      }
      remove(tt) {
        const et = this.Pd.get(tt);
        et && (et.observer.remove(!0), this.Av(et, !1), this.Pd.delete(tt))
      }
      dropSteady() {
        for (const tt of this.Pd.values()) tt.steady = null
      }
      base(tt) {
        return this.Pd.get(tt)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          Pd: this.Pd.size
        }
      }
      forEachSelected(tt) {
        for (const [et, Vt] of this.groups) {
          for (const Ot of Vt.opaque) tt(Ot.owner, "opaque", et);
          for (const Ot of Vt.transparent) tt(Ot.owner, "transparent", et)
        }
        for (const et of this.hE) tt(et.mesh, "opaque", 0)
      }
      group(tt) {
        return this.groups.get(tt)
      }
      forEachGroup(tt) {
        this.groups.forEach(tt)
      }
      select(tt, et) {
        if (this.drawn = 0, this.selected = 0, this.hE.length = 0, this.groups.forEach(ZD), !tt) return;
        const Vt = this.enabled;
        for (let Ot = 0; Ot < Vt.length; Ot++) {
          const qt = Vt[Ot];
          if (qt.steady && et(qt, tt)) {
            this.selected++, this.hE.push(qt);
            continue
          }
          const Dt = qt.mesh;
          if (Dt.isBlocked || Dt.cj.hasAZeroComponent) continue;
          if (!Dt.isVisible || Dt.visibility <= 0 || 0 === (Dt.layerMask & tt.layerMask)) continue;
          if (Dt.cqt) {
            this.warned.has(Dt.name) || (this.warned.add(Dt.name), console.warn(`Lite: thin instance base ${Dt.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: mt
          } = Dt;
          if (!mt) continue;
          Dt.computeWorldMatrix(), this.selected++;
          const dt = this.listsFor(Dt.renderingGroupId);
          for (const tt of SD(mt)) {
            const et = cD(tt);
            et && (et.needAlphaBlendingForMesh(Dt) ? dt.transparent.push(tt) : dt.opaque.push(tt))
          }
        }
      }
      Av(tt, et) {
        if (et === tt.index >= 0) return;
        tt.steady = null;
        const Vt = this.enabled;
        if (et) tt.index = Vt.length, Vt.push(tt);
        else {
          const et = Vt.pop();
          et !== tt && (Vt[tt.index] = et, et.index = tt.index), tt.index = -1
        }
      }
      listsFor(tt) {
        let et = this.groups.get(tt);
        return et || (et = {
          opaque: [],
          transparent: []
        }, this.groups.set(tt, et)), et
      }
    }
    var FD = Vt(39794);
    class kD {
      constructor() {
        this.bundle = null, this.stale = !0, this.Pd = new Set
      }
    }
    class GD {
      constructor(tt, et, Vt) {
        this.device = tt, this.slots = et, this.host = Vt, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new kD, this.jR = new kD, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new nq, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = tt => {
          tt.seen !== this.frame && (tt.draw && (tt.draw = null, this.args[5 * tt.slot + 1] = 0, this.argsDirty = !0, this.jR.stale ||= tt.jR), this.frame - tt.seen > 120 && (this.records.delete(tt.unit), this.freeSlots.push(tt.slot), tt.recorded && (this.bundleOf(tt).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(tt) {
          var et, Vt;
          let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (et = null === (Vt = globalThis.navigator) || void 0 === Vt ? void 0 : Vt.userAgent) && void 0 !== et ? et : "";
          const qt = tt.adapterInfo;
          return "intel" === (null === qt || void 0 === qt ? void 0 : qt.vendor) && "gen-12lp" === qt.architecture && Ot.includes("Windows")
        }(tt), (0, FD.Q)(this.direct)
      }
      QJ() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, FD.Q)(this.directThisFrame)
      }
      add(tt, et, Vt, Ot) {
        let qt = this.records.get(tt);
        return qt || (qt = this.createRecord(tt), this.records.set(tt, qt)), qt.recorded && oD(qt, et) || (this.bundleOf(qt).stale = !0), this.place(qt, et, Vt, Ot), qt
      }
      bundleOf(tt) {
        return tt.jR ? this.jR : this.main
      }
      addAgain(tt, et, Vt, Ot) {
        tt.recorded || (this.bundleOf(tt).stale = !0), this.place(tt, et, Vt, Ot)
      }
      place(tt, et, Vt, Ot) {
        tt.seen = this.frame, tt.jR && null === tt.draw && (this.jR.stale = !0), tt.draw = et, this.drawn++, Vt && this.slots.write(tt.slot, Vt, Ot) && (this.slotsFrom = Math.min(this.slotsFrom, tt.slot), this.slotsTo = Math.max(this.slotsTo, tt.slot));
        const qt = this.args,
          Dt = 5 * tt.slot;
        qt[Dt] === et.count && qt[Dt + 1] === et.instances && qt[Dt + 2] === et.first || (qt[Dt] = et.count, qt[Dt + 1] = et.instances, qt[Dt + 2] = et.first, this.argsDirty = !0, this.jR.stale ||= tt.jR)
      }
      yJ() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(tt) {
        for (const et of this.records.values()) et.draw && et.seen === this.frame && !et.jR && tt(et.draw, this.slots.data, et.slot * Xq / 4)
      }
      resourceDestroyed(tt) {
        this.main.stale ||= this.main.Pd.has(tt), this.jR.stale ||= this.jR.Pd.has(tt)
      }
      execute(tt, et, Vt) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(tt, et, Vt, "direct"), this.drawn;
        const Ot = this.host.sceneGroup(et);
        if (!Ot) return this.main.bundle = null, this.jR.bundle = null, this.recordedSceneGroup = null, this.encode(tt, et, Vt, "direct"), this.drawn;
        this.recordedTarget === Vt && this.recordedSceneGroup === Ot || (this.recordedTarget = Vt, this.recordedSceneGroup = Ot, this.main.stale = !0, this.jR.stale = !0);
        const qt = this.main,
          Dt = this.jR;
        let mt = !1;
        !qt.stale && qt.bundle || (qt.bundle = this.record(et, Vt, Ot, "indirect"), mt = !0);
        const dt = (0, FD.p)();
        return (Dt.stale || this.rangedEpoch !== dt) && (this.rangedEpoch = dt, Dt.bundle = this.drawsRanged() ? this.record(et, Vt, Ot, "jR") : this.noRangedBundle(), mt = !0), mt && (this.bundles = Dt.bundle ? [qt.bundle, Dt.bundle] : [qt.bundle]), tt.executeBundles(this.bundles), tt.setBindGroup(0, Ot), this.drawn
      }
      record(tt, et, Vt, Ot) {
        const qt = this.device.createRenderBundleEncoder({
          label: "jR" === Ot ? "thin-bases-ranged" : "thin-bases",
          colorFormats: tt._colorFormat ? [tt._colorFormat] : [],
          depthStencilFormat: tt._depthStencilFormat,
          sampleCount: tt._sampleCount
        });
        return qt.setBindGroup(0, Vt), this.encode(qt, tt, et, Ot), qt.finish()
      }
      noRangedBundle() {
        for (const tt of this.records.values()) tt.jR && (tt.recorded = !1);
        return this.jR.Pd.clear(), this.jR.stale = !1, null
      }
      drawsRanged() {
        for (const tt of this.records.values())
          if (tt.jR && tt.draw) return !0;
        return !1
      }
      encode(tt, et, Vt, Ot) {
        const qt = [];
        for (const jt of this.records.values()) "direct" !== Ot && jt.jR !== ("jR" === Ot) || (jt.recorded = !1, jt.draw && qt.push(jt));
        qt.sort(rD);
        const Dt = "direct" === Ot ? null : "jR" === Ot ? this.jR : this.main;
        null === Dt || void 0 === Dt || Dt.Pd.clear(), this.binder.reset();
        let mt = !1;
        for (const jt of qt) {
          var dt;
          const qt = jt.draw,
            Ht = this.host.pipelineFor(qt, et, Vt);
          if (!Ht) {
            this.host.pipelineCompiling(qt, Vt) ? mt = !0 : Dt && this.keep(jt, qt, Dt.Pd);
            continue
          }
          let Xt;
          if (jt.jR && "indirect" !== Ot) {
            const tt = jt.unit.owner;
            Xt = "direct" === Ot && (0, FD.A)(tt) || (0, FD.s)(tt) || void 0
          }
          if (Dt && this.keep(jt, qt, Dt.Pd), 0 === (null === (dt = Xt) || void 0 === dt ? void 0 : dt.count)) continue;
          this.binder.bind(tt, qt, Ht, this.slots.bindGroup, jt.slot * Xq);
          const Qt = 5 * jt.slot;
          if ("indirect" === Ot) {
            qt.indexBuffer ? tt.drawIndexedIndirect(this.argsBuffer, 4 * Qt) : tt.drawIndirect(this.argsBuffer, 4 * Qt);
            continue
          }
          const lt = this.args;
          Xt ? zD(tt, null !== qt.indexBuffer, lt, Qt, Xt) : qt.indexBuffer ? tt.drawIndexed(lt[Qt], lt[Qt + 1], lt[Qt + 2], 0, 0) : tt.draw(lt[Qt], lt[Qt + 1], lt[Qt + 2], 0)
        }
        Dt && (Dt.stale = mt)
      }
      keep(tt, et, Vt) {
        tt.recorded = !0, tt.pipelineKey = et.pipelineKey, tt.materialGroup = et.material.bindGroup, tt.vertexBuffers.length = 0, tt.vertexBuffers.push(...et.vertexBuffers), tt.vertexOffsets = et.vertexOffsets, tt.indexBuffer = et.indexBuffer, tt.indexFormat = et.indexFormat;
        for (const Ot of et.vertexBuffers) Vt.add(Ot);
        et.indexBuffer && Vt.add(et.indexBuffer), Vt.add(et.material.buffer);
        for (const Ot of et.material.bound) Ot && Vt.add(Ot)
      }
      createRecord(tt) {
        let et = this.freeSlots.pop();
        return void 0 === et && (et = this.slotCount++, this.grow()), {
          unit: tt,
          slot: et,
          jR: void 0 !== (0, FD.s)(tt.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.jR.stale = !0), 5 * this.slotCount > this.args.length) {
          const tt = new Uint32Array(2 * this.args.length);
          tt.set(this.args), this.args = tt, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function zD(tt, et, Vt, Ot, qt) {
      const Dt = Vt[Ot + 1],
        mt = qt.data;
      for (let dt = 0; dt < qt.count; dt++) {
        const qt = Math.min(mt[2 * dt], Dt),
          jt = Math.min(mt[2 * dt + 1], Dt - qt);
        0 !== jt && (et ? tt.drawIndexed(Vt[Ot], jt, Vt[Ot + 2], 0, qt) : tt.draw(Vt[Ot], jt, Vt[Ot + 2], qt))
      }
    }

    function oD(tt, et) {
      if (tt.pipelineKey !== et.pipelineKey || tt.materialGroup !== et.material.bindGroup || tt.indexBuffer !== et.indexBuffer || tt.indexFormat !== et.indexFormat || tt.vertexOffsets !== et.vertexOffsets || tt.vertexBuffers.length !== et.vertexBuffers.length) return !1;
      for (let Vt = 0; Vt < tt.vertexBuffers.length; Vt++)
        if (tt.vertexBuffers[Vt] !== et.vertexBuffers[Vt]) return !1;
      return !0
    }

    function rD(tt, et) {
      return eD(tt.draw, et.draw)
    }
    const UD = new WeakMap,
      AD = {
        depth: !1,
        sunShadow: !1
      };

    function iD(tt, et) {
      let Vt = UD.get(tt);
      Vt || (Vt = new Map, UD.set(tt, Vt));
      const Ot = `${et.depth?"-depth":""}${et.sunShadow?"-shadow":""}${et.shadowMask?"-mask":""}`;
      let qt = Vt.get(Ot);
      if (!qt) {
        const Dt = [{
          binding: ge.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: ge.i
          }
        }, {
          binding: ge.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        et.depth && Dt.push({
          binding: ge.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), et.sunShadow && Dt.push(... function() {
          const tt = GPUShaderStage.FRAGMENT,
            et = ge.s;
          return [{
            binding: et.uniform,
            visibility: tt,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: et.hl,
            visibility: tt,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: et.special,
            visibility: tt,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: et.volume,
            visibility: tt,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: et.sampler,
            visibility: tt,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: et.entities,
            visibility: tt,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: et.entityGrids,
            visibility: tt,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), et.shadowMask && Dt.push({
          binding: ge.t,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), qt = tt.createBindGroupLayout({
          label: `${et.depth?"terrain-":""}shader-pack-inputs${Ot}`,
          entries: Dt
        }), Vt.set(Ot, qt)
      }
      return qt
    }

    function YD(tt) {
      return iD(tt, AD)
    }

    function BD(tt, et) {
      if (!et) return !1;
      const Vt = (0, se.g)(tt);
      return !!Vt && mO(Vt, et)
    }

    function pD(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!PO(et)) return [];
      return [iD(tt, {
        depth: WO(et.packVariant),
        sunShadow: BD(et.packVariant, Vt),
        shadowMask: Ot
      })]
    }
    class xD {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = tt, this.sunShadow = Vt, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ge.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = tt.createBuffer({
          label: "shader-pack-inputs",
          size: ge.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ot = (0, ge.w)(et);
        this.textures = tt.createBuffer({
          label: "shader-pack-textures",
          size: Ot.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), tt.queue.writeBuffer(this.textures, 0, Ot), this.bindGroup = tt.createBindGroup({
          label: "shader-pack-inputs",
          layout: YD(tt),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: ge.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: ge.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(tt, et, Vt) {
        (0, ge.E)(this.data, {
          seconds: tt.seconds(),
          lit: Vt,
          renderOffset: tt.renderOffset(),
          jtt: tt.jtt(),
          eyePosition: et,
          shadowDirection: tt.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ot = et ? this.sunShadow : null;
        if ((et || Vt) && !Ot) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!tt && !Ot) return this.bindGroup;
        (tt && tt !== this.depthView || Vt && Vt !== this.maskView) && (this.depthView = null !== tt && void 0 !== tt ? tt : this.depthView, this.maskView = null !== Vt && void 0 !== Vt ? Vt : this.maskView, this.groups.clear());
        const qt = (tt ? 1 : 0) | (Ot ? 2 : 0) | (Vt ? 4 : 0);
        let Dt = this.groups.get(qt);
        if (!Dt) {
          const et = this.entries();
          tt && et.push({
            binding: ge.q,
            resource: tt
          }), Ot && et.push(...Ot.entries()), Vt && et.push({
            binding: ge.t,
            resource: Vt
          }), Dt = this.device.createBindGroup({
            label: `${tt||Vt?"terrain-":""}shader-pack-inputs${tt?"-depth":""}${Ot?"-shadow":""}${Vt?"-mask":""}`,
            layout: iD(this.device, {
              depth: !!tt,
              sunShadow: !!Ot,
              shadowMask: !!Vt
            }),
            entries: et
          }), this.groups.set(qt, Dt)
        }
        return Dt
      }
      bind(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        tt.setBindGroup(ge.f, this.bindGroupFor(et, Vt, Ot))
      }
    }

    function TD(tt, et, Vt) {
      if (tt.gpuVersion === et.gpuBuffersVersion) return !0;
      let Ot;
      do {
        if (Ot = et.gpuBuffersVersion, !gD(tt, et, Vt)) return !1
      } while (et.gpuBuffersVersion !== Ot);
      return tt.gpuVersion = Ot, tt.fitInstances = 0, !0
    }

    function gD(tt, et, Vt) {
      let Ot = null;
      for (let Dt = 0; Dt < tt.slotData.length; Dt++) {
        var qt;
        const mt = tt.slotData[Dt],
          dt = mt ? et.gpuBuffer(mt) : Vt;
        if (!dt) return !1;
        mt && tt.layout.instanceEnds[Dt] < 0 && et.cover(mt, Number.POSITIVE_INFINITY), tt.buffers[Dt] = dt;
        const jt = tt.F_[Dt] + (mt ? et.gpuOffset(mt) : 0);
        jt !== (null !== (qt = Ot) && void 0 !== qt ? qt : tt.offsets)[Dt] && (Ot ??= tt.offsets.slice(), Ot[Dt] = jt), tt.ends[Dt] = mt ? et.gpuEnd(mt) : dt.size
      }
      return Ot && (tt.offsets = Ot), !0
    }

    function sD(tt, et, Vt, Ot) {
      if (et <= tt.fitInstances) return null;
      const {
        layout: qt,
        ends: Dt,
        offsets: mt,
        slotData: dt,
        F_: jt
      } = tt;
      let Ht = !1;
      for (let Xt = 0; Xt < qt.buffers.length; Xt++) {
        const tt = qt.instanceEnds[Xt];
        if (tt < 0) continue;
        const Ot = (et - 1) * qt.buffers[Xt].arrayStride + tt;
        if (Dt[Xt] - mt[Xt] < Ot) return {
          index: Xt,
          needed: Ot
        };
        const Qt = dt[Xt];
        Qt && Vt.cover(Qt, jt[Xt] + Ot) && (Ht = !0)
      }
      return Ht && TD(tt, Vt, Ot), tt.fitInstances = et, null
    }
    var nD = Vt(38068),
      tm = Vt(38105);
    const em = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Vm = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Om = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      qm = `((vertexInputs.aPackedLightLevels >> 16u) | ${Ie.b.placed}u)`,
      Dm = "u32(vertexInputs.aShaderPackItem.x)",
      mm = `${Ie.b.lifeform}u`;

    function dm(tt) {
      return "item" === tt.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const jm = "bloxdSpEnchant",
      Hm = "floor(finalWorld[3].xyz)";

    function Xm(tt, et, Vt) {
      return "placed" === et.kind && tt.reads[Vt].includes("bloxdFragmentBlockPosition")
    }

    function Qm(tt, et) {
      let [Vt, Ot] = tt;
      return Vt === et.point && Ot === et.code
    }

    function lm(tt, et) {
      var Vt, Ot, qt;
      const Dt = null === (Vt = tt.find((tt => tt.texture))) || void 0 === Vt ? void 0 : Vt.texture,
        mt = null === (Ot = tt.find((tt => tt.enchantTier))) || void 0 === Ot ? void 0 : Ot.enchantTier,
        dt = null === (qt = tt.find((tt => tt.overlay))) || void 0 === qt ? void 0 : qt.overlay,
        jt = dt ? et.filter((tt => Qm(tt, dt))).length : 0;
      return dt && 1 === jt ? {
        texture: Dt,
        overlay: dt,
        enchantTier: mt
      } : {
        texture: Dt,
        enchantTier: mt
      }
    }

    function Em(tt) {
      if ("item" === tt.kind) {
        return {
          vertexFlags: `(${Dm} & 0xffffu)`,
          varying: "vPackItem",
          value: Dm,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return tt.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: qm,
        varying: "vPackFlags",
        value: qm,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function fm(tt) {
      return "lifeform" === tt.kind ? mm : "0u"
    }

    function wm(tt) {
      return !!tt.BLOXD_PLUGIN_ENCHANTMENT
    }

    function ym(tt, et) {
      const {
        enchantTier: Vt
      } = et;
      return Vt && wm(et.defines) && "lifeform" === et.kind && Cm(tt, "enchantTier") ? Vt : null
    }

    function Nm(tt, et) {
      return wm(et.defines) && Cm(tt, "enchantSpeed")
    }

    function am(tt) {
      const {
        overlay: et,
        defines: Vt
      } = tt;
      if (!et || !Vt.DIFFUSE) return null;
      const Ot = Vt.VERTEXCOLOR || Vt.INSTANCESCOLOR && Vt.INSTANCES;
      return `vec4f(${et.colour}.rgb * uniforms.vDiffuseInfos.y${Ot?" * fragmentInputs.vColor.rgb":""}, ${et.colour}.a)`
    }
    const Mm = "fragmentInputs.vPackTexture";

    function bm(tt) {
      const {
        atlas: et,
        defines: Vt,
        texture: Ot
      } = tt;
      if (et || !Vt.DIFFUSE) return null;
      if (Ot) return {
        texture: "diffuseSampler",
        ...Ot
      };
      const qt = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Vt.DIFFUSEDIRECTUV?"vMainUV1":2===Vt.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== tt.kind) return qt;
      if (!Vt.BLOXD_PLUGIN_ANIMATED) return {
        ...qt,
        id: Mm
      };
      const Dt = ut.c.WGSL,
        mt = (0, ut.vb)(Dt, "uAnimStatesNum"),
        dt = (0, ut._)(Dt, (0, nD.i)(Dt), mt),
        jt = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${mt})`,
        layers: [dt],
        uv: `vec2f(${jt}.x, ${jt}.y * ${mt} - ${dt})`,
        levelUv: jt,
        id: Mm
      }
    }

    function Jm(tt, et) {
      return "box" === et.kind && !!tt.hooks.surface && null !== bm(et)
    }

    function Cm(tt, et) {
      return tt.reads.fragment.includes(et)
    }

    function um(tt) {
      return !!tt.BLOXD_LIGHTING && !tt.BLOXD_UNLIT
    }

    function Km(tt, et, Vt, Ot) {
      const qt = tt.filter((tt => {
        let [Vt, Ot] = tt;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Vt && Ot === et
      }));
      if (1 !== qt.length) throw new Error(`A model program for shader packs has ${0===qt.length?"no":"more than one"} ${Ot} code before fog (lite/modelShaderPack.ts)`);
      return tt.map((tt => tt === qt[0] ? [tt[0], Vt] : tt))
    }

    function hm(tt, et, Vt, Ot) {
      const {
        hooks: qt
      } = tt, {
        kind: Dt,
        defines: mt
      } = et, dt = [...Vt];
      var jt;
      et.atlas && qt.surface && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", EO("atlasIdxIn")]), "item" === Dt && dt.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ut.d)(ut.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Jm(tt, et) && dt.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ut.d)(ut.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (jt = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${QO}[min(u32(${jt}) - 1u, arrayLength(&${QO}) - 1u)], ${jt} > 0.5);\n`)]);
      const Ht = Em(et);
      Ht && (qt.surface || qt.light) && dt.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Ht.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Ht.varying} = ${Ht.value};`]);
      let Xt = Ot;
      if (Xm(tt, et, "fragment") && (dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Hm});`]), Xt = [...Xt, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Cm(tt, "localPosition") && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${dm(et)};`]), wm(mt) && qt.surface) {
        Nm(tt, et) && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Vt = ym(tt, et);
        Vt && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Vt});`]);
        const Ot = (0, ut.ib)(ut.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Xt = [...Km(Xt, (0, tm.e)(ut.c.WGSL), Ot, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, tm.c)(jm)]]
      }
      const {
        overlay: Qt
      } = et;
      Qt && am(et) && qt.surface && (Xt = Xt.filter((tt => !Qm(tt, Qt))));
      const lt = qt.light ? function(tt) {
        return "placed" === tt.kind ? {
          name: "terrain",
          engine: (0, pe.J)(ut.c.WGSL),
          pack: (0, pe.cb)(ut.c.WGSL)
        } : tt.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, pe.E)(ut.c.WGSL),
          pack: (0, pe.X)(ut.c.WGSL)
        } : null
      }(et) : null;
      if (lt && (Xt = Km(Xt, lt.engine, lt.pack, `${lt.name} light`), "placed" !== Dt && um(mt))) {
        const tt = mt.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, ut.vb)(ut.c.WGSL, "uEntityLightLevels") : (0, ut.Ab)(ut.c.WGSL, "aLightLevels");
        dt.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${pe.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, pe.$)(ut.c.WGSL, tt)])
      }
      return {
        vertexCode: dt,
        fragmentCode: Xt
      }
    }

    function Wm(tt, et, Vt, Ot) {
      return qO(tt, et, Vt, Ot, "model")
    }
    const Sm = "\t@builtin(position) position: vec4f,\n";

    function cm(tt, et) {
      const Vt = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(tt)[0];
      return `${Vt}${et}${tt.slice(Vt.length)}`
    }

    function Rm(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: qt
      } = et, Dt = mO(et, Ot), {
        kind: mt,
        defines: dt
      } = Vt, jt = function(tt, et) {
        var Vt, Ot, qt;
        const {
          defines: Dt
        } = et, mt = Em(et), dt = !!Dt.FOG, jt = wm(Dt), Ht = null !== (Vt = null === mt || void 0 === mt ? void 0 : mt.enchantTier) && void 0 !== Vt ? Vt : ym(tt, et) ? "fragmentInputs.vPackEnchantTier" : "0u", Xt = "lifeform" === et.kind && !Dt.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.vertexFlags) && void 0 !== Ot ? Ot : fm(et),
          vertexLocalPosition: dm(et),
          flags: null !== (qt = null === mt || void 0 === mt ? void 0 : mt.flags) && void 0 !== qt ? qt : fm(et),
          normal: "normalW",
          alpha: Xt ? "alpha * baseColor.a" : "alpha",
          alphaOut: Xt ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: dt ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: dt ? "1.0 - fog" : "0.0",
          enchantTier: Ht,
          enchantColour: jt ? `${jm}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Nm(tt, et) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Cm(tt, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: am(et)
        }
      }(et, Vt), Ht = tt.textures.filter((tt => /^textureAtlas\d+$/.test(tt.name))).length, Xt = Vt.atlas && Ht > 0 ? {
        count: Ht,
        layers: Vt.atlas.layers,
        width: Vt.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: tt.material.slots.has("uAnimDataPerTex") ? (et, Vt) => gO(et, Vt, function(tt) {
          const et = tt.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            BQ: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: tt => `uniforms.uAnimDataPerTex[${tt}]${et}`
          }
        }(tt)) : null
      } : null, Qt = "placed" === mt ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", lt = null !== Xt && void 0 !== Xt ? Xt : bm(Vt), Et = function(tt, Vt) {
        let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,ge.A)()}${jO(et,Vt)}${Ot}${wO(tt)}${eO}${Qt}${et.code}`
      };
      let {
        vertex: ft,
        fragment: wt
      } = tt;
      const yt = NO(qt, jt);
      if (yt) {
        const tt = Xm(et, Vt, "vertex") ? `\tbloxdSpCell = ${Hm};\n` : "";
        ft = Wm(ft, em, `${tt}${yt.slice(1)}${em}`, "vertex")
      }
      const Nt = `${HO(et,Dt,function(tt,et){return et.TWOSIDEDLIGHTING?tt:`select(-(${tt}), ${tt}, fragmentInputs.frontFacing)`}(jt.normal,dt),jt.flags)}${aO(qt,et.strict,et.program,lt,jt)}`;
      Nt && (wt = Wm(wt, Vm, `${Nt.slice(1)}${Vm}`, "surface")), Dt && et.sunShadow && !dt.TWOSIDEDLIGHTING && (wt = Wm(wt, Sm, `${Sm}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Mt = JO(qt);
      if (Mt) {
        const tt = bO(qt, um(dt), !0, jt);
        wt = Wm(wt, Om, `${tt}${Mt.slice(1)}${Om}`, "light")
      }
      const bt = Jm(et, Vt) ? lO : "";
      return {
        ...tt,
        vertex: cm(ft, Et(Xt, !1, bt)),
        fragment: cm(wt, Et(lt, Dt))
      }
    }
    const Im = {
      name: "earthSky",
      uniqueId: -1
    };
    class Pm {
      constructor(tt, et) {
        this.resources = tt, this.epoch = et, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const tt of this.instances.values()) tt.released = !0, this.resources.destroyBuffer(tt.buffer);
        this.instances.clear()
      }
    }

    function Zm(tt) {
      return tt.failed && null !== tt.packGroup
    }
    class Lm {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LD,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new PD;
        this.device = tt, this.resources = et, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.R_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new nq, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new bD((tt => this.modelSlot(tt).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Pe.b)("Lite: "), this.renderStates = new wD(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (tt, et) => this.keepSteady(tt, et), this.lists = void 0, this.slotCount = 0, this.R_ = Ot, this.modelMeshes = qt, this.lists = new tD(qt, Ot, this, this.warnOnce), this.drawDefines = new QD(et, this.warnOnce, ((tt, et, Vt) => this.programWithModel(tt, et, Vt)), Zm), this.vertexLayouts = new KD(et, tt.limits, this.warnOnce), this.sceneLayout = Ke(tt), this.frameLayout = tt.createBindGroupLayout({
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
        }), this.frameBuffer = tt.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new WD(tt, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = tt.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new GD(tt, new WD(tt, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (tt, et, Vt) => this.pipelineFor(tt, et, Vt),
          pipelineCompiling: (tt, et) => !tt.program.failed && !1 !== this.pipelines.get(`${tt.pipelineKey}|${et}`),
          sceneGroup: tt => {
            const et = Vt(tt);
            return et || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), et
          }
        }), et.onDestroy = tt => {
          this.thinBundle.resourceDestroyed(tt)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qt = {
          order: tt,
          isTransparent: et,
          _direct: !et,
          bind: (tt, et) => this.createBinding(qt, et, Vt, Ot)
        };
        return qt
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(tt, et, Vt) {
        var Ot;
        let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = et, this.drawDefines.view = et, this.thinBundle.QJ(), this.writeFrameUniforms();
        const Dt = null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.defineFor("model")) && void 0 !== Ot ? Ot : 0;
        this.drawDefines.modelPackVariant = Dt, qt && 0 !== Dt && (this.packInputs ??= new xD(this.device, qt.textureLayers(), this.sunShadow), this.packInputs.write(qt, et.eye, qt.Rw())), this.lists.clear(), this.slotCount = 0;
        const mt = tt.activeCamera;
        this.R_.select(mt, this.keepSteadyBase), this.modelMeshes.select(mt, et), Vt && this.pushEarthSky(Vt), this.lists.collect(tt), this.thinBundle.yJ(), this.uploadMeshSlots()
      }
      pushDraws(tt, et, Vt, Ot, qt, Dt) {
        let mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const dt = Dt.length;
        for (let jt = 0; jt < Vt; jt++) {
          const Vt = et[jt];
          let dt = this.retainedDraw(tt, Vt, Ot, qt);
          if (void 0 === dt && (dt = this.drawFor(tt, Vt, Ot, qt), this.retain(Vt, dt)), dt) {
            const tt = Vt.owner,
              et = mt ? mt[jt] : -1;
            dt.slotOffset = et < 0 ? this.writeMeshSlot(tt.getWorldMatrix().m, tt.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[et], 16 * et), Dt.push(dt)
          }
        }
        return Dt.length - dt
      }
      bundleDraws(tt, et, Vt) {
        let Ot = 0;
        for (const qt of et) {
          let et = this.retainedDraw(tt, qt, Vt, !1);
          const Dt = void 0 !== et;
          if (void 0 === et && (et = this.drawFor(tt, qt, Vt, !1), this.retain(qt, et)), et) {
            const tt = qt.owner,
              Vt = this.thinBundle.add(qt, et, tt.getWorldMatrix().m, tt.visibility);
            Dt && this.steadyFrom(qt, et, Vt), Ot++
          }
        }
        return Ot
      }
      steadyFrom(tt, et, Vt) {
        const Ot = tt.owner,
          qt = this.R_.base(Ot),
          Dt = Ot.material,
          {
            drawState: mt,
            instance: dt
          } = et.inputs.retained;
        if (!qt || !Dt || 1 !== tt.parts.materials.length || cD(tt) !== Dt) return;
        const jt = qt.steady ??= {
          unit: tt,
          material: Dt,
          visibility: 1,
          draw: et,
          record: Vt,
          drawState: mt,
          instance: dt,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        jt.unit = tt, jt.material = Dt, jt.visibility = Ot.visibility, jt.draw = et, jt.record = Vt, jt.drawState = mt, jt.instance = dt, jt.bindGroup = dt.bindGroup, jt.gpuVersion = this.resources.gpuBuffersVersion, jt.fitInstances = et.inputs.fitInstances, jt.worldFlag = Ot.getWorldMatrix().updateFlag, jt.handedFrame = this.frame
      }
      keepSteady(tt, et) {
        const Vt = tt.steady;
        if (Vt.handedFrame !== this.frame - 1 || (this.frame + Vt.phase) % 8 === 0) return !1;
        const Ot = tt.mesh,
          {
            unit: qt,
            draw: Dt,
            instance: mt,
            drawState: dt
          } = Vt,
          jt = Ot.forcedInstanceCount || Ot.r_;
        if (!Ot.isVisible || Ot.cqt || Ot.visibility !== Vt.visibility || 0 === (Ot.layerMask & et.layerMask) || Ot.material !== Vt.material || 0 !== Ot.renderingGroupId || Ot.hasVertexAlpha || !this.drawDefines.definesHold(dt, qt, dt.instancing) || Vt.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Dt.inputs, qt, dt.instancing, Dt.program) || Dt.program.failed || mt.released || jt <= 0 || jt > Vt.fitInstances) return !1;
        if (mt.frame !== this.frame && this.bindMaterial(mt, this.modelUniforms.refreshModelUniforms(Ot.vI(), mt, mt.model, this.view)), !mt.bindable || mt.bindGroup !== Vt.bindGroup) return !1;
        const Ht = Ot.computeWorldMatrix(),
          Xt = Ht.updateFlag !== Vt.worldFlag;
        return Vt.worldFlag = Ht.updateFlag, Dt.instances = jt, this.thinBundle.addAgain(Vt.record, Dt, Xt ? Ht.m : null, Vt.visibility), Vt.handedFrame = this.frame, this.R_.drawn++, !0
      }
      retainedDraw(tt, et, Vt, Ot) {
        const qt = this.inputs.get(et),
          Dt = null === qt || void 0 === qt ? void 0 : qt.retained;
        if (!qt || !Dt) return;
        const {
          drawState: mt,
          program: dt,
          instance: jt,
          instancing: Ht
        } = Dt, Xt = et.owner;
        if (DD(Xt) !== Ht) return;
        const Qt = this.instanceCount(Xt, Ht);
        if (Qt <= 0) return null;
        if (jt.released || dt.failed || mt.program !== dt || !this.drawDefines.programCurrent(mt, et, Ht, Vt) || !this.inputsStamped(qt, et, Ht, dt) || Xt.isUnIndexed !== Dt.unIndexed || this.indexKey(et) !== Dt.indexData) return;
        if (Dt.indexBuffer && Dt.gpuVersion !== this.resources.gpuBuffersVersion) {
          const tt = this.resources.gpuBuffer(Dt.indexData);
          if (!tt) return;
          Dt.indexBuffer = tt, Dt.gpuVersion = this.resources.gpuBuffersVersion
        }
        let lt = !1;
        if (jt.frame !== this.frame && (lt = this.modelUniforms.refreshModelUniforms(tt, jt, jt.model, this.view)), !this.bindMaterial(jt, lt) || !this.withGpuBuffers(qt) || !this.instanceBuffersFit(Xt.name, qt, Qt)) return null;
        const Et = this.makeDraw(dt, qt, this.renderStates.renderState(mt.model, Xt, Ot, qt.state), jt, Qt);
        return this.setRange(Et, et, Dt.indexBuffer, Dt.indexData), Et
      }
      retain(tt, et) {
        const Vt = this.drawDefines.drawStates.get(tt);
        if (!et || !Vt || Vt.program !== et.program) {
          const et = this.inputs.get(tt);
          return void(et && (et.retained = null))
        }
        const Ot = tt.owner,
          qt = Vt.instancing,
          Dt = this.indexKey(tt),
          mt = et.inputs.retained;
        mt ? (mt.drawState = Vt, mt.instancing = qt, mt.program = et.program, mt.instance = et.material, mt.indexData = Dt, mt.unIndexed = Ot.isUnIndexed, mt.indexBuffer = et.indexBuffer, mt.gpuVersion = this.resources.gpuBuffersVersion) : et.inputs.retained = {
          drawState: Vt,
          instancing: qt,
          program: et.program,
          instance: et.material,
          indexData: Dt,
          unIndexed: Ot.isUnIndexed,
          indexBuffer: et.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(tt, et, Vt, Ot) {
        const qt = et.owner,
          Dt = cD(et);
        if (!Dt) return null;
        const mt = Dt.getClassName();
        let dt = null;
        if (function(tt) {
            return "LinesMesh" === tt.getClassName()
          }(qt)) {
          if (! function(tt) {
              return "ShaderMaterial" === tt.getClassName() && "color" === tt.shaderPath
            }(Dt)) return this.warnOnce(`lines:${mt}`, `A LinesMesh with a ${mt} is not drawn yet (${Dt.name})`), null;
          dt = qt
        } else if ("StandardMaterial" !== mt && "LiteMaterial" !== mt) return this.warnOnce(`class:${mt}`, `${mt} is not drawn yet (${Dt.name})`), null;
        const jt = DD(qt),
          Ht = this.instanceCount(qt, jt);
        if (Ht <= 0) return null;
        const Xt = dt ? this.lineProgramFor(qt, Vt, jt) : this.drawDefines.programFor(tt, et, Dt, Vt, jt);
        if (!Xt || Xt.failed) return null;
        const Qt = dt ? null : this.drawDefines.drawStates.get(et).model,
          lt = Qt ? this.modelInstance(Qt, Xt) : this.materialInstance(qt, Xt);
        let Et = !1;
        if (lt.frame !== this.frame && (dt ? Mt(lt.ubo, dt) : Et = this.modelUniforms.refreshModelUniforms(tt, lt, lt.model, this.view)), !this.bindMaterial(lt, Et)) return null;
        const ft = this.meshInputs(et, Xt, jt);
        if (!ft || !this.instanceBuffersFit(qt.name, ft, Ht)) return null;
        const wt = this.indexKey(et);
        let yt = null;
        if (wt && !qt.isUnIndexed && (yt = this.resources.gpuBuffer(wt), !yt)) return null;
        const Nt = this.renderStates.renderState(null !== Qt && void 0 !== Qt ? Qt : Dt, qt, Ot, ft.state, dt ? "line-list" : "triangle-list"),
          bt = this.makeDraw(Xt, ft, Nt, lt, Ht);
        return this.setRange(bt, et, yt, wt), bt
      }
      indexKey(tt) {
        const et = HD(tt);
        return et ? this.resources.modelIndex(et) : null
      }
      setRange(tt, et, Vt, Ot) {
        Vt && (tt.indexBuffer = Vt, tt.indexFormat = this.resources.indexFormat(Ot));
        const qt = 4 * et.range + (Vt ? 0 : 2);
        tt.unit = et, tt.first = et.parts.nw[qt], tt.count = et.parts.nw[qt + 1]
      }
      makeDraw(tt, et, Vt, Ot, qt) {
        et.state !== Vt && (et.state = Vt, et.pipelineKey = `${tt.id}|${et.layout.key}|${Vt.key}`, et.pipeline = null);
        const Dt = et.draw ??= {
          program: tt,
          inputs: et,
          pipelineKey: "",
          layout: et.layout,
          state: Vt,
          material: Ot,
          slotOffset: 0,
          vertexBuffers: et.buffers,
          vertexOffsets: et.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: qt,
          unit: null
        };
        return Dt.program = tt, Dt.pipelineKey = et.pipelineKey, Dt.state = Vt, Dt.material = Ot, Dt.vertexOffsets = et.offsets, Dt.indexBuffer = null, Dt.instances = qt, Dt
      }
      instanceCount(tt, et) {
        switch (et) {
          case "thin":
            return tt.forcedInstanceCount || tt.r_;
          case "instanced":
            return this.prepareInstances(tt);
          case "none":
            return 1
        }
      }
      prepareInstances(tt) {
        const et = function(tt, et) {
          const Vt = et._userInstancedBuffersStorage,
            Ot = tt.batchUploads.get(et);
          if (Ot) {
            var qt;
            if (Ot.layout === (null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.interleavedKinds) && void 0 !== qt ? qt : null)) return Ot;
            Ot.release()
          }
          return new fe(tt, et, Vt)
        }(this.resources, tt);
        return et.frame !== this.frame && et.pack(tt, this.modelMeshes.instanceBatch(tt), this.modelMeshes.worlds, this.frame), et.count
      }
      programWithModel(tt, et, Vt) {
        const Ot = this.modelSlot(tt),
          qt = lD(Ot, tt, Vt),
          Dt = this.drawDefines.modelPackKind(tt),
          mt = Dt ? function(tt, et, Vt, Ot) {
            const qt = (0, vt.s)(tt, Kt.j.name),
              Dt = [];
            for (const {
                feature: jt,
                state: Ht,
                active: Xt
              }
              of tt.features) {
              var mt, dt;
              const tt = Xt ? null === (mt = (dt = (0, Ze.g)(jt)).YE) || void 0 === mt ? void 0 : mt.call(dt, Ht) : void 0;
              tt && Dt.push(tt)
            }
            return {
              kind: et,
              atlas: null !== qt && void 0 !== qt && qt.active ? (0, Kt.c)(qt.state) : null,
              defines: Vt,
              ...lm(Dt, Ot)
            }
          }(tt, Dt, et, Ot.fragmentCode) : null;
        if (mt && function(tt) {
            const et = tt.defines;
            return (null === tt.atlas || !!et.DIFFUSE && 1 === et.DIFFUSEDIRECTUV) && !!et.NORMAL && !et.REFLECTION && !et.EMISSIVEASILLUMINATION && !et.LINKEMISSIVEWITHDIFFUSE
          }(mt)) {
          const Vt = this.modelPackProgram(tt, et, `${qt}#${Dt}#sp${this.drawDefines.modelPackVariant}`, Ot, mt);
          if (Vt && !Vt.failed) return Vt
        }
        const dt = this.programs.get(qt);
        if (dt || this.unbuildable.has(qt)) return null !== dt && void 0 !== dt ? dt : null;
        let jt;
        try {
          jt = Rq({
            defines: dD(et),
            vertexCode: Ot.vertexCode,
            fragmentCode: Ot.fragmentCode,
            pluginUniforms: Ot.pluginUniforms
          })
        } catch (Ht) {
          return this.unbuildable.add(qt), this.warnOnce(`build:${qt}`, `could not build a program for ${tt.name}: ${String(Ht)}`), null
        }
        return this.createProgram(qt, jt, "standard")
      }
      modelPackProgram(tt, et, Vt, Ot, qt) {
        const Dt = this.programs.get(Vt);
        if (Dt || this.unbuildable.has(Vt)) return null !== Dt && void 0 !== Dt ? Dt : null;
        const mt = this.drawDefines.modelPackVariant;
        let dt;
        try {
          const tt = function(tt) {
              return (0, se.e)(tt, "model")
            }(mt),
            Vt = hm(tt, qt, Ot.vertexCode, Ot.fragmentCode);
          dt = Rm(Rq({
            defines: dD(et),
            ...Vt,
            pluginUniforms: Ot.pluginUniforms
          }), tt, qt, !!this.sunShadow)
        } catch (Xt) {
          return this.unbuildable.add(Vt), this.warnOnce(`build:${Vt}`, `could not build a shader pack program for ${tt.name}, which draws without the pack: ${String(Xt)}`), null
        }
        const jt = BD(mt, !!this.sunShadow),
          Ht = {
            group: this.packInputs.bindGroupFor(null, jt),
            layout: iD(this.device, {
              depth: !1,
              sunShadow: jt
            })
          };
        return this.createProgram(Vt, dt, function(tt) {
          return `standard-sp${tt}`
        }(mt), Ht)
      }
      lineProgramFor(tt, et, Vt) {
        const Ot = Nt(tt, Vt, et, this.view);
        let qt = this.linePrograms.get(Ot);
        var Dt;
        return qt || (qt = this.createProgram(`lines#${Ot}`, (Dt = function(tt) {
          const et = new Map;
          for (let Vt = 0; Vt < Ht.length; Vt++) tt & 1 << Vt && et.set(Ht[Vt], !0);
          return et
        }(Ot), Lq({
          defines: Dt,
          vertex: Pq,
          fragment: Zq,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Ot, qt)), qt
      }
      createProgram(tt, et, Vt) {
        var Ot;
        let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Dt = this.nextProgramId++,
          mt = `${Vt}-${Dt}`,
          dt = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          jt = [{
            binding: 0,
            visibility: dt,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Qt of et.textures) jt.push({
          binding: Qt.binding,
          visibility: dt,
          texture: {
            viewDimension: Qt.dimension
          }
        }), jt.push({
          binding: Qt.samplerBinding,
          visibility: dt,
          sampler: {}
        });
        const Ht = this.device.createBindGroupLayout({
            label: mt,
            entries: jt
          }),
          Xt = {
            key: tt,
            id: Dt,
            kind: Vt,
            program: et,
            vertex: this.device.createShaderModule({
              label: `${mt}-vertex`,
              code: et.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${mt}-fragment`,
              code: et.fragment
            }),
            materialLayout: Ht,
            pipelineLayout: this.device.createPipelineLayout({
              label: mt,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Ht, ...qt ? [qt.layout] : []]
            }),
            packGroup: null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.group) && void 0 !== Ot ? Ot : null,
            failed: !1
          };
        return this.programs.set(tt, Xt), Xt
      }
      writeFrameUniforms() {
        const tt = this.frameUniforms;
        MD(this.view, tt), this.device.queue.writeBuffer(this.frameBuffer, 0, tt)
      }
      materialInstance(tt, et) {
        let Vt = this.materials.get(tt);
        if (!Vt) {
          const et = new Map;
          this.materials.set(tt, et);
          const {
            resources: Ot,
            materials: qt
          } = this;
          tt.ZI.addOnce((() => {
            for (const tt of et.values()) tt.released = !0, Ot.destroyBuffer(tt.buffer);
            qt.delete(tt)
          })), Vt = et
        }
        let Ot = Vt.get(et.key);
        return Ot || (Ot = this.newMaterialInstance(tt, null, et), Vt.set(et.key, Ot)), Ot
      }
      modelInstance(tt, et) {
        const Vt = this.modelSlot(tt);
        let Ot = Vt.instances.get(et.key);
        return Ot || (Ot = this.newMaterialInstance(tt, tt, et), Vt.instances.set(et.key, Ot)), Ot
      }
      modelSlot(tt) {
        var et;
        let Vt = tt.gpu[St.i.lite];
        return (null === (et = Vt) || void 0 === et ? void 0 : et.epoch) !== this.resources.epoch && (Vt = new Pm(this.resources, this.resources.epoch), tt.gpu[St.i.lite] = Vt), Vt
      }
      newMaterialInstance(tt, et, Vt) {
        const Ot = Vt.program.material.floats,
          qt = new Float32Array(Ot),
          Dt = new Map;
        return {
          owner: tt,
          model: et,
          program: Vt,
          data: qt,
          uploaded: new Float32Array(Ot).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${tt.name}-uniforms`,
            size: Math.max(16, 4 * Ot),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Dt,
          ubo: new aD(Vt.program.material.slots, qt, Dt),
          bindGroup: null,
          bound: new Array(2 * Vt.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(tt) {
        var et;
        const Vt = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: oq + rq,
            fragment: oq + Uq,
            attributes: [],
            material: zq,
            textures: []
          }, "earthSky"),
          Ot = this.earthSkyUniforms ??= this.newMaterialInstance(Im, null, Vt);
        this.earthSkyFrom !== tt && (this.earthSkyFrom = tt, Ot.data.fill(0)), gq(Ot.ubo, tt, this.view);
        const qt = this.vertexInputs(Vt, Im, "earthSky", Vt, null);
        if (Vt.failed || !qt || !this.bindMaterial(Ot, !1)) return;
        const Dt = null !== (et = qt.state) && void 0 !== et ? et : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          mt = this.makeDraw(Vt, qt, Dt, Ot, 1);
        mt.count = Fq.length;
        const dt = sq(tt, this.view);
        mt.slotOffset = this.writeMeshSlot(dt, 1), this.lists.skyDraws.push(mt)
      }
      uploadIfChanged(tt) {
        const {
          data: et,
          uploaded: Vt
        } = tt;
        for (let Ot = 0; Ot < et.length; Ot++)
          if (et[Ot] !== Vt[Ot]) return Vt.set(et), void this.device.queue.writeBuffer(tt.buffer, 0, et)
      }
      bindMaterial(tt, et) {
        return tt.frame !== this.frame && (tt.frame = this.frame, et || this.uploadIfChanged(tt), tt.bindable = this.bindTextures(tt)), tt.bindable
      }
      bindTextures(tt) {
        const {
          program: et,
          bound: Vt
        } = tt, Ot = et.program.textures;
        let qt = !tt.bindGroup,
          Dt = !0;
        for (let mt = 0; mt < Ot.length; mt++) {
          const et = tt.textures.get(Ot[mt].name),
            dt = et ? this.resources.boundTexture(et) : null;
          dt ? Vt[2 * mt] === dt.view && Vt[2 * mt + 1] === dt.sampler || (Vt[2 * mt] = dt.view, Vt[2 * mt + 1] = dt.sampler, qt = !0) : (et || tt.ubo.expected.has(Ot[mt].name) || this.warnOnce(`texture:${tt.owner.name}:${Ot[mt].name}`, `${tt.owner.name} has no ${Ot[mt].name}`), Dt = !1)
        }
        if (!Dt) return qt && (tt.bindGroup = null), !1;
        if (qt) {
          const qt = [{
            binding: 0,
            resource: {
              buffer: tt.buffer
            }
          }];
          for (let tt = 0; tt < Ot.length; tt++) qt.push({
            binding: Ot[tt].binding,
            resource: Vt[2 * tt]
          }), qt.push({
            binding: Ot[tt].samplerBinding,
            resource: Vt[2 * tt + 1]
          });
          tt.bindGroup = this.device.createBindGroup({
            label: `${tt.owner.name}-material`,
            layout: et.materialLayout,
            entries: qt
          })
        }
        return !0
      }
      writeMeshSlot(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, tt, et, Vt), this.slotCount++ * Xq
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(tt, et, Vt, Ot, qt) {
        let Dt = this.inputs.get(tt);
        if (!Dt || Dt.program !== Ot || !hD(et, Dt, this.resources, qt)) {
          var mt;
          if (Dt = null !== (mt = this.vertexLayouts.resolveInputs(et, Vt, Ot, qt)) && void 0 !== mt ? mt : void 0, !Dt) return null;
          this.inputs.set(tt, Dt)
        }
        return this.withGpuBuffers(Dt)
      }
      meshInputs(tt, et, Vt) {
        const Ot = this.inputs.get(tt);
        if (Ot && this.inputsStamped(Ot, tt, Vt, et)) return this.withGpuBuffers(Ot);
        const qt = tt.owner,
          Dt = HD(tt),
          mt = this.vertexInputs(tt, qt, qt.name, et, Dt);
        return mt && (mt.geometry = XD(tt), mt.instanceLayout = this.drawDefines.instanceLayout(qt, Vt)), mt
      }
      inputsStamped(tt, et, Vt, Ot) {
        return function(tt, et, Vt, Ot) {
          return tt.program === Vt && tt.geometry === XD(et) && tt.instanceLayout === Ot
        }(tt, et, Ot, this.drawDefines.instanceLayout(et.owner, Vt))
      }
      withGpuBuffers(tt) {
        return TD(tt, this.resources, this.zeroBuffer) ? tt : null
      }
      instanceBuffersFit(tt, et, Vt) {
        const Ot = sD(et, Vt, this.resources, this.zeroBuffer);
        if (Ot) {
          const qt = et.ends[Ot.index] - et.offsets[Ot.index] + et.F_[Ot.index];
          return this.warnOnce(`overrun:${tt}`, `${tt} draws ${Vt} instances from a ${qt}-byte buffer (${Ot.needed} needed)`), !1
        }
        return !0
      }
      createBinding(tt, et, Vt, Ot) {
        const qt = `${et._colorFormat}|${et._depthStencilFormat}|${et._depthCompare}|${et._sampleCount}`,
          Dt = ce(this.device, et);
        if (tt === this.skyLastRenderable) {
          let Vt = null;
          return {
            renderable: tt,
            pipeline: Dt,
            draw: tt => Vt ? this.drawSky(tt, et, qt, Vt) : 0,
            update: tt => {
              Vt = tt
            }
          }
        }
        return {
          renderable: tt,
          pipeline: Dt,
          draw: tt => (Ot ? Ot.execute(tt, et, qt) : 0) + this.drawList(tt, et, qt, Vt)
        }
      }
      drawSky(tt, et, Vt, Ot) {
        const qt = this.lists.skyDraws,
          Dt = qt.length > 0;
        if (Dt) {
          var mt;
          const Vt = (null !== (mt = et._depthCompare) && void 0 !== mt ? mt : he).startsWith("greater") ? 0 : 1;
          tt.setViewport(0, 0, Ot.targetWidth, Ot.targetHeight, Vt, Vt)
        }
        const dt = this.drawList(tt, et, Vt, qt);
        return Dt && tt.setViewport(0, 0, Ot.targetWidth, Ot.targetHeight, 0, 1), dt
      }
      drawList(tt, et, Vt, Ot) {
        let qt = 0;
        const Dt = this.binder;
        Dt.reset();
        for (const mt of Ot) {
          const Ot = this.pipelineFor(mt, et, Vt);
          Ot && (Dt.bind(tt, mt, Ot, this.meshSlots.bindGroup, mt.slotOffset), mt.indexBuffer ? tt.drawIndexed(mt.count, mt.instances, mt.first, 0, 0) : tt.draw(mt.count, mt.instances, mt.first, 0), qt++)
        }
        return qt
      }
      pipelineFor(tt, et, Vt) {
        var Ot, qt;
        if (tt.program.failed) return null;
        const Dt = tt.inputs;
        if (Dt.pipeline && Dt.pipelineTarget === Vt) return Dt.pipeline;
        const mt = `${tt.pipelineKey}|${Vt}`,
          dt = this.pipelines.get(mt);
        if (void 0 !== dt) return dt && (Dt.pipeline = dt, Dt.pipelineTarget = Vt), dt || null;
        this.pipelines.set(mt, null);
        const {
          program: jt,
          layout: Ht,
          state: Xt
        } = tt, Qt = {
          label: `standard-${jt.id}`,
          layout: jt.pipelineLayout,
          vertex: {
            module: jt.vertex,
            entryPoint: "main",
            buffers: Ht.buffers
          },
          fragment: Me({
            module: jt.fragment,
            entryPoint: "main"
          }, et, Xt.blend, Xt.colourWrite),
          depthStencil: et._depthStencilFormat ? {
            format: et._depthStencilFormat,
            depthCompare: null !== (Ot = null !== (qt = Xt.depthCompare) && void 0 !== qt ? qt : et._depthCompare) && void 0 !== Ot ? Ot : he,
            depthWriteEnabled: Xt.depthWrite,
            depthBias: Xt.depthBias,
            depthBiasSlopeScale: Xt.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: et._sampleCount
          },
          primitive: {
            topology: Xt.topology,
            frontFace: Xt.frontFace,
            cullMode: Xt.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Qt).then((tt => {
          this.compiling--, this.pipelines.set(mt, tt)
        }), (tt => {
          this.compiling--, this.reportFailure(jt, mt, tt)
        })), null
      }
      forEachSunShadowCaster(tt) {
        const et = this.caster,
          Vt = (Vt, Ot, qt) => {
            const Dt = Vt.unit && function(tt) {
              const et = tt.material.model;
              return null !== et && (et.lifeform || et.item) && et.castsSunShadow && "triangle-list" === tt.state.topology
            }(Vt) ? HD(Vt.unit) : null;
            if (!Dt) return;
            const mt = Vt.unit.owner;
            switch (et.geometry = Dt, et.skip = mt.noSunShadowVertices, et.indexed = null !== Vt.indexBuffer, et.first = Vt.first, et.count = Vt.count, et.sQ = Ot, et.worldAt = qt, et.instances = null, et.instanceCount = 1, et.thin = !1, DD(mt)) {
              case "thin": {
                const tt = mt._thinInstanceDataStorage.matrixData;
                if (!tt) return;
                et.instances = tt, et.instanceCount = Math.min(Vt.instances, tt.length / 16), et.thin = !0;
                break
              }
              case "instanced": {
                const tt = this.resources.batchUploads.get(mt);
                if (!tt || tt.frame !== this.frame || !this.writeBatchCasters(tt)) return;
                break
              }
            }
            tt(et)
          };
        for (const Ot of this.lists.opaqueDraws) Vt(Ot, this.meshSlots.data, Ot.slotOffset / 4);
        this.thinBundle.forEachDrawn(Vt)
      }
      writeBatchCasters(tt) {
        const {
          caster: et
        } = this, Vt = tt.packedMatrices, Ot = tt.count;
        et.instances = Vt, et.instanceCount = Ot;
        let qt = -1;
        for (let Dt = 0; Dt < Ot; Dt++) {
          const et = Fm(tt.packedRowMesh(Dt));
          et && qt < 0 ? (this.casterWorlds.length < 16 * Ot && (this.casterWorlds = new Float32Array(Vt.length)), this.casterWorlds.set(Vt.subarray(0, 16 * Dt)), qt = Dt) : !et && qt >= 0 && (this.casterWorlds.set(Vt.subarray(16 * Dt, 16 * Dt + 16), 16 * qt), qt++)
        }
        return qt >= 0 && (et.instances = this.casterWorlds, et.instanceCount = qt), et.instanceCount > 0
      }
      async reportFailure(tt, et, Vt) {
        const Ot = [];
        let qt = !0;
        for (const [Dt, mt] of [
            ["vertex", tt.vertex],
            ["fragment", tt.fragment]
          ]) {
          const tt = await mt.getCompilationInfo();
          for (const et of tt.messages) qt &&= "error" !== et.type, Ot.push(`${Dt}:${et.lineNum}:${et.linePos} ${et.type}: ${et.message}`)
        }
        if (qt && !tt.packGroup) return this.pipelines.set(et, !1), console.error(`Lite: pipeline ${et} failed`, Vt), void Qe(this.device, "mesh", tt.kind, Vt);
        tt.failed || (tt.failed = !0, console.error(`Lite: program ${tt.id} failed`, Vt, Ot.join("\n"), {
          program: tt.program,
          key: tt.key
        }), Qe(this.device, "mesh", tt.kind, Vt, qt ? null : Ot[0]))
      }
    }

    function Fm(tt) {
      var et, Vt;
      const Ot = null === (et = tt.qL) || void 0 === et || null === (Vt = et.aShaderPackItem) || void 0 === Vt ? void 0 : Vt.x;
      return void 0 !== Ot && 0 !== (Ot & Ie.i)
    }
    var km = Vt(41933),
      Gm = Vt(41941),
      zm = Vt(41946),
      om = Vt(41891);
    const rm = [0, 3, 1, 4, 2, 5];

    function Um(tt, et, Vt, Ot, qt) {
      const Dt = Vt[0].width;
      try {
        return qt ? function(tt, et, Vt) {
          const Ot = (0, om.c)(tt, Vt, Vt, 6);
          for (let qt = 0; qt < 6; qt++)(0, om.d)(tt, Ot, qt, et[rm[qt]], {
            invertY: !1
          });
          return Ot.texture
        }(tt, Vt, Dt) : function(tt, et, Vt, Ot) {
          const qt = tt.createTexture({
            label: "sink-cube",
            size: {
              width: Vt,
              height: Vt,
              depthOrArrayLayers: 6
            },
            format: Ot,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Dt = 0; Dt < 6; Dt++) tt.queue.copyExternalImageToTexture({
            source: et[rm[Dt]]
          }, {
            texture: qt,
            origin: {
              x: 0,
              y: 0,
              z: Dt
            }
          }, {
            width: Vt,
            height: Vt
          });
          return qt
        }(et, Vt, Dt, 1 === Ot ? "r8unorm" : "rgba8unorm")
      } finally {
        Am(Vt)
      }
    }

    function Am(tt) {
      for (const et of null !== tt && void 0 !== tt ? tt : []) null === et || void 0 === et || et.close()
    }
    async function im(tt) {
      const et = [],
        Vt = [];
      if (await Promise.all(tt.map(((tt, Ot) => (et[Ot] = null, tt.then((tt => {
          et[Ot] = tt
        }), (tt => {
          Vt.push(tt)
        })))))), Vt.length > 0) throw Am(et), Vt[0];
      return et
    }
    class Ym {
      constructor(tt) {
        this.uQ = tt, this.starts = [], this.lengths = [], this.used = 0, tt > 0 && (this.starts.push(0), this.lengths.push(tt))
      }
      allocate(tt) {
        const {
          starts: et,
          lengths: Vt
        } = this;
        for (let Ot = 0; Ot < et.length; Ot++) {
          if (Vt[Ot] < tt) continue;
          const qt = et[Ot];
          return Vt[Ot] === tt ? (et.splice(Ot, 1), Vt.splice(Ot, 1)) : (et[Ot] += tt, Vt[Ot] -= tt), this.used += tt, qt
        }
        return -1
      }
      free(tt, et) {
        this.used -= et;
        const Vt = Math.min(tt + et, this.uQ);
        Vt > tt && this.release(tt, Vt - tt)
      }
      grow(tt) {
        const et = this.uQ;
        this.uQ = tt, this.release(et, tt - et)
      }
      truncate(tt) {
        const {
          starts: et,
          lengths: Vt
        } = this;
        for (let Ot = et.length - 1; Ot >= 0 && et[Ot] + Vt[Ot] > tt; Ot--) et[Ot] >= tt ? (et.splice(Ot, 1), Vt.splice(Ot, 1)) : Vt[Ot] = tt - et[Ot];
        this.uQ = tt
      }
      release(tt, et) {
        const {
          starts: Vt,
          lengths: Ot
        } = this;
        let qt = 0,
          Dt = Vt.length;
        for (; qt < Dt;) {
          const et = qt + Dt >> 1;
          Vt[et] < tt ? qt = et + 1 : Dt = et
        }
        const mt = qt,
          dt = mt > 0 && Vt[mt - 1] + Ot[mt - 1] === tt,
          jt = mt < Vt.length && tt + et === Vt[mt];
        dt && jt ? (Ot[mt - 1] += et + Ot[mt], Vt.splice(mt, 1), Ot.splice(mt, 1)) : dt ? Ot[mt - 1] += et : jt ? (Vt[mt] = tt, Ot[mt] += et) : (Vt.splice(mt, 0, tt), Ot.splice(mt, 0, et))
      }
    }
    const Bm = 256;
    class pm {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = tt, this.onReplaced = et, this.mergeGap = Vt, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.nw = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const qt = Math.max(Bm, Math.ceil(Ot / Bm) * Bm);
        this.bytes = new Uint8Array(qt), this.words = new Uint32Array(this.bytes.buffer), this.nw = new Ym(qt / Bm)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(tt) {
        return Math.max(1, Math.ceil(tt / Bm)) * Bm
      }
      allocate(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt;
        const Ot = pm.slotBytes(tt),
          qt = Ot / Bm;
        let Dt = this.nw.allocate(qt);
        Dt < 0 && (this.grow(this.nw.uQ + qt), Dt = this.nw.allocate(qt));
        const mt = Dt * Bm;
        return this.growTo(mt + Math.max(Vt, Ot)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, mt, mt + Ot), et && this.bytes.set(new Uint8Array(et.buffer, et.byteOffset, Math.min(et.byteLength, Ot)), mt), this.markDirty(mt, mt + Ot), mt
      }
      growTo(tt) {
        const et = Math.ceil(tt / Bm);
        et > this.nw.uQ && this.grow(et)
      }
      free(tt, et) {
        this.freed.push(tt, et)
      }
      write(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Ot <= 0) return;
        Ot <= 1024 && 0 === (3 & (tt | Vt | Ot)) ? this.copyWords(tt >> 2, et.buffer, Vt >> 2, Ot >> 2) : this.bytes.set(new Uint8Array(et.buffer, Vt, Ot), tt);
        let Dt = tt + Ot;
        if (qt) {
          const et = tt + 4 * Math.ceil(Ot / 4);
          this.bytes.fill(0, Dt, et), Dt = et
        }
        this.markDirty(tt, Dt)
      }
      copyWords(tt, et, Vt, Ot) {
        let qt = this.sourceWords.get(et);
        qt || (qt = new Uint32Array(et, 0, et.byteLength >> 2), this.sourceWords.set(et, qt));
        const Dt = this.words;
        for (let mt = 0; mt < Ot; mt++) Dt[tt + mt] = qt[Vt + mt]
      }
      move(tt, et, Vt) {
        this.bytes.copyWithin(et, tt, tt + Vt), this.markDirty(et, et + Vt)
      }
      flush() {
        for (const et of this.retired) this.onReplaced(et), et.destroy();
        this.retired.length = 0;
        const tt = this.dirtyStarts.length;
        if (tt > 0) {
          const {
            dirtyStarts: et,
            dirtyEnds: Vt,
            order: Ot
          } = this;
          Ot.length = tt;
          for (let dt = 0; dt < tt; dt++) Ot[dt] = dt;
          tt > 1 && Ot.sort(((tt, Vt) => et[tt] - et[Vt]));
          const qt = this.mergeGap;
          let Dt = et[Ot[0]],
            mt = Vt[Ot[0]];
          for (let dt = 1; dt < tt; dt++) {
            const tt = Ot[dt];
            et[tt] - mt <= qt ? mt = Math.max(mt, Vt[tt]) : (this.send(Dt, mt), Dt = et[tt], mt = Vt[tt])
          }
          this.send(Dt, mt), et.length = 0, Vt.length = 0
        }
        this.holding = !1
      }
      yJ() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const tt = this.freed;
        for (let et = 0; et < tt.length; et += 2) this.nw.free(tt[et] / Bm, tt[et + 1] / Bm);
        tt.length = 0
      }
      send(tt, et) {
        this.device.queue.writeBuffer(this.gpu, tt, this.bytes.buffer, tt, et - tt);
        for (const Vt of this.replaced) {
          const Ot = Math.min(et, Vt.size);
          Ot > tt && this.device.queue.writeBuffer(Vt, tt, this.bytes.buffer, tt, Ot - tt)
        }
      }
      markDirty(tt, et) {
        tt &= -4, et = et + 3 & -4, this.holding ? (this.dirtyStarts.push(tt), this.dirtyEnds.push(et)) : this.send(tt, et)
      }
      grow(tt) {
        const et = this.nw.uQ,
          Vt = Math.max(2 * et, tt),
          Ot = new Uint8Array(Vt * Bm);
        Ot.set(this.bytes);
        const qt = this.gpu;
        this.gpu = this.createGpu(Ot.byteLength), this.bytes = Ot, this.words = new Uint32Array(Ot.buffer), this.nw.grow(Vt), qt && (this.replaced.push(qt), this.onReplaced(qt)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, et * Bm)
      }
      createGpu(tt) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: tt,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function xm(tt) {
      return Array.isArray(tt) ? new Float32Array(tt) : tt
    }

    function Tm(tt, et, Vt, Ot, qt) {
      const Dt = pt(qt),
        mt = Math.min(qt, Ot.byteLength);
      if (Dt === mt && Ot.byteOffset % 4 === 0) return void tt.queue.writeBuffer(et, Vt, Ot.buffer, Ot.byteOffset, Dt);
      const dt = new Uint8Array(Dt);
      dt.set(new Uint8Array(Ot.buffer, Ot.byteOffset, mt)), tt.queue.writeBuffer(et, Vt, dt)
    }

    function gm(tt, et, Vt) {
      const Ot = "linear",
        qt = "nearest";
      let Dt = qt,
        mt = qt,
        dt = "nearest",
        jt = !et;
      switch (tt) {
        case 11:
          Dt = Ot, mt = Ot;
          break;
        case 3:
          Dt = Ot, mt = Ot, dt = et ? "linear" : "nearest";
          break;
        case 8:
          dt = et ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          mt = Ot;
          break;
        case 6:
          mt = Ot, dt = et ? "linear" : "nearest";
          break;
        case 7:
          mt = Ot, jt = !0;
          break;
        case 9:
          Dt = Ot;
          break;
        case 10:
          Dt = Ot, dt = et ? "linear" : "nearest";
          break;
        case 2:
          Dt = Ot, mt = Ot, Vt > 1 ? (dt = "linear", jt = !1) : jt = !0;
          break;
        case 12:
          Dt = Ot, jt = !0;
          break;
        default:
          jt = !0
      }
      return Vt > 1 && !jt ? {
        magFilter: Ot,
        minFilter: Ot,
        mipmapFilter: "linear",
        maxAnisotropy: Vt
      } : {
        magFilter: Dt,
        minFilter: mt,
        mipmapFilter: dt,
        ...jt ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function sm(tt) {
      return 0 === tt ? "clamp-to-edge" : 2 === tt ? "mirror-repeat" : "repeat"
    }
    class nm {
      constructor(tt, et) {
        let {
          vertexArena: Vt = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = tt, this.device = et, this.buffers = new WeakMap, this.T6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Vt ? this.createArena() : null
      }
      createArena() {
        return new pm(this.device, (tt => {
          var et;
          null === (et = this.onDestroy) || void 0 === et || et.call(this, tt), this.gpuBuffersVersion++
        }))
      }
      rebind(tt, et) {
        this.engine = tt, this.device = et, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const Vt of this.liveUploads) Vt.rebind();
        for (const Vt of this.rebindWaiters.splice(0)) Vt()
      }
      flushUploads() {
        var tt;
        null === (tt = this.arena) || void 0 === tt || tt.flush()
      }
      endUploadFrame() {
        var tt;
        null === (tt = this.arena) || void 0 === tt || tt.yJ()
      }
      vertexBufferCreated(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vt ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(tt);
        const qt = xm(et);
        tt.uQ = qt.byteLength, this.buffers.set(tt, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Vt && null !== this.arena,
          pending: qt,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Ot
        })
      }
      vertexBufferUpdated(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        const qt = this.buffers.get(tt);
        if (!qt) return;
        const Dt = xm(et),
          mt = void 0 === Ot ? Dt.byteLength : Math.min(Ot, Dt.byteLength);
        this.update(qt, Dt, Vt, mt)
      }
      vertexBufferFloatsUpdated(tt, et, Vt, Ot) {
        const qt = this.buffers.get(tt);
        if (!qt) return;
        const Dt = Vt * Float32Array.BYTES_PER_ELEMENT,
          mt = (Ot - Vt) * Float32Array.BYTES_PER_ELEMENT;
        qt.slot >= 0 && mt > 0 && Dt + mt <= qt.size ? this.writeSlot(qt, Dt, et, et.byteOffset + Dt, mt, !1) : qt.gpu && mt > 0 && Dt + mt <= qt.gpu.size ? this.device.queue.writeBuffer(qt.gpu, Dt, et.buffer, et.byteOffset + Dt, mt) : this.update(qt, et.subarray(Vt, Ot), Dt, mt)
      }
      indexBufferCreated(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(tt);
        const Ot = function(tt) {
          if (tt instanceof Uint16Array || tt instanceof Uint32Array) return tt;
          for (let et = 0; et < tt.length; et++)
            if (tt[et] >= 65535) return new Uint32Array(tt);
          return new Uint16Array(tt)
        }(et);
        tt.is32Bits = 4 === Ot.BYTES_PER_ELEMENT, tt.uQ = Ot.byteLength, this.buffers.set(tt, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Ot,
          ownsPending: Ot !== et,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Vt
        })
      }
      bufferDeleted(tt) {
        const et = this.buffers.get(tt);
        null !== et && void 0 !== et && et.gpu ? (this.destroyBuffer(et.gpu), this.gpuBuffersVersion++) : et && et.slot >= 0 && (this.arena.free(et.slot, et.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(tt)
      }
      update(tt, et, Vt, Ot) {
        if (tt.slot >= 0) this.updateSlot(tt, et, Vt, Ot);
        else if (tt.gpu) {
          if (Vt + pt(Ot) > tt.gpu.size) {
            const et = this.device.createBuffer({
                label: tt.label,
                size: pt(Math.max(2 * tt.gpu.size, Vt + Ot)),
                usage: tt.usage | GPUBufferUsage.COPY_SRC
              }),
              qt = this.device.createCommandEncoder();
            qt.copyBufferToBuffer(tt.gpu, 0, et, 0, tt.gpu.size), this.device.queue.submit([qt.finish()]), this.destroyBuffer(tt.gpu), this.gpuBuffersVersion++, tt.gpu = et
          }
          Tm(this.device, tt.gpu, Vt, et, Ot)
        } else {
          const Dt = new Uint8Array(et.buffer, et.byteOffset, Ot),
            mt = tt.pending;
          if (mt && tt.ownsPending && Vt + Ot <= mt.byteLength) new Uint8Array(mt.buffer, mt.byteOffset, mt.byteLength).set(Dt, Vt);
          else if (mt && 0 === Vt && Ot === mt.byteLength && et.byteLength === Ot) tt.pending = et, tt.ownsPending = !1;
          else {
            var qt;
            const et = new Uint8Array(Math.max(null !== (qt = null === mt || void 0 === mt ? void 0 : mt.byteLength) && void 0 !== qt ? qt : 0, Vt + Ot));
            mt && et.set(new Uint8Array(mt.buffer, mt.byteOffset, mt.byteLength)), et.set(Dt, Vt), tt.pending = et, tt.ownsPending = !0
          }
        }
      }
      updateSlot(tt, et, Vt, Ot) {
        const qt = this.arena;
        Vt + pt(Ot) > tt.size && (tt.size = pt(Math.max(2 * tt.size, Vt + Ot)), qt.growTo(tt.slot + tt.size), this.gpuBuffersVersion++), 0 === Ot ? this.writeSlot(tt, Vt, ed, 0, 4, !1) : this.writeSlot(tt, Vt, et, et.byteOffset, Ot, !0)
      }
      writeSlot(tt, et, Vt, Ot, qt, Dt) {
        const mt = et + (Dt ? pt(qt) : qt);
        mt > tt.slotBytes && this.moveSlot(tt, mt), this.arena.write(tt.slot + et, Vt, Ot, qt, Dt)
      }
      moveSlot(tt, et) {
        const Vt = this.arena,
          Ot = pm.slotBytes(Math.max(et, Math.min(2 * tt.slotBytes, tt.size))),
          qt = Vt.allocate(Ot, null, tt.size);
        Vt.move(tt.slot, qt, tt.slotBytes), Vt.free(tt.slot, tt.slotBytes), tt.slot = qt, tt.slotBytes = Ot, this.gpuBuffersVersion++
      }
      cover(tt, et) {
        const Vt = this.buffers.get(tt);
        if (!Vt || Vt.slot < 0) return !1;
        const Ot = Math.min(et, Vt.size);
        return !(Ot <= Vt.slotBytes) && (this.moveSlot(Vt, Ot), !0)
      }
      destroyBuffer(tt) {
        var et;
        null === (et = this.onDestroy) || void 0 === et || et.call(this, tt), tt.destroy()
      }
      gpuBuffer(tt) {
        const et = this.buffers.get(tt);
        if (!et) return null;
        if (et.slot >= 0) return this.arena.buffer;
        if (et.arena && et.pending) {
          const tt = et.pending,
            Vt = this.arena;
          return et.size = pt(tt.byteLength), et.slotBytes = pm.slotBytes(function(tt) {
            const et = new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength);
            let Vt = et.length;
            if (tt.byteOffset % 4 === 0) {
              for (; Vt % 4 !== 0 && 0 === et[Vt - 1];) Vt--;
              if (Vt % 4 === 0) {
                const et = new Uint32Array(tt.buffer, tt.byteOffset, Vt / 4);
                let Ot = et.length;
                for (; Ot > 0 && 0 === et[Ot - 1];) Ot--;
                Vt = 4 * Ot
              }
            }
            for (; Vt > 0 && 0 === et[Vt - 1];) Vt--;
            return Vt
          }(tt)), et.slot = Vt.allocate(et.slotBytes, tt, et.size), et.pending = null, Vt.buffer
        }
        if (!et.gpu && et.pending) {
          const tt = et.pending;
          et.gpu = this.device.createBuffer({
            label: et.label,
            size: pt(tt.byteLength),
            usage: et.usage
          }), Tm(this.device, et.gpu, 0, tt, tt.byteLength), et.pending = null
        }
        return et.gpu
      }
      gpuOffset(tt) {
        var et, Vt;
        const Ot = null !== (et = null === (Vt = this.buffers.get(tt)) || void 0 === Vt ? void 0 : Vt.slot) && void 0 !== et ? et : -1;
        return Ot < 0 ? 0 : Ot
      }
      gpuEnd(tt) {
        var et, Vt;
        const Ot = this.buffers.get(tt);
        return Ot ? Ot.slot >= 0 ? Ot.slot + Ot.size : null !== (et = null === (Vt = Ot.gpu) || void 0 === Vt ? void 0 : Vt.size) && void 0 !== et ? et : 0 : 0
      }
      vertexInput(tt, et, Vt) {
        var Ot, qt, Dt, mt;
        return null !== (Ot = null !== (qt = Vt && this.modelInput(Vt, et)) && void 0 !== qt ? qt : null === (Dt = null !== (mt = this.T6.get(tt)) && void 0 !== mt ? mt : this.batchUploads.get(tt)) || void 0 === Dt ? void 0 : Dt.inputs[et]) && void 0 !== Ot ? Ot : null
      }
      modelInput(tt, et) {
        const Vt = this.geometrySlot(tt);
        let Ot = Vt.inputs.get(et);
        if (void 0 === Ot) {
          const qt = tt.vertexAttributes.find((tt => tt.kind === et));
          Ot = qt ? new we(this.modelKey(Vt, qt.data, !1), qt.offset, qt.stride, qt.components, !1, qt.glType, qt.isNormalized) : null, Vt.inputs.set(et, Ot)
        }
        return Ot
      }
      modelIndex(tt) {
        return tt.indexData && this.modelKey(this.geometrySlot(tt), tt.indexData, !0)
      }
      geometrySlot(tt) {
        var et;
        let Vt = tt.gpu[St.i.lite];
        if ((null === (et = Vt) || void 0 === et ? void 0 : et.epoch) !== this.epoch) {
          const et = new Map,
            Ot = () => {
              for (const tt of et.values()) this.bufferDeleted(tt)
            },
            qt = tt => {
              const Vt = et.get(tt);
              Vt && this.vertexBufferUpdated(Vt, tt)
            };
          Vt = {
            keys: et,
            inputs: new Map,
            release: Ot,
            updated: qt,
            epoch: this.epoch
          }, tt.gpu[St.i.lite] = Vt
        }
        return Vt
      }
      modelKey(tt, et, Vt) {
        let Ot = tt.keys.get(et);
        if (!Ot) {
          if (Vt) {
            const tt = {
              uQ: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(tt, et, "model-indices"), Ot = tt
          } else Ot = {
            uQ: 0
          }, this.vertexBufferCreated(Ot, et, !1, "model-vertices");
          tt.keys.set(et, Ot)
        }
        return Ot
      }
      indexFormat(tt) {
        return tt.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(tt, et) {
        --tt.refs > 0 || (this.releaseTexture(tt), Am(tt.images), null !== et && this.textures.delete(et))
      }
      load(tt, et) {
        const {
          epoch: Vt
        } = this, Ot = et.decoded = async function(tt) {
          if ("cube" === tt.kind) return async function(tt) {
            if (6 !== tt.length) throw new Error(`${tt.length} files where six faces were expected`);
            const et = await im(tt.map((tt => te(tt)))),
              Vt = et[0].width;
            return im(et.map((async tt => {
              if (tt.width === Vt && tt.height === Vt) return tt;
              try {
                return await createImageBitmap(tt, {
                  ...st,
                  resizeWidth: Vt,
                  resizeHeight: Vt
                })
              } finally {
                tt.close()
              }
            })))
          }(tt.files);
          if ("data" === tt.kind && tt.data) return [await createImageBitmap(new Blob([tt.data]), st)];
          return [await te(td(tt))]
        }(tt.source).then((tt => {
          0 === et.refs || Vt !== this.epoch ? Am(tt) : et.images = tt
        }));
        this.track(et, td(tt.source), Ot, (() => {
          et.wanted && !et.failed && et.refs > 0 && this.upload(tt, et)
        }))
      }
      canvasUpdated(tt, et, Vt) {
        const {
          state: Ot
        } = this.textureSlot(tt);
        Ot.dynamicSource = {
          invertY: et,
          premultiplied: Vt
        }, Ot.dynamic && this.pushDynamic(tt.source, Ot)
      }
      async atlasArrays(tt) {
        const {
          device: et,
          epoch: Vt
        } = this;
        let Ot;
        try {
          Ot = await Ve(et, tt)
        } catch (Dt) {
          if (Vt === this.epoch) {
            if (!Xe(et)) throw Dt;
            await new Promise((tt => {
              this.rebindWaiters.push(tt)
            }))
          }
          return this.atlasArrays(tt)
        }
        if (Ot.forEach(((et, Vt) => {
            this.atlasSources.has(et) || this.atlasSources.set(et, {
              sources: tt,
              index: Vt,
              stride: Ot[0].layers
            })
          })), Vt !== this.epoch) return Ot;
        const qt = (0, km.d)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const mt of Ot) this.atlasBindings.has(mt) || this.atlasBindings.set(mt, {
          view: mt.texture.createView({
            dimension: "2d-array"
          }),
          sampler: qt
        });
        return Ot
      }
      boundTexture(tt) {
        const et = this.atlasBindings.get(tt);
        if (et) return et;
        const Vt = this.atlasSources.get(tt);
        if (Vt) return this.rebuildAtlas(tt, Vt), null;
        const Ot = tt;
        if (Ot.released) return null;
        const qt = this.textureSlot(Ot, !0),
          {
            state: Dt
          } = qt;
        if (!Dt.view && (Dt.wanted = !0, Dt.loading || Dt.failed || this.upload(Ot, Dt), !Dt.view)) return null;
        const mt = this.chosenSampler(Ot, qt),
          dt = qt.bound;
        return dt && dt.view === Dt.view && dt.sampler === mt ? dt : (qt.bound = {
          view: Dt.view,
          sampler: mt
        }, qt.bound)
      }
      rebuildAtlas(tt, et) {
        let {
          sources: Vt,
          index: Ot,
          stride: qt
        } = et;
        if (this.atlasRebuilds.has(tt)) return;
        this.atlasRebuilds.add(tt);
        const {
          epoch: Dt
        } = this;
        this.atlasArrays(Vt).then((et => {
          et[0].layers === qt && et[Ot] ? Dt === this.epoch && this.atlasBindings.set(tt, this.atlasBindings.get(et[Ot])) : console.error(`Lite: the new device splits the atlas ${nt(Vt.urls[0])} into other arrays than its materials read`)
        }), (tt => {
          console.error(`Lite: could not build the atlas ${nt(Vt.urls[0])} again on a new device`, tt)
        }))
      }
      textureLoaded(tt) {
        var et, Vt;
        return null !== (et = null === (Vt = this.heldSlot(tt)) || void 0 === Vt ? void 0 : Vt.state.decoded) && void 0 !== et ? et : null
      }
      textureFailed(tt) {
        var et;
        return !0 === (null === (et = this.heldSlot(tt)) || void 0 === et ? void 0 : et.state.failed)
      }
      heldSlot(tt) {
        const et = tt.gpu[St.i.lite];
        return (null === et || void 0 === et ? void 0 : et.epoch) === this.epoch ? et : void 0
      }
      chosenSampler(tt, et) {
        const {
          samplingMode: Vt,
          wrapU: Ot,
          wrapV: qt
        } = tt.sampler, Dt = et.state.hasMips, mt = function(tt, et) {
          const {
            bilinear: Vt,
            trilinear: Ot
          } = St.k;
          return !et && tt !== Vt || 11 !== tt && tt !== Ot && tt !== Vt ? 1 : 4
        }(Vt, Dt), dt = et.sampler;
        if (dt && dt.samplingMode === Vt && dt.hasMips === Dt && dt.anisotropy === mt && dt.wrapU === Ot && dt.wrapV === qt) return dt.sampler;
        const jt = this.samplerFor(Vt, Dt, mt, Ot, qt);
        return et.sampler = {
          samplingMode: Vt,
          hasMips: Dt,
          anisotropy: mt,
          wrapU: Ot,
          wrapV: qt,
          sampler: jt
        }, jt
      }
      releaseTexture(tt) {
        var et, Vt;
        tt.view && (null === (Vt = this.onDestroy) || void 0 === Vt || Vt.call(this, tt.view));
        null === (et = tt.destroy) || void 0 === et || et.call(tt)
      }
      textureSlot(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = tt.gpu[St.i.lite];
        if ((null === Vt || void 0 === Vt ? void 0 : Vt.epoch) === this.epoch) return Vt;
        const Ot = function(tt) {
          let {
            source: et,
            sampler: Vt
          } = tt;
          return "canvas" === et.kind ? null : `${et.kind}|${td(et)}|${Vt.noMipmap}|${Vt.samplingMode}|${Vt.invertY}`
        }(tt);
        let qt = null === Ot ? void 0 : this.textures.get(Ot);
        var Dt;
        qt || (qt = {
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
          dynamicSource: null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.state.dynamicSource) && void 0 !== Dt ? Dt : null
        }, null !== Ot && (this.textures.set(Ot, qt), this.load(tt, qt), et && !Vt && this.firstBindDecodes++));
        qt.refs++;
        const mt = qt,
          {
            epoch: dt
          } = this,
          jt = {
            state: qt,
            bound: null,
            sampler: null,
            release: () => {
              dt === this.epoch && this.releaseSlot(mt, Ot)
            },
            epoch: dt
          };
        return tt.gpu[St.i.lite] = jt, jt
      }
      samplerFor(tt, et, Vt, Ot, qt) {
        const Dt = `${tt}|${et}|${Vt}|${Ot}|${qt}`;
        let mt = this.samplers.get(Dt);
        if (!mt) {
          const dt = {
            ...gm(tt, et, Vt),
            addressModeU: sm(Ot),
            addressModeV: sm(qt)
          };
          mt = (0, km.d)(this.engine, dt), this.samplers.set(Dt, mt)
        }
        return mt
      }
      upload(tt, et) {
        const {
          source: Vt,
          sampler: Ot
        } = tt;
        et.hasMips = !Ot.noMipmap, "canvas" === Vt.kind ? this.createDynamic(Vt, et) : "cube" === Vt.kind ? this.uploadCube(et, Vt.luminance) : this.uploadImage(et, !0 === Ot.invertY, Vt.url)
      }
      uploadImage(tt, et, Vt) {
        const [Ot] = tt.images;
        tt.images = null;
        const {
          epoch: qt
        } = this, Dt = (0, Gm.d)(this.engine, Ot, {
          mipMaps: tt.hasMips,
          invertY: et,
          srgb: !1
        }).then((et => {
          Ot.close(), 0 !== tt.refs && qt === this.epoch ? (tt.view = et.view, tt.destroy = et.texture.destroy.bind(et.texture)) : et.texture.destroy()
        }));
        this.track(tt, Vt, Dt)
      }
      track(tt, et, Vt, Ot) {
        const {
          epoch: qt
        } = this;
        tt.loading = !0, this.pending++, Vt.catch((Vt => {
          qt === this.epoch && (tt.failed = !0, console.warn(`Lite: could not load texture ${nt(et)}`, Vt))
        })).finally((() => {
          qt === this.epoch && (tt.loading = !1, this.pending--, null === Ot || void 0 === Ot || Ot())
        }))
      }
      uploadCube(tt, et) {
        const Vt = tt.images;
        tt.images = null;
        const Ot = Um(this.engine, this.device, Vt, (0, St.B)(et), tt.hasMips);
        tt.view = Ot.createView({
          dimension: "cube"
        }), tt.destroy = () => {
          Ot.destroy()
        }
      }
      createDynamic(tt, et) {
        const {
          canvas: Vt
        } = tt, Ot = (0, zm.d)(this.engine, Math.max(1, Vt.width), Math.max(1, Vt.height), {
          mipMaps: et.hasMips,
          srgb: !1
        });
        et.dynamic = Ot, et.view = Ot.view, et.destroy = () => {
          Ot.texture.destroy()
        }, this.pushDynamic(tt, et)
      }
      pushDynamic(tt, et) {
        const Vt = et.dynamicSource,
          Ot = et.dynamic,
          {
            canvas: qt
          } = tt;
        if (Vt && Ot && 0 !== qt.width && 0 !== qt.height) return qt.width !== Ot.width || qt.height !== Ot.height ? (this.releaseTexture(et), et.dynamic = null, et.view = null, void this.createDynamic(tt, et)) : void(0, zm.h)(this.engine, Ot, qt, {
          invertY: Vt.invertY,
          premultiplyAlpha: Vt.premultiplied
        })
      }
    }

    function td(tt) {
      return "cube" === tt.kind ? tt.rootUrl : "canvas" === tt.kind ? "canvas" : tt.url
    }
    const ed = new Uint8Array(4);
    var Vd = Vt(38967);

    function Od(tt) {
      const et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      tt._colorAttachment.storeOp = tt._targetSignature._sampleCount > 1 ? et : "store";
      const Vt = tt._renderPassDescriptor.depthStencilAttachment;
      Vt && (Vt.depthStoreOp = et, Vt.stencilStoreOp && (Vt.stencilStoreOp = et))
    }
    var qd = Vt(38016),
      Dd = Vt(38073),
      md = Vt(37716),
      dd = Vt(39803);
    const jd = new Float64Array([1, 1, 1]),
      Hd = new Float64Array([0, 1, 0]),
      Xd = new Float64Array(4),
      Qd = new Float32Array(16),
      ld = new Float64Array(3),
      Ed = new Float64Array(4);

    function fd(tt, et, Vt) {
      tt.fov = et.fov, tt.near = et.near, tt.far = et.far, tt.renderWidth = Vt.renderWidth, tt.renderHeight = Vt.renderHeight, (0, md.w)(et.holderRotation, 0, Xd, 0), (0, md.c)(jd, 0, Xd, 0, et.holderPosition, 0, Qd);
      const Ot = et.lT;
      ld[0] = Ot[0], ld[1] = Ot[1], ld[2] = Ot[2] + 1;
      const qt = tt.viewMatrix;
      (0, md.n)(Ot, ld, Hd, qt), (0, md.j)(qt, 0, qt), (0, md.q)(qt, Qd, 0, qt), (0, md.j)(qt, 0, qt);
      const Dt = tt.worldMatrix;
      (0, md.j)(qt, 0, Dt), tt.eye[0] = Dt[12], tt.eye[1] = Dt[13], tt.eye[2] = Dt[14], Ed[0] = tt.fov, Ed[1] = tt.renderWidth / tt.renderHeight, Ed[2] = tt.near, Ed[3] = tt.far, (0, md.t)(Ed, tt.projectionMatrix), (0, md.q)(qt, tt.projectionMatrix, 0, tt.viewProjectionMatrix), (0, dd.g)(tt.viewProjectionMatrix, tt.frustum)
    }

    function wd(tt, et) {
      let Vt = tt.frustumPlanes;
      Vt || (Vt = tt.frustumPlanes = Array.from({
        length: 6
      }, (() => new qd.b(0, 0, 0, 0))));
      for (let Ot = 0; Ot < 6; Ot++) {
        const tt = Vt[Ot].normal;
        tt._x = et[4 * Ot], tt._y = et[4 * Ot + 1], tt._z = et[4 * Ot + 2], tt._isDirty = !0, Vt[Ot].d = et[4 * Ot + 3]
      }
    }

    function yd(tt, et) {
      const Vt = et.clearColor;
      tt.clearColour[0] = Vt.r, tt.clearColour[1] = Vt.g, tt.clearColour[2] = Vt.b, tt.clearColour[3] = Vt.a;
      const Ot = et.ambientColor;
      tt.ambientColour[0] = Ot.r, tt.ambientColour[1] = Ot.g, tt.ambientColour[2] = Ot.b, tt.animationRatio = et.animationRatio, tt.frameId = et.frameId, tt.version++
    }

    function Nd(tt) {
      const et = tt.model.view;
      return et.animTick = (0, Dd.g)(), et.timeMs = performance.now(), yd(et, tt.Fw), tt.model.update(et.frameId), et
    }

    function Md(tt) {
      const et = tt.Fw,
        {
          view: Vt,
          XT: Ot
        } = tt.model;
      return fd(Vt, Ot, et.Jf()), et.onBeforeRenderObservable.notifyObservers(et), wd(et, Vt.frustum), et.onBeforeCameraRenderObservable.notifyObservers(et.activeCamera), Nd(tt)
    }
    var bd = Vt(37676),
      Jd = Vt(37792),
      Cd = Vt(38060);

    function ud(tt) {
      var et, Vt;
      const Ot = (0, vt.X)(tt);
      if (!Ot || Ot.diffuseTexture && (0, Cd.k)(tt)) return null;
      const qt = null === (et = (0, vt.s)(Ot, Kt.j.name)) || void 0 === et ? void 0 : et.state,
        Dt = null === (Vt = (0, vt.s)(Ot, nD.e.name)) || void 0 === Vt ? void 0 : Vt.state,
        mt = new Float32Array(16);
      return function(tt, et, Vt, Ot) {
        var qt, Dt;
        const mt = FO;
        Ot.set(tt.diffuseColor, mt.diffuse), Ot[mt.diffuse + 3] = tt.alpha, Ot.set(tt.ambientColor, mt.ambientAndCutoff), Ot[mt.ambientAndCutoff + 3] = tt.alphaCutOff, Ot.set(tt.emissiveColor, mt.emissiveAndLevel), Ot[mt.emissiveAndLevel + 3] = null !== (qt = null === (Dt = tt.diffuseTexture) || void 0 === Dt ? void 0 : Dt.level) && void 0 !== qt ? qt : 1, null !== et && void 0 !== et && et.animDataPerTex ? (Ot[mt.anim + 1] = Dd.d, Ot[mt.anim + 2] = et.animDataPerTex.length / 3 - 1) : Vt && (Ot[mt.anim + 1] = Vt.numAnimStates, Ot[mt.anim + 2] = Vt.ticksPerAnimState)
      }(Ot, qt, Dt, mt), {
        model: Ot,
        atlas: qt,
        texture: qt ? "atlas" : Ot.diffuseTexture ? "single" : "none",
        animated: qt ? !!qt.animDataPerTex : !!Dt,
        liquid: (0, Cd.o)(tt),
        customRenderMat: (0, Cd.k)(tt),
        uniformData: mt
      }
    }
    var Kd = Vt(2959);
    class hd {
      constructor(tt) {
        this.units = tt, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var tt;
        this.buffer.destroy(), null === (tt = this.twin) || void 0 === tt || tt.destroy()
      }
    }
    class vd {
      constructor(tt, et) {
        this.arena = tt, this.nw = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.nw = new Ym(et);
        const Vt = new hd(et);
        Vt.buffer = this.createBuffer(Vt, !1), this.backings.push(Vt), this.refresh()
      }
      get uQ() {
        return this.nw.uQ
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
        let tt = 0;
        for (const et of this.backings) tt += et.units * (this.arena.unitBytes + (et.twin ? this.arena.twinUnitBytes : 0));
        return tt
      }
      holds(tt) {
        return tt.start + tt.length <= this.usable
      }
      lost(tt) {
        return this.dropped || tt.start + tt.length > this.uQ
      }
      write(tt, et) {
        const {
          device: Vt,
          unitBytes: Ot
        } = this.arena;
        for (const qt of this.backings) {
          const Dt = (qt.units - tt.start) * Ot;
          Dt > 0 && Vt.queue.writeBuffer(qt.buffer, tt.start * Ot, et, 0, Math.min(et.byteLength, Dt))
        }
      }
      writeLight(tt, et) {
        const {
          device: Vt,
          twinUnitBytes: Ot,
          verticesPerUnit: qt
        } = this.arena, {
          light: Dt,
          count: mt
        } = this.arena.twinLight(et, Math.min(et.length, tt.length * qt));
        for (const dt of this.backings) {
          dt.twin || (dt.twin = this.createBuffer(dt, !0));
          const et = (dt.units - tt.start) * qt;
          et > 0 && Vt.queue.writeBuffer(dt.twin, tt.start * Ot, Dt, 0, Math.min(mt, et))
        }
      }
      grow(tt) {
        this.arena.assertNotDrawing();
        const {
          device: et,
          unitBytes: Vt,
          label: Ot
        } = this.arena, qt = this.backings[this.backings.length - 1], Dt = new hd(tt), mt = et.createCommandEncoder({
          label: `${Ot}-grow`
        });
        Dt.buffer = this.createBuffer(Dt, !1), mt.copyBufferToBuffer(qt.buffer, 0, Dt.buffer, 0, qt.units * Vt), qt.twin && (Dt.twin = this.createBuffer(Dt, !0), mt.copyBufferToBuffer(qt.twin, 0, Dt.twin, 0, qt.units * this.arena.twinUnitBytes)), et.queue.submit([mt.finish()]), this.backings.push(Dt), this.nw.grow(tt)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const tt of this.backings) tt.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(tt, et) {
        const {
          device: Vt,
          unitBytes: Ot,
          twinUnitBytes: qt,
          usage: Dt,
          label: mt
        } = this.arena;
        Vt.pushErrorScope("out-of-memory");
        const dt = Vt.createBuffer({
          label: et ? `${mt}-light` : mt,
          size: tt.units * (et ? qt : Ot),
          usage: (et ? this.arena.twinUsage : Dt) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Vt.popErrorScope().then((Vt => {
          this.arena.awaitingVerdict--, this.settle(tt, et, !Vt, !0)
        }), (Vt => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${mt} buffer, taken as failed: ${String(Vt)}`), this.settle(tt, et, !1, !1)
        })), dt
      }
      settle(tt, et, Vt, Ot) {
        const qt = this.backings.indexOf(tt);
        if (!(this.dropped || qt < 0)) {
          if (!Vt) {
            if (Ot && this.arena.ranOutOfMemory(tt.units, tt.units * (et ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === qt) return void this.drop();
            for (const tt of this.backings.splice(qt)) tt.destroy();
            return this.nw.truncate(this.backings[qt - 1].units), this.growable = !1, void this.promote()
          }
          et ? tt.twinReady = !0 : (tt.bufferReady = !0, this.arena.allocatedBuffer(tt.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: tt
        } = this;
        let et = 0;
        for (; et + 1 < tt.length && tt[et].ready && tt[et + 1].ready;) et++;
        for (const Vt of tt.splice(0, et)) Vt.destroy();
        this.refresh()
      }
      refresh() {
        const tt = this.backings[0];
        this.buffer = tt.buffer, this.twin = tt.twinReady ? tt.twin : null, this.usable = !this.dropped && tt.bufferReady ? tt.units : 0
      }
    }
    class Wd {
      constructor(tt, et, Vt, Ot) {
        let {
          verticesPerUnit: qt = 1,
          twinUsage: Dt = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = tt, this.unitBytes = et, this.usage = Vt, this.label = Ot, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Pe.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), et % 4 !== 0) throw new Error(`${Ot}: ${et}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = qt, this.twinUsage = Dt, this.twinValueBytes = qt > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * qt
      }
      twinLight(tt, et) {
        if (4 === this.twinValueBytes) return this.widened.length < et && (this.widened = new Float32Array(Math.max(et, 2 * this.widened.length))), this.widened.set(tt.subarray(0, et)), {
          light: this.widened,
          count: et
        };
        const Vt = et % this.verticesPerUnit;
        if (0 === Vt) return {
          light: tt,
          count: et
        };
        const Ot = et - Vt + this.verticesPerUnit;
        return this.padded.length < Ot && (this.padded = new Uint16Array(Math.max(Ot, 2 * this.padded.length))), this.padded.set(tt.subarray(0, et)), this.padded.fill(0, et, Ot), {
          light: this.padded,
          count: Ot
        }
      }
      allocate(tt) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), tt > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const qt of this.pages) {
          const et = qt.nw.allocate(tt);
          if (et >= 0) return {
            page: qt,
            start: et,
            length: tt
          }
        }
        const et = this.pages[this.pages.length - 1];
        if (null !== et && void 0 !== et && et.canGrow) {
          const Vt = Math.min(this.ceiling, Math.max(2 * et.uQ, et.uQ + tt));
          if (Vt - et.uQ >= tt) return et.grow(Vt), {
            page: et,
            start: et.nw.allocate(tt),
            length: tt
          }
        }
        et && et !== this.pages[0] && 0 === et.nw.used && et.drop();
        const Vt = Math.floor(1048576 / this.unitBytes),
          Ot = new vd(this, Math.max(tt, Math.min(this.ceiling, Vt)));
        return this.pages.push(Ot), {
          page: Ot,
          start: Ot.nw.allocate(tt),
          length: tt
        }
      }
      free(tt) {
        this.assertNotDrawing();
        const {
          page: et
        } = tt;
        et.nw.free(tt.start, tt.length), 0 === et.nw.used && et !== this.pages[0] && et !== this.pages[this.pages.length - 1] && et.drop()
      }
      retire() {
        for (const tt of this.pages) tt.retire()
      }
      remove(tt) {
        const et = this.pages.indexOf(tt);
        et >= 0 && this.pages.splice(et, 1)
      }
      ranOutOfMemory(tt, et) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${et}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, tt), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, tt) / 2));
        const Vt = performance.now();
        Vt >= this.shortageUntil && (this.forgetFailedAt = Vt + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Vt + 1e3)
      }
      allocatedBuffer(tt) {
        tt >= this.failed && (this.failed = 1 / 0);
        const et = Math.min(2 * tt, Math.floor((tt + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, et))
      }
      stats() {
        let tt = 0,
          et = 0,
          Vt = 0,
          Ot = 0;
        for (const qt of this.pages) tt += qt.uQ, et += qt.nw.used, Vt += qt.hasTwin ? qt.uQ * this.twinUnitBytes : 0, Ot += qt.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: tt * this.unitBytes,
          usedBytes: et * this.unitBytes,
          twinBytes: Vt,
          allocatedBytes: Ot
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: tt,
          maxStorageBufferBindingSize: et
        } = this.device.limits;
        let Vt = Math.floor(Math.min(67108864, tt) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Vt = Math.min(Vt, Math.floor(et / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Vt = Math.min(Vt, Math.floor(et / this.twinUnitBytes))), Vt
      }
    }
    const Sd = 16383;

    function cd(tt, et, Vt, Ot, qt) {
      let Dt = 0;
      for (let mt = Vt; mt < Ot; mt += Sd) tt.drawIndexed(6 * Math.min(Sd, Ot - mt), 1, 0, et + 4 * mt, qt), Dt++;
      return Dt
    }
    class Rd {
      constructor(tt, et) {
        this.recordsGroup = et, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Vt = xe.d.strideWithoutAtlas;
        this.vertexArena = new Wd(tt, Vt, GPUBufferUsage.VERTEX, `terrain-vertices-${Vt}`), this.quadArena = new Wd(tt, Jd.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Ot = (0, Te.d)(new Uint16Array(98298), Sd);
        this.quadPattern = tt.createBuffer({
          label: "terrain-quad-pattern",
          size: Ot.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), tt.queue.writeBuffer(this.quadPattern, 0, Ot)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(tt, et) {
        const Vt = et.packedVertices,
          Ot = Vt ? this.quadArena.allocate(tt.faceCount) : this.vertexArena.allocate(tt.vertexCount);
        if (!Ot) return !1;
        tt.vertices = Ot;
        const qt = Vt ? new Uint8Array(Vt.buffer, Vt.byteOffset, Vt.byteLength) : new Uint8Array(et.vertices);
        return Ot.page.write(Ot, qt), !0
      }
      setLight(tt, et) {
        const {
          vertices: Vt
        } = tt;
        Vt && 0 !== et.length && Vt.page.live && (et.length < tt.vertexCount ? Vt.page.arena.warnOnce("shortLight", `a part's ${et.length} light values are fewer than its ${tt.vertexCount} vertices, so its light is left as it was`) : (Vt.page.writeLight(Vt, et), tt.lit = !0))
      }
      lightFullSky(tt, et) {
        this.fullSky.length < et && (this.fullSky = new Uint16Array(Math.max(et, 4096)).fill(Kd.h));
        for (const Vt of tt) {
          const tt = Vt.vertices;
          tt.page.live && (tt.page.writeLight(tt, this.fullSky), Vt.lit = !0)
        }
      }
      backed(tt) {
        const {
          vertices: et
        } = tt;
        return !!et && et.page.holds(et)
      }
      lost(tt) {
        const {
          vertices: et
        } = tt;
        return !!et && et.page.lost(et)
      }
      release(tt) {
        tt.vertices && tt.vertices.page.arena.free(tt.vertices), tt.vertices = null, tt.lit = !1
      }
      setDrawing(tt) {
        this.forgetBound()
      }
      draw(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : et.faceCount;
        const Dt = et.vertices,
          mt = Dt.page,
          dt = Vt ? mt.twin : null;
        if (!mt.holds(Dt) || Vt && !dt) return 0;
        const {
          verticesPerUnit: jt
        } = mt.arena;
        let Ht = Dt.start * jt;
        this.boundPattern || (tt.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Xt = Ot + qt;
        if (jt > 1) return mt.buffer === this.boundRecords && dt === this.boundRecordsLight || (tt.setBindGroup(1, this.recordsGroup(mt.buffer, dt)), this.boundRecords = mt.buffer, this.boundRecordsLight = dt), cd(tt, Ht, Ot, Xt, et.slot);
        mt.buffer !== this.boundVertices && (tt.setVertexBuffer(0, mt.buffer), this.boundVertices = mt.buffer), dt && dt !== this.boundLight && (tt.setVertexBuffer(1, dt), this.boundLight = dt);
        const Qt = et.faceCount;
        return Xt <= Qt ? cd(tt, Ht, Ot, Xt, et.slot) : cd(tt, Ht, Ot, Qt, et.slot) + cd(tt, Ht, Math.max(Ot, Qt) - Qt, Xt - Qt, et.slot)
      }
      get buffersAwaitingVerdict() {
        let tt = 0;
        for (const et of this.arenas()) tt += et.awaitingVerdict;
        return tt
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Id {
      constructor(tt, et, Vt, Ot) {
        this.device = tt, this.splitBefore = et, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = tt.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const qt = tt.createShaderModule({
          label: "scene-depth-copy",
          code: (Dt = Vt._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Dt?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Dt;
        tt.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: qt,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: qt,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((tt => {
          this.pipeline = tt, this.building = !1
        }), (tt => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", tt)
        })), Vt._executeWithTransmission = () => this.execute(Vt, Ot)
      }
      get compiling() {
        return this.building
      }
      setWanted(tt) {
        this.wanted = tt
      }
      setPlanes(tt, et) {
        tt === this.near && et === this.far || (this.near = tt, this.far = et, this.unproject[0] = tt / (et - tt), this.unproject[1] = et * tt / (et - tt), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var tt, et;
        return null !== (tt = null === (et = this.copy) || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null
      }
      execute(tt, et) {
        var Vt;
        null === (Vt = this.retired) || void 0 === Vt || Vt.destroy(), this.retired = null;
        const Ot = ue(et),
          qt = tt._transparentBindings,
          Dt = this.wanted && this.pipeline ? this.splitIndex(qt) : -1,
          mt = tt._colorAttachment,
          dt = mt.resolveTarget;
        Dt >= 0 && (mt.resolveTarget = void 0, Od(tt, !0));
        let jt = Ot.beginRenderPass(tt._renderPassDescriptor);
        jt.setBindGroup(0, tt._sceneBG);
        let Ht = this.drawList(jt, et, tt._opaqueBindings, 0, tt._opaqueBindings.length);
        if (Ht += this.drawList(jt, et, tt._directBindings, 0, tt._directBindings.length), Ht += this.drawList(jt, et, qt, 0, Dt >= 0 ? Dt : qt.length), jt.end(), Dt < 0) return Ht;
        Od(tt);
        const Xt = tt._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Qt,
            stencilLoadOp: lt
          } = Xt,
          Et = mt.loadOp;
        mt.resolveTarget = dt;
        try {
          this.copyDepth(Ot, tt), mt.loadOp = "load", Xt.depthLoadOp = "load", lt && (Xt.stencilLoadOp = "load"), jt = Ot.beginRenderPass(tt._renderPassDescriptor), jt.setBindGroup(0, tt._sceneBG), Ht += this.drawList(jt, et, qt, Dt, qt.length), jt.end()
        } finally {
          mt.loadOp = Et, Xt.depthLoadOp = Qt, Xt.stencilLoadOp = lt
        }
        return Ht
      }
      splitIndex(tt) {
        for (let et = 0; et < tt.length; et++)
          if (tt[et].renderable === this.splitBefore) return et;
        return -1
      }
      drawList(tt, et, Vt, Ot, qt) {
        let Dt = null,
          mt = 0;
        for (let dt = Ot; dt < qt; dt++) {
          const Ot = Vt[dt],
            qt = Ot.renderable.mesh;
          qt && !1 === qt.visible || (Ot.pipeline !== Dt && (tt.setPipeline(Ot.pipeline), Dt = Ot.pipeline), mt += Ot.draw(tt, et))
        }
        return mt
      }
      copyDepth(tt, et) {
        var Vt, Ot;
        const qt = (null !== (Vt = et._config.depth) && void 0 !== Vt ? Vt : et._config.rt)._depthTexture,
          Dt = (null === (Ot = this.copy) || void 0 === Ot ? void 0 : Ot.source) === qt ? this.copy : this.remakeCopy(qt),
          mt = tt.beginRenderPass(Dt.pass);
        mt.setPipeline(this.pipeline), mt.setBindGroup(0, Dt.bindGroup), mt.draw(3), mt.end()
      }
      remakeCopy(tt) {
        var et, Vt;
        this.retired = null !== (et = null === (Vt = this.copy) || void 0 === Vt ? void 0 : Vt.texture) && void 0 !== et ? et : null;
        const Ot = this.device.createTexture({
            label: "scene-depth",
            size: [tt.width, tt.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          qt = Ot.createView(),
          Dt = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: tt.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          mt = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: qt,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: tt,
          texture: Ot,
          view: qt,
          bindGroup: Dt,
          pass: mt
        }, this.copy
      }
    }
    const Pd = "rgba8unorm";

    function Zd(tt) {
      return tt ? 15 : 1
    }
    class Ld {
      constructor(tt, et, Vt, Ot) {
        this.device = tt, this.terrain = Ot, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = et._targetSignature._sampleCount > 1, this.cameraBuffer = tt.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = tt.createBindGroupLayout({
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
        const qt = tt.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = tt.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: qt,
          entries: []
        });
        const Dt = tt.createShaderModule({
          label: "sun-shadow-mask",
          code: (mt = this.edge, `${(0,ge.A)()}${jO({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${mt?gV:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Zd(mt)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${mt?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var mt;
        tt.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: tt.createPipelineLayout({
            bindGroupLayouts: [this.layout, qt, qt, iD(tt, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Dt,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Dt,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((tt => {
          this.pipeline = tt, this.building = !1
        }), (tt => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", tt)
        }));
        const dt = et._executeWithTransmission;
        et._executeWithTransmission = tt => this.execute(et, Vt, (() => dt ? dt(tt) : function(tt, et) {
          const Vt = ue(et).beginRenderPass(tt._renderPassDescriptor);
          Vt.setBindGroup(0, tt._sceneBG);
          let Ot = Fd(Vt, et, tt._opaqueBindings);
          return Ot += Fd(Vt, et, tt._directBindings), Ot += Fd(Vt, et, tt._transparentBindings), Vt.end(), Ot
        }(et, Vt)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var tt, et;
        return null !== (tt = null === (et = this.targets) || void 0 === et ? void 0 : et.maskView) && void 0 !== tt ? tt : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(tt) {
        ! function(tt, et) {
          const Vt = tt.worldMatrix,
            Ot = tt.projectionMatrix,
            qt = 1 / Ot[0],
            Dt = 1 / Ot[5],
            mt = tt.far * tt.near / (tt.far - tt.near);
          et[0] = tt.eye[0], et[1] = tt.eye[1], et[2] = tt.eye[2], et[3] = 2 ** -23 / mt, et[4] = Vt[0] * qt, et[5] = Vt[1] * qt, et[6] = Vt[2] * qt, et[7] = mt, et[8] = Vt[4] * Dt, et[9] = Vt[5] * Dt, et[10] = Vt[6] * Dt, et[11] = tt.near / (tt.far - tt.near), et[12] = Vt[8], et[13] = Vt[9], et[14] = Vt[10], et[15] = 0
        }(tt, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(tt, et, Vt) {
        if (this.retire(), !this.terrain.readsMask) return Vt();
        const Ot = this.targetsFor(tt),
          qt = ue(et),
          Dt = tt._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Ot.prepass.depthStencilAttachment.view = Dt.view);
        const mt = this.terrain.drawPrepass(qt, Ot.prepass, tt._sceneBG);
        if (0 === mt) return Vt();
        if (this.trace(qt, Ot), this.edge) return mt + 1 + Vt();
        const {
          depthLoadOp: dt,
          stencilLoadOp: jt
        } = Dt;
        Dt.depthLoadOp = "load", jt && (Dt.stencilLoadOp = "load");
        try {
          return mt + 1 + Vt()
        } finally {
          Dt.depthLoadOp = dt, Dt.stencilLoadOp = jt
        }
      }
      trace(tt, et) {
        const Vt = this.terrain.sunShadowGroup(),
          Ot = tt.beginRenderPass(et.trace);
        this.pipeline && Vt && (Ot.setPipeline(this.pipeline), Ot.setBindGroup(0, et.bindGroup), Ot.setBindGroup(1, this.empty), Ot.setBindGroup(2, this.empty), Ot.setBindGroup(3, Vt), Ot.draw(3)), Ot.end()
      }
      retire() {
        const tt = this.retired;
        var et;
        tt && (tt.mask.destroy(), tt.normals.destroy(), null === (et = tt.depth) || void 0 === et || et.destroy(), this.retired = null)
      }
      targetsFor(tt) {
        var et, Vt;
        const Ot = (null !== (et = tt._config.depth) && void 0 !== et ? et : tt._config.rt)._depthTexture;
        return (null === (Vt = this.targets) || void 0 === Vt ? void 0 : Vt.source) === Ot ? this.targets : this.remake(tt, Ot)
      }
      remake(tt, et) {
        var Vt;
        this.retired = this.targets;
        const Ot = [et.width, et.height],
          qt = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Ot,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Dt = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Ot,
            format: Pd,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          mt = null !== (Vt = tt._targetSignature._depthStencilFormat) && void 0 !== Vt ? Vt : et.format,
          dt = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Ot,
            format: mt,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          jt = tt._renderPassDescriptor.depthStencilAttachment,
          Ht = mt.includes("stencil"),
          Xt = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Dt.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: dt ? dt.createView() : jt.view,
              depthClearValue: jt.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Ht ? {
                stencilClearValue: jt.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Qt = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== dt && void 0 !== dt ? dt : et).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Dt.createView()
            }]
          }),
          lt = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: qt.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Zd(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: et,
          mask: qt,
          maskView: qt.createView(),
          normals: Dt,
          depth: dt,
          bindGroup: Qt,
          prepass: Xt,
          trace: lt
        }, this.targets
      }
    }

    function Fd(tt, et, Vt) {
      let Ot = null,
        qt = 0;
      for (const Dt of Vt) {
        const Vt = Dt.renderable.mesh;
        Vt && !1 === Vt.visible || (Dt.pipeline !== Ot && (tt.setPipeline(Dt.pipeline), Ot = Dt.pipeline), qt += Dt.draw(tt, et))
      }
      return qt
    }
    const kd = 6e4,
      Gd = {
        status: "ok"
      },
      zd = {
        status: "skipped"
      };
    async function od(tt, et) {
      const {
        isCancelled: Vt
      } = tt;
      if (Vt()) return {
        status: "nV"
      };
      const {
        target: Ot
      } = et;
      if (!Ot) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const qt = [],
        Dt = Promise.all(Array.from(new Set(tt.materials), (async Vt => {
          qt.push(await async function(tt, et, Vt, Ot) {
            const qt = {
              lighting: tt.lighting,
              dirLightCount: Math.min(tt.dirLightCount, 4),
              YE: tt.runtime
            };
            try {
              const Dt = et.material(Ot);
              return Dt && PO(et.programKey(Dt, !1, qt)) ? (await Dt.ready, tt.isCancelled() ? Gd : Dt.bindGroupLayout ? await async function(tt, et, Vt, Ot) {
                const {
                  device: qt
                } = tt;
                let Dt, mt;
                qt.pushErrorScope("validation");
                try {
                  Dt = tt.pipelineBuild(et, Vt, Ot)
                } finally {
                  mt = qt.popErrorScope().catch((() => null))
                }
                const [dt, jt] = await Promise.all([mt, Dt.built.then((() => null), (tt => null !== tt && void 0 !== tt ? tt : new Error("pipeline failed")))]);
                if (!dt && !jt) return Gd;
                const Ht = await rd(Dt.module),
                  Xt = Ht.length > 0 ? Ht.map((tt => `${Dt.name} ${tt.lineNum}:${tt.linePos}: ${tt.message}`)).join("\n") : `${Dt.name}: ${Ud(null!==jt&&void 0!==jt?jt:dt)}`;
                return {
                  status: "failed",
                  material: et.model.name,
                  message: Xt
                }
              }(et, Dt, et.programKey(Dt, "none" !== Dt.texture, qt), Vt): (console.warn(`Shader pack: skipped the compile check for "${Ot.name}", whose textures failed to load`), zd)) : Gd
            } catch (Dt) {
              return {
                status: "failed",
                material: Ot.name,
                message: Ud(Dt)
              }
            }
          }(tt, et, Ot, Vt))
        }))),
        mt = function(tt, et) {
          let Vt, Ot, qt = !1;
          const Dt = new Promise((Dt => {
            var mt;
            Vt = setTimeout((() => {
              Dt("timeout")
            }), null !== (mt = et.timeoutMs) && void 0 !== mt ? mt : kd), Ot = setInterval((() => {
              et.isCancelled() && Dt("nV")
            }), 50), tt.lost.then((() => {
              qt = !0, Dt("lost")
            }))
          }));
          return {
            signal: Dt,
            lost: () => qt,
            dispose: () => {
              clearTimeout(Vt), clearInterval(Ot)
            }
          }
        }(et.device, tt);
      let dt;
      try {
        dt = await Promise.race([Dt.then((() => "done")), mt.signal])
      } finally {
        mt.dispose()
      }
      if ("nV" === dt || Vt()) return {
        status: "nV"
      };
      const jt = qt.find((tt => "failed" === tt.status));
      return jt && "lost" !== dt && !mt.lost() && await new Promise((tt => {
        setTimeout(tt, 0)
      })), "lost" === dt || mt.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : jt ? {
        status: "failed",
        failure: {
          material: jt.material,
          message: jt.message
        }
      } : "timeout" === dt ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Ht=tt.timeoutMs)&&void 0!==Ht?Ht:kd)/1e3} s`), {
        status: "skipped"
      }) : qt.some((tt => "skipped" === tt.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Ht
    }
    async function rd(tt) {
      if (!tt) return [];
      try {
        return (await tt.getCompilationInfo()).messages.filter((tt => "error" === tt.type))
      } catch {
        return []
      }
    }

    function Ud(tt) {
      var et;
      return null !== (et = null === tt || void 0 === tt ? void 0 : tt.message) && void 0 !== et ? et : String(tt)
    }

    function Ad(tt, et, Vt, Ot, qt) {
      PO(et) ? rd(Ot).then((et => {
        const [Ot] = et;
        Qe(tt, "terrain", Vt, qt, Ot ? `${Ot.lineNum}:${Ot.linePos} error: ${Ot.message}` : null)
      })) : Qe(tt, "terrain", Vt, qt)
    }
    var Yd = Vt(37798),
      Bd = Vt(37814),
      pd = Vt(37825),
      xd = Vt(2947);

    function Td(tt, et, Vt, Ot, qt) {
      const Dt = Math.hypot(Vt[0], Vt[1], Vt[2]);
      if (!(Dt > 0)) return;
      const mt = [Vt[0] / Dt, Vt[1] / Dt, Vt[2] / Dt],
        dt = [Math.floor(et[0]), Math.floor(et[1]), Math.floor(et[2])],
        jt = [0, 0, 0],
        Ht = [1 / 0, 1 / 0, 1 / 0],
        Xt = [1 / 0, 1 / 0, 1 / 0];
      for (let Et = 0; Et < 3; Et++) mt[Et] > 0 ? (jt[Et] = 1, Ht[Et] = (dt[Et] + 1 - et[Et]) / mt[Et], Xt[Et] = 1 / mt[Et]) : mt[Et] < 0 && (jt[Et] = -1, Ht[Et] = (dt[Et] - et[Et]) / mt[Et], Xt[Et] = -1 / mt[Et]);
      const {
        ff: Qt
      } = tt;
      let lt = tt.pU(dt[0], dt[1], dt[2]);
      for (;;) {
        const et = Ht[0] < Ht[1] ? Ht[0] < Ht[2] ? 0 : 2 : Ht[1] < Ht[2] ? 1 : 2;
        if (Ht[et] > Ot) return;
        const Vt = jt[et] > 0 ? dt[et] + 1 : dt[et];
        dt[et] += jt[et], Ht[et] += Xt[et];
        const Dt = tt.pU(dt[0], dt[1], dt[2]),
          mt = Dt !== lt && !(tt.opaque[lt] && tt.opaque[Dt]);
        if (mt) {
          const Ot = [dt[0], dt[1], dt[2]];
          Ot[et] = Vt;
          const Dt = Math.floor(Ot[0] / Qt),
            mt = Math.floor(Ot[1] / Qt),
            jt = Math.floor(Ot[2] / Qt);
          !tt.isDrawn(Dt, mt, jt) && tt.hasParts(Dt, mt, jt) && qt.add(`${Dt},${mt},${jt}`)
        }
        if (mt && tt.occluders[Dt]) return;
        lt = Dt
      }
    }

    function gd(tt, et) {
      return tt.group - et.group || tt.nearest - et.nearest
    }
    class sd {
      constructor(tt, et) {
        this.device = tt, this.iN = et, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var tt;
        const et = null !== (tt = this.free.pop()) && void 0 !== tt ? tt : this.next++;
        if (8 * et >= this.data.length) {
          const tt = new Float32Array(2 * this.data.length);
          tt.set(this.data), this.data = tt, this.words = new Uint32Array(tt.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.iN()
        }
        return et
      }
      release(tt) {
        this.free.push(tt)
      }
      set(tt, et, Vt, Ot, qt) {
        const Dt = 8 * tt + AO;
        this.data[Dt] = et, this.data[Dt + 1] = Vt, this.data[Dt + 2] = Ot, this.setVisibility(tt, qt)
      }
      setVisibility(tt, et) {
        this.data[8 * tt + iO] = et, this.markDirty(tt, tt)
      }
      setFaces(tt, et, Vt) {
        const Ot = 8 * tt;
        this.words[Ot + YO] = et, this.words[Ot + BO] = Vt, this.markDirty(tt, tt)
      }
      markDirty(tt, et) {
        this.dirtyMin = Math.min(this.dirtyMin, tt), this.dirtyMax = Math.max(this.dirtyMax, et)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const nd = UO,
      tj = !0;
    const ej = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: nd.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Vj = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Oj {
      constructor(tt) {
        this.device = tt, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(LO), this.dirLightUniforms = this.frameUniforms.subarray(ZO.dirLights, ZO.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Pe.b)(), this.faceGroups = !0, this.visibilityGraph = tj, this.visCull = tj, this.visCheck = !1, this.visCullMinDistance = pd.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new dj, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.YE = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Rd(tt, ((tt, et) => this.recordsGroup(tt, et))), this.slots = new sd(tt, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = Ke(tt), this.frameLayout = tt.createBindGroupLayout({
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
        }), this.frameBuffer = tt.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = tt.createSampler({
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
          bind: (tt, et) => this.createBinding(this.opaqueRenderable, et, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (tt, et) => this.createBinding(this.transparentRenderable, et, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(tt, et) {
        this.sceneDepth = new Id(this.device, this.transparentRenderable, tt, et)
      }
      createFrameBindGroup() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== tt && void 0 !== tt ? tt : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== et && void 0 !== et ? et : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(tt, et) {
        const Vt = null !== et && void 0 !== et ? et : tt;
        let Ot = this.recordsGroups.get(Vt);
        return Ot || (Ot = this.createFrameBindGroup(tt, et), this.recordsGroups.set(Vt, Ot)), Ot
      }
      setChunkMesh(tt, et, Vt) {
        var Ot;
        let qt = this.chunks.get(tt);
        qt ? this.geometry.release(qt) : (qt = {
          mesh: tt,
          slot: this.slots.allocate(),
          origin: [Vt[0], Vt[1], Vt[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: tt.visibility,
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
        }, this.chunks.set(tt, qt), this.writeSlot(qt)), qt.material = tt.material ? this.materialFor(tt.material) : null, qt.packed = !!et.packedVertices, qt.vertexCount = (0, Jd.f)(et), qt.faceCount = qt.vertexCount / 4;
        const Dt = null !== (Ot = et.faceGroups) && void 0 !== Ot ? Ot : null;
        if (qt.faceGroups = Dt, Dt) {
          const tt = Yd.p;
          qt.planePX = Dt[tt], qt.planeNX = Dt[tt + 1], qt.planePY = Dt[tt + 2], qt.planeNY = Dt[tt + 3], qt.planePZ = Dt[tt + 4], qt.planeNZ = Dt[tt + 5]
        }
        this.drawWhole(qt), 0 !== qt.faceCount && (this.geometry.set(qt, et) ? (qt.packed && this.slots.setFaces(qt.slot, qt.vertices.start + qt.faceCount, qt.faceCount), et.tf && this.setChunkMeshLight(tt, et.tf)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${qt.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(tt, et) {
        const Vt = this.chunks.get(tt);
        Vt && this.geometry.setLight(Vt, et)
      }
      drawStats() {
        let tt = this.transparent.length;
        for (const et of this.opaqueBatches) tt += et.meshes.length;
        return {
          drawn: tt,
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
      removeChunkMesh(tt) {
        const et = this.chunks.get(tt);
        et && (this.geometry.release(et), this.slots.release(et.slot), this.chunks.delete(tt))
      }
      remeshLost(tt, et) {
        this.geometry.release(et), et.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** et.lostRemeshes++);
        const Vt = tt.sQ,
          [Ot, qt, Dt] = Vt.hOt(et.origin[0], et.origin[1], et.origin[2]),
          mt = Vt.lw.Ew(Ot, qt, Dt);
        mt && (mt.Xw = !0, mt.ww = !0, Vt.Qw(mt, !1))
      }
      chooseFaceRanges(tt, et, Vt) {
        const Ot = this.faceRanges;
        tt.faceMask = Vt, tt.rangeCount = (0, Bd.o)(et, Vt, Ot), tt.first0 = Ot[0], tt.count0 = Ot[1], tt.first1 = Ot[2], tt.count1 = Ot[3]
      }
      drawWhole(tt) {
        tt.faceMask = -1, tt.faceEpoch = -1, tt.rangeCount = 1, tt.first0 = 0, tt.count0 = tt.faceCount
      }
      writeSlot(tt) {
        const [et, Vt, Ot] = this.originOffset;
        this.slots.set(tt.slot, tt.origin[0] - et, tt.origin[1] - Vt, tt.origin[2] - Ot, tt.visibility)
      }
      materialFor(tt) {
        const et = this.materials.get(tt);
        if (et) return et;
        const Vt = ud(tt);
        if (!Vt) return this.warnOnce(`material:${tt.name}`, `Lite terrain cannot draw material "${tt.name}"; its chunks are skipped.`), null;
        const {
          model: Ot,
          atlas: qt,
          texture: Dt,
          animated: mt,
          uniformData: dt
        } = Vt, jt = {
          id: this.materials.size,
          model: Ot,
          texture: Dt,
          animated: mt,
          uniformData: dt,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${tt.name}`,
            size: dt.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Vt.liquid,
          customRenderMat: Vt.customRenderMat,
          atlasCount: 0,
          E1: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(tt, jt), this.device.queue.writeBuffer(jt.uniformBuffer, 0, dt), jt.ready = this.createMaterialBindGroup(jt, qt).catch((et => {
          console.error(`Lite terrain failed to load the textures of material "${tt.name}"`, et)
        })), jt
      }
      materialLayout(tt) {
        const et = function(tt) {
            const et = ["uniforms"];
            if ("atlas" === tt.texture) {
              tt.animated && et.push("animData"), et.push("sampler");
              for (let Vt = 0; Vt < tt.atlasCount; Vt++) et.push("textureArray")
            } else "single" === tt.texture && et.push("sampler", "texture");
            return et
          }(tt),
          Vt = et.join(",");
        let Ot = this.materialLayouts.get(Vt);
        if (!Ot) {
          const tt = GPUShaderStage.FRAGMENT;
          Ot = this.device.createBindGroupLayout({
            label: `terrain-material-${Vt}`,
            entries: et.map(((et, Vt) => {
              switch (et) {
                case "uniforms":
                  return {
                    binding: Vt, visibility: GPUShaderStage.VERTEX | tt, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Vt, visibility: GPUShaderStage.VERTEX | tt, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Vt, visibility: tt, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Vt, visibility: tt, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Vt, visibility: tt, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Vt, Ot)
        }
        return Ot
      }
      async createMaterialBindGroup(tt, et) {
        const Vt = [{
          buffer: tt.uniformBuffer
        }];
        if (et) {
          const Ot = await Ve(this.device, et.sources);
          tt.atlasCount = Ot.length, tt.E1 = Ot[0].layerWidth, tt.atlasLayers = Ot[0].layers, et.animDataPerTex && Vt.push({
            buffer: xt(this.device, Float32Array.from(et.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Vt.push(this.sampler);
          for (const tt of Ot) Vt.push(tt.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === tt.texture) {
          const {
            url: et
          } = tt.model.diffuseTexture.source, {
            pixels: Ot,
            width: qt,
            height: Dt
          } = await ee(et);
          Vt.push(this.sampler), Vt.push(gt(this.device, Ot, qt, Dt, 1, `terrain-${et}`).createView({
            dimension: "2d"
          }))
        }
        const Ot = this.materialLayout(this.programKey(tt, !1));
        tt.bindGroupLayout = Ot, tt.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${tt.model.name}`,
          layout: Ot,
          entries: Vt.map(((tt, et) => ({
            binding: et,
            resource: tt
          })))
        })
      }
      programKey(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ot = Vt ? Vt.lighting : this.lighting,
          qt = Vt ? Vt.YE : this.YE,
          Dt = {
            texture: tt.texture,
            atlasCount: tt.atlasCount,
            E1: tt.E1,
            atlasLayers: tt.atlasLayers,
            animated: tt.animated,
            alphaTest: tt.model.transparencyMode === vt.n.alphaTest,
            lighting: Ot,
            dirLightCount: Vt ? Vt.dirLightCount : this.dirLightCount,
            packed: et
          };
        if (!qt) return Dt;
        const mt = this.shaderPackFields(tt, qt),
          dt = "atlas" === tt.texture && tt.model.transparencyMode === vt.n.opaque && SO(mt.packVariant);
        return {
          ...Dt,
          ...mt,
          alphaTest: Dt.alphaTest || dt
        }
      }
      shaderPackFields(tt, et) {
        const Vt = this.packVariant(tt, et);
        return void 0 === Vt ? vO : {
          packVariant: Vt,
          liquid: tt.liquid
        }
      }
      packVariant(tt, et) {
        return tt.customRenderMat ? void 0 : function(tt, et) {
          const Vt = tt ? tt.defineFor(et ? "liquid" : "terrain") : 0;
          return 0 === Vt ? void 0 : Vt
        }(et, tt.liquid)
      }
      isBlended(tt) {
        return tt.model.transparencyMode === vt.n.alphaBlend
      }
      shaderModule(tt, et) {
        let Vt = this.modules.get(tt);
        return Vt || (Vt = this.device.createShaderModule({
          label: et,
          code: tt
        }), this.modules.set(tt, Vt)), Vt
      }
      pipelineFor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!tt.bindGroupLayout) return null;
        if (!Ot) return this.pipelineOf(tt, et, Vt);
        const qt = this.pipelineIdNow(tt, et, !0, Vt),
          Dt = this.pipelines.get(qt);
        if (Dt) return Dt;
        const mt = this.pipelineOf(tt, et, Vt);
        return mt && void 0 === Dt && this.startPipeline(qt, tt, {
          ...this.programKey(tt, et),
          resting: Ot
        }, Vt), mt
      }
      pipelineOf(tt, et, Vt) {
        const Ot = this.pipelineIdNow(tt, et, !1, Vt),
          qt = this.pipelines.get(Ot);
        return void 0 !== qt ? qt : (this.startPipeline(Ot, tt, this.programKey(tt, et), Vt), null)
      }
      pipelineIdNow(tt, et, Vt, Ot) {
        const {
          lighting: qt,
          dirLightCount: Dt
        } = this, {
          transparencyMode: mt,
          backFaceCulling: dt
        } = tt.model, jt = this.packVariant(tt, this.YE), Ht = (et ? 2 : 0) + (Vt ? 1 : 0), Xt = tt.pipelineIds[Ht];
        if (null !== Xt && Xt.lighting === qt && Xt.dirLightCount === Dt && Xt.packVariant === jt && Xt.transparencyMode === mt && Xt.cull === dt && Xt.atlasCount === tt.atlasCount && Xt.E1 === tt.E1 && Xt.atlasLayers === tt.atlasLayers && Xt.colorFormat === Ot._colorFormat && Xt.depthStencilFormat === Ot._depthStencilFormat && Xt.sampleCount === Ot._sampleCount) return Xt.id;
        const Qt = this.programKey(tt, et),
          lt = this.pipelineId(tt, Vt ? {
            ...Qt,
            resting: Vt
          } : Qt, Ot);
        return tt.pipelineIds[Ht] = {
          id: lt,
          lighting: qt,
          dirLightCount: Dt,
          packVariant: jt,
          transparencyMode: mt,
          cull: dt,
          atlasCount: tt.atlasCount,
          E1: tt.E1,
          atlasLayers: tt.atlasLayers,
          colorFormat: Ot._colorFormat,
          depthStencilFormat: Ot._depthStencilFormat,
          sampleCount: Ot._sampleCount
        }, lt
      }
      pipelineId(tt, et, Vt) {
        return qj(et, this.isBlended(tt), tt.model.backFaceCulling, Vt)
      }
      pipelineBuild(tt, et, Vt) {
        var Ot;
        const qt = this.pipelineId(tt, et, Vt);
        return null !== (Ot = this.builds.get(qt)) && void 0 !== Ot ? Ot : this.startPipeline(qt, tt, et, Vt)
      }
      startPipeline(tt, et, Vt, Ot) {
        var qt;
        this.pipelines.set(tt, null);
        const Dt = nO(Vt),
          mt = this.isBlended(et),
          dt = this.shadowMask && Ot._depthStencilFormat ? function(tt, et, Vt, Ot) {
            if (void 0 === tt.packVariant || tt.liquid || et) return "none";
            const qt = (0, se.g)(tt.packVariant);
            return null === qt || void 0 === qt || !qt.sunShadow || !mO(qt, Vt) || qt.discards || tt.alphaTest && SO(tt.packVariant) ? "none" : Ot ? "edge" : "plain"
          }(Vt, mt, !!this.sunShadow, Ot._sampleCount > 1) : "none";
        let jt;
        try {
          jt = tq(Vt, !!this.sunShadow, dt)
        } catch (yt) {
          if (!PO(Vt)) throw yt;
          return this.failedPackBuild(tt, Vt, Dt, yt)
        }
        const Ht = this.shaderModule(jt, Dt),
          Xt = [];
        Vt.packed || (Xt.push(function(tt, et) {
          const Vt = [{
            shaderLocation: nd.position,
            offset: xe.d.oV,
            format: "float32x3"
          }, {
            shaderLocation: nd.normal,
            offset: xe.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: nd.color,
            offset: xe.d.colorOffset,
            format: "unorm8x4"
          }];
          return tt && Vt.push({
            shaderLocation: nd.uv,
            offset: xe.d.uvOffset,
            format: "float32x2"
          }), et && Vt.push({
            shaderLocation: nd.blockFlagWords,
            offset: xe.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: xe.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Vt
          }
        }("none" !== Vt.texture, PO(Vt))), Vt.lighting && Xt.push(ej));
        const Qt = et.model.backFaceCulling,
          lt = {
            label: Dt,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, et.bindGroupLayout, ...pD(this.device, Vt, !!this.sunShadow, "none" !== dt)]
            }),
            vertex: {
              module: Ht,
              entryPoint: "mainVertex",
              buffers: Xt
            },
            fragment: Me({
              module: Ht,
              entryPoint: "mainFragment"
            }, Ot, mt ? Vj : null),
            depthStencil: Ot._depthStencilFormat ? {
              format: Ot._depthStencilFormat,
              depthCompare: null !== (qt = Ot._depthCompare) && void 0 !== qt ? qt : he,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Ot._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Qt ? "back" : "none"
            }
          },
          Et = Vt.resting ? 0 : 1;
        this.compiling += Et;
        const ft = "none" === dt ? this.device.createRenderPipelineAsync(lt) : this.startMaskPipelines(Ht, lt, "edge" === dt);
        ft.then((et => {
          this.compiling -= Et, this.pipelines.set(tt, et)
        }), (tt => {
          this.compiling -= Et, console.error(`Lite terrain pipeline ${Dt} failed`, tt), Ad(this.device, Vt, Dt, Ht, tt)
        }));
        const wt = {
          name: Dt,
          module: Ht,
          built: ft
        };
        return this.builds.set(tt, wt), wt
      }
      startMaskPipelines(tt, et, Vt) {
        const Ot = et.depthStencil,
          qt = this.device.createRenderPipelineAsync(Vt ? et : {
            ...et,
            depthStencil: {
              ...Ot,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Dt = this.device.createRenderPipelineAsync({
            ...et,
            label: `${et.label}-prepass`,
            fragment: {
              module: tt,
              entryPoint: "prepassFragment",
              targets: [{
                format: Pd
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([qt, Dt]).then((tt => {
          let [et, Vt] = tt;
          return this.prepassOf.set(et, Vt), this.maskPipelines++, et
        }))
      }
      failedPackBuild(tt, et, Vt, Ot) {
        console.error(`Lite terrain pipeline ${Vt} failed`, Ot), Ad(this.device, et, Vt, null, Ot);
        const qt = Promise.reject(Ot);
        qt.catch((() => {}));
        const Dt = {
          name: Vt,
          module: null,
          built: qt
        };
        return this.builds.set(tt, Dt), Dt
      }
      checkShaderPack(tt) {
        return od(tt, {
          device: this.device,
          target: this.target,
          material: tt => this.materialFor(tt),
          programKey: (tt, et, Vt) => this.programKey(tt, et, Vt),
          pipelineBuild: (tt, et, Vt) => this.pipelineBuild(tt, et, Vt)
        })
      }
      createBinding(tt, et, Vt) {
        return this.target = et, {
          renderable: tt,
          pipeline: ce(this.device, et),
          draw: tt => {
            this.geometry.setDrawing(!0);
            try {
              return Vt ? this.drawTransparent(tt, et) : this.drawOpaque(tt, et)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(tt, et) {
        var Vt, Ot, qt, Dt;
        const {
          ql: mt
        } = tt;
        this.lighting = tt.Rw;
        const dt = (0, bd.w)(et);
        this.dirLightCount = Math.min(dt, 4), this.YE = null !== (Vt = mt.YE) && void 0 !== Vt ? Vt : null, dt > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(tt, et), this.animateMaterials(et.animTick);
        const jt = mt.bl,
          Ht = jt[0] !== this.originOffset[0] || jt[1] !== this.originOffset[1] || jt[2] !== this.originOffset[2];
        Ht && (this.originOffset[0] = jt[0], this.originOffset[1] = jt[1], this.originOffset[2] = jt[2]);
        const Xt = et.eye;
        this.eye[0] = Xt[0], this.eye[1] = Xt[1], this.eye[2] = Xt[2], this.writeShaderPackInputs();
        const Qt = et.projectionMatrix,
          lt = 0 === Qt[15];
        let Et = 0;
        (Ht || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: ft
        } = this;
        Re(this.transparentRenderable._worldCenter, et, We), this.resetBatches(lt), this.transparent.length = 0, this.unlit.length = 0;
        const wt = mt.sQ.vtt,
          yt = wt / 2 * Math.sqrt(3);
        let Nt = 0;
        const Mt = !!this.YE && WO(this.YE.defineFor("liquid"));
        let bt = !1;
        const Jt = null !== (Ot = null === (qt = mt.aJ) || void 0 === qt ? void 0 : qt.visibility) && void 0 !== Ot ? Ot : null,
          Ct = this.visCull && lt && 0 === this.compiling && null !== Jt && mt.sQ.BOt[0] >= this.visCullMinDistance ? this.target : null,
          ut = this.visPassable,
          Kt = this.visCandidates,
          ht = this.visCandidateBatches;
        ut.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let vt = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Wt = 0;
        const St = (tt, Vt) => {
          if (!Vt) return this.transparent.push(tt), void(Wt += 2 * tt.faceCount);
          if (null !== tt.faceGroups && Vt.faceCull) {
            if (0 === Et && (Et = (0, Bd.d)(Qt, et.renderWidth, et.renderHeight), Et !== this.faceFocalPx && (this.faceFocalPx = Et, ft = ++this.faceEpoch)), tt.faceEpoch !== ft) {
              tt.faceEpoch = ft;
              const et = Math.sqrt(tt.distance) + yt,
                Vt = (0, Bd.i)(tt.planePX, tt.planeNX, tt.planePY, tt.planeNY, tt.planePZ, tt.planeNZ, this.eye[0] - (tt.origin[0] - this.originOffset[0]), this.eye[1] - (tt.origin[1] - this.originOffset[1]), this.eye[2] - (tt.origin[2] - this.originOffset[2]), (0, Bd.h)(et, Et));
              Vt !== tt.faceMask && this.chooseFaceRanges(tt, tt.faceGroups, Vt)
            }
            if (0 === tt.rangeCount) return
          } else - 1 !== tt.faceMask && this.drawWhole(tt);
          Vt.meshes.push(tt), Wt += 2 * ((tt.rangeCount > 0 ? tt.count0 : 0) + (tt.rangeCount > 1 ? tt.count1 : 0))
        };
        for (const Rt of this.chunks.values()) {
          Ht && this.writeSlot(Rt);
          const tt = Rt.mesh.visibility;
          tt !== Rt.visibility && (Rt.visibility = tt, this.slots.setVisibility(Rt.slot, tt));
          const {
            material: Vt
          } = Rt;
          this.geometry.lost(Rt) && performance.now() >= Rt.lostRetryAt && this.remeshLost(mt, Rt);
          const Ot = !(null === Vt || void 0 === Vt || !Vt.bindGroup) && this.geometry.backed(Rt),
            qt = Ot && this.lighting && !Rt.vertices.page.twin;
          if (Ct && (Number.isNaN(Rt.key) && (Rt.ci = Math.floor(Rt.origin[0] / wt), Rt.cj = Math.floor(Rt.origin[1] / wt), Rt.ck = Math.floor(Rt.origin[2] / wt), Rt.key = (0, xd.e)(Rt.ci, Rt.cj, Rt.ck)), (!Ot || tt < 1 || qt || !this.batchDraws(Vt, Rt.packed, Ct)) && this.visSeeThrough(Rt, Ct) && ut.add(Rt.key)), !Ot) continue;
          qt || (Rt.lostRemeshes = 0);
          const Dt = Rt.origin[0] - this.originOffset[0],
            dt = Rt.origin[1] - this.originOffset[1],
            jt = Rt.origin[2] - this.originOffset[2];
          if (!(0, dd.d)(et.frustum, Dt, dt, jt, wt)) continue;
          const Xt = Dt + wt / 2 - this.eye[0],
            Qt = dt + wt / 2 - this.eye[1],
            Et = jt + wt / 2 - this.eye[2];
          if (Rt.distance = Xt * Xt + Qt * Qt + Et * Et, this.lighting && !Rt.lit && (Nt = Math.max(Nt, Rt.vertexCount), this.unlit.push(Rt)), qt) continue;
          const ft = this.isBlended(Vt) ? null : this.batchFor(Vt, Rt.packed, Rt.vertices.page, 1 === tt, lt);
          Ct ? (Kt[vt] = Rt, ht[vt++] = ft) : St(Rt, ft)
        }
        const ct = Ct ? this.sweepVisibility(tt, et, Jt) : null;
        null === (Dt = (0, FD.E)(mt)) || void 0 === Dt || Dt.update(et.frustum, this.originOffset, wt, ct);
        for (let Rt = 0; Rt < vt; Rt++) {
          const tt = Kt[Rt];
          !ct || ct.isDrawn(tt.ci, tt.cj, tt.ck) ? St(tt, ht[Rt]) : (this.visCulledParts++, this.visCulledTriangles += 2 * tt.faceCount)
        }
        for (const Rt of this.transparent) bt ||= Mt && Rt.material.liquid && !Rt.material.customRenderMat;
        this.submittedTriangles = Wt, ct && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(tt, et, ct)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(bt) : bt && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Nt > 0 && this.geometry.lightFullSky(this.unlit, Nt);
        for (const Rt of this.opaqueBatches) this.chunkSorter.sort(Rt.meshes, 1) || Rt.meshes.sort(Dj);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(mj)
      }
      sweepVisibility(tt, et, Vt) {
        const {
          sQ: Ot
        } = tt.ql, qt = Ot.vtt, Dt = this.visPassable, mt = this.eye[0] + this.originOffset[0], dt = this.eye[1] + this.originOffset[1], jt = this.eye[2] + this.originOffset[2];
        if (!Vt.eyeClear(mt, dt, jt, et.near, et.projectionMatrix, Ot)) return null;
        const [Ht, Xt] = Ot.BOt, Qt = Vt.update(mt, dt, jt, qt, Ht, Xt, Dt);
        return this.visSweeps = Vt.sweeps, Qt ? Vt : null
      }
      visSeeThrough(tt, et) {
        const {
          material: Vt
        } = tt;
        return (!Vt || !this.isBlended(Vt)) && (tt.mesh.visibility < 1 || !(null !== Vt && void 0 !== Vt && Vt.bindGroup) || tt.faceCount > 0 && (!this.geometry.backed(tt) || this.lighting && !tt.vertices.page.twin) || !this.batchDraws(Vt, tt.packed, et))
      }
      batchDraws(tt, et, Vt) {
        var Ot;
        const qt = et ? 2 : 0;
        if (tt === this.visDrawsMaterial && function(tt, et) {
            return 0 !== (tt & 1 << et)
          }(this.visDrawsBits, qt)) return 0 !== (this.visDrawsBits & 2 << qt);
        let Dt = null !== (Ot = this.visBatchDraws.get(tt)) && void 0 !== Ot ? Ot : 0;
        if (!(Dt & 1 << qt)) {
          Dt |= 1 << qt | (!!tt.bindGroupLayout && this.canDraw(tt, et) && !!this.pipelines.get(this.pipelineIdNow(tt, et, !1, Vt)) ? 2 << qt : 0), this.visBatchDraws.set(tt, Dt)
        }
        return this.visDrawsMaterial = tt, this.visDrawsBits = Dt, 0 !== (Dt & 2 << qt)
      }
      runVisCheck(tt, et, Vt) {
        const {
          ql: Ot
        } = tt, {
          sQ: qt
        } = Ot, Dt = qt.vtt, mt = new Set;
        for (const Et of this.chunks.values()) mt.add(Et.key);
        const dt = Aq.Matrix.FromArray(et.viewProjectionMatrix).invert(),
          [jt, Ht, Xt] = this.originOffset,
          Qt = new Aq.uf,
          lt = function(tt, et, Vt, Ot) {
            const qt = new Set;
            for (let Dt = 0; Dt < 27; Dt++)
              for (let mt = 0; mt < 48; mt++) {
                const dt = Vt((mt + .5) / 48 * 2 - 1, (Dt + .5) / 27 * 2 - 1);
                Td(tt, et, [dt[0] - et[0], dt[1] - et[1], dt[2] - et[2]], Ot, qt)
              }
            return qt
          }({
            pU: (tt, et, Vt) => qt.pU(tt, et, Vt),
            occluders: Vt.occluders,
            opaque: Vt.opaque,
            ff: Dt,
            isDrawn: (tt, et, Ot) => Vt.isDrawn(tt, et, Ot),
            hasParts: (tt, et, Vt) => mt.has((0, xd.e)(tt, et, Vt))
          }, [this.eye[0] + jt, this.eye[1] + Ht, this.eye[2] + Xt], ((tt, et) => (Aq.uf.TransformCoordinatesFromFloatsToRef(tt, et, .5, dt, Qt), [Qt.x + jt, Qt.y + Ht, Qt.z + Xt])), (qt.BOt[0] + 1) * Dt);
        this.visViolations = lt.size;
        for (const Et of lt) this.warnOnce(`vis:${Et}`, `Lite terrain cave culling skipped chunk ${Et}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var tt;
        null !== (tt = this.YE) && void 0 !== tt && tt.isRunning() && (this.shaderPackInputs ??= new xD(this.device, this.YE.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.YE, this.eye, this.lighting))
      }
      bindShaderPackInputs(tt, et, Vt) {
        var Ot, qt, Dt, mt;
        let dt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const jt = this.packVariant(et, Vt);
        if (void 0 === jt) return;
        this.shaderPackInputs || (this.shaderPackInputs = new xD(this.device, Vt.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Vt, this.eye, this.lighting));
        const Ht = WO(jt) ? null !== (Ot = null === (qt = this.sceneDepth) || void 0 === qt ? void 0 : qt.view) && void 0 !== Ot ? Ot : this.standIn() : null,
          Xt = dt ? null !== (Dt = null === (mt = this.shadowMask) || void 0 === mt ? void 0 : mt.view) && void 0 !== Dt ? Dt : this.standIn() : null;
        this.shaderPackInputs.bind(tt, Ht, BD(jt, !!this.sunShadow), Xt)
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
        var tt, et;
        return null !== (tt = null === (et = this.shaderPackInputs) || void 0 === et ? void 0 : et.bindGroupFor(null, !0)) && void 0 !== tt ? tt : null
      }
      resetBatches(tt) {
        const et = this.opaqueBatches;
        let Vt = 0;
        for (const Ot of et) Ot.meshes.length > 0 && (Ot.meshes.length = 0, Ot.faceCull = this.batchFaceCull(Ot.material, tt), et[Vt++] = Ot);
        et.length = Vt
      }
      orderBatches() {
        const tt = this.opaqueBatches;
        for (let et = 0; et < tt.length; et++) {
          const Vt = tt[et];
          Vt.group = et;
          for (let Ot = 0; Ot < et; Ot++) {
            const et = tt[Ot];
            if (et.material === Vt.material && et.packed === Vt.packed) {
              Vt.group = et.group;
              break
            }
          }
          Vt.nearest = Vt.meshes.length > 0 ? Vt.meshes[0].distance : 1 / 0
        }
        tt.sort(gd)
      }
      batchFor(tt, et, Vt, Ot, qt) {
        for (const mt of this.opaqueBatches)
          if (mt.material === tt && mt.packed === et && mt.page === Vt && mt.resting === Ot) return mt;
        const Dt = {
          material: tt,
          packed: et,
          page: Vt,
          resting: Ot,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(tt, qt)
        };
        return this.opaqueBatches.push(Dt), Dt
      }
      batchFaceCull(tt, et) {
        return !(!et || !(0, Yd.t)(tt.model)) && (!this.YE || ! function(tt) {
          var et;
          return !(null === (et = (0, se.g)(tt)) || void 0 === et || !et.movesVertices)
        }(this.packVariant(tt, this.YE)))
      }
      writeFrameUniforms(tt, et) {
        const Vt = this.frameUniforms,
          Ot = ZO;
        if ((0, bd.z)(tt, Vt), Vt[Ot.fogInfos] = et.fogEnabled ? et.fogMode : 0, Vt[Ot.fogInfos + 1] = et.fogStart, Vt[Ot.fogInfos + 2] = et.fogEnd, Vt[Ot.fogInfos + 3] = et.fogDensity, Vt.set(et.fogColour, Ot.fogColour), Vt[Ot.outputHeight] = et.renderHeight, Vt.set(et.ambientColour, Ot.sceneAmbient), (0, bd.v)(et, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const et = (0, Jd.g)(tt.xf, tt.Nf, tt.af);
          for (let tt = 0; tt < 4; tt++) Vt[Ot.aoLevels + tt] = et[tt] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Vt)
      }
      animateMaterials(tt) {
        const et = FO.anim;
        for (const Vt of this.materials.values()) Vt.animated && (Vt.uniformData[et] = tt, this.device.queue.writeBuffer(Vt.uniformBuffer, 4 * et, Vt.uniformData, et, 1))
      }
      canDraw(tt, et) {
        return !("atlas" === tt.texture && !et) || (this.warnOnce(`stride:${tt.id}`, `Lite terrain: material "${tt.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(tt, et) {
        let Vt = 0;
        tt.setBindGroup(1, this.frameBindGroup);
        for (const Ot of this.opaqueBatches) {
          if (!Ot.meshes.length || !this.canDraw(Ot.material, Ot.packed)) continue;
          const qt = this.pipelineFor(Ot.material, Ot.packed, et, Ot.resting);
          qt && (tt.setPipeline(qt), tt.setBindGroup(2, Ot.material.bindGroup), this.YE && this.bindShaderPackInputs(tt, Ot.material, this.YE, this.prepassOf.has(qt)), Vt += this.drawBatch(tt, Ot))
        }
        return Vt
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(tt, et, Vt) {
        const Ot = this.target,
          qt = this.YE;
        if (!Ot || !qt || 0 === this.maskPipelines) return 0;
        let Dt = 0,
          mt = null;
        this.geometry.setDrawing(!0);
        try {
          for (const dt of this.opaqueBatches) {
            if (!dt.meshes.length || !this.canDraw(dt.material, dt.packed)) continue;
            const jt = this.pipelineFor(dt.material, dt.packed, Ot, dt.resting),
              Ht = jt && this.prepassOf.get(jt);
            Ht && (mt || (mt = tt.beginRenderPass(et), mt.setBindGroup(0, Vt), mt.setBindGroup(1, this.frameBindGroup)), mt.setPipeline(Ht), mt.setBindGroup(2, dt.material.bindGroup), this.bindShaderPackInputs(mt, dt.material, qt, !0), Dt += this.drawBatch(mt, dt))
          }
        } finally {
          var dt;
          null === (dt = mt) || void 0 === dt || dt.end(), this.geometry.setDrawing(!1)
        }
        return Dt
      }
      drawBatch(tt, et) {
        let Vt = 0;
        for (const Ot of et.meshes) {
          const {
            rangeCount: et
          } = Ot;
          et > 0 && (Vt += this.geometry.draw(tt, Ot, this.lighting, Ot.first0, Ot.count0), et > 1 && (Vt += this.geometry.draw(tt, Ot, this.lighting, Ot.first1, Ot.count1)))
        }
        return Vt
      }
      drawTransparent(tt, et) {
        let Vt = 0,
          Ot = null,
          qt = null;
        tt.setBindGroup(1, this.frameBindGroup);
        for (const Dt of this.transparent) {
          const mt = Dt.material;
          if (!this.canDraw(mt, Dt.packed)) continue;
          const dt = this.pipelineFor(mt, Dt.packed, et);
          dt && (dt !== Ot && (tt.setPipeline(dt), Ot = dt, this.YE && this.bindShaderPackInputs(tt, mt, this.YE)), mt !== qt && (tt.setBindGroup(2, mt.bindGroup), qt = mt), Vt += this.geometry.draw(tt, Dt, this.lighting))
        }
        return Vt
      }
    }

    function qj(tt, et, Vt, Ot) {
      return `${nO(tt)}|${tt.atlasLayers}|${tt.E1}|${et}|${Vt}|${Ot._colorFormat}|${Ot._depthStencilFormat}|${Ot._sampleCount}`
    }

    function Dj(tt, et) {
      return tt.distance - et.distance
    }

    function mj(tt, et) {
      return et.distance - tt.distance
    }
    class dj {
      constructor() {
        this.left = []
      }
      sort(tt, et) {
        for (let Vt = 0; Vt < tt.length; Vt++) {
          const et = tt[Vt].distance;
          if (et - et !== 0) return !1
        }
        return this.sortRange(tt, 0, tt.length, et), !0
      }
      sortRange(tt, et, Vt, Ot) {
        if (Vt - et <= 16) {
          for (let qt = et + 1; qt < Vt; qt++) {
            const Vt = tt[qt],
              Dt = Ot * Vt.distance;
            let mt = qt - 1;
            for (; mt >= et && Ot * tt[mt].distance > Dt; mt--) tt[mt + 1] = tt[mt];
            tt[mt + 1] = Vt
          }
          return
        }
        const qt = et + Vt >>> 1;
        if (this.sortRange(tt, et, qt, Ot), this.sortRange(tt, qt, Vt, Ot), Ot * tt[qt - 1].distance <= Ot * tt[qt].distance) return;
        const {
          left: Dt
        } = this, mt = qt - et;
        for (let Xt = 0; Xt < mt; Xt++) Dt[Xt] = tt[et + Xt];
        let dt = 0,
          jt = qt,
          Ht = et;
        for (; dt < mt && jt < Vt;) tt[Ht++] = Ot * tt[jt].distance < Ot * Dt[dt].distance ? tt[jt++] : Dt[dt++];
        for (; dt < mt;) tt[Ht++] = Dt[dt++]
      }
    }
    const jj = Math.ceil(102);

    function Hj(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : et;
      const Dt = Math.min(et, Vt),
        mt = new Uint32Array(uV(Ot));
      for (let dt = 0; dt < Ot; dt++) {
        const et = Math.floor(dt * Dt / Ot),
          Vt = Math.max(et + 1, Math.floor((dt + 1) * Dt / Ot));
        for (let jt = 0; jt < Ot; jt++) {
          const Ht = Math.floor(jt * Dt / Ot),
            Xt = Math.max(Ht + 1, Math.floor((jt + 1) * Dt / Ot));
          let Qt = 0;
          for (let Ot = et; Ot < Vt; Ot++)
            for (let et = Ht; et < Xt; et++) tt[Ot * qt + et] >= jj && Qt++;
          if (2 * Qt >= (Vt - et) * (Xt - Ht)) {
            const tt = jt + Ot * dt;
            mt[tt >>> 5] |= 1 << (31 & tt)
          }
        }
      }
      return mt
    }

    function Xj(tt) {
      return Math.max(1, Math.min(16, tt))
    }
    class Qj {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = tt, this.loadTexture = et, this.warn = Vt, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(tt, et) {
        return (tt.JG !== this.builtVersion || this.blockCaster.length !== et) && (this.build(tt, et), !0)
      }
      build(tt, et) {
        this.builtVersion = tt.JG;
        const Vt = new Uint16Array(et),
          Ot = new Map;
        for (let qt = 1; qt < et; qt++) {
          const et = this.classify(tt, qt, Ot);
          if (null === et || et === aV) {
            Vt[qt] = null === et ? 0 : aV;
            continue
          }
          let Dt = this.byKey.get(et.key);
          void 0 === Dt && (Dt = this.allocate(et), this.byKey.set(et.key, Dt)), Vt[qt] = Dt
        }
        this.blockCaster = Vt, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(tt, et) {
        const Vt = tt.f6[et];
        if ("function" !== typeof Vt) return Vt;
        try {
          return Vt()
        } catch (Ot) {
          return this.warnOnce(`Sun shadows: no caster option for block ${et}: ${Ot instanceof Error?Ot.message:String(Ot)}`), null
        }
      }
      classify(tt, et, Vt) {
        const Ot = this.option(tt, et);
        if ("none" === Ot) return null;
        if (Ot && Ot.planes.length > 0) {
          const tt = Ot.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(tt)}`,
            planes: tt
          }
        }
        if (tt.VE[et]) return null;
        const qt = tt.qE[et] ? tt.vG(et) : null;
        if (qt && qt.length >= 6) {
          const tt = function(tt) {
            const et = new Uint32Array(16);
            for (let Vt = 0; Vt + 6 <= tt.length; Vt += 6) {
              const Ot = [0, 1, 2].map((et => Math.max(0, Math.ceil(8 * tt[Vt + et] - .5)))),
                qt = [0, 1, 2].map((et => Math.min(7, Math.floor(8 * tt[Vt + et + 3] - .5))));
              for (let tt = Ot[2]; tt <= qt[2]; tt++)
                for (let Vt = Ot[1]; Vt <= qt[1]; Vt++)
                  for (let Dt = Ot[0]; Dt <= qt[0]; Dt++) {
                    const Ot = Dt + 8 * (Vt + 8 * tt);
                    et[Ot >>> 5] |= 1 << (31 & Ot)
                  }
            }
            return et
          }(qt);
          return function(tt) {
            return tt.every((tt => 4294967295 === tt))
          }(tt) ? aV : tt.every((tt => 0 === tt)) ? null : {
            kind: "shape",
            key: `shape:${tt.join(",")}`,
            mask: tt
          }
        }
        if (tt.pC[et] || !tt.Tf[et]) return null;
        const Dt = [0, 1, 2, 3, 4, 5].map((Ot => {
          const qt = tt.gf[6 * et + Ot];
          let Dt = Vt.get(qt);
          return void 0 === Dt && (Dt = function(tt) {
            if (!tt || tt.jw) return null;
            const {
              R7: et,
              E1: Vt,
              J7: Ot
            } = tt;
            if (!et || !Vt || !(Vt > 0) || void 0 === Ot || !(Ot >= 0)) return null;
            const qt = et[0],
              Dt = Vt * Vt * 4;
            if (!qt || qt.byteLength < Dt) return null;
            const mt = Math.floor(qt.byteLength / Dt),
              dt = et[Math.floor(Ot / mt)];
            if (!dt) return null;
            const jt = new Uint8Array(dt.buffer, dt.byteOffset, dt.byteLength),
              Ht = Ot % mt * Dt;
            if (Ht + Dt > jt.length) return null;
            const Xt = new Uint8Array(Vt * Vt);
            let Qt = !1;
            for (let lt = 0; lt < Xt.length; lt++) Xt[lt] = jt[Ht + 4 * lt + 3], Qt ||= Xt[lt] < jj;
            return Qt ? {
              alpha: Xt,
              width: Vt
            } : null
          }(tt.dw(qt)), Vt.set(qt, Dt)), Dt
        }));
        if (Dt.every((tt => null === tt))) return aV;
        const mt = Xj(Math.max(...Dt.map((tt => {
            var et;
            return null !== (et = null === tt || void 0 === tt ? void 0 : tt.width) && void 0 !== et ? et : 1
          })))),
          dt = new Uint32Array(uV(mt)).fill(4294967295),
          jt = Dt.map((tt => null === tt ? dt : Hj(tt.alpha, tt.width, tt.width, mt)));
        return {
          kind: "cutout",
          key: `cutout:${mt}:${jt.map((tt=>tt.join(","))).join("|")}`,
          size: mt,
          faces: jt
        }
      }
      allocate(tt) {
        if (this.nextCaster >= KV) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const et = this.nextCaster++;
        if (this.writeCaster(et, MV, 0, 0, 0), "shape" === tt.kind) {
          const Vt = this.allocateMask(tt.mask.length);
          Vt >= 0 && (this.sink(Vt, tt.mask), this.writeCaster(et, bV, Vt, 0, 8))
        } else if ("cutout" === tt.kind) {
          const Vt = uV(tt.size),
            Ot = this.allocateMask(6 * Vt);
          if (Ot >= 0) {
            const qt = new Uint32Array(6 * Vt);
            tt.faces.forEach(((tt, et) => {
              qt.set(tt, et * Vt)
            })), this.sink(Ot, qt), this.writeCaster(et, CV, Ot, 0, tt.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(et, tt.planes).finally((() => {
          this.planesLoading--
        })));
        return et
      }
      async loadPlanes(tt, et) {
        const Vt = await Promise.all(et.map((tt => this.texture(tt.texture))));
        if (Vt.some((tt => null === tt))) return;
        const Ot = Vt,
          qt = Xj(Math.max(...Ot.map((tt => Math.min(tt.width, tt.height))))),
          Dt = uV(qt),
          mt = this.allocateMask(et.length * (4 + Dt));
        if (mt < 0) return;
        const dt = new Uint32Array(et.length * (4 + Dt)),
          jt = 4 * et.length;
        et.forEach(((tt, et) => {
          const Vt = mt + jt + et * Dt;
          dt.set(function(tt, et) {
            const [Vt, Ot] = tt.tangent, qt = Math.hypot(Vt, Ot) || 1, Dt = Vt / qt, mt = Ot / qt, dt = tt.centre[0] * mt - tt.centre[1] * Dt, jt = new Uint32Array(4);
            return new Float32Array(jt.buffer, 0, 3).set([Dt, mt, dt]), jt[3] = et, jt
          }(tt, Vt), 4 * et), dt.set(Hj(Ot[et].alpha, Ot[et].width, Ot[et].height, qt), jt + et * Dt)
        })), this.sink(mt, dt), this.writeCaster(tt, JV, mt, et.length, qt)
      }
      texture(tt) {
        let et = this.textures.get(tt);
        return et || (et = this.loadTexture(tt).catch((et => (this.warn(`Sun shadows: no mask for ${tt}: ${et instanceof Error?et.message:String(et)}`), null))), this.textures.set(tt, et)), et
      }
      allocateMask(tt) {
        if (this.nextMaskWord + tt > hV) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const et = 32768 + this.nextMaskWord;
        return this.nextMaskWord += tt, et
      }
      writeCaster(tt, et, Vt, Ot, qt) {
        this.sink(0 + 4 * tt, Uint32Array.of(et, Vt, Ot, qt))
      }
      warnOnce(tt) {
        this.warned.has(tt) || (this.warned.add(tt), this.warn(tt))
      }
    }
    var lj = Vt(2928);

    function Ej(tt) {
      return !tt.Xw && !tt.JC && !tt.kf
    }

    function fj() {
      return {
        bricks: new Uint32Array(XV),
        cells: new Uint16Array(32768),
        special: new Uint8Array(jV)
      }
    }
    class wj {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = tt, this.writeVoxels = et, this.writePool = Vt, this.warn = Ot, this.eyeChunk = null, this.slotChunk = new Array(VV).fill(null), this.slotVersion = new Float64Array(VV).fill(-1), this.slotPool = new Array(VV).fill(null), this.starved = new Uint8Array(VV), this.queue = [], this.queued = new Uint8Array(VV), this.queueSorted = !0, this.freePool = new Uint32Array(vV), this.freeCount = vV, this.casterTable = null, this.warnedPool = !1, this.scratch = fj(), this.victimScratch = fj(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * VV), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let qt = 0; qt < vV; qt++) this.freePool[qt] = 65535 - qt
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return vV - this.freeCount
      }
      chunkAdded(tt) {
        if (null === this.eyeChunk || !this.inRadius(tt.i, tt.j, tt.k)) return;
        const et = wV(tt.i, tt.j, tt.k);
        this.slotChunk[et] = tt, this.slotVersion[et] = -1, this.enqueue(et)
      }
      update(tt, et, Vt) {
        const Ot = this.casters.blockCaster;
        if (Ot !== this.casterTable) {
          this.casterTable = Ot;
          for (let tt = 0; tt < VV; tt++) this.slotVersion[tt] = -1, this.slotChunk[tt] && this.enqueue(tt)
        }
        const qt = Math.floor(tt[0] / 32),
          Dt = Math.floor(tt[1] / 32),
          mt = Math.floor(tt[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== qt || this.eyeChunk[1] !== Dt || this.eyeChunk[2] !== mt) && (this.eyeChunk = [qt, Dt, mt], this.follow(et), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let dt = 0; dt < VV; dt++) {
          const tt = this.slotChunk[dt];
          tt && (tt.bC || tt.rf !== this.slotVersion[dt]) && this.enqueue(dt)
        }
        this.drain(Vt), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(tt, et) {
        this.records.set(et, 4 * tt), this.windowTopStale = !0, this.writeVoxels(4 * tt, et)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const tt = this.records;
        let et = -1 / 0;
        for (let Ot = 0; Ot < tt.length; Ot += 4) {
          const Vt = 255 & tt[Ot + 3];
          Vt !== DV && Vt !== mV || !this.inRadius(tt[Ot], tt[Ot + 1], tt[Ot + 2]) || (et = Math.max(et, tt[Ot + 1] * ne + (tt[Ot + 3] >>> 8)))
        }
        const Vt = et === -1 / 0 ? 1 : et + lV;
        Vt !== this.windowTop[0] && (this.windowTop[0] = Vt, this.writeVoxels(QV, this.windowTop))
      }
      follow(tt) {
        const et = this.eyeChunk,
          [Vt, Ot, qt] = tV;
        for (let mt = -qt; mt <= qt; mt++)
          for (let qt = -Ot; qt <= Ot; qt++)
            for (let Ot = -Vt; Ot <= Vt; Ot++) {
              var Dt;
              const Vt = et[0] + Ot,
                dt = et[1] + qt,
                jt = et[2] + mt,
                Ht = wV(Vt, dt, jt),
                Xt = this.slotChunk[Ht];
              if (Xt && !Xt.bC && Xt.i === Vt && Xt.j === dt && Xt.k === jt) continue;
              const Qt = null !== (Dt = tt(Vt, dt, jt)) && void 0 !== Dt ? Dt : null;
              Xt && (Xt.i !== Vt || Xt.j !== dt || Xt.k !== jt) && this.slotPool[Ht] && (this.release(Ht), this.record.fill(0), this.writeRecord(Ht, this.record)), this.slotChunk[Ht] = Qt, this.slotVersion[Ht] = -1, (Qt || Xt) && this.enqueue(Ht)
            }
      }
      requeueStarved() {
        for (let tt = 0; tt < VV; tt++) this.starved[tt] && this.slotChunk[tt] && this.enqueue(tt)
      }
      enqueue(tt) {
        this.queued[tt] || (this.queued[tt] = 1, this.queue.push(tt), this.queueSorted = !1)
      }
      drain(tt) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const tt = new Map;
          for (const et of this.queue) tt.set(et, this.slotDistance(et));
          this.queue.sort(((et, Vt) => tt.get(Vt) - tt.get(et))), this.queueSorted = !0
        }
        const et = performance.now();
        let Vt = 0;
        const Ot = [];
        for (; this.queue.length > 0 && (0 === Vt || performance.now() - et < tt);) {
          const tt = this.queue.pop(),
            et = this.slotChunk[tt];
          !et || et.bC || Ej(et) ? (this.queued[tt] = 0, this.encodeSlot(tt), Vt++) : Ot.push(tt)
        }
        for (let qt = Ot.length - 1; qt >= 0; qt--) this.queue.push(Ot[qt])
      }
      slotDistance(tt) {
        const et = this.slotChunk[tt],
          Vt = this.eyeChunk;
        return et ? Math.max(Math.abs(et.i - Vt[0]), Math.abs(et.j - Vt[1]), Math.abs(et.k - Vt[2])) : 0
      }
      inRadius(tt, et, Vt) {
        const Ot = this.eyeChunk,
          [qt, Dt, mt] = tV;
        return Math.abs(tt - Ot[0]) <= qt && Math.abs(et - Ot[1]) <= Dt && Math.abs(Vt - Ot[2]) <= mt
      }
      release(tt) {
        const et = this.slotPool[tt];
        if (et) {
          for (let tt = et.length - 1; tt >= 0; tt--) this.freePool[this.freeCount++] = et[tt];
          this.slotPool[tt] = null
        }
      }
      encodeSlot(tt) {
        var et, Vt, Ot, qt, Dt;
        let mt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          dt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const jt = null !== (et = null === (Vt = this.slotPool[tt]) || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0;
        this.release(tt), this.starved[tt] = 0;
        const Ht = this.slotChunk[tt],
          Xt = this.record;
        if (!Ht || Ht.bC || !Ht.hl) return this.slotChunk[tt] = null, this.slotVersion[tt] = -1, Xt.fill(0), this.writeRecord(tt, Xt), void(jt > 0 && this.requeueStarved());
        this.slotVersion[tt] = Ht.rf;
        const Qt = this.encodeBricks(Ht, tt, mt, dt);
        Xt[0] = Ht.i, Xt[1] = Ht.j, Xt[2] = Ht.k, Xt[3] = Qt, this.writeRecord(tt, Xt), null === (Ot = this.encoded) || void 0 === Ot || Ot.call(this, Ht), dt && (null !== (qt = null === (Dt = this.slotPool[tt]) || void 0 === Dt ? void 0 : Dt.length) && void 0 !== qt ? qt : 0) < jt && this.requeueStarved()
      }
      encodeBricks(tt, et, Vt, Ot) {
        if (tt.Vf) return qV;
        const qt = this.casters.blockCaster,
          {
            data: Dt,
            stride: mt,
            offset: dt
          } = tt.hl,
          [jt, Ht, Xt] = mt,
          Qt = ne,
          {
            bricks: lt,
            cells: Et,
            special: ft
          } = Vt;
        lt.fill(0), ft.fill(0);
        let wt = 0,
          yt = 0,
          Nt = 0;
        for (let Mt = 0; Mt < Qt; Mt++) {
          const et = Mt >> 2,
            Vt = 3 & Mt,
            Ot = tt.JE[Mt],
            mt = Ot === lj.c ? -1 : Ot < qt.length ? qt[Ot] : 0;
          if (0 !== mt)
            for (let tt = 0; tt < Qt; tt++) {
              const Ot = tt >> 2,
                bt = 3 & tt;
              let Jt = dt + tt * jt + Mt * Ht;
              for (let tt = 0; tt < Qt; tt++, Jt += Xt) {
                let dt = mt;
                if (dt < 0) {
                  const tt = Dt[Jt];
                  if (dt = tt < qt.length ? qt[tt] : 0, 0 === dt) continue
                }
                const jt = yV(Ot, et, tt >> 2),
                  Ht = NV(bt, Vt, 3 & tt);
                lt[3 * jt + (Ht >>> 5)] |= 1 << (31 & Ht), Et[jt * dV + Ht] = dt, wt++, Nt = Mt, dt === aV ? yt++ : ft[jt] = 1
              }
            }
        }
        return 0 === wt ? qV : 32768 === yt ? DV | Nt << 8 : (this.writePoolEntries(et, Vt, Ot), this.writeVoxels(HV + et * XV, lt), mV | Nt << 8)
      }
      writePoolEntries(tt, et, Vt) {
        const {
          bricks: Ot,
          cells: qt,
          special: Dt
        } = et, mt = this.entry;
        let dt = 0;
        for (let Xt = 0; Xt < jV; Xt++) dt += Dt[Xt];
        if (0 === dt) return;
        Vt && this.freeCount < dt && this.evictBeyond(tt, dt);
        const jt = new Uint32Array(Vt ? Math.min(dt, this.freeCount) : 0);
        let Ht = 0;
        for (let Xt = 0; Xt < jV; Xt++) {
          if (!Dt[Xt]) continue;
          const Vt = 3 * Xt;
          if (Ht === jt.length) {
            this.dropSpecials(et, Xt), this.starved[tt] = 1;
            continue
          }
          const dt = this.freePool[--this.freeCount];
          jt[Ht++] = dt;
          for (let tt = 0; tt < dV; tt++) {
            const et = Ot[Vt + (tt >>> 5)] >>> (31 & tt) & 1 ? qt[Xt * dV + tt] : 0;
            1 & tt ? mt[tt >> 1] |= et << 16 : mt[tt >> 1] = et
          }
          Ot[Vt + 2] = dt + 1, this.writePool(WV + 32 * dt, mt)
        }
        jt.length > 0 && (this.slotPool[tt] = jt)
      }
      evictBeyond(tt, et) {
        const Vt = this.slotDistance(tt),
          Ot = [];
        for (let qt = 0; qt < VV; qt++) qt !== tt && this.slotPool[qt] && this.slotDistance(qt) > Vt && Ot.push(qt);
        Ot.sort(((tt, et) => this.slotDistance(et) - this.slotDistance(tt)));
        for (const qt of Ot) {
          if (this.freeCount >= et) return;
          const tt = this.slotChunk[qt];
          tt && !tt.bC && tt.hl && (tt.rf === this.slotVersion[qt] || Ej(tt)) && this.encodeSlot(qt, this.victimScratch, !1)
        }
      }
      dropSpecials(tt, et) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Vt = 3 * et;
        for (let Ot = 0; Ot < dV; Ot++) tt.cells[et * dV + Ot] !== aV && (tt.bricks[Vt + (Ot >>> 5)] &= ~(1 << (31 & Ot)))
      }
    }
    var yj = Vt(37727);
    class Nj {
      constructor(tt) {
        this.device = tt, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new zV, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.sQ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = tt.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = tt.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(tt, et, Vt) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Ot
        } = this;
        Ot.XE(tt, et), Vt.forEachSunShadowCaster((tt => {
          this.add(tt)
        })), Ot.finish();
        const qt = 0 === Ot.parts;
        if (qt && this.uploadedEmpty) return;
        this.uploadedEmpty = qt;
        const {
          queue: Dt
        } = this.device, {
          words: mt
        } = Ot;
        Dt.writeBuffer(this.frameBuffer, 0, mt, 0, 16385), Ot.refs > 0 && Dt.writeBuffer(this.frameBuffer, 65540, mt, IV, Ot.refs), qt || Dt.writeBuffer(this.frameBuffer, 327684, mt, PV, Ot.parts * RV)
      }
      add(tt) {
        const et = this.gridFor(tt);
        if (!et) return;
        const {
          frame: Vt
        } = this, {
          sQ: Ot,
          worldAt: qt,
          instances: Dt,
          instanceCount: mt,
          thin: dt
        } = tt;
        if (Dt)
          for (let jt = 0; jt < mt; jt++) dt ? (rV(Dt, 16 * jt, Ot, qt, this.sQ), Vt.add(et, this.sQ)) : Vt.add(et, Dt, 16 * jt);
        else Vt.add(et, Ot, qt)
      }
      gridFor(tt) {
        let {
          geometry: et,
          indexed: Vt,
          first: Ot,
          count: qt,
          skip: Dt
        } = tt, mt = this.grids.get(et);
        mt || (mt = new Map, this.grids.set(et, mt));
        const dt = `${Vt?Ot:-1-Ot}:${qt}:${null!==Dt&&void 0!==Dt?Dt:""}`;
        let jt = mt.get(dt);
        if (void 0 !== jt || this.gridsFull) return jt;
        const Ht = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Ht + 2;
        else if (Ht > this.bakeDeadline) return;
        return jt = this.bake(et, Vt, Ot, qt, Dt), void 0 !== jt && mt.set(dt, jt), jt
      }
      bake(tt, et, Vt, Ot, qt) {
        const Dt = tt.vertexAttributes.find((tt => "position" === tt.kind)),
          mt = Dt ? function(tt, et, Vt, Ot) {
            let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Dt = tt => et ? et[Vt + tt] : Vt + tt,
              mt = tt => null !== qt && [0, 1, 2].some((et => {
                const Vt = Dt(tt + et);
                return Vt >= qt[0] && Vt < qt[1]
              })),
              dt = [1 / 0, 1 / 0, 1 / 0],
              jt = [-1 / 0, -1 / 0, -1 / 0];
            for (let Mt = 0; Mt + 2 < Ot; Mt += 3)
              if (!mt(Mt))
                for (let et = 0; et < 3; et++) {
                  const Vt = Dt(Mt + et);
                  for (let et = 0; et < 3; et++) dt[et] = Math.min(dt[et], tt[3 * Vt + et]), jt[et] = Math.max(jt[et], tt[3 * Vt + et])
                }
            const Ht = Math.max(jt[0] - dt[0], jt[1] - dt[1], jt[2] - dt[2]);
            if (!(Ht > 0)) return null;
            const Xt = Ht / 64,
              Qt = [0, 0, 0],
              lt = [0, 0, 0],
              Et = [0, 0, 0];
            for (let Mt = 0; Mt < 3; Mt++) Qt[Mt] = Math.min(65, Math.ceil((jt[Mt] - dt[Mt]) / Xt) + 1), lt[Mt] = dt[Mt] - Xt / 2, Et[Mt] = lt[Mt] + Qt[Mt] * Xt;
            const ft = new Uint32Array(Math.ceil(Qt[0] * Qt[1] * Qt[2] / 32)),
              wt = new Float64Array(9),
              yt = [0, 0, 0],
              Nt = [0, 0, 0];
            for (let Mt = 0; Mt + 2 < Ot; Mt += 3)
              if (!mt(Mt)) {
                for (let et = 0; et < 3; et++) {
                  const Vt = Dt(Mt + et);
                  for (let Ot = 0; Ot < 3; Ot++) wt[3 * et + Ot] = tt[3 * Vt + Ot]
                }
                for (let tt = 0; tt < 3; tt++) {
                  const et = Math.min(wt[tt], wt[3 + tt], wt[6 + tt]),
                    Vt = Math.max(wt[tt], wt[3 + tt], wt[6 + tt]);
                  yt[tt] = Math.max(0, Math.floor((et - lt[tt]) / Xt - 1e-6)), Nt[tt] = Math.min(Qt[tt] - 1, Math.floor((Vt - lt[tt]) / Xt + 1e-6))
                }
                for (let tt = yt[2]; tt <= Nt[2]; tt++)
                  for (let et = yt[1]; et <= Nt[1]; et++)
                    for (let Vt = yt[0]; Vt <= Nt[0]; Vt++)
                      if (UV(wt, lt[0] + (Vt + .5) * Xt, lt[1] + (et + .5) * Xt, lt[2] + (tt + .5) * Xt, Xt / 2)) {
                        const Ot = Vt + Qt[0] * (et + Qt[1] * tt);
                        ft[Ot >>> 5] |= 1 << (31 & Ot)
                      }
              } return {
              words: ft,
              lo: lt,
              hi: Et,
              cell: Xt,
              dims: Qt
            }
          }((0, yj.g)(Dt, tt.vertexCount), et ? tt.indexData : null, Vt, Ot, qt) : null;
        if (!mt) return null;
        const {
          words: dt,
          ...jt
        } = mt;
        if (this.gridTop + dt.length > LV) return void(this.gridsFull = !0);
        const Ht = this.gridTop;
        return this.gridTop += dt.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Ht, dt), {
          ...jt,
          at: Ht
        }
      }
    }
    const aj = Math.cos(1 * Math.PI / 180);

    function Mj(tt, et) {
      return tt[0] * et[0] + tt[1] * et[1] + tt[2] * et[2] < aj
    }
    async function bj(tt) {
      const {
        pixels: et,
        width: Vt,
        height: Ot
      } = await ee(tt), qt = new Uint8Array(Vt * Ot);
      for (let Dt = 0; Dt < qt.length; Dt++) qt[Dt] = et[4 * Dt + 3];
      return {
        width: Vt,
        height: Ot,
        alpha: qt
      }
    }
    class Jj {
      constructor(tt, et) {
        this.device = tt, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(iV.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = tt.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = tt.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * EV,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = tt.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Vt, Ot, qt] = iV.o;
        this.volume = tt.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Vt,
            height: Ot,
            depthOrArrayLayers: qt
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = tt.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = tt.createBuffer({
          label: "sun-shadow-volume-work",
          size: iV.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = et ? new Nj(tt) : null, this.entityStandIn = et ? null : tt.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var tt;
        null === (tt = this.stopWindow) || void 0 === tt || tt.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var tt, et;
        const Vt = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Vt.push("Lite sun shadow volume pipeline compiling");
        const Ot = null !== (tt = null === (et = this.casters) || void 0 === et ? void 0 : et.planesLoading) && void 0 !== tt ? tt : 0;
        return Ot > 0 && Vt.push(`${Ot} Lite sun shadow plane casters loading their textures`), Vt
      }
      entries() {
        var tt, et, Vt, Ot;
        const qt = ge.s;
        return [{
          binding: qt.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: qt.hl,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: qt.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: qt.volume,
          resource: this.volumeView
        }, {
          binding: qt.sampler,
          resource: this.volumeSampler
        }, {
          binding: qt.entities,
          resource: {
            buffer: null !== (tt = null === (et = this.entities) || void 0 === et ? void 0 : et.frameBuffer) && void 0 !== tt ? tt : this.entityStandIn
          }
        }, {
          binding: qt.entityGrids,
          resource: {
            buffer: null !== (Vt = null === (Ot = this.entities) || void 0 === Ot ? void 0 : Ot.gridBuffer) && void 0 !== Vt ? Vt : this.entityStandIn
          }
        }]
      }
      prepare(tt, et, Vt) {
        var Ot;
        this.entitiesThisFrame = !1;
        const qt = null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.sunShadowReach()) && void 0 !== Ot ? Ot : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Vt || !qt.sunShadow && !qt.airShadow) return void(this.volumeHolds = null);
        if (tt.sQ.vtt !== ne) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${tt.sQ.vtt}; everything is lit.`)));
        const Dt = this.start(tt);
        this.casters.update(tt.tE, tt.tE.qE.length);
        const mt = tt.bl;
        for (let lt = 0; lt < 3; lt++) this.eye[lt] = et[lt] + mt[lt];
        const dt = (0, iV.x)(this.eye);
        this.staleNear = dt;
        const jt = tt.sQ.lw;
        Dt.update(this.eye, ((tt, et, Vt) => jt.Ew(tt, et, Vt)), 1);
        const Ht = (0, iV.p)(Vt.jtt()),
          Xt = Dt.eyeChunk,
          Qt = this.uniformInts;
        for (let lt = 0; lt < 3; lt++) Qt[lt] = Xt[lt], Qt[4 + lt] = dt[lt];
        this.entitiesThisFrame = null !== this.entities && qt.sunShadow, this.entitiesThisFrame && GV(this.uniformFloats, 8, et, Ht), null !== this.volumeHolds && (this.castersWritten || Mj(Ht, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(dt, Ht, Xt)
      }
      markStale(tt) {
        const et = this.staleNear,
          Vt = ne,
          Ot = [tt.i * Vt, tt.j * Vt, tt.k * Vt];
        for (let Dt = 0; Dt < 3; Dt++)
          if (Ot[Dt] + Vt <= et[Dt] - Vt || Ot[Dt] >= et[Dt] + iV.o[Dt] + Vt) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const qt = this.stale;
        for (let Dt = 0; Dt < qt.length; Dt += 4)
          if (qt[Dt] === tt.i && qt[Dt + 1] === tt.j && qt[Dt + 2] === tt.k) return void(qt[Dt + 3] = this.swept);
        if (16 === qt.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        qt.push(tt.i, tt.j, tt.k, this.swept)
      }
      writeStale() {
        const tt = this.swept,
          et = this.stale;
        this.staleAll && tt - this.staleAllSwept >= iV.j && (this.staleAll = !1, et.length = 0);
        let Vt = 0;
        for (let qt = 0; qt < et.length; qt += 4)
          if (tt - et[qt + 3] < iV.j) {
            for (let tt = 0; tt < 4; tt++) et[Vt + tt] = et[qt + tt];
            Vt += 4
          } et.length = Vt;
        const Ot = this.uniformInts;
        Ot[3] = this.staleAll ? 5 : Vt / 4;
        for (let qt = 0; qt < 4; qt++)
          for (let tt = 0; tt < 3; tt++) Ot[16 + 4 * qt + tt] = 4 * qt < Vt ? et[4 * qt + tt] * ne : 0
      }
      writeUniform() {
        const tt = this.uniformInts;
        let et = this.uniformWritten;
        if (et) {
          let Vt = !0;
          for (let Ot = 0; Ot < tt.length && Vt; Ot++) Vt = tt[Ot] === et[Ot];
          if (Vt) return
        }
        et ??= this.uniformWritten = new Int32Array(tt.length), et.set(tt), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(tt) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, tt)
      }
      computeVolume(tt, et, Vt) {
        const Ot = this.buildVolumePass();
        if (!Ot) return void(this.volumeHolds = null);
        const qt = (0, iV.t)(this.volumeHolds, tt);
        this.volumeHolds = tt;
        const Dt = 1 === qt.length && qt[0].size.every(((tt, et) => tt === iV.o[et])),
          mt = this.sweptChunk,
          dt = this.sweptLight,
          jt = et[0] !== dt[0] || et[1] !== dt[1] || et[2] !== dt[2],
          Ht = Vt[0] !== mt[0] || Vt[1] !== mt[1] || Vt[2] !== mt[2],
          Xt = jt && Mj(et, dt);
        if ((Dt || this.written || Ht || Xt) && (this.fastLeft = iV.j), Dt || this.written || jt || Ht) {
          this.written = !1;
          for (let tt = 0; tt < 3; tt++) mt[tt] = Vt[tt], dt[tt] = et[tt];
          this.sweepLeft = Dt ? 0 : iV.j
        }
        if (Dt ? this.swept += iV.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, qt.push(...(0, iV.B)(tt, this.slice)), this.slice = (this.slice + 1) % iV.j, this.swept++), 0 === qt.length) return;
        const Qt = (0, iV.F)(this.workData, et, qt);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const lt = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Et = lt.beginComputePass({
            label: "sun-shadow-volume"
          });
        Et.setPipeline(Ot.pipeline), Et.setBindGroup(pV.group, Ot.bindGroup), Et.dispatchWorkgroups(Math.ceil(Qt / iV.l)), Et.end(), this.device.queue.submit([lt.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const tt = pV,
          et = GPUShaderStage.COMPUTE,
          Vt = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: tt.uniform,
              visibility: et,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: tt.hl,
              visibility: et,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: tt.special,
              visibility: et,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: tt.work,
              visibility: et,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: tt.volume,
              visibility: et,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Ot = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Vt,
            entries: [{
              binding: tt.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: tt.hl,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: tt.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: tt.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: tt.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Vt]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: xV()
            }),
            entryPoint: "main"
          }
        }).then((tt => {
          this.volumePass = {
            pipeline: tt,
            bindGroup: Ot
          }
        }), (tt => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(tt)}`)
        })), null
      }
      start(tt) {
        if (this.window) return this.window;
        const et = (tt, et) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * tt, et)
        };
        this.casters = new Qj(((tt, Vt) => {
          this.castersWritten = !0, et(tt, Vt)
        }), bj);
        const Vt = new wj(this.casters, ((tt, et) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * tt, et)
        }), et);
        Vt.encoded = tt => {
          this.markStale(tt)
        };
        const Ot = tt => {
          Vt.chunkAdded(tt)
        };
        return tt.sQ.on("chunkAdded", Ot), this.stopWindow = () => {
          tt.sQ.removeListener("chunkAdded", Ot)
        }, this.window = Vt, Vt
      }
    }
    var Cj = Vt(38922),
      uj = Vt(38924);
    const Kj = 0,
      hj = 3,
      vj = 4,
      Wj = 5;

    function Sj(tt, et, Vt, Ot) {
      tt.drawOffset(et, Ot + Kj), et[Ot + hj] = tt.drawTime(), Vt[Ot + vj] = tt.ring.drawStart(), Vt[Ot + Wj] = tt.ring.drawCount()
    }
    const cj = `\n${zO}\n\nconst MAX_STOPS = ${uj.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${uj.e/4}>,\n\tcolor1: array<vec4f, ${uj.e}>,\n\tcolor2: array<vec4f, ${uj.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${uj.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${uj.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Rj = Vt(41851);
    class Ij {
      constructor(tt, et, Vt, Ot) {
        this.device = tt, this.system = et, this.frameIndex = Vt, this.bindings = Ot, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Rj.i)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (tt, et) => {
          this.device.queue.writeBuffer(this.ring, tt * uj.h * 4, this.system.ring.records, tt * uj.h, (et - tt) * uj.h)
        };
        const {
          name: qt
        } = et;
        this.ring = tt.createBuffer({
          label: `particles-${qt}`,
          size: et.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = tt.createBuffer({
          label: `particles-uniforms-${qt}`,
          size: 4 * uj.r,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(tt) {
        const et = (0, Rj.e)(this.system, this.uniformBits, tt);
        et && (this.uniformBits = et, this.device.queue.writeBuffer(this.uniforms, 0, et))
      }
      bind() {
        const {
          system: tt
        } = this, et = this.texture;
        (0, Rj.o)(tt, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${tt.name}`,
          size: [uj.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * uj.l
        }, [uj.l, 1]));
        const Vt = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === et.view && this.boundSampler === et.sampler && this.boundRamp === Vt || (this.boundView = et.view, this.boundSampler = et.sampler, this.boundRamp = Vt, this.bindGroup = this.device.createBindGroup({
          label: `particles-${tt.name}`,
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
            resource: et.sampler
          }, {
            binding: 3,
            resource: et.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Vt
          }]
        }))
      }
      destroy() {
        var tt;
        this.ring.destroy(), this.uniforms.destroy(), null === (tt = this.ramp) || void 0 === tt || tt.destroy()
      }
    }
    class Pj {
      constructor(tt, et) {
        this.device = tt, this.resources = et, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Pe.b)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (tt, et) => (this.bindTarget(et), {
            renderable: this.renderable,
            pipeline: ce(this.device, et),
            draw: tt => et === this.preparedTarget ? this.draw(tt) : 0
          })
        }
      }
      rebind(tt) {
        this.device = tt, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [et, Vt] of this.systems) {
          const Ot = new Ij(tt, et, Vt.frameIndex, this.bindings),
            qt = et.ring.drawCount();
          qt > 0 && Ot.upload(0, qt), this.systems.set(et, Ot)
        }
      }
      build() {
        const {
          device: tt
        } = this, et = tt.createBindGroupLayout({
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
        this.frameLayout = tt.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = tt.createPipelineLayout({
          bindGroupLayouts: [Ke(tt), et, this.frameLayout]
        }), this.module = tt.createShaderModule({
          label: "particles",
          code: cj
        });
        const Vt = tt.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        tt.queue.writeTexture({
          texture: Vt
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: et,
          rampSampler: tt.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Vt.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get Pqt() {
        return this.systems.size
      }
      reset() {
        for (const tt of this.systems.keys()) tt.reset()
      }
      describePendingWork() {
        return (0, Cj.e)(this.systems.keys(), "Lite")
      }
      xZ(tt, et) {
        const Vt = new Cj.b(tt, et, this);
        return this.systems.set(Vt, new Ij(this.device, Vt, this.allocateFrameIndex(), this.bindings)), Vt
      }
      K9(tt, et) {
        for (const Vt of this.systems.keys()) Vt.K9(tt, et)
      }
      canDraw(tt) {
        const et = this.systems.get(tt),
          Vt = tt.texture ? this.resources.boundTexture(tt.texture) : null;
        if (!et || !Vt || !this.targetPipelines) return !1;
        if (et.texture = Vt, et.pipelines.length = 0, !De(tt.blendMode)) return this.warnOnce(`blend:${tt.blendMode}`, `particle blend mode ${tt.blendMode} is not drawn (${tt.name})`), !0;
        const Ot = (0, Bt.g)(tt.blendMode);
        for (const qt of Ot) {
          const tt = this.pipelineFor(qt);
          if (!1 === tt) return et.pipelines.length = 0, !0;
          tt && et.pipelines.push(tt)
        }
        return et.pipelines.length === Ot.length
      }
      disposeStopped(tt) {
        tt.dispose()
      }
      remove(tt) {
        const et = this.systems.get(tt);
        et && (this.systems.delete(tt), et.destroy(), this.freeFrameIndices.push(et.frameIndex))
      }
      prepare(tt) {
        const et = tt.animationRatio || 1;
        Re(this.renderable._worldCenter, tt, ve), this.preparedTarget = this.target, this.draws.length = 0;
        let Vt = 0;
        for (const Ot of this.systems.values()) {
          const tt = Ot.system;
          if (!tt.animateIfActive(et)) continue;
          if (tt.ring.takeUploads(Ot.upload), !tt.hasLiveParticles() || 0 === Ot.pipelines.length) continue;
          Ot.writeUniforms(this.warnOnce), Ot.bind();
          const qt = 64 * Ot.frameIndex;
          Ot.count = tt.ring.drawCount(), Sj(tt, this.frameData, this.frameBits, qt), Vt = Math.max(Vt, qt + 64), this.draws.push(Ot)
        }
        Vt > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Vt)
      }
      draw(tt) {
        let et = 0,
          Vt = null;
        for (const Ot of this.draws) {
          tt.setBindGroup(1, Ot.bindGroup), tt.setBindGroup(2, this.frameBindGroup, [256 * Ot.frameIndex]);
          for (const qt of Ot.pipelines) qt !== Vt && (tt.setPipeline(qt), Vt = qt), tt.draw(4, Ot.count), et++
        }
        return et
      }
      bindTarget(tt) {
        this.target = tt;
        const et = `${tt._colorFormat}|${tt._depthStencilFormat}|${tt._depthCompare}|${tt._sampleCount}`;
        let Vt = this.pipelines.get(et);
        Vt || (Vt = new Map, this.pipelines.set(et, Vt)), this.targetPipelines = Vt
      }
      pipelineFor(tt) {
        var et;
        const Vt = this.targetPipelines,
          Ot = Vt.get(tt);
        if (void 0 !== Ot) return Ot;
        Vt.set(tt, null);
        const qt = this.target,
          Dt = tt === Bt.b,
          mt = null !== (et = qt._depthCompare) && void 0 !== et ? et : he,
          {
            device: dt
          } = this;
        return dt.createRenderPipelineAsync({
          label: `particles-${tt}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Me({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Dt ? 1 : 0
            }
          }, qt, me((0, Bt.e)(tt))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: qt._depthStencilFormat ? {
            format: qt._depthStencilFormat,
            depthCompare: mt,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: qt._sampleCount
          }
        }).then((et => {
          Vt.set(tt, et)
        }), (et => {
          Vt.set(tt, !1), console.error("Lite particle pipeline failed", et), Qe(dt, "particles", `blend-${tt}`, et)
        })), null
      }
      allocateFrameIndex() {
        const tt = this.freeFrameIndices.pop();
        if (void 0 !== tt) return tt;
        const et = this.nextFrameIndex++;
        if (64 * (et + 1) > this.frameData.length) {
          const tt = new Float32Array(2 * this.frameData.length);
          tt.set(this.frameData), this.frameData = tt, this.frameBits = new Uint32Array(tt.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return et
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
    class Zj {
      constructor(tt, et, Vt, Ot, qt) {
        this.lite = tt, this.canvas = et, this.info = Vt, this.resources = qt, this.LOt = !1, this.needPOTTextures = !1, this.I6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = et.width, this.renderHeight = et.height, this.caps = {
          maxTextureSize: Ot.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Ot.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(tt) {
        this.lite = tt, (0, rt.r)(tt, this.renderWidth, this.renderHeight)
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
      setSize(tt, et) {
        if (this.renderWidth === tt && this.renderHeight === et) return !1;
        const Vt = this.renderWidth,
          Ot = this.renderHeight;
        this.renderWidth = tt, this.renderHeight = et;
        const qt = this.lite;
        if (null === qt) return !0;
        try {
          (0, rt.r)(qt, tt, et)
        } catch (Dt) {
          if (Dt instanceof DOMException && "InvalidStateError" === Dt.name) {
            this.renderWidth = Vt, this.renderHeight = Ot;
            try {
              (0, rt.r)(qt, Vt, Ot)
            } catch {
              this.canvas.width = Vt, this.canvas.height = Ot
            }
            return console.warn("WebGPU could not allocate render targets for resize", tt, et, Dt.message), !1
          }
          throw Dt
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
      QJ() {
        const tt = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : tt - this.lastFrameTime, this.lastFrameTime = tt
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(tt, et) {
        const Vt = document.createElement("canvas");
        return Vt.width = tt, Vt.height = et, Vt
      }
      T6(tt, et) {
        var Vt;
        return null !== (Vt = this.resources.T6.get(tt)) && void 0 !== Vt ? Vt : new Ee(this.resources, tt, et)
      }
      atlasArrays(tt) {
        return this.resources.atlasArrays(tt)
      }
    }
    class Lj {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(tt) {
        this.fov = tt.fov, this.nearPlane = tt.near, this.farPlane = tt.far;
        const et = tt.worldMatrix;
        for (let Vt = 0; Vt < 16; Vt++)
          if (this.worldMatrix[Vt] !== et[Vt]) return this.worldMatrix.set(et), void this.worldMatrixVersion++
      }
    }
    class Fj {
      constructor(tt, et, Vt, Ot) {
        this.canvas = et, this.options = Vt, this.yVt = void 0, this.backendName = "WebGPU (Lite)", this.R_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Lj, this.lastFrameTime = 0, this.engine = void 0, this.Fw = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.Bf = null, this.firstTerrain = null, this.trialFrames = 0, this.install(tt);
        const {
          resources: qt,
          meshes: Dt
        } = tt;
        this.resources = qt, this.particles = tt.particles, this.yVt = new Zj(tt.engine, et, Ot, tt.device.limits, qt), (0, St.L)({
          Pd: tt => {
            Pt(tt) && qt.textureSlot(tt)
          },
          loaded: tt => Pt(tt) ? qt.textureLoaded(tt) : null,
          canvasUpdated: (tt, et, Vt) => {
            Pt(tt) && qt.canvasUpdated(tt, et, Vt)
          }
        }), this.R_ = Dt.R_, this.modelMeshes = Dt.modelMeshes
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
      install(tt) {
        this.engine = tt.engine, this.Fw = tt.Fw, this.sceneTask = tt.sceneTask, this.device = tt.device, this.liteTerrain = tt.terrain, this.meshes = tt.meshes, this.sunShadow = tt.sunShadow;
        const et = new it(tt.device.lost);
        this.refusals = et, et.deviceLost.then((() => {
          var et;
          et = tt.device, He.add(et)
        })), tt.Fw.camera = this.camera
      }
      async rebuild() {
        var tt, et, Vt, Ot, qt;
        const Dt = await oj();
        this.halted = !0, this.liteTerrain.retire(), null === (tt = this.sunShadow) || void 0 === tt || tt.dispose(), this.yVt.detach();
        try {
          (0, Ut.c)(this.engine)
        } catch (Xt) {
          console.warn("Lite: disposing the lost device's engine threw", Xt)
        }
        const mt = {
            width: this.yVt.renderWidth,
            height: this.yVt.renderHeight
          },
          dt = await rj(this.canvas, this.options, mt, Dt),
          jt = Je(dt),
          Ht = Uj(jt);
        try {
          this.resources.rebind(dt, jt), this.particles.rebind(jt), this.R_.dropSteady();
          const tt = {
              resources: this.resources,
              particles: this.particles,
              R_: this.R_,
              modelMeshes: this.modelMeshes
            },
            et = await Aj(dt, jt, this.options, tt),
            Vt = Ht();
          if (null !== Vt) throw new Error(`WebGPU device lost while Lite was rebuilding (${Vt.reason}): ${Vt.message}`);
          const {
            r: Ot,
            g: qt,
            b: Dt
          } = this.Fw.clearColor;
          this.install(et), this.setClearColour(Ot, qt, Dt), this.yVt.rebind(dt)
        } catch (Xt) {
          throw jt.destroy(), Xt
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (et = this.Bf) || void 0 === et || et.resize(), null === (Vt = this.Bf) || void 0 === Vt || null === (Ot = Vt.ql) || void 0 === Ot || null === (qt = Ot.aJ) || void 0 === qt || qt.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((tt, et) => {
          this.firstTerrain = {
            drawn: tt,
            failed: et
          }
        }))
      }
      get castsEntitySunShadows() {
        var tt, et;
        return null !== (tt = null === (et = this.sunShadow) || void 0 === et ? void 0 : et.tracesEntities) && void 0 !== tt && tt
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(tt) {
        this.Bf = tt, this.modelMeshes.attach(tt.model, tt.sceneMirror);
        const et = tt.Fw;
        this.setClearColour(et.clearColor.r, et.clearColor.g, et.clearColor.b), et.draw = () => {
          this.drawFrame(tt, et)
        }
      }
      render(tt) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.yVt.QJ(), tt.Fw.render()
          } catch (et) {
            throw this.refusals.frameFailed(et), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(et), this.firstTerrain = null), et
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var tt, et, Vt, Ot;
        const qt = [...this.particles.describePendingWork(), ...null !== (tt = null === (et = this.sunShadow) || void 0 === et ? void 0 : et.describePendingWork()) && void 0 !== tt ? tt : []],
          Dt = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Vt = this.terrain.sceneDepth) && void 0 !== Vt && Vt.compiling ? 1 : 0) + (null !== (Ot = this.terrain.shadowMask) && void 0 !== Ot && Ot.compiling ? 1 : 0);
        Dt > 0 && qt.push(`${Dt} Lite pipelines compiling`);
        const mt = this.terrain.buffersAwaitingVerdict;
        mt > 0 && qt.push(`${mt} Lite terrain buffers awaiting their out-of-memory verdict`);
        const dt = this.resources.texturesLoading;
        return dt > 0 && qt.push(`${dt} Lite textures loading`), qt
      }
      prepareTexture(tt) {
        return null !== this.resources.boundTexture(tt) || this.resources.textureFailed(tt)
      }
      drawFrame(tt, et) {
        var Vt, Ot, qt, Dt, mt, dt;
        const jt = Md(tt);
        this.camera.copyFromView(jt), this.setClearColour(jt.clearColour[0], jt.clearColour[1], jt.clearColour[2]), null === (Vt = this.sunShadow) || void 0 === Vt || Vt.prepare(tt.ql, jt.eye, null !== (Ot = tt.ql.YE) && void 0 !== Ot ? Ot : null), this.terrain.prepare(tt, jt), null === (qt = this.terrain.sceneDepth) || void 0 === qt || qt.setPlanes(jt.near, jt.far), null === (Dt = this.terrain.shadowMask) || void 0 === Dt || Dt.prepare(jt), Od(this.sceneTask), this.meshes.prepare(et, jt, tt.model.earthSky, null !== (mt = tt.ql.YE) && void 0 !== mt ? mt : null), this.particles.prepare(jt);
        const Ht = performance.now();
        this.resources.flushUploads(), null === (dt = this.sunShadow) || void 0 === dt || dt.traceEntities(this.meshes);
        try {
          (0, rt.o)(this.engine, this.lastFrameTime > 0 ? Ht - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Ht, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Ht), this.firstTerrain = null)
      }
      setClearColour(tt, et, Vt) {
        const Ot = this.Fw.clearColor;
        Ot.r = tt, Ot.g = et, Ot.b = Vt, Ot.a = 1
      }
    }

    function kj(tt) {
      const et = {};
      for (const Vt in tt.limits) {
        const Ot = tt.limits[Vt];
        "number" === typeof Ot && (et[Vt] = Ot)
      }
      return et
    }
    const Gj = "WebGPU device lost while Lite was starting";
    async function zj(tt, et) {
      const Vt = await oj(),
        Ot = Vt.info,
        qt = {
          vendor: (null === Ot || void 0 === Ot ? void 0 : Ot.vendor) || "unknown vendor",
          renderer: (null === Ot || void 0 === Ot ? void 0 : Ot.architecture) || "unknown renderer",
          version: (null === Ot || void 0 === Ot ? void 0 : Ot.description) || "unknown version"
        };
      tt.style.background = "black";
      const Dt = await rj(tt, et, et.bufferSize, Vt),
        mt = Je(Dt),
        dt = Uj(mt);
      try {
        const Vt = new Fj(await Aj(Dt, mt, et, null), tt, et, qt),
          Ot = dt();
        if (null !== Ot) {
          const {
            reason: tt,
            message: et
          } = Ot;
          throw Object.assign(new Error(`${Gj} (${tt}): ${et}`), {
            fallbackReason: Gj
          })
        }
        return Vt
      } catch (jt) {
        throw mt.destroy(), null === dt() ? jt : (0, Vd.f)(jt, "device")
      }
    }
    async function oj() {
      const tt = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!tt) throw (0, Vd.f)(new Error("No WebGPU adapter"), "no_adapter");
      return tt
    }
    async function rj(tt, et, Vt, Ot) {
      let qt;
      try {
        qt = await (0, rt.g)(tt, {
          msaaSamples: et.xVt ? 4 : 1,
          requiredLimits: kj(Ot),
          alphaMode: "premultiplied"
        })
      } catch (mt) {
        throw (0, Vd.f)(mt, "#47" === (null === (Dt = mt) || void 0 === Dt ? void 0 : Dt.message) ? "no_adapter" : "device")
      }
      var Dt;
      return null !== Vt && (0, rt.r)(qt, Vt.width, Vt.height), qt
    }

    function Uj(tt) {
      let et = null;
      return tt.lost.then((tt => {
        et = tt, console.error(`WebGPU device lost (${tt.reason}): ${tt.message}`)
      })), () => et
    }
    async function Aj(tt, et, Vt, Ot) {
      var qt, Dt;
      let {
        sceneDepth: mt,
        sunShadow: dt
      } = Vt;
      const jt = (0, At.e)(tt),
        Ht = null !== (qt = null === Ot || void 0 === Ot ? void 0 : Ot.resources) && void 0 !== qt ? qt : new nm(tt, et),
        Xt = new Oj(et),
        Qt = new Lm(et, Ht, (tt => function(tt, et) {
          for (const Ot of Ce(tt)) {
            var Vt;
            if (Ot._targetSignature === et) return null !== (Vt = Ot._sceneBG) && void 0 !== Vt ? Vt : null
          }
          return null
        }(jt, tt)), null === Ot || void 0 === Ot ? void 0 : Ot.R_, null === Ot || void 0 === Ot ? void 0 : Ot.modelMeshes),
        lt = null !== (Dt = null === Ot || void 0 === Ot ? void 0 : Ot.particles) && void 0 !== Dt ? Dt : new Pj(et, Ht);
      for (const wt of function(tt, et, Vt) {
          return [et.opaqueRenderable, tt.opaqueRenderable, tt.skyLastRenderable, Vt.renderable, et.transparentRenderable, tt.transparentRenderable, tt.frontRenderable]
        }(Qt, Xt, lt)) be(jt, wt);
      const Et = function(tt) {
        for (const et of Ce(tt))
          if ("Fw" === et.name) return et;
        throw new Error("Lite: the scene has no render task named scene")
      }(jt);
      mt && Xt.installSceneDepth(Et, tt);
      const ft = dt ? new Jj(et, dt.entities) : null;
      return Xt.sunShadow = ft, ft && null !== dt && void 0 !== dt && dt.entities && (Xt.shadowMask = new Ld(et, Et, tt, Xt)), Qt.sunShadow = ft, await (0, At.i)(jt), {
        engine: tt,
        Fw: jt,
        sceneTask: Et,
        device: et,
        terrain: Xt,
        meshes: Qt,
        sunShadow: ft,
        resources: Ht,
        particles: lt
      }
    }
  },
  40892: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => Et,
      E: () => ft,
      e: () => qt,
      f: () => Ot,
      i: () => lt,
      k: () => Xt,
      n: () => yt,
      q: () => Dt,
      s: () => dt,
      t: () => jt,
      v: () => mt,
      w: () => wt
    });
    const Ot = 3,
      qt = 0,
      Dt = 1,
      mt = 2,
      dt = {
        uniform: 3,
        hl: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      jt = 10,
      Ht = "BloxdPackInputs",
      Xt = "bloxdPackInputs",
      Qt = [{
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
      lt = 80;

    function Et() {
      const tt = Qt.map((tt => {
        let {
          name: et,
          type: Vt
        } = tt;
        return `    ${et}: ${Vt},\n`
      })).join("");
      return `struct ${Ht} {\n${tt}}\n@group(${Ot}) @binding(${qt}) var<uniform> ${Xt}: ${Ht};\n`
    }

    function ft(tt, et) {
      const Vt = new DataView(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, lt),
        [Ot, qt, Dt, mt, dt, jt] = Qt;
      Vt.setFloat32(Ot.offset, et.seconds, !0), Vt.setUint32(qt.offset, et.lit ? 1 : 0, !0);
      for (let Ht = 0; Ht < 3; Ht++) Vt.setInt32(Dt.offset + 4 * Ht, et.renderOffset[Ht], !0), Vt.setFloat32(mt.offset + 4 * Ht, et.jtt[Ht], !0), Vt.setFloat32(dt.offset + 4 * Ht, et.eyePosition[Ht], !0), Vt.setFloat32(jt.offset + 4 * Ht, et.shadowDirection[Ht], !0)
    }

    function wt(tt) {
      const et = new Uint32Array(Math.max(1, tt.length));
      return tt.forEach(((tt, Vt) => {
        let {
          id: Ot,
          rotation: qt
        } = tt;
        et[Vt] = 65535 & Ot | (3 & qt) << 16
      })), et
    }
    const yt = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);