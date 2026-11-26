export const id = 613;
export const ids = [613];
export const modules = {
  45196: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(45183),
      rH = LH(45204);

    function SH(HH) {
      (0, rH.e)(HH), (0, AH.x)(HH);
      const BH = HH._surfaces;
      for (const LH of BH) LH._renderingContexts.length = 0, LH._ro?.disconnect(), LH._context.unconfigure();
      BH.length = 0;
      try {
        HH._disposeManagedResources?.(), HH._disposeStorageBuffers?.()
      } finally {
        HH._device.destroy()
      }
    }
  },
  45183: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => GH,
      h: () => MH,
      k: () => YH,
      o: () => uH,
      p: () => PH,
      t: () => xH,
      x: () => vH
    });
    var AH = LH(45135);
    var rH = "Babylon Lite v1.32.0",
      SH = LH(45189);

    function hH(HH) {
      return "clientWidth" in HH
    }
    var tH = 1;

    function zH(HH, BH, LH) {
      const zH = BH.getContext("webgpu");
      zH || (0, AH.c)(54), hH(BH) && BH.setAttribute("data-engine", rH);
      const CH = LH?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        EH = LH?.srgb ? (XH = CH).endsWith("-srgb") ? XH : `${XH}-srgb` : CH;
      var XH;
      const GH = LH?.alphaMode ?? "opaque";
      zH.configure({
        device: HH._device,
        format: CH,
        alphaMode: GH,
        viewFormats: [EH]
      });
      const YH = 1 === LH?.msaaSamples ? 1 : 4,
        uH = (0, SH.d)({
          lbl: "swapchain",
          format: EH,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return uH._eager = !0, {
        engine: HH,
        canvas: BH,
        format: EH,
        msaaSamples: YH,
        scRT: uH,
        maxDevicePixelRatio: LH?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: tH++,
        _context: zH,
        _configureFormat: CH,
        _alphaMode: GH,
        _renderingContexts: []
      }
    }

    function CH(HH) {
      const BH = HH._context.getCurrentTexture(),
        LH = HH.scRT;
      LH._colorTexture = BH, LH._colorView = BH.createView({
        format: HH.format
      }), LH._width = BH.width, LH._height = BH.height
    }

    function EH(HH) {
      const BH = HH.canvas;
      if (!hH(BH)) return;
      const LH = HH._w ?? BH.clientWidth,
        AH = HH._h ?? BH.clientHeight;
      if (!(LH > 0 && AH > 0)) return;
      const rH = Math.min(globalThis.devicePixelRatio || 1, HH.maxDevicePixelRatio);
      XH(HH, LH * rH | 0, AH * rH | 0)
    }

    function XH(HH, BH, LH) {
      const AH = HH.canvas,
        rH = 0 | BH,
        SH = 0 | LH;
      if (rH > 0 && SH > 0 && (rH !== AH.width || SH !== AH.height)) {
        AH.width = rH, AH.height = SH, HH.scRT._width = rH, HH.scRT._height = SH;
        for (const BH of HH._renderingContexts) BH._resize?.()
      }
    }
    var GH = 0;

    function YH(HH, BH) {
      return -1 !== HH._renderingContexts.indexOf(BH)
    }

    function uH(HH, BH) {
      return -1 === HH._renderingContexts.indexOf(BH) && (HH._renderingContexts.push(BH), !0)
    }
    var QH = null;
    var WH = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function MH(HH, BH) {
      const SH = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...QH ? QH() : {}
      });
      SH || (0, AH.c)(47);
      const hH = QH?.deviceFeatures?.(SH, BH) ?? function(HH) {
          return WH.filter((BH => HH.features.has(BH)))
        }(SH),
        tH = await SH.requestDevice({
          requiredFeatures: hH,
          requiredLimits: BH?.requiredLimits
        });
      console.log(`${rH} - WebGPU engine`);
      const XH = !!BH?.useHighPrecisionMatrix,
        GH = !!BH?.useFloatingOrigin;
      if (GH && !XH && (0, AH.c)(48), XH) {
        const {
          allocateF64Mat4: HH
        } = await LH.e(665).then((() => LH(64180)));
        0
      }
      let YH, uH, MH, xH;
      if (GH) {
        const [{
          wrapRenderableForFO: HH,
          lightFoVersion: BH,
          applyLightFoOffset: AH
        }, {
          makePackMeshWorld: rH
        }] = await Promise.all([LH.e(666).then((() => LH(64186))), LH.e(667).then((() => LH(64188)))]);
        YH = HH, uH = rH, MH = BH, xH = AH
      }
      const vH = {
          _device: tH
        },
        PH = [vH];
      return Object.assign(vH, {
        engine: vH,
        surfaces: PH,
        _surfaces: PH,
        _device: tH,
        _options: BH,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: XH,
        useFloatingOrigin: GH,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: YH,
        _makePackMeshWorld: uH,
        _lightFoVersion: MH,
        _applyLightFoOffset: xH
      }, zH(vH, HH, BH)), EH(vH), CH(vH), vH
    }

    function xH(HH, BH, LH) {
      XH(HH, BH, LH)
    }

    function vH(HH) {
      HH._animFrameId && cancelAnimationFrame(HH._animFrameId), HH._animFrameId = 0, HH._renderFn = null, HH._flushGpuRetirements?.(HH)
    }

    function PH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.surfaces;
      if (LH !== HH.surfaces)
        for (let rH = LH.length; rH--;) LH[rH].engine !== HH && (0, AH.c)(49);
      TH(HH, BH, LH)
    }

    function TH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH._surfaces,
        AH = 0;
      for (let SH = LH.length; SH--;) AH += LH[SH]._renderingContexts.length;
      if (!AH) return HH.drawCallCount = 0, HH._flushGpuRetirements?.(HH);
      const rH = HH._device.createCommandEncoder({
        label: "frame"
      });
      HH._currentEncoder = rH, HH._currentDelta = BH;
      try {
        HH._gpuTimerBegin?.(rH), AH = 0;
        for (let HH = 0; HH < LH.length; HH++) {
          const BH = LH[HH];
          BH._capturePreFrame?.(BH), CH(BH);
          const rH = BH._renderingContexts;
          for (let HH = 0; HH < rH.length; HH++) {
            const BH = rH[HH];
            BH._update(), AH += BH._drawCallsPre + BH._record()
          }
        }
        const BH = HH._currentEncoder;
        for (let HH = 0; HH < LH.length; HH++) {
          const AH = LH[HH];
          AH._captureService?.(AH, BH)
        }
        HH._gpuTimerEnd?.(BH), HH._cbs[0] = BH.finish(), HH._device.queue.submit(HH._cbs), HH._flushGpuRetirements?.(HH), HH.drawCallCount = AH, HH._gpuTimerResolve?.()
      } finally {
        HH._currentEncoder = void 0
      }
    }
  },
  45138: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      h: () => SH,
      k: () => AH
    });
    var AH = globalThis.GPUTextureUsage,
      rH = globalThis.GPUBufferUsage,
      SH = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  45204: (HH, BH, LH) => {
    function AH(HH) {
      rH(HH.splice(0))
    }

    function rH(HH) {
      for (const LH of HH) try {
        LH()
      } catch (BH) {
        console.error("GPU resource retirement failed.", BH)
      }
    }

    function SH(HH, BH) {
      HH._flushGpuRetirements ??= hH, (HH._retirements ??= []).push(BH)
    }

    function hH(HH) {
      const BH = HH._retirements;
      if (!BH) return;
      HH._retirements = null;
      const LH = HH._retiring ??= new Set;
      LH.add(BH), queueMicrotask((() => {
        HH._device.queue.onSubmittedWorkDone().then((() => {
          LH.delete(BH), AH(BH)
        })).catch((() => {}))
      }))
    }

    function tH(HH) {
      const BH = HH._retirements,
        LH = HH._retiring;
      HH._retirements = null, HH._retiring = null, BH && AH(BH), LH?.forEach(AH)
    }
    LH.d(BH, {
      e: () => tH,
      f: () => SH
    })
  },
  45189: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => hH,
      i: () => tH
    });
    var AH = LH(45138);

    function rH(HH) {
      const BH = HH.size;
      return "canvas" in BH ? BH.canvas : BH
    }

    function SH(HH) {
      return {
        _descriptor: HH,
        _resolveSize: rH,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function hH(HH, BH) {
      if (HH._eager) return void HH._syncEager?.(BH);
      tH(HH);
      const LH = HH._descriptor,
        {
          width: SH,
          height: hH
        } = (HH._resolveSize ?? rH)(LH);
      HH._width = SH, HH._height = hH;
      const zH = BH._device;
      LH.format && (HH._colorTexture = zH.createTexture({
        label: LH.lbl,
        size: {
          width: SH,
          height: hH
        },
        format: LH.format,
        sampleCount: LH.samples,
        usage: AH.k.RENDER_ATTACHMENT | AH.k.TEXTURE_BINDING | AH.k.COPY_SRC | AH.k.COPY_DST
      }), HH._colorView = HH._colorTexture.createView()), LH.dFormat && (HH._depthTexture = zH.createTexture({
        label: LH.lbl,
        size: {
          width: SH,
          height: hH
        },
        format: LH.dFormat,
        sampleCount: LH.samples,
        usage: AH.k.RENDER_ATTACHMENT | AH.k.TEXTURE_BINDING
      }), HH._depthView = HH._depthTexture.createView())
    }

    function tH(HH) {
      if (!HH || HH._eager && !HH._disposeAttachments) return;
      const BH = HH._colorTexture,
        LH = HH._depthTexture;
      if (HH._colorTexture = HH._depthTexture = null, HH._colorView = HH._depthView = null, HH._width = HH._height = 0, HH._disposeAttachments) HH._disposeAttachments(BH, LH);
      else try {
        BH?.destroy()
      } finally {
        !1 !== HH._ownsDepthTexture && LH?.destroy()
      }
    }
  },
  45211: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      g: () => rH,
      i: () => SH
    });
    var AH = Float32Array,
      rH = Float64Array,
      SH = Uint32Array
  },
  45215: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    var AH = 16
  },
  45135: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = null;

    function rH(HH) {
      for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), rH = 1; rH < BH; rH++) LH[rH - 1] = arguments[rH];
      const SH = new Error(AH?.(HH, LH) ?? `#${HH}`);
      throw SH.lite = LH, SH
    }
  },
  45160: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(45147);

    function rH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const LH = BH.compare,
        rH = BH.lodMinClamp ?? 0,
        SH = BH.lodMaxClamp ?? 32,
        hH = void 0 !== LH || 0 !== rH || 32 !== SH ? `${LH??""}:${rH}:${SH}` : "";
      return (0, AH.e)(HH, BH, hH)
    }
  },
  45142: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = null;

    function rH(HH) {
      const BH = AH ??= new WeakMap;
      BH.set(HH, (BH.get(HH) ?? 0) + 1)
    }

    function SH(HH) {
      rH(HH.texture)
    }
  },
  45147: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = null,
      rH = "nearest",
      SH = "clamp-to-edge",
      hH = {
        minFilter: rH,
        magFilter: rH,
        mipmapFilter: rH,
        addressModeU: SH,
        addressModeV: SH,
        addressModeW: SH,
        maxAnisotropy: 1
      };

    function tH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const rH = HH._device,
        SH = AH ??= new WeakMap;
      let tH = SH.get(rH);
      tH || SH.set(rH, tH = new Map);
      let zH = LH;
      for (const AH in hH) {
        const HH = AH;
        zH += `:${BH[HH]??hH[HH]}`
      }
      let CH = tH.get(zH);
      return CH || tH.set(zH, CH = rH.createSampler(BH)), CH
    }
  },
  45209: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => gH,
      d: () => jH
    });
    var AH = LH(45189),
      rH = LH(45183);

    function SH(HH, BH) {
      BH._passes.length = 0, HH._currentProcessedTask = BH;
      try {
        BH.record()
      } finally {
        HH._currentProcessedTask = null
      }
    }
    var hH = LH(45211);

    function tH(HH) {
      const BH = HH.worldMatrixVersion;
      if (HH._viewVer === BH) return HH._viewCache;
      const LH = HH._viewCache,
        AH = HH.worldMatrix,
        rH = HH._useFloatingOrigin,
        SH = rH ? 0 : AH[12],
        hH = rH ? 0 : AH[13],
        tH = rH ? 0 : AH[14];
      return LH[0] = AH[0], LH[1] = AH[4], LH[2] = AH[8], LH[3] = 0, LH[4] = AH[1], LH[5] = AH[5], LH[6] = AH[9], LH[7] = 0, LH[8] = AH[2], LH[9] = AH[6], LH[10] = AH[10], LH[11] = 0, LH[12] = -(AH[0] * SH + AH[1] * hH + AH[2] * tH), LH[13] = -(AH[4] * SH + AH[5] * hH + AH[6] * tH), LH[14] = -(AH[8] * SH + AH[9] * hH + AH[10] * tH), LH[15] = 1, HH._viewVer = BH, LH
    }
    var zH = null;

    function CH(HH) {
      return HH._projFov === HH.fov && HH._projNear === HH.nearPlane && HH._projFar === HH.farPlane || (HH._projFov = HH.fov, HH._projNear = HH.nearPlane, HH._projFar = HH.farPlane, HH._projRev = (HH._projRev ?? 0) + 1), HH.worldMatrixVersion + (HH._projRev ?? 0)
    }

    function EH(HH, BH) {
      const LH = CH(HH);
      if (HH._projVer === LH && HH._projAspect === BH) return HH._projCache;
      const AH = HH._projCache;
      return null !== zH && HH.ortho ? zH(HH, BH, AH) : function(HH, BH, LH, AH, rH) {
        const SH = 1 / Math.tan(.5 * BH),
          hH = rH - AH;
        HH[0] = SH / LH, HH[5] = SH, HH[10] = -AH / hH, HH[11] = 1, HH[14] = rH * AH / hH
      }(AH, HH.fov, BH, HH.nearPlane, HH.farPlane), HH._projVer = LH, HH._projAspect = BH, AH
    }
    var XH = LH(45138);

    function GH(HH, BH, LH) {
      return HH._device.createBuffer({
        label: LH,
        size: (AH = BH, rH = 16, Math.ceil(AH / rH) * rH),
        usage: XH.e.UNIFORM | XH.e.COPY_DST
      });
      var AH, rH
    }
    var YH = LH(45204),
      uH = null;

    function QH(HH) {
      const BH = HH._device,
        LH = uH ??= new WeakMap;
      let AH = LH.get(BH);
      return AH || (AH = BH.createBindGroupLayout({
        label: "NQ",
        entries: [{
          binding: 0,
          visibility: XH.h.VERTEX | XH.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: XH.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), LH.set(BH, AH)), AH
    }

    function WH(HH, BH, LH) {
      const AH = HH._device,
        rH = GH(HH, BH.byteLength, LH);
      try {
        AH.queue.writeBuffer(rH, 0, BH.buffer, BH.byteOffset, BH.byteLength)
      } catch (SH) {
        throw rH.destroy(), SH
      }
      return rH
    }
    var MH = LH(45215),
      xH = new hH.i(1),
      vH = new hH.c(xH.buffer);

    function PH(HH) {
      let BH = 0;
      for (const LH of HH) BH += LH._lightVersion ?? 0;
      return BH
    }

    function TH(HH, BH) {
      HH.fill(0);
      let LH = 0;
      for (const AH of BH) {
        if (LH >= MH.e) break;
        AH._writeLightUbo && (AH._writeLightUbo(HH, 4 + 16 * LH), LH++)
      }
      xH[0] = LH, HH[0] = vH[0]
    }

    function UH(HH, BH) {
      let LH = BH._lightGpuState;
      const AH = 16 + 16 * MH.e * 4;
      if (LH && LH._byteSize === AH) return LH;
      const rH = !LH;
      LH?._buffer.destroy();
      const SH = new hH.c(AH / 4);
      return TH(SH, BH.lights), HH._applyLightFoOffset?.(SH, BH), LH = {
        _buffer: WH(HH, SH),
        _scratch: SH,
        iZ: PH(BH.lights) + (HH._lightFoVersion?.(BH) ?? 0),
        _listVersion: BH._lightListVersion ?? 0,
        _lightCount: BH.lights.length,
        _byteSize: AH
      }, BH._lightGpuState = LH, rH && BH._disposables.push((() => {
        BH._lightGpuState?._buffer.destroy(), BH._lightGpuState = void 0
      })), LH
    }

    function VH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const rH = BH;
      if (0 === AH && 16 === rH.length) return void HH.set(rH, LH);
      const SH = AH,
        hH = LH;
      HH[hH + 0] = rH[SH + 0], HH[hH + 1] = rH[SH + 1], HH[hH + 2] = rH[SH + 2], HH[hH + 3] = rH[SH + 3], HH[hH + 4] = rH[SH + 4], HH[hH + 5] = rH[SH + 5], HH[hH + 6] = rH[SH + 6], HH[hH + 7] = rH[SH + 7], HH[hH + 8] = rH[SH + 8], HH[hH + 9] = rH[SH + 9], HH[hH + 10] = rH[SH + 10], HH[hH + 11] = rH[SH + 11], HH[hH + 12] = rH[SH + 12], HH[hH + 13] = rH[SH + 13], HH[hH + 14] = rH[SH + 14], HH[hH + 15] = rH[SH + 15]
    }

    function OH(HH, BH, LH, AH, rH) {
      HH.fill(0);
      const SH = function(HH, BH) {
          const LH = CH(HH);
          if (HH._vpVer === LH && HH._vpAspect === BH) return HH._vpCache;
          const AH = HH._vpCache;
          return function(HH, BH, LH, AH, rH, SH) {
            const hH = LH[AH],
              tH = LH[AH + 1],
              zH = LH[AH + 2],
              CH = LH[AH + 3],
              EH = LH[AH + 4],
              XH = LH[AH + 5],
              GH = LH[AH + 6],
              YH = LH[AH + 7],
              uH = LH[AH + 8],
              QH = LH[AH + 9],
              WH = LH[AH + 10],
              MH = LH[AH + 11],
              xH = LH[AH + 12],
              vH = LH[AH + 13],
              PH = LH[AH + 14],
              TH = LH[AH + 15];
            let UH = rH[SH],
              VH = rH[SH + 1],
              OH = rH[SH + 2],
              bH = rH[SH + 3];
            HH[BH] = hH * UH + EH * VH + uH * OH + xH * bH, HH[BH + 1] = tH * UH + XH * VH + QH * OH + vH * bH, HH[BH + 2] = zH * UH + GH * VH + WH * OH + PH * bH, HH[BH + 3] = CH * UH + YH * VH + MH * OH + TH * bH, UH = rH[SH + 4], VH = rH[SH + 5], OH = rH[SH + 6], bH = rH[SH + 7], HH[BH + 4] = hH * UH + EH * VH + uH * OH + xH * bH, HH[BH + 5] = tH * UH + XH * VH + QH * OH + vH * bH, HH[BH + 6] = zH * UH + GH * VH + WH * OH + PH * bH, HH[BH + 7] = CH * UH + YH * VH + MH * OH + TH * bH, UH = rH[SH + 8], VH = rH[SH + 9], OH = rH[SH + 10], bH = rH[SH + 11], HH[BH + 8] = hH * UH + EH * VH + uH * OH + xH * bH, HH[BH + 9] = tH * UH + XH * VH + QH * OH + vH * bH, HH[BH + 10] = zH * UH + GH * VH + WH * OH + PH * bH, HH[BH + 11] = CH * UH + YH * VH + MH * OH + TH * bH, UH = rH[SH + 12], VH = rH[SH + 13], OH = rH[SH + 14], bH = rH[SH + 15], HH[BH + 12] = hH * UH + EH * VH + uH * OH + xH * bH, HH[BH + 13] = tH * UH + XH * VH + QH * OH + vH * bH, HH[BH + 14] = zH * UH + GH * VH + WH * OH + PH * bH, HH[BH + 15] = CH * UH + YH * VH + MH * OH + TH * bH
          }(AH, 0, EH(HH, BH), 0, tH(HH), 0), HH._vpVer = LH, HH._vpAspect = BH, AH
        }(AH, rH),
        hH = tH(AH),
        zH = AH.worldMatrix;
      VH(HH, SH, 0), VH(HH, hH, 16), BH.useFloatingOrigin ? (HH[32] = 0, HH[33] = 0, HH[34] = 0) : (HH[32] = zH[12], HH[33] = zH[13], HH[34] = zH[14]), HH[87] = BH.canvas.width;
      const XH = LH.imageProcessing;
      HH[76] = XH.exposure, HH[77] = XH.contrast, HH[78] = LH._envTextures?.lodGenerationScale ?? .8, HH[79] = +XH.toneMappingEnabled, HH[37] = BH.canvas.height
    }

    function bH(HH, BH) {
      return {
        _renderables: HH,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: BH
      }
    }

    function kH(HH, BH, LH) {
      HH.clr ??= !0;
      const rH = HH.rt._descriptor,
        SH = HH.depth?._descriptor,
        zH = {
          _colorFormat: rH.format,
          _depthStencilFormat: SH?.dFormat ?? rH.dFormat,
          _depthCompare: rH.depthCompare ?? SH?.depthCompare,
          _sampleCount: rH.samples
        },
        EH = {
          loadOp: "clear",
          storeOp: "store"
        },
        XH = {
          ...bH([], -1),
          name: HH.name,
          _config: HH,
          _ownsTargets: !HH.sharedRt,
          engine: BH,
          NQ: LH,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [EH]
          },
          _colorAttachment: EH,
          _sceneUBO: GH(BH, 368),
          _suData: new hH.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: zH,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (XH._disposed) throw new Error("RenderTask has been disposed.");
            XH._recordExplicit ? XH._recordExplicit(XH, !0) : IH(XH, !1 !== HH.autoMirror ? LH._renderables.slice() : XH._renderables, !0)
          },
          execute: () => function(HH, BH, LH) {
            if (!1 === HH.enabled) return 0;
            const AH = HH.NQ;
            ! function(HH, BH, LH) {
              const AH = HH.NQ;
              !1 !== HH._config.autoMirror && HH._lastVersion !== AH._renderableVersion && IH(HH, AH._renderables.slice());
              lH(HH, BH);
              const rH = HH._updateContext,
                SH = HH._config.cam ?? AH.camera;
              LH._colorFormat && (HH._config._skipClusteredLights || AH._clusteredLightUpdater?.(SH, rH.targetWidth, rH.targetHeight), function(HH, BH) {
                const LH = UH(HH, BH),
                  AH = PH(BH.lights) + (HH._lightFoVersion?.(BH) ?? 0),
                  rH = BH._lightListVersion ?? 0;
                AH === LH.iZ && rH === LH._listVersion && BH.lights.length === LH._lightCount || (LH.iZ = AH, LH._listVersion = rH, LH._lightCount = BH.lights.length, TH(LH._scratch, BH.lights), HH._applyLightFoOffset?.(LH._scratch, BH), HH._device.queue.writeBuffer(LH._buffer, 0, LH._scratch)), LH._buffer
              }(BH, AH));
              (function(HH, BH, LH, AH) {
                if (!AH) return;
                const rH = AH.viewport,
                  SH = HH._config.rt,
                  hH = (HH._config.cs ? BH.canvas.width / BH.canvas.height : SH._width / SH._height) * (rH ? rH.width / rH.height : 1),
                  tH = LH.fog,
                  zH = LH.imageProcessing,
                  EH = CH(AH),
                  XH = LH._envTextures,
                  GH = HH._sceneUboCacheKey;
                if (GH[0] === AH && GH[1] === tH && GH[2] === EH && GH[3] === hH && GH[4] === zH.exposure && GH[5] === zH.contrast && GH[6] === XH) return;
                GH[0] = AH, GH[1] = tH, GH[2] = EH, GH[3] = hH, GH[4] = zH.exposure, GH[5] = zH.contrast, GH[6] = XH;
                const YH = HH._suData;
                OH(YH, BH, LH, AH, hH);
                const uH = LH._sceneUboContributors;
                if (uH)
                  for (const CH of uH) CH(YH, LH);
                BH._device.queue.writeBuffer(HH._sceneUBO, 0, YH)
              })(HH, BH, AH, SH), rH.j_ = SH, HH._batchState?._reset(), KH(HH._opaqueBindings, rH), KH(HH._directBindings, rH), KH(HH._transparentBindings, rH), HH._batchState?._flush(BH),
                function(HH, BH) {
                  const LH = HH._transparentBindings;
                  if (LH.length <= 1 || !BH) return;
                  const AH = tH(BH);
                  for (const rH of LH) {
                    const HH = rH.renderable._worldCenter;
                    rH._sortDistance = HH ? HH[0] * AH[2] + HH[1] * AH[6] + HH[2] * AH[10] + AH[14] : 0
                  }
                  LH.sort(mH)
                }(HH, SH)
            }(HH, BH, LH);
            const rH = HH._colorAttachment,
              SH = HH._config;
            SH.rt._colorView && (SH.rt === AH.surface.scRT && (rH.view = SH.rt._colorView), rH.resolveTarget = SH.rst?._colorView ?? void 0, rH.clearValue = SH.clrColor ?? AH.clearColor, rH.loadOp = SH.clr ? "clear" : "load");
            if (HH._executeWithTransmission) return HH._executeWithTransmission(LH._sampleCount);
            const hH = BH._currentEncoder.beginRenderPass(HH._renderPassDescriptor),
              zH = fH(HH, hH);
            return hH.end(), zH
          }(XH, BH, zH),
          dispose() {
            if (XH._disposed) return;
            XH._disposed = !0;
            const BH = XH._pendingMeshes;
            BH && (BH.length = 0);
            for (const HH of XH._renderables) XH._retireRenderable?.(XH.engine, HH);
            XH._passes.length = XH._opaqueBindings.length = XH._directBindings.length = 0, XH._transparentBindings.length = XH._renderables.length = XH._ob.length = 0, XH._ownsTargets && ((0, AH.i)(HH.rt), (0, AH.i)(HH.rst)), HH.depth?._eager || (0, AH.i)(HH.depth);
            const LH = XH._sceneUBO;
            (0, YH.f)(XH.engine, (() => LH.destroy())), XH._batchState?._release(XH.engine), XH._batchState = void 0
          }
        };
      return XH
    }

    function mH(HH, BH) {
      return BH._sortDistance - HH._sortDistance || HH.renderable.order - BH.renderable.order
    }

    function oH(HH, BH) {
      return HH.renderable.order - BH.renderable.order
    }

    function IH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH._renderables,
        LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        rH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        SH = arguments.length > 4 ? arguments[4] : void 0;
      const hH = HH._config,
        tH = hH.rt,
        zH = HH._batchState,
        CH = bH(BH, HH.NQ._renderableVersion);
      if (LH) {
        const BH = (BH, LH) => {
          BH && (LH || HH._ownsTargets || BH._eager) && (0, AH.g)(BH, HH.engine)
        };
        BH(tH), tH._descriptor.samples > 1 && BH(hH.rst), BH(hH.depth, !0)
      }
      const {
        _opaqueBindings: EH,
        _directBindings: XH,
        _transparentBindings: GH
      } = CH;
      try {
        for (const LH of BH) {
          const BH = LH.bind(HH.engine, HH._targetSignature);
          CH._batchState = HH._targetSignature._collectBatches?.(CH._batchState, BH), LH.isTransparent || LH._transmissive ? GH.push(BH) : LH._direct ? XH.push(BH) : EH.push(BH)
        }
        EH.sort(oH), XH.sort(oH), LH && lH(HH, HH.engine, !1)
      } catch (YH) {
        throw CH._batchState?._release(void 0, SH ?? [zH]), YH
      }
      return LH && (! function(HH, BH) {
        const LH = HH._config,
          AH = HH._colorAttachment;
        AH.view = BH._colorView, HH._renderPassDescriptor.colorAttachments = BH._colorView ? [AH] : [];
        const rH = LH.depth ?? BH,
          SH = rH._depthView;
        let hH;
        if (SH) {
          const HH = rH._descriptor,
            BH = (LH.depth ? rH._eager : !1 === LH.depthClear) ? "load" : "clear";
          hH = {
            view: SH,
            depthClearValue: HH.depthClearValue ?? 0,
            depthLoadOp: BH,
            depthStoreOp: "store"
          }, HH.dFormat?.includes("stencil") && (hH.stencilClearValue = 0, hH.stencilLoadOp = BH, hH.stencilStoreOp = "store")
        }
        HH._renderPassDescriptor.depthStencilAttachment = hH
      }(HH, tH), HH._updateContext.targetWidth = tH._width, HH._updateContext.targetHeight = tH._height), rH && (Object.assign(HH, CH), zH?._release(HH.engine, [CH._batchState])), CH
    }

    function fH(HH, BH) {
      const LH = HH.engine,
        AH = HH._config,
        SH = AH.rt,
        hH = HH.NQ,
        tH = HH._opaqueBindings,
        zH = HH._ob,
        CH = HH._sceneBG;
      if (function(HH, BH, LH, AH) {
          const rH = BH?.viewport;
          if (!rH) return;
          const SH = Math.floor(rH.x * LH),
            hH = Math.floor((1 - rH.y - rH.height) * AH),
            tH = Math.ceil((rH.x + rH.width) * LH) - SH,
            zH = Math.ceil((1 - rH.y) * AH) - hH;
          HH.setViewport(SH, hH, tH, zH, 0, 1), HH.setScissorRect(SH, hH, tH, zH)
        }(BH, AH.cam ?? hH.camera, SH._width, SH._height), BH.setBindGroup(0, CH), HH._lastVis !== rH.d || !zH.length) {
        const BH = SH._descriptor,
          AH = LH._device.createRenderBundleEncoder({
            colorFormats: BH.format ? [BH.format] : [],
            depthStencilFormat: HH._targetSignature._depthStencilFormat,
            sampleCount: BH.samples
          });
        AH.setBindGroup(0, CH), cH(AH, tH, LH), zH[0] = AH.finish(), HH._lastVis = rH.d
      }
      let EH = tH.length;
      return BH.executeBundles(zH), BH.setBindGroup(0, CH), EH += cH(BH, HH._directBindings, LH), EH += cH(BH, HH._transparentBindings, LH), EH
    }

    function lH(HH, BH) {
      let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const AH = UH(BH, HH.NQ)._buffer;
      if (AH === HH._lightsUBO) return;
      const rH = BH._device.createBindGroup({
        layout: QH(BH),
        entries: [{
          binding: 0,
          resource: {
            buffer: HH._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: AH
          }
        }]
      });
      HH._lightsUBO = AH, HH._sceneBG = rH, LH && (HH._ob = [])
    }

    function KH(HH, BH) {
      for (const LH of HH) LH.update?.(BH)
    }

    function cH(HH, BH, LH) {
      let AH = null,
        rH = 0;
      for (const SH of BH) {
        const BH = SH.renderable.mesh;
        BH && !1 === BH.visible || (SH.pipeline !== AH && (HH.setPipeline(SH.pipeline), AH = SH.pipeline), rH += SH.draw(HH, LH))
      }
      return rH
    }

    function eH(HH) {
      const BH = HH._materialSwapQueue;
      if (!BH[0] || HH._runtimeBuilds?.w) return;
      let AH, rH, SH;
      const hH = HH._renderables;
      for (const LH of BH) {
        const BH = LH.material;
        if (!BH) continue;
        const tH = LH._runtimeThinBuild;
        if (tH) {
          rH = tH(HH, LH, rH);
          continue
        }
        const zH = HH._groups.get(BH._buildGroup),
          CH = zH?.r;
        if (!CH) {
          (SH ??= []).push(LH);
          continue
        }
        if (zH._w?.(LH)) {
          (SH ??= []).push([LH, BH]);
          continue
        }
        const EH = HH._meshDisposables.get(LH);
        EH && (HH._meshDisposables.delete(LH), (0, YH.f)(HH.surface.engine, (() => EH.forEach((HH => HH())))));
        const XH = zH.o;
        let GH;
        for (let HH = hH.length; HH--;) hH[HH].mesh === LH && (GH = hH.splice(HH, 1)[0]);
        BH._csmGen = -~BH._csmGen;
        const uH = CH(HH, LH);
        if (XH) {
          const HH = XH.indexOf(GH);
          HH < 0 ? XH.push(uH) : XH[HH] = uH
        }
        AH = hH.push(uH)
      }
      if (AH && (hH.sort(((HH, BH) => HH.order - BH.order)), HH._renderableVersion++, HH._materialEpoch++), BH.length = 0, !SH) return rH;
      const tH = SH;
      return LH.e(671).then((() => LH(64216))).then((BH => {
        let {
          C: LH
        } = BH;
        return LH(HH, tH, rH)
      }), (BH => {
        const LH = HH._runtimeBuilds;
        LH ? LH._x(BH) : console.error(BH)
      }))
    }
    var qH = null;

    function gH(HH, BH) {
      const LH = HH.engine,
        rH = {
          _kind: "NQ",
          surface: HH,
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
            LH.useFloatingOrigin && rH.camera && !rH.camera._useFloatingOrigin && (rH.camera._useFloatingOrigin = !0, rH.camera._viewVer = -1, rH.camera._vpVer = -1);
            const HH = rH.fixedDeltaMs > 0 ? rH.fixedDeltaMs : LH._currentDelta,
              BH = LH._currentEncoder;
            let AH = 0;
            for (const LH of rH._beforeRender) LH(HH);
            rH._materialSwapQueue.length && eH(rH);
            for (const SH of rH._prePasses) AH += SH.execute(BH, LH);
            for (const SH of rH._uniformUpdaters) SH.update(LH);
            rH._drawCallsPre = AH
          },
          _record: () => rH._frameGraph.execute(),
          _resize() {
            rH._frameGraph.build()
          }
        },
        hH = function() {
          const HH = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let BH = 0; BH < HH._tasks.length; BH++) SH(HH, HH._tasks[BH]);
              for (const BH of HH._tasks)
                for (const HH of BH._passes) HH._initialize()
            },
            execute() {
              let BH = 0;
              for (const LH of HH._tasks)
                if (!1 !== LH.executionEnabled)
                  if (LH.execute) BH += LH.execute();
                  else
                    for (const HH of LH._passes) BH += HH._execute();
              return BH
            },
            dispose() {
              for (const BH of HH._tasks) BH.dispose();
              HH._tasks.length = 0, HH._currentProcessedTask = null
            }
          };
          return HH
        }();
      if (rH._frameGraph = hH, !1 !== BH?.defaultRenderTask) {
        const BH = HH.msaaSamples > 1,
          SH = BH ? (0, AH.d)({
            lbl: "scene-color",
            format: HH.format,
            dFormat: "depth24plus-stencil8",
            samples: HH.msaaSamples,
            size: HH
          }) : HH.scRT,
          tH = BH ? void 0 : (0, AH.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: HH
          });
        ! function(HH, BH) {
          HH._tasks.push(BH)
        }(hH, kH({
          name: "NQ",
          rt: SH,
          rst: BH ? HH.scRT : void 0,
          depth: tH
        }, LH, rH))
      }
      return rH._disposables.push((() => hH.dispose())), rH
    }
    async function NH(HH) {
      const BH = HH;
      for (BH._built || (BH._materialSwapQueue.length = 0); BH._deferredBuilders.length;) {
        const HH = BH._deferredBuilders.splice(0);
        await Promise.all(HH.map((HH => HH())))
      }
      await eH(BH), qH?.get(BH)?.() || (BH._runtimeBuilds?._e(), BH._renderableVersion++, BH._built = !0), await (BH._rebuildHook?.(BH))
    }
    var RH = null;
    async function jH(HH) {
      const BH = HH,
        AH = BH.surface;
      (0, rH.k)(AH, BH) || (await NH(HH), BH._renderables.sort(nH), await Promise.all(BH._frameGraph._tasks.map((HH => HH._preload?.()))), RH && await RH(BH), BH._frameGraph.build(), AH._renderingContexts[0] && (await LH.e(669).then((() => LH(64206)))).configureSwapchainOverlayScene(AH, BH), qH?.get(BH)?.() || (0, rH.o)(AH, BH))
    }
    var nH = (HH, BH) => HH.order - BH.order
  },
  45174: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => EH
    });
    var AH = LH(45135),
      rH = LH(45138),
      SH = LH(45142),
      hH = LH(45147),
      tH = LH(45153),
      zH = LH(45157);

    function CH(HH, BH, LH) {
      let tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (BH < 1 || LH < 1) && (0, AH.c)(676, BH, LH);
      const CH = HH._device,
        EH = tH.mipMaps ?? !1,
        XH = tH.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        GH = EH ? (0, zH.b)(BH, LH) : 1,
        YH = CH.createTexture({
          size: {
            width: BH,
            height: LH
          },
          format: XH,
          mipLevelCount: GH,
          usage: rH.k.TEXTURE_BINDING | rH.k.COPY_DST | rH.k.RENDER_ATTACHMENT
        }),
        uH = {
          addressModeU: tH.addressModeU ?? "clamp-to-edge",
          addressModeV: tH.addressModeV ?? "clamp-to-edge",
          minFilter: tH.minFilter ?? "linear",
          magFilter: tH.magFilter ?? "linear",
          mipmapFilter: EH ? "linear" : "nearest"
        },
        QH = (0, hH.e)(HH, uH),
        WH = {
          texture: YH,
          view: YH.createView(),
          sampler: QH,
          width: BH,
          height: LH
        };
      return (0, SH.d)(WH), HH._dlr && HH._dlr.t(WH, {
        kind: "dynamic",
        width: BH,
        height: LH,
        format: XH,
        levels: GH,
        samplerDesc: uH,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), WH
    }

    function EH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rH = AH.invertY ?? !0,
        SH = AH.premultiplyAlpha ?? !1;
      HH._device.queue.copyExternalImageToTexture({
        source: LH,
        flipY: rH
      }, {
        texture: BH.texture,
        premultipliedAlpha: SH
      }, [BH.width, BH.height]);
      const hH = BH._recoverySource;
      hH && "dynamic" === hH.kind && (hH.source = LH, hH.flipY = rH, hH.premultipliedAlpha = SH), BH.texture.mipLevelCount > 1 && (0, tH.generateMipmaps)(HH, BH.texture)
    }
  },
  45168: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(45135),
      rH = LH(45138),
      SH = LH(45142),
      hH = LH(45147),
      tH = LH(45157);
    async function zH(HH, BH) {
      let zH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [CH, EH] = function(HH) {
        const BH = HH,
          LH = [
            [BH.displayWidth, BH.displayHeight],
            [BH.videoWidth, BH.videoHeight],
            [BH.naturalWidth, BH.naturalHeight],
            [BH.width, BH.height]
          ];
        for (const [AH, rH] of LH)
          if (void 0 !== AH && void 0 !== rH && Number.isInteger(AH) && Number.isInteger(rH) && AH > 0 && rH > 0) return [AH, rH];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(BH), [XH, GH] = function(HH, BH, LH) {
        if (void 0 === LH) return [HH, BH];
        if (!Number.isInteger(LH) || LH < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${LH})`);
        if (Math.max(HH, BH) <= LH) return [HH, BH];
        const AH = LH / Math.max(HH, BH);
        return HH >= BH ? [LH, Math.max(1, Math.round(BH * AH))] : [Math.max(1, Math.round(HH * AH)), LH]
      }(CH, EH, zH.maxDimension), YH = zH.mipMaps ?? !0, uH = zH.premultiplyAlpha ?? !1;
      let QH = BH,
        WH = null;
      const MH = {
        texture: null
      };
      try {
        XH === CH && GH === EH || (WH = await createImageBitmap(BH, {
          resizeWidth: XH,
          resizeHeight: GH,
          resizeQuality: "high",
          premultiplyAlpha: uH ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), QH = WH);
        const xH = HH._device,
          vH = zH.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          PH = YH ? (0, tH.b)(XH, GH) : 1,
          TH = PH > 1 ? (await Promise.resolve().then((() => LH(45153)))).generateMipmaps : null,
          UH = {
            addressModeU: zH.addressModeU ?? "repeat",
            addressModeV: zH.addressModeV ?? "repeat",
            minFilter: zH.minFilter ?? "linear",
            magFilter: zH.magFilter ?? "linear",
            mipmapFilter: YH ? "linear" : "nearest"
          };
        UH.maxAnisotropy = "linear" === UH.minFilter && "linear" === UH.magFilter && "linear" === UH.mipmapFilter ? 4 : 1;
        const VH = zH.invertY ?? !0,
          OH = async BH => {
            let LH;
            xH.pushErrorScope("validation"), xH.pushErrorScope("out-of-memory");
            let SH = null;
            try {
              const LH = MH.texture = xH.createTexture({
                size: {
                  width: XH,
                  height: GH
                },
                format: vH,
                mipLevelCount: PH,
                usage: rH.k.TEXTURE_BINDING | rH.k.COPY_DST | rH.k.RENDER_ATTACHMENT
              });
              xH.queue.copyExternalImageToTexture({
                source: BH,
                flipY: VH
              }, {
                texture: LH,
                premultipliedAlpha: uH
              }, {
                width: XH,
                height: GH
              }), TH && TH(HH, LH), SH = (0, hH.e)(HH, UH)
            } catch (YH) {
              LH = YH
            }
            const [tH, zH] = await Promise.all([xH.popErrorScope(), xH.popErrorScope()]);
            if (LH) throw LH;
            const CH = zH ?? tH;
            if (CH) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${CH.message}`, {
              cause: CH
            });
            const EH = MH.texture;
            return EH && SH || (0, AH.c)(677), {
              texture: EH,
              view: EH.createView(),
              sampler: SH,
              width: XH,
              height: GH
            }
          }, bH = await (HH._dlr?.x(QH, XH, GH, vH, PH, UH, VH, uH, OH)) ?? await OH(QH);
        return (0, SH.d)(bH), bH
      } catch (xH) {
        throw MH.texture?.destroy(), xH
      } finally {
        WH?.close()
      }
    }
  },
  45153: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      generateMipmaps: () => YH,
      recordMipmaps: () => uH
    });
    var AH = LH(45138),
      rH = LH(45147),
      SH = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var hH = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      tH = null,
      zH = null,
      CH = null,
      EH = null,
      XH = null;

    function GH(HH) {
      const BH = HH._device;
      BH !== XH && (tH?.clear(), tH = null, zH = null, CH = null, EH = null, XH = null, XH = BH), zH ??= BH.createShaderModule({
        code: hH
      }), CH ??= function(HH) {
        return (0, rH.e)(HH, SH)
      }(HH), EH ??= BH.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: AH.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: AH.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function YH(HH, BH, LH) {
      const AH = HH._device,
        rH = AH.createCommandEncoder();
      uH(HH, BH, rH, LH), AH.queue.submit([rH.finish()])
    }

    function uH(HH, BH, LH, AH) {
      if (BH.mipLevelCount <= 1) return;
      const rH = HH._device,
        SH = function(HH, BH) {
          const LH = HH._device;
          GH(HH), tH ??= new Map;
          let AH = tH.get(BH);
          return AH || (AH = LH.createRenderPipeline({
            layout: LH.createPipelineLayout({
              bindGroupLayouts: [EH]
            }),
            vertex: {
              module: zH,
              entryPoint: "vs"
            },
            fragment: {
              module: zH,
              entryPoint: "fs",
              targets: [{
                format: BH
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), tH.set(BH, AH)), AH
        }(HH, BH.format),
        hH = null != AH ? {
          dimension: "2d",
          baseArrayLayer: AH,
          arrayLayerCount: 1
        } : {};
      for (let tH = 1; tH < BH.mipLevelCount; tH++) {
        const HH = BH.createView({
            baseMipLevel: tH - 1,
            mipLevelCount: 1,
            ...hH
          }),
          AH = BH.createView({
            baseMipLevel: tH,
            mipLevelCount: 1,
            ...hH
          }),
          zH = rH.createBindGroup({
            layout: EH,
            entries: [{
              binding: 0,
              resource: HH
            }, {
              binding: 1,
              resource: CH
            }]
          }),
          XH = LH.beginRenderPass({
            colorAttachments: [{
              view: AH,
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
        XH.setPipeline(SH), XH.setBindGroup(0, zH), XH.draw(3), XH.end()
      }
    }
  },
  45157: (HH, BH, LH) => {
    function AH(HH, BH) {
      return Math.floor(Math.log2(Math.max(HH, BH))) + 1
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  45132: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      e: () => EH
    });
    var AH = LH(45135),
      rH = LH(45138),
      SH = LH(45142),
      hH = LH(45147),
      tH = LH(45153),
      zH = LH(45157);

    function CH(HH, BH, LH, tH) {
      let CH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (BH < 1 || LH < 1 || tH < 1) && (0, AH.c)(722, BH, LH, tH);
      const EH = HH._device,
        XH = CH.mipMaps ?? !0,
        GH = CH.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        YH = EH.createTexture({
          size: {
            width: BH,
            height: LH,
            depthOrArrayLayers: tH
          },
          dimension: "2d",
          format: GH,
          mipLevelCount: XH ? (0, zH.b)(BH, LH) : 1,
          usage: rH.k.TEXTURE_BINDING | rH.k.COPY_DST | rH.k.RENDER_ATTACHMENT
        }),
        uH = (0, hH.e)(HH, {
          addressModeU: CH.addressModeU ?? "repeat",
          addressModeV: CH.addressModeV ?? "repeat",
          minFilter: CH.minFilter ?? "linear",
          magFilter: CH.magFilter ?? "linear",
          mipmapFilter: XH ? "linear" : "nearest"
        }),
        QH = {
          texture: YH,
          view: YH.createView({
            dimension: "2d-array"
          }),
          sampler: uH,
          width: BH,
          height: LH,
          layers: tH
        };
      return (0, SH.d)(QH), QH
    }

    function EH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (LH < 0 || LH >= BH.layers || (0 | LH) !== LH) && (0, AH.c)(723, BH.layers, LH);
      const hH = SH.invertY ?? !0,
        zH = SH.premultiplyAlpha ?? !1;
      HH._device.queue.copyExternalImageToTexture({
        source: rH,
        flipY: hH
      }, {
        texture: BH.texture,
        origin: [0, 0, LH],
        premultipliedAlpha: zH
      }, [BH.width, BH.height, 1]), BH.texture.mipLevelCount > 1 && (0, tH.generateMipmaps)(HH, BH.texture, LH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);