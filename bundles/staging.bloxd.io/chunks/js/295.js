export const id = 295;
export const ids = [295];
export const modules = {
  41073: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      i: () => eU,
      l: () => uU,
      o: () => CU,
      s: () => fU,
      t: () => WU
    });
    var tU = gU(41036);
    var pU = "Babylon Lite v1.32.0",
      EU = gU(41078);

    function PU(UU) {
      return "clientWidth" in UU
    }
    var TU = 1;

    function qU(UU, RU, gU) {
      const qU = RU.getContext("webgpu");
      qU || (0, tU.c)(54), PU(RU) && RU.setAttribute("data-engine", pU);
      const KU = gU?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        cU = gU?.srgb ? (GU = KU).endsWith("-srgb") ? GU : `${GU}-srgb` : KU;
      var GU;
      const jU = gU?.alphaMode ?? "opaque";
      qU.configure({
        device: UU._device,
        format: KU,
        alphaMode: jU,
        viewFormats: [cU]
      });
      const uU = 1 === gU?.msaaSamples ? 1 : 4,
        CU = (0, EU.d)({
          lbl: "swapchain",
          format: cU,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return CU._eager = !0, {
        engine: UU,
        canvas: RU,
        format: cU,
        msaaSamples: uU,
        scRT: CU,
        maxDevicePixelRatio: gU?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: TU++,
        _context: qU,
        _configureFormat: KU,
        _alphaMode: jU,
        _renderingContexts: []
      }
    }

    function KU(UU) {
      const RU = UU._context.getCurrentTexture(),
        gU = UU.scRT;
      gU._colorTexture = RU, gU._colorView = RU.createView({
        format: UU.format
      }), gU._width = RU.width, gU._height = RU.height
    }

    function cU(UU) {
      const RU = UU.canvas;
      if (!PU(RU)) return;
      const gU = UU._w ?? RU.clientWidth,
        tU = UU._h ?? RU.clientHeight;
      if (!(gU > 0 && tU > 0)) return;
      const pU = Math.min(globalThis.devicePixelRatio || 1, UU.maxDevicePixelRatio);
      GU(UU, gU * pU | 0, tU * pU | 0)
    }

    function GU(UU, RU, gU) {
      const tU = UU.canvas,
        pU = 0 | RU,
        EU = 0 | gU;
      if (pU > 0 && EU > 0 && (pU !== tU.width || EU !== tU.height)) {
        tU.width = pU, tU.height = EU, UU.scRT._width = pU, UU.scRT._height = EU;
        for (const RU of UU._renderingContexts) RU._resize?.()
      }
    }
    var jU = 0;

    function uU(UU, RU) {
      return -1 !== UU._renderingContexts.indexOf(RU)
    }

    function CU(UU, RU) {
      return -1 === UU._renderingContexts.indexOf(RU) && (UU._renderingContexts.push(RU), !0)
    }
    var hU = null;
    var QU = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function eU(UU, RU) {
      const EU = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...hU ? hU() : {}
      });
      EU || (0, tU.c)(47);
      const PU = hU?.deviceFeatures?.(EU, RU) ?? function(UU) {
          return QU.filter((RU => UU.features.has(RU)))
        }(EU),
        TU = await EU.requestDevice({
          requiredFeatures: PU,
          requiredLimits: RU?.requiredLimits
        });
      console.log(`${pU} - WebGPU engine`);
      const GU = !!RU?.useHighPrecisionMatrix,
        jU = !!RU?.useFloatingOrigin;
      if (jU && !GU && (0, tU.c)(48), GU) {
        const {
          allocateF64Mat4: UU
        } = await gU.e(349).then((() => gU(60616)));
        0
      }
      let uU, CU, eU, WU;
      if (jU) {
        const [{
          wrapRenderableForFO: UU,
          lightFoVersion: RU,
          applyLightFoOffset: tU
        }, {
          makePackMeshWorld: pU
        }] = await Promise.all([gU.e(350).then((() => gU(60619))), gU.e(351).then((() => gU(60625)))]);
        uU = UU, CU = pU, eU = RU, WU = tU
      }
      const fU = {
          _device: TU
        },
        xU = [fU];
      return Object.assign(fU, {
        engine: fU,
        surfaces: xU,
        _surfaces: xU,
        _device: TU,
        _options: RU,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: GU,
        useFloatingOrigin: jU,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: uU,
        _makePackMeshWorld: CU,
        _lightFoVersion: eU,
        _applyLightFoOffset: WU
      }, qU(fU, UU, RU)), cU(fU), KU(fU), fU
    }

    function WU(UU, RU, gU) {
      GU(UU, RU, gU)
    }

    function fU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.surfaces;
      if (gU !== UU.surfaces)
        for (let pU = gU.length; pU--;) gU[pU].engine !== UU && (0, tU.c)(49);
      xU(UU, RU, gU)
    }

    function xU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU._surfaces,
        tU = 0;
      for (let EU = gU.length; EU--;) tU += gU[EU]._renderingContexts.length;
      if (!tU) return UU.drawCallCount = 0, UU._flushGpuRetirements?.(UU);
      const pU = UU._device.createCommandEncoder({
        label: "frame"
      });
      UU._currentEncoder = pU, UU._currentDelta = RU;
      try {
        UU._gpuTimerBegin?.(pU), tU = 0;
        for (let UU = 0; UU < gU.length; UU++) {
          const RU = gU[UU];
          RU._capturePreFrame?.(RU), KU(RU);
          const pU = RU._renderingContexts;
          for (let UU = 0; UU < pU.length; UU++) {
            const RU = pU[UU];
            RU._update(), tU += RU._drawCallsPre + RU._record()
          }
        }
        const RU = UU._currentEncoder;
        for (let UU = 0; UU < gU.length; UU++) {
          const tU = gU[UU];
          tU._captureService?.(tU, RU)
        }
        UU._gpuTimerEnd?.(RU), UU._cbs[0] = RU.finish(), UU._device.queue.submit(UU._cbs), UU._flushGpuRetirements?.(UU), UU.drawCallCount = tU, UU._gpuTimerResolve?.()
      } finally {
        UU._currentEncoder = void 0
      }
    }
  },
  41044: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => EU,
      d: () => tU
    });
    var tU = globalThis.GPUTextureUsage,
      pU = globalThis.GPUBufferUsage,
      EU = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41090: (UU, RU, gU) => {
    function tU(UU) {
      pU(UU.splice(0))
    }

    function pU(UU) {
      for (const gU of UU) try {
        gU()
      } catch (RU) {
        console.error("GPU resource retirement failed.", RU)
      }
    }

    function EU(UU, RU) {
      UU._flushGpuRetirements ??= PU, (UU._retirements ??= []).push(RU)
    }

    function PU(UU) {
      const RU = UU._retirements;
      if (!RU) return;
      UU._retirements = null;
      const gU = UU._retiring ??= new Set;
      gU.add(RU), queueMicrotask((() => {
        UU._device.queue.onSubmittedWorkDone().then((() => {
          gU.delete(RU), tU(RU)
        })).catch((() => {}))
      }))
    }
    gU.d(RU, {
      c: () => EU
    })
  },
  41078: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => PU,
      i: () => TU
    });
    var tU = gU(41044);

    function pU(UU) {
      const RU = UU.size;
      return "canvas" in RU ? RU.canvas : RU
    }

    function EU(UU) {
      return {
        _descriptor: UU,
        _resolveSize: pU,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function PU(UU, RU) {
      if (UU._eager) return void UU._syncEager?.(RU);
      TU(UU);
      const gU = UU._descriptor,
        {
          width: EU,
          height: PU
        } = (UU._resolveSize ?? pU)(gU);
      UU._width = EU, UU._height = PU;
      const qU = RU._device;
      gU.format && (UU._colorTexture = qU.createTexture({
        label: gU.lbl,
        size: {
          width: EU,
          height: PU
        },
        format: gU.format,
        sampleCount: gU.samples,
        usage: tU.d.RENDER_ATTACHMENT | tU.d.TEXTURE_BINDING | tU.d.COPY_SRC | tU.d.COPY_DST
      }), UU._colorView = UU._colorTexture.createView()), gU.dFormat && (UU._depthTexture = qU.createTexture({
        label: gU.lbl,
        size: {
          width: EU,
          height: PU
        },
        format: gU.dFormat,
        sampleCount: gU.samples,
        usage: tU.d.RENDER_ATTACHMENT | tU.d.TEXTURE_BINDING
      }), UU._depthView = UU._depthTexture.createView())
    }

    function TU(UU) {
      if (!UU || UU._eager && !UU._disposeAttachments) return;
      const RU = UU._colorTexture,
        gU = UU._depthTexture;
      if (UU._colorTexture = UU._depthTexture = null, UU._colorView = UU._depthView = null, UU._width = UU._height = 0, UU._disposeAttachments) UU._disposeAttachments(RU, gU);
      else try {
        RU?.destroy()
      } finally {
        !1 !== UU._ownsDepthTexture && gU?.destroy()
      }
    }
  },
  41085: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU,
      i: () => EU
    });
    var tU = Float32Array,
      pU = Float64Array,
      EU = Uint32Array
  },
  41092: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    var tU = 16
  },
  41036: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = null;

    function pU(UU) {
      for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), pU = 1; pU < RU; pU++) gU[pU - 1] = arguments[pU];
      const EU = new Error(tU?.(UU, gU) ?? `#${UU}`);
      throw EU.lite = gU, EU
    }
  },
  41062: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(41053);

    function pU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gU = RU.compare,
        pU = RU.lodMinClamp ?? 0,
        EU = RU.lodMaxClamp ?? 32,
        PU = void 0 !== gU || 0 !== pU || 32 !== EU ? `${gU??""}:${pU}:${EU}` : "";
      return (0, tU.b)(UU, RU, PU)
    }
  },
  41051: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = null;

    function pU(UU) {
      const RU = tU ??= new WeakMap;
      RU.set(UU, (RU.get(UU) ?? 0) + 1)
    }

    function EU(UU) {
      pU(UU.texture)
    }
  },
  41053: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU
    });
    var tU = null,
      pU = "nearest",
      EU = "clamp-to-edge",
      PU = {
        minFilter: pU,
        magFilter: pU,
        mipmapFilter: pU,
        addressModeU: EU,
        addressModeV: EU,
        addressModeW: EU,
        maxAnisotropy: 1
      };

    function TU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const pU = UU._device,
        EU = tU ??= new WeakMap;
      let TU = EU.get(pU);
      TU || EU.set(pU, TU = new Map);
      let qU = gU;
      for (const tU in PU) {
        const UU = tU;
        qU += `:${RU[UU]??PU[UU]}`
      }
      let KU = TU.get(qU);
      return KU || TU.set(qU, KU = pU.createSampler(RU)), KU
    }
  },
  41080: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => dU,
      e: () => sU
    });
    var tU = gU(41078),
      pU = gU(41073);

    function EU(UU, RU) {
      RU._passes.length = 0, UU._currentProcessedTask = RU;
      try {
        RU.record()
      } finally {
        UU._currentProcessedTask = null
      }
    }
    var PU = gU(41085);

    function TU(UU) {
      const RU = UU.worldMatrixVersion;
      if (UU._viewVer === RU) return UU._viewCache;
      const gU = UU._viewCache,
        tU = UU.worldMatrix,
        pU = UU._useFloatingOrigin,
        EU = pU ? 0 : tU[12],
        PU = pU ? 0 : tU[13],
        TU = pU ? 0 : tU[14];
      return gU[0] = tU[0], gU[1] = tU[4], gU[2] = tU[8], gU[3] = 0, gU[4] = tU[1], gU[5] = tU[5], gU[6] = tU[9], gU[7] = 0, gU[8] = tU[2], gU[9] = tU[6], gU[10] = tU[10], gU[11] = 0, gU[12] = -(tU[0] * EU + tU[1] * PU + tU[2] * TU), gU[13] = -(tU[4] * EU + tU[5] * PU + tU[6] * TU), gU[14] = -(tU[8] * EU + tU[9] * PU + tU[10] * TU), gU[15] = 1, UU._viewVer = RU, gU
    }
    var qU = null;

    function KU(UU) {
      return UU._projFov === UU.fov && UU._projNear === UU.nearPlane && UU._projFar === UU.farPlane || (UU._projFov = UU.fov, UU._projNear = UU.nearPlane, UU._projFar = UU.farPlane, UU._projRev = (UU._projRev ?? 0) + 1), UU.worldMatrixVersion + (UU._projRev ?? 0)
    }

    function cU(UU, RU) {
      const gU = KU(UU);
      if (UU._projVer === gU && UU._projAspect === RU) return UU._projCache;
      const tU = UU._projCache;
      return null !== qU && UU.ortho ? qU(UU, RU, tU) : function(UU, RU, gU, tU, pU) {
        const EU = 1 / Math.tan(.5 * RU),
          PU = pU - tU;
        UU[0] = EU / gU, UU[5] = EU, UU[10] = -tU / PU, UU[11] = 1, UU[14] = pU * tU / PU
      }(tU, UU.fov, RU, UU.nearPlane, UU.farPlane), UU._projVer = gU, UU._projAspect = RU, tU
    }
    var GU = gU(41044);

    function jU(UU, RU, gU) {
      return UU._device.createBuffer({
        label: gU,
        size: (tU = RU, pU = 16, Math.ceil(tU / pU) * pU),
        usage: GU.b.UNIFORM | GU.b.COPY_DST
      });
      var tU, pU
    }
    var uU = gU(41090),
      CU = null;

    function hU(UU) {
      const RU = UU._device,
        gU = CU ??= new WeakMap;
      let tU = gU.get(RU);
      return tU || (tU = RU.createBindGroupLayout({
        label: "Zh",
        entries: [{
          binding: 0,
          visibility: GU.c.VERTEX | GU.c.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: GU.c.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), gU.set(RU, tU)), tU
    }

    function QU(UU, RU, gU) {
      const tU = UU._device,
        pU = jU(UU, RU.byteLength, gU);
      try {
        tU.queue.writeBuffer(pU, 0, RU.buffer, RU.byteOffset, RU.byteLength)
      } catch (EU) {
        throw pU.destroy(), EU
      }
      return pU
    }
    var eU = gU(41092),
      WU = new PU.i(1),
      fU = new PU.d(WU.buffer);

    function xU(UU) {
      let RU = 0;
      for (const gU of UU) RU += gU._lightVersion ?? 0;
      return RU
    }

    function mU(UU, RU) {
      UU.fill(0);
      let gU = 0;
      for (const tU of RU) {
        if (gU >= eU.b) break;
        tU._writeLightUbo && (tU._writeLightUbo(UU, 4 + 16 * gU), gU++)
      }
      WU[0] = gU, UU[0] = fU[0]
    }

    function IU(UU, RU) {
      let gU = RU._lightGpuState;
      const tU = 16 + 16 * eU.b * 4;
      if (gU && gU._byteSize === tU) return gU;
      const pU = !gU;
      gU?._buffer.destroy();
      const EU = new PU.d(tU / 4);
      return mU(EU, RU.lights), UU._applyLightFoOffset?.(EU, RU), gU = {
        _buffer: QU(UU, EU),
        _scratch: EU,
        lV: xU(RU.lights) + (UU._lightFoVersion?.(RU) ?? 0),
        _listVersion: RU._lightListVersion ?? 0,
        _lightCount: RU.lights.length,
        _byteSize: tU
      }, RU._lightGpuState = gU, pU && RU._disposables.push((() => {
        RU._lightGpuState?._buffer.destroy(), RU._lightGpuState = void 0
      })), gU
    }

    function JU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const pU = RU;
      if (0 === tU && 16 === pU.length) return void UU.set(pU, gU);
      const EU = tU,
        PU = gU;
      UU[PU + 0] = pU[EU + 0], UU[PU + 1] = pU[EU + 1], UU[PU + 2] = pU[EU + 2], UU[PU + 3] = pU[EU + 3], UU[PU + 4] = pU[EU + 4], UU[PU + 5] = pU[EU + 5], UU[PU + 6] = pU[EU + 6], UU[PU + 7] = pU[EU + 7], UU[PU + 8] = pU[EU + 8], UU[PU + 9] = pU[EU + 9], UU[PU + 10] = pU[EU + 10], UU[PU + 11] = pU[EU + 11], UU[PU + 12] = pU[EU + 12], UU[PU + 13] = pU[EU + 13], UU[PU + 14] = pU[EU + 14], UU[PU + 15] = pU[EU + 15]
    }

    function wU(UU, RU, gU, tU, pU) {
      UU.fill(0);
      const EU = function(UU, RU) {
          const gU = KU(UU);
          if (UU._vpVer === gU && UU._vpAspect === RU) return UU._vpCache;
          const tU = UU._vpCache;
          return function(UU, RU, gU, tU, pU, EU) {
            const PU = gU[tU],
              TU = gU[tU + 1],
              qU = gU[tU + 2],
              KU = gU[tU + 3],
              cU = gU[tU + 4],
              GU = gU[tU + 5],
              jU = gU[tU + 6],
              uU = gU[tU + 7],
              CU = gU[tU + 8],
              hU = gU[tU + 9],
              QU = gU[tU + 10],
              eU = gU[tU + 11],
              WU = gU[tU + 12],
              fU = gU[tU + 13],
              xU = gU[tU + 14],
              mU = gU[tU + 15];
            let IU = pU[EU],
              JU = pU[EU + 1],
              wU = pU[EU + 2],
              nU = pU[EU + 3];
            UU[RU] = PU * IU + cU * JU + CU * wU + WU * nU, UU[RU + 1] = TU * IU + GU * JU + hU * wU + fU * nU, UU[RU + 2] = qU * IU + jU * JU + QU * wU + xU * nU, UU[RU + 3] = KU * IU + uU * JU + eU * wU + mU * nU, IU = pU[EU + 4], JU = pU[EU + 5], wU = pU[EU + 6], nU = pU[EU + 7], UU[RU + 4] = PU * IU + cU * JU + CU * wU + WU * nU, UU[RU + 5] = TU * IU + GU * JU + hU * wU + fU * nU, UU[RU + 6] = qU * IU + jU * JU + QU * wU + xU * nU, UU[RU + 7] = KU * IU + uU * JU + eU * wU + mU * nU, IU = pU[EU + 8], JU = pU[EU + 9], wU = pU[EU + 10], nU = pU[EU + 11], UU[RU + 8] = PU * IU + cU * JU + CU * wU + WU * nU, UU[RU + 9] = TU * IU + GU * JU + hU * wU + fU * nU, UU[RU + 10] = qU * IU + jU * JU + QU * wU + xU * nU, UU[RU + 11] = KU * IU + uU * JU + eU * wU + mU * nU, IU = pU[EU + 12], JU = pU[EU + 13], wU = pU[EU + 14], nU = pU[EU + 15], UU[RU + 12] = PU * IU + cU * JU + CU * wU + WU * nU, UU[RU + 13] = TU * IU + GU * JU + hU * wU + fU * nU, UU[RU + 14] = qU * IU + jU * JU + QU * wU + xU * nU, UU[RU + 15] = KU * IU + uU * JU + eU * wU + mU * nU
          }(tU, 0, cU(UU, RU), 0, TU(UU), 0), UU._vpVer = gU, UU._vpAspect = RU, tU
        }(tU, pU),
        PU = TU(tU),
        qU = tU.worldMatrix;
      JU(UU, EU, 0), JU(UU, PU, 16), RU.useFloatingOrigin ? (UU[32] = 0, UU[33] = 0, UU[34] = 0) : (UU[32] = qU[12], UU[33] = qU[13], UU[34] = qU[14]), UU[87] = RU.canvas.width;
      const GU = gU.imageProcessing;
      UU[76] = GU.exposure, UU[77] = GU.contrast, UU[78] = gU._envTextures?.lodGenerationScale ?? .8, UU[79] = +GU.toneMappingEnabled, UU[37] = RU.canvas.height
    }

    function nU(UU, RU) {
      return {
        _renderables: UU,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: RU
      }
    }

    function bU(UU, RU, gU) {
      UU.clr ??= !0;
      const pU = UU.rt._descriptor,
        EU = UU.depth?._descriptor,
        qU = {
          _colorFormat: pU.format,
          _depthStencilFormat: EU?.dFormat ?? pU.dFormat,
          _depthCompare: pU.depthCompare ?? EU?.depthCompare,
          _sampleCount: pU.samples
        },
        cU = {
          loadOp: "clear",
          storeOp: "store"
        },
        GU = {
          ...nU([], -1),
          name: UU.name,
          _config: UU,
          _ownsTargets: !UU.sharedRt,
          engine: RU,
          Zh: gU,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [cU]
          },
          _colorAttachment: cU,
          _sceneUBO: jU(RU, 368),
          _suData: new PU.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: qU,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (GU._disposed) throw new Error("RenderTask has been disposed.");
            GU._recordExplicit ? GU._recordExplicit(GU, !0) : aU(GU, !1 !== UU.autoMirror ? gU._renderables.slice() : GU._renderables, !0)
          },
          execute: () => function(UU, RU, gU) {
            if (!1 === UU.enabled) return 0;
            const tU = UU.Zh;
            ! function(UU, RU, gU) {
              const tU = UU.Zh;
              !1 !== UU._config.autoMirror && UU._lastVersion !== tU._renderableVersion && aU(UU, tU._renderables.slice());
              BU(UU, RU);
              const pU = UU._updateContext,
                EU = UU._config.cam ?? tU.camera;
              gU._colorFormat && (UU._config._skipClusteredLights || tU._clusteredLightUpdater?.(EU, pU.targetWidth, pU.targetHeight), function(UU, RU) {
                const gU = IU(UU, RU),
                  tU = xU(RU.lights) + (UU._lightFoVersion?.(RU) ?? 0),
                  pU = RU._lightListVersion ?? 0;
                tU === gU.lV && pU === gU._listVersion && RU.lights.length === gU._lightCount || (gU.lV = tU, gU._listVersion = pU, gU._lightCount = RU.lights.length, mU(gU._scratch, RU.lights), UU._applyLightFoOffset?.(gU._scratch, RU), UU._device.queue.writeBuffer(gU._buffer, 0, gU._scratch)), gU._buffer
              }(RU, tU));
              (function(UU, RU, gU, tU) {
                if (!tU) return;
                const pU = tU.viewport,
                  EU = UU._config.rt,
                  PU = (UU._config.cs ? RU.canvas.width / RU.canvas.height : EU._width / EU._height) * (pU ? pU.width / pU.height : 1),
                  TU = gU.fog,
                  qU = gU.imageProcessing,
                  cU = KU(tU),
                  GU = gU._envTextures,
                  jU = UU._sceneUboCacheKey;
                if (jU[0] === tU && jU[1] === TU && jU[2] === cU && jU[3] === PU && jU[4] === qU.exposure && jU[5] === qU.contrast && jU[6] === GU) return;
                jU[0] = tU, jU[1] = TU, jU[2] = cU, jU[3] = PU, jU[4] = qU.exposure, jU[5] = qU.contrast, jU[6] = GU;
                const uU = UU._suData;
                wU(uU, RU, gU, tU, PU);
                const CU = gU._sceneUboContributors;
                if (CU)
                  for (const KU of CU) KU(uU, gU);
                RU._device.queue.writeBuffer(UU._sceneUBO, 0, uU)
              })(UU, RU, tU, EU), pU.mD = EU, UU._batchState?._reset(), VU(UU._opaqueBindings, pU), VU(UU._directBindings, pU), VU(UU._transparentBindings, pU), UU._batchState?._flush(RU),
                function(UU, RU) {
                  const gU = UU._transparentBindings;
                  if (gU.length <= 1 || !RU) return;
                  const tU = TU(RU);
                  for (const pU of gU) {
                    const UU = pU.renderable._worldCenter;
                    pU._sortDistance = UU ? UU[0] * tU[2] + UU[1] * tU[6] + UU[2] * tU[10] + tU[14] : 0
                  }
                  gU.sort(oU)
                }(UU, EU)
            }(UU, RU, gU);
            const pU = UU._colorAttachment,
              EU = UU._config;
            EU.rt._colorView && (EU.rt === tU.surface.scRT && (pU.view = EU.rt._colorView), pU.resolveTarget = EU.rst?._colorView ?? void 0, pU.clearValue = EU.clrColor ?? tU.clearColor, pU.loadOp = EU.clr ? "clear" : "load");
            if (UU._executeWithTransmission) return UU._executeWithTransmission(gU._sampleCount);
            const PU = RU._currentEncoder.beginRenderPass(UU._renderPassDescriptor),
              qU = YU(UU, PU);
            return PU.end(), qU
          }(GU, RU, qU),
          dispose() {
            if (GU._disposed) return;
            GU._disposed = !0;
            const RU = GU._pendingMeshes;
            RU && (RU.length = 0);
            for (const UU of GU._renderables) GU._retireRenderable?.(GU.engine, UU);
            GU._passes.length = GU._opaqueBindings.length = GU._directBindings.length = 0, GU._transparentBindings.length = GU._renderables.length = GU._ob.length = 0, GU._ownsTargets && ((0, tU.i)(UU.rt), (0, tU.i)(UU.rst)), UU.depth?._eager || (0, tU.i)(UU.depth);
            const gU = GU._sceneUBO;
            (0, uU.c)(GU.engine, (() => gU.destroy())), GU._batchState?._release(GU.engine), GU._batchState = void 0
          }
        };
      return GU
    }

    function oU(UU, RU) {
      return RU._sortDistance - UU._sortDistance || UU.renderable.order - RU.renderable.order
    }

    function ZU(UU, RU) {
      return UU.renderable.order - RU.renderable.order
    }

    function aU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU._renderables,
        gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        EU = arguments.length > 4 ? arguments[4] : void 0;
      const PU = UU._config,
        TU = PU.rt,
        qU = UU._batchState,
        KU = nU(RU, UU.Zh._renderableVersion);
      if (gU) {
        const RU = (RU, gU) => {
          RU && (gU || UU._ownsTargets || RU._eager) && (0, tU.h)(RU, UU.engine)
        };
        RU(TU), TU._descriptor.samples > 1 && RU(PU.rst), RU(PU.depth, !0)
      }
      const {
        _opaqueBindings: cU,
        _directBindings: GU,
        _transparentBindings: jU
      } = KU;
      try {
        for (const gU of RU) {
          const RU = gU.bind(UU.engine, UU._targetSignature);
          KU._batchState = UU._targetSignature._collectBatches?.(KU._batchState, RU), gU.isTransparent || gU._transmissive ? jU.push(RU) : gU._direct ? GU.push(RU) : cU.push(RU)
        }
        cU.sort(ZU), GU.sort(ZU), gU && BU(UU, UU.engine, !1)
      } catch (uU) {
        throw KU._batchState?._release(void 0, EU ?? [qU]), uU
      }
      return gU && (! function(UU, RU) {
        const gU = UU._config,
          tU = UU._colorAttachment;
        tU.view = RU._colorView, UU._renderPassDescriptor.colorAttachments = RU._colorView ? [tU] : [];
        const pU = gU.depth ?? RU,
          EU = pU._depthView;
        let PU;
        if (EU) {
          const UU = pU._descriptor,
            RU = (gU.depth ? pU._eager : !1 === gU.depthClear) ? "load" : "clear";
          PU = {
            view: EU,
            depthClearValue: UU.depthClearValue ?? 0,
            depthLoadOp: RU,
            depthStoreOp: "store"
          }, UU.dFormat?.includes("stencil") && (PU.stencilClearValue = 0, PU.stencilLoadOp = RU, PU.stencilStoreOp = "store")
        }
        UU._renderPassDescriptor.depthStencilAttachment = PU
      }(UU, TU), UU._updateContext.targetWidth = TU._width, UU._updateContext.targetHeight = TU._height), pU && (Object.assign(UU, KU), qU?._release(UU.engine, [KU._batchState])), KU
    }

    function YU(UU, RU) {
      const gU = UU.engine,
        tU = UU._config,
        EU = tU.rt,
        PU = UU.Zh,
        TU = UU._opaqueBindings,
        qU = UU._ob,
        KU = UU._sceneBG;
      if (function(UU, RU, gU, tU) {
          const pU = RU?.viewport;
          if (!pU) return;
          const EU = Math.floor(pU.x * gU),
            PU = Math.floor((1 - pU.y - pU.height) * tU),
            TU = Math.ceil((pU.x + pU.width) * gU) - EU,
            qU = Math.ceil((1 - pU.y) * tU) - PU;
          UU.setViewport(EU, PU, TU, qU, 0, 1), UU.setScissorRect(EU, PU, TU, qU)
        }(RU, tU.cam ?? PU.camera, EU._width, EU._height), RU.setBindGroup(0, KU), UU._lastVis !== pU.e || !qU.length) {
        const RU = EU._descriptor,
          tU = gU._device.createRenderBundleEncoder({
            colorFormats: RU.format ? [RU.format] : [],
            depthStencilFormat: UU._targetSignature._depthStencilFormat,
            sampleCount: RU.samples
          });
        tU.setBindGroup(0, KU), rU(tU, TU, gU), qU[0] = tU.finish(), UU._lastVis = pU.e
      }
      let cU = TU.length;
      return RU.executeBundles(qU), RU.setBindGroup(0, KU), cU += rU(RU, UU._directBindings, gU), cU += rU(RU, UU._transparentBindings, gU), cU
    }

    function BU(UU, RU) {
      let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const tU = IU(RU, UU.Zh)._buffer;
      if (tU === UU._lightsUBO) return;
      const pU = RU._device.createBindGroup({
        layout: hU(RU),
        entries: [{
          binding: 0,
          resource: {
            buffer: UU._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: tU
          }
        }]
      });
      UU._lightsUBO = tU, UU._sceneBG = pU, gU && (UU._ob = [])
    }

    function VU(UU, RU) {
      for (const gU of UU) gU.update?.(RU)
    }

    function rU(UU, RU, gU) {
      let tU = null,
        pU = 0;
      for (const EU of RU) {
        const RU = EU.renderable.mesh;
        RU && !1 === RU.visible || (EU.pipeline !== tU && (UU.setPipeline(EU.pipeline), tU = EU.pipeline), pU += EU.draw(UU, gU))
      }
      return pU
    }

    function XU(UU) {
      const RU = UU._materialSwapQueue;
      if (!RU[0] || UU._runtimeBuilds?.w) return;
      let tU, pU, EU;
      const PU = UU._renderables;
      for (const gU of RU) {
        const RU = gU.material;
        if (!RU) continue;
        const TU = gU._runtimeThinBuild;
        if (TU) {
          pU = TU(UU, gU, pU);
          continue
        }
        const qU = UU._groups.get(RU._buildGroup),
          KU = qU?.r;
        if (!KU) {
          (EU ??= []).push(gU);
          continue
        }
        if (qU._w?.(gU)) {
          (EU ??= []).push([gU, RU]);
          continue
        }
        const cU = UU._meshDisposables.get(gU);
        cU && (UU._meshDisposables.delete(gU), (0, uU.c)(UU.surface.engine, (() => cU.forEach((UU => UU())))));
        const GU = qU.o;
        let jU;
        for (let UU = PU.length; UU--;) PU[UU].mesh === gU && (jU = PU.splice(UU, 1)[0]);
        RU._csmGen = -~RU._csmGen;
        const CU = KU(UU, gU);
        if (GU) {
          const UU = GU.indexOf(jU);
          UU < 0 ? GU.push(CU) : GU[UU] = CU
        }
        tU = PU.push(CU)
      }
      if (tU && (PU.sort(((UU, RU) => UU.order - RU.order)), UU._renderableVersion++, UU._materialEpoch++), RU.length = 0, !EU) return pU;
      const TU = EU;
      return gU.e(355).then((() => gU(60644))).then((RU => {
        let {
          C: gU
        } = RU;
        return gU(UU, TU, pU)
      }), (RU => {
        const gU = UU._runtimeBuilds;
        gU ? gU._x(RU) : console.error(RU)
      }))
    }
    var vU = null;

    function dU(UU, RU) {
      const gU = UU.engine,
        pU = {
          _kind: "Zh",
          surface: UU,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            gU.useFloatingOrigin && pU.camera && !pU.camera._useFloatingOrigin && (pU.camera._useFloatingOrigin = !0, pU.camera._viewVer = -1, pU.camera._vpVer = -1);
            const UU = pU.fixedDeltaMs > 0 ? pU.fixedDeltaMs : gU._currentDelta,
              RU = gU._currentEncoder;
            let tU = 0;
            for (const gU of pU._beforeRender) gU(UU);
            pU._materialSwapQueue.length && XU(pU);
            for (const EU of pU._prePasses) tU += EU.execute(RU, gU);
            for (const EU of pU._uniformUpdaters) EU.update(gU);
            pU._drawCallsPre = tU
          },
          _record: () => pU._frameGraph.execute(),
          _resize() {
            pU._frameGraph.build()
          }
        },
        PU = function() {
          const UU = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let RU = 0; RU < UU._tasks.length; RU++) EU(UU, UU._tasks[RU]);
              for (const RU of UU._tasks)
                for (const UU of RU._passes) UU._initialize()
            },
            execute() {
              let RU = 0;
              for (const gU of UU._tasks)
                if (!1 !== gU.executionEnabled)
                  if (gU.execute) RU += gU.execute();
                  else
                    for (const UU of gU._passes) RU += UU._execute();
              return RU
            },
            dispose() {
              for (const RU of UU._tasks) RU.dispose();
              UU._tasks.length = 0, UU._currentProcessedTask = null
            }
          };
          return UU
        }();
      if (pU._frameGraph = PU, !1 !== RU?.defaultRenderTask) {
        const RU = UU.msaaSamples > 1,
          EU = RU ? (0, tU.d)({
            lbl: "scene-color",
            format: UU.format,
            dFormat: "depth24plus-stencil8",
            samples: UU.msaaSamples,
            size: UU
          }) : UU.scRT,
          TU = RU ? void 0 : (0, tU.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: UU
          });
        ! function(UU, RU) {
          UU._tasks.push(RU)
        }(PU, bU({
          name: "Zh",
          rt: EU,
          rst: RU ? UU.scRT : void 0,
          depth: TU
        }, gU, pU))
      }
      return pU._disposables.push((() => PU.dispose())), pU
    }
    async function HU(UU) {
      const RU = UU;
      for (RU._built || (RU._materialSwapQueue.length = 0); RU._deferredBuilders.length;) {
        const UU = RU._deferredBuilders.splice(0);
        await Promise.all(UU.map((UU => UU())))
      }
      await XU(RU), vU?.get(RU)?.() || (RU._runtimeBuilds?._e(), RU._renderableVersion++, RU._built = !0), await (RU._rebuildHook?.(RU))
    }
    var SU = null;
    async function sU(UU) {
      const RU = UU,
        tU = RU.surface;
      (0, pU.l)(tU, RU) || (await HU(UU), RU._renderables.sort(yU), await Promise.all(RU._frameGraph._tasks.map((UU => UU._preload?.()))), SU && await SU(RU), RU._frameGraph.build(), tU._renderingContexts[0] && (await gU.e(353).then((() => gU(60634)))).configureSwapchainOverlayScene(tU, RU), vU?.get(RU)?.() || (0, pU.o)(tU, RU))
    }
    var yU = (UU, RU) => UU.order - RU.order
  },
  41071: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      f: () => cU
    });
    var tU = gU(41036),
      pU = gU(41044),
      EU = gU(41051),
      PU = gU(41053),
      TU = gU(41056),
      qU = gU(41060);

    function KU(UU, RU, gU) {
      let TU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (RU < 1 || gU < 1) && (0, tU.c)(676, RU, gU);
      const KU = UU._device,
        cU = TU.mipMaps ?? !1,
        GU = TU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        jU = cU ? (0, qU.e)(RU, gU) : 1,
        uU = KU.createTexture({
          size: {
            width: RU,
            height: gU
          },
          format: GU,
          mipLevelCount: jU,
          usage: pU.d.TEXTURE_BINDING | pU.d.COPY_DST | pU.d.RENDER_ATTACHMENT
        }),
        CU = {
          addressModeU: TU.addressModeU ?? "clamp-to-edge",
          addressModeV: TU.addressModeV ?? "clamp-to-edge",
          minFilter: TU.minFilter ?? "linear",
          magFilter: TU.magFilter ?? "linear",
          mipmapFilter: cU ? "linear" : "nearest"
        },
        hU = (0, PU.b)(UU, CU),
        QU = {
          texture: uU,
          view: uU.createView(),
          sampler: hU,
          width: RU,
          height: gU
        };
      return (0, EU.b)(QU), UU._dlr && UU._dlr.t(QU, {
        kind: "dynamic",
        width: RU,
        height: gU,
        format: GU,
        levels: jU,
        samplerDesc: CU,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), QU
    }

    function cU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const pU = tU.invertY ?? !0,
        EU = tU.premultiplyAlpha ?? !1;
      UU._device.queue.copyExternalImageToTexture({
        source: gU,
        flipY: pU
      }, {
        texture: RU.texture,
        premultipliedAlpha: EU
      }, [RU.width, RU.height]);
      const PU = RU._recoverySource;
      PU && "dynamic" === PU.kind && (PU.source = gU, PU.flipY = pU, PU.premultipliedAlpha = EU), RU.texture.mipLevelCount > 1 && (0, TU.generateMipmaps)(UU, RU.texture)
    }
  },
  41069: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU
    });
    var tU = gU(41036),
      pU = gU(41044),
      EU = gU(41051),
      PU = gU(41053),
      TU = gU(41060);
    async function qU(UU, RU) {
      let qU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [KU, cU] = function(UU) {
        const RU = UU,
          gU = [
            [RU.displayWidth, RU.displayHeight],
            [RU.videoWidth, RU.videoHeight],
            [RU.naturalWidth, RU.naturalHeight],
            [RU.width, RU.height]
          ];
        for (const [tU, pU] of gU)
          if (void 0 !== tU && void 0 !== pU && Number.isInteger(tU) && Number.isInteger(pU) && tU > 0 && pU > 0) return [tU, pU];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(RU), [GU, jU] = function(UU, RU, gU) {
        if (void 0 === gU) return [UU, RU];
        if (!Number.isInteger(gU) || gU < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${gU})`);
        if (Math.max(UU, RU) <= gU) return [UU, RU];
        const tU = gU / Math.max(UU, RU);
        return UU >= RU ? [gU, Math.max(1, Math.round(RU * tU))] : [Math.max(1, Math.round(UU * tU)), gU]
      }(KU, cU, qU.maxDimension), uU = qU.mipMaps ?? !0, CU = qU.premultiplyAlpha ?? !1;
      let hU = RU,
        QU = null;
      const eU = {
        texture: null
      };
      try {
        GU === KU && jU === cU || (QU = await createImageBitmap(RU, {
          resizeWidth: GU,
          resizeHeight: jU,
          resizeQuality: "high",
          premultiplyAlpha: CU ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), hU = QU);
        const WU = UU._device,
          fU = qU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          xU = uU ? (0, TU.e)(GU, jU) : 1,
          mU = xU > 1 ? (await Promise.resolve().then((() => gU(41056)))).generateMipmaps : null,
          IU = {
            addressModeU: qU.addressModeU ?? "repeat",
            addressModeV: qU.addressModeV ?? "repeat",
            minFilter: qU.minFilter ?? "linear",
            magFilter: qU.magFilter ?? "linear",
            mipmapFilter: uU ? "linear" : "nearest"
          };
        IU.maxAnisotropy = "linear" === IU.minFilter && "linear" === IU.magFilter && "linear" === IU.mipmapFilter ? 4 : 1;
        const JU = qU.invertY ?? !0,
          wU = async RU => {
            let gU;
            WU.pushErrorScope("validation"), WU.pushErrorScope("out-of-memory");
            let EU = null;
            try {
              const gU = eU.texture = WU.createTexture({
                size: {
                  width: GU,
                  height: jU
                },
                format: fU,
                mipLevelCount: xU,
                usage: pU.d.TEXTURE_BINDING | pU.d.COPY_DST | pU.d.RENDER_ATTACHMENT
              });
              WU.queue.copyExternalImageToTexture({
                source: RU,
                flipY: JU
              }, {
                texture: gU,
                premultipliedAlpha: CU
              }, {
                width: GU,
                height: jU
              }), mU && mU(UU, gU), EU = (0, PU.b)(UU, IU)
            } catch (uU) {
              gU = uU
            }
            const [TU, qU] = await Promise.all([WU.popErrorScope(), WU.popErrorScope()]);
            if (gU) throw gU;
            const KU = qU ?? TU;
            if (KU) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${KU.message}`, {
              cause: KU
            });
            const cU = eU.texture;
            return cU && EU || (0, tU.c)(677), {
              texture: cU,
              view: cU.createView(),
              sampler: EU,
              width: GU,
              height: jU
            }
          }, nU = await (UU._dlr?.x(hU, GU, jU, fU, xU, IU, JU, CU, wU)) ?? await wU(hU);
        return (0, EU.b)(nU), nU
      } catch (WU) {
        throw eU.texture?.destroy(), WU
      } finally {
        QU?.close()
      }
    }
  },
  41056: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      generateMipmaps: () => uU,
      recordMipmaps: () => CU
    });
    var tU = gU(41044),
      pU = gU(41053),
      EU = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var PU = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      TU = null,
      qU = null,
      KU = null,
      cU = null,
      GU = null;

    function jU(UU) {
      const RU = UU._device;
      RU !== GU && (TU?.clear(), TU = null, qU = null, KU = null, cU = null, GU = null, GU = RU), qU ??= RU.createShaderModule({
        code: PU
      }), KU ??= function(UU) {
        return (0, pU.b)(UU, EU)
      }(UU), cU ??= RU.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: tU.c.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: tU.c.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function uU(UU, RU, gU) {
      const tU = UU._device,
        pU = tU.createCommandEncoder();
      CU(UU, RU, pU, gU), tU.queue.submit([pU.finish()])
    }

    function CU(UU, RU, gU, tU) {
      if (RU.mipLevelCount <= 1) return;
      const pU = UU._device,
        EU = function(UU, RU) {
          const gU = UU._device;
          jU(UU), TU ??= new Map;
          let tU = TU.get(RU);
          return tU || (tU = gU.createRenderPipeline({
            layout: gU.createPipelineLayout({
              bindGroupLayouts: [cU]
            }),
            vertex: {
              module: qU,
              entryPoint: "vs"
            },
            fragment: {
              module: qU,
              entryPoint: "fs",
              targets: [{
                format: RU
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), TU.set(RU, tU)), tU
        }(UU, RU.format),
        PU = null != tU ? {
          dimension: "2d",
          baseArrayLayer: tU,
          arrayLayerCount: 1
        } : {};
      for (let TU = 1; TU < RU.mipLevelCount; TU++) {
        const UU = RU.createView({
            baseMipLevel: TU - 1,
            mipLevelCount: 1,
            ...PU
          }),
          tU = RU.createView({
            baseMipLevel: TU,
            mipLevelCount: 1,
            ...PU
          }),
          qU = pU.createBindGroup({
            layout: cU,
            entries: [{
              binding: 0,
              resource: UU
            }, {
              binding: 1,
              resource: KU
            }]
          }),
          GU = gU.beginRenderPass({
            colorAttachments: [{
              view: tU,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        GU.setPipeline(EU), GU.setBindGroup(0, qU), GU.draw(3), GU.end()
      }
    }
  },
  41060: (UU, RU, gU) => {
    function tU(UU, RU) {
      return Math.floor(Math.log2(Math.max(UU, RU))) + 1
    }
    gU.d(RU, {
      e: () => tU
    })
  },
  41032: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU,
      g: () => cU
    });
    var tU = gU(41036),
      pU = gU(41044),
      EU = gU(41051),
      PU = gU(41053),
      TU = gU(41056),
      qU = gU(41060);

    function KU(UU, RU, gU, TU) {
      let KU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (RU < 1 || gU < 1 || TU < 1) && (0, tU.c)(722, RU, gU, TU);
      const cU = UU._device,
        GU = KU.mipMaps ?? !0,
        jU = KU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        uU = cU.createTexture({
          size: {
            width: RU,
            height: gU,
            depthOrArrayLayers: TU
          },
          dimension: "2d",
          format: jU,
          mipLevelCount: GU ? (0, qU.e)(RU, gU) : 1,
          usage: pU.d.TEXTURE_BINDING | pU.d.COPY_DST | pU.d.RENDER_ATTACHMENT
        }),
        CU = (0, PU.b)(UU, {
          addressModeU: KU.addressModeU ?? "repeat",
          addressModeV: KU.addressModeV ?? "repeat",
          minFilter: KU.minFilter ?? "linear",
          magFilter: KU.magFilter ?? "linear",
          mipmapFilter: GU ? "linear" : "nearest"
        }),
        hU = {
          texture: uU,
          view: uU.createView({
            dimension: "2d-array"
          }),
          sampler: CU,
          width: RU,
          height: gU,
          layers: TU
        };
      return (0, EU.b)(hU), hU
    }

    function cU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (gU < 0 || gU >= RU.layers || (0 | gU) !== gU) && (0, tU.c)(723, RU.layers, gU);
      const PU = EU.invertY ?? !0,
        qU = EU.premultiplyAlpha ?? !1;
      UU._device.queue.copyExternalImageToTexture({
        source: pU,
        flipY: PU
      }, {
        texture: RU.texture,
        origin: [0, 0, gU],
        premultipliedAlpha: qU
      }, [RU.width, RU.height, 1]), RU.texture.mipLevelCount > 1 && (0, TU.generateMipmaps)(UU, RU.texture, gU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);