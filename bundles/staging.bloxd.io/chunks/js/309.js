export const id = 309;
export const ids = [309];
export const modules = {
  42150: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(42141),
      SG = ZG(42155);

    function LG(GG) {
      (0, SG.c)(GG), (0, wG.u)(GG);
      const bG = GG._surfaces;
      for (const ZG of bG) ZG._renderingContexts.length = 0, ZG._ro?.disconnect(), ZG._context.unconfigure();
      bG.length = 0;
      try {
        GG._disposeManagedResources?.(), GG._disposeStorageBuffers?.()
      } finally {
        GG._device.destroy()
      }
    }
  },
  42141: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      e: () => JG,
      i: () => QG,
      k: () => KG,
      o: () => EG,
      r: () => rG,
      u: () => zG
    });
    var wG = ZG(42087);
    var SG = "Babylon Lite v1.32.0",
      LG = ZG(42148);

    function yG(GG) {
      return "clientWidth" in GG
    }
    var kG = 1;

    function UG(GG, bG, ZG) {
      const UG = bG.getContext("webgpu");
      UG || (0, wG.b)(54), yG(bG) && bG.setAttribute("data-engine", SG);
      const YG = ZG?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        VG = ZG?.srgb ? (pG = YG).endsWith("-srgb") ? pG : `${pG}-srgb` : YG;
      var pG;
      const fG = ZG?.alphaMode ?? "opaque";
      UG.configure({
        device: GG._device,
        format: YG,
        alphaMode: fG,
        viewFormats: [VG]
      });
      const QG = 1 === ZG?.msaaSamples ? 1 : 4,
        KG = (0, LG.e)({
          lbl: "swapchain",
          format: VG,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return KG._eager = !0, {
        engine: GG,
        canvas: bG,
        format: VG,
        msaaSamples: QG,
        scRT: KG,
        maxDevicePixelRatio: ZG?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: kG++,
        _context: UG,
        _configureFormat: YG,
        _alphaMode: fG,
        _renderingContexts: []
      }
    }

    function YG(GG) {
      const bG = GG._context.getCurrentTexture(),
        ZG = GG.scRT;
      ZG._colorTexture = bG, ZG._colorView = bG.createView({
        format: GG.format
      }), ZG._width = bG.width, ZG._height = bG.height
    }

    function VG(GG) {
      const bG = GG.canvas;
      if (!yG(bG)) return;
      const ZG = GG._w ?? bG.clientWidth,
        wG = GG._h ?? bG.clientHeight;
      if (!(ZG > 0 && wG > 0)) return;
      const SG = Math.min(globalThis.devicePixelRatio || 1, GG.maxDevicePixelRatio);
      pG(GG, ZG * SG | 0, wG * SG | 0)
    }

    function pG(GG, bG, ZG) {
      const wG = GG.canvas,
        SG = 0 | bG,
        LG = 0 | ZG;
      if (SG > 0 && LG > 0 && (SG !== wG.width || LG !== wG.height)) {
        wG.width = SG, wG.height = LG, GG.scRT._width = SG, GG.scRT._height = LG;
        for (const bG of GG._renderingContexts) bG._resize?.()
      }
    }
    var fG = 0;

    function QG(GG, bG) {
      return -1 !== GG._renderingContexts.indexOf(bG)
    }

    function KG(GG, bG) {
      return -1 === GG._renderingContexts.indexOf(bG) && (GG._renderingContexts.push(bG), !0)
    }
    var hG = null;
    var dG = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function JG(GG, bG) {
      const LG = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...hG ? hG() : {}
      });
      LG || (0, wG.b)(47);
      const yG = hG?.deviceFeatures?.(LG, bG) ?? function(GG) {
          return dG.filter((bG => GG.features.has(bG)))
        }(LG),
        kG = await LG.requestDevice({
          requiredFeatures: yG,
          requiredLimits: bG?.requiredLimits
        });
      console.log(`${SG} - WebGPU engine`);
      const pG = !!bG?.useHighPrecisionMatrix,
        fG = !!bG?.useFloatingOrigin;
      if (fG && !pG && (0, wG.b)(48), pG) {
        const {
          allocateF64Mat4: GG
        } = await ZG.e(361).then((() => ZG(61886)));
        0
      }
      let QG, KG, JG, rG;
      if (fG) {
        const [{
          wrapRenderableForFO: GG,
          lightFoVersion: bG,
          applyLightFoOffset: wG
        }, {
          makePackMeshWorld: SG
        }] = await Promise.all([ZG.e(362).then((() => ZG(61893))), ZG.e(363).then((() => ZG(61902)))]);
        QG = GG, KG = SG, JG = bG, rG = wG
      }
      const zG = {
          _device: kG
        },
        EG = [zG];
      return Object.assign(zG, {
        engine: zG,
        surfaces: EG,
        _surfaces: EG,
        _device: kG,
        _options: bG,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: pG,
        useFloatingOrigin: fG,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: QG,
        _makePackMeshWorld: KG,
        _lightFoVersion: JG,
        _applyLightFoOffset: rG
      }, UG(zG, GG, bG)), VG(zG), YG(zG), zG
    }

    function rG(GG, bG, ZG) {
      pG(GG, bG, ZG)
    }

    function zG(GG) {
      GG._animFrameId && cancelAnimationFrame(GG._animFrameId), GG._animFrameId = 0, GG._renderFn = null, GG._flushGpuRetirements?.(GG)
    }

    function EG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG.surfaces;
      if (ZG !== GG.surfaces)
        for (let SG = ZG.length; SG--;) ZG[SG].engine !== GG && (0, wG.b)(49);
      oG(GG, bG, ZG)
    }

    function oG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG._surfaces,
        wG = 0;
      for (let LG = ZG.length; LG--;) wG += ZG[LG]._renderingContexts.length;
      if (!wG) return GG.drawCallCount = 0, GG._flushGpuRetirements?.(GG);
      const SG = GG._device.createCommandEncoder({
        label: "frame"
      });
      GG._currentEncoder = SG, GG._currentDelta = bG;
      try {
        GG._gpuTimerBegin?.(SG), wG = 0;
        for (let GG = 0; GG < ZG.length; GG++) {
          const bG = ZG[GG];
          bG._capturePreFrame?.(bG), YG(bG);
          const SG = bG._renderingContexts;
          for (let GG = 0; GG < SG.length; GG++) {
            const bG = SG[GG];
            bG._update(), wG += bG._drawCallsPre + bG._record()
          }
        }
        const bG = GG._currentEncoder;
        for (let GG = 0; GG < ZG.length; GG++) {
          const wG = ZG[GG];
          wG._captureService?.(wG, bG)
        }
        GG._gpuTimerEnd?.(bG), GG._cbs[0] = bG.finish(), GG._device.queue.submit(GG._cbs), GG._flushGpuRetirements?.(GG), GG.drawCallCount = wG, GG._gpuTimerResolve?.()
      } finally {
        GG._currentEncoder = void 0
      }
    }
  },
  42094: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      i: () => LG,
      j: () => wG
    });
    var wG = globalThis.GPUTextureUsage,
      SG = globalThis.GPUBufferUsage,
      LG = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  42155: (GG, bG, ZG) => {
    function wG(GG) {
      SG(GG.splice(0))
    }

    function SG(GG) {
      for (const ZG of GG) try {
        ZG()
      } catch (bG) {
        console.error("GPU resource retirement failed.", bG)
      }
    }

    function LG(GG, bG) {
      GG._flushGpuRetirements ??= yG, (GG._retirements ??= []).push(bG)
    }

    function yG(GG) {
      const bG = GG._retirements;
      if (!bG) return;
      GG._retirements = null;
      const ZG = GG._retiring ??= new Set;
      ZG.add(bG), queueMicrotask((() => {
        GG._device.queue.onSubmittedWorkDone().then((() => {
          ZG.delete(bG), wG(bG)
        })).catch((() => {}))
      }))
    }

    function kG(GG) {
      const bG = GG._retirements,
        ZG = GG._retiring;
      GG._retirements = null, GG._retiring = null, bG && wG(bG), ZG?.forEach(wG)
    }
    ZG.d(bG, {
      c: () => kG,
      d: () => LG
    })
  },
  42148: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => yG,
      i: () => kG
    });
    var wG = ZG(42094);

    function SG(GG) {
      const bG = GG.size;
      return "canvas" in bG ? bG.canvas : bG
    }

    function LG(GG) {
      return {
        _descriptor: GG,
        _resolveSize: SG,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function yG(GG, bG) {
      if (GG._eager) return void GG._syncEager?.(bG);
      kG(GG);
      const ZG = GG._descriptor,
        {
          width: LG,
          height: yG
        } = (GG._resolveSize ?? SG)(ZG);
      GG._width = LG, GG._height = yG;
      const UG = bG._device;
      ZG.format && (GG._colorTexture = UG.createTexture({
        label: ZG.lbl,
        size: {
          width: LG,
          height: yG
        },
        format: ZG.format,
        sampleCount: ZG.samples,
        usage: wG.j.RENDER_ATTACHMENT | wG.j.TEXTURE_BINDING | wG.j.COPY_SRC | wG.j.COPY_DST
      }), GG._colorView = GG._colorTexture.createView()), ZG.dFormat && (GG._depthTexture = UG.createTexture({
        label: ZG.lbl,
        size: {
          width: LG,
          height: yG
        },
        format: ZG.dFormat,
        sampleCount: ZG.samples,
        usage: wG.j.RENDER_ATTACHMENT | wG.j.TEXTURE_BINDING
      }), GG._depthView = GG._depthTexture.createView())
    }

    function kG(GG) {
      if (!GG || GG._eager && !GG._disposeAttachments) return;
      const bG = GG._colorTexture,
        ZG = GG._depthTexture;
      if (GG._colorTexture = GG._depthTexture = null, GG._colorView = GG._depthView = null, GG._width = GG._height = 0, GG._disposeAttachments) GG._disposeAttachments(bG, ZG);
      else try {
        bG?.destroy()
      } finally {
        !1 !== GG._ownsDepthTexture && ZG?.destroy()
      }
    }
  },
  42170: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      g: () => SG,
      j: () => LG
    });
    var wG = Float32Array,
      SG = Float64Array,
      LG = Uint32Array
  },
  42177: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    var wG = 16
  },
  42087: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = null;

    function SG(GG) {
      for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), SG = 1; SG < bG; SG++) ZG[SG - 1] = arguments[SG];
      const LG = new Error(wG?.(GG, ZG) ?? `#${GG}`);
      throw LG.lite = ZG, LG
    }
  },
  42129: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG
    });
    var wG = ZG(42110);

    function SG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZG = bG.compare,
        SG = bG.lodMinClamp ?? 0,
        LG = bG.lodMaxClamp ?? 32,
        yG = void 0 !== ZG || 0 !== SG || 32 !== LG ? `${ZG??""}:${SG}:${LG}` : "";
      return (0, wG.e)(GG, bG, yG)
    }
  },
  42103: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG
    });
    var wG = null;

    function SG(GG) {
      const bG = wG ??= new WeakMap;
      bG.set(GG, (bG.get(GG) ?? 0) + 1)
    }

    function LG(GG) {
      SG(GG.texture)
    }
  },
  42110: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = null,
      SG = "nearest",
      LG = "clamp-to-edge",
      yG = {
        minFilter: SG,
        magFilter: SG,
        mipmapFilter: SG,
        addressModeU: LG,
        addressModeV: LG,
        addressModeW: LG,
        maxAnisotropy: 1
      };

    function kG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const SG = GG._device,
        LG = wG ??= new WeakMap;
      let kG = LG.get(SG);
      kG || LG.set(SG, kG = new Map);
      let UG = ZG;
      for (const wG in yG) {
        const GG = wG;
        UG += `:${bG[GG]??yG[GG]}`
      }
      let YG = kG.get(UG);
      return YG || kG.set(UG, YG = SG.createSampler(bG)), YG
    }
  },
  42161: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => MG,
      f: () => qG
    });
    var wG = ZG(42148),
      SG = ZG(42141);

    function LG(GG, bG) {
      bG._passes.length = 0, GG._currentProcessedTask = bG;
      try {
        bG.record()
      } finally {
        GG._currentProcessedTask = null
      }
    }
    var yG = ZG(42170);

    function kG(GG) {
      const bG = GG.worldMatrixVersion;
      if (GG._viewVer === bG) return GG._viewCache;
      const ZG = GG._viewCache,
        wG = GG.worldMatrix,
        SG = GG._useFloatingOrigin,
        LG = SG ? 0 : wG[12],
        yG = SG ? 0 : wG[13],
        kG = SG ? 0 : wG[14];
      return ZG[0] = wG[0], ZG[1] = wG[4], ZG[2] = wG[8], ZG[3] = 0, ZG[4] = wG[1], ZG[5] = wG[5], ZG[6] = wG[9], ZG[7] = 0, ZG[8] = wG[2], ZG[9] = wG[6], ZG[10] = wG[10], ZG[11] = 0, ZG[12] = -(wG[0] * LG + wG[1] * yG + wG[2] * kG), ZG[13] = -(wG[4] * LG + wG[5] * yG + wG[6] * kG), ZG[14] = -(wG[8] * LG + wG[9] * yG + wG[10] * kG), ZG[15] = 1, GG._viewVer = bG, ZG
    }
    var UG = null;

    function YG(GG) {
      return GG._projFov === GG.fov && GG._projNear === GG.nearPlane && GG._projFar === GG.farPlane || (GG._projFov = GG.fov, GG._projNear = GG.nearPlane, GG._projFar = GG.farPlane, GG._projRev = (GG._projRev ?? 0) + 1), GG.worldMatrixVersion + (GG._projRev ?? 0)
    }

    function VG(GG, bG) {
      const ZG = YG(GG);
      if (GG._projVer === ZG && GG._projAspect === bG) return GG._projCache;
      const wG = GG._projCache;
      return null !== UG && GG.ortho ? UG(GG, bG, wG) : function(GG, bG, ZG, wG, SG) {
        const LG = 1 / Math.tan(.5 * bG),
          yG = SG - wG;
        GG[0] = LG / ZG, GG[5] = LG, GG[10] = -wG / yG, GG[11] = 1, GG[14] = SG * wG / yG
      }(wG, GG.fov, bG, GG.nearPlane, GG.farPlane), GG._projVer = ZG, GG._projAspect = bG, wG
    }
    var pG = ZG(42094);

    function fG(GG, bG, ZG) {
      return GG._device.createBuffer({
        label: ZG,
        size: (wG = bG, SG = 16, Math.ceil(wG / SG) * SG),
        usage: pG.e.UNIFORM | pG.e.COPY_DST
      });
      var wG, SG
    }
    var QG = ZG(42155),
      KG = null;

    function hG(GG) {
      const bG = GG._device,
        ZG = KG ??= new WeakMap;
      let wG = ZG.get(bG);
      return wG || (wG = bG.createBindGroupLayout({
        label: "Ah",
        entries: [{
          binding: 0,
          visibility: pG.i.VERTEX | pG.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: pG.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ZG.set(bG, wG)), wG
    }

    function dG(GG, bG, ZG) {
      const wG = GG._device,
        SG = fG(GG, bG.byteLength, ZG);
      try {
        wG.queue.writeBuffer(SG, 0, bG.buffer, bG.byteOffset, bG.byteLength)
      } catch (LG) {
        throw SG.destroy(), LG
      }
      return SG
    }
    var JG = ZG(42177),
      rG = new yG.j(1),
      zG = new yG.d(rG.buffer);

    function EG(GG) {
      let bG = 0;
      for (const ZG of GG) bG += ZG._lightVersion ?? 0;
      return bG
    }

    function oG(GG, bG) {
      GG.fill(0);
      let ZG = 0;
      for (const wG of bG) {
        if (ZG >= JG.b) break;
        wG._writeLightUbo && (wG._writeLightUbo(GG, 4 + 16 * ZG), ZG++)
      }
      rG[0] = ZG, GG[0] = zG[0]
    }

    function XG(GG, bG) {
      let ZG = bG._lightGpuState;
      const wG = 16 + 16 * JG.b * 4;
      if (ZG && ZG._byteSize === wG) return ZG;
      const SG = !ZG;
      ZG?._buffer.destroy();
      const LG = new yG.d(wG / 4);
      return oG(LG, bG.lights), GG._applyLightFoOffset?.(LG, bG), ZG = {
        _buffer: dG(GG, LG),
        _scratch: LG,
        pT: EG(bG.lights) + (GG._lightFoVersion?.(bG) ?? 0),
        _listVersion: bG._lightListVersion ?? 0,
        _lightCount: bG.lights.length,
        _byteSize: wG
      }, bG._lightGpuState = ZG, SG && bG._disposables.push((() => {
        bG._lightGpuState?._buffer.destroy(), bG._lightGpuState = void 0
      })), ZG
    }

    function uG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const SG = bG;
      if (0 === wG && 16 === SG.length) return void GG.set(SG, ZG);
      const LG = wG,
        yG = ZG;
      GG[yG + 0] = SG[LG + 0], GG[yG + 1] = SG[LG + 1], GG[yG + 2] = SG[LG + 2], GG[yG + 3] = SG[LG + 3], GG[yG + 4] = SG[LG + 4], GG[yG + 5] = SG[LG + 5], GG[yG + 6] = SG[LG + 6], GG[yG + 7] = SG[LG + 7], GG[yG + 8] = SG[LG + 8], GG[yG + 9] = SG[LG + 9], GG[yG + 10] = SG[LG + 10], GG[yG + 11] = SG[LG + 11], GG[yG + 12] = SG[LG + 12], GG[yG + 13] = SG[LG + 13], GG[yG + 14] = SG[LG + 14], GG[yG + 15] = SG[LG + 15]
    }

    function iG(GG, bG, ZG, wG, SG) {
      GG.fill(0);
      const LG = function(GG, bG) {
          const ZG = YG(GG);
          if (GG._vpVer === ZG && GG._vpAspect === bG) return GG._vpCache;
          const wG = GG._vpCache;
          return function(GG, bG, ZG, wG, SG, LG) {
            const yG = ZG[wG],
              kG = ZG[wG + 1],
              UG = ZG[wG + 2],
              YG = ZG[wG + 3],
              VG = ZG[wG + 4],
              pG = ZG[wG + 5],
              fG = ZG[wG + 6],
              QG = ZG[wG + 7],
              KG = ZG[wG + 8],
              hG = ZG[wG + 9],
              dG = ZG[wG + 10],
              JG = ZG[wG + 11],
              rG = ZG[wG + 12],
              zG = ZG[wG + 13],
              EG = ZG[wG + 14],
              oG = ZG[wG + 15];
            let XG = SG[LG],
              uG = SG[LG + 1],
              iG = SG[LG + 2],
              CG = SG[LG + 3];
            GG[bG] = yG * XG + VG * uG + KG * iG + rG * CG, GG[bG + 1] = kG * XG + pG * uG + hG * iG + zG * CG, GG[bG + 2] = UG * XG + fG * uG + dG * iG + EG * CG, GG[bG + 3] = YG * XG + QG * uG + JG * iG + oG * CG, XG = SG[LG + 4], uG = SG[LG + 5], iG = SG[LG + 6], CG = SG[LG + 7], GG[bG + 4] = yG * XG + VG * uG + KG * iG + rG * CG, GG[bG + 5] = kG * XG + pG * uG + hG * iG + zG * CG, GG[bG + 6] = UG * XG + fG * uG + dG * iG + EG * CG, GG[bG + 7] = YG * XG + QG * uG + JG * iG + oG * CG, XG = SG[LG + 8], uG = SG[LG + 9], iG = SG[LG + 10], CG = SG[LG + 11], GG[bG + 8] = yG * XG + VG * uG + KG * iG + rG * CG, GG[bG + 9] = kG * XG + pG * uG + hG * iG + zG * CG, GG[bG + 10] = UG * XG + fG * uG + dG * iG + EG * CG, GG[bG + 11] = YG * XG + QG * uG + JG * iG + oG * CG, XG = SG[LG + 12], uG = SG[LG + 13], iG = SG[LG + 14], CG = SG[LG + 15], GG[bG + 12] = yG * XG + VG * uG + KG * iG + rG * CG, GG[bG + 13] = kG * XG + pG * uG + hG * iG + zG * CG, GG[bG + 14] = UG * XG + fG * uG + dG * iG + EG * CG, GG[bG + 15] = YG * XG + QG * uG + JG * iG + oG * CG
          }(wG, 0, VG(GG, bG), 0, kG(GG), 0), GG._vpVer = ZG, GG._vpAspect = bG, wG
        }(wG, SG),
        yG = kG(wG),
        UG = wG.worldMatrix;
      uG(GG, LG, 0), uG(GG, yG, 16), bG.useFloatingOrigin ? (GG[32] = 0, GG[33] = 0, GG[34] = 0) : (GG[32] = UG[12], GG[33] = UG[13], GG[34] = UG[14]), GG[87] = bG.canvas.width;
      const pG = ZG.imageProcessing;
      GG[76] = pG.exposure, GG[77] = pG.contrast, GG[78] = ZG._envTextures?.lodGenerationScale ?? .8, GG[79] = +pG.toneMappingEnabled, GG[37] = bG.canvas.height
    }

    function CG(GG, bG) {
      return {
        _renderables: GG,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: bG
      }
    }

    function WG(GG, bG, ZG) {
      GG.clr ??= !0;
      const SG = GG.rt._descriptor,
        LG = GG.depth?._descriptor,
        UG = {
          _colorFormat: SG.format,
          _depthStencilFormat: LG?.dFormat ?? SG.dFormat,
          _depthCompare: SG.depthCompare ?? LG?.depthCompare,
          _sampleCount: SG.samples
        },
        VG = {
          loadOp: "clear",
          storeOp: "store"
        },
        pG = {
          ...CG([], -1),
          name: GG.name,
          _config: GG,
          _ownsTargets: !GG.sharedRt,
          engine: bG,
          Ah: ZG,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [VG]
          },
          _colorAttachment: VG,
          _sceneUBO: fG(bG, 368),
          _suData: new yG.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: UG,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (pG._disposed) throw new Error("RenderTask has been disposed.");
            pG._recordExplicit ? pG._recordExplicit(pG, !0) : FG(pG, !1 !== GG.autoMirror ? ZG._renderables.slice() : pG._renderables, !0)
          },
          execute: () => function(GG, bG, ZG) {
            if (!1 === GG.enabled) return 0;
            const wG = GG.Ah;
            ! function(GG, bG, ZG) {
              const wG = GG.Ah;
              !1 !== GG._config.autoMirror && GG._lastVersion !== wG._renderableVersion && FG(GG, wG._renderables.slice());
              aG(GG, bG);
              const SG = GG._updateContext,
                LG = GG._config.cam ?? wG.camera;
              ZG._colorFormat && (GG._config._skipClusteredLights || wG._clusteredLightUpdater?.(LG, SG.targetWidth, SG.targetHeight), function(GG, bG) {
                const ZG = XG(GG, bG),
                  wG = EG(bG.lights) + (GG._lightFoVersion?.(bG) ?? 0),
                  SG = bG._lightListVersion ?? 0;
                wG === ZG.pT && SG === ZG._listVersion && bG.lights.length === ZG._lightCount || (ZG.pT = wG, ZG._listVersion = SG, ZG._lightCount = bG.lights.length, oG(ZG._scratch, bG.lights), GG._applyLightFoOffset?.(ZG._scratch, bG), GG._device.queue.writeBuffer(ZG._buffer, 0, ZG._scratch)), ZG._buffer
              }(bG, wG));
              (function(GG, bG, ZG, wG) {
                if (!wG) return;
                const SG = wG.viewport,
                  LG = GG._config.rt,
                  yG = (GG._config.cs ? bG.canvas.width / bG.canvas.height : LG._width / LG._height) * (SG ? SG.width / SG.height : 1),
                  kG = ZG.fog,
                  UG = ZG.imageProcessing,
                  VG = YG(wG),
                  pG = ZG._envTextures,
                  fG = GG._sceneUboCacheKey;
                if (fG[0] === wG && fG[1] === kG && fG[2] === VG && fG[3] === yG && fG[4] === UG.exposure && fG[5] === UG.contrast && fG[6] === pG) return;
                fG[0] = wG, fG[1] = kG, fG[2] = VG, fG[3] = yG, fG[4] = UG.exposure, fG[5] = UG.contrast, fG[6] = pG;
                const QG = GG._suData;
                iG(QG, bG, ZG, wG, yG);
                const KG = ZG._sceneUboContributors;
                if (KG)
                  for (const YG of KG) YG(QG, ZG);
                bG._device.queue.writeBuffer(GG._sceneUBO, 0, QG)
              })(GG, bG, wG, LG), SG.B3 = LG, GG._batchState?._reset(), cG(GG._opaqueBindings, SG), cG(GG._directBindings, SG), cG(GG._transparentBindings, SG), GG._batchState?._flush(bG),
                function(GG, bG) {
                  const ZG = GG._transparentBindings;
                  if (ZG.length <= 1 || !bG) return;
                  const wG = kG(bG);
                  for (const SG of ZG) {
                    const GG = SG.renderable._worldCenter;
                    SG._sortDistance = GG ? GG[0] * wG[2] + GG[1] * wG[6] + GG[2] * wG[10] + wG[14] : 0
                  }
                  ZG.sort(mG)
                }(GG, LG)
            }(GG, bG, ZG);
            const SG = GG._colorAttachment,
              LG = GG._config;
            LG.rt._colorView && (LG.rt === wG.surface.scRT && (SG.view = LG.rt._colorView), SG.resolveTarget = LG.rst?._colorView ?? void 0, SG.clearValue = LG.clrColor ?? wG.clearColor, SG.loadOp = LG.clr ? "clear" : "load");
            if (GG._executeWithTransmission) return GG._executeWithTransmission(ZG._sampleCount);
            const yG = bG._currentEncoder.beginRenderPass(GG._renderPassDescriptor),
              UG = vG(GG, yG);
            return yG.end(), UG
          }(pG, bG, UG),
          dispose() {
            if (pG._disposed) return;
            pG._disposed = !0;
            const bG = pG._pendingMeshes;
            bG && (bG.length = 0);
            for (const GG of pG._renderables) pG._retireRenderable?.(pG.engine, GG);
            pG._passes.length = pG._opaqueBindings.length = pG._directBindings.length = 0, pG._transparentBindings.length = pG._renderables.length = pG._ob.length = 0, pG._ownsTargets && ((0, wG.i)(GG.rt), (0, wG.i)(GG.rst)), GG.depth?._eager || (0, wG.i)(GG.depth);
            const ZG = pG._sceneUBO;
            (0, QG.d)(pG.engine, (() => ZG.destroy())), pG._batchState?._release(pG.engine), pG._batchState = void 0
          }
        };
      return pG
    }

    function mG(GG, bG) {
      return bG._sortDistance - GG._sortDistance || GG.renderable.order - bG.renderable.order
    }

    function IG(GG, bG) {
      return GG.renderable.order - bG.renderable.order
    }

    function FG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG._renderables,
        ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        SG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        LG = arguments.length > 4 ? arguments[4] : void 0;
      const yG = GG._config,
        kG = yG.rt,
        UG = GG._batchState,
        YG = CG(bG, GG.Ah._renderableVersion);
      if (ZG) {
        const bG = (bG, ZG) => {
          bG && (ZG || GG._ownsTargets || bG._eager) && (0, wG.f)(bG, GG.engine)
        };
        bG(kG), kG._descriptor.samples > 1 && bG(yG.rst), bG(yG.depth, !0)
      }
      const {
        _opaqueBindings: VG,
        _directBindings: pG,
        _transparentBindings: fG
      } = YG;
      try {
        for (const ZG of bG) {
          const bG = ZG.bind(GG.engine, GG._targetSignature);
          YG._batchState = GG._targetSignature._collectBatches?.(YG._batchState, bG), ZG.isTransparent || ZG._transmissive ? fG.push(bG) : ZG._direct ? pG.push(bG) : VG.push(bG)
        }
        VG.sort(IG), pG.sort(IG), ZG && aG(GG, GG.engine, !1)
      } catch (QG) {
        throw YG._batchState?._release(void 0, LG ?? [UG]), QG
      }
      return ZG && (! function(GG, bG) {
        const ZG = GG._config,
          wG = GG._colorAttachment;
        wG.view = bG._colorView, GG._renderPassDescriptor.colorAttachments = bG._colorView ? [wG] : [];
        const SG = ZG.depth ?? bG,
          LG = SG._depthView;
        let yG;
        if (LG) {
          const GG = SG._descriptor,
            bG = (ZG.depth ? SG._eager : !1 === ZG.depthClear) ? "load" : "clear";
          yG = {
            view: LG,
            depthClearValue: GG.depthClearValue ?? 0,
            depthLoadOp: bG,
            depthStoreOp: "store"
          }, GG.dFormat?.includes("stencil") && (yG.stencilClearValue = 0, yG.stencilLoadOp = bG, yG.stencilStoreOp = "store")
        }
        GG._renderPassDescriptor.depthStencilAttachment = yG
      }(GG, kG), GG._updateContext.targetWidth = kG._width, GG._updateContext.targetHeight = kG._height), SG && (Object.assign(GG, YG), UG?._release(GG.engine, [YG._batchState])), YG
    }

    function vG(GG, bG) {
      const ZG = GG.engine,
        wG = GG._config,
        LG = wG.rt,
        yG = GG.Ah,
        kG = GG._opaqueBindings,
        UG = GG._ob,
        YG = GG._sceneBG;
      if (function(GG, bG, ZG, wG) {
          const SG = bG?.viewport;
          if (!SG) return;
          const LG = Math.floor(SG.x * ZG),
            yG = Math.floor((1 - SG.y - SG.height) * wG),
            kG = Math.ceil((SG.x + SG.width) * ZG) - LG,
            UG = Math.ceil((1 - SG.y) * wG) - yG;
          GG.setViewport(LG, yG, kG, UG, 0, 1), GG.setScissorRect(LG, yG, kG, UG)
        }(bG, wG.cam ?? yG.camera, LG._width, LG._height), bG.setBindGroup(0, YG), GG._lastVis !== SG.d || !UG.length) {
        const bG = LG._descriptor,
          wG = ZG._device.createRenderBundleEncoder({
            colorFormats: bG.format ? [bG.format] : [],
            depthStencilFormat: GG._targetSignature._depthStencilFormat,
            sampleCount: bG.samples
          });
        wG.setBindGroup(0, YG), lG(wG, kG, ZG), UG[0] = wG.finish(), GG._lastVis = SG.d
      }
      let VG = kG.length;
      return bG.executeBundles(UG), bG.setBindGroup(0, YG), VG += lG(bG, GG._directBindings, ZG), VG += lG(bG, GG._transparentBindings, ZG), VG
    }

    function aG(GG, bG) {
      let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wG = XG(bG, GG.Ah)._buffer;
      if (wG === GG._lightsUBO) return;
      const SG = bG._device.createBindGroup({
        layout: hG(bG),
        entries: [{
          binding: 0,
          resource: {
            buffer: GG._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: wG
          }
        }]
      });
      GG._lightsUBO = wG, GG._sceneBG = SG, ZG && (GG._ob = [])
    }

    function cG(GG, bG) {
      for (const ZG of GG) ZG.update?.(bG)
    }

    function lG(GG, bG, ZG) {
      let wG = null,
        SG = 0;
      for (const LG of bG) {
        const bG = LG.renderable.mesh;
        bG && !1 === bG.visible || (LG.pipeline !== wG && (GG.setPipeline(LG.pipeline), wG = LG.pipeline), SG += LG.draw(GG, ZG))
      }
      return SG
    }

    function jG(GG) {
      const bG = GG._materialSwapQueue;
      if (!bG[0] || GG._runtimeBuilds?.w) return;
      let wG, SG, LG;
      const yG = GG._renderables;
      for (const ZG of bG) {
        const bG = ZG.material;
        if (!bG) continue;
        const kG = ZG._runtimeThinBuild;
        if (kG) {
          SG = kG(GG, ZG, SG);
          continue
        }
        const UG = GG._groups.get(bG._buildGroup),
          YG = UG?.r;
        if (!YG) {
          (LG ??= []).push(ZG);
          continue
        }
        if (UG._w?.(ZG)) {
          (LG ??= []).push([ZG, bG]);
          continue
        }
        const VG = GG._meshDisposables.get(ZG);
        VG && (GG._meshDisposables.delete(ZG), (0, QG.d)(GG.surface.engine, (() => VG.forEach((GG => GG())))));
        const pG = UG.o;
        let fG;
        for (let GG = yG.length; GG--;) yG[GG].mesh === ZG && (fG = yG.splice(GG, 1)[0]);
        bG._csmGen = -~bG._csmGen;
        const KG = YG(GG, ZG);
        if (pG) {
          const GG = pG.indexOf(fG);
          GG < 0 ? pG.push(KG) : pG[GG] = KG
        }
        wG = yG.push(KG)
      }
      if (wG && (yG.sort(((GG, bG) => GG.order - bG.order)), GG._renderableVersion++, GG._materialEpoch++), bG.length = 0, !LG) return SG;
      const kG = LG;
      return ZG.e(367).then((() => ZG(61920))).then((bG => {
        let {
          C: ZG
        } = bG;
        return ZG(GG, kG, SG)
      }), (bG => {
        const ZG = GG._runtimeBuilds;
        ZG ? ZG._x(bG) : console.error(bG)
      }))
    }
    var PG = null;

    function MG(GG, bG) {
      const ZG = GG.engine,
        SG = {
          _kind: "Ah",
          surface: GG,
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
            ZG.useFloatingOrigin && SG.camera && !SG.camera._useFloatingOrigin && (SG.camera._useFloatingOrigin = !0, SG.camera._viewVer = -1, SG.camera._vpVer = -1);
            const GG = SG.fixedDeltaMs > 0 ? SG.fixedDeltaMs : ZG._currentDelta,
              bG = ZG._currentEncoder;
            let wG = 0;
            for (const ZG of SG._beforeRender) ZG(GG);
            SG._materialSwapQueue.length && jG(SG);
            for (const LG of SG._prePasses) wG += LG.execute(bG, ZG);
            for (const LG of SG._uniformUpdaters) LG.update(ZG);
            SG._drawCallsPre = wG
          },
          _record: () => SG._frameGraph.execute(),
          _resize() {
            SG._frameGraph.build()
          }
        },
        yG = function() {
          const GG = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let bG = 0; bG < GG._tasks.length; bG++) LG(GG, GG._tasks[bG]);
              for (const bG of GG._tasks)
                for (const GG of bG._passes) GG._initialize()
            },
            execute() {
              let bG = 0;
              for (const ZG of GG._tasks)
                if (!1 !== ZG.executionEnabled)
                  if (ZG.execute) bG += ZG.execute();
                  else
                    for (const GG of ZG._passes) bG += GG._execute();
              return bG
            },
            dispose() {
              for (const bG of GG._tasks) bG.dispose();
              GG._tasks.length = 0, GG._currentProcessedTask = null
            }
          };
          return GG
        }();
      if (SG._frameGraph = yG, !1 !== bG?.defaultRenderTask) {
        const bG = GG.msaaSamples > 1,
          LG = bG ? (0, wG.e)({
            lbl: "scene-color",
            format: GG.format,
            dFormat: "depth24plus-stencil8",
            samples: GG.msaaSamples,
            size: GG
          }) : GG.scRT,
          kG = bG ? void 0 : (0, wG.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: GG
          });
        ! function(GG, bG) {
          GG._tasks.push(bG)
        }(yG, WG({
          name: "Ah",
          rt: LG,
          rst: bG ? GG.scRT : void 0,
          depth: kG
        }, ZG, SG))
      }
      return SG._disposables.push((() => yG.dispose())), SG
    }
    async function AG(GG) {
      const bG = GG;
      for (bG._built || (bG._materialSwapQueue.length = 0); bG._deferredBuilders.length;) {
        const GG = bG._deferredBuilders.splice(0);
        await Promise.all(GG.map((GG => GG())))
      }
      await jG(bG), PG?.get(bG)?.() || (bG._runtimeBuilds?._e(), bG._renderableVersion++, bG._built = !0), await (bG._rebuildHook?.(bG))
    }
    var sG = null;
    async function qG(GG) {
      const bG = GG,
        wG = bG.surface;
      (0, SG.i)(wG, bG) || (await AG(GG), bG._renderables.sort(nG), await Promise.all(bG._frameGraph._tasks.map((GG => GG._preload?.()))), sG && await sG(bG), bG._frameGraph.build(), wG._renderingContexts[0] && (await ZG.e(365).then((() => ZG(61909)))).configureSwapchainOverlayScene(wG, bG), PG?.get(bG)?.() || (0, SG.k)(wG, bG))
    }
    var nG = (GG, bG) => GG.order - bG.order
  },
  42135: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      e: () => VG
    });
    var wG = ZG(42087),
      SG = ZG(42094),
      LG = ZG(42103),
      yG = ZG(42110),
      kG = ZG(42117),
      UG = ZG(42122);

    function YG(GG, bG, ZG) {
      let kG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (bG < 1 || ZG < 1) && (0, wG.b)(676, bG, ZG);
      const YG = GG._device,
        VG = kG.mipMaps ?? !1,
        pG = kG.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        fG = VG ? (0, UG.c)(bG, ZG) : 1,
        QG = YG.createTexture({
          size: {
            width: bG,
            height: ZG
          },
          format: pG,
          mipLevelCount: fG,
          usage: SG.j.TEXTURE_BINDING | SG.j.COPY_DST | SG.j.RENDER_ATTACHMENT
        }),
        KG = {
          addressModeU: kG.addressModeU ?? "clamp-to-edge",
          addressModeV: kG.addressModeV ?? "clamp-to-edge",
          minFilter: kG.minFilter ?? "linear",
          magFilter: kG.magFilter ?? "linear",
          mipmapFilter: VG ? "linear" : "nearest"
        },
        hG = (0, yG.e)(GG, KG),
        dG = {
          texture: QG,
          view: QG.createView(),
          sampler: hG,
          width: bG,
          height: ZG
        };
      return (0, LG.d)(dG), GG._dlr && GG._dlr.t(dG, {
        kind: "dynamic",
        width: bG,
        height: ZG,
        format: pG,
        levels: fG,
        samplerDesc: KG,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), dG
    }

    function VG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const SG = wG.invertY ?? !0,
        LG = wG.premultiplyAlpha ?? !1;
      GG._device.queue.copyExternalImageToTexture({
        source: ZG,
        flipY: SG
      }, {
        texture: bG.texture,
        premultipliedAlpha: LG
      }, [bG.width, bG.height]);
      const yG = bG._recoverySource;
      yG && "dynamic" === yG.kind && (yG.source = ZG, yG.flipY = SG, yG.premultipliedAlpha = LG), bG.texture.mipLevelCount > 1 && (0, kG.generateMipmaps)(GG, bG.texture)
    }
  },
  42133: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG
    });
    var wG = ZG(42087),
      SG = ZG(42094),
      LG = ZG(42103),
      yG = ZG(42110),
      kG = ZG(42122);
    async function UG(GG, bG) {
      let UG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [YG, VG] = function(GG) {
        const bG = GG,
          ZG = [
            [bG.displayWidth, bG.displayHeight],
            [bG.videoWidth, bG.videoHeight],
            [bG.naturalWidth, bG.naturalHeight],
            [bG.width, bG.height]
          ];
        for (const [wG, SG] of ZG)
          if (void 0 !== wG && void 0 !== SG && Number.isInteger(wG) && Number.isInteger(SG) && wG > 0 && SG > 0) return [wG, SG];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(bG), [pG, fG] = function(GG, bG, ZG) {
        if (void 0 === ZG) return [GG, bG];
        if (!Number.isInteger(ZG) || ZG < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ZG})`);
        if (Math.max(GG, bG) <= ZG) return [GG, bG];
        const wG = ZG / Math.max(GG, bG);
        return GG >= bG ? [ZG, Math.max(1, Math.round(bG * wG))] : [Math.max(1, Math.round(GG * wG)), ZG]
      }(YG, VG, UG.maxDimension), QG = UG.mipMaps ?? !0, KG = UG.premultiplyAlpha ?? !1;
      let hG = bG,
        dG = null;
      const JG = {
        texture: null
      };
      try {
        pG === YG && fG === VG || (dG = await createImageBitmap(bG, {
          resizeWidth: pG,
          resizeHeight: fG,
          resizeQuality: "high",
          premultiplyAlpha: KG ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), hG = dG);
        const rG = GG._device,
          zG = UG.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          EG = QG ? (0, kG.c)(pG, fG) : 1,
          oG = EG > 1 ? (await Promise.resolve().then((() => ZG(42117)))).generateMipmaps : null,
          XG = {
            addressModeU: UG.addressModeU ?? "repeat",
            addressModeV: UG.addressModeV ?? "repeat",
            minFilter: UG.minFilter ?? "linear",
            magFilter: UG.magFilter ?? "linear",
            mipmapFilter: QG ? "linear" : "nearest"
          };
        XG.maxAnisotropy = "linear" === XG.minFilter && "linear" === XG.magFilter && "linear" === XG.mipmapFilter ? 4 : 1;
        const uG = UG.invertY ?? !0,
          iG = async bG => {
            let ZG;
            rG.pushErrorScope("validation"), rG.pushErrorScope("out-of-memory");
            let LG = null;
            try {
              const ZG = JG.texture = rG.createTexture({
                size: {
                  width: pG,
                  height: fG
                },
                format: zG,
                mipLevelCount: EG,
                usage: SG.j.TEXTURE_BINDING | SG.j.COPY_DST | SG.j.RENDER_ATTACHMENT
              });
              rG.queue.copyExternalImageToTexture({
                source: bG,
                flipY: uG
              }, {
                texture: ZG,
                premultipliedAlpha: KG
              }, {
                width: pG,
                height: fG
              }), oG && oG(GG, ZG), LG = (0, yG.e)(GG, XG)
            } catch (QG) {
              ZG = QG
            }
            const [kG, UG] = await Promise.all([rG.popErrorScope(), rG.popErrorScope()]);
            if (ZG) throw ZG;
            const YG = UG ?? kG;
            if (YG) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${YG.message}`, {
              cause: YG
            });
            const VG = JG.texture;
            return VG && LG || (0, wG.b)(677), {
              texture: VG,
              view: VG.createView(),
              sampler: LG,
              width: pG,
              height: fG
            }
          }, CG = await (GG._dlr?.x(hG, pG, fG, zG, EG, XG, uG, KG, iG)) ?? await iG(hG);
        return (0, LG.d)(CG), CG
      } catch (rG) {
        throw JG.texture?.destroy(), rG
      } finally {
        dG?.close()
      }
    }
  },
  42117: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      generateMipmaps: () => QG,
      recordMipmaps: () => KG
    });
    var wG = ZG(42094),
      SG = ZG(42110),
      LG = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var yG = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      kG = null,
      UG = null,
      YG = null,
      VG = null,
      pG = null;

    function fG(GG) {
      const bG = GG._device;
      bG !== pG && (kG?.clear(), kG = null, UG = null, YG = null, VG = null, pG = null, pG = bG), UG ??= bG.createShaderModule({
        code: yG
      }), YG ??= function(GG) {
        return (0, SG.e)(GG, LG)
      }(GG), VG ??= bG.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: wG.i.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: wG.i.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function QG(GG, bG, ZG) {
      const wG = GG._device,
        SG = wG.createCommandEncoder();
      KG(GG, bG, SG, ZG), wG.queue.submit([SG.finish()])
    }

    function KG(GG, bG, ZG, wG) {
      if (bG.mipLevelCount <= 1) return;
      const SG = GG._device,
        LG = function(GG, bG) {
          const ZG = GG._device;
          fG(GG), kG ??= new Map;
          let wG = kG.get(bG);
          return wG || (wG = ZG.createRenderPipeline({
            layout: ZG.createPipelineLayout({
              bindGroupLayouts: [VG]
            }),
            vertex: {
              module: UG,
              entryPoint: "vs"
            },
            fragment: {
              module: UG,
              entryPoint: "fs",
              targets: [{
                format: bG
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), kG.set(bG, wG)), wG
        }(GG, bG.format),
        yG = null != wG ? {
          dimension: "2d",
          baseArrayLayer: wG,
          arrayLayerCount: 1
        } : {};
      for (let kG = 1; kG < bG.mipLevelCount; kG++) {
        const GG = bG.createView({
            baseMipLevel: kG - 1,
            mipLevelCount: 1,
            ...yG
          }),
          wG = bG.createView({
            baseMipLevel: kG,
            mipLevelCount: 1,
            ...yG
          }),
          UG = SG.createBindGroup({
            layout: VG,
            entries: [{
              binding: 0,
              resource: GG
            }, {
              binding: 1,
              resource: YG
            }]
          }),
          pG = ZG.beginRenderPass({
            colorAttachments: [{
              view: wG,
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
        pG.setPipeline(LG), pG.setBindGroup(0, UG), pG.draw(3), pG.end()
      }
    }
  },
  42122: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return Math.floor(Math.log2(Math.max(GG, bG))) + 1
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  42079: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG,
      f: () => VG
    });
    var wG = ZG(42087),
      SG = ZG(42094),
      LG = ZG(42103),
      yG = ZG(42110),
      kG = ZG(42117),
      UG = ZG(42122);

    function YG(GG, bG, ZG, kG) {
      let YG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (bG < 1 || ZG < 1 || kG < 1) && (0, wG.b)(722, bG, ZG, kG);
      const VG = GG._device,
        pG = YG.mipMaps ?? !0,
        fG = YG.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        QG = VG.createTexture({
          size: {
            width: bG,
            height: ZG,
            depthOrArrayLayers: kG
          },
          dimension: "2d",
          format: fG,
          mipLevelCount: pG ? (0, UG.c)(bG, ZG) : 1,
          usage: SG.j.TEXTURE_BINDING | SG.j.COPY_DST | SG.j.RENDER_ATTACHMENT
        }),
        KG = (0, yG.e)(GG, {
          addressModeU: YG.addressModeU ?? "repeat",
          addressModeV: YG.addressModeV ?? "repeat",
          minFilter: YG.minFilter ?? "linear",
          magFilter: YG.magFilter ?? "linear",
          mipmapFilter: pG ? "linear" : "nearest"
        }),
        hG = {
          texture: QG,
          view: QG.createView({
            dimension: "2d-array"
          }),
          sampler: KG,
          width: bG,
          height: ZG,
          layers: kG
        };
      return (0, LG.d)(hG), hG
    }

    function VG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ZG < 0 || ZG >= bG.layers || (0 | ZG) !== ZG) && (0, wG.b)(723, bG.layers, ZG);
      const yG = LG.invertY ?? !0,
        UG = LG.premultiplyAlpha ?? !1;
      GG._device.queue.copyExternalImageToTexture({
        source: SG,
        flipY: yG
      }, {
        texture: bG.texture,
        origin: [0, 0, ZG],
        premultipliedAlpha: UG
      }, [bG.width, bG.height, 1]), bG.texture.mipLevelCount > 1 && (0, kG.generateMipmaps)(GG, bG.texture, ZG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);