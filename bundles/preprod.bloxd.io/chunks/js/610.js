export const id = 610;
export const ids = [610];
export const modules = {
  44394: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(44388),
      yU = zU(44400);

    function QU(UU) {
      (0, yU.e)(UU), (0, cU.n)(UU);
      const XU = UU._surfaces;
      for (const zU of XU) zU._renderingContexts.length = 0, zU._ro?.disconnect(), zU._context.unconfigure();
      XU.length = 0;
      try {
        UU._disposeManagedResources?.(), UU._disposeStorageBuffers?.()
      } finally {
        UU._device.destroy()
      }
    }
  },
  44388: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU,
      e: () => gU,
      g: () => IU,
      h: () => pU,
      j: () => BU,
      l: () => kU,
      n: () => GU
    });
    var cU = zU(44332);
    var yU = "Babylon Lite v1.32.0",
      QU = zU(44390);

    function AU(UU) {
      return "clientWidth" in UU
    }
    var FU = 1;

    function oU(UU, XU, zU) {
      const oU = XU.getContext("webgpu");
      oU || (0, cU.b)(54), AU(XU) && XU.setAttribute("data-engine", yU);
      const DU = zU?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        EU = zU?.srgb ? (YU = DU).endsWith("-srgb") ? YU : `${YU}-srgb` : DU;
      var YU;
      const NU = zU?.alphaMode ?? "opaque";
      oU.configure({
        device: UU._device,
        format: DU,
        alphaMode: NU,
        viewFormats: [EU]
      });
      const IU = 1 === zU?.msaaSamples ? 1 : 4,
        pU = (0, QU.d)({
          lbl: "swapchain",
          format: EU,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return pU._eager = !0, {
        engine: UU,
        canvas: XU,
        format: EU,
        msaaSamples: IU,
        scRT: pU,
        maxDevicePixelRatio: zU?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: FU++,
        _context: oU,
        _configureFormat: DU,
        _alphaMode: NU,
        _renderingContexts: []
      }
    }

    function DU(UU) {
      const XU = UU._context.getCurrentTexture(),
        zU = UU.scRT;
      zU._colorTexture = XU, zU._colorView = XU.createView({
        format: UU.format
      }), zU._width = XU.width, zU._height = XU.height
    }

    function EU(UU) {
      const XU = UU.canvas;
      if (!AU(XU)) return;
      const zU = UU._w ?? XU.clientWidth,
        cU = UU._h ?? XU.clientHeight;
      if (!(zU > 0 && cU > 0)) return;
      const yU = Math.min(globalThis.devicePixelRatio || 1, UU.maxDevicePixelRatio);
      YU(UU, zU * yU | 0, cU * yU | 0)
    }

    function YU(UU, XU, zU) {
      const cU = UU.canvas,
        yU = 0 | XU,
        QU = 0 | zU;
      if (yU > 0 && QU > 0 && (yU !== cU.width || QU !== cU.height)) {
        cU.width = yU, cU.height = QU, UU.scRT._width = yU, UU.scRT._height = QU;
        for (const XU of UU._renderingContexts) XU._resize?.()
      }
    }
    var NU = 0;

    function IU(UU, XU) {
      return -1 !== UU._renderingContexts.indexOf(XU)
    }

    function pU(UU, XU) {
      return -1 === UU._renderingContexts.indexOf(XU) && (UU._renderingContexts.push(XU), !0)
    }
    var aU = null;
    var tU = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function gU(UU, XU) {
      const QU = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...aU ? aU() : {}
      });
      QU || (0, cU.b)(47);
      const AU = aU?.deviceFeatures?.(QU, XU) ?? function(UU) {
          return tU.filter((XU => UU.features.has(XU)))
        }(QU),
        FU = await QU.requestDevice({
          requiredFeatures: AU,
          requiredLimits: XU?.requiredLimits
        });
      console.log(`${yU} - WebGPU engine`);
      const YU = !!XU?.useHighPrecisionMatrix,
        NU = !!XU?.useFloatingOrigin;
      if (NU && !YU && (0, cU.b)(48), YU) {
        const {
          allocateF64Mat4: UU
        } = await zU.e(662).then((() => zU(64010)));
        0
      }
      let IU, pU, gU, kU;
      if (NU) {
        const [{
          wrapRenderableForFO: UU,
          lightFoVersion: XU,
          applyLightFoOffset: cU
        }, {
          makePackMeshWorld: yU
        }] = await Promise.all([zU.e(663).then((() => zU(64017))), zU.e(664).then((() => zU(64021)))]);
        IU = UU, pU = yU, gU = XU, kU = cU
      }
      const GU = {
          _device: FU
        },
        BU = [GU];
      return Object.assign(GU, {
        engine: GU,
        surfaces: BU,
        _surfaces: BU,
        _device: FU,
        _options: XU,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: YU,
        useFloatingOrigin: NU,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: IU,
        _makePackMeshWorld: pU,
        _lightFoVersion: gU,
        _applyLightFoOffset: kU
      }, oU(GU, UU, XU)), EU(GU), DU(GU), GU
    }

    function kU(UU, XU, zU) {
      YU(UU, XU, zU)
    }

    function GU(UU) {
      UU._animFrameId && cancelAnimationFrame(UU._animFrameId), UU._animFrameId = 0, UU._renderFn = null, UU._flushGpuRetirements?.(UU)
    }

    function BU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.surfaces;
      if (zU !== UU.surfaces)
        for (let yU = zU.length; yU--;) zU[yU].engine !== UU && (0, cU.b)(49);
      ZU(UU, XU, zU)
    }

    function ZU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU._surfaces,
        cU = 0;
      for (let QU = zU.length; QU--;) cU += zU[QU]._renderingContexts.length;
      if (!cU) return UU.drawCallCount = 0, UU._flushGpuRetirements?.(UU);
      const yU = UU._device.createCommandEncoder({
        label: "frame"
      });
      UU._currentEncoder = yU, UU._currentDelta = XU;
      try {
        UU._gpuTimerBegin?.(yU), cU = 0;
        for (let UU = 0; UU < zU.length; UU++) {
          const XU = zU[UU];
          XU._capturePreFrame?.(XU), DU(XU);
          const yU = XU._renderingContexts;
          for (let UU = 0; UU < yU.length; UU++) {
            const XU = yU[UU];
            XU._update(), cU += XU._drawCallsPre + XU._record()
          }
        }
        const XU = UU._currentEncoder;
        for (let UU = 0; UU < zU.length; UU++) {
          const cU = zU[UU];
          cU._captureService?.(cU, XU)
        }
        UU._gpuTimerEnd?.(XU), UU._cbs[0] = XU.finish(), UU._device.queue.submit(UU._cbs), UU._flushGpuRetirements?.(UU), UU.drawCallCount = cU, UU._gpuTimerResolve?.()
      } finally {
        UU._currentEncoder = void 0
      }
    }
  },
  44338: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      e: () => QU,
      f: () => cU
    });
    var cU = globalThis.GPUTextureUsage,
      yU = globalThis.GPUBufferUsage,
      QU = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  44400: (UU, XU, zU) => {
    function cU(UU) {
      yU(UU.splice(0))
    }

    function yU(UU) {
      for (const zU of UU) try {
        zU()
      } catch (XU) {
        console.error("GPU resource retirement failed.", XU)
      }
    }

    function QU(UU, XU) {
      UU._flushGpuRetirements ??= AU, (UU._retirements ??= []).push(XU)
    }

    function AU(UU) {
      const XU = UU._retirements;
      if (!XU) return;
      UU._retirements = null;
      const zU = UU._retiring ??= new Set;
      zU.add(XU), queueMicrotask((() => {
        UU._device.queue.onSubmittedWorkDone().then((() => {
          zU.delete(XU), cU(XU)
        })).catch((() => {}))
      }))
    }

    function FU(UU) {
      const XU = UU._retirements,
        zU = UU._retiring;
      UU._retirements = null, UU._retiring = null, XU && cU(XU), zU?.forEach(cU)
    }
    zU.d(XU, {
      e: () => FU,
      h: () => QU
    })
  },
  44390: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU,
      l: () => FU
    });
    var cU = zU(44338);

    function yU(UU) {
      const XU = UU.size;
      return "canvas" in XU ? XU.canvas : XU
    }

    function QU(UU) {
      return {
        _descriptor: UU,
        _resolveSize: yU,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function AU(UU, XU) {
      if (UU._eager) return void UU._syncEager?.(XU);
      FU(UU);
      const zU = UU._descriptor,
        {
          width: QU,
          height: AU
        } = (UU._resolveSize ?? yU)(zU);
      UU._width = QU, UU._height = AU;
      const oU = XU._device;
      zU.format && (UU._colorTexture = oU.createTexture({
        label: zU.lbl,
        size: {
          width: QU,
          height: AU
        },
        format: zU.format,
        sampleCount: zU.samples,
        usage: cU.f.RENDER_ATTACHMENT | cU.f.TEXTURE_BINDING | cU.f.COPY_SRC | cU.f.COPY_DST
      }), UU._colorView = UU._colorTexture.createView()), zU.dFormat && (UU._depthTexture = oU.createTexture({
        label: zU.lbl,
        size: {
          width: QU,
          height: AU
        },
        format: zU.dFormat,
        sampleCount: zU.samples,
        usage: cU.f.RENDER_ATTACHMENT | cU.f.TEXTURE_BINDING
      }), UU._depthView = UU._depthTexture.createView())
    }

    function FU(UU) {
      if (!UU || UU._eager && !UU._disposeAttachments) return;
      const XU = UU._colorTexture,
        zU = UU._depthTexture;
      if (UU._colorTexture = UU._depthTexture = null, UU._colorView = UU._depthView = null, UU._width = UU._height = 0, UU._disposeAttachments) UU._disposeAttachments(XU, zU);
      else try {
        XU?.destroy()
      } finally {
        !1 !== UU._ownsDepthTexture && zU?.destroy()
      }
    }
  },
  44417: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => yU,
      j: () => QU
    });
    var cU = Float32Array,
      yU = Float64Array,
      QU = Uint32Array
  },
  44423: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    var cU = 16
  },
  44332: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = null;

    function yU(UU) {
      for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), yU = 1; yU < XU; yU++) zU[yU - 1] = arguments[yU];
      const QU = new Error(cU?.(UU, zU) ?? `#${UU}`);
      throw QU.lite = zU, QU
    }
  },
  44369: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(44349);

    function yU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zU = XU.compare,
        yU = XU.lodMinClamp ?? 0,
        QU = XU.lodMaxClamp ?? 32,
        AU = void 0 !== zU || 0 !== yU || 32 !== QU ? `${zU??""}:${yU}:${QU}` : "";
      return (0, cU.e)(UU, XU, AU)
    }
  },
  44344: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = null;

    function yU(UU) {
      const XU = cU ??= new WeakMap;
      XU.set(UU, (XU.get(UU) ?? 0) + 1)
    }

    function QU(UU) {
      yU(UU.texture)
    }
  },
  44349: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = null,
      yU = "nearest",
      QU = "clamp-to-edge",
      AU = {
        minFilter: yU,
        magFilter: yU,
        mipmapFilter: yU,
        addressModeU: QU,
        addressModeV: QU,
        addressModeW: QU,
        maxAnisotropy: 1
      };

    function FU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const yU = UU._device,
        QU = cU ??= new WeakMap;
      let FU = QU.get(yU);
      FU || QU.set(yU, FU = new Map);
      let oU = zU;
      for (const cU in AU) {
        const UU = cU;
        oU += `:${XU[UU]??AU[UU]}`
      }
      let DU = FU.get(oU);
      return DU || FU.set(oU, DU = yU.createSampler(XU)), DU
    }
  },
  44409: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => iU,
      e: () => vU
    });
    var cU = zU(44390),
      yU = zU(44388);

    function QU(UU, XU) {
      XU._passes.length = 0, UU._currentProcessedTask = XU;
      try {
        XU.record()
      } finally {
        UU._currentProcessedTask = null
      }
    }
    var AU = zU(44417);

    function FU(UU) {
      const XU = UU.worldMatrixVersion;
      if (UU._viewVer === XU) return UU._viewCache;
      const zU = UU._viewCache,
        cU = UU.worldMatrix,
        yU = UU._useFloatingOrigin,
        QU = yU ? 0 : cU[12],
        AU = yU ? 0 : cU[13],
        FU = yU ? 0 : cU[14];
      return zU[0] = cU[0], zU[1] = cU[4], zU[2] = cU[8], zU[3] = 0, zU[4] = cU[1], zU[5] = cU[5], zU[6] = cU[9], zU[7] = 0, zU[8] = cU[2], zU[9] = cU[6], zU[10] = cU[10], zU[11] = 0, zU[12] = -(cU[0] * QU + cU[1] * AU + cU[2] * FU), zU[13] = -(cU[4] * QU + cU[5] * AU + cU[6] * FU), zU[14] = -(cU[8] * QU + cU[9] * AU + cU[10] * FU), zU[15] = 1, UU._viewVer = XU, zU
    }
    var oU = null;

    function DU(UU) {
      return UU._projFov === UU.fov && UU._projNear === UU.nearPlane && UU._projFar === UU.farPlane || (UU._projFov = UU.fov, UU._projNear = UU.nearPlane, UU._projFar = UU.farPlane, UU._projRev = (UU._projRev ?? 0) + 1), UU.worldMatrixVersion + (UU._projRev ?? 0)
    }

    function EU(UU, XU) {
      const zU = DU(UU);
      if (UU._projVer === zU && UU._projAspect === XU) return UU._projCache;
      const cU = UU._projCache;
      return null !== oU && UU.ortho ? oU(UU, XU, cU) : function(UU, XU, zU, cU, yU) {
        const QU = 1 / Math.tan(.5 * XU),
          AU = yU - cU;
        UU[0] = QU / zU, UU[5] = QU, UU[10] = -cU / AU, UU[11] = 1, UU[14] = yU * cU / AU
      }(cU, UU.fov, XU, UU.nearPlane, UU.farPlane), UU._projVer = zU, UU._projAspect = XU, cU
    }
    var YU = zU(44338);

    function NU(UU, XU, zU) {
      return UU._device.createBuffer({
        label: zU,
        size: (cU = XU, yU = 16, Math.ceil(cU / yU) * yU),
        usage: YU.b.UNIFORM | YU.b.COPY_DST
      });
      var cU, yU
    }
    var IU = zU(44400),
      pU = null;

    function aU(UU) {
      const XU = UU._device,
        zU = pU ??= new WeakMap;
      let cU = zU.get(XU);
      return cU || (cU = XU.createBindGroupLayout({
        label: "sa",
        entries: [{
          binding: 0,
          visibility: YU.e.VERTEX | YU.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: YU.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), zU.set(XU, cU)), cU
    }

    function tU(UU, XU, zU) {
      const cU = UU._device,
        yU = NU(UU, XU.byteLength, zU);
      try {
        cU.queue.writeBuffer(yU, 0, XU.buffer, XU.byteOffset, XU.byteLength)
      } catch (QU) {
        throw yU.destroy(), QU
      }
      return yU
    }
    var gU = zU(44423),
      kU = new AU.j(1),
      GU = new AU.d(kU.buffer);

    function BU(UU) {
      let XU = 0;
      for (const zU of UU) XU += zU._lightVersion ?? 0;
      return XU
    }

    function ZU(UU, XU) {
      UU.fill(0);
      let zU = 0;
      for (const cU of XU) {
        if (zU >= gU.b) break;
        cU._writeLightUbo && (cU._writeLightUbo(UU, 4 + 16 * zU), zU++)
      }
      kU[0] = zU, UU[0] = GU[0]
    }

    function RU(UU, XU) {
      let zU = XU._lightGpuState;
      const cU = 16 + 16 * gU.b * 4;
      if (zU && zU._byteSize === cU) return zU;
      const yU = !zU;
      zU?._buffer.destroy();
      const QU = new AU.d(cU / 4);
      return ZU(QU, XU.lights), UU._applyLightFoOffset?.(QU, XU), zU = {
        _buffer: tU(UU, QU),
        _scratch: QU,
        qm: BU(XU.lights) + (UU._lightFoVersion?.(XU) ?? 0),
        _listVersion: XU._lightListVersion ?? 0,
        _lightCount: XU.lights.length,
        _byteSize: cU
      }, XU._lightGpuState = zU, yU && XU._disposables.push((() => {
        XU._lightGpuState?._buffer.destroy(), XU._lightGpuState = void 0
      })), zU
    }

    function PU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const yU = XU;
      if (0 === cU && 16 === yU.length) return void UU.set(yU, zU);
      const QU = cU,
        AU = zU;
      UU[AU + 0] = yU[QU + 0], UU[AU + 1] = yU[QU + 1], UU[AU + 2] = yU[QU + 2], UU[AU + 3] = yU[QU + 3], UU[AU + 4] = yU[QU + 4], UU[AU + 5] = yU[QU + 5], UU[AU + 6] = yU[QU + 6], UU[AU + 7] = yU[QU + 7], UU[AU + 8] = yU[QU + 8], UU[AU + 9] = yU[QU + 9], UU[AU + 10] = yU[QU + 10], UU[AU + 11] = yU[QU + 11], UU[AU + 12] = yU[QU + 12], UU[AU + 13] = yU[QU + 13], UU[AU + 14] = yU[QU + 14], UU[AU + 15] = yU[QU + 15]
    }

    function WU(UU, XU, zU, cU, yU) {
      UU.fill(0);
      const QU = function(UU, XU) {
          const zU = DU(UU);
          if (UU._vpVer === zU && UU._vpAspect === XU) return UU._vpCache;
          const cU = UU._vpCache;
          return function(UU, XU, zU, cU, yU, QU) {
            const AU = zU[cU],
              FU = zU[cU + 1],
              oU = zU[cU + 2],
              DU = zU[cU + 3],
              EU = zU[cU + 4],
              YU = zU[cU + 5],
              NU = zU[cU + 6],
              IU = zU[cU + 7],
              pU = zU[cU + 8],
              aU = zU[cU + 9],
              tU = zU[cU + 10],
              gU = zU[cU + 11],
              kU = zU[cU + 12],
              GU = zU[cU + 13],
              BU = zU[cU + 14],
              ZU = zU[cU + 15];
            let RU = yU[QU],
              PU = yU[QU + 1],
              WU = yU[QU + 2],
              dU = yU[QU + 3];
            UU[XU] = AU * RU + EU * PU + pU * WU + kU * dU, UU[XU + 1] = FU * RU + YU * PU + aU * WU + GU * dU, UU[XU + 2] = oU * RU + NU * PU + tU * WU + BU * dU, UU[XU + 3] = DU * RU + IU * PU + gU * WU + ZU * dU, RU = yU[QU + 4], PU = yU[QU + 5], WU = yU[QU + 6], dU = yU[QU + 7], UU[XU + 4] = AU * RU + EU * PU + pU * WU + kU * dU, UU[XU + 5] = FU * RU + YU * PU + aU * WU + GU * dU, UU[XU + 6] = oU * RU + NU * PU + tU * WU + BU * dU, UU[XU + 7] = DU * RU + IU * PU + gU * WU + ZU * dU, RU = yU[QU + 8], PU = yU[QU + 9], WU = yU[QU + 10], dU = yU[QU + 11], UU[XU + 8] = AU * RU + EU * PU + pU * WU + kU * dU, UU[XU + 9] = FU * RU + YU * PU + aU * WU + GU * dU, UU[XU + 10] = oU * RU + NU * PU + tU * WU + BU * dU, UU[XU + 11] = DU * RU + IU * PU + gU * WU + ZU * dU, RU = yU[QU + 12], PU = yU[QU + 13], WU = yU[QU + 14], dU = yU[QU + 15], UU[XU + 12] = AU * RU + EU * PU + pU * WU + kU * dU, UU[XU + 13] = FU * RU + YU * PU + aU * WU + GU * dU, UU[XU + 14] = oU * RU + NU * PU + tU * WU + BU * dU, UU[XU + 15] = DU * RU + IU * PU + gU * WU + ZU * dU
          }(cU, 0, EU(UU, XU), 0, FU(UU), 0), UU._vpVer = zU, UU._vpAspect = XU, cU
        }(cU, yU),
        AU = FU(cU),
        oU = cU.worldMatrix;
      PU(UU, QU, 0), PU(UU, AU, 16), XU.useFloatingOrigin ? (UU[32] = 0, UU[33] = 0, UU[34] = 0) : (UU[32] = oU[12], UU[33] = oU[13], UU[34] = oU[14]), UU[87] = XU.canvas.width;
      const YU = zU.imageProcessing;
      UU[76] = YU.exposure, UU[77] = YU.contrast, UU[78] = zU._envTextures?.lodGenerationScale ?? .8, UU[79] = +YU.toneMappingEnabled, UU[37] = XU.canvas.height
    }

    function dU(UU, XU) {
      return {
        _renderables: UU,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: XU
      }
    }

    function LU(UU, XU, zU) {
      UU.clr ??= !0;
      const yU = UU.rt._descriptor,
        QU = UU.depth?._descriptor,
        oU = {
          _colorFormat: yU.format,
          _depthStencilFormat: QU?.dFormat ?? yU.dFormat,
          _depthCompare: yU.depthCompare ?? QU?.depthCompare,
          _sampleCount: yU.samples
        },
        EU = {
          loadOp: "clear",
          storeOp: "store"
        },
        YU = {
          ...dU([], -1),
          name: UU.name,
          _config: UU,
          _ownsTargets: !UU.sharedRt,
          engine: XU,
          sa: zU,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [EU]
          },
          _colorAttachment: EU,
          _sceneUBO: NU(XU, 368),
          _suData: new AU.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: oU,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (YU._disposed) throw new Error("RenderTask has been disposed.");
            YU._recordExplicit ? YU._recordExplicit(YU, !0) : wU(YU, !1 !== UU.autoMirror ? zU._renderables.slice() : YU._renderables, !0)
          },
          execute: () => function(UU, XU, zU) {
            if (!1 === UU.enabled) return 0;
            const cU = UU.sa;
            ! function(UU, XU, zU) {
              const cU = UU.sa;
              !1 !== UU._config.autoMirror && UU._lastVersion !== cU._renderableVersion && wU(UU, cU._renderables.slice());
              OU(UU, XU);
              const yU = UU._updateContext,
                QU = UU._config.cam ?? cU.camera;
              zU._colorFormat && (UU._config._skipClusteredLights || cU._clusteredLightUpdater?.(QU, yU.targetWidth, yU.targetHeight), function(UU, XU) {
                const zU = RU(UU, XU),
                  cU = BU(XU.lights) + (UU._lightFoVersion?.(XU) ?? 0),
                  yU = XU._lightListVersion ?? 0;
                cU === zU.qm && yU === zU._listVersion && XU.lights.length === zU._lightCount || (zU.qm = cU, zU._listVersion = yU, zU._lightCount = XU.lights.length, ZU(zU._scratch, XU.lights), UU._applyLightFoOffset?.(zU._scratch, XU), UU._device.queue.writeBuffer(zU._buffer, 0, zU._scratch)), zU._buffer
              }(XU, cU));
              (function(UU, XU, zU, cU) {
                if (!cU) return;
                const yU = cU.viewport,
                  QU = UU._config.rt,
                  AU = (UU._config.cs ? XU.canvas.width / XU.canvas.height : QU._width / QU._height) * (yU ? yU.width / yU.height : 1),
                  FU = zU.fog,
                  oU = zU.imageProcessing,
                  EU = DU(cU),
                  YU = zU._envTextures,
                  NU = UU._sceneUboCacheKey;
                if (NU[0] === cU && NU[1] === FU && NU[2] === EU && NU[3] === AU && NU[4] === oU.exposure && NU[5] === oU.contrast && NU[6] === YU) return;
                NU[0] = cU, NU[1] = FU, NU[2] = EU, NU[3] = AU, NU[4] = oU.exposure, NU[5] = oU.contrast, NU[6] = YU;
                const IU = UU._suData;
                WU(IU, XU, zU, cU, AU);
                const pU = zU._sceneUboContributors;
                if (pU)
                  for (const DU of pU) DU(IU, zU);
                XU._device.queue.writeBuffer(UU._sceneUBO, 0, IU)
              })(UU, XU, cU, QU), yU.m_ = QU, UU._batchState?._reset(), SU(UU._opaqueBindings, yU), SU(UU._directBindings, yU), SU(UU._transparentBindings, yU), UU._batchState?._flush(XU),
                function(UU, XU) {
                  const zU = UU._transparentBindings;
                  if (zU.length <= 1 || !XU) return;
                  const cU = FU(XU);
                  for (const yU of zU) {
                    const UU = yU.renderable._worldCenter;
                    yU._sortDistance = UU ? UU[0] * cU[2] + UU[1] * cU[6] + UU[2] * cU[10] + cU[14] : 0
                  }
                  zU.sort(eU)
                }(UU, QU)
            }(UU, XU, zU);
            const yU = UU._colorAttachment,
              QU = UU._config;
            QU.rt._colorView && (QU.rt === cU.surface.scRT && (yU.view = QU.rt._colorView), yU.resolveTarget = QU.rst?._colorView ?? void 0, yU.clearValue = QU.clrColor ?? cU.clearColor, yU.loadOp = QU.clr ? "clear" : "load");
            if (UU._executeWithTransmission) return UU._executeWithTransmission(zU._sampleCount);
            const AU = XU._currentEncoder.beginRenderPass(UU._renderPassDescriptor),
              oU = qU(UU, AU);
            return AU.end(), oU
          }(YU, XU, oU),
          dispose() {
            if (YU._disposed) return;
            YU._disposed = !0;
            const XU = YU._pendingMeshes;
            XU && (XU.length = 0);
            for (const UU of YU._renderables) YU._retireRenderable?.(YU.engine, UU);
            YU._passes.length = YU._opaqueBindings.length = YU._directBindings.length = 0, YU._transparentBindings.length = YU._renderables.length = YU._ob.length = 0, YU._ownsTargets && ((0, cU.l)(UU.rt), (0, cU.l)(UU.rst)), UU.depth?._eager || (0, cU.l)(UU.depth);
            const zU = YU._sceneUBO;
            (0, IU.h)(YU.engine, (() => zU.destroy())), YU._batchState?._release(YU.engine), YU._batchState = void 0
          }
        };
      return YU
    }

    function eU(UU, XU) {
      return XU._sortDistance - UU._sortDistance || UU.renderable.order - XU.renderable.order
    }

    function CU(UU, XU) {
      return UU.renderable.order - XU.renderable.order
    }

    function wU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU._renderables,
        zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        QU = arguments.length > 4 ? arguments[4] : void 0;
      const AU = UU._config,
        FU = AU.rt,
        oU = UU._batchState,
        DU = dU(XU, UU.sa._renderableVersion);
      if (zU) {
        const XU = (XU, zU) => {
          XU && (zU || UU._ownsTargets || XU._eager) && (0, cU.h)(XU, UU.engine)
        };
        XU(FU), FU._descriptor.samples > 1 && XU(AU.rst), XU(AU.depth, !0)
      }
      const {
        _opaqueBindings: EU,
        _directBindings: YU,
        _transparentBindings: NU
      } = DU;
      try {
        for (const zU of XU) {
          const XU = zU.bind(UU.engine, UU._targetSignature);
          DU._batchState = UU._targetSignature._collectBatches?.(DU._batchState, XU), zU.isTransparent || zU._transmissive ? NU.push(XU) : zU._direct ? YU.push(XU) : EU.push(XU)
        }
        EU.sort(CU), YU.sort(CU), zU && OU(UU, UU.engine, !1)
      } catch (IU) {
        throw DU._batchState?._release(void 0, QU ?? [oU]), IU
      }
      return zU && (! function(UU, XU) {
        const zU = UU._config,
          cU = UU._colorAttachment;
        cU.view = XU._colorView, UU._renderPassDescriptor.colorAttachments = XU._colorView ? [cU] : [];
        const yU = zU.depth ?? XU,
          QU = yU._depthView;
        let AU;
        if (QU) {
          const UU = yU._descriptor,
            XU = (zU.depth ? yU._eager : !1 === zU.depthClear) ? "load" : "clear";
          AU = {
            view: QU,
            depthClearValue: UU.depthClearValue ?? 0,
            depthLoadOp: XU,
            depthStoreOp: "store"
          }, UU.dFormat?.includes("stencil") && (AU.stencilClearValue = 0, AU.stencilLoadOp = XU, AU.stencilStoreOp = "store")
        }
        UU._renderPassDescriptor.depthStencilAttachment = AU
      }(UU, FU), UU._updateContext.targetWidth = FU._width, UU._updateContext.targetHeight = FU._height), yU && (Object.assign(UU, DU), oU?._release(UU.engine, [DU._batchState])), DU
    }

    function qU(UU, XU) {
      const zU = UU.engine,
        cU = UU._config,
        QU = cU.rt,
        AU = UU.sa,
        FU = UU._opaqueBindings,
        oU = UU._ob,
        DU = UU._sceneBG;
      if (function(UU, XU, zU, cU) {
          const yU = XU?.viewport;
          if (!yU) return;
          const QU = Math.floor(yU.x * zU),
            AU = Math.floor((1 - yU.y - yU.height) * cU),
            FU = Math.ceil((yU.x + yU.width) * zU) - QU,
            oU = Math.ceil((1 - yU.y) * cU) - AU;
          UU.setViewport(QU, AU, FU, oU, 0, 1), UU.setScissorRect(QU, AU, FU, oU)
        }(XU, cU.cam ?? AU.camera, QU._width, QU._height), XU.setBindGroup(0, DU), UU._lastVis !== yU.c || !oU.length) {
        const XU = QU._descriptor,
          cU = zU._device.createRenderBundleEncoder({
            colorFormats: XU.format ? [XU.format] : [],
            depthStencilFormat: UU._targetSignature._depthStencilFormat,
            sampleCount: XU.samples
          });
        cU.setBindGroup(0, DU), rU(cU, FU, zU), oU[0] = cU.finish(), UU._lastVis = yU.c
      }
      let EU = FU.length;
      return XU.executeBundles(oU), XU.setBindGroup(0, DU), EU += rU(XU, UU._directBindings, zU), EU += rU(XU, UU._transparentBindings, zU), EU
    }

    function OU(UU, XU) {
      let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const cU = RU(XU, UU.sa)._buffer;
      if (cU === UU._lightsUBO) return;
      const yU = XU._device.createBindGroup({
        layout: aU(XU),
        entries: [{
          binding: 0,
          resource: {
            buffer: UU._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: cU
          }
        }]
      });
      UU._lightsUBO = cU, UU._sceneBG = yU, zU && (UU._ob = [])
    }

    function SU(UU, XU) {
      for (const zU of UU) zU.update?.(XU)
    }

    function rU(UU, XU, zU) {
      let cU = null,
        yU = 0;
      for (const QU of XU) {
        const XU = QU.renderable.mesh;
        XU && !1 === XU.visible || (QU.pipeline !== cU && (UU.setPipeline(QU.pipeline), cU = QU.pipeline), yU += QU.draw(UU, zU))
      }
      return yU
    }

    function uU(UU) {
      const XU = UU._materialSwapQueue;
      if (!XU[0] || UU._runtimeBuilds?.w) return;
      let cU, yU, QU;
      const AU = UU._renderables;
      for (const zU of XU) {
        const XU = zU.material;
        if (!XU) continue;
        const FU = zU._runtimeThinBuild;
        if (FU) {
          yU = FU(UU, zU, yU);
          continue
        }
        const oU = UU._groups.get(XU._buildGroup),
          DU = oU?.r;
        if (!DU) {
          (QU ??= []).push(zU);
          continue
        }
        if (oU._w?.(zU)) {
          (QU ??= []).push([zU, XU]);
          continue
        }
        const EU = UU._meshDisposables.get(zU);
        EU && (UU._meshDisposables.delete(zU), (0, IU.h)(UU.surface.engine, (() => EU.forEach((UU => UU())))));
        const YU = oU.o;
        let NU;
        for (let UU = AU.length; UU--;) AU[UU].mesh === zU && (NU = AU.splice(UU, 1)[0]);
        XU._csmGen = -~XU._csmGen;
        const pU = DU(UU, zU);
        if (YU) {
          const UU = YU.indexOf(NU);
          UU < 0 ? YU.push(pU) : YU[UU] = pU
        }
        cU = AU.push(pU)
      }
      if (cU && (AU.sort(((UU, XU) => UU.order - XU.order)), UU._renderableVersion++, UU._materialEpoch++), XU.length = 0, !QU) return yU;
      const FU = QU;
      return zU.e(668).then((() => zU(64045))).then((XU => {
        let {
          C: zU
        } = XU;
        return zU(UU, FU, yU)
      }), (XU => {
        const zU = UU._runtimeBuilds;
        zU ? zU._x(XU) : console.error(XU)
      }))
    }
    var fU = null;

    function iU(UU, XU) {
      const zU = UU.engine,
        yU = {
          _kind: "sa",
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
            zU.useFloatingOrigin && yU.camera && !yU.camera._useFloatingOrigin && (yU.camera._useFloatingOrigin = !0, yU.camera._viewVer = -1, yU.camera._vpVer = -1);
            const UU = yU.fixedDeltaMs > 0 ? yU.fixedDeltaMs : zU._currentDelta,
              XU = zU._currentEncoder;
            let cU = 0;
            for (const zU of yU._beforeRender) zU(UU);
            yU._materialSwapQueue.length && uU(yU);
            for (const QU of yU._prePasses) cU += QU.execute(XU, zU);
            for (const QU of yU._uniformUpdaters) QU.update(zU);
            yU._drawCallsPre = cU
          },
          _record: () => yU._frameGraph.execute(),
          _resize() {
            yU._frameGraph.build()
          }
        },
        AU = function() {
          const UU = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let XU = 0; XU < UU._tasks.length; XU++) QU(UU, UU._tasks[XU]);
              for (const XU of UU._tasks)
                for (const UU of XU._passes) UU._initialize()
            },
            execute() {
              let XU = 0;
              for (const zU of UU._tasks)
                if (!1 !== zU.executionEnabled)
                  if (zU.execute) XU += zU.execute();
                  else
                    for (const UU of zU._passes) XU += UU._execute();
              return XU
            },
            dispose() {
              for (const XU of UU._tasks) XU.dispose();
              UU._tasks.length = 0, UU._currentProcessedTask = null
            }
          };
          return UU
        }();
      if (yU._frameGraph = AU, !1 !== XU?.defaultRenderTask) {
        const XU = UU.msaaSamples > 1,
          QU = XU ? (0, cU.d)({
            lbl: "scene-color",
            format: UU.format,
            dFormat: "depth24plus-stencil8",
            samples: UU.msaaSamples,
            size: UU
          }) : UU.scRT,
          FU = XU ? void 0 : (0, cU.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: UU
          });
        ! function(UU, XU) {
          UU._tasks.push(XU)
        }(AU, LU({
          name: "sa",
          rt: QU,
          rst: XU ? UU.scRT : void 0,
          depth: FU
        }, zU, yU))
      }
      return yU._disposables.push((() => AU.dispose())), yU
    }
    async function HU(UU) {
      const XU = UU;
      for (XU._built || (XU._materialSwapQueue.length = 0); XU._deferredBuilders.length;) {
        const UU = XU._deferredBuilders.splice(0);
        await Promise.all(UU.map((UU => UU())))
      }
      await uU(XU), fU?.get(XU)?.() || (XU._runtimeBuilds?._e(), XU._renderableVersion++, XU._built = !0), await (XU._rebuildHook?.(XU))
    }
    var MU = null;
    async function vU(UU) {
      const XU = UU,
        cU = XU.surface;
      (0, yU.g)(cU, XU) || (await HU(UU), XU._renderables.sort(VU), await Promise.all(XU._frameGraph._tasks.map((UU => UU._preload?.()))), MU && await MU(XU), XU._frameGraph.build(), cU._renderingContexts[0] && (await zU.e(666).then((() => zU(64031)))).configureSwapchainOverlayScene(cU, XU), fU?.get(XU)?.() || (0, yU.h)(cU, XU))
    }
    var VU = (UU, XU) => UU.order - XU.order
  },
  44382: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      d: () => EU
    });
    var cU = zU(44332),
      yU = zU(44338),
      QU = zU(44344),
      AU = zU(44349),
      FU = zU(44358),
      oU = zU(44367);

    function DU(UU, XU, zU) {
      let FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (XU < 1 || zU < 1) && (0, cU.b)(676, XU, zU);
      const DU = UU._device,
        EU = FU.mipMaps ?? !1,
        YU = FU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        NU = EU ? (0, oU.c)(XU, zU) : 1,
        IU = DU.createTexture({
          size: {
            width: XU,
            height: zU
          },
          format: YU,
          mipLevelCount: NU,
          usage: yU.f.TEXTURE_BINDING | yU.f.COPY_DST | yU.f.RENDER_ATTACHMENT
        }),
        pU = {
          addressModeU: FU.addressModeU ?? "clamp-to-edge",
          addressModeV: FU.addressModeV ?? "clamp-to-edge",
          minFilter: FU.minFilter ?? "linear",
          magFilter: FU.magFilter ?? "linear",
          mipmapFilter: EU ? "linear" : "nearest"
        },
        aU = (0, AU.e)(UU, pU),
        tU = {
          texture: IU,
          view: IU.createView(),
          sampler: aU,
          width: XU,
          height: zU
        };
      return (0, QU.b)(tU), UU._dlr && UU._dlr.t(tU, {
        kind: "dynamic",
        width: XU,
        height: zU,
        format: YU,
        levels: NU,
        samplerDesc: pU,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), tU
    }

    function EU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yU = cU.invertY ?? !0,
        QU = cU.premultiplyAlpha ?? !1;
      UU._device.queue.copyExternalImageToTexture({
        source: zU,
        flipY: yU
      }, {
        texture: XU.texture,
        premultipliedAlpha: QU
      }, [XU.width, XU.height]);
      const AU = XU._recoverySource;
      AU && "dynamic" === AU.kind && (AU.source = zU, AU.flipY = yU, AU.premultipliedAlpha = QU), XU.texture.mipLevelCount > 1 && (0, FU.generateMipmaps)(UU, XU.texture)
    }
  },
  44374: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU
    });
    var cU = zU(44332),
      yU = zU(44338),
      QU = zU(44344),
      AU = zU(44349),
      FU = zU(44367);
    async function oU(UU, XU) {
      let oU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [DU, EU] = function(UU) {
        const XU = UU,
          zU = [
            [XU.displayWidth, XU.displayHeight],
            [XU.videoWidth, XU.videoHeight],
            [XU.naturalWidth, XU.naturalHeight],
            [XU.width, XU.height]
          ];
        for (const [cU, yU] of zU)
          if (void 0 !== cU && void 0 !== yU && Number.isInteger(cU) && Number.isInteger(yU) && cU > 0 && yU > 0) return [cU, yU];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(XU), [YU, NU] = function(UU, XU, zU) {
        if (void 0 === zU) return [UU, XU];
        if (!Number.isInteger(zU) || zU < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${zU})`);
        if (Math.max(UU, XU) <= zU) return [UU, XU];
        const cU = zU / Math.max(UU, XU);
        return UU >= XU ? [zU, Math.max(1, Math.round(XU * cU))] : [Math.max(1, Math.round(UU * cU)), zU]
      }(DU, EU, oU.maxDimension), IU = oU.mipMaps ?? !0, pU = oU.premultiplyAlpha ?? !1;
      let aU = XU,
        tU = null;
      const gU = {
        texture: null
      };
      try {
        YU === DU && NU === EU || (tU = await createImageBitmap(XU, {
          resizeWidth: YU,
          resizeHeight: NU,
          resizeQuality: "high",
          premultiplyAlpha: pU ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), aU = tU);
        const kU = UU._device,
          GU = oU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          BU = IU ? (0, FU.c)(YU, NU) : 1,
          ZU = BU > 1 ? (await Promise.resolve().then((() => zU(44358)))).generateMipmaps : null,
          RU = {
            addressModeU: oU.addressModeU ?? "repeat",
            addressModeV: oU.addressModeV ?? "repeat",
            minFilter: oU.minFilter ?? "linear",
            magFilter: oU.magFilter ?? "linear",
            mipmapFilter: IU ? "linear" : "nearest"
          };
        RU.maxAnisotropy = "linear" === RU.minFilter && "linear" === RU.magFilter && "linear" === RU.mipmapFilter ? 4 : 1;
        const PU = oU.invertY ?? !0,
          WU = async XU => {
            let zU;
            kU.pushErrorScope("validation"), kU.pushErrorScope("out-of-memory");
            let QU = null;
            try {
              const zU = gU.texture = kU.createTexture({
                size: {
                  width: YU,
                  height: NU
                },
                format: GU,
                mipLevelCount: BU,
                usage: yU.f.TEXTURE_BINDING | yU.f.COPY_DST | yU.f.RENDER_ATTACHMENT
              });
              kU.queue.copyExternalImageToTexture({
                source: XU,
                flipY: PU
              }, {
                texture: zU,
                premultipliedAlpha: pU
              }, {
                width: YU,
                height: NU
              }), ZU && ZU(UU, zU), QU = (0, AU.e)(UU, RU)
            } catch (IU) {
              zU = IU
            }
            const [FU, oU] = await Promise.all([kU.popErrorScope(), kU.popErrorScope()]);
            if (zU) throw zU;
            const DU = oU ?? FU;
            if (DU) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${DU.message}`, {
              cause: DU
            });
            const EU = gU.texture;
            return EU && QU || (0, cU.b)(677), {
              texture: EU,
              view: EU.createView(),
              sampler: QU,
              width: YU,
              height: NU
            }
          }, dU = await (UU._dlr?.x(aU, YU, NU, GU, BU, RU, PU, pU, WU)) ?? await WU(aU);
        return (0, QU.b)(dU), dU
      } catch (kU) {
        throw gU.texture?.destroy(), kU
      } finally {
        tU?.close()
      }
    }
  },
  44358: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      generateMipmaps: () => IU,
      recordMipmaps: () => pU
    });
    var cU = zU(44338),
      yU = zU(44349),
      QU = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var AU = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      FU = null,
      oU = null,
      DU = null,
      EU = null,
      YU = null;

    function NU(UU) {
      const XU = UU._device;
      XU !== YU && (FU?.clear(), FU = null, oU = null, DU = null, EU = null, YU = null, YU = XU), oU ??= XU.createShaderModule({
        code: AU
      }), DU ??= function(UU) {
        return (0, yU.e)(UU, QU)
      }(UU), EU ??= XU.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: cU.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: cU.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function IU(UU, XU, zU) {
      const cU = UU._device,
        yU = cU.createCommandEncoder();
      pU(UU, XU, yU, zU), cU.queue.submit([yU.finish()])
    }

    function pU(UU, XU, zU, cU) {
      if (XU.mipLevelCount <= 1) return;
      const yU = UU._device,
        QU = function(UU, XU) {
          const zU = UU._device;
          NU(UU), FU ??= new Map;
          let cU = FU.get(XU);
          return cU || (cU = zU.createRenderPipeline({
            layout: zU.createPipelineLayout({
              bindGroupLayouts: [EU]
            }),
            vertex: {
              module: oU,
              entryPoint: "vs"
            },
            fragment: {
              module: oU,
              entryPoint: "fs",
              targets: [{
                format: XU
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), FU.set(XU, cU)), cU
        }(UU, XU.format),
        AU = null != cU ? {
          dimension: "2d",
          baseArrayLayer: cU,
          arrayLayerCount: 1
        } : {};
      for (let FU = 1; FU < XU.mipLevelCount; FU++) {
        const UU = XU.createView({
            baseMipLevel: FU - 1,
            mipLevelCount: 1,
            ...AU
          }),
          cU = XU.createView({
            baseMipLevel: FU,
            mipLevelCount: 1,
            ...AU
          }),
          oU = yU.createBindGroup({
            layout: EU,
            entries: [{
              binding: 0,
              resource: UU
            }, {
              binding: 1,
              resource: DU
            }]
          }),
          YU = zU.beginRenderPass({
            colorAttachments: [{
              view: cU,
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
        YU.setPipeline(QU), YU.setBindGroup(0, oU), YU.draw(3), YU.end()
      }
    }
  },
  44367: (UU, XU, zU) => {
    function cU(UU, XU) {
      return Math.floor(Math.log2(Math.max(UU, XU))) + 1
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  44328: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      h: () => EU
    });
    var cU = zU(44332),
      yU = zU(44338),
      QU = zU(44344),
      AU = zU(44349),
      FU = zU(44358),
      oU = zU(44367);

    function DU(UU, XU, zU, FU) {
      let DU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (XU < 1 || zU < 1 || FU < 1) && (0, cU.b)(722, XU, zU, FU);
      const EU = UU._device,
        YU = DU.mipMaps ?? !0,
        NU = DU.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        IU = EU.createTexture({
          size: {
            width: XU,
            height: zU,
            depthOrArrayLayers: FU
          },
          dimension: "2d",
          format: NU,
          mipLevelCount: YU ? (0, oU.c)(XU, zU) : 1,
          usage: yU.f.TEXTURE_BINDING | yU.f.COPY_DST | yU.f.RENDER_ATTACHMENT
        }),
        pU = (0, AU.e)(UU, {
          addressModeU: DU.addressModeU ?? "repeat",
          addressModeV: DU.addressModeV ?? "repeat",
          minFilter: DU.minFilter ?? "linear",
          magFilter: DU.magFilter ?? "linear",
          mipmapFilter: YU ? "linear" : "nearest"
        }),
        aU = {
          texture: IU,
          view: IU.createView({
            dimension: "2d-array"
          }),
          sampler: pU,
          width: XU,
          height: zU,
          layers: FU
        };
      return (0, QU.b)(aU), aU
    }

    function EU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (zU < 0 || zU >= XU.layers || (0 | zU) !== zU) && (0, cU.b)(723, XU.layers, zU);
      const AU = QU.invertY ?? !0,
        oU = QU.premultiplyAlpha ?? !1;
      UU._device.queue.copyExternalImageToTexture({
        source: yU,
        flipY: AU
      }, {
        texture: XU.texture,
        origin: [0, 0, zU],
        premultipliedAlpha: oU
      }, [XU.width, XU.height, 1]), XU.texture.mipLevelCount > 1 && (0, FU.generateMipmaps)(UU, XU.texture, zU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);