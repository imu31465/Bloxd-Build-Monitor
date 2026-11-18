export const id = 285;
export const ids = [285];
export const modules = {
  40432: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      f: () => xJ,
      j: () => sJ,
      l: () => nJ,
      o: () => vJ,
      q: () => rJ
    });
    var FJ = ZJ(40373);
    var UJ = "Babylon Lite v1.32.0",
      eJ = ZJ(40435);

    function XJ(JJ) {
      return "clientWidth" in JJ
    }
    var AJ = 1;

    function qJ(JJ, cJ, ZJ) {
      const qJ = cJ.getContext("webgpu");
      qJ || (0, FJ.c)(54), XJ(cJ) && cJ.setAttribute("data-engine", UJ);
      const jJ = ZJ?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        YJ = ZJ?.srgb ? (hJ = jJ).endsWith("-srgb") ? hJ : `${hJ}-srgb` : jJ;
      var hJ;
      const DJ = ZJ?.alphaMode ?? "opaque";
      qJ.configure({
        device: JJ._device,
        format: jJ,
        alphaMode: DJ,
        viewFormats: [YJ]
      });
      const sJ = 1 === ZJ?.msaaSamples ? 1 : 4,
        nJ = (0, eJ.e)({
          lbl: "swapchain",
          format: YJ,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return nJ._eager = !0, {
        engine: JJ,
        canvas: cJ,
        format: YJ,
        msaaSamples: sJ,
        scRT: nJ,
        maxDevicePixelRatio: ZJ?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: AJ++,
        _context: qJ,
        _configureFormat: jJ,
        _alphaMode: DJ,
        _renderingContexts: []
      }
    }

    function jJ(JJ) {
      const cJ = JJ._context.getCurrentTexture(),
        ZJ = JJ.scRT;
      ZJ._colorTexture = cJ, ZJ._colorView = cJ.createView({
        format: JJ.format
      }), ZJ._width = cJ.width, ZJ._height = cJ.height
    }

    function YJ(JJ) {
      const cJ = JJ.canvas;
      if (!XJ(cJ)) return;
      const ZJ = JJ._w ?? cJ.clientWidth,
        FJ = JJ._h ?? cJ.clientHeight;
      if (!(ZJ > 0 && FJ > 0)) return;
      const UJ = Math.min(globalThis.devicePixelRatio || 1, JJ.maxDevicePixelRatio);
      hJ(JJ, ZJ * UJ | 0, FJ * UJ | 0)
    }

    function hJ(JJ, cJ, ZJ) {
      const FJ = JJ.canvas,
        UJ = 0 | cJ,
        eJ = 0 | ZJ;
      if (UJ > 0 && eJ > 0 && (UJ !== FJ.width || eJ !== FJ.height)) {
        FJ.width = UJ, FJ.height = eJ, JJ.scRT._width = UJ, JJ.scRT._height = eJ;
        for (const cJ of JJ._renderingContexts) cJ._resize?.()
      }
    }
    var DJ = 0;

    function sJ(JJ, cJ) {
      return -1 !== JJ._renderingContexts.indexOf(cJ)
    }

    function nJ(JJ, cJ) {
      return -1 === JJ._renderingContexts.indexOf(cJ) && (JJ._renderingContexts.push(cJ), !0)
    }
    var GJ = null;
    var fJ = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function xJ(JJ, cJ) {
      const eJ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...GJ ? GJ() : {}
      });
      eJ || (0, FJ.c)(47);
      const XJ = GJ?.deviceFeatures?.(eJ, cJ) ?? function(JJ) {
          return fJ.filter((cJ => JJ.features.has(cJ)))
        }(eJ),
        AJ = await eJ.requestDevice({
          requiredFeatures: XJ,
          requiredLimits: cJ?.requiredLimits
        });
      console.log(`${UJ} - WebGPU engine`);
      const hJ = !!cJ?.useHighPrecisionMatrix,
        DJ = !!cJ?.useFloatingOrigin;
      if (DJ && !hJ && (0, FJ.c)(48), hJ) {
        const {
          allocateF64Mat4: JJ
        } = await ZJ.e(339).then((() => ZJ(59476)));
        0
      }
      let sJ, nJ, xJ, rJ;
      if (DJ) {
        const [{
          wrapRenderableForFO: JJ,
          lightFoVersion: cJ,
          applyLightFoOffset: FJ
        }, {
          makePackMeshWorld: UJ
        }] = await Promise.all([ZJ.e(340).then((() => ZJ(59485))), ZJ.e(341).then((() => ZJ(59490)))]);
        sJ = JJ, nJ = UJ, xJ = cJ, rJ = FJ
      }
      const vJ = {
          _device: AJ
        },
        mJ = [vJ];
      return Object.assign(vJ, {
        engine: vJ,
        surfaces: mJ,
        _surfaces: mJ,
        _device: AJ,
        _options: cJ,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: hJ,
        useFloatingOrigin: DJ,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: sJ,
        _makePackMeshWorld: nJ,
        _lightFoVersion: xJ,
        _applyLightFoOffset: rJ
      }, qJ(vJ, JJ, cJ)), YJ(vJ), jJ(vJ), vJ
    }

    function rJ(JJ, cJ, ZJ) {
      hJ(JJ, cJ, ZJ)
    }

    function vJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ.surfaces;
      if (ZJ !== JJ.surfaces)
        for (let UJ = ZJ.length; UJ--;) ZJ[UJ].engine !== JJ && (0, FJ.c)(49);
      mJ(JJ, cJ, ZJ)
    }

    function mJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ._surfaces,
        FJ = 0;
      for (let eJ = ZJ.length; eJ--;) FJ += ZJ[eJ]._renderingContexts.length;
      if (!FJ) return JJ.drawCallCount = 0, JJ._flushGpuRetirements?.(JJ);
      const UJ = JJ._device.createCommandEncoder({
        label: "frame"
      });
      JJ._currentEncoder = UJ, JJ._currentDelta = cJ;
      try {
        JJ._gpuTimerBegin?.(UJ), FJ = 0;
        for (let JJ = 0; JJ < ZJ.length; JJ++) {
          const cJ = ZJ[JJ];
          cJ._capturePreFrame?.(cJ), jJ(cJ);
          const UJ = cJ._renderingContexts;
          for (let JJ = 0; JJ < UJ.length; JJ++) {
            const cJ = UJ[JJ];
            cJ._update(), FJ += cJ._drawCallsPre + cJ._record()
          }
        }
        const cJ = JJ._currentEncoder;
        for (let JJ = 0; JJ < ZJ.length; JJ++) {
          const FJ = ZJ[JJ];
          FJ._captureService?.(FJ, cJ)
        }
        JJ._gpuTimerEnd?.(cJ), JJ._cbs[0] = cJ.finish(), JJ._device.queue.submit(JJ._cbs), JJ._flushGpuRetirements?.(JJ), JJ.drawCallCount = FJ, JJ._gpuTimerResolve?.()
      } finally {
        JJ._currentEncoder = void 0
      }
    }
  },
  40382: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      f: () => eJ,
      g: () => FJ
    });
    var FJ = globalThis.GPUTextureUsage,
      UJ = globalThis.GPUBufferUsage,
      eJ = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40448: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      UJ(JJ.splice(0))
    }

    function UJ(JJ) {
      for (const ZJ of JJ) try {
        ZJ()
      } catch (cJ) {
        console.error("GPU resource retirement failed.", cJ)
      }
    }

    function eJ(JJ, cJ) {
      JJ._flushGpuRetirements ??= XJ, (JJ._retirements ??= []).push(cJ)
    }

    function XJ(JJ) {
      const cJ = JJ._retirements;
      if (!cJ) return;
      JJ._retirements = null;
      const ZJ = JJ._retiring ??= new Set;
      ZJ.add(cJ), queueMicrotask((() => {
        JJ._device.queue.onSubmittedWorkDone().then((() => {
          ZJ.delete(cJ), FJ(cJ)
        })).catch((() => {}))
      }))
    }
    ZJ.d(cJ, {
      b: () => eJ
    })
  },
  40435: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => XJ,
      g: () => AJ
    });
    var FJ = ZJ(40382);

    function UJ(JJ) {
      const cJ = JJ.size;
      return "canvas" in cJ ? cJ.canvas : cJ
    }

    function eJ(JJ) {
      return {
        _descriptor: JJ,
        _resolveSize: UJ,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function XJ(JJ, cJ) {
      if (JJ._eager) return void JJ._syncEager?.(cJ);
      AJ(JJ);
      const ZJ = JJ._descriptor,
        {
          width: eJ,
          height: XJ
        } = (JJ._resolveSize ?? UJ)(ZJ);
      JJ._width = eJ, JJ._height = XJ;
      const qJ = cJ._device;
      ZJ.format && (JJ._colorTexture = qJ.createTexture({
        label: ZJ.lbl,
        size: {
          width: eJ,
          height: XJ
        },
        format: ZJ.format,
        sampleCount: ZJ.samples,
        usage: FJ.g.RENDER_ATTACHMENT | FJ.g.TEXTURE_BINDING | FJ.g.COPY_SRC | FJ.g.COPY_DST
      }), JJ._colorView = JJ._colorTexture.createView()), ZJ.dFormat && (JJ._depthTexture = qJ.createTexture({
        label: ZJ.lbl,
        size: {
          width: eJ,
          height: XJ
        },
        format: ZJ.dFormat,
        sampleCount: ZJ.samples,
        usage: FJ.g.RENDER_ATTACHMENT | FJ.g.TEXTURE_BINDING
      }), JJ._depthView = JJ._depthTexture.createView())
    }

    function AJ(JJ) {
      if (!JJ || JJ._eager && !JJ._disposeAttachments) return;
      const cJ = JJ._colorTexture,
        ZJ = JJ._depthTexture;
      if (JJ._colorTexture = JJ._depthTexture = null, JJ._colorView = JJ._depthView = null, JJ._width = JJ._height = 0, JJ._disposeAttachments) JJ._disposeAttachments(cJ, ZJ);
      else try {
        cJ?.destroy()
      } finally {
        !1 !== JJ._ownsDepthTexture && ZJ?.destroy()
      }
    }
  },
  40446: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      f: () => UJ,
      j: () => eJ
    });
    var FJ = Float32Array,
      UJ = Float64Array,
      eJ = Uint32Array
  },
  40450: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    var FJ = 16
  },
  40373: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = null;

    function UJ(JJ) {
      for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), UJ = 1; UJ < cJ; UJ++) ZJ[UJ - 1] = arguments[UJ];
      const eJ = new Error(FJ?.(JJ, ZJ) ?? `#${JJ}`);
      throw eJ.lite = ZJ, eJ
    }
  },
  40416: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(40399);

    function UJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZJ = cJ.compare,
        UJ = cJ.lodMinClamp ?? 0,
        eJ = cJ.lodMaxClamp ?? 32,
        XJ = void 0 !== ZJ || 0 !== UJ || 32 !== eJ ? `${ZJ??""}:${UJ}:${eJ}` : "";
      return (0, FJ.c)(JJ, cJ, XJ)
    }
  },
  40390: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = null;

    function UJ(JJ) {
      const cJ = FJ ??= new WeakMap;
      cJ.set(JJ, (cJ.get(JJ) ?? 0) + 1)
    }

    function eJ(JJ) {
      UJ(JJ.texture)
    }
  },
  40399: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = null,
      UJ = "nearest",
      eJ = "clamp-to-edge",
      XJ = {
        minFilter: UJ,
        magFilter: UJ,
        mipmapFilter: UJ,
        addressModeU: eJ,
        addressModeV: eJ,
        addressModeW: eJ,
        maxAnisotropy: 1
      };

    function AJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const UJ = JJ._device,
        eJ = FJ ??= new WeakMap;
      let AJ = eJ.get(UJ);
      AJ || eJ.set(UJ, AJ = new Map);
      let qJ = ZJ;
      for (const FJ in XJ) {
        const JJ = FJ;
        qJ += `:${cJ[JJ]??XJ[JJ]}`
      }
      let jJ = AJ.get(qJ);
      return jJ || AJ.set(qJ, jJ = UJ.createSampler(cJ)), jJ
    }
  },
  40439: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => pJ,
      g: () => NJ
    });
    var FJ = ZJ(40435),
      UJ = ZJ(40432);

    function eJ(JJ, cJ) {
      cJ._passes.length = 0, JJ._currentProcessedTask = cJ;
      try {
        cJ.record()
      } finally {
        JJ._currentProcessedTask = null
      }
    }
    var XJ = ZJ(40446);

    function AJ(JJ) {
      const cJ = JJ.worldMatrixVersion;
      if (JJ._viewVer === cJ) return JJ._viewCache;
      const ZJ = JJ._viewCache,
        FJ = JJ.worldMatrix,
        UJ = JJ._useFloatingOrigin,
        eJ = UJ ? 0 : FJ[12],
        XJ = UJ ? 0 : FJ[13],
        AJ = UJ ? 0 : FJ[14];
      return ZJ[0] = FJ[0], ZJ[1] = FJ[4], ZJ[2] = FJ[8], ZJ[3] = 0, ZJ[4] = FJ[1], ZJ[5] = FJ[5], ZJ[6] = FJ[9], ZJ[7] = 0, ZJ[8] = FJ[2], ZJ[9] = FJ[6], ZJ[10] = FJ[10], ZJ[11] = 0, ZJ[12] = -(FJ[0] * eJ + FJ[1] * XJ + FJ[2] * AJ), ZJ[13] = -(FJ[4] * eJ + FJ[5] * XJ + FJ[6] * AJ), ZJ[14] = -(FJ[8] * eJ + FJ[9] * XJ + FJ[10] * AJ), ZJ[15] = 1, JJ._viewVer = cJ, ZJ
    }
    var qJ = null;

    function jJ(JJ) {
      return JJ._projFov === JJ.fov && JJ._projNear === JJ.nearPlane && JJ._projFar === JJ.farPlane || (JJ._projFov = JJ.fov, JJ._projNear = JJ.nearPlane, JJ._projFar = JJ.farPlane, JJ._projRev = (JJ._projRev ?? 0) + 1), JJ.worldMatrixVersion + (JJ._projRev ?? 0)
    }

    function YJ(JJ, cJ) {
      const ZJ = jJ(JJ);
      if (JJ._projVer === ZJ && JJ._projAspect === cJ) return JJ._projCache;
      const FJ = JJ._projCache;
      return null !== qJ && JJ.ortho ? qJ(JJ, cJ, FJ) : function(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = 1 / Math.tan(.5 * cJ),
          XJ = UJ - FJ;
        JJ[0] = eJ / ZJ, JJ[5] = eJ, JJ[10] = -FJ / XJ, JJ[11] = 1, JJ[14] = UJ * FJ / XJ
      }(FJ, JJ.fov, cJ, JJ.nearPlane, JJ.farPlane), JJ._projVer = ZJ, JJ._projAspect = cJ, FJ
    }
    var hJ = ZJ(40382);

    function DJ(JJ, cJ, ZJ) {
      return JJ._device.createBuffer({
        label: ZJ,
        size: (FJ = cJ, UJ = 16, Math.ceil(FJ / UJ) * UJ),
        usage: hJ.c.UNIFORM | hJ.c.COPY_DST
      });
      var FJ, UJ
    }
    var sJ = ZJ(40448),
      nJ = null;

    function GJ(JJ) {
      const cJ = JJ._device,
        ZJ = nJ ??= new WeakMap;
      let FJ = ZJ.get(cJ);
      return FJ || (FJ = cJ.createBindGroupLayout({
        label: "iG",
        entries: [{
          binding: 0,
          visibility: hJ.f.VERTEX | hJ.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: hJ.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ZJ.set(cJ, FJ)), FJ
    }

    function fJ(JJ, cJ, ZJ) {
      const FJ = JJ._device,
        UJ = DJ(JJ, cJ.byteLength, ZJ);
      try {
        FJ.queue.writeBuffer(UJ, 0, cJ.buffer, cJ.byteOffset, cJ.byteLength)
      } catch (eJ) {
        throw UJ.destroy(), eJ
      }
      return UJ
    }
    var xJ = ZJ(40450),
      rJ = new XJ.j(1),
      vJ = new XJ.e(rJ.buffer);

    function mJ(JJ) {
      let cJ = 0;
      for (const ZJ of JJ) cJ += ZJ._lightVersion ?? 0;
      return cJ
    }

    function QJ(JJ, cJ) {
      JJ.fill(0);
      let ZJ = 0;
      for (const FJ of cJ) {
        if (ZJ >= xJ.e) break;
        FJ._writeLightUbo && (FJ._writeLightUbo(JJ, 4 + 16 * ZJ), ZJ++)
      }
      rJ[0] = ZJ, JJ[0] = vJ[0]
    }

    function EJ(JJ, cJ) {
      let ZJ = cJ._lightGpuState;
      const FJ = 16 + 16 * xJ.e * 4;
      if (ZJ && ZJ._byteSize === FJ) return ZJ;
      const UJ = !ZJ;
      ZJ?._buffer.destroy();
      const eJ = new XJ.e(FJ / 4);
      return QJ(eJ, cJ.lights), JJ._applyLightFoOffset?.(eJ, cJ), ZJ = {
        _buffer: fJ(JJ, eJ),
        _scratch: eJ,
        nH: mJ(cJ.lights) + (JJ._lightFoVersion?.(cJ) ?? 0),
        _listVersion: cJ._lightListVersion ?? 0,
        _lightCount: cJ.lights.length,
        _byteSize: FJ
      }, cJ._lightGpuState = ZJ, UJ && cJ._disposables.push((() => {
        cJ._lightGpuState?._buffer.destroy(), cJ._lightGpuState = void 0
      })), ZJ
    }

    function VJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const UJ = cJ;
      if (0 === FJ && 16 === UJ.length) return void JJ.set(UJ, ZJ);
      const eJ = FJ,
        XJ = ZJ;
      JJ[XJ + 0] = UJ[eJ + 0], JJ[XJ + 1] = UJ[eJ + 1], JJ[XJ + 2] = UJ[eJ + 2], JJ[XJ + 3] = UJ[eJ + 3], JJ[XJ + 4] = UJ[eJ + 4], JJ[XJ + 5] = UJ[eJ + 5], JJ[XJ + 6] = UJ[eJ + 6], JJ[XJ + 7] = UJ[eJ + 7], JJ[XJ + 8] = UJ[eJ + 8], JJ[XJ + 9] = UJ[eJ + 9], JJ[XJ + 10] = UJ[eJ + 10], JJ[XJ + 11] = UJ[eJ + 11], JJ[XJ + 12] = UJ[eJ + 12], JJ[XJ + 13] = UJ[eJ + 13], JJ[XJ + 14] = UJ[eJ + 14], JJ[XJ + 15] = UJ[eJ + 15]
    }

    function KJ(JJ, cJ, ZJ, FJ, UJ) {
      JJ.fill(0);
      const eJ = function(JJ, cJ) {
          const ZJ = jJ(JJ);
          if (JJ._vpVer === ZJ && JJ._vpAspect === cJ) return JJ._vpCache;
          const FJ = JJ._vpCache;
          return function(JJ, cJ, ZJ, FJ, UJ, eJ) {
            const XJ = ZJ[FJ],
              AJ = ZJ[FJ + 1],
              qJ = ZJ[FJ + 2],
              jJ = ZJ[FJ + 3],
              YJ = ZJ[FJ + 4],
              hJ = ZJ[FJ + 5],
              DJ = ZJ[FJ + 6],
              sJ = ZJ[FJ + 7],
              nJ = ZJ[FJ + 8],
              GJ = ZJ[FJ + 9],
              fJ = ZJ[FJ + 10],
              xJ = ZJ[FJ + 11],
              rJ = ZJ[FJ + 12],
              vJ = ZJ[FJ + 13],
              mJ = ZJ[FJ + 14],
              QJ = ZJ[FJ + 15];
            let EJ = UJ[eJ],
              VJ = UJ[eJ + 1],
              KJ = UJ[eJ + 2],
              yJ = UJ[eJ + 3];
            JJ[cJ] = XJ * EJ + YJ * VJ + nJ * KJ + rJ * yJ, JJ[cJ + 1] = AJ * EJ + hJ * VJ + GJ * KJ + vJ * yJ, JJ[cJ + 2] = qJ * EJ + DJ * VJ + fJ * KJ + mJ * yJ, JJ[cJ + 3] = jJ * EJ + sJ * VJ + xJ * KJ + QJ * yJ, EJ = UJ[eJ + 4], VJ = UJ[eJ + 5], KJ = UJ[eJ + 6], yJ = UJ[eJ + 7], JJ[cJ + 4] = XJ * EJ + YJ * VJ + nJ * KJ + rJ * yJ, JJ[cJ + 5] = AJ * EJ + hJ * VJ + GJ * KJ + vJ * yJ, JJ[cJ + 6] = qJ * EJ + DJ * VJ + fJ * KJ + mJ * yJ, JJ[cJ + 7] = jJ * EJ + sJ * VJ + xJ * KJ + QJ * yJ, EJ = UJ[eJ + 8], VJ = UJ[eJ + 9], KJ = UJ[eJ + 10], yJ = UJ[eJ + 11], JJ[cJ + 8] = XJ * EJ + YJ * VJ + nJ * KJ + rJ * yJ, JJ[cJ + 9] = AJ * EJ + hJ * VJ + GJ * KJ + vJ * yJ, JJ[cJ + 10] = qJ * EJ + DJ * VJ + fJ * KJ + mJ * yJ, JJ[cJ + 11] = jJ * EJ + sJ * VJ + xJ * KJ + QJ * yJ, EJ = UJ[eJ + 12], VJ = UJ[eJ + 13], KJ = UJ[eJ + 14], yJ = UJ[eJ + 15], JJ[cJ + 12] = XJ * EJ + YJ * VJ + nJ * KJ + rJ * yJ, JJ[cJ + 13] = AJ * EJ + hJ * VJ + GJ * KJ + vJ * yJ, JJ[cJ + 14] = qJ * EJ + DJ * VJ + fJ * KJ + mJ * yJ, JJ[cJ + 15] = jJ * EJ + sJ * VJ + xJ * KJ + QJ * yJ
          }(FJ, 0, YJ(JJ, cJ), 0, AJ(JJ), 0), JJ._vpVer = ZJ, JJ._vpAspect = cJ, FJ
        }(FJ, UJ),
        XJ = AJ(FJ),
        qJ = FJ.worldMatrix;
      VJ(JJ, eJ, 0), VJ(JJ, XJ, 16), cJ.useFloatingOrigin ? (JJ[32] = 0, JJ[33] = 0, JJ[34] = 0) : (JJ[32] = qJ[12], JJ[33] = qJ[13], JJ[34] = qJ[14]), JJ[87] = cJ.canvas.width;
      const hJ = ZJ.imageProcessing;
      JJ[76] = hJ.exposure, JJ[77] = hJ.contrast, JJ[78] = ZJ._envTextures?.lodGenerationScale ?? .8, JJ[79] = +hJ.toneMappingEnabled, JJ[37] = cJ.canvas.height
    }

    function yJ(JJ, cJ) {
      return {
        _renderables: JJ,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: cJ
      }
    }

    function SJ(JJ, cJ, ZJ) {
      JJ.clr ??= !0;
      const UJ = JJ.rt._descriptor,
        eJ = JJ.depth?._descriptor,
        qJ = {
          _colorFormat: UJ.format,
          _depthStencilFormat: eJ?.dFormat ?? UJ.dFormat,
          _depthCompare: UJ.depthCompare ?? eJ?.depthCompare,
          _sampleCount: UJ.samples
        },
        YJ = {
          loadOp: "clear",
          storeOp: "store"
        },
        hJ = {
          ...yJ([], -1),
          name: JJ.name,
          _config: JJ,
          _ownsTargets: !JJ.sharedRt,
          engine: cJ,
          iG: ZJ,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [YJ]
          },
          _colorAttachment: YJ,
          _sceneUBO: DJ(cJ, 368),
          _suData: new XJ.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: qJ,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (hJ._disposed) throw new Error("RenderTask has been disposed.");
            hJ._recordExplicit ? hJ._recordExplicit(hJ, !0) : bJ(hJ, !1 !== JJ.autoMirror ? ZJ._renderables.slice() : hJ._renderables, !0)
          },
          execute: () => function(JJ, cJ, ZJ) {
            if (!1 === JJ.enabled) return 0;
            const FJ = JJ.iG;
            ! function(JJ, cJ, ZJ) {
              const FJ = JJ.iG;
              !1 !== JJ._config.autoMirror && JJ._lastVersion !== FJ._renderableVersion && bJ(JJ, FJ._renderables.slice());
              WJ(JJ, cJ);
              const UJ = JJ._updateContext,
                eJ = JJ._config.cam ?? FJ.camera;
              ZJ._colorFormat && (JJ._config._skipClusteredLights || FJ._clusteredLightUpdater?.(eJ, UJ.targetWidth, UJ.targetHeight), function(JJ, cJ) {
                const ZJ = EJ(JJ, cJ),
                  FJ = mJ(cJ.lights) + (JJ._lightFoVersion?.(cJ) ?? 0),
                  UJ = cJ._lightListVersion ?? 0;
                FJ === ZJ.nH && UJ === ZJ._listVersion && cJ.lights.length === ZJ._lightCount || (ZJ.nH = FJ, ZJ._listVersion = UJ, ZJ._lightCount = cJ.lights.length, QJ(ZJ._scratch, cJ.lights), JJ._applyLightFoOffset?.(ZJ._scratch, cJ), JJ._device.queue.writeBuffer(ZJ._buffer, 0, ZJ._scratch)), ZJ._buffer
              }(cJ, FJ));
              (function(JJ, cJ, ZJ, FJ) {
                if (!FJ) return;
                const UJ = FJ.viewport,
                  eJ = JJ._config.rt,
                  XJ = (JJ._config.cs ? cJ.canvas.width / cJ.canvas.height : eJ._width / eJ._height) * (UJ ? UJ.width / UJ.height : 1),
                  AJ = ZJ.fog,
                  qJ = ZJ.imageProcessing,
                  YJ = jJ(FJ),
                  hJ = ZJ._envTextures,
                  DJ = JJ._sceneUboCacheKey;
                if (DJ[0] === FJ && DJ[1] === AJ && DJ[2] === YJ && DJ[3] === XJ && DJ[4] === qJ.exposure && DJ[5] === qJ.contrast && DJ[6] === hJ) return;
                DJ[0] = FJ, DJ[1] = AJ, DJ[2] = YJ, DJ[3] = XJ, DJ[4] = qJ.exposure, DJ[5] = qJ.contrast, DJ[6] = hJ;
                const sJ = JJ._suData;
                KJ(sJ, cJ, ZJ, FJ, XJ);
                const nJ = ZJ._sceneUboContributors;
                if (nJ)
                  for (const jJ of nJ) jJ(sJ, ZJ);
                cJ._device.queue.writeBuffer(JJ._sceneUBO, 0, sJ)
              })(JJ, cJ, FJ, eJ), UJ.EL = eJ, JJ._batchState?._reset(), gJ(JJ._opaqueBindings, UJ), gJ(JJ._directBindings, UJ), gJ(JJ._transparentBindings, UJ), JJ._batchState?._flush(cJ),
                function(JJ, cJ) {
                  const ZJ = JJ._transparentBindings;
                  if (ZJ.length <= 1 || !cJ) return;
                  const FJ = AJ(cJ);
                  for (const UJ of ZJ) {
                    const JJ = UJ.renderable._worldCenter;
                    UJ._sortDistance = JJ ? JJ[0] * FJ[2] + JJ[1] * FJ[6] + JJ[2] * FJ[10] + FJ[14] : 0
                  }
                  ZJ.sort(IJ)
                }(JJ, eJ)
            }(JJ, cJ, ZJ);
            const UJ = JJ._colorAttachment,
              eJ = JJ._config;
            eJ.rt._colorView && (eJ.rt === FJ.surface.scRT && (UJ.view = eJ.rt._colorView), UJ.resolveTarget = eJ.rst?._colorView ?? void 0, UJ.clearValue = eJ.clrColor ?? FJ.clearColor, UJ.loadOp = eJ.clr ? "clear" : "load");
            if (JJ._executeWithTransmission) return JJ._executeWithTransmission(ZJ._sampleCount);
            const XJ = cJ._currentEncoder.beginRenderPass(JJ._renderPassDescriptor),
              qJ = wJ(JJ, XJ);
            return XJ.end(), qJ
          }(hJ, cJ, qJ),
          dispose() {
            if (hJ._disposed) return;
            hJ._disposed = !0;
            const cJ = hJ._pendingMeshes;
            cJ && (cJ.length = 0);
            for (const JJ of hJ._renderables) hJ._retireRenderable?.(hJ.engine, JJ);
            hJ._passes.length = hJ._opaqueBindings.length = hJ._directBindings.length = 0, hJ._transparentBindings.length = hJ._renderables.length = hJ._ob.length = 0, hJ._ownsTargets && ((0, FJ.g)(JJ.rt), (0, FJ.g)(JJ.rst)), JJ.depth?._eager || (0, FJ.g)(JJ.depth);
            const ZJ = hJ._sceneUBO;
            (0, sJ.b)(hJ.engine, (() => ZJ.destroy())), hJ._batchState?._release(hJ.engine), hJ._batchState = void 0
          }
        };
      return hJ
    }

    function IJ(JJ, cJ) {
      return cJ._sortDistance - JJ._sortDistance || JJ.renderable.order - cJ.renderable.order
    }

    function MJ(JJ, cJ) {
      return JJ.renderable.order - cJ.renderable.order
    }

    function bJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ._renderables,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        UJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        eJ = arguments.length > 4 ? arguments[4] : void 0;
      const XJ = JJ._config,
        AJ = XJ.rt,
        qJ = JJ._batchState,
        jJ = yJ(cJ, JJ.iG._renderableVersion);
      if (ZJ) {
        const cJ = (cJ, ZJ) => {
          cJ && (ZJ || JJ._ownsTargets || cJ._eager) && (0, FJ.f)(cJ, JJ.engine)
        };
        cJ(AJ), AJ._descriptor.samples > 1 && cJ(XJ.rst), cJ(XJ.depth, !0)
      }
      const {
        _opaqueBindings: YJ,
        _directBindings: hJ,
        _transparentBindings: DJ
      } = jJ;
      try {
        for (const ZJ of cJ) {
          const cJ = ZJ.bind(JJ.engine, JJ._targetSignature);
          jJ._batchState = JJ._targetSignature._collectBatches?.(jJ._batchState, cJ), ZJ.isTransparent || ZJ._transmissive ? DJ.push(cJ) : ZJ._direct ? hJ.push(cJ) : YJ.push(cJ)
        }
        YJ.sort(MJ), hJ.sort(MJ), ZJ && WJ(JJ, JJ.engine, !1)
      } catch (sJ) {
        throw jJ._batchState?._release(void 0, eJ ?? [qJ]), sJ
      }
      return ZJ && (! function(JJ, cJ) {
        const ZJ = JJ._config,
          FJ = JJ._colorAttachment;
        FJ.view = cJ._colorView, JJ._renderPassDescriptor.colorAttachments = cJ._colorView ? [FJ] : [];
        const UJ = ZJ.depth ?? cJ,
          eJ = UJ._depthView;
        let XJ;
        if (eJ) {
          const JJ = UJ._descriptor,
            cJ = (ZJ.depth ? UJ._eager : !1 === ZJ.depthClear) ? "load" : "clear";
          XJ = {
            view: eJ,
            depthClearValue: JJ.depthClearValue ?? 0,
            depthLoadOp: cJ,
            depthStoreOp: "store"
          }, JJ.dFormat?.includes("stencil") && (XJ.stencilClearValue = 0, XJ.stencilLoadOp = cJ, XJ.stencilStoreOp = "store")
        }
        JJ._renderPassDescriptor.depthStencilAttachment = XJ
      }(JJ, AJ), JJ._updateContext.targetWidth = AJ._width, JJ._updateContext.targetHeight = AJ._height), UJ && (Object.assign(JJ, jJ), qJ?._release(JJ.engine, [jJ._batchState])), jJ
    }

    function wJ(JJ, cJ) {
      const ZJ = JJ.engine,
        FJ = JJ._config,
        eJ = FJ.rt,
        XJ = JJ.iG,
        AJ = JJ._opaqueBindings,
        qJ = JJ._ob,
        jJ = JJ._sceneBG;
      if (function(JJ, cJ, ZJ, FJ) {
          const UJ = cJ?.viewport;
          if (!UJ) return;
          const eJ = Math.floor(UJ.x * ZJ),
            XJ = Math.floor((1 - UJ.y - UJ.height) * FJ),
            AJ = Math.ceil((UJ.x + UJ.width) * ZJ) - eJ,
            qJ = Math.ceil((1 - UJ.y) * FJ) - XJ;
          JJ.setViewport(eJ, XJ, AJ, qJ, 0, 1), JJ.setScissorRect(eJ, XJ, AJ, qJ)
        }(cJ, FJ.cam ?? XJ.camera, eJ._width, eJ._height), cJ.setBindGroup(0, jJ), JJ._lastVis !== UJ.b || !qJ.length) {
        const cJ = eJ._descriptor,
          FJ = ZJ._device.createRenderBundleEncoder({
            colorFormats: cJ.format ? [cJ.format] : [],
            depthStencilFormat: JJ._targetSignature._depthStencilFormat,
            sampleCount: cJ.samples
          });
        FJ.setBindGroup(0, jJ), HJ(FJ, AJ, ZJ), qJ[0] = FJ.finish(), JJ._lastVis = UJ.b
      }
      let YJ = AJ.length;
      return cJ.executeBundles(qJ), cJ.setBindGroup(0, jJ), YJ += HJ(cJ, JJ._directBindings, ZJ), YJ += HJ(cJ, JJ._transparentBindings, ZJ), YJ
    }

    function WJ(JJ, cJ) {
      let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const FJ = EJ(cJ, JJ.iG)._buffer;
      if (FJ === JJ._lightsUBO) return;
      const UJ = cJ._device.createBindGroup({
        layout: GJ(cJ),
        entries: [{
          binding: 0,
          resource: {
            buffer: JJ._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: FJ
          }
        }]
      });
      JJ._lightsUBO = FJ, JJ._sceneBG = UJ, ZJ && (JJ._ob = [])
    }

    function gJ(JJ, cJ) {
      for (const ZJ of JJ) ZJ.update?.(cJ)
    }

    function HJ(JJ, cJ, ZJ) {
      let FJ = null,
        UJ = 0;
      for (const eJ of cJ) {
        const cJ = eJ.renderable.mesh;
        cJ && !1 === cJ.visible || (eJ.pipeline !== FJ && (JJ.setPipeline(eJ.pipeline), FJ = eJ.pipeline), UJ += eJ.draw(JJ, ZJ))
      }
      return UJ
    }

    function PJ(JJ) {
      const cJ = JJ._materialSwapQueue;
      if (!cJ[0] || JJ._runtimeBuilds?.w) return;
      let FJ, UJ, eJ;
      const XJ = JJ._renderables;
      for (const ZJ of cJ) {
        const cJ = ZJ.material;
        if (!cJ) continue;
        const AJ = ZJ._runtimeThinBuild;
        if (AJ) {
          UJ = AJ(JJ, ZJ, UJ);
          continue
        }
        const qJ = JJ._groups.get(cJ._buildGroup),
          jJ = qJ?.r;
        if (!jJ) {
          (eJ ??= []).push(ZJ);
          continue
        }
        if (qJ._w?.(ZJ)) {
          (eJ ??= []).push([ZJ, cJ]);
          continue
        }
        const YJ = JJ._meshDisposables.get(ZJ);
        YJ && (JJ._meshDisposables.delete(ZJ), (0, sJ.b)(JJ.surface.engine, (() => YJ.forEach((JJ => JJ())))));
        const hJ = qJ.o;
        let DJ;
        for (let JJ = XJ.length; JJ--;) XJ[JJ].mesh === ZJ && (DJ = XJ.splice(JJ, 1)[0]);
        cJ._csmGen = -~cJ._csmGen;
        const nJ = jJ(JJ, ZJ);
        if (hJ) {
          const JJ = hJ.indexOf(DJ);
          JJ < 0 ? hJ.push(nJ) : hJ[JJ] = nJ
        }
        FJ = XJ.push(nJ)
      }
      if (FJ && (XJ.sort(((JJ, cJ) => JJ.order - cJ.order)), JJ._renderableVersion++, JJ._materialEpoch++), cJ.length = 0, !eJ) return UJ;
      const AJ = eJ;
      return ZJ.e(345).then((() => ZJ(59514))).then((cJ => {
        let {
          C: ZJ
        } = cJ;
        return ZJ(JJ, AJ, UJ)
      }), (cJ => {
        const ZJ = JJ._runtimeBuilds;
        ZJ ? ZJ._x(cJ) : console.error(cJ)
      }))
    }
    var kJ = null;

    function pJ(JJ, cJ) {
      const ZJ = JJ.engine,
        UJ = {
          _kind: "iG",
          surface: JJ,
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
            ZJ.useFloatingOrigin && UJ.camera && !UJ.camera._useFloatingOrigin && (UJ.camera._useFloatingOrigin = !0, UJ.camera._viewVer = -1, UJ.camera._vpVer = -1);
            const JJ = UJ.fixedDeltaMs > 0 ? UJ.fixedDeltaMs : ZJ._currentDelta,
              cJ = ZJ._currentEncoder;
            let FJ = 0;
            for (const ZJ of UJ._beforeRender) ZJ(JJ);
            UJ._materialSwapQueue.length && PJ(UJ);
            for (const eJ of UJ._prePasses) FJ += eJ.execute(cJ, ZJ);
            for (const eJ of UJ._uniformUpdaters) eJ.update(ZJ);
            UJ._drawCallsPre = FJ
          },
          _record: () => UJ._frameGraph.execute(),
          _resize() {
            UJ._frameGraph.build()
          }
        },
        XJ = function() {
          const JJ = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let cJ = 0; cJ < JJ._tasks.length; cJ++) eJ(JJ, JJ._tasks[cJ]);
              for (const cJ of JJ._tasks)
                for (const JJ of cJ._passes) JJ._initialize()
            },
            execute() {
              let cJ = 0;
              for (const ZJ of JJ._tasks)
                if (!1 !== ZJ.executionEnabled)
                  if (ZJ.execute) cJ += ZJ.execute();
                  else
                    for (const JJ of ZJ._passes) cJ += JJ._execute();
              return cJ
            },
            dispose() {
              for (const cJ of JJ._tasks) cJ.dispose();
              JJ._tasks.length = 0, JJ._currentProcessedTask = null
            }
          };
          return JJ
        }();
      if (UJ._frameGraph = XJ, !1 !== cJ?.defaultRenderTask) {
        const cJ = JJ.msaaSamples > 1,
          eJ = cJ ? (0, FJ.e)({
            lbl: "scene-color",
            format: JJ.format,
            dFormat: "depth24plus-stencil8",
            samples: JJ.msaaSamples,
            size: JJ
          }) : JJ.scRT,
          AJ = cJ ? void 0 : (0, FJ.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: JJ
          });
        ! function(JJ, cJ) {
          JJ._tasks.push(cJ)
        }(XJ, SJ({
          name: "iG",
          rt: eJ,
          rst: cJ ? JJ.scRT : void 0,
          depth: AJ
        }, ZJ, UJ))
      }
      return UJ._disposables.push((() => XJ.dispose())), UJ
    }
    async function dJ(JJ) {
      const cJ = JJ;
      for (cJ._built || (cJ._materialSwapQueue.length = 0); cJ._deferredBuilders.length;) {
        const JJ = cJ._deferredBuilders.splice(0);
        await Promise.all(JJ.map((JJ => JJ())))
      }
      await PJ(cJ), kJ?.get(cJ)?.() || (cJ._runtimeBuilds?._e(), cJ._renderableVersion++, cJ._built = !0), await (cJ._rebuildHook?.(cJ))
    }
    var zJ = null;
    async function NJ(JJ) {
      const cJ = JJ,
        FJ = cJ.surface;
      (0, UJ.j)(FJ, cJ) || (await dJ(JJ), cJ._renderables.sort(OJ), await Promise.all(cJ._frameGraph._tasks.map((JJ => JJ._preload?.()))), zJ && await zJ(cJ), cJ._frameGraph.build(), FJ._renderingContexts[0] && (await ZJ.e(343).then((() => ZJ(59504)))).configureSwapchainOverlayScene(FJ, cJ), kJ?.get(cJ)?.() || (0, UJ.l)(FJ, cJ))
    }
    var OJ = (JJ, cJ) => JJ.order - cJ.order
  },
  40425: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ,
      h: () => YJ
    });
    var FJ = ZJ(40373),
      UJ = ZJ(40382),
      eJ = ZJ(40390),
      XJ = ZJ(40399),
      AJ = ZJ(40403),
      qJ = ZJ(40408);

    function jJ(JJ, cJ, ZJ) {
      let AJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (cJ < 1 || ZJ < 1) && (0, FJ.c)(676, cJ, ZJ);
      const jJ = JJ._device,
        YJ = AJ.mipMaps ?? !1,
        hJ = AJ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        DJ = YJ ? (0, qJ.d)(cJ, ZJ) : 1,
        sJ = jJ.createTexture({
          size: {
            width: cJ,
            height: ZJ
          },
          format: hJ,
          mipLevelCount: DJ,
          usage: UJ.g.TEXTURE_BINDING | UJ.g.COPY_DST | UJ.g.RENDER_ATTACHMENT
        }),
        nJ = {
          addressModeU: AJ.addressModeU ?? "clamp-to-edge",
          addressModeV: AJ.addressModeV ?? "clamp-to-edge",
          minFilter: AJ.minFilter ?? "linear",
          magFilter: AJ.magFilter ?? "linear",
          mipmapFilter: YJ ? "linear" : "nearest"
        },
        GJ = (0, XJ.c)(JJ, nJ),
        fJ = {
          texture: sJ,
          view: sJ.createView(),
          sampler: GJ,
          width: cJ,
          height: ZJ
        };
      return (0, eJ.c)(fJ), JJ._dlr && JJ._dlr.t(fJ, {
        kind: "dynamic",
        width: cJ,
        height: ZJ,
        format: hJ,
        levels: DJ,
        samplerDesc: nJ,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), fJ
    }

    function YJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const UJ = FJ.invertY ?? !0,
        eJ = FJ.premultiplyAlpha ?? !1;
      JJ._device.queue.copyExternalImageToTexture({
        source: ZJ,
        flipY: UJ
      }, {
        texture: cJ.texture,
        premultipliedAlpha: eJ
      }, [cJ.width, cJ.height]);
      const XJ = cJ._recoverySource;
      XJ && "dynamic" === XJ.kind && (XJ.source = ZJ, XJ.flipY = UJ, XJ.premultipliedAlpha = eJ), cJ.texture.mipLevelCount > 1 && (0, AJ.generateMipmaps)(JJ, cJ.texture)
    }
  },
  40421: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ
    });
    var FJ = ZJ(40373),
      UJ = ZJ(40382),
      eJ = ZJ(40390),
      XJ = ZJ(40399),
      AJ = ZJ(40408);
    async function qJ(JJ, cJ) {
      let qJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [jJ, YJ] = function(JJ) {
        const cJ = JJ,
          ZJ = [
            [cJ.displayWidth, cJ.displayHeight],
            [cJ.videoWidth, cJ.videoHeight],
            [cJ.naturalWidth, cJ.naturalHeight],
            [cJ.width, cJ.height]
          ];
        for (const [FJ, UJ] of ZJ)
          if (void 0 !== FJ && void 0 !== UJ && Number.isInteger(FJ) && Number.isInteger(UJ) && FJ > 0 && UJ > 0) return [FJ, UJ];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(cJ), [hJ, DJ] = function(JJ, cJ, ZJ) {
        if (void 0 === ZJ) return [JJ, cJ];
        if (!Number.isInteger(ZJ) || ZJ < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ZJ})`);
        if (Math.max(JJ, cJ) <= ZJ) return [JJ, cJ];
        const FJ = ZJ / Math.max(JJ, cJ);
        return JJ >= cJ ? [ZJ, Math.max(1, Math.round(cJ * FJ))] : [Math.max(1, Math.round(JJ * FJ)), ZJ]
      }(jJ, YJ, qJ.maxDimension), sJ = qJ.mipMaps ?? !0, nJ = qJ.premultiplyAlpha ?? !1;
      let GJ = cJ,
        fJ = null;
      const xJ = {
        texture: null
      };
      try {
        hJ === jJ && DJ === YJ || (fJ = await createImageBitmap(cJ, {
          resizeWidth: hJ,
          resizeHeight: DJ,
          resizeQuality: "high",
          premultiplyAlpha: nJ ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), GJ = fJ);
        const rJ = JJ._device,
          vJ = qJ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          mJ = sJ ? (0, AJ.d)(hJ, DJ) : 1,
          QJ = mJ > 1 ? (await Promise.resolve().then((() => ZJ(40403)))).generateMipmaps : null,
          EJ = {
            addressModeU: qJ.addressModeU ?? "repeat",
            addressModeV: qJ.addressModeV ?? "repeat",
            minFilter: qJ.minFilter ?? "linear",
            magFilter: qJ.magFilter ?? "linear",
            mipmapFilter: sJ ? "linear" : "nearest"
          };
        EJ.maxAnisotropy = "linear" === EJ.minFilter && "linear" === EJ.magFilter && "linear" === EJ.mipmapFilter ? 4 : 1;
        const VJ = qJ.invertY ?? !0,
          KJ = async cJ => {
            let ZJ;
            rJ.pushErrorScope("validation"), rJ.pushErrorScope("out-of-memory");
            let eJ = null;
            try {
              const ZJ = xJ.texture = rJ.createTexture({
                size: {
                  width: hJ,
                  height: DJ
                },
                format: vJ,
                mipLevelCount: mJ,
                usage: UJ.g.TEXTURE_BINDING | UJ.g.COPY_DST | UJ.g.RENDER_ATTACHMENT
              });
              rJ.queue.copyExternalImageToTexture({
                source: cJ,
                flipY: VJ
              }, {
                texture: ZJ,
                premultipliedAlpha: nJ
              }, {
                width: hJ,
                height: DJ
              }), QJ && QJ(JJ, ZJ), eJ = (0, XJ.c)(JJ, EJ)
            } catch (sJ) {
              ZJ = sJ
            }
            const [AJ, qJ] = await Promise.all([rJ.popErrorScope(), rJ.popErrorScope()]);
            if (ZJ) throw ZJ;
            const jJ = qJ ?? AJ;
            if (jJ) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${jJ.message}`, {
              cause: jJ
            });
            const YJ = xJ.texture;
            return YJ && eJ || (0, FJ.c)(677), {
              texture: YJ,
              view: YJ.createView(),
              sampler: eJ,
              width: hJ,
              height: DJ
            }
          }, yJ = await (JJ._dlr?.x(GJ, hJ, DJ, vJ, mJ, EJ, VJ, nJ, KJ)) ?? await KJ(GJ);
        return (0, eJ.c)(yJ), yJ
      } catch (rJ) {
        throw xJ.texture?.destroy(), rJ
      } finally {
        fJ?.close()
      }
    }
  },
  40403: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      generateMipmaps: () => sJ,
      recordMipmaps: () => nJ
    });
    var FJ = ZJ(40382),
      UJ = ZJ(40399),
      eJ = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var XJ = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      AJ = null,
      qJ = null,
      jJ = null,
      YJ = null,
      hJ = null;

    function DJ(JJ) {
      const cJ = JJ._device;
      cJ !== hJ && (AJ?.clear(), AJ = null, qJ = null, jJ = null, YJ = null, hJ = null, hJ = cJ), qJ ??= cJ.createShaderModule({
        code: XJ
      }), jJ ??= function(JJ) {
        return (0, UJ.c)(JJ, eJ)
      }(JJ), YJ ??= cJ.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: FJ.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: FJ.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function sJ(JJ, cJ, ZJ) {
      const FJ = JJ._device,
        UJ = FJ.createCommandEncoder();
      nJ(JJ, cJ, UJ, ZJ), FJ.queue.submit([UJ.finish()])
    }

    function nJ(JJ, cJ, ZJ, FJ) {
      if (cJ.mipLevelCount <= 1) return;
      const UJ = JJ._device,
        eJ = function(JJ, cJ) {
          const ZJ = JJ._device;
          DJ(JJ), AJ ??= new Map;
          let FJ = AJ.get(cJ);
          return FJ || (FJ = ZJ.createRenderPipeline({
            layout: ZJ.createPipelineLayout({
              bindGroupLayouts: [YJ]
            }),
            vertex: {
              module: qJ,
              entryPoint: "vs"
            },
            fragment: {
              module: qJ,
              entryPoint: "fs",
              targets: [{
                format: cJ
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), AJ.set(cJ, FJ)), FJ
        }(JJ, cJ.format),
        XJ = null != FJ ? {
          dimension: "2d",
          baseArrayLayer: FJ,
          arrayLayerCount: 1
        } : {};
      for (let AJ = 1; AJ < cJ.mipLevelCount; AJ++) {
        const JJ = cJ.createView({
            baseMipLevel: AJ - 1,
            mipLevelCount: 1,
            ...XJ
          }),
          FJ = cJ.createView({
            baseMipLevel: AJ,
            mipLevelCount: 1,
            ...XJ
          }),
          qJ = UJ.createBindGroup({
            layout: YJ,
            entries: [{
              binding: 0,
              resource: JJ
            }, {
              binding: 1,
              resource: jJ
            }]
          }),
          hJ = ZJ.beginRenderPass({
            colorAttachments: [{
              view: FJ,
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
        hJ.setPipeline(eJ), hJ.setBindGroup(0, qJ), hJ.draw(3), hJ.end()
      }
    }
  },
  40408: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return Math.floor(Math.log2(Math.max(JJ, cJ))) + 1
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  40364: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      d: () => YJ
    });
    var FJ = ZJ(40373),
      UJ = ZJ(40382),
      eJ = ZJ(40390),
      XJ = ZJ(40399),
      AJ = ZJ(40403),
      qJ = ZJ(40408);

    function jJ(JJ, cJ, ZJ, AJ) {
      let jJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (cJ < 1 || ZJ < 1 || AJ < 1) && (0, FJ.c)(722, cJ, ZJ, AJ);
      const YJ = JJ._device,
        hJ = jJ.mipMaps ?? !0,
        DJ = jJ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        sJ = YJ.createTexture({
          size: {
            width: cJ,
            height: ZJ,
            depthOrArrayLayers: AJ
          },
          dimension: "2d",
          format: DJ,
          mipLevelCount: hJ ? (0, qJ.d)(cJ, ZJ) : 1,
          usage: UJ.g.TEXTURE_BINDING | UJ.g.COPY_DST | UJ.g.RENDER_ATTACHMENT
        }),
        nJ = (0, XJ.c)(JJ, {
          addressModeU: jJ.addressModeU ?? "repeat",
          addressModeV: jJ.addressModeV ?? "repeat",
          minFilter: jJ.minFilter ?? "linear",
          magFilter: jJ.magFilter ?? "linear",
          mipmapFilter: hJ ? "linear" : "nearest"
        }),
        GJ = {
          texture: sJ,
          view: sJ.createView({
            dimension: "2d-array"
          }),
          sampler: nJ,
          width: cJ,
          height: ZJ,
          layers: AJ
        };
      return (0, eJ.c)(GJ), GJ
    }

    function YJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ZJ < 0 || ZJ >= cJ.layers || (0 | ZJ) !== ZJ) && (0, FJ.c)(723, cJ.layers, ZJ);
      const XJ = eJ.invertY ?? !0,
        qJ = eJ.premultiplyAlpha ?? !1;
      JJ._device.queue.copyExternalImageToTexture({
        source: UJ,
        flipY: XJ
      }, {
        texture: cJ.texture,
        origin: [0, 0, ZJ],
        premultipliedAlpha: qJ
      }, [cJ.width, cJ.height, 1]), cJ.texture.mipLevelCount > 1 && (0, AJ.generateMipmaps)(JJ, cJ.texture, ZJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);