export const id = 296;
export const ids = [296];
export const modules = {
  41286: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      d: () => NT,
      g: () => jT,
      k: () => vT,
      l: () => ST,
      n: () => QT
    });
    var lT = cT(41242);
    var MT = "Babylon Lite v1.32.0",
      KT = cT(41291);

    function OT(TT) {
      return "clientWidth" in TT
    }
    var yT = 1;

    function fT(TT, kT, cT) {
      const fT = kT.getContext("webgpu");
      fT || (0, lT.e)(54), OT(kT) && kT.setAttribute("data-engine", MT);
      const xT = cT?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        IT = cT?.srgb ? (AT = xT).endsWith("-srgb") ? AT : `${AT}-srgb` : xT;
      var AT;
      const CT = cT?.alphaMode ?? "opaque";
      fT.configure({
        device: TT._device,
        format: xT,
        alphaMode: CT,
        viewFormats: [IT]
      });
      const jT = 1 === cT?.msaaSamples ? 1 : 4,
        vT = (0, KT.b)({
          lbl: "swapchain",
          format: IT,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return vT._eager = !0, {
        engine: TT,
        canvas: kT,
        format: IT,
        msaaSamples: jT,
        scRT: vT,
        maxDevicePixelRatio: cT?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: yT++,
        _context: fT,
        _configureFormat: xT,
        _alphaMode: CT,
        _renderingContexts: []
      }
    }

    function xT(TT) {
      const kT = TT._context.getCurrentTexture(),
        cT = TT.scRT;
      cT._colorTexture = kT, cT._colorView = kT.createView({
        format: TT.format
      }), cT._width = kT.width, cT._height = kT.height
    }

    function IT(TT) {
      const kT = TT.canvas;
      if (!OT(kT)) return;
      const cT = TT._w ?? kT.clientWidth,
        lT = TT._h ?? kT.clientHeight;
      if (!(cT > 0 && lT > 0)) return;
      const MT = Math.min(globalThis.devicePixelRatio || 1, TT.maxDevicePixelRatio);
      AT(TT, cT * MT | 0, lT * MT | 0)
    }

    function AT(TT, kT, cT) {
      const lT = TT.canvas,
        MT = 0 | kT,
        KT = 0 | cT;
      if (MT > 0 && KT > 0 && (MT !== lT.width || KT !== lT.height)) {
        lT.width = MT, lT.height = KT, TT.scRT._width = MT, TT.scRT._height = KT;
        for (const kT of TT._renderingContexts) kT._resize?.()
      }
    }
    var CT = 0;

    function jT(TT, kT) {
      return -1 !== TT._renderingContexts.indexOf(kT)
    }

    function vT(TT, kT) {
      return -1 === TT._renderingContexts.indexOf(kT) && (TT._renderingContexts.push(kT), !0)
    }
    var tT = null;
    var hT = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function NT(TT, kT) {
      const KT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...tT ? tT() : {}
      });
      KT || (0, lT.e)(47);
      const OT = tT?.deviceFeatures?.(KT, kT) ?? function(TT) {
          return hT.filter((kT => TT.features.has(kT)))
        }(KT),
        yT = await KT.requestDevice({
          requiredFeatures: OT,
          requiredLimits: kT?.requiredLimits
        });
      console.log(`${MT} - WebGPU engine`);
      const AT = !!kT?.useHighPrecisionMatrix,
        CT = !!kT?.useFloatingOrigin;
      if (CT && !AT && (0, lT.e)(48), AT) {
        const {
          allocateF64Mat4: TT
        } = await cT.e(350).then((() => cT(60629)));
        0
      }
      let jT, vT, NT, QT;
      if (CT) {
        const [{
          wrapRenderableForFO: TT,
          lightFoVersion: kT,
          applyLightFoOffset: lT
        }, {
          makePackMeshWorld: MT
        }] = await Promise.all([cT.e(351).then((() => cT(60636))), cT.e(352).then((() => cT(60644)))]);
        jT = TT, vT = MT, NT = kT, QT = lT
      }
      const ST = {
          _device: yT
        },
        DT = [ST];
      return Object.assign(ST, {
        engine: ST,
        surfaces: DT,
        _surfaces: DT,
        _device: yT,
        _options: kT,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: AT,
        useFloatingOrigin: CT,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: jT,
        _makePackMeshWorld: vT,
        _lightFoVersion: NT,
        _applyLightFoOffset: QT
      }, fT(ST, TT, kT)), IT(ST), xT(ST), ST
    }

    function QT(TT, kT, cT) {
      AT(TT, kT, cT)
    }

    function ST(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.surfaces;
      if (cT !== TT.surfaces)
        for (let MT = cT.length; MT--;) cT[MT].engine !== TT && (0, lT.e)(49);
      DT(TT, kT, cT)
    }

    function DT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT._surfaces,
        lT = 0;
      for (let KT = cT.length; KT--;) lT += cT[KT]._renderingContexts.length;
      if (!lT) return TT.drawCallCount = 0, TT._flushGpuRetirements?.(TT);
      const MT = TT._device.createCommandEncoder({
        label: "frame"
      });
      TT._currentEncoder = MT, TT._currentDelta = kT;
      try {
        TT._gpuTimerBegin?.(MT), lT = 0;
        for (let TT = 0; TT < cT.length; TT++) {
          const kT = cT[TT];
          kT._capturePreFrame?.(kT), xT(kT);
          const MT = kT._renderingContexts;
          for (let TT = 0; TT < MT.length; TT++) {
            const kT = MT[TT];
            kT._update(), lT += kT._drawCallsPre + kT._record()
          }
        }
        const kT = TT._currentEncoder;
        for (let TT = 0; TT < cT.length; TT++) {
          const lT = cT[TT];
          lT._captureService?.(lT, kT)
        }
        TT._gpuTimerEnd?.(kT), TT._cbs[0] = kT.finish(), TT._device.queue.submit(TT._cbs), TT._flushGpuRetirements?.(TT), TT.drawCallCount = lT, TT._gpuTimerResolve?.()
      } finally {
        TT._currentEncoder = void 0
      }
    }
  },
  41244: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      f: () => KT,
      g: () => lT
    });
    var lT = globalThis.GPUTextureUsage,
      MT = globalThis.GPUBufferUsage,
      KT = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41302: (TT, kT, cT) => {
    function lT(TT) {
      MT(TT.splice(0))
    }

    function MT(TT) {
      for (const cT of TT) try {
        cT()
      } catch (kT) {
        console.error("GPU resource retirement failed.", kT)
      }
    }

    function KT(TT, kT) {
      TT._flushGpuRetirements ??= OT, (TT._retirements ??= []).push(kT)
    }

    function OT(TT) {
      const kT = TT._retirements;
      if (!kT) return;
      TT._retirements = null;
      const cT = TT._retiring ??= new Set;
      cT.add(kT), queueMicrotask((() => {
        TT._device.queue.onSubmittedWorkDone().then((() => {
          cT.delete(kT), lT(kT)
        })).catch((() => {}))
      }))
    }
    cT.d(kT, {
      b: () => KT
    })
  },
  41291: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => OT,
      f: () => yT
    });
    var lT = cT(41244);

    function MT(TT) {
      const kT = TT.size;
      return "canvas" in kT ? kT.canvas : kT
    }

    function KT(TT) {
      return {
        _descriptor: TT,
        _resolveSize: MT,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function OT(TT, kT) {
      if (TT._eager) return void TT._syncEager?.(kT);
      yT(TT);
      const cT = TT._descriptor,
        {
          width: KT,
          height: OT
        } = (TT._resolveSize ?? MT)(cT);
      TT._width = KT, TT._height = OT;
      const fT = kT._device;
      cT.format && (TT._colorTexture = fT.createTexture({
        label: cT.lbl,
        size: {
          width: KT,
          height: OT
        },
        format: cT.format,
        sampleCount: cT.samples,
        usage: lT.g.RENDER_ATTACHMENT | lT.g.TEXTURE_BINDING | lT.g.COPY_SRC | lT.g.COPY_DST
      }), TT._colorView = TT._colorTexture.createView()), cT.dFormat && (TT._depthTexture = fT.createTexture({
        label: cT.lbl,
        size: {
          width: KT,
          height: OT
        },
        format: cT.dFormat,
        sampleCount: cT.samples,
        usage: lT.g.RENDER_ATTACHMENT | lT.g.TEXTURE_BINDING
      }), TT._depthView = TT._depthTexture.createView())
    }

    function yT(TT) {
      if (!TT || TT._eager && !TT._disposeAttachments) return;
      const kT = TT._colorTexture,
        cT = TT._depthTexture;
      if (TT._colorTexture = TT._depthTexture = null, TT._colorView = TT._depthView = null, TT._width = TT._height = 0, TT._disposeAttachments) TT._disposeAttachments(kT, cT);
      else try {
        kT?.destroy()
      } finally {
        !1 !== TT._ownsDepthTexture && cT?.destroy()
      }
    }
  },
  41299: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      f: () => MT,
      h: () => KT
    });
    var lT = Float32Array,
      MT = Float64Array,
      KT = Uint32Array
  },
  41304: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    var lT = 16
  },
  41242: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = null;

    function MT(TT) {
      for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), MT = 1; MT < kT; MT++) cT[MT - 1] = arguments[MT];
      const KT = new Error(lT?.(TT, cT) ?? `#${TT}`);
      throw KT.lite = cT, KT
    }
  },
  41271: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(41256);

    function MT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cT = kT.compare,
        MT = kT.lodMinClamp ?? 0,
        KT = kT.lodMaxClamp ?? 32,
        OT = void 0 !== cT || 0 !== MT || 32 !== KT ? `${cT??""}:${MT}:${KT}` : "";
      return (0, lT.c)(TT, kT, OT)
    }
  },
  41247: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = null;

    function MT(TT) {
      const kT = lT ??= new WeakMap;
      kT.set(TT, (kT.get(TT) ?? 0) + 1)
    }

    function KT(TT) {
      MT(TT.texture)
    }
  },
  41256: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT
    });
    var lT = null,
      MT = "nearest",
      KT = "clamp-to-edge",
      OT = {
        minFilter: MT,
        magFilter: MT,
        mipmapFilter: MT,
        addressModeU: KT,
        addressModeV: KT,
        addressModeW: KT,
        maxAnisotropy: 1
      };

    function yT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const MT = TT._device,
        KT = lT ??= new WeakMap;
      let yT = KT.get(MT);
      yT || KT.set(MT, yT = new Map);
      let fT = cT;
      for (const lT in OT) {
        const TT = lT;
        fT += `:${kT[TT]??OT[TT]}`
      }
      let xT = yT.get(fT);
      return xT || yT.set(fT, xT = MT.createSampler(kT)), xT
    }
  },
  41296: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => ZT,
      e: () => dT
    });
    var lT = cT(41291),
      MT = cT(41286);

    function KT(TT, kT) {
      kT._passes.length = 0, TT._currentProcessedTask = kT;
      try {
        kT.record()
      } finally {
        TT._currentProcessedTask = null
      }
    }
    var OT = cT(41299);

    function yT(TT) {
      const kT = TT.worldMatrixVersion;
      if (TT._viewVer === kT) return TT._viewCache;
      const cT = TT._viewCache,
        lT = TT.worldMatrix,
        MT = TT._useFloatingOrigin,
        KT = MT ? 0 : lT[12],
        OT = MT ? 0 : lT[13],
        yT = MT ? 0 : lT[14];
      return cT[0] = lT[0], cT[1] = lT[4], cT[2] = lT[8], cT[3] = 0, cT[4] = lT[1], cT[5] = lT[5], cT[6] = lT[9], cT[7] = 0, cT[8] = lT[2], cT[9] = lT[6], cT[10] = lT[10], cT[11] = 0, cT[12] = -(lT[0] * KT + lT[1] * OT + lT[2] * yT), cT[13] = -(lT[4] * KT + lT[5] * OT + lT[6] * yT), cT[14] = -(lT[8] * KT + lT[9] * OT + lT[10] * yT), cT[15] = 1, TT._viewVer = kT, cT
    }
    var fT = null;

    function xT(TT) {
      return TT._projFov === TT.fov && TT._projNear === TT.nearPlane && TT._projFar === TT.farPlane || (TT._projFov = TT.fov, TT._projNear = TT.nearPlane, TT._projFar = TT.farPlane, TT._projRev = (TT._projRev ?? 0) + 1), TT.worldMatrixVersion + (TT._projRev ?? 0)
    }

    function IT(TT, kT) {
      const cT = xT(TT);
      if (TT._projVer === cT && TT._projAspect === kT) return TT._projCache;
      const lT = TT._projCache;
      return null !== fT && TT.ortho ? fT(TT, kT, lT) : function(TT, kT, cT, lT, MT) {
        const KT = 1 / Math.tan(.5 * kT),
          OT = MT - lT;
        TT[0] = KT / cT, TT[5] = KT, TT[10] = -lT / OT, TT[11] = 1, TT[14] = MT * lT / OT
      }(lT, TT.fov, kT, TT.nearPlane, TT.farPlane), TT._projVer = cT, TT._projAspect = kT, lT
    }
    var AT = cT(41244);

    function CT(TT, kT, cT) {
      return TT._device.createBuffer({
        label: cT,
        size: (lT = kT, MT = 16, Math.ceil(lT / MT) * MT),
        usage: AT.d.UNIFORM | AT.d.COPY_DST
      });
      var lT, MT
    }
    var jT = cT(41302),
      vT = null;

    function tT(TT) {
      const kT = TT._device,
        cT = vT ??= new WeakMap;
      let lT = cT.get(kT);
      return lT || (lT = kT.createBindGroupLayout({
        label: "et",
        entries: [{
          binding: 0,
          visibility: AT.f.VERTEX | AT.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: AT.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), cT.set(kT, lT)), lT
    }

    function hT(TT, kT, cT) {
      const lT = TT._device,
        MT = CT(TT, kT.byteLength, cT);
      try {
        lT.queue.writeBuffer(MT, 0, kT.buffer, kT.byteOffset, kT.byteLength)
      } catch (KT) {
        throw MT.destroy(), KT
      }
      return MT
    }
    var NT = cT(41304),
      QT = new OT.h(1),
      ST = new OT.c(QT.buffer);

    function DT(TT) {
      let kT = 0;
      for (const cT of TT) kT += cT._lightVersion ?? 0;
      return kT
    }

    function aT(TT, kT) {
      TT.fill(0);
      let cT = 0;
      for (const lT of kT) {
        if (cT >= NT.c) break;
        lT._writeLightUbo && (lT._writeLightUbo(TT, 4 + 16 * cT), cT++)
      }
      QT[0] = cT, TT[0] = ST[0]
    }

    function FT(TT, kT) {
      let cT = kT._lightGpuState;
      const lT = 16 + 16 * NT.c * 4;
      if (cT && cT._byteSize === lT) return cT;
      const MT = !cT;
      cT?._buffer.destroy();
      const KT = new OT.c(lT / 4);
      return aT(KT, kT.lights), TT._applyLightFoOffset?.(KT, kT), cT = {
        _buffer: hT(TT, KT),
        _scratch: KT,
        tV: DT(kT.lights) + (TT._lightFoVersion?.(kT) ?? 0),
        _listVersion: kT._lightListVersion ?? 0,
        _lightCount: kT.lights.length,
        _byteSize: lT
      }, kT._lightGpuState = cT, MT && kT._disposables.push((() => {
        kT._lightGpuState?._buffer.destroy(), kT._lightGpuState = void 0
      })), cT
    }

    function rT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const MT = kT;
      if (0 === lT && 16 === MT.length) return void TT.set(MT, cT);
      const KT = lT,
        OT = cT;
      TT[OT + 0] = MT[KT + 0], TT[OT + 1] = MT[KT + 1], TT[OT + 2] = MT[KT + 2], TT[OT + 3] = MT[KT + 3], TT[OT + 4] = MT[KT + 4], TT[OT + 5] = MT[KT + 5], TT[OT + 6] = MT[KT + 6], TT[OT + 7] = MT[KT + 7], TT[OT + 8] = MT[KT + 8], TT[OT + 9] = MT[KT + 9], TT[OT + 10] = MT[KT + 10], TT[OT + 11] = MT[KT + 11], TT[OT + 12] = MT[KT + 12], TT[OT + 13] = MT[KT + 13], TT[OT + 14] = MT[KT + 14], TT[OT + 15] = MT[KT + 15]
    }

    function PT(TT, kT, cT, lT, MT) {
      TT.fill(0);
      const KT = function(TT, kT) {
          const cT = xT(TT);
          if (TT._vpVer === cT && TT._vpAspect === kT) return TT._vpCache;
          const lT = TT._vpCache;
          return function(TT, kT, cT, lT, MT, KT) {
            const OT = cT[lT],
              yT = cT[lT + 1],
              fT = cT[lT + 2],
              xT = cT[lT + 3],
              IT = cT[lT + 4],
              AT = cT[lT + 5],
              CT = cT[lT + 6],
              jT = cT[lT + 7],
              vT = cT[lT + 8],
              tT = cT[lT + 9],
              hT = cT[lT + 10],
              NT = cT[lT + 11],
              QT = cT[lT + 12],
              ST = cT[lT + 13],
              DT = cT[lT + 14],
              aT = cT[lT + 15];
            let FT = MT[KT],
              rT = MT[KT + 1],
              PT = MT[KT + 2],
              wT = MT[KT + 3];
            TT[kT] = OT * FT + IT * rT + vT * PT + QT * wT, TT[kT + 1] = yT * FT + AT * rT + tT * PT + ST * wT, TT[kT + 2] = fT * FT + CT * rT + hT * PT + DT * wT, TT[kT + 3] = xT * FT + jT * rT + NT * PT + aT * wT, FT = MT[KT + 4], rT = MT[KT + 5], PT = MT[KT + 6], wT = MT[KT + 7], TT[kT + 4] = OT * FT + IT * rT + vT * PT + QT * wT, TT[kT + 5] = yT * FT + AT * rT + tT * PT + ST * wT, TT[kT + 6] = fT * FT + CT * rT + hT * PT + DT * wT, TT[kT + 7] = xT * FT + jT * rT + NT * PT + aT * wT, FT = MT[KT + 8], rT = MT[KT + 9], PT = MT[KT + 10], wT = MT[KT + 11], TT[kT + 8] = OT * FT + IT * rT + vT * PT + QT * wT, TT[kT + 9] = yT * FT + AT * rT + tT * PT + ST * wT, TT[kT + 10] = fT * FT + CT * rT + hT * PT + DT * wT, TT[kT + 11] = xT * FT + jT * rT + NT * PT + aT * wT, FT = MT[KT + 12], rT = MT[KT + 13], PT = MT[KT + 14], wT = MT[KT + 15], TT[kT + 12] = OT * FT + IT * rT + vT * PT + QT * wT, TT[kT + 13] = yT * FT + AT * rT + tT * PT + ST * wT, TT[kT + 14] = fT * FT + CT * rT + hT * PT + DT * wT, TT[kT + 15] = xT * FT + jT * rT + NT * PT + aT * wT
          }(lT, 0, IT(TT, kT), 0, yT(TT), 0), TT._vpVer = cT, TT._vpAspect = kT, lT
        }(lT, MT),
        OT = yT(lT),
        fT = lT.worldMatrix;
      rT(TT, KT, 0), rT(TT, OT, 16), kT.useFloatingOrigin ? (TT[32] = 0, TT[33] = 0, TT[34] = 0) : (TT[32] = fT[12], TT[33] = fT[13], TT[34] = fT[14]), TT[87] = kT.canvas.width;
      const AT = cT.imageProcessing;
      TT[76] = AT.exposure, TT[77] = AT.contrast, TT[78] = cT._envTextures?.lodGenerationScale ?? .8, TT[79] = +AT.toneMappingEnabled, TT[37] = kT.canvas.height
    }

    function wT(TT, kT) {
      return {
        _renderables: TT,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: kT
      }
    }

    function mT(TT, kT, cT) {
      TT.clr ??= !0;
      const MT = TT.rt._descriptor,
        KT = TT.depth?._descriptor,
        fT = {
          _colorFormat: MT.format,
          _depthStencilFormat: KT?.dFormat ?? MT.dFormat,
          _depthCompare: MT.depthCompare ?? KT?.depthCompare,
          _sampleCount: MT.samples
        },
        IT = {
          loadOp: "clear",
          storeOp: "store"
        },
        AT = {
          ...wT([], -1),
          name: TT.name,
          _config: TT,
          _ownsTargets: !TT.sharedRt,
          engine: kT,
          et: cT,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [IT]
          },
          _colorAttachment: IT,
          _sceneUBO: CT(kT, 368),
          _suData: new OT.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: fT,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (AT._disposed) throw new Error("RenderTask has been disposed.");
            AT._recordExplicit ? AT._recordExplicit(AT, !0) : JT(AT, !1 !== TT.autoMirror ? cT._renderables.slice() : AT._renderables, !0)
          },
          execute: () => function(TT, kT, cT) {
            if (!1 === TT.enabled) return 0;
            const lT = TT.et;
            ! function(TT, kT, cT) {
              const lT = TT.et;
              !1 !== TT._config.autoMirror && TT._lastVersion !== lT._renderableVersion && JT(TT, lT._renderables.slice());
              HT(TT, kT);
              const MT = TT._updateContext,
                KT = TT._config.cam ?? lT.camera;
              cT._colorFormat && (TT._config._skipClusteredLights || lT._clusteredLightUpdater?.(KT, MT.targetWidth, MT.targetHeight), function(TT, kT) {
                const cT = FT(TT, kT),
                  lT = DT(kT.lights) + (TT._lightFoVersion?.(kT) ?? 0),
                  MT = kT._lightListVersion ?? 0;
                lT === cT.tV && MT === cT._listVersion && kT.lights.length === cT._lightCount || (cT.tV = lT, cT._listVersion = MT, cT._lightCount = kT.lights.length, aT(cT._scratch, kT.lights), TT._applyLightFoOffset?.(cT._scratch, kT), TT._device.queue.writeBuffer(cT._buffer, 0, cT._scratch)), cT._buffer
              }(kT, lT));
              (function(TT, kT, cT, lT) {
                if (!lT) return;
                const MT = lT.viewport,
                  KT = TT._config.rt,
                  OT = (TT._config.cs ? kT.canvas.width / kT.canvas.height : KT._width / KT._height) * (MT ? MT.width / MT.height : 1),
                  yT = cT.fog,
                  fT = cT.imageProcessing,
                  IT = xT(lT),
                  AT = cT._envTextures,
                  CT = TT._sceneUboCacheKey;
                if (CT[0] === lT && CT[1] === yT && CT[2] === IT && CT[3] === OT && CT[4] === fT.exposure && CT[5] === fT.contrast && CT[6] === AT) return;
                CT[0] = lT, CT[1] = yT, CT[2] = IT, CT[3] = OT, CT[4] = fT.exposure, CT[5] = fT.contrast, CT[6] = AT;
                const jT = TT._suData;
                PT(jT, kT, cT, lT, OT);
                const vT = cT._sceneUboContributors;
                if (vT)
                  for (const xT of vT) xT(jT, cT);
                kT._device.queue.writeBuffer(TT._sceneUBO, 0, jT)
              })(TT, kT, lT, KT), MT.FY = KT, TT._batchState?._reset(), eT(TT._opaqueBindings, MT), eT(TT._directBindings, MT), eT(TT._transparentBindings, MT), TT._batchState?._flush(kT),
                function(TT, kT) {
                  const cT = TT._transparentBindings;
                  if (cT.length <= 1 || !kT) return;
                  const lT = yT(kT);
                  for (const MT of cT) {
                    const TT = MT.renderable._worldCenter;
                    MT._sortDistance = TT ? TT[0] * lT[2] + TT[1] * lT[6] + TT[2] * lT[10] + lT[14] : 0
                  }
                  cT.sort(bT)
                }(TT, KT)
            }(TT, kT, cT);
            const MT = TT._colorAttachment,
              KT = TT._config;
            KT.rt._colorView && (KT.rt === lT.surface.scRT && (MT.view = KT.rt._colorView), MT.resolveTarget = KT.rst?._colorView ?? void 0, MT.clearValue = KT.clrColor ?? lT.clearColor, MT.loadOp = KT.clr ? "clear" : "load");
            if (TT._executeWithTransmission) return TT._executeWithTransmission(cT._sampleCount);
            const OT = kT._currentEncoder.beginRenderPass(TT._renderPassDescriptor),
              fT = oT(TT, OT);
            return OT.end(), fT
          }(AT, kT, fT),
          dispose() {
            if (AT._disposed) return;
            AT._disposed = !0;
            const kT = AT._pendingMeshes;
            kT && (kT.length = 0);
            for (const TT of AT._renderables) AT._retireRenderable?.(AT.engine, TT);
            AT._passes.length = AT._opaqueBindings.length = AT._directBindings.length = 0, AT._transparentBindings.length = AT._renderables.length = AT._ob.length = 0, AT._ownsTargets && ((0, lT.f)(TT.rt), (0, lT.f)(TT.rst)), TT.depth?._eager || (0, lT.f)(TT.depth);
            const cT = AT._sceneUBO;
            (0, jT.b)(AT.engine, (() => cT.destroy())), AT._batchState?._release(AT.engine), AT._batchState = void 0
          }
        };
      return AT
    }

    function bT(TT, kT) {
      return kT._sortDistance - TT._sortDistance || TT.renderable.order - kT.renderable.order
    }

    function zT(TT, kT) {
      return TT.renderable.order - kT.renderable.order
    }

    function JT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT._renderables,
        cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        MT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        KT = arguments.length > 4 ? arguments[4] : void 0;
      const OT = TT._config,
        yT = OT.rt,
        fT = TT._batchState,
        xT = wT(kT, TT.et._renderableVersion);
      if (cT) {
        const kT = (kT, cT) => {
          kT && (cT || TT._ownsTargets || kT._eager) && (0, lT.c)(kT, TT.engine)
        };
        kT(yT), yT._descriptor.samples > 1 && kT(OT.rst), kT(OT.depth, !0)
      }
      const {
        _opaqueBindings: IT,
        _directBindings: AT,
        _transparentBindings: CT
      } = xT;
      try {
        for (const cT of kT) {
          const kT = cT.bind(TT.engine, TT._targetSignature);
          xT._batchState = TT._targetSignature._collectBatches?.(xT._batchState, kT), cT.isTransparent || cT._transmissive ? CT.push(kT) : cT._direct ? AT.push(kT) : IT.push(kT)
        }
        IT.sort(zT), AT.sort(zT), cT && HT(TT, TT.engine, !1)
      } catch (jT) {
        throw xT._batchState?._release(void 0, KT ?? [fT]), jT
      }
      return cT && (! function(TT, kT) {
        const cT = TT._config,
          lT = TT._colorAttachment;
        lT.view = kT._colorView, TT._renderPassDescriptor.colorAttachments = kT._colorView ? [lT] : [];
        const MT = cT.depth ?? kT,
          KT = MT._depthView;
        let OT;
        if (KT) {
          const TT = MT._descriptor,
            kT = (cT.depth ? MT._eager : !1 === cT.depthClear) ? "load" : "clear";
          OT = {
            view: KT,
            depthClearValue: TT.depthClearValue ?? 0,
            depthLoadOp: kT,
            depthStoreOp: "store"
          }, TT.dFormat?.includes("stencil") && (OT.stencilClearValue = 0, OT.stencilLoadOp = kT, OT.stencilStoreOp = "store")
        }
        TT._renderPassDescriptor.depthStencilAttachment = OT
      }(TT, yT), TT._updateContext.targetWidth = yT._width, TT._updateContext.targetHeight = yT._height), MT && (Object.assign(TT, xT), fT?._release(TT.engine, [xT._batchState])), xT
    }

    function oT(TT, kT) {
      const cT = TT.engine,
        lT = TT._config,
        KT = lT.rt,
        OT = TT.et,
        yT = TT._opaqueBindings,
        fT = TT._ob,
        xT = TT._sceneBG;
      if (function(TT, kT, cT, lT) {
          const MT = kT?.viewport;
          if (!MT) return;
          const KT = Math.floor(MT.x * cT),
            OT = Math.floor((1 - MT.y - MT.height) * lT),
            yT = Math.ceil((MT.x + MT.width) * cT) - KT,
            fT = Math.ceil((1 - MT.y) * lT) - OT;
          TT.setViewport(KT, OT, yT, fT, 0, 1), TT.setScissorRect(KT, OT, yT, fT)
        }(kT, lT.cam ?? OT.camera, KT._width, KT._height), kT.setBindGroup(0, xT), TT._lastVis !== MT.b || !fT.length) {
        const kT = KT._descriptor,
          lT = cT._device.createRenderBundleEncoder({
            colorFormats: kT.format ? [kT.format] : [],
            depthStencilFormat: TT._targetSignature._depthStencilFormat,
            sampleCount: kT.samples
          });
        lT.setBindGroup(0, xT), GT(lT, yT, cT), fT[0] = lT.finish(), TT._lastVis = MT.b
      }
      let IT = yT.length;
      return kT.executeBundles(fT), kT.setBindGroup(0, xT), IT += GT(kT, TT._directBindings, cT), IT += GT(kT, TT._transparentBindings, cT), IT
    }

    function HT(TT, kT) {
      let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const lT = FT(kT, TT.et)._buffer;
      if (lT === TT._lightsUBO) return;
      const MT = kT._device.createBindGroup({
        layout: tT(kT),
        entries: [{
          binding: 0,
          resource: {
            buffer: TT._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: lT
          }
        }]
      });
      TT._lightsUBO = lT, TT._sceneBG = MT, cT && (TT._ob = [])
    }

    function eT(TT, kT) {
      for (const cT of TT) cT.update?.(kT)
    }

    function GT(TT, kT, cT) {
      let lT = null,
        MT = 0;
      for (const KT of kT) {
        const kT = KT.renderable.mesh;
        kT && !1 === kT.visible || (KT.pipeline !== lT && (TT.setPipeline(KT.pipeline), lT = KT.pipeline), MT += KT.draw(TT, cT))
      }
      return MT
    }

    function VT(TT) {
      const kT = TT._materialSwapQueue;
      if (!kT[0] || TT._runtimeBuilds?.w) return;
      let lT, MT, KT;
      const OT = TT._renderables;
      for (const cT of kT) {
        const kT = cT.material;
        if (!kT) continue;
        const yT = cT._runtimeThinBuild;
        if (yT) {
          MT = yT(TT, cT, MT);
          continue
        }
        const fT = TT._groups.get(kT._buildGroup),
          xT = fT?.r;
        if (!xT) {
          (KT ??= []).push(cT);
          continue
        }
        if (fT._w?.(cT)) {
          (KT ??= []).push([cT, kT]);
          continue
        }
        const IT = TT._meshDisposables.get(cT);
        IT && (TT._meshDisposables.delete(cT), (0, jT.b)(TT.surface.engine, (() => IT.forEach((TT => TT())))));
        const AT = fT.o;
        let CT;
        for (let TT = OT.length; TT--;) OT[TT].mesh === cT && (CT = OT.splice(TT, 1)[0]);
        kT._csmGen = -~kT._csmGen;
        const vT = xT(TT, cT);
        if (AT) {
          const TT = AT.indexOf(CT);
          TT < 0 ? AT.push(vT) : AT[TT] = vT
        }
        lT = OT.push(vT)
      }
      if (lT && (OT.sort(((TT, kT) => TT.order - kT.order)), TT._renderableVersion++, TT._materialEpoch++), kT.length = 0, !KT) return MT;
      const yT = KT;
      return cT.e(356).then((() => cT(60666))).then((kT => {
        let {
          C: cT
        } = kT;
        return cT(TT, yT, MT)
      }), (kT => {
        const cT = TT._runtimeBuilds;
        cT ? cT._x(kT) : console.error(kT)
      }))
    }
    var ET = null;

    function ZT(TT, kT) {
      const cT = TT.engine,
        MT = {
          _kind: "et",
          surface: TT,
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
            cT.useFloatingOrigin && MT.camera && !MT.camera._useFloatingOrigin && (MT.camera._useFloatingOrigin = !0, MT.camera._viewVer = -1, MT.camera._vpVer = -1);
            const TT = MT.fixedDeltaMs > 0 ? MT.fixedDeltaMs : cT._currentDelta,
              kT = cT._currentEncoder;
            let lT = 0;
            for (const cT of MT._beforeRender) cT(TT);
            MT._materialSwapQueue.length && VT(MT);
            for (const KT of MT._prePasses) lT += KT.execute(kT, cT);
            for (const KT of MT._uniformUpdaters) KT.update(cT);
            MT._drawCallsPre = lT
          },
          _record: () => MT._frameGraph.execute(),
          _resize() {
            MT._frameGraph.build()
          }
        },
        OT = function() {
          const TT = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let kT = 0; kT < TT._tasks.length; kT++) KT(TT, TT._tasks[kT]);
              for (const kT of TT._tasks)
                for (const TT of kT._passes) TT._initialize()
            },
            execute() {
              let kT = 0;
              for (const cT of TT._tasks)
                if (!1 !== cT.executionEnabled)
                  if (cT.execute) kT += cT.execute();
                  else
                    for (const TT of cT._passes) kT += TT._execute();
              return kT
            },
            dispose() {
              for (const kT of TT._tasks) kT.dispose();
              TT._tasks.length = 0, TT._currentProcessedTask = null
            }
          };
          return TT
        }();
      if (MT._frameGraph = OT, !1 !== kT?.defaultRenderTask) {
        const kT = TT.msaaSamples > 1,
          KT = kT ? (0, lT.b)({
            lbl: "scene-color",
            format: TT.format,
            dFormat: "depth24plus-stencil8",
            samples: TT.msaaSamples,
            size: TT
          }) : TT.scRT,
          yT = kT ? void 0 : (0, lT.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: TT
          });
        ! function(TT, kT) {
          TT._tasks.push(kT)
        }(OT, mT({
          name: "et",
          rt: KT,
          rst: kT ? TT.scRT : void 0,
          depth: yT
        }, cT, MT))
      }
      return MT._disposables.push((() => OT.dispose())), MT
    }
    async function uT(TT) {
      const kT = TT;
      for (kT._built || (kT._materialSwapQueue.length = 0); kT._deferredBuilders.length;) {
        const TT = kT._deferredBuilders.splice(0);
        await Promise.all(TT.map((TT => TT())))
      }
      await VT(kT), ET?.get(kT)?.() || (kT._runtimeBuilds?._e(), kT._renderableVersion++, kT._built = !0), await (kT._rebuildHook?.(kT))
    }
    var XT = null;
    async function dT(TT) {
      const kT = TT,
        lT = kT.surface;
      (0, MT.g)(lT, kT) || (await uT(TT), kT._renderables.sort(LT), await Promise.all(kT._frameGraph._tasks.map((TT => TT._preload?.()))), XT && await XT(kT), kT._frameGraph.build(), lT._renderingContexts[0] && (await cT.e(354).then((() => cT(60660)))).configureSwapchainOverlayScene(lT, kT), ET?.get(kT)?.() || (0, MT.k)(lT, kT))
    }
    var LT = (TT, kT) => TT.order - kT.order
  },
  41277: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT,
      g: () => IT
    });
    var lT = cT(41242),
      MT = cT(41244),
      KT = cT(41247),
      OT = cT(41256),
      yT = cT(41259),
      fT = cT(41267);

    function xT(TT, kT, cT) {
      let yT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (kT < 1 || cT < 1) && (0, lT.e)(676, kT, cT);
      const xT = TT._device,
        IT = yT.mipMaps ?? !1,
        AT = yT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        CT = IT ? (0, fT.d)(kT, cT) : 1,
        jT = xT.createTexture({
          size: {
            width: kT,
            height: cT
          },
          format: AT,
          mipLevelCount: CT,
          usage: MT.g.TEXTURE_BINDING | MT.g.COPY_DST | MT.g.RENDER_ATTACHMENT
        }),
        vT = {
          addressModeU: yT.addressModeU ?? "clamp-to-edge",
          addressModeV: yT.addressModeV ?? "clamp-to-edge",
          minFilter: yT.minFilter ?? "linear",
          magFilter: yT.magFilter ?? "linear",
          mipmapFilter: IT ? "linear" : "nearest"
        },
        tT = (0, OT.c)(TT, vT),
        hT = {
          texture: jT,
          view: jT.createView(),
          sampler: tT,
          width: kT,
          height: cT
        };
      return (0, KT.c)(hT), TT._dlr && TT._dlr.t(hT, {
        kind: "dynamic",
        width: kT,
        height: cT,
        format: AT,
        levels: CT,
        samplerDesc: vT,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), hT
    }

    function IT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const MT = lT.invertY ?? !0,
        KT = lT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: cT,
        flipY: MT
      }, {
        texture: kT.texture,
        premultipliedAlpha: KT
      }, [kT.width, kT.height]);
      const OT = kT._recoverySource;
      OT && "dynamic" === OT.kind && (OT.source = cT, OT.flipY = MT, OT.premultipliedAlpha = KT), kT.texture.mipLevelCount > 1 && (0, yT.generateMipmaps)(TT, kT.texture)
    }
  },
  41274: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT
    });
    var lT = cT(41242),
      MT = cT(41244),
      KT = cT(41247),
      OT = cT(41256),
      yT = cT(41267);
    async function fT(TT, kT) {
      let fT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [xT, IT] = function(TT) {
        const kT = TT,
          cT = [
            [kT.displayWidth, kT.displayHeight],
            [kT.videoWidth, kT.videoHeight],
            [kT.naturalWidth, kT.naturalHeight],
            [kT.width, kT.height]
          ];
        for (const [lT, MT] of cT)
          if (void 0 !== lT && void 0 !== MT && Number.isInteger(lT) && Number.isInteger(MT) && lT > 0 && MT > 0) return [lT, MT];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(kT), [AT, CT] = function(TT, kT, cT) {
        if (void 0 === cT) return [TT, kT];
        if (!Number.isInteger(cT) || cT < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${cT})`);
        if (Math.max(TT, kT) <= cT) return [TT, kT];
        const lT = cT / Math.max(TT, kT);
        return TT >= kT ? [cT, Math.max(1, Math.round(kT * lT))] : [Math.max(1, Math.round(TT * lT)), cT]
      }(xT, IT, fT.maxDimension), jT = fT.mipMaps ?? !0, vT = fT.premultiplyAlpha ?? !1;
      let tT = kT,
        hT = null;
      const NT = {
        texture: null
      };
      try {
        AT === xT && CT === IT || (hT = await createImageBitmap(kT, {
          resizeWidth: AT,
          resizeHeight: CT,
          resizeQuality: "high",
          premultiplyAlpha: vT ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), tT = hT);
        const QT = TT._device,
          ST = fT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          DT = jT ? (0, yT.d)(AT, CT) : 1,
          aT = DT > 1 ? (await Promise.resolve().then((() => cT(41259)))).generateMipmaps : null,
          FT = {
            addressModeU: fT.addressModeU ?? "repeat",
            addressModeV: fT.addressModeV ?? "repeat",
            minFilter: fT.minFilter ?? "linear",
            magFilter: fT.magFilter ?? "linear",
            mipmapFilter: jT ? "linear" : "nearest"
          };
        FT.maxAnisotropy = "linear" === FT.minFilter && "linear" === FT.magFilter && "linear" === FT.mipmapFilter ? 4 : 1;
        const rT = fT.invertY ?? !0,
          PT = async kT => {
            let cT;
            QT.pushErrorScope("validation"), QT.pushErrorScope("out-of-memory");
            let KT = null;
            try {
              const cT = NT.texture = QT.createTexture({
                size: {
                  width: AT,
                  height: CT
                },
                format: ST,
                mipLevelCount: DT,
                usage: MT.g.TEXTURE_BINDING | MT.g.COPY_DST | MT.g.RENDER_ATTACHMENT
              });
              QT.queue.copyExternalImageToTexture({
                source: kT,
                flipY: rT
              }, {
                texture: cT,
                premultipliedAlpha: vT
              }, {
                width: AT,
                height: CT
              }), aT && aT(TT, cT), KT = (0, OT.c)(TT, FT)
            } catch (jT) {
              cT = jT
            }
            const [yT, fT] = await Promise.all([QT.popErrorScope(), QT.popErrorScope()]);
            if (cT) throw cT;
            const xT = fT ?? yT;
            if (xT) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${xT.message}`, {
              cause: xT
            });
            const IT = NT.texture;
            return IT && KT || (0, lT.e)(677), {
              texture: IT,
              view: IT.createView(),
              sampler: KT,
              width: AT,
              height: CT
            }
          }, wT = await (TT._dlr?.x(tT, AT, CT, ST, DT, FT, rT, vT, PT)) ?? await PT(tT);
        return (0, KT.c)(wT), wT
      } catch (QT) {
        throw NT.texture?.destroy(), QT
      } finally {
        hT?.close()
      }
    }
  },
  41259: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      generateMipmaps: () => jT,
      recordMipmaps: () => vT
    });
    var lT = cT(41244),
      MT = cT(41256),
      KT = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var OT = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      yT = null,
      fT = null,
      xT = null,
      IT = null,
      AT = null;

    function CT(TT) {
      const kT = TT._device;
      kT !== AT && (yT?.clear(), yT = null, fT = null, xT = null, IT = null, AT = null, AT = kT), fT ??= kT.createShaderModule({
        code: OT
      }), xT ??= function(TT) {
        return (0, MT.c)(TT, KT)
      }(TT), IT ??= kT.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: lT.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: lT.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function jT(TT, kT, cT) {
      const lT = TT._device,
        MT = lT.createCommandEncoder();
      vT(TT, kT, MT, cT), lT.queue.submit([MT.finish()])
    }

    function vT(TT, kT, cT, lT) {
      if (kT.mipLevelCount <= 1) return;
      const MT = TT._device,
        KT = function(TT, kT) {
          const cT = TT._device;
          CT(TT), yT ??= new Map;
          let lT = yT.get(kT);
          return lT || (lT = cT.createRenderPipeline({
            layout: cT.createPipelineLayout({
              bindGroupLayouts: [IT]
            }),
            vertex: {
              module: fT,
              entryPoint: "vs"
            },
            fragment: {
              module: fT,
              entryPoint: "fs",
              targets: [{
                format: kT
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), yT.set(kT, lT)), lT
        }(TT, kT.format),
        OT = null != lT ? {
          dimension: "2d",
          baseArrayLayer: lT,
          arrayLayerCount: 1
        } : {};
      for (let yT = 1; yT < kT.mipLevelCount; yT++) {
        const TT = kT.createView({
            baseMipLevel: yT - 1,
            mipLevelCount: 1,
            ...OT
          }),
          lT = kT.createView({
            baseMipLevel: yT,
            mipLevelCount: 1,
            ...OT
          }),
          fT = MT.createBindGroup({
            layout: IT,
            entries: [{
              binding: 0,
              resource: TT
            }, {
              binding: 1,
              resource: xT
            }]
          }),
          AT = cT.beginRenderPass({
            colorAttachments: [{
              view: lT,
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
        AT.setPipeline(KT), AT.setBindGroup(0, fT), AT.draw(3), AT.end()
      }
    }
  },
  41267: (TT, kT, cT) => {
    function lT(TT, kT) {
      return Math.floor(Math.log2(Math.max(TT, kT))) + 1
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  41233: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT,
      g: () => IT
    });
    var lT = cT(41242),
      MT = cT(41244),
      KT = cT(41247),
      OT = cT(41256),
      yT = cT(41259),
      fT = cT(41267);

    function xT(TT, kT, cT, yT) {
      let xT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (kT < 1 || cT < 1 || yT < 1) && (0, lT.e)(722, kT, cT, yT);
      const IT = TT._device,
        AT = xT.mipMaps ?? !0,
        CT = xT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        jT = IT.createTexture({
          size: {
            width: kT,
            height: cT,
            depthOrArrayLayers: yT
          },
          dimension: "2d",
          format: CT,
          mipLevelCount: AT ? (0, fT.d)(kT, cT) : 1,
          usage: MT.g.TEXTURE_BINDING | MT.g.COPY_DST | MT.g.RENDER_ATTACHMENT
        }),
        vT = (0, OT.c)(TT, {
          addressModeU: xT.addressModeU ?? "repeat",
          addressModeV: xT.addressModeV ?? "repeat",
          minFilter: xT.minFilter ?? "linear",
          magFilter: xT.magFilter ?? "linear",
          mipmapFilter: AT ? "linear" : "nearest"
        }),
        tT = {
          texture: jT,
          view: jT.createView({
            dimension: "2d-array"
          }),
          sampler: vT,
          width: kT,
          height: cT,
          layers: yT
        };
      return (0, KT.c)(tT), tT
    }

    function IT(TT, kT, cT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (cT < 0 || cT >= kT.layers || (0 | cT) !== cT) && (0, lT.e)(723, kT.layers, cT);
      const OT = KT.invertY ?? !0,
        fT = KT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: MT,
        flipY: OT
      }, {
        texture: kT.texture,
        origin: [0, 0, cT],
        premultipliedAlpha: fT
      }, [kT.width, kT.height, 1]), kT.texture.mipLevelCount > 1 && (0, yT.generateMipmaps)(TT, kT.texture, cT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);